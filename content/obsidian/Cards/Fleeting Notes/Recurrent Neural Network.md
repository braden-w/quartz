---
tags:
 - On/Artificial_Intelligence/Machine_Learning
 - Type/Concept
title: Recurrent Neural Network
date: "2022-07-25"
date modified: "2022-07-31"
---

# Recurrent Neural Network

## Inspiration
- One to many problems
	- Labelling images
		- Image -> Many labels
- Many to one
	- Classifying videos
		- Sequences of images -> Single classification
- Many to many
	- Labelling videos
		- Sequences of images -> Many labels
- But even good for non-sequential data

## How [[Recurrent Neural Network]]s Work
- RNNs have an "internal state" that is updated as a sequence is processed
- Sampling what the model thinks is the next character, then feeding that back into the model as next input
- ![300](https://i.imgur.com/F47N9w0.png) ![300](https://i.imgur.com/vckw0Az.png)

## Example: Language Modelling
- ![300](https://i.imgur.com/ykQCcPd.png) ![300](https://i.imgur.com/MJbqbzi.png)
- Note the use of [[One-Hot Encoding]] on the input.
- See [[Backpropagation Through Time]] and [[Truncated Backpropagation Through Time]]

## Example: Shakespeare
- Get all the text of Shakespare concatenated

## Example: Image Recognition
- ![300](https://i.imgur.com/rWo59va.png)
- Transfer learning: Take CNN trained on ImageNet, chop off last layer
- They're exciting, but dumb
	- ![200](https://i.imgur.com/UAZFOpV.png) ![200](https://i.imgur.com/WAvYrIc.png)

## Issues with Recurrent Neural Networks
- ![300](https://i.imgur.com/Dki4mMJ.png) ![300](https://i.imgur.com/3wBQrrc.png)

- We're multiplying the same matrix thousands of times
- Exploding Gradients
	- Response: [[Gradient Clipping]]: Scale gradient if its norm is too big. A dirty hack that doesn't really take the true gradient
- [[Vanishing Gradient Problem]]
	- Response: Use diferent model

## [[Long Short Term Memory (LSTM)]]
- ![300](https://i.imgur.com/YaI8IgA.png)

- Long Uninterrupted Gradient Flow! Similar to [[ResNet]]
- ![300](https://i.imgur.com/3LYNVyx.png)

## Summary
- RNNs allow a lot of flexibility in architecture design
- Vanilla RNNs are simple but don't work very well
- Common to use LSTM or GRU: additive interactions improve gradient flow
- Backward flow of gradients in RNN can explode or vanish.
- Exploding is controlled with gradient clipping.
- Vanishing is controlled with additive interactions (LSTM)
- Better/simpler architectures are a hot topic of current research
- Better understanding (both theoretical and empirical) is needed.

# References
- (References:: [Illustrated Guide to Recurrent Neural Networks: Understanding the Intuition - YouTube](https://www.youtube.com/watch?v=LHXXI4-IEns))
- (References:: https://web.eecs.umich.edu/~justincj/slides/eecs498/498_FA2019_lecture12.pdf)
