August 31st, 2020
    Number of primes of form n^2-1 and n^2+1―1 (just 3) and unknown
Proofs September 2nd, 2020
    Proof Based Math Steps
        Make up definitions
        Conjecture (make statements)
        Prove (discern which statements are true)
    If  A  then  B
        https://remnote-user-data.s3.amazonaws.com/rVHfO-umC66vLwm39ETVp0ghBcMAYc40XoGXQJ5q4uKXV85keRfPfZhViIXiPn2ID9Y1NH7lhCoTS65wY4dbi6lo44kXSKqE5-XkYi2MNFG8munNC1oZ7tHoKC9bRoi9  
        written as→A \Rightarrow B 
        is true unless A is  true B is false  
            for example→if the moon is made of cheese, then 5 is even is true
    Iff A and B
        written as→ A \Leftrightarrow B
        is true if→ A \Rightarrow B and  B \Rightarrow A
            example→"x is odd" iff "x+1 is even"
            we also call A and B→equivalent
    Vacuously true
        the counterexample
        https://remnote-user-data.s3.amazonaws.com/MZC5WU2jSs5W-S7M3QDdEXqXNPYGPyGbCz69IvIVJd0L05pP5S3WOWb-oPZddyjws6jrFiBsVa6UmSUFzitIRhZ8KF0ZA0mhYnPED4C26t7yBqqTausfRILINP4hnJZR
    Components of Proof
        comma→and
        ∀↔forall
    https://remnote-user-data.s3.amazonaws.com/9OO5KZgaSqAfg88DMzDJQ_o9sgxbyq_imtz7aSh9-qu-V7se7mdAYonyHQP2BPzdN1HIKSgKTZHrkkXZpnuqZjUSlCrzpWjj3760AR99v3eR-MEL9RguoUms-RP5JVtp  
    
September 4th, 2020
    Proof Techniques
        Direct Proof
        Contradiction
        Induction
    Theorem↔Something that is true and proven
Induction, Rational Numbers September 7th, 2020
    Real numbers↔can be expressed as (possible repeating) decimal
    ∃↔there exists
https://math.berkeley.edu/~hutching/teach/proofs.pdf  
    Quantifier↔"for every" and "there exists"
        example→For every integer x, x is even.There exists an integerxsuch thatxis even
    "x is even" is not a statement unless you↔define x. This is called a quantifier
Proof Writing Techniques
    
    Proof by Contrapositive
        the inspiration→prove that the opposite in reverse is true.
        https://remnote-user-data.s3.amazonaws.com/LMFw7qLk4MMESlrOli_hnsXZZfSx_WLUoIRCNI4YJ685nOVBA1KEK1LsBbKANlM24X4WjHO9HoU5NkZ15iJ1AC_gTMByqC3ZzOD5wDiaehCTvO01InlSUj38zfzmvjw6
    Proof by Contradiction
        the inspiration→prove the opposite is false
        https://remnote-user-data.s3.amazonaws.com/BN2CO8kBNuveJYaZecZ5nRVOluY4_k2LIlLZoUctxhooTWhWLPqHXgDifLNNerXqQKJl8VewwbTY7R2znaXDOybZMHGv_AqgsPgmVbL2UsDZr3EaFYS0pFd6UsepmEkM  
    Proof by cases
        the inspiration→split into cases and prove for each
        https://remnote-user-data.s3.amazonaws.com/d5FQM-ayU4lfB3QlclPsnt4xJFhsWPzn7IkPtDYBJEfa_jUTWG9tDmJs3ks9SgNbBx3CGeEiuIrMaC2xXrlAgwox9BAIahabAHmNtg1eFFOJTK4HWWyQrNlT3D3nnLV1  
    Proof by induction
        base case→The statement is true in the case where n= 1
        inductive step→if the statement is true for n=k, then the statement is also true for n=k+1
    Proof by strong induction
        different inductive step from Proof by induction→if the statement is true for all values of 1≤n < k, then the statement is also true for n=k. #[[Proof by induction]] 
        https://remnote-user-data.s3.amazonaws.com/LZ_D_4TrgQLINCsA5qdqqedM8mZUleYsQRdeE8WQFB1bYY8OlclLSOmaXwrMLygf2lnXW9gG1NXwoDJUfdfnSDxYKxecPt67jOJDSVr-MMT70j-mFkOCQXDFuVXmnKVu→https://remnote-user-data.s3.amazonaws.com/5Lj14n1XRmiIUx0Gn0GCwi4GWexll4fvlXLGVG8P3NRce__YuxC0Fst296Dx7wFz7K5Wr9AB1WiJBamFf9ajS52pJxznA7eJOviXLlymtOjGKKZMqS0mNiUW1Wo3fZG4
