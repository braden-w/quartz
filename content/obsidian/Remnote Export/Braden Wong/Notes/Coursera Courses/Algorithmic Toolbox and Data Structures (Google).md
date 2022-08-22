Algorithmic Toolbox
     Course 1 — Algorithmic toolbox — Part 1: Introduction
        Naïve Algorithms
     Course 1 — Algorithmic toolbox — Part 2: Big-O and Greedy
        Greedy Algorithms―maxim
            safe move―Consistent with some optimal solution
            method
                Make a greedy choice
                Prove it is a safe move
                Reduce to a subproblem
                Solve the subproblem
            knapsack (applied greedy method)
                Choose highest value object (greedy choice)
                Proved it is safe move (maximizes value)
                Reduce remaining subsection of knapsack as subproblem
                Apply 1. on remaining subproblem
     Course 1 — Algorithmic toolbox — Part 3: Divide and Conquer
        Divide and Conquer
            Multiplying Polynomials Problem
                pairwise problem―pair  a_0b_0, a_1b_0, a_0b_1, a_1b_1
                Karatsuba Algorithms―note that  a_1b_0+a_0b_1=(a_1+a_0)(b_1+b_0)-a_1b_1-a_0b_0
                    advantage―only need to calculate 3 instead of 4 terms
                 
     Course 2 — Data structure — Part 2: Priority queues and Disjoint set
        Dynamic Program
            The Coin Problem
                visualize RecursiveChange―https://remnote-user-data.s3.amazonaws.com/ykH8tXM-BZSifzkkh-5iGeCkvZfS19oaXJJXU1yn0RoN8mcOm3x_PH9qqq8ItjyJx3briHD1WO1f_8f6EPDeX7ZjPEr2Q4qc3iqNYVmWToOzDfpi9VRXWArBP8KuECB9
            definition―precompute and storing subproblems to find solution
            similar to―recursion
            helpful for―overlapping subproblems, solving the same problem many times

Data Structures
     Course 2 — Data structure — Part 1: The Basic data structures―Arrays read and write with O(1), Linked Lists insert after (and before with Double Linked) with O(1)
        Arrays vs. Linked List Advantages?―Arrays read and write with O(1), Linked Lists insert after (and before with Double Linked) with O(1)
        Arrays
            advantage for access―constant time for read and write
            only adding operation with O(1) time―append (all others require shifting)https://remnote-user-data.s3.amazonaws.com/ixLZ6K12Y0-LCwxp2hFOOx44bw_3FPyxzjHvX-sDv5xMchU7Xogw4E15e-eY1t9th0aIp473U_-Lq7E2pnmS9HoJNwJDYBaYd3rr5zbRDZd5aSK5s3pnefWUV-4Im3jN
        Linked Lists
            tail pointer―an additional node that points to the value of the tail element https://remnote-user-data.s3.amazonaws.com/bw0sVzFizYgQ1BPR9BQE1hs-clMATcCsqswHdN1hCijtoPyTg2yB0xdNqi9iUp9rcetv9_civYCXbYv5x75WQbeTRrb6aOlJBfYTTAXzyp6reS2tJSarifiYMWhRYIpK
            Operations―
                PopFront―O(1)
                PushFront―O(1)
                No tail
                    PushBack―O(n)
                    PopBack―O(n)
                Tail
                    PushBack―O(1)
                    PopBack―O(n)
                https://remnote-user-data.s3.amazonaws.com/RmQ_H3zr5EMyJfDIrGNNOQxrZeRAm6JExEIQNE1fJyvy3Pvou7ksQojl-yWG2BX5fyLBKFSW8Fmh8B088j0uDzoY5SORvStzE4_LXC5m4QzwIIpCtvilV2SaPjTZgGjw
            Singly vs. Doubly Linked List―PopBack and AddBefore are now O(1)
                https://remnote-user-data.s3.amazonaws.com/VShrlzYE6CXFxad2zpuIu5rF7-ZuDX9LWmNQW9WT-pFr2pSvt3f1kGrsILIZ7-Ph0PNsslXAEmNb4cbDOyCPLhPiTzMOjAvQ8QIAaGi8xvrYLphkAXsrMOb5ww9IKGZI
        Stacks―Adding and taking from the top of the list
            runtime O() of each stack operation (Push, Pop, Top, Empty)―O(1)
            cool implementation―Linked List, since shifting is an O(1) operation
        Queues―First first serve
            operations―Enqueue, dequeue
        Dynamic Array―Array that resizes to add new elements
            Stores array, capacity, and size
                Which one is bigger?―Capacity (doubles every so often)
     Course 2 — Data structure — Part 2: Priority queues and Disjoint set
        Priority Queues (vs. queues)―No front or back, but a bag of assigned prioritieshttps://remnote-user-data.s3.amazonaws.com/XzbOy7TX7QSxwy0-SZQlzzfE76FazBrL3io0-qrWfdev64aPWruCzblXtc43C179DQrJ4le0u8TJP02HTIkBqvmmBWYQbk1ImMfpMW5IaPFEkWlP_qj1vi4vZNpoXiPh
            useful in many different algorithms (like Dijsktra's)
            Functions in a priority queue
                Remove
                GetMax
                ChangePriority
            using an unsorted array vs. sorted getMax() runtime―O( n ) vs. O(1)
            using an unsorted array vs. sorted insert() runtime―O(1) vs. O(n )
        Binary Tree―Tree with roots
            complete binary tree (aka heap)―All levels filled except possibly lowest one, which is filled  left  to  right 
            Heap―A binary tree that is a complete binary tree (aka heap)
            Height―The maximum number of edges, not nodes
                A tree with only one node has height  0 
        Heap Sort―create a heap/binary tree and swap until root is largest node, then prepend to output and swap with the last node
            Sift―Look at children nodes and replace swap parent with child if greater
                Insert uses SiftUp t
                SiftDown―Start from top node and work down
                    runtime―based off the height of the tree but also how many children per node (to be compared), or O( n\log n  )
                    Used in  extractMax  to replace root node with last leaf and let it sift down the tree
                SiftUp―Start from bottom node and work up
                    runtime―based off the height of the tree, or O( \log n  )
                    Used in  insert  function to attach a value to a bottom leaf and let it bubble up the node tree
            used with heap sort―start with quicksort, if runtime appears to be worse than  n\log n , then switch to heap sort
        Disjoint Sets― 
            Union(a,b)―Attaches shorter of a or b to the taller tree's root. If a and b have same Height, then attach a to b
            Rank Heuristic―Compares tree heights and places shorter under taller
            Path Compression Heuristic―Finds root of node and attaches node directly to root (height becomes 1)
    Amortized Cost―A schedule that pays the average cost of something over time
        example with $6,000 car in 5 years/60 months―amortized cost is $100 per month
        Amortized Analysis 3 Methods
            Aggregate Method
            Banker's Method―Use tokens to simulate payment
            Physicist Method―Model algo with a formula
Trees
    search functions: depth-first search vs. breadth-first search―depth-first search vs. breadth-first search
    Depth-first search methods
        Left to right, up to down
        InOrderTraversal (binary trees)―Print left child, parent, then right child
        PreOrderTraversal―Print children, then parent



