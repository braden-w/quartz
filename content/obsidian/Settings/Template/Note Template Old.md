---
---
<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) { 
	title = await tp.system.prompt("Title", "Type Title…");
	await tp.file.rename(`${title}`);
}
%>

<%*
topics = await tp.system.prompt("Related Topics?", "Type Comma Separated Topics…")
topicsSplit = topics.split(", ").map(string => `  - On/${string}`).join("\n")
const sources = ['Article', 'Book', 'Call', 'Course', 'Derived', 'Meeting', 'Original', 'Podcast', 'Video']
type = await tp.system.suggester(sources, sources, false, 'Derived')
typesSplit = type.split(", ").map(string => `  - Source/${string}`).join("\n")
tR = `---
tags:
${topicsSplit}
${typesSplit}
---

# ${title}`
%>

<% tp.file.cursor(1) %>