Sets
    Injective, surjective, bijective September 9th, 2020
        https://remnote-user-data.s3.amazonaws.com/9T3VFNydHBA6XYfGxbf-IZJgrf22jfSpJLq3c4wpbTuBTZRBRwuoQsDlH81A9j-3s4_-Qqt3xOYbR025ZhIGBvxYmyQ17_eDT6HTzqhQd3TBWf3wnZBOYHw8KEJgr0SW  
        injective→every B is hit at most once. Iff f(x) = f(y) then x must = y
        surjective→every B is hit at least once. Iff for all y, there exists x where f(x)=y
        bijective→every B is hit exactly once. Iff both injective and surjective
    Image of function Im(f)↔{Set of all outputs f(a)}, or {Set of all b where there exists a such that f(a)=b}
    Countable↔A set S is countable iff there exists a surjection such that g:  \mathbb{N}--> S
        \mathbb{Z} is→countable  https://remnote-user-data.s3.amazonaws.com/0mxPql3M43TIeZtJdPstth6FpFHDvRg-RstZQkUC8ezlwZ4KCKwl1lNnzTZ7EAYc2yzBxCK-_SszrQ4FkZjfp9gdTIAIUDARLnnkpGYrE4wCStNCg_Ll_-DWNe43XJRX  The right side covers all Z using natural numbers
        Any set that you can describe is countable (even numbers, odd integers, etc.)
        Cantor's diagonal argument↔(0,1) is not countable
            proof by→contradiction. Suppose (0,1) is countable and therefore f(N) -> (0,1) is a surjection. This means that for all  b\in (0,1)  there existsa such that  f(a)=b
            https://remnote-user-data.s3.amazonaws.com/rftK5gm0vJehk8RtxdLEdnwkFcY5m2F_ykKnlABjd2DZe1DHZohyWvG9zEUTzxFzM7VeA2lfNxKiM1mY39ey7lgCPwaur_WfWrpSraBL7z9zyIcv5UKOyTij7Fk_-sSu  Consider random results for (1,2,3,4)
            https://remnote-user-data.s3.amazonaws.com/NX4t3TAaYUz4fABcCLHAUU5ktxXyUfe-AJrDDcuzo7NtZvHWD3za63pbxGDwHT-7XCDbR2fi96maf7MypLXyxDIoS5Wui9C4oW5WXh7D_qAdpZY_UM8u_8DGCthjS9hn  
            https://remnote-user-data.s3.amazonaws.com/OsD-JA39BhsAKrrHpRAYpYvUSM1j4-EdsT4VtzYKw9iMDj-PEfpnFC9yp94tQbT0DItcdbV7axR_D1fJjuyPx0lXAWAc7H3UBjz5ACAuOa2wFtnE6OIY1wzQsIDfvnye  
            Implications
                 R is uncountable
                 Q\neq R  since  Q  is countable and  R  is not
                There are real numbers that can't be described in any way   
    Lower, upper bounds, sup, inf
        Given  S\subseteq R  
             L\in R is a lower bound iff→for all  x\in S   ,  L\leq x  .
             U\in Ris a lower bound iff→for all  x\in S   ,  U\geq x  .
            Supremum sup()↔Least of upper bound for S
            Infinum inf()↔Greatest of lower bound for S
            sups, infs, lower, and upper bounds do not need to belong in  S   
            difference between bounds and sup or inf→bounds can be any number and there are infinite bounds. However, there is only one sup or inf
        warmup: Find set  S\in R  with no sup or inf→ R  has no sup or inf, any set that extends infinitely in a direction
            find a set with a inf but no sup→ N
         \empty
            how many upper and lower bounds?→infinitely many
            sup or inf?→none, because infinitely many bounds  
        R is dedekind complete→If S  is nonempty set of  R  and  S  has an upper bound, it has a least upper bound (sup). If S  has lower bound, it has a greatest upper bound (inf). #Theorem
            If  S\subseteq R  then S has at most one sup and one inf #Proposition
                prove this by↔contradiction. Suppose  x  and  y  are both sups of S. Then both x and y are least upper bounds. So  x\leq y because  x  is a least upper bound and  y  is an upper bound. Likewise  y\leq x because  y  is a least upper bou nd and  x  is an upper bound. Therefore  x=y  .  
            use the above in the following proof:::
                Suppose  S\subseteq R  ,  S\neq 0 and  S has an upper bound. We prove a least upper bound  L exists by creating one digit at a time. We use the inspiration from \sqrt 2 . You keep on increasing the next digit until it's just under an upper bound, giving us  L .
                We now prove that  L is the least upper bound, or that for all  x\in S that  x\leq L . Use contradiction to find  x>L . Now compare  x  and  L 's first few digits until they differ
                https://remnote-user-data.s3.amazonaws.com/ew14TSFTm6N10TrLFFa44KtM1hxwb7nj6d3KTzprrEQYP2Bc3vbJyATQaXcA7n2AfEBx7KCgbHcX_BX7_dwYXLHSWsAZhFGbzgcseeOJhLghsLmjiF3zU6iJUx30sDoV  
                This digit of  x  must be bigger than  L . However, from the manner in which we formed  L , this is impossible, because every digit of  L  is as big as possible without being too big. Therefore,  x\leq L .   
            https://remnote-user-data.s3.amazonaws.com/7g55QaZyEeKb2lGX4QuyPOEMg9ko1BW7EFv-kAyDw_I89C_MHWx1FKqM2TrpiAMol2qR8HZHhlOQk-11ip33S8iYpMcxNgQ_M-g3T-VW3at8b9BTD7Q6NvqFSQzVH3Wq
             R  is the only set with R is dedekind complete   and is an ordered field.
            
        For all  x\in R , if  x>0  , then there exists  y\in R  such that  0<y<x   #Theorem
            proof→let  y=\frac{x}{2}.   \square 
        For all  x\in R , if  x>0  , then there exists  y\in Q  such that  0<y<x     #Theorem
            proof→let  y  be  x  all the way until the first nonzero digit. After that, set the remaining digits of  y  to zero. Optionally, divide  y  by two. This guarantees a rational number output.
    Maximums and minimums
         L  is the minimum iff  L\in S   and  L=\inf(S)  .
        L  is the maximum iff  L\in S   and  L=\sup(S)  .
        If S is a finite subset of  R , then S must have a maximum and minimum
        Maximums and minimums must be members of a set
    Sequence
        definition→A list of elements in S  a_1,a_2,a_3,...,a_n,...   until infinite. Repeats are okay
         a_n  is increasing iff→for all  n\in N  , a_{n+1}\geq a_n  . Strictly increasing if > not >=
         a_n is decreasing iff→for all  n\in N  , a_{n+1}\leq a_n  . Strictly decreasing if < not <=
        Monotone iff→ a_n always is  a_n is decreasing iff or  a_n  is increasing iff
        Monotone Convergence Theorem↔ a_n  is a sequence of reals. If  a_n  is monotone and bounded, the sequence converges
    Limits (of a Sequence)
        definition→Say  a_n  is a sequence of reals and  L\in R   .  L  is the limit iff for all  \epsilon > 0 there exists  N \in N  such that for all  n>N,  |a_n-L|<\epsilon  .
            The difference between  a_n  and limit L is approaching zero
        a_n \rightarrow L   means that Sequencea_n  is approaching L
        If  a_n  is a Sequence and  a_n \rightarrow L_1 and  a_n \rightarrow L_2   , then  L_1=L_2 
        September 25th, 2020
        Triangle inequality↔ |a+b|\leq |a|+|b|
            |x_1+x_2+...+x_i|\leq |x_1|+|x_2|+|x_3|....+|x_i|  
                We prove this through rewriting this as  |(x_1+x_2+...+x_{i-1})+x_i|\leq |x_1+x_2+...+x_{i-1}|+|x_i| .
         x_n=(-1)^n   does not converge
         xa_n\to xA+y \iff \forall \epsilon>0, \exist N\in N, \forall n>N, |xa_n+y-(xA+y)|<\epsilon.   
    Continuous↔Let  A\subseteq R  and f: a\to R, and  x\in A . We say f is continuous at  x  iff  \forall \epsilon > 0, \exist \delta>0  such that  \forall y \in A , if  |x-y|<\delta, then  |f(x)-f(y)|<\epsilon .
        f is continuous (on A) iff it's continuous at each  x\in A  
        general proof template→https://remnote-user-data.s3.amazonaws.com/CpYpfu0Oh2LmklaX-pJwwtJMif9VsEtYIk8oWCtSWLvD6Wu5ZYVhorTnKotxZ36BJWAK-7biZv7IMPSoDyGnSRRKzPak8B9XY3V0ppQK8T1bDUyRWdv5d5N1ayLlI2tP
        example→Prove that  f: R\to R  via  f(x)=x^2  is continuous
            proof→We are trying to find that for all  \epsilon >0, there exists  \delta  such that if  |x-y|<\delta , then  |f(x)-f(y)|=|x^2-y^2|<\epsilon. 
                Let  x\in R  be arbitrary. Let \epsilon>0 be arbitrary.
                Our goal is to set  \delta  to a convenient value
                     |f(x)-f(y)|=|x^2-y^2|=|x-y||x+y|<\delta\cdot|x+y|
                    The big jump is to write  |x+y|as  |2x+(y-x)|
                     \delta|2x+(y-x)|\leq \delta(|2x|+|y-x|)\leq \delta(2|x|+\delta)\leq \delta(2|x|+1)\leq \delta
                Therefore, |f(x)-f(y)|<\epsilon  
                 
        Intermediate Value Theorem↔If  f:R\to R  is continuous on an interval  [a,b] . If  L  is between  f(a)  and  f(b) , then  \exist c \in (a,b)  such that  f(c)=L. 
            proof→https://remnote-user-data.s3.amazonaws.com/aUI0VMQ4U370LC2tvT6QiUI_7aTOp3KeUvy0qcpk9yJL8POtM-U5N6D6M28LWC3mNIJ2EFXIaXETkedJbK3Hk8hx0cWqxBsLjMt4KIjYvVm773bbNl2rOSJFEf2sMi4Y
        
    Vectors
        definition→if  S  is any set and  n\in N , then https://remnote-user-data.s3.amazonaws.com/U8g1mRNeTGnOEiOMWyDtMBhKwtF2vaa60ja71rFe1iLnEtkYEdoJVeR141bMGlZQnmEsH7GjyRnXlzg2g3I7jjsR9Zy1hPDMwtFYYKZe7_A853rDxO3DFTXUqZEWs76x  S^n  is the set of ordered lists with  n  components which are each in  S . https://remnote-user-data.s3.amazonaws.com/p_kcV0X8KlaQ8e_ulRDUaUL8Nn-NB_Su7Jp1iJw6XudFb1Anptip9vZgAkhPDc8PIjABrym6PppyxV_2_VLV8_wUnJC97PMNyIYJ-ZSCJwxk_XECOZjx0S-9HIjhHCh7
        Zero vector↔ \vec 0   or  \begin{pmatrix}0\\0\\0\end{pmatrix}
        Length (or norm)
            definition→ ||\vec x|| =  \sqrt{\vec x \cdot \vec x}
            properties
                 ||\vec x||\geq 0   with equality iff  \vec x = 0 
                 ||\alpha \vec x||=|\alpha|\cdot ||\vec x||
                 ||\vec x + \vec y|| \leq ||\vec x|| + ||\vec y|| 
        Distance between  \vec x  and  \vec y   
            definition→ ||\vec x - \vec y|| = d(\vec x, \vec y). 
            properties
                 d(\vec x, \vec y)\geq 0   with equality iff  \vec x = \vec y    
                 d(\vec x, \vec y) = d(\vec y, \vec x) 
                 \forall Z\in R^n ,  d(\vec x, \vec y)\leq d(\vec x, \vec z) + d(\vec z, \vec y)  
        Cauchy-Schwarz inequality↔ \vec x \cdot \vec y \leq ||\vec x|| \cdot ||\vec y||  with equality iff one vector is a multiple of the other
        Convergence↔ \vec x_k converges to  L  iff  \forall \epsilon>0, \exist N\in N  such that  \forall n>N, d(\vec x _ k, \vec L)<\epsilon .  \vec x_k  converges iff  \exist L \in R^n  to which  \vec x_k \to \vec L. 
        
    Day 24: Spaces, spans
