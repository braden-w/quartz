---
tags:
 - On/Machine_Learning
 - Type/Source/Paper
title: Dropout - A Simple Way to Prevent Neural Networks From Overfitting
date: "2022-07-11"
date modified: "2022-07-14"
---

# Dropout - A Simple Way to Prevent Neural Networks From Overfitting
This research paper explores the idea of using dropout to prevent overfitting in deep neural networks. Dropout is a technique where units are randomly dropped from the neural network during training. This prevents units from co-adapting and reduces the chances that the model overfits. The paper shows that dropout improves the performance of neural networks on supervised learning tasks in vision, speech recognition, document classification and computational biology. It should be noted that dropping out means that units are temporarily removed from the network, along with all their incoming and outgoing connections.

The inspiration for this method was taken from the role of sex in evolution, where sex is a method of breaking up co-adapted genes and adaptations. This paper demonstrates that the same method can be used to improve the performance of neural networks.

The method of dropout is as follows: during training, some number of hidden units are randomly dropped from the network. For example, if we have a network with 1000 hidden units, and we set the dropout rate to 0.5, then 500 units will be dropped during each training iteration. The dropped units are chosen randomly, and they are dropped independently of each other. This means that if unit A is dropped during the first iteration, it does not mean that unit A will always be dropped. In fact, each unit has a 50% chance of being dropped during each iteration. 

When a unit is dropped, all of its incoming and outgoing connections are also dropped. This means that the unit cannot contribute to the forward or backward propagation of information. The unit is effectively removed from the network for the duration of the training iteration. 

At the end of the training iteration, the units that were dropped are reinstated, and the next training iteration begins. This process is repeated until the model converges.

The benefit of this method is that it forces the remaining units to learn more robust representations, because they cannot rely on the dropped units. This prevents units from co-adapting and reduces the chances that the model overfits.

# References
- (References:: [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](https://jmlr.org/papers/v15/srivastava14a.html))
