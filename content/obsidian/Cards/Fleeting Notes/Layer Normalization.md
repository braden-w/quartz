---
tags:
 - On/Artificial_Intelligence/Neural_Network 
 - Type/Concept
 - Type/Source/Paper 
title: Layer Normalization
date: "2022-07-30"
date modified: "2022-07-31"
---

# Layer Normalization
Improvements over [[Batch Normalization]]
- Can deal with sequences
- Any batch number sworks
- Can paralllize
- Better for RNNs

## Paper Summary
This research paper explores the new technique of layer normalization. Layer normalization is a form of normalization that is applied to the inputs of a layer in a neural network. The technique was motivated by the observation that the distribution of the inputs to a layer can vary greatly, depending on the layer's position in the network. This can make training deep neural networks difficult, as the inputs to each layer can have different distributions. Layer normalization addresses this problem by normalizing the inputs to each layer.

As background, the article introduces batch normalization, which was introduced to reduce “covariate shift.” However, batch normalization has a number of drawbacks. First, it requires a large mini-batch size to accurately estimate the mean and standard deviation. Second, it can introduce a significant amount of computational overhead. Third, it can sometimes lead to sub-optimal results. Layer normalization is intended to address these drawbacks.

The authors describe how layer normalization is applied and compares it to batch normalization. They then go into deeper mathematical analysis of the technique, which I found difficult to follow. Finally, they find that layer normalization leads to faster convergence and improved accuracy on a number of tasks, including image classification and teaching machines to read and comprehend.

A possible weakness of this method (or at least omission) is that this technique will still lead to poorer performance on some very deep networks. This is because the normalization is being applied to each layer independently from one another, and may increase computation time without performance improvement. It would be nice for the paper to include a section on when not to use this method.

 [Layer Normalization](https://arxiv.org/abs/1607.06450)
[What is Layer Normalization? | Deep Learning Fundamentals - YouTube](https://www.youtube.com/watch?v=2V3Uduw1zwQ)
