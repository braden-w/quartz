// Source: https://github.com/Taitava/obsidian-shellcommands/blob/ac51071a5891cfae84eaf22f1566c1cc018c9543/src/variables/VariableHelpers.ts#L84
function getAllTags(app) {
  const dv = app.plugins.plugins["dataview"].api;
  let tags = [];
  for (let tag of dv.pages().file.tags) {
    if (tags.indexOf(tag) == -1) {
      tags.push(tag);
    }
  }
  return tags.sort();
}

// Source: https://forum.obsidian.md/t/multi-select-dropdown-insert-multiple-attributes/3231
// Returns an array of responses
async function tagsDropdown({ tp, app, filterFunction, limit }) {
  // Configuration start
  const question = "Your tags for today?";
  const checkMark = "✅ ";
  // Configuration end

  let tags = getAllTags(app);
  // Suggestion is all tags matching startsWith
  let suggestions = tags.filter(filterFunction);
  suggestions = ["Done", ...suggestions];
  let values = suggestions;

  // Create object with suggestions and values arrays
  const config = {
    suggestions: suggestions,
    values: values,
    responses: []
  };

  let response;
  while (response !== "Done") {
    response = await tp.system.suggester(config.suggestions, config.values, true, question, limit);
    if (response !== "Done") {
      let rIndex = config.responses.indexOf(response);
      if (rIndex > -1) {
        config.responses.splice(rIndex, 1);
      } else {
        config.responses.push(response);
      }
      let vIndex = config.values.indexOf(response);
      let suggestion = config.suggestions[vIndex];
      if (suggestion.startsWith(checkMark)) {
        config.suggestions[vIndex] = suggestion.replace(checkMark, "");
      } else {
        config.suggestions[vIndex] = checkMark + suggestion;
      }
    }
  }

  return config.responses;
}

async function breakdownMarkdownLink(clipboard) {
  const fullLinkOnlyRegex = /^\[(.+)\]\((https?:\/\/.+)\)$/;
  const match = clipboard.match(fullLinkOnlyRegex);
  if (match) {
    // Extract the title and link
    const [link, linkText, linkURL] = match;
    return { link, linkText, linkURL };
  }
  return null;
}

async function generateTemplate(tp) {
  const clipboard = await tp.system.clipboard();
  async function generateTitle() {
    let title = tp.file.title;
    if (title.startsWith("Untitled")) {
      let linkText = (await breakdownMarkdownLink(clipboard))?.linkText ?? clipboard;
      // Replace all instances of "|" or ":" or "/" or "\" with "-"
      if (linkText) linkText = linkText.replace(/[|:\\/]/g, "-");
      title = await tp.system.prompt("Title", linkText ?? "Type Title...", true);
      await tp.file.rename(`${title}`);
    }
    return title;
  }

  const title = await generateTitle();
  const tagFilter = tag => tag.startsWith("#On") || tag.startsWith("#Type");
  const topics = await tagsDropdown({
    tp,
    app,
    filterFunction: tagFilter,
    limit: 50
  });
  const topicsSplit = topics.map(string => ` - ${string}`).join("\n");
  return `---
tags:
${topicsSplit}
---

# ${title}

# References
- (References:: ${(await breakdownMarkdownLink(clipboard))?.link})`;
}

module.exports = generateTemplate;
