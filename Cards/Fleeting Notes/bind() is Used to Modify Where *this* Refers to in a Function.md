---
date: "2022-06-09"
date modified: "2022-06-15"
title: bind() is Used to Modify Where *this* Refers to in a Function
---

# bind() is Used to Modify Where *this* Refers to in a Function
```js
const person = {
	firstname: "John",
	lastname: "Doe",
	getFullName: function(){
		return this.firstname + this.lastname;	
	}
}

const logName = function()
{
console.log("Logged: " + this.getFullName());
}.bind(person)

logName()
```
