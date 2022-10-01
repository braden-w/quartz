---
tags:

title: Orphanage
date: "2022-08-30"
date modified: "2022-08-30"
---

# Orphanage
```dataview
list
from "" and -#emancipated
where !file.inlinks and !file.outlinks and !file.tags and file.name != [[]].file.name
sort file.name ASC
```

# References
- (References:: [How to build an orphanage using the dataview plugin : ObsidianMD](https://www.reddit.com/r/ObsidianMD/comments/wznc3l/how_to_build_an_orphanage_using_the_dataview/))