Day 15: Helpful Continuity
    Sequential definition of continuity↔Say  A\subseteq R^n, B\subseteq R^m,   and  f:A\to B. The following are equivalent:
        F is continuous at  \vec x 
        For any sequence of inputs  \vec y_k\in A. If  \vec y_k\to\vec x , then  f(\vec y_k) \to f(\vec x)    
     \epsilon-\delta  form of continuity  \iff  Sequential definition of continuity
    Open ball centered at  \vec x  with radius  r , aka B_r(\vec x)) ↔ B_r(\vec x) = { \vec y \in R^n : d(\vec x, \vec y)<r} 
    Let  S \subseteq R^n 
        We say  S  is open iff↔for all  \vec x \in S , there exists  r>0  such that  B_r(\vec x) \subseteq S.      
        We say  S  is closed iff↔its complement in  R^n  is open.   
        Clopen if↔Both closed and open
             R  and complement of R  is {}, and so both are clopen from vacuously true
    Closure↔The result of "closing" a set, which can be applied to an open or closed set.
     a_0\in (0,1), a_n=\sqrt{a_{n-1}}   a_n\to1   
Day 17↔Closures, Limit of functions
    Closure of  Q  is  R
    A set  S  in  T  iff intersection of  T  and  \bar S  is  T 
    Limit↔Let   u\subseteq R^n  and  f:u\to R^m . We say \lim_{\vec x \to \vec p} f(\vec x) = \vec L  iff  \forall \epsilon>0, \exists \delta  such that if  y\in u  adn  0<d(\vec y,\vec p)<\delta   then  d(f(\vec y), \vec L)<\epsilon .
