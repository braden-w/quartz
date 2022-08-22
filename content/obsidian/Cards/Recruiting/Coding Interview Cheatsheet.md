---
date: "2022-06-09"
date modified: "2022-06-15"
title: Coding Interview Cheatsheet
---

# Coding Interview Cheatsheet

# About Me
- Use their name
- Sophomore at Yale University studying Ethics, Politics, & Economics (encapsulate single)
- I focus on problems to solve
- Summer, Metaverse Aligned Company in Series B funding, seeking to increase its $20 mil funding + Software Engineering
- Butterybook and Yalies
- Leadership

Looking forward to working with you. Please let me know if there's anything I can do to make your life easier

# Questions
- What is my input
- What is my output
- What do i do if my input is empty, = 1
- Will there always be at least one answer?
- Any other edge conditions?
- Are there restrictions on my input?
- Positive only?
- Integers or float?
- Can there be a  mix of string / ints?
 - Should I optimize further (ask this later on before you start coding)
**-   If it were up to you, what would you do differently?**
	  - Ok, i will optimize time, then space then
- Analyze example
- Can you simplify the problem
- What are the problems I have?
- At 10 mins get code down even if it is just a function definition

# Linked List
```js
function reverse(node)
{
	const currentNode = node;
	const prev = null;
	while(currentNode.next !== null)
	{
		const nextNode = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = nextNode;
	}
	return prev;
}
```

# Classes and Function
```js
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) 
	{
		 this.val = (val===undefined ? 0 : val)
		 this.left = (left===undefined ? null : left)
		 this.right = (right===undefined ? null : right)
	}
}
 ```

# My Own Questions
It's probably on everyone's minds, but I'm curious about the Meta shift! What is the one thing you think has changed the most.

In your, what's [[one thing]] that most people get wrong about the metaverse? The reason I ask is that I'ved worked a lot with a company, Emerge, in the metaverse, and they're making a substantial gamble in the space, even before Facebook. They have been at it for 6 years.

You're a software engineer by trade. What's [[one thing]] that would make your life way easier?

What do you work on?

```javascript
// Split string to array with .split
array.split("")
array.join("")

// To charcode
"a".charCodeAt(0);

// From charcode
String.fromCharCode(65,66,67); // returns 'ABC'


// Iteration
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
for (const [index, element] of a.entries())
  console.log(index, element);


object1.hasOwnProperty('hasOwnProperty');

const parsed = parseInt(x, base);
let n = num.toString();


```

Array

```javascript
.push('Orange'), .pop() // Add/remove to end
.shift(), .unshift('Strawberry') // Add/remove from front
.splice(pos, n) // Remove n elements at position pos

.includes()
.indexOf()
.lastIndexOf()
.length()

copy.slice() // Make a copy
```

Concat

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

Entries

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

Every

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
```

Find first element

```js
array1.find(element => element > 10); // First Value
array1.findIndex(element => element > 10); // Index of First Value

```

Reverse

```js
const reversed = array1.reverse();
````

Insert

```js
arr.splice(index, 0, item);
```

Array to Object

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
```

```js

// Time: O(n) Space: O(1)
// Time: O(logn) Space: O(1) 
  
// {1, 1, 2, 2, 3, 3, 5} -> 5
//  0  1  2. 3. 4  5. 6
  
  
  // 0 1 2 3 4 5 6 7 8

  // Check middle index, 3
  // Check neighors, index 2 and 4 if they match 3
  // If no matching neighors, return array[3]
  // If there are matching neighbors
  // 
  
  // for odd element in array except last one:
  // check right neighbor
  // if not matching
  // return element
// return last element
  
// { 1 } 
  
// { 1, 2, 2 }
  
// {1, 1, 2, 2, 4}
    0  1  2  3  4
  
// {1, 1, 2, 2, 3, 3, 5} -> 5
  
// {3, 3, 5} -> 5
    5  6  7
  
function findUnique(array){
  for (let i = 0; i < array.length - 1; i +=2)
  {
    if(array[i] !== array[i+1])
    {
        return array[i];
    }
  }
  return array[array.length-1];
}

function recursiveFindUnique(array, leftIndex, rightIndex)
{
  if (leftIndex===rightIndex)
  {
    return array[leftIndex];
  }
  const middleIndex = Math.floor((leftIndex + rightIndex)/2);
  if (array[middleIndex] !== array[middleIndex-1])
  {
    // process left side of middleIndex
    recursiveFindUnique(array, leftIndex, middleIndex - 1);
  }
  else
  {
    //process right side of middleIndex
    recursiveFindUnique(array, middleIndex + 1, rightIndex);
  }
}

function findUnique(array)
{
  recursiveFindUnique(array, 0, array.length - 1);
}

```

# Python
```python
my_list = [2, 4, 6, 8, 10]

for i, v in enumerate(my_list):

print("index: ", i, "value: ", v)
```
