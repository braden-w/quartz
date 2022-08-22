---
tags:
- Type/Source/Reference
- On/Coding
date: "2022-06-16"
date modified: "2022-06-23"
title: Regex Snippets
---

# Regex Snippets

## Daily Notes
```regex
# ([0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9])
```

```regex
# [[$1]]
```

## Move Tags to Bottom
```regex
^\*\*Related To:\*\*(.*), (.*)$
```

```regex
**Related To:**$1$2\n
```

## Concept to Tags
```regex
^\*\*Related To:\*\*(.*), \[\[Quotes\]\](.*)$
```

```regex
**Related To:**$1$2\n
```

## Move Tags Like to Frontmatter
```regex
((.|\n)*)^([a-z]*)$\n((.|\n)*)
```
with
```regex
---\ntags: Type/$3\n---\n$1$4
```

## Turn **Related To** and Links into **Related To** and Tags
```regex
(\*\*Related To:\*\*.*), \[\[(\w+)\]\]
```
to
```regex
$1 $2
```
and
```regex
(\*\*Related To:\*\*.*) \[\[(\w*)(\s*)(\w*)\]\]
```
to
```regex
$1 $2_$4
```
