---
date: '2022-06-24'
date modified: '2022-06-24'
tags:
- On/Artificial_Intelligence/Machine_Learning/Models
- Type/Derived
title: Perceptron Algorithm
---

# Perceptron Algorithm
One of the earliest examples of [[Artificial Intelligence|Deep Learning]], used to discern difference between alphabet.

A model that updates on the basis of whether the dot product is positive or negative.

During each iteration, if the current classifier incorrectly classifies the current point (does not predict $y^{(i)})$ given input $x^{(i)}$), the model updates $\theta$ to be $\theta + y^{(i)}x^{(i)}$, and $\theta_0$ to be $\theta_0 + y^{(i)}$.

- If you were to initialize the perceptron algorithm with $\theta = [1000, -1000]$ instead of $[1, -1]$, you would have a lot more mistakes since corrections to $\theta$ have a smaller relative impact. [Source](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/courseware/Week2/week2_homework/?child=first)
- Relating number of misclassifications to final value of $\theta$ and $\theta_0$
	- ![|300](https://i.imgur.com/2xpOGtD.png)

## When to Use
When we can separate two types of data with a line. See [[Binary Classification]].
![|300](https://i.imgur.com/extiWvo.png)

## Algorithm
![|300](https://i.imgur.com/YtrxqON.png)

### Update Step Explained
We set the new model equal to the old model, moved towards the right direction.

Apply this update step to each element of the vector:
![|300](https://i.imgur.com/vgQtDSI.png)

![|300](https://i.imgur.com/AhBcv5O.png)

## In Action
[Video Step by Step](https://www.youtube.com/watch?v=QLJa1g9n6Ms)
![|300](https://i.imgur.com/ZYwQLso.png)

# References
- (References:: [MIT Lecture - YouTube](https://www.youtube.com/watch?v=QLJa1g9n6Ms))
- (References:: https://phillipi.github.io/6.882/2020/notes/6.036_notes.pdf)