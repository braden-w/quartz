---
tags:
  - On/Machine_Learning
  - Type/Source/Course
title: Introduction to Machine Learning (MIT)
date: "2022-06-29"
date modified: "2022-07-16"
---

# Introduction to Machine Learning (MIT)

## Introduction
The main focus of machine learning is _making decisions or predictions based on data_.
[[Problem of Induction]]: Why do we think that previously seen data will help us predict the future?
- ## Problem Class
	- [[Supervised Learning]]
		- [[Classification]]
		- Regression
	- [[Unsupervised Learning]]
		- [[Density Estimation]]
		- Clustering
		- Dimensionality Reduction
- ## Model Type
	- No Model - Sometimes, this is viable (like using )
	- Prediction Rule - More typical
		1. Fit a model to the training data
		2. Use the model to make predictions
- ## Evaluation Criteria
	- [[Loss Function]]
	- We want a [[Hypothesis]] with small loss (from [[Loss Function]]) on new data.
		- Proxy: Small loss on Training Data (which is a subset of all possible new data)
> Once we have described a class of models and a way of scoring a model given data, we have an algorithmic problem: what sequence of computational instructions should we run in order to find a good model from our class?

## The Classification Process
$$x\to\boxed{h}\to y$$

where $h$ is the hypothesis.

## Training Error
![](https://i.imgur.com/oj1C2ho.png)
where there are $n$ ' new examples.

### Training Error of Linear Classifier
- $\varepsilon_n(\theta, \theta_0)$
- If training data is [[Linearly Separable]], there must exist a model $\theta, \theta_0$ where [[Training Error]] is 0
	- This doesn't imply that there is a model where [[Testing Error]] is 0

### Testing Error of Linear Classifier
- $\varepsilon(\theta, \theta_0)$
- Testing error may not always be 0

- Example of two points that are [[Linearly Separable]] but not [[Linearly Separable]] through the origin:
	- (1,1), +1
	- (2,2), -1

## [[Linear Classifier|Linear Classifiers]]
- Easier to work with and analyze, but a restricted class of [[Hypothesis|Hypotheses]]
- [[Hyperplane]]
- [[Binary Classification]]
- [[Perceptron Algorithm]]
- How to transform dataset that is only linearly separable *with* offset to one that is [[Linearly Separable]] *without* offset
	- Add an extra dimension to all of the datapoints using the same (nonzero) number for each point
	- Add an extra dimension to all of the datapoints using a 1 for each point (add 1 to each point). This is basically "lifting" the dataset such that a line through the origin can now divide everything

- [[Margin of a Data Set]]
- [[Perceptron Algorithm]] Mistake Bound
	- Use [[Margin of a Data Set]] $\gamma$ ![](https://i.imgur.com/Kk5ABkf.png)
	- This means that decreasing margin leads to more mistakes, and vice versa

- Feature Representation
	- **Choose the easiest encoding possible to represent data**
		- Don't use binary because the machine will need to learn binary and it implies ordering
		- Integers are bad since ordering is arbitrary
		- ![](https://i.imgur.com/61JyAYG.png)

- ## [[Feature Transformations]]
	- Examples
		- $\phi(x)$ in 1D ![](https://i.imgur.com/yVdRDH7.png)
		- $\phi(x)$ mapping 1D to 2D![](https://i.imgur.com/PjLOdKM.png)
	- Polynomial Basis
		- Consider a XOR problem with feature transformation $\phi((x_1, x_2)) = (1, x_1, x_2, x_1^2, x_1x_2, x_2^2)$
			- ![](https://i.imgur.com/1y21slr.png)
			- Examples
				- ![](https://i.imgur.com/bc3ztxB.png)
				- ![](https://i.imgur.com/otgoCKn.png)
				- [Lecture: Example of perceptron algorithm with polynomial basis transformations | Feature representation | 6.036 Courseware | MIT Open Learning Library](https://youtu.be/KXJ9sUsKXP4)

Using [[One-Hot Encoding]] to turn categorical data into [[Machine Learning]] friendly data. This creates a new dimension for each data point, which means that it is always [[Linearly Separable]].

## Logistic Regression
- [[Sigmoid Function]] used as a curve to describe loss function or how wrong something is

### Margin
- When we train a classifier, it is desirable for the classifier to have a large [[Margin]] with regard to the points in our data set, in the hope that this will make the classifier more robust to any new points we might see.

#### The [[#Margin]] Formula of Labeled Point $x,y$ with Respect to Separator $\theta, \theta_0$ is
$$\gamma(x, y, \theta, \theta_0) = \frac{y (\theta^T x+\theta_0)}{\lVert \theta \rVert}$$
Is equal to $y \cdot$ [[Hyperplane#Signed Distance to Hyperplane for Point x]]

### Hinge Loss
![](https://i.imgur.com/ULxJrz6.png)
![](https://i.imgur.com/P6ckc9T.png)
1. If classified correctly and inside margin, then nonzero hinge
2. If classified correctly and outside margin, then $0$
3. If classified incorrectly and outside margin, then large nonzero loss.

### SVM (Support Vector Machine)
[[Supervised Learning]] used on [[Binary Classification]] problems.
[SVM From Scratch — Python. Important Concepts Summarized | by Qandeel Abbassi | Towards Data Science](https://towardsdatascience.com/svm-implementation-from-scratch-python-2db2fc52e5c2)

## Gradient Descent
[Gradient Descent Explained. A comprehensive guide to Gradient… | by Daksh Trehan | Towards Data Science](https://towardsdatascience.com/gradient-descent-explained-9b953fc0d2c)
Rolling down a hill (reminds me of [[Stable Vs. Unstable Equilibrium|Stable Equilibrium]]. Equal to $\eta$ ([[Step Size]]) multiplied by gradient (slope).
$$x^{(k + 1)} = x^{(k)} - \eta \nabla_x f(x^{(k)})$$

### Rewrite
Can be written as
$$z(k+1)=\alpha z(k)$$
for some $z = x-C$ and $\alpha$

![](https://i.imgur.com/K4cH1YY.png)

### Example
Gradient descent is minimized when $(1-8\eta)$ is equal to zero (descends in one step). $1-8\eta$ controls rate of convergence. The magnitude of $|1-8\eta$ controls how quickly it descends.

## Linear Regression

### Model
$y = \theta^T x + \theta_0$

### Squared Error
$$L_s(x, y, \theta, \theta_0) = (y - \theta^T x - \theta_0)^2$$
Note that $\theta^T x + \theta_0$ is the [[#Linear Regression#Model]]

### Regularization
Penalizes large weights or weights and biases, since that implies [[Overfitting]].

[Introduction to regression | Regression | 6.036 Courseware | MIT Open Learning Library](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/courseware/Week5/regression/3)

## [[Structural Error]] Versus [[Estimation Error]]
[[Structural Error]] arises when the hypothesis class cannot represent a hypothesis that performs well on the test data and [[Estimation Error]] arises when the parameters of a hypothesis cannot be estimated well based on the training data.
