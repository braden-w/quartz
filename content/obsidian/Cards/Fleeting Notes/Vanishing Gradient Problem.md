---
tags:
 - On/Artificial_Intelligence/Neural_Network
 - Type/Concept
title: Vanishing Gradient Problem
date: "2022-07-27"
date modified: "2022-07-27"
---

# Vanishing Gradient Problem
The problem is that during [[Backpropagation]], the gradients will sharply decrease over time.

The [[Weight (W)|Weights]] of a node will not be updated even if there is a high loss, because the [[Gradient]] is zero from [[Backpropagation]].

These problems are particular pronounced in certain [[Activation Function]]s like the [[Sigmoid Function]].

[[ReLU]] fights against the [[Vanishing Gradient Problem]] because it is not smooth and it will not "fade", since its [[Gradient]] is zero no matter the magnitude of output.
