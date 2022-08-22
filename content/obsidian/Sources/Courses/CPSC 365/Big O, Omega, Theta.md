---
date: "2022-03-09"
date modified: "2022-06-15"
title: 'Big O, Omega, Theta'
---

# Big O, Omega, Theta
|                 |     |                                                                    |
| --------------- | --- | ------------------------------------------------------------------ |
| $f=O(g)$        | iff | $\exists c>0, N>0$ s.t. $\forall n \geq N, f(n) \leq C \cdot g(n)$ |
| $f = \Omega(g)$ | iff | $\exists c>0, N>0$ s.t. $\forall n \geq N, f(n) \geq C \cdot g(n)$ |
| $f = \Theta(g)$ | iff | $f=O(g)$ and $f=\Omega(g)$                                         |
