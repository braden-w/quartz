---
title: SGD + Momentum
date: "2022-07-26"
date modified: "2022-07-26"
---

# SGD + Momentum
[[Integratation|Integrate]] [[Gradient]] over time. Every point in time, update the velocity vector by taking a weighted average of the current [[Gradient]] and the historical velocity vector, or cumulatively derived [[Gradient|Gradients]].

For our gradient step, don't use the true gradient, but the computed velocity vector computed during gradient.

> Build up "velocity" as a running mean of gradients
> Rho gives "friction"; typically rho=0.9 or 0.99

Keep track of both position and velocity.
![](https://i.imgur.com/Sho0QnX.png)

## How [[SGD + Momentum]] Beats Problems with [[Stochastic Gradient Descent|SGD]].

## [[Momentum Update]] And [[Nesterov Momentum]]
![](https://i.imgur.com/zqC2EO4.png)


[[Momentum Update]] uses an average of all past gradients
[[Nesterov Momentum]], we imagine looking forward in the future and compute including lookahead

## Both [[SGD + Momentum]] and [[Nesterov Momentum]] end up speeding up a lot, then overshooting, then correcting
![](https://i.imgur.com/31PsCM3.png)

![](https://i.imgur.com/sMYQl4X.png)
# References
- (References:: [Lecture 4: Optimization - YouTube](https://www.youtube.com/watch?v=YnQJTfbwBM8&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r))