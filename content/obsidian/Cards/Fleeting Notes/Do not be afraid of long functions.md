---
aliases: 
date: "2022-09-19"
date modified: "2022-09-19"
---

# Do not be afraid of long functions
It's often tantalizing to write code like the left:

```js
function myFunc() {
	doStuff();
	doMoreStuff();
	thenThis();
	then That();
}
```

instead, consider writing the following:

```js
function myFunc() {
// do stuff
...
// do more stuff
...
// then this
...
// then that
...
}
```

The first is an example of [[Don't overabstract code|overabstracting code]].
