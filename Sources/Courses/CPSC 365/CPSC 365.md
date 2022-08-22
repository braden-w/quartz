---
aliases: CPSC 365 Algorithms
date: "2022-02-01"
date modified: "2022-06-23"
title: CPSC 365
---

# CPSC 365

## [[Graph Theory]]

## Matching
- What is an [[Unstable Matching]]?
- What is a [[Rogue Couple]]?
- What is an [[Adjacency List]]?
- What is [[Bipartite Graph]]?

## Complexity
- What is [[Big O, Omega, Theta]]?

## Lecture for [[2022-02-15]]
- What is [[Depth-First Search]]?
- What is [[Dijkstra's Algorithm]]?
	 - What is [[Dijkstra's Algorithm#In Pseudocode]] ?
	 - What is [[Dijkstra's Algorithm#In Code]] ?

## Lecture for [[2022-02-17]]
- What is $\delta$  function?
	- Length
- What is the [[Triangle Inequality]]?
- What is the runtime of Extract() from primary heap?
	- $\log( V )$
- How does [[Minimum Spanning Tree (MST)]] Relate to a Network Design Problem?
	- Cover all nodes with as little cabling as possible
- How does [[Dijkstra's Algorithm]] relate to nature?
	- Water flowing through pipes, taking the path of least resistance
- What is the [[Cut Property]] for MST?
- What is the algorithm to build a [[Minimum Spanning Tree (MST)]] using the [[Cut Property]]?
	- ![](https://i.imgur.com/Iuil4dr.png)
- What is [[Prim's Algorithm]] versus [[Kruskal's Algorithm]]?
	- [[Prim's Algorithm]] grows a subtree, adds lightest edge connecting subtree to a new vertex
	- [[Kruskal's Algorithm]] adds lightest edge that doesn't create a cycle

## Lecture for [[2022-02-22 Chatting About AI]]
- What is [[Divide and Conquer]]?
	- What is [[Binary Search]]?
	- What is [[Merge Sort?]]
	- How do we apply [[Divide and Conquer]] to solve binary multiplication?
		- ![](https://i.imgur.com/6CuSV93.png)
		- Divide both of the items multiplied in half
		- ![](https://i.imgur.com/0Ffypz3.png)
		- ![](https://i.imgur.com/YJwHdH9.png)
		- What is the [[Master Theorem]]?

## Lecture for [[2022-02-24]]
What is [[Recurrence]]?
- [[Dynamic Programming]]

## Section [[2022-04-08]]
[[Reduction Proofs]] and SAT reduces to Stingy SAT
Stingy SAT is the reduction, and SAT is the original boolean expression $\phi$ expressed as $(a\cup b) \cap (c\cup d)…$

- [[SAT Problem]]
	- [[3-SAT Problem]]
	- [[3 SAT Reduces to Other NP Problems (Tree)]]
	- [[Reduction (To Prove X is NP Complete)]]
- [[Clique]]
- [[P=NP Problem]]
	- [[P]], [[NP]],  [[NP Hard]], and [[NP Complete]]
- Boolean Logic
	- [[Conjunctive Normal Form (CNF)]]
	- [[Implicative Normal Form (INF)]]

[[Graph Theory]]
[[Cycles]]
[[Hamiltonian Path or Cycles]]

- Graphs
	- [[Optimization Problems]]
	- [[Flow Networks]]
	- [[Flow Problems]]
	- [[Max-Flow Min-Cut Theorem]]
	- [[Ford-Fulkerson]]
