---
tags:
 - On/Artificial_Intelligence/Neural_Network

 - Type/Concept
title: Backpropagation
date: "2022-07-26"
date modified: "2022-07-27"
---

# Backpropagation
The update step for a [[Neural Network]], in which we calculate the [[Gradient]] of each node by differentiating the node's [[Activation Function]].

## Why Deriving [[Gradient]] is Not a Good Idea
![](https://i.imgur.com/kYhZOtF.png)

Better idea: [[Computational Graph]]
![](https://i.imgur.com/Sa5Gn25.png)

## Steps
1. Move forward from left to right, using top green values on line to compute $q=x+y$ and $f=qz$
2. Move backwards from right to left, using bottom yellow lines
![](https://i.imgur.com/1c9sFcj.png)

### How to Handle Hiccups
![Imgur](https://i.imgur.com/tHfFKTl.png)
1. [[Downstream Gardient]], or the closest to the output
2. [[Local Gradient]], or the intermediate step
3. [[Upstream Gradient]], or the closest to the input
This all works due to the [[Chain Rule]]

## Advantages
Each local node just needs to concern about local input and local output, without broader context. We just pass things forward and back.
![](https://i.imgur.com/6IHBZNb.png)

The node passes forwards and waits for the Back Propagation to send it back as [[Upstream Gradient]], then can deduce the above. We can get without having to worry about global structure, just what's going on the local level. This helps avoid all the headache of trying to derive this from the enire whole enormous complex structure in [[#Why Deriving Gradient is Not a Good Idea]].

## Another Example
![](https://i.imgur.com/xtnFn5f.png)

![Uploading file…zm4bv]()
We can choose functions to make calculations easier, like the [[Sigmoid Function]] as an [[Activation Function]]
![](https://i.imgur.com/eXyItQF.png)

We can choose simpler primitives to make computations easier.
![Imgur](https://i.imgur.com/xtnFn5f.png)
![Imgur](https://i.imgur.com/GIwnK23.png)

### [[Jacobian]] Matrices Are Sparse
![Imgur](https://i.imgur.com/QJlVizX.png)

The trick for Backpropagation is to express these [[Jacobian]] Matrices in an implicit efficient representation

## Problems with Backpropagation
[[Vanishing Gradient Problem]]

# References
- (References:: [Lecture 6: Backpropagation - YouTube](https://www.youtube.com/watch?v=dB-u77Y5a6A&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r))
