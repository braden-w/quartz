---
date: "2022-03-04"
date modified: "2022-06-15"
title: Dynamic Programming
---

# Dynamic Programming
From: Section on [[2022-03-04]]

## Fibonacci Example
$$F(n)=F(n-1)+F(n-2)$$

### Tree?
> F(n)
> F(n-1) F(n-2)
> …        …

### Table?
> F(1) = 1
> F(2) = 1
> …

### Function?
```
for(i=3, i<= n, i++){
	F(i) = F(i-1)+F(i-2)
}
return K(n)

```

## Structure?
>Always has a [[For Loop]]

## Rod Cutting Example

### T(n) Meaning?
> Max value that can be obtained from cutting rod of length n

## [[Recurrence]]?
> T(4) = max{P(4)+T(0), …, P(1)+T(3)}
