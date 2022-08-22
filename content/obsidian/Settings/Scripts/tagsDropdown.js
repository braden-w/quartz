// Source: https://github.com/Taitava/obsidian-shellcommands/blob/ac51071a5891cfae84eaf22f1566c1cc018c9543/src/variables/VariableHelpers.ts#L84
function getAllTags(app) {
	const dv = app.plugins.plugins["dataview"].api;
	let tags = []
	for (let tag of dv.pages().file.tags) {
		if (tags.indexOf(tag) == -1) {
			tags.push(tag)
		}
	}
	return tags.sort()
}

// Source: https://forum.obsidian.md/t/multi-select-dropdown-insert-multiple-attributes/3231
async function tagsDropdown(tp, app) {
	// Configuration start
	const question = "Your tags for today?";
	const checkMark = "✅ ";
	const searchTerm = "## Tags";
	// Configuration end

	// Check if there is a line with the searchTerm, if so put the cursor in the following line.
	const cm = app.workspace.activeLeaf.view.editor;
	const count = cm.lineCount();
	let line;
	for (let i = 0; i < count; i++) {
		line = cm.getLine(i + 1);
		if (line.includes(searchTerm)) {
			cm.setCursor({line: i + 2, ch: 0});
			break;
		}
	}

	// Collect all notes with the tag "Meta". Using DataViewJs for this.
	const dv = app.plugins.plugins["dataview"].api;
	let tags = getAllTags(app);
	let suggestions = tags.map(tag => tag);
	suggestions = ["Done", ...suggestions];
	let values = tags
	values = ["Done", ...values];

	// Create object with suggestions and values arrays
	const config = {
		"suggestions": suggestions,
		"values": values,
		"responses": []
	};

	let response;
	while (response !== "Done") {
		response = await tp.system.suggester(config.suggestions, config.values, true, question);
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

	// console.log(config);
	let result = config.responses.join(", ");
	return result
}

module.exports = tagsDropdown