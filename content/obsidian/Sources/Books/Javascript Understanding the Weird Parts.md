---
date: "2022-06-09"
date modified: "2022-06-15"
title: 'Javascript: Understanding the Weird Parts'
---

# Javascript: Understanding the Weird Parts
- Javascript goes up the execution context if it can't find stuff
- Editing the prototype object to modify default behavior
- Example
	```js
	ObjectToModify.prototype.__ = function(){}
	```
- Classes vs. [[Object Literal Notation]]
- [[bind() is Used to Modify Where *this* Refers to in a Function]]
- [[call() and apply() is Used to Borrow a Function From Another Object]]
