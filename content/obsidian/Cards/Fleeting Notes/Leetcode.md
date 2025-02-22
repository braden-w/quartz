---
tags:
- On/Programming
- Type/Source/Reference
date: "2022-06-16"
date modified: "2022-06-29"
title: Leetcode
---

# Leetcode
[[Kadane's Algorithm]]
If they require midpoint, [[Floyd's Cycle Finding Algorithm (Two Runners at Different Speeds)]]
[[collections.Counter(string)]]
[[Elements of Programming Interviews]]
[[Binary Tree Traversal]]
If an array is sorted, consider using two pointers (two sum)
[[Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell]]

## Arrays
- [x] [**Contains Duplicate**](https://leetcode.com/problems/contains-duplicate/)
- [x] [**Valid Anagram**](https://leetcode.com/problems/valid-anagram/)
- [x] [**Two Sum**](https://leetcode.com/problems/two-sum/)
 - [ ] [**Group Anagrams**](https://leetcode.com/problems/group-anagrams/)
	 - Use collections.defaultdict(list)
		 - [[collections.defaultdict(construtor)]]
	 1. Use sorted as hash and array of strings as key
	 2. Just count characters since there are 26 possible ones
		 1. Array of 26 0's, add 1 when count increases using [[ord(char)]]
		 2. Hash map stores these arrays
			 - Key: 26 numbers representing count, stored as tuple (hashable)
			 - Value: Strings
- [ ] [**Top K Frequent Elements**](https://leetcode.com/problems/top-k-frequent-elements/)
	1. Store item and their counts, then sort by value
	2. Bucket sort
		- Array bounded by the number of elements in the array
- [ ] [**Product of Array Except Self**](https://leetcode.com/problems/product-of-array-except-self/)
- [ ] [**Valid Sudoku**](https://leetcode.com/problems/valid-sudoku/)
- [ ] [**Encode and Decode Strings**](https://www.lintcode.com/problem/659/)
- [ ] [**Longest Consecutive Sequence**](https://leetcode.com/problems/longest-consecutive-sequence/)

## Two Pointers
- [ ] [**Valid Palindrome**](https://leetcode.com/problems/valid-palindrome/)
- [ ] [**Two Sum II**](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
	- Two Pointers, increase left if too small, decrease right if too little
- [ ] [**3Sum**](https://leetcode.com/problems/3sum/)
	- Sort array, then two sum (II) for each elent
- [ ] [**Container with Most Water**](https://leetcode.com/problems/container-with-most-water/)
- [ ] [**Trapping Rain Water**](https://leetcode.com/problems/trapping-rain-water/)

## Sliding Window
- [ ] [**Best Time to Buy & Sell Stock**](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [ ] [**Longest Substring Without Repeating Characters**](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [ ] [**Longest Repeating Character Replacement**](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [ ] [**Permutation in String**](https://leetcode.com/problems/permutation-in-string/)
- [ ] [**Minimum Window Substring**](https://leetcode.com/problems/minimum-window-substring/)
- [ ] [**Sliding Window Maximum**](https://leetcode.com/problems/sliding-window-maximum/)

## Stack
- [ ] [**Valid Parentheses**](https://leetcode.com/problems/valid-parentheses/)
- [ ] [**Min Stack**](https://leetcode.com/problems/min-stack/)
- [ ] [**Evaluate Reverse Polish Notation**](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
- [ ] [**Generate Parentheses**](https://leetcode.com/problems/generate-parentheses/)
- [ ] [**Daily Temperatures**](https://leetcode.com/problems/daily-temperatures/)
- [ ] [**Car Fleet**](https://leetcode.com/problems/car-fleet/)
- [ ] [**Largest Rectangle in Histogram**](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Binary Search
- [ ] [**Binary Search**](https://leetcode.com/problems/binary-search/)
- [ ] [**Search a 2D Matrix**](https://leetcode.com/problems/search-a-2d-matrix/)
- [ ] [**Koko Eating Bananas**](https://leetcode.com/problems/koko-eating-bananas/)
- [ ] [**Search Rotated Sorted Array**](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [ ] [**Find Minimum in Rotated Sorted Array**](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [ ] [**Time Based Key-Value Store**](https://leetcode.com/problems/time-based-key-value-store/)
- [ ] [**Find Median of Two Sorted Arrays**](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Linked List
- [ ] [**Reverse Linked List**](https://leetcode.com/problems/reverse-linked-list/)
- [ ] [**Merge Two Linked Lists**](https://leetcode.com/problems/merge-two-sorted-lists/)
- [ ] [**Reorder List**](https://leetcode.com/problems/reorder-list/)
- [ ] [**Remove Nth Node from End of List**](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [ ] [**Copy List with Random Pointer**](https://leetcode.com/problems/copy-list-with-random-pointer/)
- [ ] [**Add Two Numbers**](https://leetcode.com/problems/add-two-numbers/)
- [ ] [**Linked List Cycle**](https://leetcode.com/problems/linked-list-cycle/)
- [ ] [**Find the Duplicate Number**](https://leetcode.com/problems/find-the-duplicate-number/)
- [ ] [**LRU Cache**](https://leetcode.com/problems/lru-cache/)
- [ ] [**Merge K Sorted Lists**](https://leetcode.com/problems/merge-k-sorted-lists/)
- [ ] [**Reverse Nodes in K-Group**](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Trees
- [ ] [**Invert Binary Tree**](https://leetcode.com/problems/invert-binary-tree/)
- [ ] [**Maximum Depth of Binary Tree**](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
	- [ ] Recursive DFS
	- [ ] Iterative DFS (stack)
	- [ ] Iterative BFS (queue)
- [ ] [**Diameter of a Binary Tree**](https://leetcode.com/problems/diameter-of-binary-tree/)
- [ ] [**Balanced Binary Tree**](https://leetcode.com/problems/balanced-binary-tree/)
- [ ] [**Same Tree**](https://leetcode.com/problems/same-tree/)
	- [ ] Recursive DFS
- [ ] [**Subtree of Another Tree**](https://leetcode.com/problems/subtree-of-another-tree/)
	- [ ] Scan through and use Same Tree
- [ ] [**Lowest Common Ancestor of a BST**](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [ ] [**Binary Tree Level Order Traversal**](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [ ] [**Binary Tree Right Side View**](https://leetcode.com/problems/binary-tree-right-side-view/)
- [ ] [**Count Good Nodes in a Binary Tree**](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)
- [ ] [**Validate Binary Search Tree**](https://leetcode.com/problems/validate-binary-search-tree/)
- [ ] [**Kth Smallest Element in a BST**](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [ ] [**Construct Tree from Preorder and Inorder Traversal**](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [ ] [**Binary Tree Max Path Sum**](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [ ] [**Serialize and Deserialize Binary Tree**](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

## Tries
- [ ] [**Implement Trie**](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [ ] [**Design Add and Search Word Data Structure**](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [ ] [**Word Search II**](https://leetcode.com/problems/word-search-ii/)

## Heaps / Priority Queues
- [ ] [**Kth Largest Element in a Stream**](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
- [ ] [**Last Stone Weight**](https://leetcode.com/problems/last-stone-weight/)
- [ ] [**K Closest Points to Origin**](https://leetcode.com/problems/k-closest-points-to-origin/)
- [ ] [**Kth Largest Element in an Array**](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [ ] [**Task Scheduler**](https://leetcode.com/problems/task-scheduler/)
- [ ] [**Design Twitter**](https://leetcode.com/problems/design-twitter/)
- [ ] [**Find Median from Data Stream**](https://leetcode.com/problems/find-median-from-data-stream/)

## Backtracking
- [ ] [**Subsets**](https://leetcode.com/problems/subsets/)
- [ ] [**Combination Sum**](https://leetcode.com/problems/combination-sum/)
- [ ] [**Permutations**](https://leetcode.com/problems/permutations/)
- [ ] [**Subsets II**](https://leetcode.com/problems/subsets-ii/)
- [ ] [**Combination Sum II**](https://leetcode.com/problems/combination-sum-ii/)
- [ ] [**Word Search**](https://leetcode.com/problems/word-search/)
- [ ] [**Palindrome Partitioning**](https://leetcode.com/problems/palindrome-partitioning/)
- [ ] [**Letter Combinations of a Phone Number**](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [ ] [**N-Queens**](https://leetcode.com/problems/n-queens/)

## Graphs
- [ ] [**Number of Islands**](https://leetcode.com/problems/number-of-islands/)
- [ ] [**Clone Graph**](https://leetcode.com/problems/clone-graph/)
- [ ] [**Max Area of Island**](https://leetcode.com/problems/max-area-of-island/)
- [ ] [**Pacific Atlantic Waterflow**](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [ ] [**Surrounded Regions**](https://leetcode.com/problems/surrounded-regions/)
- [ ] [**Rotting Oranges**](https://leetcode.com/problems/rotting-oranges/)
- [ ] [**Walls and Gates**](https://www.lintcode.com/problem/663/)
- [ ] [**Course Schedule**](https://leetcode.com/problems/course-schedule/)
- [ ] [**Course Schedule II**](https://leetcode.com/problems/course-schedule-ii/)
- [ ] [**Redundant Connection**](https://leetcode.com/problems/redundant-connection/)
- [ ] [**Number of Connected Components in Graph**](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- [ ] [**Graph Valid Tree**](https://www.lintcode.com/problem/graph-valid-tree/description)
- [ ] [**Word Ladder**](https://leetcode.com/problems/word-ladder/)

## Advanced Graphs
- [ ] [**Reconstruct Itinerary**](https://leetcode.com/problems/reconstruct-itinerary/)
- [ ] [**Min Cost to Connect all Points**](https://leetcode.com/problems/min-cost-to-connect-all-points/)
- [ ] [**Network Delay Time**](https://leetcode.com/problems/network-delay-time/)
- [ ] [**Swim in Rising Water**](https://leetcode.com/problems/swim-in-rising-water/)
- [ ] [**Alien Dictionary**](https://www.lintcode.com/problem/892/)
- [ ] [**Cheapest Flights Within K Stops**](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

## 1D Dynamic Programming
- [ ] [**Climbing Stairs**](https://leetcode.com/problems/climbing-stairs/)
- [ ] [**Min Cost Climbing Stairs**](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [ ] [**House Robber**](https://leetcode.com/problems/house-robber/)
- [ ] [**House Robber II**](https://leetcode.com/problems/house-robber-ii/)
- [ ] [**Longest Palindromic Substring**](https://leetcode.com/problems/longest-palindromic-substring/)
- [ ] [**Palindromic Substrings**](https://leetcode.com/problems/palindromic-substrings/)
- [ ] [**Decode Ways**](https://leetcode.com/problems/decode-ways/)
- [ ] [**Coin Change**](https://leetcode.com/problems/coin-change/)
- [ ] [**Maximum Product Subarray**](https://leetcode.com/problems/maximum-product-subarray/)
- [ ] [**Word Break**](https://leetcode.com/problems/word-break/)
- [ ] [**Longest Increasing Subsequence**](https://leetcode.com/problems/longest-increasing-subsequence/)
- [ ] [**Partition Equal Subset Sum**](https://leetcode.com/problems/partition-equal-subset-sum/)

## 2D Dynamic Programming
- [ ] [**Unique Paths**](https://leetcode.com/problems/unique-paths/)
- [ ] [**Longest Common Subsequence**](https://leetcode.com/problems/longest-common-subsequence/)
- [ ] [**Best Time to Buy/Sell Stock With Cooldown**](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [ ] [**Coin Change II**](https://leetcode.com/problems/coin-change-2/)
- [ ] [**Target Sum**](https://leetcode.com/problems/target-sum/)
- [ ] [**Interleaving String**](https://leetcode.com/problems/interleaving-string/)
- [ ] [**Longest Increasing Path in a Matrix**](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [ ] [**Distinct Subsequences**](https://leetcode.com/problems/distinct-subsequences/)
- [ ] [**Edit Distance**](https://leetcode.com/problems/edit-distance/)
- [ ] [**Burst Balloons**](https://leetcode.com/problems/burst-balloons/)
- [ ] [**Regular Expression Matching**](https://leetcode.com/problems/regular-expression-matching/)

## Greedy
- [ ] [**Maximum Subarray**](https://leetcode.com/problems/maximum-subarray/)
- [ ] [**Jump Game**](https://leetcode.com/problems/jump-game/)
- [ ] [**Jump Game II**](https://leetcode.com/problems/jump-game-ii/)
- [ ] [**Gas Station**](https://leetcode.com/problems/gas-station/)
- [ ] [**Hand of Straights**](https://leetcode.com/problems/hand-of-straights/)
- [ ] [**Merge Triplets to Form Target Triplet**](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/)
- [ ] [**Partition Labels**](https://leetcode.com/problems/partition-labels/)
- [ ] [**Valid Parenthesis String**](https://leetcode.com/problems/valid-parenthesis-string/)

## Intervals
- [ ] [**Insert Interval**](https://leetcode.com/problems/insert-interval/)
- [ ] [**Merge Intervals**](https://leetcode.com/problems/merge-intervals/)
- [ ] [**Non-Overlapping Intervals**](https://leetcode.com/problems/non-overlapping-intervals/)
- [ ] [**Meeting Rooms**](https://www.lintcode.com/problem/920/)
	- [ ] Sort the intervals, then check if the start of each doesn't intersect with the end of the previous one
- [ ] [**Meeting Rooms II**](https://www.lintcode.com/problem/919/)
- [ ] [**Minimum Interval to Include Each Query**](https://leetcode.com/problems/minimum-interval-to-include-each-query/)

## Math and Geometry
- [ ] [**Rotate Image**](https://leetcode.com/problems/rotate-image/)
- [ ] [**Spiral Matrix**](https://leetcode.com/problems/spiral-matrix/)
- [ ] [**Set Matrix Zeroes**](https://leetcode.com/problems/set-matrix-zeroes/)
- [ ] [**Happy Number**](https://leetcode.com/problems/happy-number/)
- [ ] [**Plus One**](https://leetcode.com/problems/plus-one/)
- [ ] [**Pow(x, n)**](https://leetcode.com/problems/powx-n/)
- [ ] [**Multiply Strings**](https://leetcode.com/problems/multiply-strings/)
- [ ] [**Detect Squares**](https://leetcode.com/problems/detect-squares/)

## Bit Manipulation
- [ ] [**Single Number**](https://leetcode.com/problems/single-number/)
- [ ] [**Number of 1 Bits**](https://leetcode.com/problems/number-of-1-bits/)
- [ ] [**Counting Bits**](https://leetcode.com/problems/counting-bits/)
- [ ] [**Reverse Bits**](https://leetcode.com/problems/reverse-bits/)
- [ ] [**Missing Number**](https://leetcode.com/problems/missing-number/)
- [ ] [**Sum of Two Integers**](https://leetcode.com/problems/sum-of-two-integers/)
- [ ] [**Reverse Integer**](https://leetcode.com/problems/reverse-integer/)

- [ ] ---
- [ ] References:
