---
---
# Concepts

<%*
concepts = await tp.system.prompt("Related Concepts?", "Type Comma Separated Concepts...")
tR = "**Related To:** " + concepts.split(", ").map(string => `[[${string}]]`).join(", ")
%>
