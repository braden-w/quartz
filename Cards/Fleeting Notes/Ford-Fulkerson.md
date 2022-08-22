---
tags:
- On/Graph_Theory
- On/Flow_Problems
- On/Computer_Science/Algorithms
date: "2022-06-16"
date modified: "2022-06-16"
title: Ford-Fulkerson
---

# Ford-Fulkerson
Continually add [[Augmenting Path]]s to increase the maximum flow from the [[Flow Networks#Source]] to the [[Flow Networks#Sink]].

1. Find a path
2. Compute bottleneck capacity
3. Augment path

Upon each iteration, we are guaranteed to increase max flow at least one. ^23ba7d

![](https://i.imgur.com/L5YjPhx.png)

![](https://i.imgur.com/FNCM77q.png)
![](https://i.imgur.com/5dZJAMB.png)

For [[Augmenting Path]] additions, you can use [[Residual Graph]] by finding a path from $s$ to $t$.
![[Residual Graph#Example]]

## Output
The [[Max Flow Rate]], and assignments to edges to maximize flow.

## Runtime
$O(|E|\cdot C)$ where $E$ is number of edges and $C$ is the [[Max Flow Rate]] found at $T$. This is because we run Augmenting Path at most $C$ times (see [[#^23ba7d]]) and each time, run [[Depth First Search (DFS)]] or [[Breadth First Search (BFS)]] for $O(|V|+ 2|E|)$.

## Correctness
[[Max-Flow Min-Cut Theorem]]

# References
- (References:: https://www.youtube.com/watch?v=Tl90tNtKvxs)
