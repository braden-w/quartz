---
aliases: SGD
title: 'Stochastic [[Gradient Descent]]'
date: "2022-07-26"
date modified: "2022-07-26"
---

# Stochastic [[Gradient Descent]]
Rather than computing sum over full training dataset, approximate the [[Loss Function]] and the [[Gradient]] by drawing small subsamples of the dataset, known as [[Minibatch|Minibatches]].

Solves a downside of [[Gradient Descent]] when $n$ is very large.

Size of [[Minibatch|Minibatches]] are usually 32, 64, 128. In general, don't worry about [[Minibatch]] size.
![](https://i.imgur.com/C5kulC0.png)

## Hyperparameters:
Weight initialization
Number of steps
Learning rate
Batch size
Data sampling

## Problems with [[Stochastic Gradient Descent|SGD]]

### High Condition Number
Balance between high step size (zig zag) or too small (no progress). In other words, very slow progress along shallow dimension, jitter along steep direction

![](https://i.imgur.com/IZFWEh3.png)

### Saddle Point
![](https://i.imgur.com/ZL6O55K.png)
# References
- (References:: [Lecture 4: Optimization - YouTube](https://www.youtube.com/watch?v=YnQJTfbwBM8&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r))
