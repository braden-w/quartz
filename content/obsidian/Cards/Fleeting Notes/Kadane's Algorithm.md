---
tags:
- On/Computer_Science/Algorithms
date: "2022-06-16"
date modified: "2022-06-16"
title: Kadane's Algorithm
---

# Kadane's Algorithm
```python
def max_subarray(numbers):
    """Find the largest sum of any contiguous subarray."""
    best_sum = 0
    current_sum = 0
    for x in numbers:
        current_sum = max(0, current_sum + x)
        best_sum = max(best_sum, current_sum)
    return best_sum
```
