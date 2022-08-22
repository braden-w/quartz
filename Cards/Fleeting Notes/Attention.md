---
tags:
 - On/Machine_Learning
 - Type/Concept
title: Attention
date: "2022-07-31"
date modified: "2022-07-31"
---

# Attention
See [[Attention Is All You Need|Transformers]].

## Inspiration
![](https://i.imgur.com/yAhPSlq.png)

- Use new context vector at each step of decoder!
	- Use an encoder and decoder

## Procedure
![](https://i.imgur.com/fPUWrCr.png)
Intuition: Context vector attends to the relevant part of the input sequence

## We Can Visualize Attention Weights and Structure
![](https://i.imgur.com/r3UVrca.png)

## Attention Layers and
1. Compare query vectors and key vectors to create
2. Generate alignment scores with softmax
3. Transformer input vectors into value vectors
4. Produces value vectors Y for each query vector with product and sum
5. Deeper explanation at 42:00 in video

## Self-Attention Layers
- ![300](https://i.imgur.com/FIUoDpR.png)
- Similar to Attention Layers with permutations
- Doesn't "know" the order of the vectors it is processing!
	- Fix: Use [[Positional Encoding]] by concatenating input to make position aware

## Result: [[Attention Is All You Need|Transformers]]
![Uploading file…xqqck]()

## Enormous Scaling Transformers
![](https://i.imgur.com/9JorzeU.png)

[[Megatron Equivalent Costs $430,000 on Amazon AWS]]

# References
- (References:: [Lecture 13: Attention - YouTube](https://www.youtube.com/watch?v=YAgjfMR9R_M&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r&index=13))
