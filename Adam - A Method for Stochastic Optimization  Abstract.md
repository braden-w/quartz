---
aliases: ADAM
tags:
 - On/Artificial_Intelligence/Machine_Learning
 - Type/Source/Paper
title: Adam - A Method for Stochastic Optimization | Abstract
date: "2022-07-30"
date modified: "2022-07-30"
---

# Adam - A Method for Stochastic Optimization | Abstract
Adam is an efficient, moment-based algorithm for stochastic optimization that is well-suited for large-scale problems with noisy or sparse gradients. Theoretical results show that Adam converges at a rate comparable to the best known methods, and empirical results demonstrate that Adam works well in practice.

More technically, the Adam method is a stochastic optimization algorithm that combines the benefits of both SGD and momentum-based methods, extending the former. Adam uses a learning rate that is adapted for each parameter, and uses first and second moment estimates of the gradients to compute an accurate per-parameter learning rate. Adam also features built-in regularization, by keeping track of an exponentially decaying moving average of the squared gradients. The overall approach is computationally efficient, has little memory requirements, and is well suited for problems that are large in terms of data and/or parameters. 

Adam has been shown to outperform other optimization methods on a variety of tasks and is now widely used in the field of deep learning.

# References
- (References:: [Adam: A Method for Stochastic Optimization | Abstract](https://arxiv.org/abs/1412.6980))