Day 18↔Limits, Partial Derivates
    Common strategy↔Let y = mx, y=3x, x=3y, etc.. If you get different values, then limit DNE
Day 19↔Bolzano-Weierstrass
Day 20↔Mean Value Theorem
    Use Mean Value Theorem (MVT)↔Whenever you need info relating function to derivative #[[Mean Value Theorem (MVT)]] 
Day 21: Images of sets, maxes and mins, Extreme Value Theorem
    Maximum and minumum values↔Values within range such that all f(x)<= max or >= min
    Extreme Value Theorem↔If  C\subseteq R^n  is closed and bounded and f is continuous, then f attains a max and min value over  C .
        proof→Because closed and bounded, it follows that there's a Sup and Inf. Because its closed, Sup and Inf are in the set, and we are done
Day 22: MVT, Fermat
    Fermat's Theorem↔If f is differentiable and if f has a maximum at  x=c\in (a,b)   . Then  f'(c)=0 
    Mean Value Theorem (MVT)↔Say  f  is differentiable on  (a,b)  and continuous on  [a,b] . Then there exists  c\in(a,b)  where  f'(c)=\frac{f(b)-f(a)}{b-a} .
Day 23: Vector Spaces and Fields & Day 24: Spaces, spans
    Fields↔A field  F  is a set with two operations, + and *, and the arithmetic behaves nicely. Closed under +, -, *, /
    Vector space over a field  F ↔A set of "vectors" V where there's a "nice" way to add vectors and multiply by scalars.
        There exists a zero vector
         \vec x+\vec y = \vec y + \vec x \in V  . Closed under addition (and commutative).
         \alpha x \in V . Closed under scalar multiplication
    Field  F  is the set of all working scalars or  \alpha s.  
    If  F  is a field, F^n is a vector space over F  
    Spans↔Say V is a vector space over  F  and  S={\vec v_1, \vec v_2, ..., \vec v_k}\subseteq V . Then the span of  S  is  span(S)=\{\sum_{i=1}^k\lambda_i \vec v _ i:\lambda_i\in F\} = \{\lambda_1\vec v_1, \lambda_1\vec v_1+\lambda_2\vec v_2, ..., \lambda_1\vec v_1+\lambda_2\vec v_2+...+\lambda_k\vec v_k\} 
        We say  S spans W  iff  span(s)=W   
        span(S)\leq V  . The span of any vector space is a subspace of V
        Spans are the space of all possible combinations/sum of all the vectors
