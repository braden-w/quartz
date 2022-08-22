---
aliases: DL for NLP
tags:
 - On/Machine_Learning/Deep_Learning
 - On/Language
 - Type/Source/Lecture
title: '[[Deep Learning]] For NLP'
date: "2022-07-30"
date modified: "2022-08-02"
---

# [[Deep Learning]] For NLP
- Lots of progress recently
	- People trust [[Wikipedia]], [[Google Translate]], etc. more than other people, in some cases
- Language models assign probability to text $p(x_0, …, x_n)$
- Most popular method is to factorize distribution using chain rule:
$$p(x_0,…x_n) = p(x_0)p(x_1 \mid x_0) \cdots p(x_n \mid x_{n-1})$$

## Neural Language Models

### [[Convolutional Language Models]] (CLMs)
![](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-1/fig2.jpg)

- Earliest

- Strengths
	- Able to learn local dependencies in text data. This is because CLMs use convolutional filters to extract local information from text data.
- Weaknesses
	- They may not be able to learn long-term dependencies in text data. This is because the convolutional filters used by CLMs may not be able to capture long-range dependencies.

### Recurrent Language Models
![](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-1/fig3.jpg)
- Used to be very popular
	- Conceptually straightforward: every time step we maintain some state (received from the previous time step), which represents what we’ve read so far. This is combined with current word being read and used at later state. Then we repeat this process for as many time steps as we need.
- Strengths
- Weaknesses
	- [[Vanishing Gradient Problem]] with long contexts
	- The whole history of the document reading is compressed into fixed-size vector at each time step (bottleneck)
	- Not possible to parallelize over time-steps, so slow training

### [[Attention Is All You Need|Transformer]] Language Models
![300](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-1/fig4.jpg)
- Three main stages
	- Input stage
	- $n$ times transformer blocks (encoding layers) with different parameters
	- Output stage
- Latest and greatest, revolutionized penalty
- Uses [[Multi-Head Attention]] and [[Layer Normalization]]
	- What's the benefit of [[Multi-Head Attention]]?
		- To predict the next word you need to observe multiple separate things, in other words attention can be placed on multiple previous words in trying to understand the context necessary to predict the next word.
![300](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-1/fig6.png)
- Strengths
	- [[Attention Is All You Need|Transformers]] share [[Weight (W)|Weights]] across timestamps, unlike Recurrent Language Models
	- Very parallelizable
	- Scale well
		1. Unlimited training data, even far more than you need
		2. GPT 2 used 2 billion parameters in 2019
		3. Recent models use up to 17B parameters in 2020
- Tricks
	- Extensive use of layer normalization to stabilize training
	- Warmup + Inverse-square root training schedule
	- Careful initialization
	- Label smoothing
- More Questions
	1. How do transformers solve the informational bottlenecks of [[Convolutional Neural Networks|CNNs]] and RNNs?
		- Attention models allow for direct connection between all words allowing for each word to be conditioned on all previous words, effectively removing this bottleneck.
	2. How do transformers differ from RNNs in the way they exploit GPU parallelization?
		- The multi-headed attention modules in transformers are highly parallelisable whereas RNNs are not and therefore cannot take advantage of GPU technology. In fact transformers compute all time steps at once in single forward pass.

#### Some Important Facts of Transformer Language Models
![300](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-1/fig9.png)
- Minimal inductive bias
- All words directly connected, which will mitigate vanishing gradients.
- All time-steps computed in parallel.
- Self attention is quadratic (all time-steps can attend to all others), limiting maximum sequence length.
- As self attention is quadratic, its expense grows linearly in practice, which could cause a problem.

## Decoding Language Models
- So what if we have a probability distribution over text?
	- There are still exponentially many possible outputs, and it will be difficult to compute max

### Greedy Decoding
- Take most likely word at each timestep
- No guarantee that the whole sequence

### Exhaustive Search
- Suboptimal and often impossible

