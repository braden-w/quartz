---
title: Class Probabilities
date: "2022-07-27"
date modified: "2022-07-27"
---

# Class Probabilities
A collection of outputs between 0 and 1.

A model will often have muliple classes it's classifying (dogs, cats. etc.)


![](https://visualstudiomagazine.com/-/media/ECG/visualstudiomagazine/Images/introimages/0513vsm_McCaffrey_NeutralNet.jpg)
The output of the [[Neural Network]] is the sum of the activation of each nodes. Once you get this, you usually pass this output through [[Softmax]].

The output layer has more than one [[Neural Network Node|Node]].
This is a way to guarantee that the output is between 0 and 1. These value is the Class Probabilites