Day 25: More vector spaces, subspaces, span, linear independence
    Vector Subspaces (denoted  W\leq V  to show that W is a subspace of V)↔We say  W\subseteq V  is a subspace of  V  iff  W  is a vector space (so is V) over same field
        Proposition: Say  V  is a vector space over  F , and  W\subseteq V . Then  W \leq V  iff
             \vec 0 \in W
             \forall \vec x, \vec y \in W ,  \vec x + \vec y \in W   
             \forall \vec x \in W  and  \forall \alpha \in F ,  \alpha \vec x \in W .   
    Proof that span(S)\leq V  . The span of any vector space is a subspace of V
        Proved in notes
    Linear independence↔Let  V   be a vector space over  F , and  S\subseteq V . We say  S  is linearly independent iff  \sum_{i=1}^k c_i\vec s_i = \vec 0  implies  c_1=c_2=c_3=c_4=...=c_k=0   . Otherwise, S is linearly independent.
        Inspiration: span(\{1, x, x^2, x^3, x^4\}) = span({1, x, x^2, x^3+2x, x^4-2}) = (\text{All polynomials of degree}\leq 4)  but there is redundancy for the second expression.
        Properties
            Zero representation↔A linear combination of the form \sum^k_{i=1}\alpha_iu_i=0 .
                Called trivial if \alpha_1=...=\alpha_k=0
            A set is Linear independence  if all zero-representation by distinct elements are trivial
            If 0\in S then S  is linearly dependent
            A set containing a linear dependent subset is linear dependent
            A subset of linear independent set is linearly independent
Day 26: Linear maps (Properties and examples), definitions of sine and cosine
    Linear map↔Say u  and V are vector spaces over F. T:U\to V  is a linear map iff \forall \alpha,\beta \in F and \forall \vec x, \vec y \in u, T(\alpha \cdot \vec x + \beta \cdot \vec y) = \alpha T(\vec x) + \beta T(\vec y)
        Properties, following this iff
            T(\cdot \vec x + \cdot \vec y) = T(\vec x) + T(\vec y)
            T(\alpha \vec x) = \alpha T(\vec x)
            T(\vec 0) = \vec 0
            T(\sum_{i=1}^k\alpha_i \vec x_i) = \sum_{i=1}^k\alpha T(\vec x_i)
    Rotation matrix↔R_\alpha\begin{pmatrix} 1 \\ 0 \end{pmatrix} is defined to be \begin{pmatrix} \cos(\alpha) \\ \sin(\alpha) \end{pmatrix}
    If :u\to V is linear and \{T(\vec s_1), T(\vec s_2), ..., T(\vec s_k)\}  are linearly independent, then \{\vec s_1, \vec s_2, ..., \vec s_n\}  is also linearly independent
Day 27: Linear maps and (independent sets, spanning sets, and bases), matrices
    Theorem 27.1↔If T:u\to V is linear injection, then S\subseteq u  is linearly independent iff T(s) is linearly independent
    Theorem 27.2↔If T:u\to V is a linear surjection, then S spans u iff T(s) spans V
    Surjection preserves spanning sets↔S spans u iff T(s) spans V assuming T:u\to V is linearly surjective
    Injection preserve independent sets↔S is linearly independent iff T(S) is linearly independent assuming T is linearly injective
    Basis↓Say V is a vector space over F  and S\subseteq V . Then S is a basis for V  iff
        S is linearly independent
            Is the only solution for c_1x_1+c_2x_2+...+c_kx_k=0  when c_1=c_2=...=c_k=0 ?
        span(S)=V
            Does there exist a unique solution for c_1x_1+c_2x_2+...+c_kx_k=y  for all y ?
    Proposiition↔Say V  is a vector space over F  and S = \{s_1, s_2, ..., s_k\} \subseteq V . Then consider T:F^k \to V  via T \begin{pmatrix} x_1 \\ x_2 \\ ... \\ x_k \end{pmatrix} = x_1s_1+x_2s_2+...+x_ks_k .
        T  is linear
        S  is linearly independent iff Ker(T) - \{0\}  iff T is an injection
        S  spans V  iff T is surjective
        S is a basis for V iff T  is a bijection
    Matrices↔an n  by m  matrix over F  is an n  by m  array of elements of F
        https://remnote-user-data.s3.amazonaws.com/ikFZdM7YTkAUcMY0LSYs87AUUZOLsVOyX6QAYkVi_nDgnPxXgHfZggzdQfv7stvyK1yTmGzpVulJQIszIGLH0W-CzQuS1E8awn2WabDcQPvkVjWb-WnWec6M5V43CgNY.png
