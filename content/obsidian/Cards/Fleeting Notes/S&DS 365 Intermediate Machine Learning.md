---
tags:
 - On/Machine_Learning
 - Type/Source/Course
title: S&DS 365 Intermediate Machine Learning
date: "2022-09-02"
date modified: "2022-09-02"
---

# S&DS 365 Intermediate Machine Learning

## Lecture 1 [[2022-09-02]]
Tools for High Dimension Regression
1. Ridge regression
	1. Penalizes large coeffiecients
	2. It's just least squares with a second term
		1. As lambda approaches to infinity, we squash the coeffiecients and the variance goes down and bias goes up
		2. As lambda approaches infinity, the variance goes up and bias goes down
2. Lasso
- [Ridge Regression versus Lasso](https://www.datacamp.com/tutorial/tutorial-lasso-ridge-regression)
	- ![300](https://res.cloudinary.com/dyd911kmh/image/upload/v1648205672/image18_a3zz7y.png)
- Leave-one-out cross-validation
- Bias-Variance Tradeoff
	- Typically, omitting variables reduces bias and increases variance
	- This is a Goldilocks problem: Can't use too few or too many variables, just right amount
- Sparsity
	- We measure the (Lack of) sparsity of $\beta=(\beta_1,...,\beta_p)$ with the *q-norm*
- For both lasso and ridge regression, it's important to standardize the features so standard deviation of each feature (column) is a constant
- For low dimension prediction, we can use least squares
- For high dimesion linear regression, we face a bias-variance tradeoff:omitting too many variables causes bias while including too many variables causes high variance
- Use a good subset of variables
- Lasso ($l_1$ regularized least squares) is a fast way to select variables
- If there are good, sparse linear predictors, lasso will work well