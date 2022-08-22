Lecture 1 February 2nd, 2021
    Euler's rotation theorem↔If you rotate a sphere in a rigid way, you will arrive at the same shape 
    Linear regression, poly-fit
    Vector
        Array of numbers (CS notation)
        Magnitude and direction (Physical notation)
        Elements in a vector space
    Vector Space↔A vector space V  over field F  is a set equipped with two operations-addition and scalar multiplication
        addition↔For every x,y\in V  there exists a unique element x+y\in V 
        scalar multiplication→For every element x\in V , there exists \lambda \in F  such that \lambda x \in V 
        These operations satisfy the following (8 axioms)
            https://remnote-user-data.s3.amazonaws.com/89UhprpuEjYWzRO1PCf6g4NWdkV3G65Jq91Ww6KSMJLkncQjPsZpY1A9OoQ7tmGhCCGy9Q_m03zlWR_kCS-FD07RadtgzFxJC4oOCiUanObCCChN4IAOlex23UzNhMoY.png
        Remarks
            Elements in  V are called vectors and elements in F  are called scalars
            A vector space is a tuple (V, F, +, \cdot)
            Associativity implies we may write x+y+z
Lecture 2 February 5th, 2021
    Sets↔A type of collection of elements
        Order  does not  matter
        \{4,2,1,3\} = \{1,1,1,2,3,4\}
    Two sets are disjoint if↔ A \cap B = \phi 
    New Set Notations/Operations
        https://remnote-user-data.s3.amazonaws.com/5hd7NL_JEKs9xa_Mrzr32LWPE2hfsT7gixvo8xsm7Qm9RLLK6ciWq4BA_9rY_p8W42SY0oV7jIcNQGa70div-whXS9heVsfHMDns1RkMClFqHXdx86Xc7vKs_HuMtcyq.png→subset, but not equal to (strictly smaller and contained within) 
        \phi→the empty set
            For any set A , \phi \subseteq A   
        x→Matrix multiplication
            A x B = \{(a, b) | a \in A, b \in B\}
    Functions f:A \to B
        domain in this example→A 
        codomain in this example→B 
        image→f(A) = \{f(a | a \in A\} 
        difference between codomain and image→codomain is  everything that can result, range is everything that actually results 
    Fields
        A field F  is a set equipped with two operations,  addition  and  multiplication 
        Multiplication is different from a vector field
        https://remnote-user-data.s3.amazonaws.com/LUJp6U8fZfGdsU-JLLGAXZcQa1ZetZK_hLlwf2jOCi8j2Fkeycsakz7lDuH79Q8MfNQhoQrerFxfNcRqXuRLGe0dnSYjzhvyRIm63mP6N047FKPAOqGI4apRjehTnFEe.png
        Questions
            Is R  a field? Yes
            Is Q  a field? Yes
            Is C  a field? Yes
            Is Q(\sqrt 2) = \{a + b\sqrt 2 | a, b \in Q\}  a field? Yes
            https://remnote-user-data.s3.amazonaws.com/M7Hp7KR2H9feGcQIX6ZUnnxm7iajd-lCMRkYfSSXSgwk6uPHX4d1yxdOqHhBX8jaYjlk9VkiOL_0FztA8vCIokg8PhvNv0ViutDsBXrl9q_7vPbavsMZaKg7UGL7fmcR.png
            Non-Fields
                N  - no inverses
                Z  - no mult inverse
                https://remnote-user-data.s3.amazonaws.com/OIJ485du_5sNdge6a3L35SoiY7xvFVzmv_NpVXymW3k63_Jm4t9trPwOIrqqbfEgy-XAbPcNx0hHLIt0Rp9TV9TB-7bPDPTr6r09SvCvSl4TPMgwnlMxCC2tdc93XiPn.png - not closed under set
    Theorems → Propositions → Lemmas
    Lemma (Cancellation Law)↔Let F  be a field and let a,b,c\in F . 1) If a+c=b+c , then a=b . 2) If c\neq 0  and a\cdot c = b \cdot c , then a=b . 
TA Session February 6th, 2021
    Logic
    Statesmant S can be
        True
        False
        Neither true nor false, like this statement is false
        True and false
    Not operator \↔A \ B means everything in A not in B
    De Morgan's Law
        A  \ (B \cup C)  = (A\backslash B) \cap (A \backslash C)
Lecture 3February 10th, 2021
    Vector Space
        Examples
            Prototypical (generic) example↔F^n = \{(a_1,...,a_n) | a_1,...,a_n \in F\} 
                \forall a = (a_1, ..., a_n), b=(b_1,...,b_n)  , a+b=(a_1+b_1, ..., a_n+b_n)
                \forall \lambda \in F  , \lambda \cdot a = (\lambda a_1,..., \lambda a_n)
        Lemma 3.1↔Zero vector is unique
            Proof through  contradiction 
                0' + x = x
                0 + x = x
                0 + 0' = 0' + 0 \implies 0 = 0'
        Lemma 3.2 (Cancellation Law)↔Let V  be a vector space over F . \forall x,y,z \in V , if x+z=y+z , then x=y  
            corollary↔The additive inverse of any vector is unique
            proof→Let x\in V  and assume there exists y, y' \in V  such that y+x=0  and y' + x = 0 . In particular, y+x=y'+x . Then by the cancellation law, y=y' 
        Prop 3.1: Let V be a vector space over F
            \forall x \in V, 0 \cdot x = 0
            \forall a \in F, a \cdot 0 = 0
            \forall a \in F, \forall x  \in V, (-a) \cdot x = a \cdot (-x)
            https://remnote-user-data.s3.amazonaws.com/hyVUX0GzxIZjaUU9zSn8cZ8QE2rZ3LAvX2hyhDAL04NVAhOdRGGA-0Z2kiDUS-DbTG1SgpJxFW3ExTsCk5IePwSB5AWGaVil7w_RIOBNkoIXA8Un6cc9R6vy1iQiNCCA.png
        Subspace↔A subset W  of a vector space V  over F  is called a subspace if it is a vector space with respect to the operations in V .  In this case we denote W \leq V  
            A subset W \neq \{\} \subseteq V  is a subspace W \leq V  if and only if
                https://remnote-user-data.s3.amazonaws.com/Ab_2TdIc9xOuF2NMsh21OE8hEv6xwRGpKI5u9eHyZr7biEAsKHgKJTx6oVvh2Ub9Edk_X1wh0cbJ02-gEUCrLxspIFTE4aFQprhP9fmHxfltT3H4x_m-EiglyRPcZ7h6.png
                Proof: \implies  it is implied that operations of W  are closed, and so (1) and 2) hold.
\Longleftarrow Assume W  satisfies (1) and (2). See rest of notes
            examples
                https://remnote-user-data.s3.amazonaws.com/YjhjY89ftUtbu9u_c6D0qnh8a4RhxA7qW6qb1_xSukB1k79nUmcmb0qRg0763yXWJVbmKqDecuvPnkWY1-l1Cf9FWn97rcdjOBNFb5EKBZ7gMKFXk5ZEKlpvtAZirzTo.png
                Diagonals
