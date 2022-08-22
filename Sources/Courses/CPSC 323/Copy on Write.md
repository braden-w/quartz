---
date: "2021-12-06"
date modified: "2022-06-15"
title: Copy on Write
---

# Copy on Write
Actual copying is deferred until write

From Wikipedia:
>  Copy-on-write can be implemented efficiently using the page table by marking certain pages of memory as read-only and keeping a count of the number of references to the page. When data is written to these pages, the kernel intercepts the write attempt and allocates a new physical page, initialized with the copy-on-write data, although the allocation can be skipped if there is only one reference. The kernel then updates the page table with the new (writable) page, decrements the number of references, and performs the write. The new allocation ensures that a change in the memory of one process is not visible in another's.
