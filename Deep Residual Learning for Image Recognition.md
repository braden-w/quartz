---
tags:
 - On/Machine_Learning/Deep_Learning
 - Type/Source/Paper
title: Deep Residual Learning for Image Recognition
date: "2022-07-30"
date modified: "2022-07-30"
---

# Deep Residual Learning for Image Recognition
This paper presents a residual learning framework to ease the training of deep neural networks. The framework reformulates layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. The authors provide empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from increased depth. An ensemble of the residual nets achieves 3.57% error on the ImageNet test set. The deep residual nets are foundations of the authors' submissions to ILSVRC & COCO 2015 competitions, where they also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.

The authors introduce the concept of degradation, where the training and test error rates of a deep neural network increase with the network depth. They propose using residual functions instead of unreferenced functions to make the optimization problem easier. A residual function is a mapping from the layer inputs to the layer outputs, with the mapping being the identity function if the function is learned correctly.

The rest of the paper expands on various implementation details and experiments of the new technique’s performance on image recognition sets, like ImageNet.

A potential weakness of the deep residual learning architecture is that it relies on the assumption that the residuals can be accurately predicted by the network. If the residuals are too complex or varied, the network may not be able to learn them accurately. Additionally, the formation of such an architecture requires a large number of parameters and may be difficult to train on small datasets.

# References
- (References:: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385?context=cs))