https://remnote-user-data.s3.amazonaws.com/RVELkGR3JvFqNMplvTapf-EakF_m8s30-JoFCfBvp351fUP0RzOhSBZjQ867v2ePaqK3oWo3NA1FckTcp-kQ6BMW_zQRQVnaoxVLZzHaS-gNDbgEyiBXUrUJ3CnhhYr6.png
                a and c are 0
https://remnote-user-data.s3.amazonaws.com/pk1XvMDlZy8qQ_L7tUDhRgiaMZyRukX2gPwKnUHXDrYundcIkgjq1K-NB1xrsBhIW2ktqnPmPNkZXbGHYLZPGv_-PhUIOn4Gis2phsOsU9w6G2sRxnFyjIpPt3K4BqBf.png
            Prop 4.1→If  U<W \leq V , then u\cap w   is a subspace of V  over field F 
        Sum of Subspace s→For U,W \leq V, we define U + W=\{u+w | u\in U, w\in W\} 
            Exercise 4.1→In R^2, U = [\lambda(1,0) | \lambda \in R]  and W = [\mu(1,1) | \mu \in R] . Prove that U+W = R^2 
https://remnote-user-data.s3.amazonaws.com/TcwTvcyVbBWtvTZwn1zR60RHB7tTTussICmPHSamgUQmjnrnyNfWBiQurNrIldbAqHaSccloghsnSU9kXN0cl8vP4xFbJDMuEBuidMiEOJFOWQ0348-A6a7FDv8ojQ6R.png 
        Linear Combinations↔Let V  be a vector space over F  and let \subseteq V  be any subset. We say that an element v\in V  is a linear combination of elements of S  if there exist a finite number of vectors u_1,...,u_k\in S and scalrs \alpha _1 , ... , a_k \in F  such that v=\alpha_1 u_1 + ... + \alpha_k u_k . The set of all linear combinations of elements in S  is called the Spans  of S  and denoted span(S) 
Lecture 4 February 12th, 2021
    --------------------- Portal ---------------------
        Second Semester
Lecture 4 Addendum February 13th, 2021
    Let V  be a vector space over F  and let S be any subset. Then span(S)  is a subspace containing S . Furthermore, it is the smallest subspace containing S  , i.e. for any subspace U\leq V  if S\subseteq U  then span(S)\subseteq U
        Lemma 4.1↔Given a finite collection of vectors u_1, ..., u_k \in V , any linear combination of these vectors \alpha_1 u _ 1 + ... + \alpha _ k u_k is a vector in V .
        See notes for more details
Lecture 5 February 19th, 2021
    Spanning set (aka generating set)↔Whenever V=span(S) we say S  is a generating or spanning set for 
        examples
            https://remnote-user-data.s3.amazonaws.com/T81wcSW7P6X2EUTIZOPeGx-OJdT7nzGRPR_lFVtMp39GrvN7yt_5diSHg3rZJTEKr5JGrLxkzIbcecRvOK6XylSiseFoHphnj7QkRQHLDdmNAi6qeE48q8pdBuJeen4G.png
                for 1), \Longleftarrow we see that it follows from Lemma 4.1  that the span generated from elements of F  is in F , \implies is from a one to one map
                for 2), we show that the base spanning set [(1,0,0), (0,1,0), (0,0,1)] is contained in span(S). This is because if that is true, then from the Lecture 4 Addendum February 13th, 2021 ,  span([(1,0,0), (0,1,0), (0,0,1)]) is contained in span(S). This would mean that the entire R  is contained in span(S) because span([(1,0,0), (0,1,0), (0,0,1)])=R
            https://remnote-user-data.s3.amazonaws.com/UMgU18u_jNNVoRNhCxxovosAYOEkIgBCBxfoXcAUPtuHSBu_k4ERa2c176wfrmzw_OKNN16pfWJ8pYSb69oQWKfN1Unh_h-H3l57r-zRjIPyZrGvlete2UlLAVozGMHd.png
                we rewrite this as linear equations and solve
    When can we remove an element from a Spanning set (aka generating set)  and still be left with a Spanning set (aka generating set)↔When it's linearly dependent on other vectors #[[Spanning set (aka generating set)]] 
        span(u_1,...,u_k)=span(u_1,...,u_k,u_{k+1})
            Lets say that u_{k+1}=u_1+u_2 . This means that u_{k+1}  can be represented by span(u_1,u_2)  which is included in span(u_1+...+u_k)
    --------------------- Portal ---------------------
        Braden Wong
Lecture 6 February 19th, 2021
    
    --------------------- Portal ---------------------
        Second Semester
    Basis↔A set B\subseteq V  is a basis for V  if B  is both a Spanning set (aka generating set) (span(B)=V) and linearly independent
        It's the minimum viable set needed to construct the vector field
        Prop 5.1↔Let V  be a vector space over F  and let u_1,...,u_n \in V  be distinct vectors. Then the set B = [u_1,...,u_n]  is a basis of V  iff every vector v\in V  admists exactly one unique representation of the form V=\sum^n_{1} \beta_iu_i , where \beta  are uniquely determined by V 
        proof→https://remnote-user-data.s3.amazonaws.com/7Ylur4AYK2Xd6lQ7nHoDbHoLQvIgwkrWkQJg8mt_yLywS6KvbTKXF1LVbXU8-rmOipVKuq_sqIYnU5bJgW0dBYQUkTp_Iht5hAZFPWDV24GNHFRvHgootvxdbv17N3t1.png 
        Every vector space S have a basis
            Prop 6.1↔Let V  be a vector space over F  with finite Spanning set (aka generating set)  S . Then S  contains a Basis  for V .
            proof↔We do some casework to consider different types of S .
https://remnote-user-data.s3.amazonaws.com/n2nOFxv26POIvpzybm2N-wGrh-QgZLmIrMewXkoNEmzu1m55okEPdymBXSmUrMv1tKjRDQo0WNLFq0hC547wUQORnlwBxTupMf7l5K04uOPoDEpAY8cPm8fuaBu9eYmm.png https://remnote-user-data.s3.amazonaws.com/tNflug_PNsDKvofIk3_JPyfku-YQ6aIMyOM9Dvaubzxt38tdtcQ4guuCA_6CDOMBPrMYqlU2cdycarGFXt_yFpKFQ3bai6CY0_daf0MnPe-s1b_EJxwRe_qS_gvab2pW.png 
        This proof gives us an algorithm for creating bases out of finite generating sets
            example→In R^3 , create a basis out of the generating set \{(2,0,-2), (1,1,0), (-1,-1,-1), (1,2,3)\} 
                We know that this exists because Every vector space S have a basis  , so we just hunt it down
