module.exports = async function moveFilesWithTag(params) {
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
			hasFrontmatterCacheTag = Array.isArray(fileCache.frontmatter?.tags) && fileCache.frontmatter?.tags?.some(t => t === tag.replace('#', ''));
			hasTag = fileCache?.tags?.some(t => t.tag === tag);
		} else {
			hasFrontmatterCacheTag = Array.isArray(fileCache.frontmatter?.tags) && fileCache.frontmatter?.tags?.some(t => t.contains(tag.replace('#', '')));
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