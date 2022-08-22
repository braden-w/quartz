---
tags:
- On/Graph_Theory
date: "2022-06-16"
date modified: "2022-06-16"
title: Dijkstra's Algorithm
---

# Dijkstra's Algorithm
- What's Dijkstra's relationship to water?
	- It's like how water goes through pipes

## In Pseudocode
 - Set all vertices to infinity, and their previous to empty
 - Set distance to root node to 0
 - Known region initialized as empty
 - While the known region is not the whole whole region:
	 - Grow it using minimum distance dist[v] (add new point to R)
	 - for all adjacent vertices to v, if the distance is

## In Code
 - for all $v\in V$  , $dist[v] = \infty$, $prev[v] = null$
 - dist[s] = 0 (of root node)
 - $R=\{\}$
 - while R != V
	 - find $v\not \in R$ with min $dist[v]$
	 - R = $R\cup \{v\}$
	 - for all $w \in Adj[v]$:
		 - if dist[w] > dist[v] + $l_{vw}$
			 - dist[w] = dist[v] + $l_vw$
			 - prev[w] = v
