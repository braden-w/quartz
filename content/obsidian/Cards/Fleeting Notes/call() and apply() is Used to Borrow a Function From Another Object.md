---
date: "2022-06-09"
date modified: "2022-06-15"
title: call() and apply() is Used to Borrow a Function From Another Object
---

# call() and apply() is Used to Borrow a Function From Another Object
```js
const person = {
	firstname: "John",
	lastname: "Doe",
	getFullName: function(){
		return this.firstname + this.lastname;	
	}
}

const person2 = {
	fristname: "Jane",
	lastname: "Doe"
}

console.log(person.getFullName.call(person2));
console.log(person.getFullName.apply(person2)); //does the same thing, just expects subsequent args as an array instead of ...
```
