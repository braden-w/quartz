---
date: '2022-06-16'
date modified: '2022-06-16'
tags:
- On/Programming
- On/Interviews
- Type/Source/Book
title: Elements of Programming Interviews
---

# Elements of Programming Interviews

## Arrays
- Use the array itself to reduce space complexity to O(1).
- Filling an array from back if possible (avoids shifting)
- Instead of deleting an entry (which requires moving all entries to its right), consider overwriting
- When dealing with numbers represented as an array, process from back to front or reverse array
- Write code that operates on subarrays.
- Avoid off-by-one errors
- Don’t worry about preserving the integrity of the array (sortedness, keeping equal entries together, etc.) until it is time to return.
- An array can serve as a good data structure when you know the distribution of the elements in advance.
- For example, a Boolean array of length W is a good choice for representing a subset of {0, 1, . . . , W − 1}. (When using a Boolean array to represent a subset of {1, 2, 3, . . . , n}, allocate an array of size n + 1 to simplify indexing.) .
- Use parallel logic for rows and for columns of 2D arrays

### Operations
- `A.insert(3, 28)`
- Copy vs. reference
	- B = A vs B = list(A))
	- `copy.copy(A)` vs. `copy.deepcopyp(A)`
- `min(a)`
- `max(a)`
- bisect
	- bisect.bisect(A,6)
	- bisect.bisect_left(A,6)
	- bisect.bisect_right(A,6)
- A[k:] + A[:k] rotates an array around k
- Reverse
	- A.reverse() in place
	- reversed(A) returns an iterator
	- A[::-]

## Strings

### Operations
- .strip()
- .startswith(prefix)
- .endswith(suffix)
- s.tolower()
- s.split(', ')
- ", ".join()

## Linked Lists
- Doubly linked lists

- Insertion
```python
# Insert new_node after node.
def insert_after (node , new_node ):
	new_node.next = node.next
	node.next = new_node
```
- Delete a node:
```python
# Delete the node past this one. Assume node is not a tail.
def delete_after (node):
	node.next = node.next.next
```

# References
- (References:: [PDF Textbook](http://elementsofprogramminginterviews.com/sample/epilight_python_new.pdf))