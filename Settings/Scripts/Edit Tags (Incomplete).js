// module.exports = async (params) => {
// 	const {quickAddApi: {inputPrompt, suggester}} = params;
// 	const {update, getPropertiesInFile} = app.plugins.plugins["metaedit"].api;
// 	const dailyJournalFilePath = `bins/daily/${date}.md`;

// 	const propertiesInDailyJournal = await getPropertiesInFile(dailyJournalFilePath);
// 	const targetProp = await suggester(propertiesInDailyJournal.map(p => p.key), propertiesInDailyJournal);

// 	const newPropertyValue = await inputPrompt(`Log ${targetProp.key}`, targetProp.content, targetProp.content);

// 	await update(targetProp.key, newPropertyValue, dailyJournalFilePath);
// }

// You have to export the function you wish to run.
// QuickAdd automatically passes a parameter, which is an object with the Obsidian app object
// and the QuickAdd API (see description further on this page).
module.exports = async (params) => {
        console.log("🚀 ~ file: Edit Tags.js ~ line 18 ~ module.exports= ~ params", params)
	// Object destructuring. We pull inputPrompt out of the QuickAdd API in params.
	const {app, quickAddApi: {inputPrompt}} = params;
	// Here, I pull in the update function from the MetaEdit API.
	const {update} = app.plugins.plugins["metaedit"].api;
	// This opens a prompt with the header "📖 Book Name". val will be whatever you enter.
	const val = await inputPrompt("📖 Book Name");
	// Invoke the MetaEdit update function on the current file
        console.log("🚀 ~ file: Edit Tags.js ~ line 27 ~ module.exports= ~ app.fileManager.currentFile.path", params)
	await update('Book', val, app.fileManager.currentFile.path);
}

module.exports = async function editTags(params) {
	const {app, quickAddApi: {suggester, yesNoPrompt}} = params;
	const allTags = Object.keys(app.metadataCache.getTags());
	const tag = await suggester(allTags, allTags);
	if (!tag) return;
	const shouldMoveNested = await yesNoPrompt("Should I move nested tags, too?", `If you say no, I'll only move tags that are strictly equal to what you've chosen. If you say yes, I'll move tags that are nested under ${tag}.`);

	const cache = app.metadataCache.getCachedFiles();
	let filesToMove = [];

	cache.forEach(key => {
		if (key.contains("template")) return;
		const fileCache = app.metadataCache.getCache(key);
		let hasFrontmatterCacheTag, hasTag;

		if (!shouldMoveNested) {
			hasFrontmatterCacheTag = fileCache.frontmatter?.tags && fileCache.frontmatter?.tags?.some(t => t === tag.replace('#', ''));
			hasTag = fileCache?.tags?.some(t => t.tag === tag);
		} else {
			hasFrontmatterCacheTag = fileCache.frontmatter?.tags && fileCache.frontmatter?.tags?.some(t => t.contains(tag.replace('#', '')));
			hasTag = fileCache?.tags?.some(t => t.tag.contains(tag));
		}
		if (hasFrontmatterCacheTag || hasTag) filesToMove.push(key);
	});

	const folders = app.vault.getAllLoadedFiles().filter(f => f.children).map(f => f.path);
	const targetFolder = await suggester(folders, folders);
	if (!targetFolder) return;

	for (const file of filesToMove) {
		const tfile = app.vault.getAbstractFileByPath(file);
		await app.fileManager.renameFile(tfile, `${targetFolder}/${tfile.name}`);
	}
}