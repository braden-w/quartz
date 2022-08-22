---
aliases: Transformers
tags:
 - On/Artificial_Intelligence/Machine_Learning
 - Type/Source/Paper
title: Attention Is All You Need
date: "2022-07-30"
date modified: "2022-07-30"
---

# Attention Is All You Need
The paper, "Attention is All You Need" explores the role of attention in neural networks. It argues that attention is the key to understanding how neural networks function. The paper reviews the literature on attention and discusses the implications of this research for neural networks. The paper concludes that attention is indeed the key to understanding neural networks and that further research is needed to understand the role of attention in these systems.

The paper proposed the Transformer, a new model architecture for natural language processing. The Transformer uses self-attention to compute representations of input sequences, without relying on sequential RNNs or convolutional neural networks.

The Transformer architecture is based on the self-attention mechanism, which allows the model to directly attend to all elements of an input sequence, rather than sequentially processing the input from left to right (as in RNNs) or in a local neighborhood (as in CNNs). Self-attention has several advantages over RNNs and CNNs: 1. It is more parallelizable, since all elements in the sequence can be processed in parallel. 2. It can model long-range dependencies, since all elements in the sequence are considered when computing representations. 3. It is more expressive, since it allows the model to directly learn relationships between any two elements in the sequence and has a higher total computational complexity per layer. 

The training regime for the Transformer was conducted on one machine with 8 NVIDIA P100 GPUs on the standard WMT 2014 English-German dataset. Each training batch contained sentence pairs with approximately 25000 source tokens and 25000 target tokens. The base models were trained for 100,000 steps or 12 hours, while the big models were trained for 300,000 steps (3.5 days).

The Transformer was shown to be effective for a variety of tasks, including machine translation language modeling, and question answering. It achieved a new state-of-the-art BLEU score on the WMT English-to-German translation task.

A possible weakness left out of the paper is that the Transformer is not well suited for tasks that require fine-grained or long-range understanding of input sequences, such as parsing. It is also more expensive to train than RNNs and CNNs. The Transformer requires more computational resources due to the self-attention mechanism. This could be a problem for many applications where resources are limited.

# References
- (References:: [Attention Is All You Need | Abstract](https://arxiv.org/abs/1706.03762))
