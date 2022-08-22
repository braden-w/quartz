---
title: Vault Wide Dataview 2
date: "2022-06-29"
date modified: "2022-06-29"
---

# Vault Wide Dataview 2
```dataviewjs
const {createButton} = app.plugins.plugins["buttons"]
const {update} = app.plugins.plugins['metaedit'].api

const defer = async (file, key) => {
    const value = await app.plugins.plugins['templater-obsidian'].templater.functions_generator.internal_functions.modules_array[4].static_functions.get('prompt')("What Date")
	console.log(app.plugins.plugins['templater-obsidian'])
    const date = app.plugins.plugins['nldates-obsidian'].parseDate(value).moment.format("YYYY-MM-DD")
    await update(key, date, file)
}

dv.table(
	["Mark Done", "Done", "Name", "Date", "Button"],
	dv.pages("#Gaming").map(t => [
		createButton({app, el: this.container, args: {name: "Done!"}, clickOverride: {click: update, params: ['Status', 'Completed', t.file.path]}}),
		t['done'],
		t.file.link,
		t['date'],
		createButton({app, el: this.container, args: {name: "Change date"}, clickOverride: {click: defer, params: [t.file.path, 'date']}})
		]
	)
)
		
		```