Day 28: Matrices, linear maps as matrices
    Matrices
        Addition, scalar multiplications, transpose, multiply
            Matrix Multiplication↔Left matrix top to bottom row x Right matrix left to right column
            https://remnote-user-data.s3.amazonaws.com/AStFS1qcRe7YQc7jJR6z3tMyyCDAFYCkUvAvWzV1PGcuU4X34wTmRjYkMO6V9Z3UQTqQj-ZSkqw1fxfl93JyuBg3HvgKXHn_ViyVCAhbbNPyoVPGAU8jgc8NspMPi8sM.png
        Properties of Matrix Arithmetic
            Existence of 0 matrix
            (A+B)^T = A^T + B^T
            (\alpha A)^T = \alpha A^T
            (AB)^T = B^TA^T
            (A+B)C=AC+BC
            A(B+C)=AB+AC
            A(BC)=(AB)C
            A(\lambda B) = \lambda (AB)
        Matrix multiplication order matters a lot
        Can't divide matrices
        AB=AC \not\implies B=C
        A^2=0 \not\implies A=0
    Proposition 28.1↔https://remnote-user-data.s3.amazonaws.com/IsFkYGfl0OnbvkW5JTNCx69bja7FD-ybKiAo6Ewc-v5Z3rpo5nDvsY95btFhFyNxPBs-s0tgzP4-pj-tXAWVdlt83O1NFW5p4Svar_QHZU99utBDcWIiWOK1Dtotnj5L.png
    Theorem 28.1↔If T:F^n\to F^m   is linear, then there exists a unique matrix A \in Mat_{mxn}(F)  such that \forall \vec x \in F^n, T(\vec x) = A\vec x  
        1 to 1 correspondence to linear maps and corresponding matrices
Day 29: Finishing linear maps as matrices
    https://remnote-user-data.s3.amazonaws.com/ASNuYZURK6ChKXInjLh94eqAgw_sMno1YfpegQKdveLBP9k4VXIaGsx8lxbDovZ5tim87-fhNh8tWLLHKUu2ZG-SurdRVRexDgvUJ0q43J5p41DqYQbfVjzcOxh0Z86d.png
    Proposition 29.1: If  A and B are matrices for which AB makes sense, then T_{AB}(\vec x) = T_A \circ T_B(\vec x)  , or AB(\vec x) = A (B \vec x)
        This explains why matrix multiplication is defined as it is
        Also explains why it's not commutative, because T_A(T_B(\vec x)) \neq T_B(T_A(\vec x)) . When applying linear maps (which are a type of function), the order matters. Since linear maps analogize to matrices, it works out.
    Picture of linear algebra↔
        https://remnote-user-data.s3.amazonaws.com/7E0VzdTD6GjRPIDiRzvuyaimRRYQB0v5WrwR9Axil551r6lF1GWwOPwwBunT2GV2aykKPvRCgClCGyAUhvDi2t1VXjpA8dAdRsvHz_E75rTjJf_6FEjrzsfnvum3_-IQ.png
        Often, if you don't understand why something works, convert it to its corresponding area and it'll make sense
        For example, the following states are the same
            Columns of A  are linearly independent
            T is an injection
            ker(T)=\{\vec 0 \}
        Another example
            Columns of A span F^m
            T is a surjection
            Im(T) = F^m
    Identity Matrix (Proposition 29.2)↔I_mA=A and AI_n+A
    Definition of cos and sin↔https://remnote-user-data.s3.amazonaws.com/5Bbg86LSoCCo2pGKzX9u9i7VwBeR_1B4CnDRtT3SwG9uJY0yFek15ooWex__aW4mgz-GS4vXAMBMMZinsx-WdSrtkohLGfgj-dPNO-7Qaj0ha_CWHiRMIg1VTeKkHimp.png
    Jacobian↔If u \subseteq R^n is an open subset and  f:u\to R^m and \vec p \in u, then the Jacobian of f at \vec p Jac_f(\vec p) is the m x n matrix whose jth column is https://remnote-user-data.s3.amazonaws.com/dE5wUg1EaU8iu8uUrZO0vsxYM03io7ctzX43ERO0SpgWPiG5-HfRZ-GI8IPO-Up1hhNJxNLb-ReURUisKeSeECVqp9RpSiTJFTjAEZsjNMvloh6xE9IfSY7PSzHvzAG3.png
    It is a matrix of all partial derivatives