https://remnote-user-data.s3.amazonaws.com/B6Lt2zpZ5Dpj09j52Q_kD7u2PZVdAY4muau0jObaNsszUwywq9H_-3VgglNefimiaVRsV_65VJNpKVlm2io_qHkG3cobA9UimFGzeFpitRf9ynyPWM4az4KKhCLifsXz.png
    Replacement theorem↔Let V  be a vector space over F  with a finite generating set G  containing n  elements. Let L\subseteq V  be a linearly independent set of size m . Then n\geq m  and furthermore there exists a subset H\subseteq G  of size n-m  for which 
        proof→We seek a proof by induction https://remnote-user-data.s3.amazonaws.com/8r5XvMtIB7nQHMJXadSWvNtPjDUKIuYadj9W7p5-jxNANGsv231KTrhF2r7RoxNQmqSyRTjO8kuzr7V9OzgORmcqK3kWFlHkI7ZY2BM9ZjCQ7SFyd8YXhGY0EclUV83S.png https://remnote-user-data.s3.amazonaws.com/7nV9GPXAHYOmUR8f7ig8JaTEP_rzsJRvM7Xgh651_x3oMIDvtP4GKIo6o3BYK5rlE1VXqTEAEioNtLhUl8BVqSf1nuZWVFM_JxFGiCbPYbXaV20XcijT3tfNPVvpA7Lm.png 
    
        Corollary↔Let V  be a vector space over F  with a finite generating set S, then all bases are finite and are of equal size
            https://remnote-user-data.s3.amazonaws.com/YFISxgibL-VI1hp-Bgu1p8I4Bc-OjudOhH-RibLPV0sXOhb0cysWXA_CgSJzDQQ_JPHYjY-ZP7jdn_4_U_a9W3_QLyErJnVwFnzsiAZBPujNRtesVcMWyYKVu8PrQ5rB.png
    Finite dimensional↔A vector space V  is called finite dimensional whenever it has a finite generating set or basis. The integer n  equal to the size of all bases of such V  is called its dimension and denoted n=dim(V) . otherwise, a vector space is called infinite dimensional
        example→dim(F^n)=n  because https://remnote-user-data.s3.amazonaws.com/fANBiDoFo-8IqQ7eKx3cqSHF6FAp5hrMA3q4bNMp3Vw3mq9Ns8nnr4DLhy-p6_FOxiB74ALECWCUg4ru44sUbUYAHQsmUgtWRX326X-0yvy1xpSPkpRCrZvvgYiz2Pfx.png  is the basis with n elements required to make the basis
        example 2→dim(M_{mxn}(F))=m\cdot n because https://remnote-user-data.s3.amazonaws.com/S52iFVKNmDFlw09qS83f3CeICXT-7V63SouL9LEaWc6xNz6Nq3mdLKf_c_cbFJn8BjsrXZEfensFeqUlzW14F-aB8Kv0BezBMZgRXnU3DIJOV66GtKR7h1aqlA1__PAK.png is the basis with m\cdot n  elements
        Corollary↓Let V be a vector space over F  of dimension n. Then
            Any generating set contains at least n  elements, and if it contains exactly n  elements, it is a basis for V .
                proof→https://remnote-user-data.s3.amazonaws.com/Uf2iDZr-mApS183sltTy_v0_49iDtWghOaqKmER_IjeCNbj_tsL6MLH5UDrjEumJp_K7zqWBqWOHY_t0KsuFDFqeJAstKG1J3mszmsJbkxYBUS9axyCJiR_80DG37sp7.png 
            Any linearly independent set containing exactly n elements is a basis.
                proof→https://remnote-user-data.s3.amazonaws.com/_TW6LNOjol0OQzxKLxgzpdkTl2KKPUj7dQyRTwckPykclhiY1LGY3ZvhtgPCI7Zg_s6oR3v0VmZVHYk_BOb5fjrmCOacgz6FDYRj5vC34L_zDbFmz36Ukwv6CZzIyCK9.png 
            Any linearly independent set can be extended to a basis or generating set. That is, if L  is linearly independent, then \exist H\subset V such that L\cup H  is a basis
                proof→https://remnote-user-data.s3.amazonaws.com/Kb8R-7u99GFQrrkJrPKRIhpqe6H_maKK0Y_hYAF2zSZtJvZ7UguYCe-z93RdM_hOx-I0fgz4s275G3GGu722n9hZpDJlxyGBo5rFVM4pPbKXG1bT2eTTFSdNpjzx59QJ.png 
                example→https://remnote-user-data.s3.amazonaws.com/KAI95MsU8eVT6_vVaevQLSswDUUo1iWnmiKscP4pnT9ptV-BBPtL31WLslQY1BjJG010xuPB29KV6LcuQfiKfUVYFU87V6dC9ffb7wI9xre-PMXo_SRkzXXuv0KAtsUz.png 
TA Session February 19th, 2021
    If u\subset V , then span(u)<span(V)
    
    Prove that S'=\{v_1,...,v_n, w\}  is a generating set if =\{v_1,...,v_n\}  is generating
        https://remnote-user-data.s3.amazonaws.com/jR32QoGOY4tNdm73nqqMAKZF9BjElo0YrQ0cJGOERDAGW3UGU3Njn2JJgj7jqNvNjF95aHCIz35qsfFDJytmbF-5NxW9YXz0Vj56ywhwzKKcBx_jGdllTRdpGRF_MxXD.png
        proof→w\in V  so w\in span(S) , which means that w=b_1v_1+...+b_iv_i . We rearrange and see that 0=b_1v_1+...+b_iv_i-w  which is nontrivial
Lecture 7 February 27th, 2021
    --------------------- Portal ---------------------
        Second Semester
    Dimension of subspaces↔Let W  be a subspace of a vector space V  with dim V = n . Then
        W  is finite-dimensional and dim W \leq dim V
            proof→https://remnote-user-data.s3.amazonaws.com/29_sXGhmR27BI8LAh3YeuMUIvA-zKf24Il9ts2aWwFNXR3z1gf8k2vX40hVSxbjW2C3W7a8ux8mgPVGaQ6ZpNlT_7wZF2ux0hqmjHw1PJhYBL9siQ9Ha06FongEV_VUQ.png 
        Any basis for W  can be extended to a basis for V
            proof→https://remnote-user-data.s3.amazonaws.com/oLFC26FSQ0s89TgVrQdG01Wcfs7v2UiK65B4ScXK5o-kXV_Qh3ZCm4Tr2ahdASipyVcLHcbVyRLjbbNJh-Q3In4hAHUpzJ-e5krJVztTQiggfmqeod4ZgzPHcwTIN0IP.png 
        If dim W = dim V  then W=V
            proof→https://remnote-user-data.s3.amazonaws.com/wFJlXL2usZBs6nuUbzgHPoNHX6dPQ-fPQ-DxijrdVDoe7xwo5dFqqoB55HlclFkJJ5FGqqZDosvmo98yW-OlgoXoMqlDA5Wb1THZbt1Gr6178lIATtdHbMq-YryIQgZh.png 
        
