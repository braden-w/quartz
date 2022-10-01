---
aliases: How To Remove Strings from Git and GitHub
tags:
 - On/Software_Engineering/Security
 - Type/Guide
title: How to Remove Keys From Git and GitHub
date: "2022-08-19"
date modified: "2022-08-19"
---

# How to Remove Keys From Git and GitHub
Create a file called replacements.txt in the root of the project
```txt
AUTH_TOKEN=import.meta.env.VITE_AUTH_TOKEN
```
then paste the following:
```bash
git filter-repo --replace-text replacements.txt --force
git push --all --force
````

# References
- (References:: [Git Clean, Git Remove file from commit - Cheatsheet - GitGuardian Blog](https://blog.gitguardian.com/rewriting-git-history-cheatsheet/))
