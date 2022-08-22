---
tags:
- On/Recurrence
date: "2022-06-16"
date modified: "2022-06-16"
title: Master Theorem
---

# Master Theorem
![](https://i.imgur.com/GsZDYym.png)

n = size of input
a = number of subproblems in the recursion
n/b = size of each subproblem. All subproblems are assumed
	 to have the same size.
f(n) = cost of the work done outside the recursive call,
	  which includes the cost of dividing the problem and
	  cost of merging the solutions