Lecture 8 February 28th, 2021
    Theorem 8.1↔Let V  be any vector space over F  and let U,W \leq V be finite-dimensional subspaces. Then U+W  is finite-dimensional with dim(U+W)=dim(U)+dim(W)-dim(u\cap W)  
        We extend v_1,...,v_k to a basis.
https://remnote-user-data.s3.amazonaws.com/dfGaSJgfSAGTXnJRjZvgGSHSNUxfFCjHQ58ckblDZB63l_90cCaDXNMRTVTIxFR2JT3PJh1atkBKZu68XWGEq2Gv1A6hdiucNTYYoG4bUNKyIrwLaCwc0WIpz1uYGQIg.png
https://remnote-user-data.s3.amazonaws.com/TK8GvxnZ4FVejISYX4wWQm7YnwUYlTLGg07ms-DPyer7-2vvkVpEokCHVs33d_AapHVg_tisuHDndYv-n7rau2MP2n0fCDtVpEGstiP15OQs57AF5H2QxxUoFrtCEquo.png
    Lagrange Polynomials↔Let F  be a field containing at least n+1  elements. Let c_0, c_1, ..., c_n  be distinct elements in F (n+1  elements total). We define the Lagrange polynomials with respect to c_0,...,c_n  as follows:
        \forall 0 \leq i \leq n , https://remnote-user-data.s3.amazonaws.com/S6PN2WW-ldTvFG-YkRRl-kx7oJP4dGD79eGmWHAvisXfZpH8eUlfdxcEYctstG_IqPTClX_Q7Tu7QmPMJ49JGJy286CHAcXWIpbZmoiBqs9Et-5THY2Aw5W9Z2W64PEB.png
        https://remnote-user-data.s3.amazonaws.com/UKfEb7Vst0imzFEqaDzM3Ep45JyMoZ1nqQ8fJb1OS_Q9KDl4cu_iUza_KNrvzp2WRhXKqce79FRTjkgfDbE3jipbeB_TN7xlpopfFxDGSFfCzh7ZctY4nBE6C76gP19K.png  
https://remnote-user-data.s3.amazonaws.com/LpP-4pjarEi7dJEv7f7NOi835OS3_YKNQW9q9dwAu1MNMtDCR3eR24p9OZ9jF107v7ouxCUW7aqhwd1G7UkmBUx0RSz-LARaSU82eD5TGxWqtnxzERPX72sJ_exZl1nj.png
        
    Linear Transformations↔Let V  and W  be vector spaces over a common field F . A function T:V\to W  is called a linear transformation if it satisfies the following two condition
        T(x+y)=T(x)+T(y) , \forall x,y \in V
        T(\lambda x) = \lambda \cdot T(x) , \forall x \in V, \lambda \in F
        examples→https://remnote-user-data.s3.amazonaws.com/64Lp1qXYMwh-MTAfvgclSihQ9s3ixQZsWAHNjrvE4-BSCT--jVOTZUWoZboomU3WAJFRAWQUEsC7tpS95_EAy8ksQU9xykNNu5e7gKmO9xcVTY3lMutYswzDbA6zfZDz.png 
        More examples
            Projections
https://remnote-user-data.s3.amazonaws.com/KGhjK5IUJUdpAiAZXzGSAhhAFHQyxlZhvkSda01oSYH7Pqo-TZ_2dwSowNjQV4FphXKhz8bF33kEsRKvVfba80f8UOWL-AFlVErDQjOMPM1F_rKwdZzjhWTVZNXTS8M8.png
            Reflections
https://remnote-user-data.s3.amazonaws.com/HOixANeNqy2JfKtY-RfsvulSkPxbrLYY7BIXVSwMcG4nPbBr5ogrdFhwpnNXYWOREZNV1OPYHadq9HpblTfsu0POW77F3FdUoTEd09QZngb6PhPIwiNjHWGhF3TQJ3XU.png
            Rotations
https://remnote-user-data.s3.amazonaws.com/cEbp6IViX5Kf4OT7NV2Bezo9_CpB2aOY6ZamDzass2cWR31Xo5htARnZht_-PE-mosNLwRRN1YR4hJgQnsCw6_CYyTViSTblgP0q1MhmiPf56Ncp0een7wu_ubTLBXTh.png 
https://remnote-user-data.s3.amazonaws.com/g1ODuEsQZa_3ddnn7zQa_rYed4LqAghjCLeGuvN4zXqaDSEQ-JXWx08OjJibJ0BsWtduIF0eUXQ9oZOnX2LlhAUR1OFNyI16mD-z8F0adG2xDd5Fwd9hSh_TpCTvX2Dj.png
        
Lecture 9 March 5th, 2021
    
    --------------------- Portal ---------------------
        Second Semester
    Claim 9.1↔All linear transformations T:R\to R  are of the form T(x)=\lambda x  for some fixed \lambda \in R 
        proof↔Let T : R \to R  be a linear transformation. Then for any x \in R , T(x) = T(x \cdot 1) = x \cdot T(1) = \lambda x .
    Claim 9.2↔All linear transformations S: R^2 \to R  are of the form S(x,y) = ax+by for some fixed a,b \in R.
        Let S: R^2 \to R  be a linear transformation, and then for any (x,y) \in R, S(x,y) = S(x\cdot (1,0) + y \cdot (0,1)) = x \cdot S(1,0) + y \cdot S(0,1) = ax + by for a=S((1,0)), b = S((0,1)) .
    Proposition 9.1↔Let V  and W  be two vector spaces over F  and assume dim V = n . Let B= [v_1, ..., v_n]  be a basis for V . Let T:V\to W  be any linear transformation, then T  is uniquely determined by the values it gives to v_1, ...,. v_n , that is, S: V\to W is another linear transformation with S(v_i) = T(v_i)  then S=T . Moreover, for any choice of vectors w_1,...,w_n \in W there exists a linear transformation \overline S: V\to W  with \overline S (v_i) = w_i  for all 1\leq i \leq n 
        proof→https://remnote-user-data.s3.amazonaws.com/nWKb6KNozQCzJtS9i02v0hBCJYa-L_aoIB6Arw0kyAERzHXMYByaECz4M-n_jQw9MTds3xSb-yhlJZpC93prAir7OUTN1Hx9Lo8fIbaIeltCqam6JKfoTLrvIx7vT9x6.png 
    
