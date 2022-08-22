---
tags:
 - On/Artificial_Intelligence/Machine_Learning
 - Type/Concept
title: Neural Network
date: "2022-07-26"
date modified: "2022-07-27"
---

# Neural Network
A deep single end-to-end pipeline that takes all the raw input on one side (pixels) and on the other side, spits out the output. The output layer [[Layer]]
![](https://visualstudiomagazine.com/-/media/ECG/visualstudiomagazine/Images/introimages/0513vsm_McCaffrey_NeutralNet.jpg)

As if jointly learning [[Feature Representations]] and [[Linear Classifier]] in such a way to maximize performance.
In contrast to See [[The Problem with Feature Representations and Feature Extraction]].

![](https://i.imgur.com/5FNMyEz.png)

![](https://i.imgur.com/ELLBqS1.png)

## Forward Pass
```python
def forward_propagate(network, row):
	inputs = row
	for layer in network:
		new_inputs = []
		for neuron in layer:
			activation = activate(neuron['weights'], inputs)
			neuron['output'] = transfer(activation)
			new_inputs.append(neuron['output'])
		inputs = new_inputs
	return inputs
```
Each neuron or node has [[Weight (W)]] $W$ and [[Bias (B)]] $B$
Output formula for each neuron or node (one node in the neural network) is
$$W.mm(X) + B$$
![](https://i.imgur.com/FakxKQl.png)

Each arrow represents a different $W.mm(X)+B$, and each has a unique weight and bias

This is why it can be computational intensive and we want to be sure we
Pass this output to an [[Activation Function]]
This gives one output number
This is the class of the network
Then check if the class is close to the

## Backward Direction
```python
def backward_propagate_error(network, expected):
	for i in reversed(range(len(network))):
		layer = network[i]
		errors = list()
		if i != len(network)-1:
			for j in range(len(layer)):
				error = 0.0
				for neuron in network[i + 1]:
					error += (neuron['weights'][j] * neuron['delta'])
				errors.append(error)
		else:
			for j in range(len(layer)):
				neuron = layer[j]
				errors.append(neuron['output'] - expected[j])
		for j in range(len(layer)):
			neuron = layer[j]
			neuron['delta'] = errors[j] * transfer_derivative(neuron['output'])
```
[How to Code a Neural Network with Backpropagation In Python (from scratch)](https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/)
## Update W and B
If the loss is high, you want to change then the factor is high
If the loss is low or close, you don't want to change and the factor is low

We get the right direction to update W or B by getting [[Gradient]]

## What Are Alternatives?
Earlier models were [[Linear Regression]], [[Linear Classifier]], and [[Support Vector Machine (SVM)]]
[[Reinforcement Learning]]
[[99% Of Everything is Done with a Neural Network]]

# References
- (References:: [Lecture 5: Neural Networks - YouTube](https://www.youtube.com/watch?v=g6InpdhUblE&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r))
