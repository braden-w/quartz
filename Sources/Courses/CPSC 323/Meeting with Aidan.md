---
date created: Monday, November 22nd 2021, 10:50:21 pm
date modified: "2022-02-01"
title: Meeting with Aidan
---

# Meeting with Aidan
Pagetable is a collection of pages

A page can have multiple pages, in which it becomes a pagetable

![](https://i.imgur.com/lzdvH5o.png)
![](https://i.imgur.com/iMtkYaL.png)

- Each page is also pointing to something technically in physical memory
- The number of pages on last level determines how much actual memory you have
- It looks like we have way more memory than we actually have (look at bottommost pagetable)

Step 6 uses K-Loader

All other steps are only kernel.c

Step 1, under case statement and part of kernel

Step 2, 5, 7 are most difficult

## Make Utility Functions
- Step 2 - Find a free page and make it a utility function - Making a pagetable
- Step 7 - Freeing a Page Table

```ad-note
Number one tip: Look at visualization as it is happening. **Make sure the visuals match.**
```

##

Reverse_Video or lines 5-8 have PTE_U and PTE_W permissions

Lines 1-4 don't have permissions, except one spot CONSOLE_ADDR