Lecture 10 March 8th, 2021
    Recall
        --------------------- Portal ---------------------
            Second Semester
    Image of function Im(f)→Im(f) = \{y \in Y | \exists x \in X f(x) = y\}  #[[Image of function Im(f)]] 
    Kernel↔ker(T) = \{v \in V | T(v) = 0\} is the kernel (or null set) of T , given a linear transformation T: V \to W  (implicitly assuming V,W  are vector spaces over field F)
    Proposition 10.1↔Given a linear transformation T:V \to W , ker(T)  is a subspace V  and Im(T)  is a subspace of W 
        proof→https://remnote-user-data.s3.amazonaws.com/n1EMQe8U34-ya2iePo56W_y2G-FPtSyFmT_VzUXwQJl72Sq1q4SdNKxTBCcPCGueWIOoeSBPqY761jh7KAtdn5QImusTJz-hS1bfz66jtc5hQJ0uXqwEYPaVBIaX7lOd.png 
    Proposition 10.2↔Let T:V\to W  be a linear transformation. If B  is a basis for V , then T(B) = \{T(v) | v\in B\}  is a generating set for Im(T) 
        proof→https://remnote-user-data.s3.amazonaws.com/G593JzPEGGL8-MGrczsreXA7FVVulvvQ8fRkkGFquxSDuKz1YM1fgyrVD5qPNcHfL3P8rZQtVQ3O77eNKUBImbFp4nDOjVao-7urDWcYl94rYDL0j3GzHHzpu93p1Mhx.png 
    Examples of Ker and Im
https://remnote-user-data.s3.amazonaws.com/N7Hu3y6limeGnTHHx-e5VjWWiwyQY6szryrBD_rng99jJiDUAYLeCyvt5Ls_YGi6kO2IBZKB5Vt0HZzp5iL5vov-HhEfvUdaoYFiVw3r_QSthR7Aq0CuzuOkycJaPH-k.png
    Proposition 10.3↔Let T: V\to W  be a linear transformation. Then T  is one-to-one if and only if ker(T) = [0] 
        proof→https://remnote-user-data.s3.amazonaws.com/Q2bK2O0N-HjB6XnEsWZIhCkbqRU092eYuA3PD2I2X4z7koJhMI2DxiYPchW070IuFWFrNj_23t7MwFSnB0wL24Ud5x47ZstQYSq6n0X1H42zLRhgHThDrTs0ytJIZICj.png 
    Dimension theorem↔dim V = dim(ker(T)) + dim(Im(T))  for linear transformation T:V \to W  given V,W  are vector spaces over F 
        rank of T→dim(Im(T)) 
        nullity of T→dim(ker(T)) 
        proof→https://remnote-user-data.s3.amazonaws.com/ZbxWblpGt7nd7lxGKy_fIVpkh3lPAb3jG8oHMaJOWNKNeqQGmJF44G5EBcv7RiLDhWZh541EzxXkE6S_tTgNxHGXLGtpnnLPIH8aJJ2AU6zqukrFU9vvPchpN0948X_H.png 
https://remnote-user-data.s3.amazonaws.com/mcgwhFna0ZcwyEFguuivC-rNzlyO7q1HFtSv4h80AuOPRsSEs0pUFDMIXlG3Dxo6-g70jfwvOsgnSgVdXCmGY__8j8YQP0yvueqD01az4p2YHEXzKIBzdA7p3iWbaJXU.png 
    Onto↔T  is onto W  if Im(T) = W 
    If dim(ker( T)) = 0 , then ker(T) = [0]
    Corollary 10.1↔Let V, W  be finite-dimensional vector space over F . Assume dim V = dim W . For any linear transformation T: V\to W , T  is onto if and only if it's one-to-one
        proof→https://remnote-user-data.s3.amazonaws.com/1_9pj3pM9t8-qQoqdHONhTpLTOfZSyZxrAJQdwPieIDVp-oEXupNQCIIFZRERIaR0n1IsKFepnydpnZK652inZK-GdRZE4brqWsl_BTtkJHL1_LDDyCnWW9UZ8LTXcNg.png 
Lecture 11 March 15th, 2021
    Anti example to Corollary 10.1↔where V=W is infinite-dimensional
https://remnote-user-data.s3.amazonaws.com/GruqLcUBXtyj9JhpHuxe9R95U1_qsfNjZr3zj0Q_vu2ko7-6_jdJtlLP93OB3oyAXPHY74xQK4jsdQVHiuSnC0JKlwBu8HqTapzJh6JrO_Qa7PExEGRGVK0_Ke-dXg6a.png   #[[Corollary 10.1]] 
    Matrix representation of linear transformations
        example→Let T:R^3\to R^3  be a linear transformation. Recall that T  is uniquely determined by T(e_1), T(e_2), T(e_3). Suppose we denote T(e_j) = (a_{1j}, a_{2j}, a_{3j}) for  j=1,2,3 . T is uniquely determined by https://remnote-user-data.s3.amazonaws.com/REOm5-ivNT6JVruY6NjsNWtcbpyUNwdREfj67DRdoVUFftapSwtUiCkHEgd3lj3BKFSVyRKiaIvKiWqg6_2DopCJ_xnAD1f8EPppu8t-USbcylJOC1giocYwKkNab5ub.png and in fact any choice of a_{ij}  would correspond to a linear transformation T:R^3 \to R^3 \implies  There is a one-to-one correspondence between T: R^3 \to R^3   linear transformation \iff A \in M_3(R) 
    Ordered basis↔Let V  be a finite dimensional vector space. An ordered basis of V  is a basis of V  endowed with a special order
        example↔In R^3,  \{e_1,e_2,e_3\}  and \{e_2, e_1, e_3\}  are two distinct ordered bases
    Coordinate of V relative to B, [V]_B↔https://remnote-user-data.s3.amazonaws.com/v9aD9BU042UV437QqPHufpzlcw5p8P5hLNmms9rVQgfvNGIiuc5d-rcUD8bhY5Xs-XdF8XWvkXdxaE7UJ0Qvf5p7zdz1CeyE15K8cnfC3BwwHyEvpdbpq03AVkKP8UYD.png . Note that this is one-to-one onto identification of V  with F^n 
        examples→the following:
https://remnote-user-data.s3.amazonaws.com/Y917_acaYNEI6IkWjy07ZbwOBVaE3LMXmsdZtWg6qsQNAITSxivKCmnIeSVEsbRkI1A2Q1cxA2F8vNBKoe13KC4nqn-7akjGI4dHuLjsG9kGv5kJs03xvsfQ1jkeBLKg.png 
https://remnote-user-data.s3.amazonaws.com/AfdGuUkib_SWVC6f1xHpb1e2fv1z-JorXzUZZ1TbvQazPdggwTXH9e2KeZhGmudIHhrwbq-smJDD0LPFPfGPruyfScBKtsjL4IZvYlBMwXMWBLJQ0CELZ_XiQK5Y3U9-.png 
    mxn matrix in M_{m x n}(F)→https://remnote-user-data.s3.amazonaws.com/pucJZWlt0LT7RzFdgmE6huepPCztcTsTPgifm8h0bg3ZOolAC04gXpJk2jdJZ6asKMgq4Cb_SVNb2k2DvpUmmosVALIQygzuEmCpCXHM5-9l3852FjtL2vW-sCFM1N8R.png . This is a one-to-one correspondance between all linear transformations T:V \to W  and all matrices M_{mxn}(F) 
        examples→the following:
https://remnote-user-data.s3.amazonaws.com/xAPvf1zhQelSTFZL10e7kcWCyfVbgWt68YW633GMbC8_tHrIBrDfUvocQptys09ZCh3ZTmL2sjoQ3mEM_RKBsCjfxaBsSqzbkMW_aOUAUCxk2NQgWziCjYkZreCh_WC-.png 
https://remnote-user-data.s3.amazonaws.com/p87ovikBAbZSdnzcYsXGfiKCWiG5X-mt7A-K0-Qu-jdL0Qj0qbVsO_gm5spVndOB-qrVy-pFr4nnudcQl-xpH4uXd-Jw7Wg68vUu708sFK6JB0cW0NcGa0SoEM5CmDsB.png 
Lecture 12March 15th, 2021
    Recall
        --------------------- Portal ---------------------
            Second Semester
    Identity map↔https://remnote-user-data.s3.amazonaws.com/vsR8oD1uhTHmIiWMvzAsF43Br34tIw67IPs_H40nu-sAgLNRN1SWeKSPFPqfb_jGqW0ELjk1I7UK-i5-6MvHEgS3L50_9vaG6yEc4G-CH52CU_SIBc4Rc0II-JDN3ahW.png
    Lemma ([V]_B: V\to F^n is a Linear transformation)↔https://remnote-user-data.s3.amazonaws.com/6Dax_iD4iSWWRTZWHqBOCUKYl67QcG-UXpRbo_-yVC6loukpV6HS1we_Y56ySBgBWqzjyCmP9q6iDl2ZJqQwzaGkucziUbzNKvF6kTvxTyBiKZpzt9m2G1dzznCqLtrM.png 
        proof→https://remnote-user-data.s3.amazonaws.com/vF6akunNydyhW6QNjnwb5f0oAue4MqzmFdD09KTsgDSjJtRkJL2j5L0DU4l7WBf2YRlU0D0Gah8cZPQzuPpmGy54XoWHbBta8gd70IV0_Xo_BfDnhh6wc5Z6uEPdkOYJ.png https://remnote-user-data.s3.amazonaws.com/Mk5z_BJ2Xv7BKjcxzKc8PNNNGjJba1k3y1W33btyXYPXQlq_wkX9ZJ8JDNR1AjTKAqetQuDCdehLnlOMBA-7quzh4RUcRq8Y5Q7B0TtVSYsYZeliP26x6dpBaaKsXJbr.png 
    
    Function addition and lambda multiplication↔https://remnote-user-data.s3.amazonaws.com/igTFdDzXZEEC0otfXb8_7Cps5pjy4oikvq7t1ae6vzTwshSskYCR2bYMcM5M2X8iYXSBhhHG41Ani1v4PWMj5vFHXODJM3fshFwWAC-4EAIvi73qLJl431FmsJF1yQTo.png 
    Definition (L(V,W) )↔The set of all linear maps from U to V
        https://remnote-user-data.s3.amazonaws.com/XlYDUOIzYPKYGxgoetWJcARdmfVPbzcwTUqUxmAloHoiuQ5wr5LdVfrRVFgi7ssXY9OtfRsQdtiLqExjm-ylei8eUL2VvOB46S7wdcgVFV3vhA2g-gk-eyzs6TWY7-Bk.png
        L(V,W) has the above transformations
https://remnote-user-data.s3.amazonaws.com/sNHPaiv_-c-gmIWxODWlR1WgCwnjabyxLigWeO9htq48cjOpfIkxj-L7GmPCtDw8hG930Jkb-B7N-I1_Tt9KA1jMDrB_xv3p0oQC1OLsxl4U8JKstZtanKEhLPyteT0N.png
    [V]_B^C: L(V,W)  \to M_{mxn}(F)  is a linear transformation→https://remnote-user-data.s3.amazonaws.com/yOOXwYCLar2OT0-q3rsFqwYM8W8pl8l_j_gEI5yli270a0j_pFSZw4A4HVHy4cqKK6Xt_ut5fs3VEQ8ICsWonD1FyaoF6I31CPd83Yvgo9Xy2QhTW-0O9Wiy0CcpCST5.png  
        proof→https://remnote-user-data.s3.amazonaws.com/nRfAqTGJe6wp7ewLvYQHJM5BH2foVnag_61MwFT80BZO6M078amoL1wiCBVddjWNs26jQzuwZ_ZACI48_0v2Zuv1HzUlkTH6JAkIUaOagTB--fWNc4eWlIIaz0WYUdWe.png 
    Composition of Linear Transformations
        Composition definition f \circ g↔https://remnote-user-data.s3.amazonaws.com/gO5zLUxlyYbBLmkc0_hQz1XL-BBIXYt9VNeUDzHn_tlydAlhm01o050B-JcR3TN6xv_yrF6ufFtMWeHnbFuwLl-sEDBLi0bQnv7k0yCkpyIcVFfam_6tygD3td-0vjig.png 
        If T and S is a linear transformation, then T\circ S  is a linear transformation↔https://remnote-user-data.s3.amazonaws.com/_MEbgTCBjuLEzduSDdMy9QaLZDKPz7np7wM5a7LNgj-qzmK2ebLo_UDOI8YsdJVt3far_j_vWW0q6noY4FVlQWOYuoar-riY3mNMF5BOoGLvNBlO-bg7py6uBW8f9YHl.png 
        The Composition definition f \circ g  is a well-defined operation of L(V) —in other words, for any T,S \in L(V)  there is an element TS\in L(V)
        From pset, https://remnote-user-data.s3.amazonaws.com/Iz7hrkRIT0zIVMwLgDYDyjd6YnChlOSvvXZpAcKGu7e-MCA3sCjwVpBFR4tHL8DBoBokSL6avuL8FT2pCh6mINQat20i_ByHyEgC6v5y8fWxDV29buHT2gBoPMKKs7VW.png  but does not commute
            examples→https://remnote-user-data.s3.amazonaws.com/l_1iJAKHr-7KLtIB7lHhSVegDEEFBDb6sDpnxgRoszmFNyCYXqsPwYYrxb0gcFR7TBqB1HEE4yi2k_kh7HqJm_USECD5iDnAP3gPT6i6BfMUZuP-b6u1E-bprsj3YCvi.png 
