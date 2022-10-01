---
aliases: ECON 121 Intermediate Microeconomics
date: "2022-01-27"
date modified: "2022-09-21"
title: ECON 121
---

# ECON 121

# Old Spring 2022

## Lecture 1
In models, economic [[Agent]]s pursue well-defined goals, optimizing under restrictions

1. [[Unconstrained Optimization]]
	- First-order conditions
	- Second-order conditions
2. [[Constrained Optimization]]
	- Substitution method
	- Lagrange method

- [[Constrained Optimization]] vs. [[Unconstrained Optimization]]
	- Constrained has a "such that $f(x,y)=0$" condition
	- ![](https://i.imgur.com/HcxEn5h.png)

## Single-variable [[Optimization]], No Constraint
[[First-Order Condition]] is the first derivative
![](https://i.imgur.com/yhiQVAD.png)

[[Second-Order Condition]] is the second derivative
![](https://i.imgur.com/ocJbvJx.png)

When [[First-Order Condition]] and [[Second-Order Condition]] are both 0, you must investigate further

![](https://i.imgur.com/wFUYqDm.png)

Hessian Matrix

  $$\begin{bmatrix}
	u_{11} & u_{12} \\
	u_{21} & u_{22}
  \end{bmatrix}$$

![](https://i.imgur.com/9alu73t.png)

## [[Constrained Optimization]]

### Example of [[Constrained Optimization#Method 1 Substitution]]
![](https://i.imgur.com/kLUysbl.png)

### Example of [[Constrained Optimization#Method 2 Lagrange Method]]
![](https://i.imgur.com/XdF5zQn.png)

When to use [[Lagrange Method]]?

When there are more than two variables

## Section
Utility Functions

![](https://i.imgur.com/Hf3kR7M.png)

# Fall 2022

## Lecture 1 [[2022-09-01]]
- Incentives structure
- Australia example: Paying for ALIVE receive prisoners increased survivorship rate to 99%
- Tesla Patents
	- Giving away technology
	- Leads to more investement in electric companiess
	- It's not sharing the pie, but increasing the pie
		- [[Increase the Pie, Not the Slice]]

### Derivatives, [[First-Order Condition]] and Second Order Condtions
- Derivative (Math)
- The maximum has two properties:
	- [[First-Order Condition]]
	- [[Second-Order Condition]]
- The [[Second-Order Condition]] forms something caled the [[Hessian Matrix]]
| | $x_1$ | $x_2$ |
| ----- | -------- | -------- |
| $x_1$ | $f_{11}$ | $f_{12}$ |
| $x_2$ | $f_{21}$ | $f_{22}$ |
- We take the determinant of the [[Hessian Matrix]]
	- How to interpret the determinant
	- If $f_{11}$ and the determinant alternate in sign, then it is a **maximum**
	- Otherwise, if they have the same sign, then it is a **minimum**

## Lecture 2 [[2022-08-08 Hoppsibs 2021-2022 sign-up]]
[[Young's theorem]]
Example:
1. The second-order partial for any variable is **positive** at $(x_1^*,x_2^*)$
2. The determinanet of the Hessian $H$ is **positive**
The two parts must have the same sign.

The budget constraint:
- A consumption bundle is affordable if expenditure < income

### The basic approach
1. Take partial derivatives for all $n$ variables
2. Then solve system of equations!

[[Double coincidence of wants]]
[[Shadow value]] is the same as $\lambda$
Plugging in everything
![](https://i.imgur.com/zRt6JFe.jpg)
$-\lambda$ captures how valuable is on extra unit of income
In most cases, cost of one good affects other goods. In Cobb Douglas utility function, each quantity of goods is only dependent on its own price, not other goods

## Lecture [[2022-09-13]]
- Consumption bundles
- We write $(x_1, x_2) \succeq (y_1, y_2)$ to show weakly prefers bundle
	- Equivalent to $U(x_1, x_2) \geq U(y_1, y_2)$
- Axioms of rational choice (comparing consumption bundles)
	1. Completeness
		- Any two Consumption Bundles can be compared
	2. Transitivity
	3. Continuity
		- Similar situations to $(x_1, x_2) \succeq (y_1, y_2)$ will also lead to $(x_1, x_2) \succeq (y_1, y_2)$

- If $U$ is quasiconcave, we can ignore the second-order condition
	- **If utility function is quasiconcave and constraint is linear, then first-order conditions are necessary and sufficient for identifying a local interior constrained maximum**

## Lecture [[2022-09-15]]
- [[Marginal rate of substitution (MRS)]] is the slope of the [[Indifference curve (IC)]]
- Budget curve given $p_1x_1 + p_2x_2 = I$
	- Increasing $I$:: Paralel shift outwrad from budget line (slope is the same)
	- Increasing $p_1$:: Budget line is steeper
	- Increasing $p_2$:: Budget line is leess steep
- Perfect substitutes
	- All that matters is price
	- [[Indifference curve (IC)]] is linear
- Perfect complements
	- You want to consume in **fixed proportions to each other** (I want a *right* shoe and a *left* shoe)
	- [[Indifference curve (IC)]] is L-shaped
	- [[Marginal rate of substitution (MRS)]] is therefore zero or infinity
- Positive slope [[Indifference curve (IC)]]
	- One good is bad, and you want to spend all your money on only one good
- Conclusion: Substitutes vs. complements
	- Good 2 is substitute for good 1 if $\frac{dx^*_2}{dp_1}>0$
		- Consume **more** of good 2 if price of good 1 increases
	- Good 2 is complement for good 1 if $\frac{dx^*_2}{dp_1}<0$
		- Consume **less** of good 2 if price of good 1 increases

## Lecture [[2022-09-15]]
- Monotonoic preferences mean you prefer more rather than less
- [[Indifference curve (IC)]] represents consumption bundles that yield the same utility level
- [[Marginal rate of substitution (MRS)]] is the rate an individual is willing to trade $x_2$ for $x_1$
- Homogenous functions
	- $f(cx)$ is proportional to $cf(x)$

## Problem Set [[2022-09-20]]
- To find IC, set $u(x_1,x_2)$ to $c$ and solve for $x_2$

- Cobb Douglas
	- ![](https://i.imgur.com/gX6OB1a.jpg)
- Optimality condition for perfect complements is equality
	- $u_3=\min\{2x_1, 3x_2\}$
	- $2x_1 = 3x_2$
	
## Lecture 8 [[2022-09-29]]
![](https://i.imgur.com/Ukempm9.jpg)