### Beam Search
- Compromise between [[Greedy Decoding]] and [[Exhaustive Search]]
![300](https://i.imgur.com/UB98BYw.png)
![300](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-2/Beam_Decoding.png)

- How deep does the beam tree branch out ?
	- The beam tree continues until it reaches the end of sentence token. Upon outputting the end of sentence token, the hypothesis is finished.

### Sampling
- Sometimes, we do not want the most likely sequence, but a sample from the model distribution
- Problems
	- Once a “bad” choice is sampled, the model is in a state it never faced during training, increasing the likelihood of continued “bad” evaluation.
	- The algorithm can therefore get stuck in horrible feedback loops.

### Top-K Sampling
- A pure sampling technique where you truncate the distribution to the $k$ best and then renormalise and sample from the distribution.
![](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-2/Top_K_Sampling.png)

#### Question: Why Does Top-K Sampling Work so Well?
This technique works well because it essentially tries to prevent falling off of the manifold of good language when we sample something bad by only using the head of the distribution and chopping off the tail.

## Evaluating Text Generation
- [[Evaluating Language Models is Easy, but Evaluating Generated Text is Hard]]
- Evaluating language models is easy
	- Just measure likelihood of held out data
- Evaluating generated text is hard
	- Trade-off between quality and diversity
	- Word overlap metrics with a reference (BLEU, ROUGE etc.) are obviously wrong, but surprisingly useful
	- New automated metrics have been proposed

### [[Backtranslation]]
- Example: we want to train a German to English translation model
- First, train an English to German reverse translation model using bitext
- Then, translate billions of words of monolingual English to German
- Finally, train German to English model using 'back-translated' data

## Unsupervised Learning for NLP
- How can we learn just from lots of unlabeled text?

### Word2Vec
Word embeddings hold some structure
![300](https://atcold.github.io/pytorch-Deep-Learning/images/week12/12-2/embeddings-structure.png)

### [[GPT-3|GPT]]
Train a conditional language model. Then given this language model, which predicts a word at every time step, replace each output of model with some other feature.

1. Pretraining - predict next word
2. Fine-tuning - change to a specific task. Examples:
	- Predict whether noun or adjective
	- Given some text comprising an Amazon review, predict the sentiment score for the review

Strengths
- We can reuse the model
- Pretrain one large model and fine tune to other tasks

### ELMo
[[GPT-3|GPT]] only considers leftward context, which means the model can’t depend on any future words - this limits what the model can do quite a lot.

Here the approach is to train _two_ language models
1. One on the text left to right
2. One on the text right to left
3. Concatenate the output of the two models in order to get the word representation. Now can condition on both the rightward and leftward context.
This is still a “shallow” combination, and we want some more complex interaction between the left and right context.

### BERT
![](https://i.imgur.com/JJyKV2A.png)

BERT is similar to word2vec in the sense that we also have a fill-in-a-blank task. However, in word2vec we had linear projections, while in BERT there is a large transformer that is able to look at more context. To train, we mask 15% of the tokens and try to predict the blank.

Can scale up BERT (RoBERTa):

- Simplify BERT pre-training objective
- Scale up the batch size
- Train on large amounts of GPUs
- Train on even more text

Even larger improvements on top of BERT performance - on question answering task performance is superhuman now.

## Examples of Self Supervised Pretraining Approaches
- XLNet:
	- Instead of predicting all the masked tokens conditionally independently, XLNet predicts masked tokens auto-regressively in random order
- SpanBERT
	- Mask spans (sequence of consecutive words) instead of tokens
- ELECTRA:
	- Rather than masking words we substitute tokens with similar ones. Then we solve a binary classification problem by trying to predict whether the tokens have been substituted or not.
- ALBERT:
	- A Lite Bert: We modify BERT and make it lighter by tying the weights across layers. This reduces the parameters of the model and the computations involved. Interestingly, the authors of ALBERT did not have to compromise much on accuracy.
- XLM:
	- Multilingual BERT: Instead of feeding such English text, we feed in text from multiple languages. As expected, it learned cross lingual connections better.
- The key takeaways from above models
	- Lot of different pre-training objectives work well!
	- Crucial to model deep, bidirectional interactions between words
	- Large gains from scaling up pre-training, with no clear limits yet

## Summary
> [!important]
>  Training models on lots of data beats explicitly modelling linguistic structure. See [[The Bitter Lesson]].
- Transformers are low bias (very expressive) models
	- Feeding them lots of text is better than explicitly modelling linguistic structure (high bias)
- Models can learn a lot about language from predicting in unlabelled text.
	- This turns out to be a great unsupervised learning objective
	- Fine tuning for specific tasks is then easy

- Bidirectional context is crucial

# References
- (References:: [Deep Learning for NLP · Deep Learning](https://atcold.github.io/pytorch-Deep-Learning/en/week12/12-1/))
- (References:: [Decoding Language Models · Deep Learning](https://atcold.github.io/pytorch-Deep-Learning/en/week12/12-2/))
- (References:: [Week 12 – Lecture: Deep Learning for Natural Language Processing (NLP) - YouTube](https://www.youtube.com/watch?v=6D4EWKJgNn0))
