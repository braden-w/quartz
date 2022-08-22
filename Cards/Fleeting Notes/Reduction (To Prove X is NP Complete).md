---
tags:
- On/Complexity
date: "2022-06-16"
date modified: "2022-06-16"
title: Reduction (To Prove X is NP Complete)
---

# Reduction (To Prove X is NP Complete)
To prove $x$ is [[NP Complete]]:

## 1. Prove X is NP

## 2. Prove X is NP Hard
1. Find a problem $y$ that is already [[NP Complete]].
2. Express $y$ in terms of $x$. If we can solve $x$, then we can solve $y$.
3. This proves that $y\leq x$ ($y$ reduces to $x$) and therefore, $x$ is [[NP Complete]]