Day 30: Derivatives in R^n (as linear approximations), connection to Jacobian
    Linear approx of f(1.02, -.3) using f(1, 0) and Jacobianhttps://remnote-user-data.s3.amazonaws.com/eEJMRW1wF4rW3cui8GJaS2viiQ8MbzOO3EGn6e034O9t9XPokrh2fqvWTwly0GVMxzIVGRHtkbMDxPhMSd3-xqiLNLPEn_sk7lA1SoTCLkhww8f81N9BM4nkp4WKAAkc.png
    Approximation↔For small  \vec h, f(\vec p + \vec h) \approx f(\vec p) + [Jac_f(\vec p)] * \vec h
    Differential↔Say u\subseteq R^n is open and f: u \to R^m and \vec p \in u. We say f is differentiable at \vec p  iff there is a linear map T:R^n\to R^m such that https://remnote-user-data.s3.amazonaws.com/t3DQyBIywrLO-2aj6ZsTakcYkV9aQWc0uzxjWCStD1JnEiO-RVPyie9AhTMcmwz469vB6n6Y1o624pFeHYbfXZlS7MJQLK_BINotxX1zPGWumjPXgh2DwpIgxDIZEvI1.png
        The map T, aka the derivative of f at point P↔This map T will be unique if it exists
            We call T the derivative of f at \vec p, D_f(\vec p)
                It is a linear function (also written as a matrix), not just a number
            https://remnote-user-data.s3.amazonaws.com/OytxE6V9VXCjsVPbmUTrNlusZQl82_YeyFYwHXlvhS_kjelJ0d1MjyAT76Da1SCECH6QIhq3M2IwKAFDj6QBFeyOszjcWyJ7TgpLUN2qETlY_RD8V_b38VeWGKj0noHp.png
        In simple terms, something is differentialbe if there exists a really good linear approximation
        
    Theorem 30.1 (The Jacobian is the derivative of function)↔If f:u \to R^m is differentiable at \vec p, then (D_f(\vec p))(\vec h) = [Jac_f(\vec p)]\vec h, and this Jacobian exists
Day 31: Derivatives of linear maps, chain rule
    Chain rule↔Say u\subseteq R^n, V\subseteq R^m, and they are both open and f:u\to R^p, g:V\to R^n and \vec p \in V  where g(\vec p) \in u.
        If f is differentiable at g(\vec p) and g is differentiable at \vec p then (f \circ g) is differentiable at \vec p and https://remnote-user-data.s3.amazonaws.com/xSEB9Mw3fSyOvcuFBbBQ_kylHo48MEq8XOlkj39QsuxfZQnXJ3AxgZhEeeb9kLgK3wMDX7w8kfA9vBvqdpUsPrTgSsNdQHYbkctKysyOshezcy78fEuQvBkI0-I1wQzy.png
        Example↔https://remnote-user-data.s3.amazonaws.com/aRy0wHN27e6h8jLywEDBGh7YBLE3tXfb2n1pUj9rOFdj19CROvAzMQ-tnVIhz3wJeMe133w5lb4fO5k8KJf1UQIrm5Rb-lX-28Ek2XnenEohRD4fAvVBQ-WKRZ7RkyYp.png
    Chain Rule Proof↔https://remnote-user-data.s3.amazonaws.com/bGdkBVhl7Lzkt36wrNqI2SPktBFsnXeE5LfivNDrtVIP8Jn51qiOwpBvH030lZTQs7NOtrvjxeSQkS4pXnHDewbAzOfXKAbK9Q34rDkC7fRiK_HLn8TWXKCsva72rpEd.png https://remnote-user-data.s3.amazonaws.com/qhZ7fwEv2B92NjYLYCxQf9ho7LyBZLpYvrZEm2yeQXS9MfHP1WykR58-agNQIFJp9vYbGZUVdxv7HsvoufEqUsLwSgmry7l5e6n4cT3QRuKaxvWX5tfm-wS2iq5JcOOl.png
