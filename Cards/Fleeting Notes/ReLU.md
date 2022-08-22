---
tags:
 - On/Artificial_Intelligence/Neural_Network
 - Type/Concept
title: ReLU
date: "2022-07-27"
date modified: "2022-07-27"
---

# ReLU
![](https://i.imgur.com/bvYwSmi.png)

Note that the blue line is the gradient.

## Advantages
Even if the model or neuron has an enormous weight on the output being pushed out, the gradient is constant. If the gradient is zero, then the neuron won't be updated.

For good or bad, no matter how hard ReLU is firing, the gradient is constant and does not decrease. This is in contrast with [[Sigmoid Function]], which actualy has a decreasing gradient with harder firing. This constant gradient feature of ReLU helps prevent the [[Vanishing Gradient Problem]].