Lecture 13March 15th, 2021
    --------------------- Portal ---------------------
        Second Semester
    Matrix - vector multiplication↔https://remnote-user-data.s3.amazonaws.com/KlcrnAhgG_wY0vhMwqMCfpXtrdsSV5bNLojYXLM4hBNjgwNGgJis7t4omIN6FH-POsdwQaLAce5AyKYBJOukDC-FqtK5kYx3WoB-RzxBfeUp1-ffnlW1oxO0O3GfVlMr.png 
        example→https://remnote-user-data.s3.amazonaws.com/0ZRW5Y_O4cgIA4umvM2yXCxcwV3YU_MoTOFdGouUyR9zZi8yKRySB8sUppfjzyLDqRJ5BYNak3W35vUNfnYVN_9JqXmfa2r52jnUzbUXbkw5Ra3eLboYMfKws6HBy_Hw.png
    For any v\in V, [T(v)]_C = [T]_B^C[v]_B. If you are given that T:V\to W  with B  and C  ordered bases of V,W as before. (Corollary)
    Given A\in M_{mxn}(F) , the map L_A:F^N\to F^m  is defined by L_A(x) = Ax  for any x\in F^n  is a linear transformation
        proof→https://remnote-user-data.s3.amazonaws.com/hIW4zh6pdzwJHa9llexSmrwR55S32IsRXYEmf_z2bgXszwXcCpPSRY1SyqAoQxochDSdpp1JQ3gDOSJ1Oy7e1Evm8ND8xlMV2GMH0sqsM1iDgfuMorhLM2tbOcd14cDY.png 
    Recap
        https://remnote-user-data.s3.amazonaws.com/1piUDVT3GyvtFDZ52aaClHq4V04uNc1mGMgNbuexRYdKv-XBcmTJ2scZkp2J15VLZfsJlIXhVZkzfoIOysOIpf6zVKdUNFcofWTAf_UmJMkfwqJlDo1_XQ8p56MtySf0.png
        example
            https://remnote-user-data.s3.amazonaws.com/bLk9MjlGLY1SY8MwbX5-sehAdHQEklZf_wyihj--PGIPyyAIw1galilMJ6sQE16E-t5bMWeA78ZeCtw3SRhOrsfbH9C0KKcVCsqOkKuZNp74iIBIDEb1TcvPDVtuUTX-.png
    Let A\in M_{mxn}(F)  and B_n, B_m  be the standard ordered bases for F^n  and F^m . Then [L_A]_{B_n}^{B_m}=A
        proof→https://remnote-user-data.s3.amazonaws.com/3YC2IMbCadoDm0hsiOiAfS5Jl_jlgqXNal5WLxE4sxVq6k9GZ-l9wriru4cQ-wqIHB2rXkIKYHx0tVjWmLmBJOJ6M5ivcjc_b85a6e7NT9_HdNrMKg3WockY5r60HgjW.png 
    Matrix Multiplication
        Motivationhttps://remnote-user-data.s3.amazonaws.com/gKkufua6t7UBg1GCqUYnOMQwrOIZVZGnggeeMqVmxBCHDbZn3dZGPvKGTE7vqNq-55-hWjx__XOV5TwrQkyhsf2gpgtupwzYD45V0bGg3sD9Z78fWqlaWR6xU1NeJEUe.png
    
    https://remnote-user-data.s3.amazonaws.com/n8HJh3IK9c1FPCUCIfb_eJPhIs94mw04_zL6ykXQZEIkPFobEjuPKqD-VcMVVxrB-caW-8aX_hnHbUOmAqb6retst0fZfY2hWGBuT1FknqNt8fc-V4hlAv8w2ULZWOF8.png
    [V]_B→Extract coefficients when you write V  as a combination of  bases in B 
Lecture 14 March 28th, 2021
    Matrix properties
        https://remnote-user-data.s3.amazonaws.com/3V9knp0ZNkZjpv_5xeOfzUU3d76eTVXPbnzuXs9JS6OjI1QMmzz2xNNCrmDt_fiBKrIr8s18579hWdV4CajSZVRQOgojFHmzJoT2oNo7BciAo0OA9Or9oNCRrFdA6wqu.png
        Multiplication is not commutative
        proof↔https://remnote-user-data.s3.amazonaws.com/WX7BFdMeTkxCOo3geEAQZ_4aC4_efRHJH8wYWBLWKmuzbo36tlC9ZcdHv53A51y2W6OZlwCvpbR654F01RZ0jUxh2Zy5sTuZNRYeo6j-VIIWigPtHf8_VApqsPSAIHXK.png 
    Invertibility
        https://remnote-user-data.s3.amazonaws.com/LXko5e0vNT-iRH0rigqLVga4cK5HRstG7OHb7vpfvzQjlL7nF-xhiqJ5aa5xVdCNok7EAc7KWnJi0w8Oj-3ZeGZ5OBVd2OK_w5AddxQyubxl700WVs0KXl4FPdlEA6Q0.png
        If g:Y\to Z  , f:X \to Y  are invertible functions, then g\circ f: X\to Z  is invertible and (g\circ f)^{-1}=f^{-1}\circ g^{-1} .
            https://remnote-user-data.s3.amazonaws.com/n6I7i1D1PqgZpimcyFLpb_jdWXeWvkDf7GJVTVr9oWxRjfTcSzkSxOyzaW4xfb3R-3Bv9QIIbnVwcxsBjJvZAJjuigEqcxMRZSSHSFTnCTr81bzlte9DnjwQjVYyyxOx.png
        A linear transformation T:V\to W  is invertible if it is one-to-one and onto
        If T\in L(V,W) is invertible then T^{-1}:W\to V  is a linear transformation
            proof→https://remnote-user-data.s3.amazonaws.com/D4uy2V5QkFlk-aCF57rWOM1Ye7upFi4VoEwGnnJDZbf2zJGG6ZAnwzaGO9p4LfUSPYBc3ClzHtxQDsZoxNF12_qTEkJaRNWNkRCAbHOlIQQgHUtrNKj2b-JCrdQ3-kFp.png 
        Let T:V\to W be invertible linear transformation. Then V  is finite dimensional iff W finite dimensional. In such a case, dim V = dim W
            proof→https://remnote-user-data.s3.amazonaws.com/gC_mXZiHaT_GmnEDAW-rW3xTz-g6WAVgE7OblXgAo0f_hbTQ1iBo6CRVqTL0sJByBA2Q0o2m7-12QgMzP4kWnwupQhDdRS6WKJlaL4Aucmx3TmY0yeKzqd8u_x4rc_XC.png 
        f: X\to Y  is invertible iff there exists g:Y\to X s.t. f\circ g = Id_Y  and g\circ f = Id_X
            proof→https://remnote-user-data.s3.amazonaws.com/Y-jr9RzmZ9mjCHPlUUQFYW_aBZYt4-AeeEcwpi0_-mESlChh6KlwiZnCY9Cof7tCkEW9HcQR0vwQIrS73FCJkVoCjCWdl-1f2rijHxVcbGwBkk_ycvsEWewV81Soh-QL.png 
    Matrix invertibility↔A  is invertible if there exists B\in M_n(F)  satisfying AB=BA=I_n 
        remark→https://remnote-user-data.s3.amazonaws.com/sypqOMOuQmwPAKzVREqipfx9AT4t_F5YfAZpBn-apTVmniX-N2E9g2A92a78UkdLWGD9jv3tzJI31sUMhgAMaz7MiC3G6aVcMgcXrXmmbqZXiKrElqhdMD5LocofZm4L.png 
        example→https://remnote-user-data.s3.amazonaws.com/2bxWf_AIBi0snML_z17FkvspVlkOIa8IRkRg9_f52ahEV6uyPn_FztPQS-YUyYnLNZBBbXkcHWG8TwPEkjXVRV2CqLKzMYA0EUCpkYC4jAbnqkrT-sYRBxTWcmBcJ9XB.png 