Day 32: Directional derivatives and gradients
    Partial derivative interpretation↔If we change \vec p in a particular direction  \vec p + \vec e_it, how does f(\vec p + \vec e_it) change from f(\vec p)?
        https://remnote-user-data.s3.amazonaws.com/ceL0_hhPXVon9nBp8GDEpf_4Damco9g0A7YoH1LYAoaDp1AQ9Ainx9owKxjiu-jkILWsI_nKlUnHCCrmqjYM8ZR_R67MpJ6uPDWRIv7RPALA3MGXwGtSJg5VHfOhpFYm.png
    Directional derivative↔Say f:u \to R^m  and u\subseteq R^n  is open and \vec p \in u . If \vec v \in R^n  we define the directional derivative of f  at \vec p  in the direction of \vec v https://remnote-user-data.s3.amazonaws.com/zsg_DUMiiNSj_DgLPoddjLxeDRMKs9FN3r9TCOTI_TPDlvPvBrmOFqIVao-mOls5fRlpKbrmZJqNlVyCMDxBMSax0wk0iIUR7-yrh_6qNBiRlPuPIcjRsGS3btwl4rdB.png provided the limit exists
        https://remnote-user-data.s3.amazonaws.com/vmnQtEJUublnQcUBRI10Req-EB72ZF4UqvlQPsQQl0XLAoAKB9FVvCFg7ESnnvSKOxqm-ayh8YyFFdXQ0qiVKf_CZVlQN7nTSUpv-Hg5bEjIFwYTV3RQvuFUtUwbxtvt.pnghttps://remnote-user-data.s3.amazonaws.com/b4T7Z1XI1ns2Fpb9PTpnQx3TctMXihgZHhW1n0GHLRmEGQB_PBZVYuhdW6x2B16rL_r6MhQWQeahT9ZJ4joqQrqMaaAL_qUbgqJo-OAEfc1-K2brBB6irdN3f3JNsiO2.png
        We can rewrite this as https://remnote-user-data.s3.amazonaws.com/PDPbreVQxwlbSgFsHRdierj07MRpw7UEyhXAYnFfrUVIdn1DXOYOlNUsvVT149w3V4shq8Ape4xIxTdcA_8cmLAo3LPd8JFt2kzUGDpQrFxlUF-_MtN6uJhWUe0jkHzr.pnghttps://remnote-user-data.s3.amazonaws.com/tefrYgudYdOh_T9a55Q1C3M4rsUW7iy2_6YeD7FqAm93qS5YQVO-SBvOSF0qIx9BCrqp5tyDQjFJlnNngzlRu3bsiBEwAmkuqTvDLS85HSBCr-UGTbSYU1xc4JuK0Ts2.png
        and therefore https://remnote-user-data.s3.amazonaws.com/APUwGMhtepFJ3Qv0for-Q-Zep3DCEfTYGP5Z6FKSyuzvwqaCyIZ0yYTiCh1zgnMC8LEkUooTzCoNvITdcWk0BprHESLarHfciJXn0LKPfASkDuvSjoo_LEJJnlzHACxH.png
    Gradient↔If f:R^n \to R  and if f  is differentiable at a point \vec p , then we define the gradient of f  at \vec p  as \nabla f = [Jac_f(\vec p)]^T
        It's literally a transformed Jacobian
            https://remnote-user-data.s3.amazonaws.com/g2ePZ6NtXjkjvWquBCoFN26WQFp2uKjNxo7-2AFbHu1DMEXTIk_FDyGX-BP_lW8hTbSXl2kdOYpdligPTL6QQNThSYsqWwfabMbF_YIDLR1pp30VV_Ylczq59o0oBflC.pnghttps://remnote-user-data.s3.amazonaws.com/HZ8jk0WNmw9hG8jtl2F3_BUy3W24-XelYMbvgneKt3_fGqL2u_I8XO9pQZscnC2DNY3_jWJNHa4_VeI8_XhMWoAysdbFKMhZ3m2ZZzSeCyrH-k0BqfCjYDrJ7ApCaGwU.png
    Theorem 32.1↔https://remnote-user-data.s3.amazonaws.com/OWk9Gi4zraTa7Vd_RipPEVzIB_ZyY8vWAkUBhm4E17awUD3H_1rs7RB945sgraNNJruJDlT6fvzTEN7AQFoduLjZy85KVTamiiezvQRO3XDjwdFeGXomz7QMvtluIrQj.png
    
Day 33: C^1 implies differentiability
     C^k →Say  U\subseteq R^n  is open and  f:u\to R^m.  Then we say  f  is  C^0  iff f is continuous. And for all k\geq 1, we say f is C^k iff every partial exists and those partials are all C^{k-1}.
        Aka C^k means you can take  k  partial derivatives in a row and all results are continuous
         f  is  C^1\iff Jac_f  exists and is continuous as a function of  p 
    Theorem 33.1↔If u\subseteq R^n  is open and f:u\to R^m  is C^1  then f is differentiable
        https://remnote-user-data.s3.amazonaws.com/B666Pzzo8_4HZCKzG15087O-yBB1fE3RWc2asOXMVtKq32AwzjsATTdtV-Hx4DJdvEul85VBrdqp22SnT29GQirtbO93BfcMjQq0i_x7VGJYmeGVjIAkjbD3vnJ_Vhwf.png
Day 34: Graphs, images, level sets
    Graph of f(x)↔Graph of function over input  \{\begin{pmatrix}\vec x \\ f(\vec x)\end{pmatrix} : \vec x \in u\} \subseteq R^{n+m} or  \{\begin{pmatrix}\vec x \\ \vec y  \\ f(\begin{pmatrix}\vec x \\ \vec y  \end{pmatrix})\end{pmatrix} : \vec x, \vec y\in u\} \subseteq R^{n+m} 
    Image↔Graph of function's outputs,  f(u)=\{f(\vec x: \vec x \in u\}   which is a subset of  R^m 
    Level Sets↔Sets of the function's inputs, of form f^{-1}(\vec c) = \{\vec x \in u: f(\vec x) = \vec c\}\subset R^n

Day 35, 36:
    Smooth manifold↔A smooth manifold is a set M\subseteq R^n such that
        M  is (locally) the graph of a C^1 function f:u\to R^n where u\subseteq R^n is open
        This is called an  n-dimensional  manifold 
            Locally,  n  variables determine the rest
        Locally means you can zoom in at a point  \vec p 
            \exists V\subseteq R^m open such that \vec p \in V,  M\cap V  is the graph of a  C^1  function 
            At this point  \vec p   , the area is smooth and is n-dimensional
    Tangent space↔Let M\subseteq R^n be a smooth manifold and pick \vec p \in M. The tangent space of M at  \vec p   is T_M(\vec p)=\{\vec v \in R^n:  there exists a  C^1  map  \gamma :(-1,1)\to M  such that  \gamma(0)=\vec p  and  \gamma^1(0)=\vec v\}  
         \gamma:(-1,1)\to M  is a "curve" on  M .  \gamma(t)  traces a smooth path  C^1   along  M   
        All points where  \gamma  passes through  \vec p ? Now take the instantaneous velocity vector  \vec v  to get your set 
        

Pset tips
    Look at past problems in the same pset, they often literally apply to the question

