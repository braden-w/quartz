---
date: "2022-01-31"
date modified: "2022-06-15"
title: Lagrange Method
---

# Lagrange Method

## Lagrange Function
Start with the Lagrange Function, which is the sum of

1. The objective function (original)
2. $\lambda \cdot$ (the constraint function - any constants)
$$L = u(x_1,x_2) + \lambda \cdot [f(x_1, f_2) - c]$$

where $c=0$.

![](https://i.imgur.com/QoiraCv.png)

Necessary [[First-Order Condition]]s

![](https://i.imgur.com/tDflCv7.png)

![](https://i.imgur.com/YqFZ3t3.png)

## Example: Max of $f(x_1,x_2)=x_1^\frac{1}{2}x_2^\frac{1}{2}$

## Convert to [[#Lagrange Function]] $L$
![](https://i.imgur.com/SqvTVjB.png)

![](https://i.imgur.com/IjkDv3P.png)

### Create System of Three Equations, Setting Partials to 0 Using the [[First-Order Condition]]s for [[Lagrange Method]]
![](https://i.imgur.com/XVAebIt.png)

### Solve System of Equations

#### Move Constants to Opposite Sides and Divide Equation 1 and 2
![](https://i.imgur.com/YT6K1o7.png)

#### Isolate $x_1$ and Plug into Equation 3
![](https://i.imgur.com/R7PvefZ.png)

#### Using Above, Solve and Get $x_1^*$ and $x_2^*$

### Plug in Both $x_1^*$ and $x_2^*$ into the First or Second Equation to Get $\lambda ^*$. YYu Are Now Done.

## [[Second-Order Condition]] for Lagrange Method
1. Construct Hessian Matrix
	- ![](https://i.imgur.com/0eZcaxb.png)
2. Plug in candidates from
