---
tags:
  - On/Machine_Learning
  - Type/Concept
date: "2022-06-21"
date modified: "2022-07-09"
title: Hyperplane
---

# Hyperplane
Hyperplane defined by a norm vector $\theta$ is a set of points $x$ such that $\theta \cdot x = 0$. Points on one side of the hyperplane are positive, and points on the other side are negative.

They are "decision boundaries that help classify data points" into different classes.

## Format
$$\theta^T x + \theta_0 = 0$$
- $\theta^T$ is a vector
- $\theta_0$ is a scalar

## Why it Works
- $\theta^Tx = \theta \cdot x$ ([[Matrix Multiplication]] to [[Dot Product]])
- $\theta \cdot x = 0$ if $\theta$ and $x$ are orthogonal (a property of the [[Dot Product]]).

## Signed Distance to Hyperplane for Point $x$
$$\frac{\theta^T x + \theta_0}{||\theta||}$$

## Margin of Labeled Point $(x,y)$
$$y \cdot \frac{\theta^T x + \theta_0}{||\theta||}$$
Margin of dataset $D_n$ (often known as $\gamma$) is the minimum margin of any point with respect to $\theta, \theta_0$

## Equation to Projection
$$
\begin{align}
\theta^T x + \theta_0 &= 0 \\
||\theta|| ||x|| \cos \phi &= -\theta_0 \\
||x|| \cos \phi &= -\frac{\theta_0}{||\theta||}
\end{align}
$$
Notice how $\theta$ is the normal vector in this diagram and vectors that are normal to $\theta$ are on the hyperplane:
![|300](https://introml_oll.odl.mit.edu/cat-soop/_static/6.036/exercises/ex01/example1-labelled.png)
In this diagram, $\theta_0$ causes the offset in direction. This diagram is used in the [[Perceptron Algorithm]].

![|300](https://introml_oll.odl.mit.edu/cat-soop/_static/6.036/exercises/ex01/example2.png)

# References
- (References:: [Week 1 Exercises: Hyperplanes | Week 1 Exercises | 6.036 Courseware | MIT Open Learning Library](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/courseware/Week1/week1_exercises/?activate_block_id=block-v1%3AMITx%2B6.036%2B1T2019%2Btype%40sequential%2Bblock%40week1_exercises))