Lecture 15 March 28th, 2021
    Recall properties of  linear transformations
        https://remnote-user-data.s3.amazonaws.com/5KCx1zuvdNayQySjZOjXXjspmUE9ZTCBp63mfA65BqRpb00V2H8gs4pLORIkQZ9C89FOOsznmwIYxdIubx-KVPFaSgL0waZjc6j1PbEDJgKt0fxwyK23mL5R2KvtRpIQ.png
        examples and antiexamples of invertibility
            https://remnote-user-data.s3.amazonaws.com/E5ydKZrkQJMEGszNNwCo4prfDX3gwF5fXhoyzB9xL0jp_vPsq0p4VfRda7dlbSPcV0vK91hB_HviWqxCWgwp7iZ9lBdoZSv5EBznShNk5oVy1QFno0OfP4IS8qWRCovt.png
    Let T\in L(V,W)  with V,W  being finite-dimensional vector spaces over F  with bases B  and C , respectively. Then T  is invertible iff [T]_B^C is invertible
        proof→https://remnote-user-data.s3.amazonaws.com/qXS7VOwvOjlOTXYRAz1jI6WONC2aMTzJuefA4iFV3hTjwAn-ehuUg0dzs_d5Z2bY1C5DAflyMBW5Mo7sfSrqxgzKVm4CJF-z3vPVcsEJTLgLB20SpxT3HXZxFr0pN3Cy.png 
    Under the conditions above, [T^{-1}]_C^B=([T]_C^B)^{-1} and L_A^{-1}=L_{A^{-1}} where L_A\in Ln(F^n)  with L_A(x) = Ax , whenever A  is invertible
        proof→https://remnote-user-data.s3.amazonaws.com/D4ud_440DG9aQdCmLw7ZCJt9g2XEQPsE8EilOZ8qGx6GnJvgWzqXGvB5v95zqK18WyyOlSY4Y7LILrc4MaKKm7I55sbjnkbiEOOvaZzq_NetBdS9AuPPKgNXFbMQ1Dus.png 
    Given a matrix A\in M_{mxn}(F) , denote Ker(A)=[x\in F^n|Ax=0]
    Let A=(a_{ij})\in M_n(F) , then the following are equal↔https://remnote-user-data.s3.amazonaws.com/REUiyIcbd6X8mtfp6nrvri0OSZFJCNmCxkkU3KCYhKgGG3U-jAfIYq4HSAbUBWTC4FqmpJ9007pJagbwndhsAM8YPH8P48lzjN_4-cN-cKurgz8Lv5KwRjQeJycV-zsS.png 
        example→https://remnote-user-data.s3.amazonaws.com/ulcvTw6CorN6LTzLLhDpU_LfzeTlrorq-3DOtFcZLIjicSldW9J5OUUuKbtNgRyqkNgALVk51IzKXy1U6Q0GBghE5NJKEMZVIW0Tw65k9-K_4F4YGEgHKu8UL-OqfiiZ.png 
    Isomorphism↔Two vector spaces are said to be isomorphic if there exists an invertible linear transformation between them, called an isomorphism
        example→https://remnote-user-data.s3.amazonaws.com/j0jJV5FIzMgbdOwuAboYzTJTrU1hRBMNur7GU6Ci2SiMQ9ZzmaLcnX_aIwyGCyOd9H5JeJwGz-g2XF0rDbVwvdg66R_O4kcRkiLAM5NU-pHy6c5gq3vepu-dHVY0z2pu.png 
    Change of coordinate matrix
        definition→https://remnote-user-data.s3.amazonaws.com/y3WqJQ7Unc352MSusMdOAZtV7p1mBNMSrwb-KjJI0XH8K0aseW96GbGJ0qta23JyvLD2cChc1ZxnYrT-4xHQHMimffRHNERvRF3E1-g0WXl39nYlWnfUTWHGI-1zziSq.png
        From the above
            \forall v \in V, [v]_C=[Id_V]_B^C[V]_B
            [Id_V]_B^C is invertible with ([Id_V]_B^C)^{-1} = [Id_V]_C^B
            https://remnote-user-data.s3.amazonaws.com/PYaPbGqRZ-JIUXnhpwi9iQIZscYroEsL4Pc-GoSpuvwn6dlzEJy7R2u8jnD8mAzWbvATORw5N8mt6pkqGDGkwUg9iwCFfkmrvJmlH_4CBunFrhlhs5Otq8cj8Songrft.png
    https://remnote-user-data.s3.amazonaws.com/LSX3rxy81cD51FQFqmQRNSL1AwyhvP6Vbig1k7yxKr2WgMp__nbv7Yxv9dC7iG-wPk6m-79iBD6AoG6Cw00DqbaR9uyEoXerdDWXNtsQxd0TDKYS3sz_dNFX2TZw-3Fo.png
        proof→https://remnote-user-data.s3.amazonaws.com/fK-xVU0xasdxdMY_OZDYdAtKfmvg6zqCE-FJZOhu_6uJnof5TD0lgWDqfKlub7O3_eTwdgvncfa7lP7k17B_BLBCFeXHs0rcKXFHak5s0fBM8fVrvEw_Q37F4BPQ5BoI.png 
    Similar matrices
        https://remnote-user-data.s3.amazonaws.com/dPuAmw0TPYQR9WZegK0tNjQJHaobPPGNy3YKHJWvk1RZZv8EunGmCE9Oaym2GTbas4Q4s8uhrSsEtAm4vOsTTAXF2pNMTe6uwn8hBZeMHqh-jPYbQBeFRC8yUt0Fa_5L.png

A function is invertible if and only if it is a bijection and one-to-one
From Lecture 15 March 28th, 2021 , [T]_C = [Id_V]_B^C[T]_B[Id_V]_C^B
https://remnote-user-data.s3.amazonaws.com/QQM7_tLe5jyJjKvoMLXkuVLLGQJjGKwno9uLMiYKvVxlvNHtdM_0ki9xtT8Ihpqw6_mG36I4VA5zDWGST_ajWPJCqVSf_dGO8-nVule6UGgjXOmv5nTYJFzPuYXyZJvg.png
From  Lecture 14 March 28th, 2021  , a matrix is invertible iff all 4 of the following are true:
    Columns are linearly independent
    Columns span
    Columns are bases
    Kernel = 0
A is invertible iff it's determinant is nonzero
https://remnote-user-data.s3.amazonaws.com/9xeGZiLDVhwsaV1TJQGStCH8CkneIdB4K7ihpQ3u33w0HgeHg1WkaKxZmf1dXfMeGs8TpbVDMEOH9Oeja76pFaW4pRDsCHcg6G8TXZNauU-DqCDHuHpJYs5Qu6CvO3XS.png
