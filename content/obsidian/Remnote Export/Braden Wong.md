Notes
    Yale Courses
        First Semester
            CS 201
                September 2nd, 2020 Learning Racket examples
                    (+)―0
                    +―#<procedure:+>
                Lists
                    Types
                        empty list
                            (list )→'()
                        flat lists
                            (list 'a 'b 'c)→'(a b c)
                        don't use quotes when you want evaluation of list
                            (list 1 2 (* 9 8) #t quotient 'candy)→'(1 2 72 #t <#procedure:quotient> candy)
                        non-flat lists
                            ('a b (2 c))→'(a b (2 c))
                            (list 1 2 (* 9 8) (list #t #f '(a b c)))→'(1 2 72 (#t #f (a b c)))
                    https://remnote-user-data.s3.amazonaws.com/Yhe8yS1RBCtJCAa_s2Ju7yllx2GoBvqp5XnJHfXWvi8ycIfqSN1Xv1l3FGwjdBTod1zuOK10b-2vgA6_1uQQwW8Dxqb0aUsKuqca4aVkCbc59R89cpbeHwtHOXcDXHuf  
                    https://remnote-user-data.s3.amazonaws.com/v-4NzXakxBao_8B-C4uvRQjwSB8313UkHTHvZfAj1EvYS8Q-ZBHC5WKG9GCehxe5XEaDrAzyLoP5EAy-fw2Ibp8eiibRIk64e7ecwFelzMv4sDRH6m97-W0pLid0DLOI  
                    
                    pairs
                        produced when→(cons ) is called on only two object
                        visualized→https://remnote-user-data.s3.amazonaws.com/qhMYdrShWdp22Cj34c4DFh4rivCWIX_IKZ790V5DbgyYK5GvxYkPpJxXHfq_pOeaxuFm6BywFtdbmqG6fQyzxG0f_0dwpxvccbGuclpD79bzIKsW132zN3TgT7EnffOn
                        why use ' in lists '(1 2 3 4)→so first item is not interpreted as an operator
                        https://remnote-user-data.s3.amazonaws.com/q5SZI6dx0GwDTH0sRluihjIxEolKoq9tBcpB2eyMMUKHcKNBv_9924o14LRRKvC-A2h2e-O3XcGry60lhCjLGBsBXU1fH6tdUXik4CRBL0cdNwPDXzB6SxfY7ho2LIX1  
                    Procedures can be arguments for procedures
                        0.7534689230277567
                functions
                    cons #Lists
                        (cons 1 '(2 3 4))→(1 2 3 4)
                    append #Lists
                        difference vs. cons→cons inserts first argument to into second list, append combines two lists
                        (append '(1 2 3) '(4 5 6))↔'(1 2 3 4 5 6)
                        (cons '(1 2 3) '(4 5 6))↔`((1 2 3) 4 5 6)
                    first and rest #Lists
                        (first '(a b))→a
                        (rest '(a b))→b
                        (first '((a b) c))→'(a b)
                        (rest '(a))→'()
                        
                    list-ref (index function)
                        (list-ref '(a b) 0)→a
                        is like
                    Cond→Case function, returns the FIRST true
                        (cond ((< year 2020) less) ((> year 2020) greater) ((= year 2020) equal)
                        (cond ((< n 100) 'a) ((= n 50) 'b )), n = 50↔'a
                    let, let*
                        allows you to assign temporary variable for the procedure
                        https://remnote-user-data.s3.amazonaws.com/5vHptnJ1mxyN_GECe2a558UO4nKxV9GrgmvzezvWdQtxoPc-CrfXgmHIlExa3I62rf5DsU3vRIvVqWv3haRE463xepeQ-3Rs5mHHP1E99I8L60yujxFe0ste9IbbqBZw  
                        let vs. let*
                        https://remnote-user-data.s3.amazonaws.com/4w_49pjs8kI-bbnHw3J9RhjgHcF5H5l59jD7UTCD-ETh8kNBbpJPIEnMb6rpL4BXWPeJAxyiRc0hNq5G6lJlqpMT92ZWtRhgS_nhTv4w7Z_NogLTMQ_n0VHT6DjIF4Ex gives an error but https://remnote-user-data.s3.amazonaws.com/VU991DOm2qqK69YqS2-AaJ-qdWWY3K1G3qAHX-KgZkFv41wRIcaYUdJoPCmjGImhI2B-Ne23rUEHJavsC63InFW1CyVfp8IhovqTY62nlR89b5TNai6d0mbVU4faiW2h does not 
                    length
                        (length '(a b (c f) d))→4
                    map function
                        (map (lambda (n m) (+n m)) '(1 1) '(2 3))
                    trace
                        traces function's calls
                        https://remnote-user-data.s3.amazonaws.com/JU2EZB6gWWKf8yayHKTiR2OB5TEcv7pNOeVHBmHsSloub1jrE5VMSX7_3bleO9Sni9CstMfW7EpHBjkpYmDRsBNF1m-TdV1UJN5goaXqawVc0uDhw_yGs5PqpVBH6FIa  
                Terminology
                    Deep Recursion→search within lists of list. In our base case, we will need to check if the first element is a  list 
                    Symbols→anything that starts with ', or an operator
                    Iteration vs. Recursion Processes
                        Iterative process→only one recursive call of procedure at each level without further processing
                            indentations in trace function? (yes/no)→no
                            example→https://remnote-user-data.s3.amazonaws.com/MadPkqveNAbmvoVcx30uTkNi1uW_JQO7gqv40NxL_i_8Qp0kNBIvJjlXLHgaTZhjCK8heSERHNI9phk58hzLKU1wEp27tAsCxZMZE-ml-V62dijgf0puIplyuhhHbTOO
                        Recursive process→more than one recursive call at any level OR there is additional computation done before recursive call
                            indentations in trace function? (yes/no)→yes
                            example→https://remnote-user-data.s3.amazonaws.com/o0VQa7vdUQwhP4W_POU2Z7v20EdfGJWaLQdB05u5Zh7CJJUd_V3jG-4COn2AlFu3QyYwUOtgK9_TmTXo9sp-_HVMUs0phseDJGsGw4FmIifwRCL8rHlboFBTDRFyym3v
                        Convert from recursive to iterative→add an extra argument, put computation in that argument instead of outside the recursive call
                            example→https://remnote-user-data.s3.amazonaws.com/eIoDZkP8ihSaohumljnCAELY9b1EAbb24Y_WalpEC9kgshpLxrr5Ng4qwXs1aUAuF98vVN1EugKKGoE7CS5isiTnzMePspafY57C1ADEri0T-T3KWluZ3vR22R7kdvWW
                        The biggest difference between recursive and iterative?→recursive places computation outside the called function, while iterative does computation within the called function's argument
                    Procedures vs. processes→procedures generate processes
                    Tail recursive sequences→recursive procedures that generate iterative processes
                        how to tell they're tail recursive→all calculation is done in argument, not outside
                        tail= tuck   
                Commands
                    Any number or character other than zero is treated as true
                        not 1―#f
                        not 0―#t
                        not 30―#f
                        not +―#f
                    Iteration―looping
                    Recursion―breaking into smaller pieces
                    and function―searches until it finds a false, returns first #f, or last value if all true
                        (and #t #t #t) => #t
                        (and (loop-forever) #t) => forever
                        (and 12 13) => 13
                            12 and 13 are both true, but 13 is last
                    or function―searches until it finds a true, returns #t or last value
                        (or #t #f #t) => #t
                        (or #f (loop-forever)) => loops forever
                        (or #t (loop-forever))―#t
                        (or 12 13)―12
                            12 and 13 are both true, but 12 is first     
                Turing Machine
                    https://remnote-user-data.s3.amazonaws.com/-6MI8Io58rNrgEiw8bb-YNDxw8jNkqwP3MiyGwi8IudTRq3SaZhBJWzHDe3Lk-iDTApzB_zk_xJTUcK0UY3GWcErkHynoZFqkKTSFs9suHyoB64i-wU07czgdmdlbp4R  
                    Infinite one-dimensional  tape   https://remnote-user-data.s3.amazonaws.com/ofTININdCrKCxcL0JN8Qi9HpJswST49H_s64t90og9CkmpN-BVx4exd6AaHT-smYsG9JBy2lX1k3An1XcQpxTNS2TE_LvTr_iokHDhEZCpz4yjR9asgLmo3Gtp6npVY4 
                    Finite alphabet written on tape (often zero and one)
                    Locations can be blank
                    Infinite blanks on either side
                    Rules ( q_1, v_1, q_2, v_2, d  )→Check state and value of current position and find matching rule for q1 and v1. Then change poisition  to state q2 and value v2. Then move left or right direction
                    https://remnote-user-data.s3.amazonaws.com/dzfhmGnm-SW5LzzLoNazy8SJgwFRjeGN6t4KPAXHToQBVNPMpxBoA-pSKpD0ZDwetBsDOBythJ8j24dlmnggKCkI6yyWMra7_CyaAKdlootaycroEW3eVx7iGDRLbPE9  
                    What to do when hit blank?? Flips and changes direction
                    General problem solving strategies→move all the way left or right until blank, then apply map in one direction
                    Copying String→Given Turing machine T and string t, does T eventually halt when started in state 1 with head on the leftmost symbol of t and the rest of the t blank?
                        https://remnote-user-data.s3.amazonaws.com/iUGF_9yrKbIaGzHvAoVTB57DXsy6jMB3qDaXxrk9yfJVyI2UQxPBxFI82eqG_nh9eDnE--AWbVZodCP4qCWW0z69zCjwUjHObJT3iewcFl-dNiNBTeCscq-y8-DeEQ0F  
                        Proof by contradiction, assume there is a procedure
                            https://remnote-user-data.s3.amazonaws.com/uQUb7ic9i3cquPDpAHaFynqPOzlAwgJ9KEZfWZDxbkcJw79j7knbcwysEux3ovgNLATCgo8GnaWsx79k1ILfzUQ1az7ZbsVEIL-0ho84luhOg_Z0Ki9uxEAjcvy-vlgc  
                    https://remnote-user-data.s3.amazonaws.com/cQ7hWOX31knifTpvUX17xmhBB5vjNivgrjF0aRArDpmzhDEFF3tupOsDAdkUFH_pWJIrClE1NXHXwqL69djqGnVOUCJFkqC8EnCEbW33_RibOqU-FBKwtcMLlvdLWzze  
                    https://remnote-user-data.s3.amazonaws.com/bBdwsCue_pGunZxS_qlxwduiiPYHcBxvREqbT734NhwHSCnp6OpM4XcxVKy-HaKddrnxgSKiwQOXnv-LumHW1Ay2UelorPQffuw1g8pmGpl8XJlAuIpXcW1M_QGek2Ol→Subtract 1 from string
                Lecture 12
                    symbols (in order of operations)
                        not―'
                        and―*
                        or―+
                    https://remnote-user-data.s3.amazonaws.com/jjgNJbRc7DEiyEmAtVjFT_KKKrCSFZ7SvxWHSXIXdzrdziRs2Qi0x8b9-jsnAq4bJqPTiR5xhrB-a_T5Uhn7oD5gsU616n5hg8Plfo_3KP0QtDp9FlppsssIH40psQa9  
                    Truth table
                        example―https://remnote-user-data.s3.amazonaws.com/1dO8wsZplgjkyb_T9pNMljfmxOcT56GqvhKzd8oQov4rdbb1YWoDHH9ZYKPEv9f1meZXS7v-t4Z3Tv-R-ovZwMKc_XAP4rdbqWVdm_shxnmznZlOve4TuIaJ8dCMgmWV
                        Conjunctive Normal Form (CNF) vs. Disjunctive Normal Form (DNF)
                            Conjunctive Normal Form (CNF)→make all expressions 0's with or's, then use and (*) them together
                                https://remnote-user-data.s3.amazonaws.com/jQy4iRMXK0WYd1pj8vxpUY1SRiyJYKgqB83vGgQmwX-q8MGA4JUUIY-heSNhtRfQ19hWxG6XPKZFC6Gm5tv_Z92yk5h_7rziab51gpihl5w_TKKs890NaiNXB8oajs5H
                            Disjunctive Normal Form (DNF)→make all expressions 1's with and's, then use or (+) them together (x'*y*z + x*y'*z...)
                                https://remnote-user-data.s3.amazonaws.com/mI0nrc0LCYUdquh97tSEnGegv_6fu75t3m-hX_bvtaBXT52LPY5ZvzU-N0sOm-ZSbMreINV9LISMM1W2a_4zyIaqLvrzeDClroUndytqedz7YbKX7hENACE4a-hLUzMW
                        converthttps://remnote-user-data.s3.amazonaws.com/9cYdFfsCwmnNSZsm6VQmhL4x6LNzfZ_bmmRRwwVSgW1jIU38AjgPSfBgzCR2g7wy1uimCHwqCMtAkSMdYwQs3I54yoHa3s8k_9CIiTLIU2vAmN783pqHlYE73osksksC  
                    How to approach truth table
                        1. Find all the true values in the output column
                        2. Write Boolean expressions for the corresponding rows https://remnote-user-data.s3.amazonaws.com/62FAvcBvKxsd54aKw9KotWZU9QwTa6Ps1uIcb6bN_1DuV2U3Z5jk9kvWQw5t2pwz9fXcom-JSIzTOBESvXX8KOnvkLHDBQ_Bis4nTMbN8oKIu2PwBSHrZ-_gTw1wFkyK  
                        3. Add these expressions together to get your final sum of products: (x’*y*z)+(x*y’*z)+(x*y*z’)+(x*y*z)
                    Boolean Algebra
                        https://remnote-user-data.s3.amazonaws.com/f5FRMNWd3bPTpH02lUKVCtv_VIvwLrqVl6our0qJSWBcpcpPUXtV_Y-3L_0wP1Kf2-vNIBK0fPyQkkJiYmi0qZXpKE6ZOx_CEDN-CXKbKGdXjQ-QRinigDl0_fXDuTqW
                Lecture 13: Boolean Gates
                    https://remnote-user-data.s3.amazonaws.com/oCh4TCCK4wEhGm32ojnWeetBnWQa4lKNzcl4BwRta0CUMb3Ug3-97dVmOC7Sqw_OQ-C4A-aryIhVwBN_WXssHP9dR1Afq6QJl2ldzjF70U3pbJo3AbzBSwYy0FLsj-bX
                    NOT Boolean Gate―https://remnote-user-data.s3.amazonaws.com/r4mIWkVec3my16Qa2wthcznDKqOnqJlcrzPZ5VrEP8CB60H2lquhmCR_xCb9Dzmy52cS9ELsf0Gs1fVmg_TvxHyVtYyiwyIqC2dqHIr1HeYwveyMpjoUiK5FJQ5-wG6j
                    AND Boolean Gate―https://remnote-user-data.s3.amazonaws.com/uW2qT8knoNRmJSM4gfFGvE1YvVhPgxQ8aY2oq7LLAc_AfjJppLcK__K9ZRf11mA97si5EsM0LpnGxp-_YVLhoCLY7okTSQwqoeRW_9j-R8dgmE7DXhfVvw78oLLd65V0
                    OR Boolean Gate―https://remnote-user-data.s3.amazonaws.com/bp_7Gjgkpb4Fpz9uyxzmdm88DPW9La7TWQQqh5_BBD-wcHp1UWB6d3oYUVj_lnAhxqDWHoHDVYHxceE6-QsFudOSYz8wtaMluU0JYZmPQKUltVesQ5i0ukT4BfhHHrt6
                    NAND Gate→Not and. Negates result of andhttps://remnote-user-data.s3.amazonaws.com/bUbpEh2zlEwdIk3rrDHJx9MA58sLGBWRNLLgyeKrr97Cd5eqfxfWsvDzwISd_HHQ27oCbnmBcilCtBSz9ahgQBSXZAgENiMWPXqOAYYN-iSrCTpvDfNY1g0OYOClaWcO
                        x*y in terms of NAND→NAND (NAND X Y) (NAND X Y)
                        x+y in terms of NAND→NAND (NAND X X) (NAND Y Y)
                    NOR Gate→Not or. Negates result of orhttps://remnote-user-data.s3.amazonaws.com/h4r-81VCCTzB_RAyoY_lL0eQNmQjdLoYHOubfZjMINwarCkppHWMMwA4ca554fX6GsaCeXk37K1_vzWd7kwOvKgtZ9UAKfSPk9gxdIqAmlQa4FkAnmvIHg8DJ62IjcYZ
                    Exclusive-OR Gate→Either x is true or y is true, but not both https://remnote-user-data.s3.amazonaws.com/RKeDh7A7cYm1sQVl-NXeMGWfavIh1BtxAKKZitpC_zGvC7Vw5RLOti50x2U5zrAJIVThBFKuAoXaaVB9mnRv3-AjBgKx1GrYegzr6B02K4R3kW-t2Uq9juFKyxJcmjBr
                    DeMorgan's Theorem→Apply not to all variables, change AND to OR and to AND, and then apply not to the result
                        x and y→(x' OR y')'
                        x or y→(x' AND y')'
                        (x+y')' is equivalent to→x'*y
                    Given an infinite number of operators, we only need two—AND, NOT or OR, NOT—to represent all circuitry because of DeMorgan's Theorem 
                    Comparison for Equality
                        goal→https://remnote-user-data.s3.amazonaws.com/ZmkxrTGgPGLh5QxnXRAoqUWlYaOdPXEDDqLq8Ps6vymqgI-73cnc9AgcgiABfEU5XubDaNjBt8fTDoYYFG0tbuFZII0jOkbzu61zFMq22Pqj7bRdVNQNYEAc_bkM2TuJ
                        1-CE↔Compares expression of single values together and returns if they are equal
                            expression using disjunctive normal form↔https://remnote-user-data.s3.amazonaws.com/5RCrPZRmI_T2aSzHB6rtVK_ZfUevIF9J5spfEgba1No9znD6Lxaj-DouoERELMHWgy0xtzsrkwe4iu0z5Qh6VcOEz4alEdbdVEGvMt79rfHGuOAFRef1iLz4f4npRGnP
                            circuitry using and and or→https://remnote-user-data.s3.amazonaws.com/tBbR1hzQpB1TdxPE034q5RMlWNPU9Z-mKvMGRopszvaxDpOX0rAZOo_gJcSfSA2oOzHPZuFdvYn0k-pYyImGVIWR1cnchXKbwU908YpiAAal2RZ8zfIT3Z4zyiGyLxvn
                            circuitry using xor→https://remnote-user-data.s3.amazonaws.com/G2zt09acrOEHtoMvJjr0C-xvFa15_uhtJ1BcKfGGIND11_YG0861OtKLzL4SwiGeDaWA1fXY0WoUPUcxrxrLEw9lN0aQsbnVrYb8STigbm54f9ReViN-E-HpuyoAFFCH  https://remnote-user-data.s3.amazonaws.com/P4eoX9zgYlLBxoz_HsVlU0zuyHv8pgb4VEilrsivRrAxDC5XVw962Hk2zv7nh5P4AOVUCtELxKPM2Rp8iUU7hYmsb-8X3jgsbECA6tJlsZZ3OoM5Sxw-p4iqQWik2NT1
                            final design for 4 digits comparison→https://remnote-user-data.s3.amazonaws.com/YEpIMFE0nfiVt9ZfLUNIzT0IGnHnECzxbGTvIo8K7793o9YJZ9Fk9DmTS3PrfwpaUTzURFzrw_9eJHjQTOUFQ8V3IPsDcp0IXUtokQmG6z-WVfX5u9E2FwMWw_BZAg6p
                Lecture 14: Adders, Carry Bits
                    Half Adder
                        Unlike the Full Adder, it can output but does not take in a carry bit  
                        recognize from the following truth tablehttps://remnote-user-data.s3.amazonaws.com/J8ZrAbT-jhGE2y_exNzUEQdfiMz3T-o5lGlTwkYx0sRK2VWSdnI3H1J9NBKXLYuzNdJZNRB4plteQ1-mSu5AJ2JK_-I0c4jW_HPT7RVFRuzeq1KFgla5OeD8U-PJApz9
                        https://remnote-user-data.s3.amazonaws.com/birQWf59Aiqs3HdzIv5K0VBKIAjn68VZfVdJMGUI6BScZ0xxkH3LUwsR811aJ9jA5qRZLx0qkqQ2sP28mJdwmjZdzY-_cLES2o6FN5WpR3mJk7yTasHevbPTYsj_g1Xg
                        https://remnote-user-data.s3.amazonaws.com/heLNB570ALmFzaj2X6ZBobo_rKUsxvNmfEDzrbD6U5GFPviSHIw9PjzzdsI0dSsxsq1YUPJ8XI6iiOjsyhNqgvcsPpfhECrwJLoHAbSluNfUy6gDt3Vo-o1ibt8ZBrzf  
                    Full Adder
                        carry bit is required for all digits except rightmost one
                        https://remnote-user-data.s3.amazonaws.com/IpCSCYIX-VcMNuVz-3RbyEO1dBTN3s03Ew30ceLVc3RT-Vx58alNLEgnzP1B-dahq_gAR1jwOS_qMVQLYBKAz3Lvx-fS-g0HkKcL6vwBIT7pCEazynUmQfeAZc-BvqWH  
                        explain the following diagramhttps://remnote-user-data.s3.amazonaws.com/3Yf4yBABBeyZbLf8ECbwVnWEdaPANNkwYFs88rEj7RyWm5VlvOOMeXvVLBCl_6ZrMDkXnmQIaerYjqbevXWRfsyyl8poa1d3EUyDd7RbRt3UqSdPnznRwO02ue0YlPVO→the outputted carry bit for each adder is inputted in the next adder. Except for the leftmost one, where it is wired to the error bit (if we have to carry past the leftmost, something's wrong and it won't fit)
                    Decoder
                        purpose→selects the right one of many outputs that corresponds to the input
                        Reverse of a Multiplexor  
                        Basic Decoderhttps://remnote-user-data.s3.amazonaws.com/3KeGHJgPjk801H9EXFYley_3dRvoutrBVMtTSSyPFJF4_KGWdpUN-sPMXNQrWOSD2WsAoVbY9gNskCklZqVWMoI1lGGvD_hh0b0pLo6gG7xur6h2BbzyxnHKtSyDg3eA  
                        Decoder for 4 output valueshttps://remnote-user-data.s3.amazonaws.com/4y85-Hltl8u_kXTfbqRgkrBDXkcq1XulRFQDqgh7mGZxksr1x6xBd6w_MvESrVx6c1Qpro1w7_-a4C1yGIkoGWG55joa7fYsRRVezzTABM6Ms3gOPVVwiQMwwScKsfSl https://remnote-user-data.s3.amazonaws.com/HXHqIj6qkN76YlI2OmVNELHSLoe-d_OJpFJyfDYlOBsWXirQpjAtVGqxpOieTlPXGctqeUFMog7T3Xl30WrD3QJWHVa4IlH1zkFIuGD63uPH9qrRytCRNGEz89wOgUP6 https://remnote-user-data.s3.amazonaws.com/Pbtr275E2CYk_5BQ3vL_rAc1FT42zZ9VcMcRr-XhL30vmHQrvqQPRP9wwgUJT9qW4Qi2lDZHyGCYbUMFZbeXD9BSXX9tU6pbkPCyDRadRE0wpufXrDI9O5eaxV3MYbXY  
                    Multiplexor
                        purpose→selects the right output that corresponds to the many inputs. Often, one value of the inputs determines which input to select as output
                        Reverse of a Decoder  , used in the The Arithmetic/Logic unit (ALU)  
                        Basic Multiplexorhttps://remnote-user-data.s3.amazonaws.com/thyTm1evBoxmDknkrRSx-yrXiPzneRk-oE5jDC-UxBmJmWV0FlgYT0SJXgoKnw2VM1w6YPz5L4QlkTNtAjUwtUPFOnbZrYPnBSkfqzTJ9a9Tjdak_3IYqt2NApGhzlUo  
                        Using a Decoder to build a Multiplexor  https://remnote-user-data.s3.amazonaws.com/TnJW1Xy36NVxUa4l4sJUOQl92BygXCQ3OyX8c8WiGT3I_Wvx8_w5lj75XTrBkWLTFtnrjH5nJt077TcdPbtaGUYBMKxgBa2oBuJnQu7AQPYzA1_rVMtFNvpZIsNdzvxG
                    Combinational Circuits↔Output depends only on input, not history of input. Also known as feedforward.
                    Sequential circuits↔have path of wires that feeds output back into input.   Also known as feedback.
                Lecture 17: Sequential Circuits, Storing Values
                    Sequential circuits 
                        NAND latch
                            https://remnote-user-data.s3.amazonaws.com/282yp_Svc5XnF2D0S3m0e0WULfhRpPt1B4rp1NtQPMO41wJnFNpFT_f5_1DT2ac56ABjIRPIXnAoI60sRwf-Ko7YkGh8xcpNDOhF_tPPEq6itNcMHDks49Dhm1VeSUV3  
                            notice the properties of this truth table→https://remnote-user-data.s3.amazonaws.com/S7L0lS2j1-_9s34SQhSrweu45loOFxAlO-0BRh-4EOm_9lUQ4Gu6axpFvUPDi_UZeuGcU4N1jQwx76rcHfLOQC-cmFhl7DDWKX-Au30qfraNEoBQqDK7arrYRGdImQJf
                                Let's create a new sub-goal from this table: design a circuit so that we always have q=u'
                                    We need to remove the row where x,y=0, which would give us the followinghttps://remnote-user-data.s3.amazonaws.com/8vWaVRpvJh6w49oeKpwxA-DaCbjX_Cnv0KMOpc6DQvQ5HbQlssD33gSK9uHm__DTG5u-OKZdoLG6-j3szOoPan3mwmJtGJBQcmpA7D2f2ctq3DqSjXz9KqfA8zjgto1b  
                                        note that when x,y=1, there are two equally stable outputs: q=0 and q=1
                                        once the system enters a state where x,y=1, the value of q will stay as the value before and become stable  . This is the key to designing a circuit with memory  
                                    We design the following circuit to never allow x,y = 0https://remnote-user-data.s3.amazonaws.com/ZKpuKVc78x7cmg3_Syr57pMjrqJEDQhQTVLh7qK7iDJogD1ff737y7Rm4IuYHtEe3IaBYc7dYIB9BdypHo1G_EgxYttFYYzHZObKTT1YwsQiGndLwOl483XFGl9O3DSH  https://remnote-user-data.s3.amazonaws.com/xBhqxiR9TJZi_NT2UMA1NwI2fKdTu8gD_APhhQ1Jg6in4jk6HAXFoxSBgRNxwU5IryJSF9CDME38DW1RXn9xuSFYn2J9egChoxYboD5J8i1A572Imat0w8ACl9NM3JId
                                        Data Bit (d)→the input, which we wish to store
                                        Set Value (s)→if the circuit will allow a new value to be stored or not
                                        One-bit→we simplify this with the following diagramhttps://remnote-user-data.s3.amazonaws.com/dcF1B8U3JaDqDUZc7ffs_gFuL2xB-kQDMbfV8xevjOYQM29jykyYAIi-D93p7SDLyPH0E20M1M-dyL2LD_stLLfGjkdiraoAKrTbn-fJodT82Jhm-OVFLIyI-rj-kbOI
                        Garden of Eden
                            https://remnote-user-data.s3.amazonaws.com/ypocuaflnG69_Y_Qzg15zFasEmWhctHbglTmX8kit9WpGs3jbx6OWsfyOOTt6_lfqOFCnTe73wnbpOBejic53Y6Hdhmx62umPelG5XR8TOoQOx1soE8KBweA_huBKaiU  z = x OR z
                                Called "Garden of Eden" because once we leave it, we cannot re-enter it
                        Infinite Loop
                            https://remnote-user-data.s3.amazonaws.com/vSDn5O-K4_va9ks5BSZp-3kyl9Xr05TfQmHnb54OqC4nIjD55tbEYx8-pcdC_oxQ3oiDWDZzcQcP5EBRBGHvgQ02gATorJjLwR3wq6tTaJBbL3x17s7Q-d_9IWAZpOSW
                                times the interval of one gate delay
                    Memory Register (aka register)↔A register consists of N One-bit memory circuits that all share the same Set Value (s)  
                        https://remnote-user-data.s3.amazonaws.com/IwuNbBtcnfRwjcneTqnSsKIrnZ74UKKMhm-VebEQIJVLcfnP6Fg_dJbVAa8QOqbCHkrlptqO08JJrwKCy49VE_PDsCJj5ckh_-hyLdJo31NIL0VHWOH0tSDjrXX5qRRq  
                        https://remnote-user-data.s3.amazonaws.com/1eV-kaUPhE4WjXTUhEJbjnAl06ZcnqxZf2lJCr4Nhis2fcGF5kYhLLZGmf7dVE6RTnh-faMBq5d2XpVuk9POV5_FWlMDEMC21yHgOaZMYquY_ke7B633oMdQ_9YVVhdX
                            we put ANDs under each of these memory registers. We will be ANDing with 0's for all registers except for one, which is our desired register.
                        putting it all togetherhttps://remnote-user-data.s3.amazonaws.com/hXDWCIiE8jautcO6uYZ21qalvsKNpDv92jezH7eCe0hTwPxX1nm0UklkCDGsMKvPcuz_RHOzE9F1ubBmXBBk6FTBvyyyxBk2wp65GPbHO1jogsm4r4Qg9Mdnz18SO8BP
                            The Memory Address Register (MAR)  in this example holds 2 bits to represent all four possible addresses, feeding it to the decoder.
                            The decoder sends out a yes to one of the four streams to the memory registers  
                            For each register, the output of the decoder is AND'd with each bit of each Memory Register (aka register), and the output of these ANDs are OR'd  
                        https://remnote-user-data.s3.amazonaws.com/hxE6CV1rZqTaHgKEXNbPKEG1Vyk7LHHVrke-4cbKkLkJ3a7jiqH4d_B1MFDdssdeMC5hxIsfCWG9IBmb_hEFGCQpwN_gqJnsFn2ZCeLRNRLq9BPJNN20iiUvWU9PirUC  explain the following diagram step by step→https://remnote-user-data.s3.amazonaws.com/VrcQmvBmVLDb10U2TLWLEuOuU0bVFVY6FdtIHoCGoZ2ofuLLfVarbBbsu8KhO6zEDGj0g9mir1o7RhuWiL6JKEbzc0g1_V8gVwruaHrxnLdkUX3-lFflvHfIQwBH481d  https://remnote-user-data.s3.amazonaws.com/YU0OEXe4RdLVAsG_xGI79r0IMK9oyFEYLzPypxdRoTACqFBGX2CMAE1WBKW82Nibmmsz3smwe9wfkPUElcrnpiGq1rLrYjE-8ZiGQ3YL0Wh2mvs_gw29vPRZ4U-bxk3BMAR matches the corresponding memory register. Each left-most bit is ANDed with the corresponding stream, and the result of all of these are OR'd together to create the left-most bit in the result
                        If Memory Register (aka register) has M bits, how many bits should the Memory Data Register (MDR) have?→M bits
                    
                Lecture 18: Von Neuman Machines
                    Von Neuman Machines
                        The distinguishing trait was that instructions are stored with data. There is no real difference with data and instructions.
                        It was revolutionary that the Program was stored in computer memory. Program is stored in the same area as data
                        diagram→https://remnote-user-data.s3.amazonaws.com/G_WM9V-pbPs41L5gsS7ryLn6lIcvlrRF_vg2S2QKhJOc_tvSAMVQCY7ZLmCiwkepceK0QoU3BbHnUivntVpzQUWxLyk3jJt626SXNb0UtaatOqkNyZDf5Qo1tjQN2BZt
                        parts
                            Memory Unit↔https://remnote-user-data.s3.amazonaws.com/008wl1Jdmce80Zl6Hogd81FdnoFgJm5qy3CxrSMrVBFKAXQ1BYXJMekU7gKRCM7vN3W8x9UNQkpjqi_bevHMh4lYLBgxTyW5TOiBAWrrGV_qVNvcrbIKYgC1rbBQ9M5vhttps://remnote-user-data.s3.amazonaws.com/naoiSxTHgqDbcfcd6EuXfhZtA3H-lth-CMTO_WVr5Yh5hf_cV-NmbhvWhdRHfm9UZt9TAhdyNOx3PwbfTcy2XHxZxhPydVYxwpiBZjRD6NMttvsqY5WbWzS2zKm1bPjI
                                Structure of Random Access Memory↔https://remnote-user-data.s3.amazonaws.com/CGLWZuC6cATz5e1d6OFQKDj-XCyatNUchyIk-vM6dQfiHWmttafVouPgYgOSUasGfxHcZj-t5-v02MCw565UXK4KRiTm9gYsQKtqw3e_yhGpgsHoLIH-bjl2l30SQALg
                                    height is equal to 2^(length of MAR)  
                                    width is equal to length of MDR or a factor of the length of  MDR   
                                We can address locations in equal amounts of time. The time it takes to access location 10000 is equal to accessing location 0. This is called Random Access Memory 
                                How many memory registers can we address with N bits?→2^N
                                Parts of the memory subsystem
                                    Memory Address Register (MAR)↔Holds Address
                                    Memory Data Register (MDR)↔Holds Value
                                    Fetch/store controller↔Stores and retrieves values from memory
                                        Fetch process
                                            Desired address is moved to MAR.
                                            Controller signals a fetch.
                                            The memory location is accessed at the location specified in MAR.
                                            This value flows into the MDR  
                                        Store process↓
                                            Desired address is moved to MAR.
                                            New value is placed in MDR.
                                            Controller signals a store.
                                            The MDR's value is copied into the desired location
                                Memory cells with decoder(s) to select individual cells
                            Input/Output and Mass Storage↔Human interfaces, archival storage, external devices
                            The Arithmetic/Logic unit (ALU)↔Where actual computations are performed. Primitive operation circuits (ADD, CE, AND) here
                                ALU Process
                                    Values for operations copied into ALU's input register locations
                                    All circuits compute results
                                    Multiplexor selects the desired result Multiplexor  
                                    Result copied to desired result registers  
                                    https://remnote-user-data.s3.amazonaws.com/6Q1rmqjSsBwmZD9YeTG07KJwnjuTR5G0F8234xxr3lEl6fGzVGuht7tfNA0PuDKBD36H68QMD0e2w1mZYDf5ayRWOkLlSyzHP2K7YHaCFHwhKPPDv8iZd1IxQsKHx64m  
                            Control Unit↔Manages stored program execution
                                Fetch Execute Cycle
                                    Fetch from memory the next instruction to be executed specified by the program counter    Fetch Cycle (Take the PC and Use MAR to fetch MDR, Place in IR)  
                                    Decode it. Understand what the next instruction is asking for. 
                                    Execute it. Issue the appropriate commands to ALU, memory, and I/O controllers Execute Cycle (Decode the IR given IR)
                                Parts of a Control Unit
                                    Links to other subsystems
                                    Instruction decoder circuit
                                    Instruction register (IR)↔stores code for current instruction
                                    Program counter (PC)↔Stores memory address of the next instruction to be executed
                                        Memory Address Register (MAR) vs. Program counter (PC)→Memory Address Register (MAR)  holds current instruction, Program counter (PC) holds next instruction #[[Program counter (PC)]] 
                                    https://remnote-user-data.s3.amazonaws.com/PmZL4xou79ttsiQZvT2teASIc8T6kRET3g2RuQnVuoKX-_Ry99oWAXbh3aUxQsW4SpRhn6LYAOtB7NZ0J25YY9-Djr5FPGHQj7SudIo6Acb9fL33e15MQOIeqO-v3AFw
                                Assembly Language↔Human readable syntax
                                    Machine Language↔Assembly Language encoded in 0's and 1's
                                        Parts of Instruction
                                            Opcode (operation code)↔Unique unsigned-integer code assigned to each machine language operation. In TC201, first 4 (highest order) bits.
                                            Operand (address field)↔In TC201, next 12 (lowest order) bits
                                            4 + 12 as Opcode (operation code) (4 bits) + Operand (address field) (12 bits)
                                            Typical instruction example https://remnote-user-data.s3.amazonaws.com/CcI3LeRdpvrtApgPQP6HsvELGGQdIXsT7_W76HmEtLFjk9a2xtY6-Cmd4ERjZz7PUDnYZ4L6IKK4xx5UX2FI0gkh_NVNkGwRGdrUq_bLBBdDdNsR3Vuqx1Bu1pHjZSjx
                    TC201
                        vs. Von Neuman https://remnote-user-data.s3.amazonaws.com/7FzvDWh6LF6FvKps2OP2Y2LRAfkEfTA0aMEHh9EIeLVMOJLifz4g5bxpxis3rQ_7-BiWQTdCHOZ7n_y7wylD8qEyid8wE4--AOWKwY8wpU-Mg_R61_dgYse6R-NL7zUw→https://remnote-user-data.s3.amazonaws.com/PqzuSkFCbeoixZ7q6pGvs3FLGTMkOzSyVwuemHceBB7SPRymYthfalBcFWL0Crx1H0gkICrrqooDd5NITqDrqivbS1G5y4SrkTzYCBu5AJ9XmLF1al5BJwFNVC-BpQ2P
                Lectures 19: Commands, Fetch/Execute Cycle
                    Fetch/Execute Cycle
                        Occurs in the Control Unit but modifies the Memory Unit too
                        Fetch Cycle (Take the PC and Use MAR to fetch MDR, Place in IR)→Takes in PC, Modifies Control Unit and Memory Unit #[[Fetch Cycle (Take the PC and Use MAR to fetch MDR, Place in IR)]] 
                        Execute Cycle (Decode the IR given IR)→Takes in IR, Modifies Memory Unit #[[Execute Cycle (Decode the IR given IR)]] 
                        Fetch Cycle (Take the PC and Use MAR to fetch MDR, Place in IR)
                            Set Memory Address Register (MAR) to the same value as the Program counter (PC) . This is because the definition of a Program counter (PC) is the address of next instruction.
                            Memory Data Register (MDR) is set to contents at address of Memory Address Register (MAR)  
                            Program counter (PC) incremented by 1 (at same time as step 2 because this takes place at a different location in the Control Unit)
                            Instruction register (IR) set to contents of Memory Data Register (MDR) 
                        Execute Cycle (Decode the IR given IR)
                            Memory Address Register (MAR)  set to address in the instruction (last 12 bits of instruction)
                            MDR set to contents of address in MAR
                            LOAD op code indicates MDR should be copied into ACC, ADD op code adds contents of MDR to ACC and leaves it in ACC, etc.
                            Fetch new instruction by setting MAR to PC value
                    Commands
                        INPUT address↔Prompt for input, number is stored into the address specified
                        OUTPUT address↔Outputs the number that is stored in the address
                        LOAD address↔Places val at address into the accumulator
                        STORE address↔Copies the value in the accumulator into the location
                        JUMP↔Jumps counter to skip over some steps (such as a halt step)
                            https://remnote-user-data.s3.amazonaws.com/E0Y-iDD_RuyGwpMqxgzOrQCISX1c7rHKfVyTZlu7Et7ROmf5ihtUOWrGH2TRGbWwZISmqNxnDL23A9fDVW3lLcnHgeAQnvszdlaxAUbUO5rzlYLJSDAzz-S6PIp-Venk  
                        ADD val↔Add val into accumlator
                            incremental approach
                            https://remnote-user-data.s3.amazonaws.com/jYyRiUiJyyqmlfrs3qtYVXGz7Qa7AYAZeDuhwEdfrtEPkMLrdxglS_8CXICJyx69I0Gmcm-IdWosFDtHA1KvPGkjv2k9WSK9KEodg-BeDCoeb6nZ6k6kmrpyZqnMe6_8
                                Note we load 1 at address 109 into ACC first
                                Then we add the contents of ACC, 1, to the address 5 to add to the "store 110" to get "store 111"
                                We store this result to overwrite command at address 5
                                
                        SKIPZERO↔Skips if accumulator is zero
                        Indirect addressing
                            Go to address, and in that address find another address that contains where you should store the data
                            LOADI pointer↔Use value at pointer as the address to read to place into the ACC
                            STOREI pointer↔Stores value from accumulator at command line # equal to value at pointer
                    Procedureshttps://remnote-user-data.s3.amazonaws.com/GEQlHSnCHmHLHbhHdJs19ajcPc0XZgkHKT3On36NcRhCuXFAStlMSNIwiAJ9dmmsomETDtKpc7V63hkHqYySoGpn4xI-NVaGtI0PYX74BFdAtqshS89SYgJmTO2Rzk7q
                Lecture 19: Von Neuman Machines Continued, Fetch/Execute Cycle
                    Program
                        Line
                            Label↔Tags that give a name to certain address numbers
                                Must end in a  colon:   
                Lecture 20
                    Sign Magnitude↔-1, 1, then number
                    Maximum value of TC-201 machine↔2^15 - 1. Because there are 15 slots with the highest being 2^14. So if all 15 slots are 1, this is equal to 2^15-1
                    Ones Complement↔Flip the bits of positive P to represent -P
                        causes incompatibility with  addition  operation 
                        10001111↔113
                        01110001↔-112
                        https://remnote-user-data.s3.amazonaws.com/S53JRkrhHCHHQ0xLblG27UiIDbCgJ0NuE7sByKoNJJQJLEN6yh75940NHXyqcCDOLKS-nYAys4E7cZfHassjqNSncq7C-9oK0xhOU491gXR3IOiX3l94xP4l-WJ5OlcY
                    Twos Complement↔Flip all bits, then add 1. Addition to work if - P = 2 ^ N - P
                        This works because complementing its bits is equivalent to subtracting it from 15, and then adding 1 gives the result of subtracting it from 16
                        Twos Complement is its own inverse (except for some edge cases)
                        Twos Complement works because - P = 2^N-1  
                        Error if the carry bit for the two rightmost columns are different
                            https://remnote-user-data.s3.amazonaws.com/TkuJKjFyNFDx7hc788yO0wKanhYZYKayIHQTa0p4x5w6-Pm7HiiSQZjcz3sMQ4SYLH9il7g9qG0AzrwZz7bzD8hhZfxIQvXgt2oLOeIRZR1WSrkw89pZgRm7bK3IySOmhttps://remnote-user-data.s3.amazonaws.com/nz6k_3Yoyln-BDBjyp6XDFW2cTgUCcXiki7uzFFUYIT7RC3XNlUSTID5PAH6bE-PoSaoELWgMUvbj6TZHjoFWn2ln-et0IhAVLjTqWQkYW5xkYAkCJCdwLzEL1SbZ8Sy  https://remnote-user-data.s3.amazonaws.com/hUWeX9fhmusPSae7csn5aAVROvdzECnGd6O0w1xJDGy_ZskCinwNlbLBoZezfHQf2nLUjqxv3sp5XJSUjpZ6t0uBmGmUMSSIUmTkwQHfmDtC5s_039lnpQtb9niuccKi
                        The main difference between 1′ s complement and 2′ s complement is that 1′ s complement has two representations of 0 (zero) – 00000000, which is positive zero (+0) and 11111111, which is negative zero (-0); whereas in 2′ s complement, there is only one representation for zero – 00000000 (+0) because if we add 1 to 11111111 (-1), we get 00000000 (+0) which is the same as positive zero. This is the reason why 2′ s complement is generally used.
                        Another difference is that while adding numbers using 1′ s complement, we first do binary addition, then add in an end-around carry value. But, 2′ s complement has only one value for zero, and doesn’t require carry values.
                    If the first number is 0, then we do not need to unconvert
                    Error if↔Carry bits for the two left most columns differ. Left most column overflow does not mean error
                Lecture 21
                    Arrays↔Pointer to zero index, Length, then array
                        https://remnote-user-data.s3.amazonaws.com/l8DMo6HP5daEYtgMNktNQrmY7EBxAM253AJLvE0fyvTu4yFJSWWdqQuGWANVODEnugxkECLB6NobX0U0w96YjlVjs0MQ_oZtfh6Tv6sZyVKCusC-SSM-1ceUP8YAqJaJ
                    Load, modify, store, repeat
                Midterm Practice
                    Sample Von Neuman Machine
                        start: input x
                        input y
                        load x
                        sub y
                        skippos
                        jump ygreater
                        jump xgreater
                        ygreater: load x
                        skippos
                        xgreater:
                        loop:
                        data x 0
                        data y 0
                        skippos
                Lecture 22
                    Arrays
                        Representing an array
                            Pointer to the first cell
                            Length
                            Start contents
                        Practice Array Access
                            https://remnote-user-data.s3.amazonaws.com/6yi-9TTWVdHfV2iN1dl3UIvKPEKGsBuiBqIEAuTmZR7eR2DZU0ZwpNFOrgaC_tqY4t-oTvGAfbDXi7USljszO1Yav6ehCGFP7G6IVZPLcEW_H-olmSXYSZimplCTDDcu
                    Lists
                        Representing a list
                            Start the list with two memory locations: one indicating that this is a pointer, the second giving the address of the first cell
                            Cons Cells
                                Requires  4  continuous memory locations:  2  for the left hand and  2  for the right hand box (Pair of memory locations)
                                Left hand and right hand (Pairs of 2)
                                    First address contains code:
                                        0: Box is data
                                        1: Box is pointer
                                        -1: This is the empty list
                                    Second address contains data, pointer, or is irrelevant
                        Sample List (Notice the first x0 and x1 is a pointer to the start of the list)
                            x0: 110:     1
                            x1: 111:   304
                            ...
                            220:     0
                            221:     3
                            222:     1
                            223:   244
                            ...
                            244:     0
                            245:    22
                            246: -1
                            247: -1
                            ...
                            304:     0
                            305:     6
                            306:     1
                            307:   220
                        First and Rest implementations
                            first implementation→jump to location indicated by x1 pointer, add 1
                            rest implementation→jump to location indicated by x1 pointer, then add 3
                            https://remnote-user-data.s3.amazonaws.com/GN0cPK7N_9-ukz71hCVE-ym4vPxev-t7izdWyrHXiyK81VgYPkrT7iZwQIIEQSy3lz_fYtDkcDvE2YLYaP4lOmLqHGoMaYahm3Ymg_75YaOQx8jO6uKDuOCrBC5wJEII
                            https://remnote-user-data.s3.amazonaws.com/YJP7Q2grm64rANEnbMrzFSu1LqzQmy6iMml-v3cwSJoBIxbI_a1yvCvatQXOHfUepnl80WtTpTo1VId1QDe4JMRvEbY7ODYbVw7JUPZVgEx9ShWZqBfHd5JQLoNcthCi
                            https://remnote-user-data.s3.amazonaws.com/ZtTJkxkJhhmmwGouBhmy6XBVHtuaGLlc47e9sx_kwdmiR8H-1puDc02LUVgf7RQugTJ1xNdcPc_bQwjHkIopGQAsoPFM2mGhD8QDT7wCUDkwVXlpSNBQ_SptEcW5YCdr
                Lecture 23
                    Object↔a bundle of data
                        methods→operate on an Object and are bundled with it
                        templates→patterns for defining Objects
                    https://remnote-user-data.s3.amazonaws.com/9Tbg5Zgea70blVw0U3eIdqUyg3b-2HzlOW_6bcUTd64oNa4vuTg-IFWcx9O43fA5Ud1QXSHmLPgR2qlVI4Xru3xsqi536HWtg8gKfVuFNwjIjOp10ikQr80URnOH2Vzi
                    New commands
                        case: syntactic sugar for cond
                        (command . args)
                            args will store all additional args as a list
                            https://remnote-user-data.s3.amazonaws.com/ePzS_QxxMHCxe9KBohj7--K0ecVcKRZt4hfkIOiRuVE8b8HYzqUy09deW1c85Pi-iaWG8rXEVWqY3FeLR-_ZXsCuOhZO-IAUQtVjhwIpsKXDAqIfwD9Kiib1j2aDsr-5
                        pass by value vs. reference
                            https://remnote-user-data.s3.amazonaws.com/pK9rFaOTInFhrKnM30UsTBpob5vHuizmmPvfxUclbVJKAgGXoV5IlOg0_QkmiXPKPbgWl5jK47p5a41FLTPBx7VdpJQopmJgx4fHrKruN_CqN4_vofv2pLwVCYRaPbQZ  
                        set!
                            on lists: changes address
                            https://remnote-user-data.s3.amazonaws.com/HqhI5GU49Zj8SNUwdzAH0-DxB5GD7XDWEFprZ6i3Or8sW0GEMjXECCy_v3ZGO-D1gDXhkJz4n_3lVURswbf5ShCzmU-p2E_UUhtnOFKkyjj7OgeFMbuRqElpERoC4MKb  
                        we can call multiple commands in a single line https://remnote-user-data.s3.amazonaws.com/GOXrxLWXjNRpbAQ1smemcjLlipz7H_PEAtlCQsiZStfRJtMKLQ49moVPBN7tTn2wDPRXD9b9v3xzpeWLUeKCp2A2NAnt4S2Q5DUkJQGWajocyCsOXoVJzoD1yBpoawS8  
                Lecture 24
                    Top level environment↔Persistent
                        define modifies the persistent top level environment
                            https://remnote-user-data.s3.amazonaws.com/c_e_Y0WyPROOi2BAdeAEpLIXJ7EUWxSdN9Ty435V0jatqGXHwe3gaeDx4aJbnSMeN71BwlBscUuoH6iCcNH0BKYtXs7IRbfst_YM74BmAFodg1P4mU_Io2Sd2-YbiZyM  
                        set also modifies the persistent top level environment
                            https://remnote-user-data.s3.amazonaws.com/IWGxG4m7aiYEOK1RSdB6_nhfz2pBurLCUGWb6MnSxDtMN8X_HqT2YDe1g7KBrMdtmtXPMTaiHQhYpfh7JJtUDA8wfFUlTQT38lV5Dtse8fGaIiobRPKOaBlGHR7piRLx
                        running procedures does not modify the top level environment
                            https://remnote-user-data.s3.amazonaws.com/sbaWGPIxC2pvNys6mGhveyWYuQ0FBgc7SXefBWuR4oDLTwh27T180_-HN_-kisD-L41wueqEJBKo5lGDMcdxGo6UvIFBAfCsTR-d3ORJR13EbNzoMnCmyZ2LZJATgxxz
                        environment after calling (define counter1 (make-counter 0)) and (counter1 'increment)
                            https://remnote-user-data.s3.amazonaws.com/8L79hzz1pLCQ03pOByaCxD739K_EtfecEQgKKtBsKlc6E4jPiwtPDTu93kAQPh_Ve6wjs-RnpKx4PlMCUc7gUzjP0lGroHM-GsscaHVgf1lTIvsHmsIw0t-8-Wax5Xho
                    Stack implementation
                        https://remnote-user-data.s3.amazonaws.com/vkxtDCBukQPNIRQ7YYRmGztdS_oEgYh9Ms4oA247ZuZrla3HE1PBfML_PG2hPy_G-EcvEyX4Wi89MlrXsRZmSBc8ATVlaXcZxm4QGWbTfEbnWHnFncdpZT6HvvzEcEyG
                Lecture 25
                    https://remnote-user-data.s3.amazonaws.com/j5kQWXePMSRTdH9wePZaz3pl5ZCHF3jkQhKIHKbSa1Rm6BL32_0soZKkZLB6g5OwogDpUVYCOjiSOaNep8Jq-IuH8_lrNC_7Q0UQ9jE1MiA6C0klYSMcqlkFhHpvx21M  
                    How to represent queues↔https://remnote-user-data.s3.amazonaws.com/XcrbOXRXb-7zsMXXfyZ_oeJWedKppl6DDNG3KXFBlw73zg7pgtXCW2dsOymNj4R0-htSYV5u6bExmtvdYTiP3sbGbgm99ePZA73FT9GbTk_do3fFwl08GzEqXTRab76S
                    eq? vs. equal?→eq compares address, while equal compares value
                    https://remnote-user-data.s3.amazonaws.com/JCWcHCLZqtrt-PN6l4fjYlzfO3VzSGbYQlXae7KptmRglXmfu7-uXZinyLNFF31Txx7yCyvCp4jkYoRWIJg43O3m8C8z33cX5SDCwwDS--6n6ffZRVlMThfl91MqihHr
                    https://remnote-user-data.s3.amazonaws.com/km4n8iAL2u-8cYbm6abnMtm9cJqEwnLl3hYD8MC98zZQnvP4ATXyRaHPVrJ_-QUvH4t_mbALY17loRMls5rsHISXanAMNXz6TNuvGogDg5oBxsQqaWqe7pE25_BiCN_h
                    Car and Cdr
                        car represents the first half of a cons cell
                        cdr represents the second half of a cons cell
                        set-car! sets the first half of a cons cell
                        set-cdr! sets the second half of a cons cell
                            set-cdr! a creates a in the second half of the cons cell, but set-cdr! '(a) creates a pointer to that list in the cons cell
                            cdr is often a pointer of the first element of a list
                    cdr is a pointer which points to another car (consult notebook)
                Lecture 28
                    How do we define a programming language? Acceptable combinations of strings
                    Strings↔finite sequence of characters chosen from finite alphabet
                        Sets of strings we can automatically reduce to machine code
                        Concatenation operator↔.
                        Empty string↔Epsiilon
                    Language↔A set of strings
                        L(a)={a} consists of the set ofa
                        L(E1 | E2) = L(E1) U L(E2)
                        L(E1*E2) = L(E1)*L(E2)
                        L((E1)*) = L(l(E1))*
                        (L)* = {} U L U L*L U L*L*L...
                    Regular Expressions
                        Inductive Definition
                            https://remnote-user-data.s3.amazonaws.com/MEoBguiBjVfYfQA1WevNFG0_0j7kGddm1Kk4FbKhz4oEDLAlaKT7Q66FpKH6VwbRcEr13haZT4CWkwjS3Uqd5HlJhrRxmsBw9_7CA4Jb4bmfg-NHKEkKdobm6eW6K4L0
                        Kleene star↔Concatenation of an arbitrary number of strings in the set E1, including the empty string
                            a*→null, a, aa, aaa, etc.
                            (a|b)*↔null, a, b, baa, abb, etc.
                            (a|b)*bbb↔bbb, abbb, bbbb, baabbb, abbbbb, etc. (concat result from (a|b)*)
                        example→all car/cad combinations
                            https://remnote-user-data.s3.amazonaws.com/TcVbgrzGNY8VFZ75tcDdwfPYcYjwTRkXe9ClI1keld2cIhimqGmvG2PjMITUmDWkCh-tUlupkaYp9fgkqUqQ4Wx1yGmfn6DC6sSsxghepo7BsPamSzwz9DXAeP8nvg2a
                Lecture 29
                    Deterministic Finite Acceptors (DFA)
                        Starts with state 1, has accepting states. String is in language if end state is an accepting state  
                        https://remnote-user-data.s3.amazonaws.com/nrYHWvdx4IR2MVf-Oz0V56iYbvo3O8pb5isPUDVf2cVVm2fnrbOTvu0SGANK7bcTIHOVu7j-mLkfgxsFK-ZubBCmsXApGTGaibXr9XnH_tUgmjNxbS0S9oMokvHyLanS  https://remnote-user-data.s3.amazonaws.com/fo9jspD0EAmmjEDzIs-Q5rWFaBgKFF3S-tUbXFvwvyHKliuHT2YBXIdNl-2s5VVW60w4J94DNLfAJJ1JDlHP66xvJRBQ0lQvAO5-GT2aqiXWeKInq0XeBtG25vbZWyZU https://remnote-user-data.s3.amazonaws.com/af9BZ23ngUhA2kW8uMknX9iOOZGQWRl8QLV6VybmKP2p_Ee3jByf3ND0OCxBl-0zm7onNi4VAx_2cObDozPytbcNrtW6uhpsh_-HA6_wR2Ex4GdFNgK6Mm93v2tonvA1  
                        https://remnote-user-data.s3.amazonaws.com/6VdMF5sknuu7oMxtc_A7QX5UmbzxTsRY7P4_SU3yAzL6OUwVHJgeLhC-vFsY-5LBIKIy9Zs4tkySZYKAewJrydHjka5r0IiRQj38xBrD-CbVj-zX7pN8dx1zSveNvqvn  
                        https://remnote-user-data.s3.amazonaws.com/af9BZ23ngUhA2kW8uMknX9iOOZGQWRl8QLV6VybmKP2p_Ee3jByf3ND0OCxBl-0zm7onNi4VAx_2cObDozPytbcNrtW6uhpsh_-HA6_wR2Ex4GdFNgK6Mm93v2tonvA1  
                    Regular
                        A set of strings is regular if it can be defined by a regular expression
                        A set of strings is regular if and only if it can be represented by a deterministic finite acceptor
                    DFA Example: CAR and CDR
                        https://remnote-user-data.s3.amazonaws.com/bBwOT0LfGuq_uuKUQdnyS5DLDluaqX-SY4-Nqq5YjONmN8FPF2eUCoWn_HZQYR9i1BParaa-otNugxDjVkBrayCw2WydYt8m31y7KkRUTFntBT0JgmxRCs4bxQcEwy2_  https://remnote-user-data.s3.amazonaws.com/KcRUSgAuEXYbPzPaT-Akci_JMVUY-YsIc77iVgpTmtSHI6hqNIlGkn3opQTitW0o4C3fO_nBifO59cMSlHmfsSQG5zAHBhyGjoEG1bwXV_CB3OEFopNzrgn5t5ne69bP  
                    Search in file UNIX
                        GREP
                            https://remnote-user-data.s3.amazonaws.com/HiAQUJLsurYHvtNMal3U49zVEg7WZc2V8MKWZcOJ8IUhz1vt6mXW_BcGFoCUMsVdk-gxB4Ifm1FP80-_3MxflX34z6D8DFh7raaVHbbs85uS05eR89f2b3zWAaEPsVQH  
                    Palindromes cannot be represented by a DFA and Regex because of lack of expressive power and to "mark" progress on tape like Turing machine
                Lecture 30
                    https://remnote-user-data.s3.amazonaws.com/asxKRK_do3JX82xCLPKt9kXsB6fbRQ98mkGvGQp4aQuyGl6-EhNRMRlyCdO0IJhVd9xA3ZO8WGUzPhFhjPzxi50ThGoLCrfU3FXbltFyOFZjKTASLVAWozvm6A9dhPKB  
                    Palindromes cannot be expressed through DFA
                        https://remnote-user-data.s3.amazonaws.com/zBVh5SaVt3ib1guY6EZQH8YpGUBJ5ZdHG43GEySg-lk4WYJnSUZBbckn88ApiFL7cCtpM8libFht2jBhu-PypzUFO1C0BDjSs7y9dB6LuM907G7WKhsaWgrDkBwmv8Sr  
                    Context Free Grammars
                        Form
                            Two finite alphabets
                                Terminal alphabet T
                                Nonterminal alphabet N
                            Starting symbol from N
                            Finite set of rules, each of form X-> Y
                                X is a single nonterminal symbol
                                Y is a string of terminal and nonterminal symbols
                        Example Grammar for Palindrome
                            T = {a, b}
                            N = {S}
                            Starting symbol is S
                            Finite set of rules
                                S-> empty
                                S-> a
                                S-> b
                                S-> aSa
                                S-> bSb
                        S produces aSa, produces abba↔Shttps://remnote-user-data.s3.amazonaws.com/jW6kRbFaNvcdaZtHNOKHkVzkrYxv2ZowP5fYeiP3lDYs7ZGw6leYMI2jmRYbj0OL7UtXY2-sjYK0kcPK6jWXzvA0TwDs4dHjsOXJCa6ZWcIQ8x6yDUuqdqV3-WPCksqz aSahttps://remnote-user-data.s3.amazonaws.com/jW6kRbFaNvcdaZtHNOKHkVzkrYxv2ZowP5fYeiP3lDYs7ZGw6leYMI2jmRYbj0OL7UtXY2-sjYK0kcPK6jWXzvA0TwDs4dHjsOXJCa6ZWcIQ8x6yDUuqdqV3-WPCksqz  abb
                        Backus Naur Form (BNF)↔Uses <S> as characters and ::= as ->https://remnote-user-data.s3.amazonaws.com/q3O3XjHAHcCFYc7EBsZjmLEicTEQvN85EWswhhg1hvyXL8eNnGK72x87PRrmbm3rtF6nfoyI7LW0dTCyliukXiHw0xfnK_-fOlMKQWmXC2arJqxcVY1IsYfrG0jErIl9
                        Parse Trees↔Splits at every S
                            https://remnote-user-data.s3.amazonaws.com/RnEDUbcXhwqK_aiyNtcJj3_lg8XwqG93JYOwX3HFjNVeSkzrZPG8EAHQULGNJI4IuOFxoUNU8hVxaRpj87F0EsvqBMxVa-8r9HIfpS1jkvTNpMB5MVVZSo93cPHauzjh
                        
                Lecture 31
                    Goal: Compile high level language to assembly code https://remnote-user-data.s3.amazonaws.com/bt1e05d8IBJMAl4z5kbq8B68W6ipLXNFOdQnJohM2eSJL_VkLfjns9V48QwRjj53a9rcx4GWhUxtMftrYXJOL7_D4_gkgCCAvhpt2shG5aB8tZd9zQSjDofO3OLlix7q  
                    Lexical analysis
                        Divide and classify characters as " tokens ."  
                        Steps
                            Classify each token (Lexical analysis)
                            With each token classified, match it to the corresponding template (Syntax analysis)
                        Takes the string of characters in the input and divides it into a sequence of “tokens.”
                        lexical analysis of x := y + 13
                            https://remnote-user-data.s3.amazonaws.com/lgJ5fkBWSLvuigMI6yqNU3YQRdvMpjuYcosSRH1Alh_nIcsXMLCC_Cn35XWEh5qv8tLog8x0YPxIlK96YRE-D6432DGixdqoVAVIL2c4ufm5c1mLlKgK_CPJsMzUyxC8  
                            https://remnote-user-data.s3.amazonaws.com/gD1fJU4Oeg355e3LOXJyuw1CzpPnfjRWA9CXj01pd2_XRWDIbuyi3kJldkF-acIsVB33wtpXxcoztaxc8XoEJ7OTRu_q-DinWxq0fxhC7G_8w51t911r79GyY5zf5gBz  https://remnote-user-data.s3.amazonaws.com/O5Tf9vqKuXOm9n7t-Nj4ileoiRUToPD6q8P2C8weKIfuRz0uud_oEUdrt-WyoA7mJ6HXXU3AfUAubDKrXcN4484csEgXO813hoXN3Ci_Fb35mOtpgoi48sS_Gx_AtFs1  
                            
                        Avoid Ambiguity: parsing x = x - y - z has multiple methods
                            https://remnote-user-data.s3.amazonaws.com/W1E6Yz8TjnNu3no-RCKaxpm5pdxFQIt-k4AzpuhNMXgbwImvdmaIJcWmB8AiDT8V2xfijF5HqxwnhPvUaBbNcIbQ2HGo6JgjZoVX27AIoeb4qJzTZjsA5bunYdkEtTcf  
                            How to fix: <exp> <op> <exp> becomes <var> <op> <var> 
                Lecture 32
                    https://remnote-user-data.s3.amazonaws.com/taEf4bve5afbDAuWK9jdthcq2stWXn-w97Ss-UQkQzggfyHSnxSGp3sgEyx7FdCxoAqYUDsnqtCogKawX4wSdopWO4obfhEXHtnknGQHsCPJmJewMQYd3u79uRmykPKH  
                Lecture 33
                    Algorithms
                        Rules
                            Finiteness
                            Definiteness
                            Input
                            Output
                            Effectiveness
                        Complexity Analysis
                            https://remnote-user-data.s3.amazonaws.com/8bpcpKQtOLNTHzi6qGUB0M3ymk7PbldWMkmX0FL2WQD0euPXixZrSCow1LqCSfCZKJgdntn65l9hK4okBMbLMlSX_Q9cisilZNUwtmkgqJmP8_i9JhUPaQC1tes1QZEY
                            We don't care about 11 and 8 because those could always be made better. What matters is that it's a linear functino
                            Big O Notation
                                O Notation
                                    https://remnote-user-data.s3.amazonaws.com/d3DUmNU0R4lRnF08H29w81pPdNV7ZGBzyWakTkmYSYZc9XMy2wH5WK7YPFDBHgqeWT3FzTYrHSVUrdDPj1nRdsh52uEAy5MMta01FWkkGxC4Ecby_mMxj7bar6P4jiDT  
                                    Note that O does not have to fit the function exactly
                                    https://remnote-user-data.s3.amazonaws.com/Nq3dVPzlSWLziCJe_BkjajpzTmDQVSntovtgG8tTRzzWBP-g5sDMh-9h4PtwfTmRxZJcZJYj8-ywdTx2EJtN6rcMditHBJJZJGTBdeBmJEuMvcyjsVUMM5C1jWMPqjlO
                                Omega Notation
                                    https://remnote-user-data.s3.amazonaws.com/1GqzH8liu6ULQn7R4AK2_Fb7R6uN1vNL0gw3bguDkZdaPkuM4MKIrrrQs9Onhza0gPF3CYq9n17JKuy-BwWAjaq-GW2QXbIHa2NPBTqrBtF3qpm8n2DPCYynSVQYST6V  
                                Theta Notation
                                    https://remnote-user-data.s3.amazonaws.com/QvSUCJCPvOg-MkeRfgG-YzJO54NKXYf9W_b-x8yC6mSJaOD3AykmgGtbKIrH1NfOtHMThEAzkzK3u4lYrQAYf4EqF1VX_uIO1FGzI4-gZKAVl68Yx9S493Ey848bSkMg  
                            Insertion Sort
                                Complexity:
                                    Insert into list size 0
                                    Insert into list size 1
                                    Insert into list size 2
                                    ...
                                    Insert into list size n
                                    n(n+1)/2 is O(n^2)
                Lecture 35
                    Comparison Sorts
                        Any sort that compares different arrangements of elements
                            https://remnote-user-data.s3.amazonaws.com/Ar88Q2gaZVc27DgpypjxlT9r_KFiMz3WRZYPFV0QkXwHHaCUz5DNqAQTFHvIjmMJNr3emrdGK11Av_AzhCndjNKeL9bpkkZ18kuVo5O4_6ZaQc4XIJvyPgG-eZYZrMaC  
                            There are n! possible combinations of the list
                            https://remnote-user-data.s3.amazonaws.com/iXCGF6XlIKNhKwCloEdxPkYU3jnMiGFgXrkpA8jHkcRdB2SbWv7YSwmEWa6XDQBpRWFgS8RTlmUE9K8srpzzs1TyrDzQGXkXB4KNVIYuzN5hXfhNqSbdIN1CNE0hzrjw  
                            https://remnote-user-data.s3.amazonaws.com/VtLyBcs5F4hQUsJT3VzV-4Rw6cuhFgrI9rK8KULQxfo425rR58ZI6Oa_oDNZMxcL9va6Qk8G0XuoXbP1YR3GCBrl7r-o7BBMQVb6V_BvgXipnFE4yHvofRYzL788lCIP  
                    Counting Sort
                        Use value of number as index in new array
                        Inspiration:
                        https://remnote-user-data.s3.amazonaws.com/KQ-IOjYWoeHwu2Lkh3n2ZZInPQWtbtLKpPoZ3LEt8Tba4RSC4-UAdSnodnEpcMbLvKXbqRxNQtIH_czEWI9JD7ttHBuiPJsy1bVD3nNTcVto0SJlqhIxpXSpRDKcu4F_  
                        Generalizes
                        https://remnote-user-data.s3.amazonaws.com/mjzdymvpJATxePJoAEJB4jvS6ykdHASlOZC61g4WhVaH0KnVxzHDTB7as4UHBC6nEO_e45nQziIy0VAvJbQ_nstlTKO0gLqVEBevWhEosmLmjaoyn7TCANYgw-YvV_i4  
                        https://remnote-user-data.s3.amazonaws.com/sesVLbh7XTC48phjoZBTgKVDkaqe23g7XsP9sIR2rGY3Xo3dHefbxCp_AVR0yiuFI6U7-_A2IAUW62P0WM4spseq0V16QFCKK82pn1OUmKveTK2CRHyDiJ9rRuEUdx5k  
                        Complexity O(n+k)
                        Implementation
                        https://remnote-user-data.s3.amazonaws.com/-VzEU_qXPOYCsoIY-AHcPrUAEY9JATz7RZ0uPwuuCeSYW3yW1qWtwvQ4Lx9mEWm_UvBUPvJnpJl5hsLeVjW9XIg3GEjgvd1UmBzcpaxMOYxz22jHcAqykhBcJSlKS0Au  
                    Bucket Sort
                        https://remnote-user-data.s3.amazonaws.com/Tb318oRxrJbWqgpzd06V-YAzNpKz-LcxBaBvecpiU8LYdXJA2lZR8U2BgO2otJm32_7hbsFaHZ2IYP0gNsspYrqNOXlXrcbDMGJU10xdvkDuQdKU5joTw1_MGXJRwA0X  
                        https://remnote-user-data.s3.amazonaws.com/XUm3-0hU96aTEL7z3FqNBfZcs2APqmWhlchAwMXVlRR4ANY8gZmEl0u7o0_jEtTojE9FfS0AcjrXv0FSPVJeCCHmpu5ZalUSTl-l6641R12iuXz4wq9l7lUZchpHb9MR
                Lecture 36
                    Linear Programming
                        definition→model seeks to minimize a linear function, subject to a set of constraints
                        components
                            a set of decision variables
                            an objective function
                            a set of constraints
                    P=NP
                        Polynomial vs. exponential timehttps://remnote-user-data.s3.amazonaws.com/_Gjn61zRp7Dp8qoPWr5sj2aDwCptRwrZ6ipLlRElrevfRsU8ysLvF4vJhAwdUahjv8dj-RsNWolhdj34WlD13Y-u7RpYhW1F8O-Sy4GK1LfXMEFhWARKhaqROU3cktRL
                        https://remnote-user-data.s3.amazonaws.com/YQ0wff2-5Hdd5CmsUXLRB10Ckn7ULDeb0ka5iZbmpya2z9qZXHA9hhlyydU42wKVu73MqBnCGiYEkIm_Lf18DAya43Ca-hIBXyitxOC61OcXWF5maZgMALGVkLcQusbl
                        P↔Problems that can be solved in polynomial time
                        NP (nondeterministic polynomial time)↔the set of problems whose solutions can be verified in polynomial time. However, many of those problems take exponential  time to solve. We cannot solve in polynomial time necessarily, but we can verify in polynomial time
                        significance→do efficient simple polynomial time solutions exist to these NP problems, and if so there's a special algorithm solution
                        example→Satisfiability problem
                            https://remnote-user-data.s3.amazonaws.com/fBmsl3yMZ6TeBKuVdRKuptOalfRpYRbKyxaNdobvPc8-ufBXsVzodfFGLG6tPSnP1PAqDbSAPq4A4c0rHLpDWkVbm2uLkCM1FYAZR9xyMb0t7c50e6OqcNlDj7tqIxfA
                            https://remnote-user-data.s3.amazonaws.com/WDyhpfWWlDhMVg5JTxD-AQG6BnDUzYAz1Al41MiuC85O0ONJQZMGEn89vOmn9QqAKiV9JyvcYxSqdru5HHpgjIcriAUIRKSLCygGyv1EQlK_X0ILwiIJcNQ6UgXoTzAv  
                            https://remnote-user-data.s3.amazonaws.com/LyRHF9cVwUx26wRk88M-AgJzYTTOikKpJDjAl6Gf-Hcx_EZehYBNvcgrh0k04eB2dLq1hiQBVpgehgiNFruMpKArMhPUd8V_dy-vNMVkUo2EaGixIKoHAdk-KB2ADMop  
                            finding a polynomial that satisfies SAT would prove P = NP
                        
                Lecture 37
                    How to reverse a regular expression
                        https://remnote-user-data.s3.amazonaws.com/niHgP1mA9cOzw8b-TCpfovmVPKTFgeYO1ZFmOdkgTLKrKeZ-_qY3RqVE-JPQfCKMKHhnJea2XZVl_CKf3-FxgLmxqbcmMkG7ZAwecOGO08Aacxh8jSYvpgrZ-7BzjPnU
                Commands
                    ssh bmw52@node.zoo.cs.yale.edu―log in
                    scp bmw52@node.zoo.cs.yale.edu:/c/cs201/hws/hw<as_no>.rkt "/Users/braden/Google Drive (braden.wong@yale.edu)/Yale/CS201/": retrieve file
                    scp -r "/Users/braden/Google Drive (braden.wong@yale.edu)/Yale/CS201/hw#" bmw52@node.zoo.cs.yale.edu:~/cs201/―send file
                    While cd cs201
                        /c/cs201/bin/autograde --test 0―autograde
                        /c/cs201/bin/submit 0  hw0.rkt―submit
                        /c/cs201/bin/check  0―check
                        /c/cs201/bin/unsubmit  <hw#>  oops.rkt―remove submitted file
                        /c/cs201/bin/protect  <hw#>  hw<hw#>.rkt―protect from deletion
                        /c/cs201/bin/unprotect  <hw#>  hw<hw#>.rkt―unprotect
                        /c/cs201/bin/retrieve  <hw#>  hw<hw#>.rkt―retrieve in case you deleted your local copy
                
                
            English 011: Lincoln in Thought and Action
                Retrogression
                August 31st, 2020
                     On the Duty of Civil Disobedience
                        But a government in which the majority rule in all cases can not be based on justice, even as far as men understand it.
                        If the injustice is part of the necessary friction of the machine of government, let it go, let it go: perchance it will wear smooth,—certainly the machine will wear out. If the injustice has a spring, or a pulley, or a rope, or a crank, exclusively for itself, then perhaps you may consider whether the remedy will not be worse than the evil; but if it is of such a nature that it requires you to be the agent of injustice to another, then, I say, break the law. Let your life be a counter friction to stop the machine. What I have to do is to see, at any rate, that I do not lend myself to the wrong which I condemn.
                    The Liberator: "To the Public"
                        topic―a strong condemnation of slavery
                        what he did―published and made speeches against slavery
                            In Park-street Church, on the Fourth of July, 1829, in an address on  slavery, I unreflectingly assented to the popluar but pernicious  doctrine of gradual abolition. I seize this opportunity to make a full  and unequivocal recantation, and thus publicly to ask pardon of my God,  of my country, and of my brethren the poor slaves, for having uttered a  sentiment so full of timidity, injustice and absurdity. A similar  recantation, from my pen, was published in the Genius of Universal  Emancipation at Baltimore, in September, 1829. My consicence in now  satisfied.
                        why severe language―you do not do things half-heartedly
                            I am aware, that many object to the severity of my language; but is there not cause for severity? I will  be as harsh as truth, and as uncompromising as justice. On this  subject, I do not wish to think, or speak, or write, with moderation.  No! no! Tell a man whose house is on fire, to give a moderate alarm;  tell him to moderately rescue his wife from the hand of the ravisher;  tell the mother to gradually extricate her babe from  the fire into  which it has fallen;  -- but urge me not to use moderation in a cause  like the present. I am in earnest -- I will not equivocate -- I will not  excuse -- I will not retreat a single inch -- AND I WILL BE HEARD. The apathy of the people is enough to make every statue leap from its pedestal, and to hasten the resurrection of the dead.
                        Lincoln realizes that the United States is different because it has  no native people 
                        the mob has a tendency to positive feedback loop destabilization, you either become with the mob or fragmented from the government
                        Proposition―an indicative statement that is falsifiable
                            Lincoln says that the nation was founded on the proposition of  all men are created equal  
                        he is calling for cancelling passion
                        to change the system, play by the system
                            bad laws, if they exist, should be repealed as soon as possible, still while they continue in force, for the sake of example, they should be religiously observed  
                    Address to the People of Sangamon County
                        announces his―candidacy
                        calls for―active government and improvement
                    Lyceum Address
                        As a nation of freemen, we must live through all time, or die by suicide.  
                        describes as―ordinary people
                            a set of men, certainly not following for a livelihood, a very useful, or very honest occupation; but one which, so far from being forbidden by the laws, was actually licensed by an act of the Legislature, passed but a single year before. Next, negroes, suspected of conspiring to raise an insurrection, were caught up and hanged in all parts of the State: then, white men, supposed to be leagued with the negroes; and finally, strangers, from neighboring States, going thither on business, were, in many instances subjected to the same fate. Thus went on this process of hanging, from gamblers to negroes, from negroes to white citizens, and from these to strangers; till, dead men were seen literally dangling from the boughs of trees upon every road side; and in numbers almost sufficient, to rival the native Spanish moss of the country, as a drapery of the forest  
                        a group of lawless in spirit―by such examples, by instances of the perpetrators of such acts going unpunished, the lawless in spirit, are encouraged to become lawless in practice; and having been used to no restraint, but dread of punishment, they thus become, absolutely unrestrained.
                        notably, Abraham lincoln discounts the situation through―completing the audience's thoughts
                            You are, perhaps, ready to ask, "What has this to do with the perpetuation of our political institutions?" I answer, it has much to do with it 
                            But, it may be asked, why suppose danger to our political institutions? Have we not preserved them for more than fifty years? And why may we not for fifty times as long?  
                            The hanging of the gamblers was of little consequence
                            The African Americans, had they not met their fate at the mob, would have met a similar fate at the hands of the law
                        the reason that either side can fall into anarchy―the desire of distinction, whether through enslavement or abolition
                        the introduction of religion/higher being―let us have an attachment and respect to the law, let us lay down as a political religion, specifically in a democracy
                            why this is specifically important in democracy―the mechanism through which democracy garners power is shared through that that powers mobs
                            the law is not majority preference
                        warns of―a slippery slope
                            swear by the blood of the Revolution, never to violate in the least particular, the laws of the country; and never to tolerate their violation by others  
                            uphold the social contract
                    `Lincoln's Temperance Address
                        what it rejoices―temperance has grown in popularity
                        what caused it―shift to populism and grassroots support
                        other notes―is it just to assail, contemn, or despise them, for  doing so
                September 7th, 2020
                    https://teachingamericanhistory.org/library/document/spot-resolutions-in-the-u-s-house-of-representatives/
                     Speech on the Mexican War - Teaching American History
                        The "spot" resolutions were to ask Polk where the "spot" of Mexican aggression was
                        What, in the name of all that is sacred, was the President to do but  exactly what he did do – move our army to the extreme limit of our  boundary, and there await the onslaught, if Mexico chose to make it?
                        Well, where does the shoe pinch here, gentlemen? Are you horrified at the success of the American arms? I verily believe that many of you would have been better pleased if the results of this war had been the defeat of our armies and a loss of American territory, and more especially if it had secured the defeat of the dominant party.
                        Here we are in the second week of this short session, denouncing the President for causing an unholy, impious, and vindictive war, and cavilling and carping at the manner in which he has protected the Mexican people who have yielded to the resistless shock of our victorious arms.
                    https://teachingamericanhistory.org/library/document/the-war-with-mexico-speech-in-the-united-states-house-of-representatives/
                        
                    Henry Clay
                        Of antithesis, and elegant  arrangement of words and sentences; but rather of that deeply  earnest and impassioned tone, and manner  
                        Deep devotion to the cause of human liberty  
                        Missouri compromise
                            Mr. Clay was in congress, and, perceiving the danger, at once  engaged his whole energies to avert it. It began, as I have said,  in 1819; and it did not terminate till 1821. Missouri would not  yield the point; and congress -- that is, a majority in congress -- by  repeated votes, showed a determination to not admit the state  unless it should yield. After several failures, and great labor on  the part of Mr. Clay to so present the question that a majority  could consent to the admission, it was, by a vote, rejected, and as  all seemed to think, finally. A sullen gloom hung over the nation.  All felt that the rejection of Missouri, was equivalent to a  dissolution of the Union, because those states which already had, what  Missouri was rejected for refusing to relinquish, would go with  Missouri. All deprecated and deplored this, but none saw how to  avert it. For the judgment of Members to be convinced of the  necessity of yielding, was not the whole difficulty; each had a  constituency to meet, and to answer to. Mr. Clay, though worn  down, and exhausted, was appealed to by members, to renew his  efforts at compromise. He did so, and by some judicious  modifications of his plan, coupled with laborious efforts with individual  members, and his own over-mastering eloquence upon the floor,  he finally secured the admission of the State. Brightly, and  captivating as it had previously shown, it was now perceived that  his great eloquence, was a mere embellishment, or, at most, but  a helping hand to his inventive genius, and his devotion to his  country in the day of her extreme peril.  
                        Divine Providence, ending is very religious  
                    Speech on the Kansas Nebraska Act   Peoria Speech, October 16, 1854 - Lincoln Home National Historic Site (U.S. National Park Service)
                        response to―Douglas
                        significance―his most ambitious speech before presidency
                        self-interest (how Lincoln uses it)―selfishness
                        Near eighty years ago we began by declaring that all men are created  equal; but now from that beginning we have run down to the other declaration, that for some men to enslave others is a ‘sacred right of self-government.’ These principles can not stand together. They are as  opposite as God and mammon; and whoever holds to the one, must despise  the other.”
                        I trust I understand, and truly estimate the right of self-government. My faith in the proposition that each man should do precisely as he pleases with all which is exclusively his own,lies at the foundation of the sense of justice there is in me. I extend the principles to communities of men, as well as to individuals. I so extend it, because it is politically wise, as well as naturally just: politically wise, in saving us from broils about matters which do not concern us. Here, or at Washington, I would not trouble myself with the oyster laws of Virginia, or the cranberry laws of Indiana.
                        The doctrine of self government is right--absolutely and eternally right--but it has no just application, as here attempted. Or perhaps I should rather say that whether it has such just application depends upon whether a Negro is notor is a man. If he is not a man, why in that case, he who is a man may, as a matter of self-government, do just as he pleases with him. But if the Negro is a man, is it not to that extent, a total destruction of self-government, to say that he too shall not govern himself? When the white man governs himself, and also governs another man, that is more than self-government--that is despotism. If the Negro is a man, why then my ancient faith teaches me that “all men are created equal;” and that there can be no moral right in connection with one man's making a slave of another
                        Judge Douglas frequently, with bitter irony and sarcasm,paraphrases our argument by saying “The white people of Nebraska are good enough to govern themselves, but they are not good enough to govern a few miserable Negroes!!”
                        Well I doubt not that the people of Nebraska are, and will continue to be as good as the average of people elsewhere. I do not say the contrary. What I do say is, that no man is good enough to govern another man, without the other's consent.I say this is the leading principle--the sheet anchor of American republicanism. Our Declaration of Independence says:
                        “We hold these truths to be self evident: that all men are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty and the pursuit of happiness. That to secure these rights,governments are instituted among men, DERIVING THEIR JUST POWERS FROM THE CONSENT OF THE GOVERNED.”
                        "Whether this feeling accords with justice and sound judgment, is not the sole question"
                            Justice is justice, sound judgement is more utilitarian on the preservation of the Republican
                        He asks that they keep 1 for 1 or concessions so―they stay on the table, tactical decision. You're giving us nothing?
                        I hate it because of the monstrous injustice of slavery itself.  
                    Letter to Speed
                        why roused?―Of the one hundred members composing the two branches of that body, about seventy were democrats. These latter held a caucus, in which the Nebraska bill was talked of, if not formally discussed. It was thereby discovered that just three, and no more, were in favor of the measure. In a day of two Dougla's [sic] orders came on to have resolutions passed approving the bill; and they were passed by large majorities!!! The truth of this is vouched for by a bolting democratic member. The masses too, democratic as well as whig, were even, nearer unanimous [sic] against it; but as soon as the party necessity of supporting it, became apparent, the way the democracy began to see the wisdom and justice of it, was perfectly astonishing.
                        Difference between in practice and principle
                            principle―all men are created equal
                            practice―against extension of slavery
                     Lincoln Speech Text - Kalamazoo Valley Museum 
                        Can Nebraska, as a free state, somehow vote slavery in?
                            9 out of 10 people are free, 1 out of 10 is a slave holder. The mere 
                            Once slavery is in with a lot of free people, it will be planted and can become legitimate
                            Therefore, stopping the extension of slavery is the politically prudent option, as people won't opt for slavery if they're not used to it
                                Notably, this is not the moral option. The moral option is to end slavery, period
                            prudent vs moral option―prudent is in practice, moral is on principle
                September 13th, 2020
                     Speech at Springfield, June 26, 1857 - mrlincolnandfreedom.org
                        Utah's Self-Government
                            I begin with Utah. If it prove to be true, as is probable, that the  people of Utah are in open rebellion in the United States, then Judge  Douglas is in favor of repealing their territorial organization, and  attaching them to the adjoining States for judicial purposes. I say,  too, if they are in rebellion, they ought to be somehow coerced to  obedience; and I am not now prepared to admit or deny that the Judge’s  mode of coercing them is not as good as any. The Republicans can fall in  with it without taking back anything they have ever said. To be sure,  it would be a considerable backing down by Judge Douglas from his much  vaunted doctrine of self-government for the territories; but this is  only additional proof of what was very plain from the beginning, that  that doctrine was a mere deceitful pretense for the benefit of slavery.  Those who could not see that much in the Nebraska act itself, which  forced Governors, and Secretaries, and Judges on the people of the  territories, without their choice or consent, could not be made to see,  though one should rise from the dead to testify.
                            Criticizes democrats for hypocrisy in considering self-government for slavery but not for polygamy (double standard)
                                You have predetermined beliefs of what is right or wrong for polygamy, but no stance on slavery?
                        Criticizes judge douglas on allowing vote
                        Now I protest  against that counterfeit logic which concludes that, because I do not  want a black woman for a slave I must necessarily want her for a wife.  I need not have her for either, I can just leave her alone. In some  respects she certainly is not my equal; but in her natural right to eat  the bread she earns with her own hands without asking leave of any one  else, she is my equal, and the equal of all others.    
                        Hedging himself from strawman argumants- Wanting a black woman not as a slave but as a neighbor does not mean as a wife. Stating that we are equal does not mean we are all the same in all respects. Also note that we are not equal does not imply inferiority or superiority
                     "House Divided" Speech by Abraham Lincoln  (1858)
                        Prophetic tone, either we will end slavery or be ended. Considered to be quite controversial
                            Either the opponents of slavery, will arrest the further spread  of it, and place it where the public mind shall rest in the belief  that it is in the course of ultimate extinction; or its advocates will push  it forward, till it shall become alike lawful in all the States, old  as well as new -- North as well as South.
                            Then opened the roar of loose declamation in favor of "Squatter  Sovereignty," and "Sacred right of self-government."
                        "But," said opposition members, "let us be more specific -- let us  amend the bill so as to expressly declare that the people of the  territory may exclude slavery." "Not we," said the friends of the  measure; and down they voted the amendment.   
                        Response to―Nebraska doctrine, and the Dred Scott decision
                        The three bad things argued in Dred Scott
                            Preventing slaves from being citizens
                            Neither congress or legislature is allowed to exclude slavery
                                Roger Tawney argues that states do not have the authority to regulate rights to property
                            Hunting slaves in northern states
                                Excluding slave owners from bringing in their slaves is "unconstitutional"
                                Lincoln fears this will habituate others to the presence of slaves, as demonstrated in his  Lincoln Speech Text - Kalamazoo Valley Museum 
                                Habituation―Exposing bad things to others will normalize them
                        Dred Scott decision has rendered Douglas' policy impossible to implement
                        The Problem with Popular Sovereignty―impossible to implement
                        Three possible stances that Lincoln can take that are not radically abolitionist
                            No expansions of slavery
                            Squatter sovereignty―whoever comes first can vote in a slave constitution
                        What Dredd Scott accomplishes is that―you can't ban slavery ANYWHERE
                        The conspiracy paragraph
                            Summary: They acted as not "pro-slavery", but worked in the background to ensure that this was the case
                             	 Why was the amendment, expressly declaring the right of the people to exclude  slavery, voted down? Plainly enough now, the adoption of it would have  spoiled the niche for the Dred Scott decision.
                             	 Why was the amendment, expressly declaring the right of the people to exclude  slavery, voted down? Plainly enough now, the adoption of it would have  spoiled the niche for the Dred Scott decision.
                             	 Why was the court decision held up? Why even a Senator's individual opinion  withheld, till after the presidential election? Plainly enough now,  the speaking out then would have damaged the "perfectly free"  argument upon which the election was to be carried.
                             	 Why the outgoing President's felicitation on the indorsement? Why the  delay of a reargument? Why the incoming President's advance exhortation  in favor of the decision?
                             	 These things look like the cautious patting and petting of  a spirited horse, preparatory to mounting him, when it is dreaded that he may  give the rider a fall.
                             	 And why the hasty after indorsements of the decision by the President  and others?
                             	 We can not absolutely know that all these exact adaptations are the  result of preconcert. But when we see a lot of framed timbers, different  portions of which we know have been gotten out at different times and places  and by different workmen -- Stephen, Franklin, Roger, and James, for instance --  and when we see these timbers joined together, and see they exactly make the  frame of a house or a mill, all the tenons and mortices exactly fitting,  and all the lengths and proportions of the different pieces exactly adapted  to their respective places, and not a piece too many or too few -- not omitting  even scaffolding -- or, if a single piece be lacking, we can see the place  in the frame exactly fitted and prepared to yet bring such piece in -- in such   a case, we find it impossible not to believe that Stephen and Franklin and  Roger and James all understood one another from the beginning, and all  worked upon a common plan or draft drawn up before the first  lick was struck.
                    Rather than to reunify, he hopes to reclaim what is lost
                    Lacompton Constitution
                        Force a fake constitution upon the people through a fraudulent vote
                        Douglas takes a stance against this (to set him in favor of both north and south), and wishes to see it legitimately and "doesn't care if it is voted up or down" due to his stance on popular sovereignty
                            
                            Lincoln traps this and takes it down
                        Another highly noticeable difference  between the views of Douglas and Lincoln was based on the fact that  black Americans also had legal rights. According to Douglas, he believed  that, in all aspects of life, the black people would always be inferior  to the white people and highly opposed the issue of citizenship for the  black people. According to Lincoln, he believed that the black people  were meant to be treated as equals to the white people including Douglas  himself. In retaliation to remarks that Lincoln had said, Douglas  replied saying “Mr. Lincoln asserts, as a fundamental principle of this  government, that there must be uniformity in the local laws and domestic  institutions of each and all the States of the Union; and he therefore,  invites all the non-slaveholding States to band together, organize as  one body, and make war upon slavery in the states that still practiced  slavery” (Richard, 1965). 
                September 21st, 2020 LD Debates
                     First Debate: Ottawa, Illinois - Lincoln Home National Historic Site (U.S. National Park Service)
                        Introduction
                            Turns tables on the conspiracy  theory, Lincoln is a conspirator
                            Lincoln abolitionizes the Whig Party
                        The agreement between Lincoln, Whigs, Abolitionists, etc.
                        Lincoln argues that the repeal of the Missouri Compromise was the fire that started the fracture
                        "I think, and shall try to show, that it is wrong; wrong in its  direct effect, letting slavery into Kansas and Nebraska-and wrong in its  prospective principle, allowing it to spread to every other part of the  wide world, where men can be found inclined to take it.
                            "This declared indifference, but, as I must think, covert real  zeal for the spread of slavery, I cannot but hate. I hate it because of  the monstrous injustice of slavery itself. I hate it because it  deprives our republican example of its just influence in the  world-enables the enemies of free institutions, with plausibility, to  taunt us as hypocrites-causes the real friends of freedom to doubt our  sincerity, and especially because it forces so many really good men  amongst ourselves into an open war with the very fundamental principles  of civil liberty-criticizing the Declaration of Independence, and insisting that there is no right principle of action but self-interest.
                            "Before proceeding, let me say I think I have no prejudice against  the Southern people. They are just what we would be in their situation.  If slavery did not now exist among them, they would not introduce it. If  it did now exist amongst us, we should not instantly give it up. This I  believe of the masses North and South. Doubtless there are individuals  on both sides, who would not hold slaves under any circumstances; and  others who would gladly introduce slavery anew, if it were out of  existence. We know that some Southern men do free their slaves, go  North, and become tiptop Abolitionists; while some Northern ones go  South, and become most cruel slave-masters.
                    "Maintenance of integrity"
                        Implies that we are losing integrity
                        We are intrinsically good
                        Loss aversion, the reverence of Lincoln to the birth of the nation
                        We were born to such a high standard and are having a retrogression
                    Now, gentlemen, I don't want to read at any greater length, but this  is the true complexion of all I have ever said in regard to the  institution of slavery and the black race. This is the whole of it, and  anything that argues me into his idea of perfect social and political  equality with the negro, is but a specious and fantastic arrangement of  words, by which a man can prove a horse-chestnut to be a chestnut horse.  [Laughter.] I will say here, while upon this subject, that I have no  purpose, directly or indirectly, to interfere with the institution of  slavery in the States where it exists. I believe I have no lawful right  to do so, and I have no inclination to do so. I have no purpose to  introduce political and social equality between the white and the black  races. There is a physical difference between the two, which, in my  judgment, will probably forever forbid their living together upon the  footing of perfect equality, and inasmuch as it becomes a necessity that  there must be a difference, I, as well as Judge Douglas, am in favor of  the race to which I belong having the superior position. I have never  said anything to the contrary, but I hold that, notwithstanding all  this, there is no reason in the world why the negro is not entitled to  all the natural rights enumerated in the Declaration of Independence,  the right to life, liberty, and the pursuit of happiness. [Loud cheers.]  I hold that he is as much entitled to these as the white man. I agree  with Judge Douglas he is not my equal in many respects-certainly not in  color, perhaps not in moral or intellectual endowment. But in the right  to eat the bread, without the leave of anybody else, which his own hand  earns, he is my equal and the equal of Judge Douglas, and the equal of every living man. [Great applause.]
                Writing Tips
                    Remove perhaps, arguably, any other qualifiers unless you really need them
                        If you want to argue, argue it. Don't say "arguably" as if someone else is arguing it
                September 30th, 2020   Song of Myself (1892 version) by Walt Whitman | Poetry Foundation
                    In the sixth section of the poem, the poet transitions to a story about a child holding a handful of leaves and asking, “What is the grass?” Though the poet knows this is an impossible question, he continues to muse on it, thinking that the grass may be the leaves, the child, of God. He goes on to catalog all the things he sees in the world: the people, animals, and natural features. He declares that he loves them all just as they are and loves the way they fit together. The poet sees them all as part of God’s works, just as the grass is a simple thing that is still divine because God made it.
                    Section 15―The poet observes or "takes in" his surroundings. One can observe the sounds of the singer, conductor beating time, the plane whistling, the drove singing. There is an example of a prostitute that lasts for three lines, which the author regards the booing crowd with disdain
                        The final three lines of this section work to pull the chaos of this vast catalog of sensory impressions into a kind of unity, and that unity is the self that has perceived them. Any single “I” has one vantage point, one set of eyes and ears that is continually absorbing the welter of sense impressions around the “I.” From that vantage point, it feels as if the world is “tending inward to me,” inclining, moving, stretching in toward the self’s eyes and ears and nose and tongue. At the same time, the “I” feels something in the self that is extending out toward the world, toward that endless stream of sights and sounds and smells. “I tend outward to them”: our senses reach out to the things of the world, always; our eyes are hungry to see, and our ears are hungry to hear. But so many things pass in front of our eyes and ears that we miss or ignore or are oblivious to, so we need also to “attend” to them, to take care to register and record them (as Whitman has done in this section with such loving care). So it is always what Whitman calls an “influx” and an “efflux,” the world incessantly whirling toward our senses, and our senses reaching out to absorb that world. And that, more or less, is what we are: we are the things we have seen, heard, touched, tasted, smelled: “such as it is to be of these more or less I am.” No idea we have, no word we use, no love we feel, did not originate “out there.” They all entered in through our open senses, our senses which extended out to embrace them and then tended to them as we absorbed them: and out of all those endless stimuli, we each weave the unique song of our self.
                    Section 28―
                        This section contains the famous "crisis" in which Whitman seems to be under attack from himself. Some critics think this section is about masturbation.
                        At any rate, he feels that the power of "touch" has gotten way out of hand (no pun intended).
                        This passage is filled with sexually suggestive phrases like "treacherous tip of me," "stiffening my limbs," "red marauder," and "I went myself first to the headland . . . my own hands carried me there."
                        He feels suffocated by his sense of touch, which overpowers him and creates an enormous release of energy.
                        Let's face it: it's hard not to read the end of this section as a veiled reference to orgasm and ejaculation.
                    Section 38
                        He's tired of moping around and being in the dumps. Too many thoughts about amputation and imprisonment threaten to rob him of his optimism.
                        He has been stunned, but now he snaps out of it and regains his bold, aggressive posture, telling us to "stand back!"
                        He has almost committed some "usual mistake," which seems to have something to do with complaining and dwelling on his own problems.
                        He almost forgot about everyone else's problems, the people who are mocked and crucified beside him. He can't treat his own sufferings any differently.
                        He compares himself to Jesus Christ rising from his tomb after crucifixion.
                        And we're back in business. The old, confident Walt is back, and he continues his journey through the United States, this time on foot.
                        He salutes the students ("eleves") of the world, but says he is both in front of and behind them. (The word, élève is French for "student.")
                    Section 49 - He uses "you" to personify Life and Death
                        context―in the 1850s, you had the domestication of death where graveyards were made elaborate and beautiful. He uses the word "manure" to interesting effect
                    Section 48-52
                        The speaker now sums up what he has been saying all along: the body and the soul are equals, and the self is most important of all, even more important than God.
                        He is no longer fearful of death
                        He describes death or the ending, eternal life, Happiness
                        He's only going to stay another minute, so he'd better speak honestly before he snuffs out his evening candle and goes to bed.
                            Do I contradict myself?
                            Very well then I contradict myself,
                            (I am large, I contain multitudes.)
                        A hawk flies above, and the speaker's voice is untranslatable and rambling in a romantic way
                October 4th, 2020 Lincoln Douglas 6th and 7th
                    Blacks may not be completely equal, but are equally deserving
                    Chestnut horse analogy (734)
                        So many qualifications, free labor
                        We permitted slavery during the founding out of necessity
                        He admits that the white is superior
                        Certainly not the same in color, perhaps not in intellectual, moral, etc.
                    If A can enslave B, etc.. If you are more intelligent, then you are to be enslaved by the first person with lighter color or intellect
                    Suggests forgery by Douglas, roars of response on 737
                    Douglas - rather be heard than applauded (743)
                        Gracious ending
                    Chicago Speech - “Let us discard all this quibbling about this man and the other man; this race and that race and the other race being inferior, and therefore they must be placed in an inferior position; discarding our standard that we have left us. Let us discard all these things, and unite as one people throughout this land, until we shall once more stand up declaring that all men are created equal.”
                    1859 Speech
                        He (the Young American) owns a large part of the world, by right of possessing it; and all the rest by right of  wanting it, and intending to have it…Young America had “a pleasing hope — a fond desire — a longing after” territory. He has a great passion—a perfect rage—for the “new”; particularly new men for office, and the new earth mentioned in the revelations, in which, being no more sea, there must be about three times as much land as in the present. He is a great friend of humanity; and his desire for land is not selfish, but merely an impulse to extend the area of freedom. He is very anxious to fight for the liberation of enslaved nations and colonies, provided, always, they have land…As to those who have no land, and would be glad of help from any quarter, he considers they can afford to wait a few hundred years longer. In knowledge he is particularly rich. He knows all that can possibly be known; inclines to believe in spiritual trappings, and is the unquestioned inventor of “Manifest Destiny.” __
                October 12th, 2020
                    Cooper Union Speech
                        The carefully crafted speech examined the views of the 39 signers of the Constitution. Lincoln noted that at least 21 of them -- a majority -- believed Congress should control slavery in the territories, rather than allow it to expand. Thus, the Republican stance of the time was not revolutionary, but similar to the Founding Fathers, and should not alarm Southerners, for radicals had threatened to secede if a Republican was elected President.  Abraham Lincoln's Cooper Union Address  
                        Founding fathers intent
                        They say we are sectional because we do not exist in their section. But, without change of principle, should we gain votes in your sectional, we shall cease to be sectional? (120)
                        Do you really feel yourselves justified to divide up this government? (130)
                        John brown: There is an inevitability of violence, but stick with us and it might be okay (more radical than house divided but also interestingly pacifist)
                        Lincoln could say "should we", but "can we" implies a physicality to morality. We cannot do something, as if the predefinition of nature stops us from this. We cannot yield (129)
                        To grow two blades of grass where there were one is both a profit and a pleasure
                    Lincoln's definition of democracy: in one's wish to not be a slave, one must wish not to be a master
                    And he who would be no slave, must consent to have no slave (19)
                October 19th, 2020
                    German
                        Germans and foreigners are equal to anyone else
                        The role of American democracy in the progress of mankind (203)
                            "I hold that while man exists, it is his duty to improve not only his own condition, but to assist in ameliorating mankind"
                    First Inaugural
                        "No purpose to interfere with institution where it exists" (215)
                        Fugitive slave act (216)
                        More discussion on perpetuity (218)
                        Secession is the essence of anarchy - "a majority, held in restraint by constitutional checks, and limitations, and always changing easily, with deliberate changes of popular opinions and sentiments" (220)
                        Sovereignty―unitary, absolute, perpetual
                        More discussions of actual separately (222)
                        Secession is anarchy because of Habituation
                        MAGNIFICENT edits of Seward's Draft for Final Paragraph (224, 735), which tighten diction and adds a mysticism and degree of possession to the American people
                     Cornerstone Speech | American Battlefield Trust
                        Defense of slavery
                        Discusses alternative constitution
                        Discusses that the South will be okay in the case of seccession
                        Our system commits no such violation of nature's laws. With us, all of the white race, however high or low, rich or poor, are equal in the eye of the law. Not so with the negro. Subordination is his place. He, by nature, or by the curse against Canaan, is fitted for that condition which he occupies in our system.
                        We have all the essential elements of a high national career. The idea has been given out at the North, and even in the border States, that we are too small and too weak to maintain a separate nationality. This is a great mistake. In extent of territory we embrace five hundred and sixty-four thousand square miles and upward. This is upward of two hundred thousand square miles more than was included within the limits of the original thirteen States. It is an area of country more than double the territory of France or the Austrian empire. France, in round numbers, has but two hundred and twelve thousand square miles. Austria, in round numbers, has two hundred and forty-eight thousand square miles. Ours is greater than both combined. It is greater than all France, Spain, Portugal, and Great Britain, including England, Ireland, and Scotland, together. In population we have upward of five millions, according to the census of 1860; this includes white and black. The entire population, including white and black, of the original thirteen States, was less than four millions in 1790, and still less in 76, when the independence of our fathers was achieved. If they, with a less population, dared maintain their independence against the greatest power on earth, shall we have any apprehension of maintaining ours now?
                        In this connection I take this occasion to state, that I was not without grave and serious apprehensions, that if the worst came to the worst, and cutting loose from the old government should be the only remedy for our safety and security, it would be attended with much more serious ills than it has been as yet. Thus far we have seen none of those incidents which usually attend revolutions. No such material as such convulsions usually throw up has been seen. Wisdom, prudence, and patriotism, have marked every step of our progress thus far. This augurs well for the future, and it is a matter of sincere gratification to me, that I am enabled to make the declaration. Of the men I met in the Congress at Montgomery, I may be pardoned for saying this, an abler, wiser, a more conservative, deliberate, determined, resolute, and patriotic body of men, I never met in my life. Their works speak for them; the provisional government speaks for them; the constitution of the permanent government will be a lasting monument of their worth, merit, and statesmanship.
                        Why cannot the whole question be settled, if the north desire peace, simply by the Congress, in both branches, with the concurrence of the President, giving their consent to the separation, and a recognition of our independence?
                    Charnwood Chapter 6
                        Most nations don't have language for secession
                            The Duke of Argyll, one of the few British statesmen of the time who followed this struggle with intelligent interest, briefly summed up the question thus: "I know of no government in the world that could possibly have admitted the right of secession from its own allegiance." Oddly enough, President Buchanan, in his Message to Congress on December 4, put the same point not less forcibly.
                        Many whites did not own slaves but viewed the enslavement as a point of pride (154), despite the practice not helping them
                        Committee of thirteen negotiate (167) - New Yorkers wanted peace, who talked to Seward  
                            Seward was not compromising
                    Message to Congress in Special Session
                        Logically, in understanding the origins of a Union, a Union is prior to states composing
                            Follows Montesquieu and Rousseau
                            Imagine being a group of 12, and your voting on a rule that applies to everyone that must be followed
                            How many must agree?-- 13. There should be a form of unanimity, even in the right to dissent
                            There is no right to exit because there's no unanimity in agreement of it
                        An ordinance had been adopted in each of these States, declaring the States, respectively, to be separated from the National Union (247)
                        Imperative duty among the Executive to prevent the attempt to destroy the Federal Union (247)
                        Abandonment of Fort Sumter, summary of the battle (248-249)
                        "Armed Neutrality" - Border states would be terrible, an "armed wall" would be "disunion completed" (251)
                            In the guise of neutrality, it would tie the hands of union men (251)
                        "This magical omnipotence of 'state rights', asserting a claim of power to lawfully destroy the Union itself? (256)
                        This is in contradiction to the "more perfect union" envisaged in the Preamble of the constitution
                        "The States have their status IN the Union, and they have no other legal status. If they break from this, they can do so only against law, and by revolution. The Union, and not themselves separately, procutred their independence, and their liberty." (256)
                        Unquestionably the states have the powers, and rights, reserved to them in, and by the National Constitution; but among these, surely, are not included all conceivable powers, however mischievous, or destructive... (256)
                        Debt too! (257)
                     December 3, 1861: First Annual Message | Miller Center
                        Discusses Navy and pirates
                        Fills Supreme Court
                        "Labor is prior to and independent of capital. Capital is only the fruit of labor, and could never have existed if labor had not first existed. Labor is the superior of capital, and deserves much the higher consideration. Capital has its rights, which are as worthy of protection as any other rights. Nor is it denied that there is, and probably always will be, a relation between labor and capital producing mutual benefits. The error is in assuming that the whole labor of community exists within that relation. A few men own capital, and that few avoid labor themselves, and with their capital hire or buy another few to labor for them. A large majority belong to neither class--neither work for others nor have others working for them. In most of the Southern States a majority of the whole people of all colors are neither slaves nor masters, while in the Northern a large majority are neither hirers nor hired. Men, with their families--wives, sons, and daughters--work for themselves on their farms, in their houses, and in their shops, taking the whole product to themselves, and asking no favors of capital on the one hand nor of hired laborers or slaves on the other."
                        "Many independent men everywhere in these States a few years back in their lives were hired laborers. The prudent, penniless beginner in the world labors for wages awhile, saves a surplus with which to buy tools or land for himself, then labors on his own account another while, and at length hires another new beginner to help him. This is the just and generous and prosperous system which opens the way to all, gives hope to all, and consequent energy and progress and improvement of condition to all."
                    Bromwich Writing Tips
                        Use the word "refer" over "reference"
                        Advocate is a transitive verb―I "advocated" the destruction of a word. You don't need I "advocate" for.
                        No "themes" necessary. Speeches don't have themes, but themes are interpreted within speeches
                        He or she―They can be used on somebody, anybody, etc. You may project your own pronoun for singular. So "the worker... he" or "the author... she"
                    Writing Ideas
                        Lincoln follows the historical precedent of the founders, Peoria and Cooper Union speech
                        America is the only country to endure a civil war
                        Many southerners did not own slaves
                        Secession is anarchy because of Habituation
                        Secession was logical, but not justified. We make the distinction
                    Talking Ideas for meeting with Bromwich October 21st, 2020
                        General themes and parallelisms of Lincoln to present day
                        America is the only country to endure a civil war
                        Wealth inequality, or rather, lack of wealth
                        Decline in language
                        Expanding supreme court
                        How to write this next paper?
                            Should I use Charnwood?
                            How do I find Confederate counterexamples
                            What is Lincoln's central argument and what is Cornerstone's?
                        Wealth inequality, or rather, lack of wealth
                        Decline in language
                        Decline in language
                    Comparing Seward's push to Hillary Clinton's push upon Gadaffi
                    Engrained in human nature
                    Is 1776 Declaration of Independence - Is it not a secession? Why use Declaration of Independence to defend equality of ? That undermines using the lang
                    4th of July Speech reveals Lincoln's focus
                October 26th, 2020
                    Frustration with McClellan - His letter to McClellan (first of reading) is tinged with irony
                    Appeal to Border-State Representatives for Compensated Emancipation (July 12, 1862)
                        "expediency of necessity" to colonize and purchase slaves, send them away.
                        "Room in South America for colonization, can be obtained cheaply and in abundance" (341)
                    Address on Colonization
                        "I would save the Union... the shortest way under the Constitution. If I could save the Union without freeing any slave I would do it" (358)
                        Before his Emancipation Proclamation, Lincoln oddly makes a "conservative move" with this speech  for colonization. Bromwich's justification: he's close to panic. You cannot believe the consequentiality. He does so at huge disappointment to his listeners, but does not offend them. This suddenly has nothing to do with him being an abolitionist
                            Response: He is polling the feelings before his preliminary Emancipation Proclamation. Takes drastically different groups' perspective. This is his most politic moment
                    January 1863―"Will he be as good as he said?" Blacks are unsure of Lincoln's consistency
                October 31st, 2020
                    My analysis of the passage on Page 350 (Union Address)
                        His deft navigation in criticizing his general and the Secretary of War
                        Candor vs. Frankness
                            Candor is the honesty with the of kindness
                        Letter to Erastus Corning (454)
                            I am saving future deserters, as those who deserted were killed (460)
                November 2nd, 2020
                    Letter to Burnside (451)
                        "All the cabinet regretted the necessity of arresting, for instance, Vallandigham, some perhaps, doubting, that there was a real necessity for it"
                        The equivalent of a general arresting a politician
                    Response to Ohio Democrats (467)
                        Response to Habeas Corpus
                        Necessity for Public Safety (467)
                        Your own attitude encourages desertion (469)
                        He claims he differs not in the reading of the constitution but the application (466)
                        "I dislike to waste a word... you will find yourselves at fault... to find evidence I opposed the Mexican war" (466)
                            He voted for the war, supported it as well, but questioned the cause at the same time
                            He never spoke publicly against the war, even though he personally did
                            Ohio Dems are hypocritical
                            "You own attitude, therefore, encourages desertion, resistance to the draft and hte like, because it teaches those who incline to desert... to believe it is your purpose to protect them" (469)
                                Prove to me that you don't wish to encourage desertion and shelter them (this would be treason)
                    Letter to Erastus Corning and Others
                        "If I be wrong on this question of constitutional power, my error lies in believing that certain proceedings are constitutional" (460)
                            The metaphor of the body politic - the comparison of the Union to the body
                            "I can no more be persuaded that the Government can constitutionally take no strong measures in time of rebellion, because it can be shown that the same could not be lawfully taken in time of peace, than I can be persuaded that a particular drug is not good medicine for a sick man, because it can be shown not to be good food for a well one" (460)
                        Extrication - "And yet, let me say that, in my won discretion, I do not know whether I would have ordered the arrest of Mr. Vallandigham. While I cannot shift the responsibility from myself, I hold that, as a general rule, the commander in the field is the better judge of the necessity in any particular case" (462)
                        On Hamiltonian grounds, the Executive branch is to further
                    Letter to Nathaniel Banks (1862)
                        "As an anti-slavery man I have a motive to desire emancipation" (488)
                    Letter to Conkling (1862)
                        Physicality
                            There are those who are dissatisfied with me. To such I would say: You desire peace; and you blame me that we do not have it. But how can we attain it? There are but three conceivable ways. First, to suppress the rebellion by force of arms. This I am trying to do. Are you for it? If you are, so far we are agreed. If you are not for it, a second way is to give up the Union. I am against this. Are you for it? If you are, you should say so plainly. If you are not for force, nor yet for dissolution, there only remains some imaginable compromise. I do not believe any compromise, embracing the maintenance of the Union, is now possible. All I learn, leads to a directly opposite belief. The strength of the rebellion, is its military--its army. That army dominates all the country, and all the people, within its range. Any offer of terms made by any man or men within that range, in opposition to that army, is simply nothing for the present; because such man or men, have no power whatever to enforce their side of a compromise, if one were made with them. To illustrate. Suppose refugees from the South, and peace men of the North, get together in convention, and frame and proclaim a compromise embracing a restoration of the Union; in what way can that compromise be used to keep Lee's army out of Pennsylvania? (496)
                        "You dislike the emancipation; and perhaps, would have it retracted" (497)
                    Address to Gettysburg
                        "It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus so far been nobly advanced" (536)
                    "I wish success to emancipation" (580)
                    Letter to Hodges (581)
                        “When, early in the war, Gen. Fremont attempted military emancipation, I forbade it, because I did not then think it an indispensable necessity. When a little later, Gen. Cameron, then Secretary of War, suggested the arming of the blacks, I objected, because I did not yet think it an indispensable necessity. When, still later, Gen. Hunter attempted military emancipation, I again forbade it, because I did not yet think the indispensable necessity had come. When, in March, and May, and July 1862 I made earnest, and successive appeals to the border states to favor compensated emancipation, I believed the indispensable necessity for military emancipation, and arming the blacks would come, unless averted by that measure. They declined the proposition; and I was, in my best judgment, driven to the alternative of either surrendering the Union, and with it, the Constitution, or of laying strong hand upon the colored element. I chose the latter. In choosing it, I hoped for greater gain than loss; but of this, I was not entirely confident. More than a year of trial now shows no loss by it in our foreign relations, none in our home popular sentiment, none in our white military force,---no loss by it any how or any ]where. On the contrary, it shows a gain of quite a hundred and thirty thousand soldiers, seamen, and laborers. These are palpable facts, about which, as facts, there can be no cavilling. We have the men; and we could not have had them without the measure.” (585)  
                    Reply to Committee of the National Union Convention (June 9, 1864) 
                        Accepts nomination  
                    Address to Maryland (590)
                        Do not kill southern soldiers that we capture, bc we don't know that they do the same to ours 
                Week 11 November 8th, 2020
                    November 9th, 2020
                    Response to Serenade
                        Over 50 years ago, the Constitution was 
                      Thucydides: Pericles' Funeral Oration   
                        For all men praise the dead, and, however preeminent your virtue may be, I do not say even to approach them, and avoid living their rivals and detractors, but when a man is out of the way, the honor and goodwill which he receives is unalloyed
                        when all her greatness shall break upon you, you must reflect that it was by courage, sense of duty, and a keen feeling of honour in action that men were enabled to win all this, and that no personal failure in an enterprise could make them consent to deprive their country of their valour, but they laid it at her feet as the most glorious contribution that they could offer
                        For heroes have the whole earth for their tomb; and in lands far from their own, where the column with its epitaph declares it, there is enshrined in every breast a record unwritten with no tablet to preserve it, except that of the heart.
                    Topics are possible
                        Lincoln's inner vs. outer
                    Since 18th months in the war, the Union was to invade the South because there was no conceivable way to 
                    It was about slavery since January 1
                    Gettysburg
                        Happy that they won, but dashed by Lee's army escaping
                        Government of the people, by the people, for the people
                            
                        Shall not perish from the Earth
                            Messianic
                        "Four Scores and Seven Years Ago"
                            Natalistic
                        All men are created equal is a proposition
                            It is falsifiable, or testable, or an experiment
                            "All men are created equal" is a falsifiable statement
                        "The brave men... have consecrated it, far above our poor power to add or detract" (536)
                            He does not use that "Blood has been spilled"
                            Battle of Britain: Never had so many owed so much to so few
                        "New birth of Freedom" (556)
                            This is a new definition of freedom, referring to slavery
                            It is one of the few references to slavery in Gettysberg
                    When all her greatness will break upon you
                    To the Workingmen of England
                        Interestingly, he does not benefit from this public announcement
                        He praisees the workingmen, as they are hurt by the blockades from the North on the South
                Week 12November 16th, 2020
                    November 16th, 2020
                        Douglas' speech
                            Abolition vs. emancipation - Abolition is absolute and legal
                            Reconstruction - why not rebuild, reconciliation, rebuild - connotes precision and architecture
                    November 16th, 2020
                        I recall that the US was the only nation to survive a civil war
                        Why are our great presidents wartime presidents? FDR, Lincoln
                        The 2nd Inaugural Address
                            Passive vs. active voice
                            In retrospect, it was an abolition war "All knew that this interest was, somehow, the cause of the war"
                            And the war came
                                Deterministic
                                As if the war is one of nature
                                    Determinism is like the House Divided speech
                                        He expects, not predicted, but "expects" conflict
                                            I do not expect the Union to be  dissolved  -- I do not expect the house to  fall  -- but I  do  expect it will cease to be divided.  
                            Neither anticipated that the cause of the conflict might cease with, or even before, the conflict itself should cease
                                Nobody wants the war, but they got it
                            Distinguishes the will of God from the will of the people
                                Neither wished for the war, but the war came
                                "The prayers of both could not be answered; that of neither has been answered fully... The Almighty has His own purposes"
                                Follows the Meditations of the Divine Will
                                Thurlow Weed
                                    People don't like being told there iss a difference between the Almighty and God
                            Lincoln recounts history
                            Paragraph on "One eight of the whole population were colored slaves"
                                "Fondly do we hope—fervently do we pray—that this mighty scourge of war may speedily pass away"
                                    There is a great sense of helplessness, or lack of control
                                        We do not pray that we may leave this war, but for this war to leave us
                                    Implies a sickness, affliction, punishment
                                    Like a whip — this suffering is analagous to the suffering that we have inflicted for hundreds of years
                                        The blood of the s word is paying for the blood of the whip, in many ways, their punishment is the same  
                                        The scourge of the Egyptians passed over the Jews
                                We submit to the will of God. We are at the mercy of God
                                "Yet, if God wills that it continue, until all the wealth piled by the bond-man's two hundred and fifty years of unrequited toil shall be sunk, and until every drop of blood drawn with the lash, shall be paid by another drawn with the sword"
                                    Shall the blood of conflict balance with the blood of slavery
                            There's a strong equation of justice and abolition, and Lincoln is able to say this indirectly without explicitly saying so in this paragraph
                            Biblical allusions - "Judge not, lest you be judged"
                                We must not judge each other, because we are human, and all humans are born evil who will commit sins
                                We must not judge each other, for God will judge us
                                God has punished us
                            Last paragraph
                                To care for him who shall have borne the battle, and for his widow, and his orphan
                                    The soldier is symbolic, first referred as living, then referred as dead
                                To do all which we may achieve and cherish a just, and a lasting peace, among ourselves, and with all nations
                                    Things we have done or achieved will be doing the cherishing
                                    Cherishing is often spoken in active voice
                            Thurlow Weed
                                First time he refers himself as a writer
                                    "Thank you for yours on my little notification speech"
                                "It is a truth which I told needed to be told; and as whatever of humiliation there is in it, falls most directly on myself"
                                    The most humiliation is born on himself
                                    Interpretation for how he could feel humiliated
                                        He helped bring on the war, from the House Divided Speech, in which he said war was inevitable
                                        He professed too much of his anti-slavery stance
                Week 13 November 30th, 2020  
                    November 30th, 2020
                         An 1876 speech given by Frederick Douglass at the unveiling of the Freedmen’s Monument in Lincoln Park, Washington, DC.  | DPLA  
                            Weareatbestonlyhisstep-children;childrenbyadoption,childrenbyforceofcircumstancesandnecessity.
                            He tries to ensure that he is not worshipped, but is respected as a human
                        Despise vs. hate: you cannot despise something that is equal or stronger to you
                            Despise is contempt, as to something that is smaller or worthless
                            You cannot despise slavery because it is so strong and enormous
                            Do not stray away from the strong word
                        Using because instead of as
                            Because is not ineloquent
                            "As" is reserved for creating parallelism
                        Because of vs. due to
                            Due to tempts you to create a dangling clause, but because of simply means "by cause of"
                            Example:
                                Due to police action on high street, my paper will be late
                                My paper will not be late due to police action
                                My paper will be late because of police action
            Life
                
                Week 1
                    Welfare hedonism↔well-being is only in absence of suffering and presence of pleasure
                    What makes hedonism interesting↔Pleasure is the only good
                    Psychological hedonism↔everyone's goal is to minimize suffering and maximize pleasure
                    Ethical hedonism↔everyone should minimize suffering and maximize pleasure
                    Quantitative vs. qualitative hedonists↔units are the same versus lexical inferiority
                    Mental state theory→happiness is from the mind
                        businessman example→happy mentally, but everything is going wrong
                    Preference theory↔you have preferences and are satisfied through fulfilling your desires
                        restricted preference theory→this only applies to certain preferences
                            example→I'm not satisfied that my preference for the number of atoms in the universe is correct
                    Intrinsically vs. instrumentally good or bad.
                    The experience machine
                        generally proves that most people are not→hedonists
                    Value lexicality
                    Our evaluation/valuing of life is not of truth, but meaning
                    September 10th, 2020
                        Hume and Rousseau argue that you feel good from helping each other (utilitarian argument)
                        The Republic: most people who are given a switch to kill someone and nobody is looking won't pull the switch
                        Keep in mind the difference between normative and positive statements
                        Hobbes: the idea 
                        Bentham, modern utilitarian
                        The Game by Terry Schott
                        Week 2
                            Contradiction of courtship (Pinker, Fools for Love)↔flaunt your desire while playing hard to get
                            Klein, the Mating Game
                                behavioral scientists, why love came to be, cheating, extra-pair copulation in both males and females in short-term relationships
                                Attribute points experiments→both men and women prioritized physical attractiveness for short term, but men stayed with physical in long term and women for person
                            Vellemin, Beyond Price
                                The distinction between what made you fall in love vs. what made you stay in love/makes love valuable→attachment vs. love
                                Benevolent affection→is not necessarily romantic
                                Love is the desire to be valued singularly→we refuse to compare to with other individuals
                                Kolodny argues↔we love because of a person's special relationship with us
                                    the author disagrees because→this is egocentric
                                Iris Murdoch says that “love is the extremely difficult realisation that something other than oneself is real”
                                    Murdoch’s description of love, as the realization that something is real other than oneself, may seem to imply that loving oneself is either unavoidable or impossible
                            Hurka
                                we love people due to special experiences
                            Nozick, Love's Bond
                                the defining characteristic of love→your well-being is tied to someone else's
                                    when someone you love is hurt, you are hurt; when they are better you feel better
                                infatuation and its potential to transform further
                                we, the melding of two personalities
                                    men may be more likely to put "we" inside their circle, while women put their circle under "we"
                                being loved for yourself versus something else
                            Love is a difficult process of seeing the personhood of another
                            Discussion
                                My argument on love
                                    position→Love, or rather the pursuit of being valued singularly, is practically impossible. It is impossible to prevent oneself from comparing an individual to another, and in doing so one may find a more suitable partner.
                                    counter position↔There is only one counterexample required to refute  this claim. One could simply provide an example of two objects which  are superior to each other in different categories. Comparing them would  be foolish given their different classifications.  In this regard, they  are valued singularly within their respective classifications.
                                Is you yourself in its entirety attached to the mind and not the body?
                                Romanticism as a proof for dualism
                            Mate choice↔men and women choose on "generally agreed upon mate value", but almost all on physical attractiveness (Hurrydate, behavioral psychology)
                            Hagel, what does it mean to be a person?↔To be a person is to be recognized as a person by another person
                            Reverse experience machine↔what if, instead of the world being entirely simulated, you simulate? That you signal that you are smart, whereas you actually are not
                        Week 3: Friendship
                            Telfer
                                The three requirements
                                    Shared activities
                                        the shared activity criteria is too weak
                                    Passion of friendship
                                        there should be some type of affectionate regard between individuals
                                        distinguish affection from benevolence and sense of duty
                                        desire for company
                                    Acknowledgement of the fulfillment of the first two
                                    mutual concern
                                        Common knowledge↔you know it, I know it, you know I know it, I know you know it, etc.
                                        Is Common knowledge required for mutual concern? As in, do both parties need to know that they have mutual concern?
                                        Is it Common knowledge required for fun? As in, do both parties need to know the other is having fun?
                                Mutual knowledge vs. common knowledge↔they both know A vs. they both know that they both know A
                                Aristotle's friendship↔men must be virtuous/good, as they must care about someone else's well-being
                                    we care about friends 'in themselves' rather than changeable details
                                Duty bound relationship?
                                    You can argue utilitarian, you should duty for the benefit of both
                                Friendship is life-enhancing
                                    Increases our opportunity to emotional range
                                    Enhances our activities
                                    Enlarges our knowledge
                            Thomas, Friendship
                                Love is present in deep friendship
                                Flow of information and self-disclosure both ways, not like a therapist which is one way
                                Role-playing, social norms
                                Companion friendship
                                    Susan's explanation to Mary about her romantic affinity to Mary's husband
                                    An outside observer just sees formal interaction, but Mary as a confidant sees that she actually is attracted to him, revealing something otherwise wouldn't be known
                                    Companion friends are integral to each other's lives through choice and mutual love
                            Aristotle
                                Aristotle's 3 kinds of friendships
                                    It's advantageous to you to be friends with them
                                    Purely for pleasure
                                    Ideal, beyond utility or pleasure
                                        Good friendship requires good people similar in virtue
                                They help us learn more about ourselves↔self-knowledge
                                Features reflect one's love for oneself. These are features:
                                    Virtue
                                    Goodwill
                                        Goodwill ≠ Friendship
                                    Concord
                                Justification of Friendship↔Friends are not needed for happiness, but are
                                    The greatest external good
                                    Encourage virtue
                                    Realize human capabilities
                            You can get friendships where you care about someone from an initially superficial (for your own benefit) relationship
                                Playing tennis for health, but then enjoy it example
                            Kant
                                Two motivations to action of man↔Self-love, and love of humanity
                                Self love has no moral merit, whereas love of humanity is most meritous
                                Self-disclosure http://onemvweb.com/sources/sources/self_disclosure_friendship.pdf
                                    Do not disclose too much
                                        "Kant also mars his otherwise appealing picture of self-disclosure in friendship with an admonition to beware of the ultimate untrustworthiness of friends, whereas Aristotle notes that friends develop trust only in time in the course of sharing activities together"
                            Is shared disclosure a prerequisite/requirement or feature for friendship? I have deep friendships from friendship
                            Maximizing vs. Satisficing↔go for the very best vs. go for good enough
                                Going from top down to bottom up
                                If you're a satisficing, why would you want more? As long as I hit my floor I'm happy
                                Maximizers often adopt short-term satisficing strategies because seeking maximizing is costly
                            Discussion
                                My argument on friendship
                                    position→Friendship is mutually beneficial. That is to say, both partners of a friendship benefit from it.
                                    position→Common knowledge is a requirement of friendships. That is to say, to be friends, both partners must recognize their relationship as friendship, and be aware that the other partner also considers their relationship as friendship, be aware that the other partner is aware of that consideration, ad infinitum.
                                    counter position→There is only one counterexample required to refute this claim. We seek to provide an example of two friends where the fact that the two are friends is not common knowledge. That is to say, they may both consider each other friends, but are not aware that the other person considers them as friends, etc..
                                    Let us adopt Aristotle's kinds of friendship as a definition for friendship. We seek a relationship satisfying the above conditions that is also capable of fulfilling, at the very least, Aristotle's first kind of friendship (friendship of pleasure).
                                    Consider two friends where the fact they are friends is mutual knowledge, but not common knowledge. They both consider each other friends, spending time together out of self-interest and the pleasure they derive from each other. However, while the two are friends through Aristotle's definition of "friendship of pleasure", they never disclose to each other, verbally or implicitly, that one considers the other a friend. The existence of this counterexample refutes the above position.
                                Exegesis vs. systematic philosophy→Systematic looks for truth, exegesis looks at what people were thinking or meaning
                                    Exegesis
                                Anjali: shared activity is a requirement for friendship
                                    Counterexample: two audience members both admiring different performers have a shared activity and are friends.
                                        Anjali's response: common knowledge requirement?
                                        My response: shared activity is a requirement but not the only requirement
                                Alin: friendship should have common knowledge of each other as a person, not necessarily that each person regards the other as a friend
                        Week 4: Children
                            Dan Gilbert, Does Fatherhood Make You Happy? And the Joy of Children
                                The only symptom of "Empty Nest Syndrome" is more smiling
                                    A very different story between the narrative and the actual measure of happiness
                                Spending time with kids is equivalent in happiness to vacuuming
                                98% say it's worth it
                            Evolution Biology: Gene that makes you delusional for having children is important for reproducing, as opposed to one that makes them not reproduce (Shelly brings up)
                            Babies are bad for marriage
                                Cowan's study of 96 couples, four different pathways that couples take in deciding to become pregnant and carry the pregnancy to term. First are couples who agree about when to begin trying to become pregnant (about half of their sample). Then there are the couples who "find themselves pregnant" and decide to "accept fate" and go ahead (about 15%). Another set of couples (about 20% of the sample) are still ambivalent when they reach the 7th month of pregnancy. Finally, for some couples who are at serious loggerheads about the decision, one spouse agrees to become a parent only because the other threatens to go it alone (about 10%)
                                Average decline in marital satisfaction was almost completely accounted for by couples who (1) no planning; (2) ambivalent late in pregnancy, or (3) disagreed about having a baby but went ahead and conceived without resolving their difference
                                Half of planners were happier 
                                Half of planners were happy
                            Department of Agriculture
                                Average cost is about $233,610; $170,000 for lower income and $370,000 for higher
                            Pinker's How the Mind Works
                                About 50% of personality is genetic from birth
                                As little as 5% of personality is from parents raising people!
                                    Identical twins raised separately still end up being very similar in personality
                                    Adopted siblings raised together are as different as two people plucked from the population can be
                                Parents influence kids most at birth after conception (50%) but only 5% after
                                45% is unaccounted for, could be life events, etc.
                            Jeanine: What about pride? We haven't covered the pride we have for our children in instilling in them values
                                My (Braden's) response: Pinker's paper suggests 55% or less of our children's development is from our upbringing. Are we in some ways delusional in using this as a justification for children?
                                My response in response: You can be prideful in being the majority, >50%, and the majority stakeholder.
                            Questions
                                International differences in happiness? Income disparities
                                    We have an American-centric study, similar results in UK and Scandanavia
                                Icelandic parents who aren't married?
                            Discussion
                                My argument on children
                                    position→Parents often cite how proud they are of their children when their children achieve great things. Should this pride in their children also extend towards themselves, it is justified. Parents can and deserve to derive satisfaction from the pride in their child's success due to their personal role in their development.
                                    strongest counterargument→As little as 5% of a child's personality is determined by parental influence. This is supported through studies: identical twins raised separately have similar personalities, and adopted siblings raised in the same household are often as different as two people from the population can be. Parents shouldn't be proud of themselves, as they do not have nearly as large a role in their child's development as they likely suppose.
                                    response→About 50% of personality is genetic from birth. Even if you don't add the 5% of the counterargument to this figure, this means that the parents are the majority stakeholder in their child's development ever since the child is conceived. Additionally, the counterargument makes the assumption that you must know the share of your contribution to be proud of your children. In the same way that citizens can be proud of their country constructing a beautiful landmark, one does not need to know what "percent" or share of something of their contribution to be proud of something. In fact, one does not even need to be the majority stakeholder to derive pride: simply seeing any positive effect from their effort or participation can be sufficient to experience pride.
                                Parents feeling proud of the action, not the achievement
                                    Baseball achievement: Feel pride for driving, etc.
                                    If successful, then my parents are proud
                                        inverse→if not successful, my parents are not proud
                                        converse→if my parents are proud, then I'm successful
                        Week 5: Achievement
                            Singer's Living to Some Purpose
                                he argues↔If it doesn't have an objective or actual achievement, it doesn't add value to your life. We decide, it is not subjective
                                The two possible motivations of Sisyphus (Achievement vs. Process)
                                    Push different stones to the top as to make a temple
                                    The gods have imbued him with a fierce desire to do what he was condemned to do - push stone
                                Objectivist vs Subjectivist
                                    Objectivists 
                                        finds meaning through→presuppose objective values which are good, such as creation of great works
                                        Push different stones to the top as to make a temple  
                                    Subjectivists
                                        finds meaning through→internal desires, and motivation. Anything can be motivational, not necessarily objective. Meaning is subjective rather than objective
                                The fifties had low satisfaction among housewives. The Feminine Mystique
                            Branford concludes that accomplishments must be difficult
                                Picasso example: what is easy for him can be an accomplishment for us because of its difficulty
                            Lowercase achievements vs. upper case A achievement↔Capital A achievements are tangible and meaningful
                            Achievement
                                Objective vs. Subjective
                        Week 6: Career October 6th, 2020  
                            Gilbert, Super-Replicaators
                                Idea and gene replication: ones which enable their own transmission are selected for
                                Super replicators, super-replicating false belief
                                Belief-transmission, and some things about happiness just simply aren't true
                            For the Love of Money (The New York Times)
                                A Wall-Street dude from Columbia with a rough childhood and life - drugs, alcohol, etc.
                                Recognized his pursuit of wealth was an addiction, like drugs and alcohol
                            Being rich wrecks your soul. We used to know that. (Washington Post)
                            Doing the Math to Find the Good Jobs (The Wall Street Journal)
                                https://remnote-user-data.s3.amazonaws.com/Mw8JSaNEAzOMh2kLPVAEHCXFK-pm43dcShVLHUUptCpgDnpZ52r2NzIsj_OAc_caGVlny8iopAuvg705qksVasc_hSzChTyXVJwe7g0nlIx9psKJDyCcHQi0ZdKmr1Vr  The Case for Working With Your Hands
                            The Case for Working With Your Hands (The New York Times)
                            If you had all the money in the world, would you still work?
                        Week 7: Education
                            What doesn't stick to us is knowledge, but skills
                            Discussion Questions
                                Skills for writing - shouldn't we have an email class? Negotiation/public speaking?
                                It's important to learn applicable skills
                                Is there an intrinsic value to pursuing truth and/or knowledge
                                Given finite resources, we cannot pursue all possible goals
                                    I wrote the EXACT same thing in my essay!
                                Aristotle - Is someone brave but never has the opportunity to display courage. Are they really brave?
                                    Is there value in having a skill but never applying it? Or is it through a applying a skill that one gets value?
                                    Could you argue that one's capacity to do something makes someone better than not having the capacity to?
                                    Many people do not realize their capacity until they apply. For example, you don't know what you don't do.
                            Education allows us to create the person we wish to become
                            Aristotle: everything has a nature, and the goal is for something to fulfill its nature
                            Discussion Questions
                                The tragedy of Socrates - his student invaded Athens
                        Week 8: Truth October 19th, 2020
                            Jennings, How Often Do We Lie
                                Everyone lies and / or fudges
                                Matrix test: fudged from 4 to 6, when stakes raised from $0.50 to $10, fudged from 4 to 5
                                    More money made it more difficult to justify cheating
                                USC psychologist Jerald Jellison determined that people are lied to about 200 times a day.Charles Honts, a professor of Psychology at Boise State University and polygraph expert believes that humans lie in about 25% of their social interactions.
                            Dworkin, Lying Around
                                Why is it wrong?
                                    Because it is intrinsically wrong. This is philosophyspeak for “it’s just wrong, wrong because of what it is, wrong by its very nature.” 2.   Because it produces bad effects, i.e. harms social trust, damages various kinds of relationships—personal, professional, political--- leads people to harm based on false information, etc. 3.   Because lying cannot be something that we all do. If we all did it, nobody would believe me when I lie and so it would be pointless to lie. But if we all cannot do it, why am I allowed to do it and not you and you and you... But then we are all doing it. 4.   Because it is an assertion of what you believe to be false and this violates a convention of language. 5.   Because of the intention behind the lie, i.e. to deceive another person. 6.   Because telling a lie is a violation of the autonomy of the hearer. It is an exercise of power over another rational individual—all the more insidious because it sometimes is undetected. 7.   Because telling a lie treats another person as a means to some end. This is true even of lies told to benefit the hearer. In such case he is treated as a means to his own good. 8.   Because telling lie is a violation of a duty to yourself to be truthful. 9.   Because a principle forbidding lying would be agreed to by all of us if we were trying to find a principle to regulate our common behavior that we could all agree to.
                                Always, sometimes, never lie
                                    Never lie
                                        Kant says, "To be truthful (honest) in all declarations is therefore a sacred unconditional command of reason, and not to be limited by any expediency."
                                            Categorical Imperative↔You are not permitted to lie (in these circumstances) unless everyone is entitled to lie. And if everyone is entitled to lie, and everybody knows this, then what you say will not be believed. And if you are not believed, your lie will not save your friend. So universalising your act of lying makes what you are trying to accomplish impossible, i.e. self-defeating. So we should never lie.
                                                We are not allowed to lie to save a life
                                        Constant draws out what he sees as an implication of Kant's theory "that to tell a falsehood to a murderer who asked us whether our friend, of whom he was in pursuit, had not taken refuge in our house, would be a crime.”
                                Discussions
                                    Is intent to deceive a definition of a lie?
                                    What if you're asked to lie? And so the intent is revealed before you even speak.
                                        Lier's club. They tell "whoppers", and nobody will be 
                                        Does a lie have to have a falsehood condition? Our poll was 50-50
                                        Is a lie to save someone's feelings morally justified? Poll was 90-10
                                        What if you were to reverse your experiences through a hypnotists, and then believe everything you say even though you're lying.
                                            Flashbulb memory↔Recollections are completely wrong
                                    Armando
                                        Is the value of knowledge in the potential of being applied or in actual application?
                                            There are many things I know which I will never apply
                                            There are some things I will succeed in, or apply, but never know
                                            Platonic Problem: What happens if you succeed by accident? Imagine you are really good at something, applying, but do not know? Is there value when there is no knowledge?
                        Week 7, Morality
                            October 27th, 2020
                                Singer argues that you have an obligation to spend your money in the best way possible
                                Colson, The Volunteer at Auschwitz
                                    The priest volunteers to sacrifice and trade places with another for starvation
                                Tolstoy, Where Love Is, There is God
                                    Grandma and the kid who stole an apple
                                    "Oh Granny, that is our way—but that is not God's way. If he should be whipped for stealing an apple, what should be done for us for our sins?"
                                    The granny and the kid walk together
                                Singer, On Giving
                                    Bill Gates
                                        Attacks that he is donating to improve his image tells more about the attackers rather than the attacked
                                        When you see a wealthy billionaire donating, it may incentivize you to also wish to donate. But when you view it as a selfish gesture, you are excusing yourself from this obligation
                                    People do not fully own their success; up to 90% of success is from social capital
                                    Philanthropists are not tied down by lobbying, etc.
                                    While we may applaud Gates and Buffett, it is alarming that our gov allows the fate of millions to rest on the decisions of 2 or 3 private citizens
                                    Americans privately give more per capita to international causes more than almost any other nation
                            Discussion Section
                                Written Position
                                    Position: Lying should be immoral under all circumstances, not just on a moral but practical standpoint. From a consequentialist view, this would, on average, enables a lie to gain utility most effectively. If one truly felt the need to lie, say to save a life, this would ensure that the lie is most likely to work.
                                    It is possible for something to be both immoral yet practical in some cases. This is what this position argues is the case with lying. There is a point in which an individual may decide it is worth it to lie, to save a life, etc.. In the case that one does, one would wish that this lie is most effective. This would most effectively secure the desired outcome.
                                    The reason why lying often works in the first place is due to the expectation that one does not lie. A lie's effectiveness is correlated to the degree the recipient does not expect to receive a lie. This expectation is strongest under the categorical imperative condition—that it is immoral to lie, and one should not ever lie. The breaking of this condition and therefore expectation enables lies to be more effective.
                                    To say that lying is ever morally permissable to lie sets a dangerous precedent. At what what benefit, or cost, or point is it suddenly permissable to lie? To save a life? To save someone from harm? Generalizing this, drawing the line of whether to lie or not may be obscure and self-serving—anyone can declare that their lie was justified. In this case, the effectiveness of lying would be reduced. If lying should be morally impermissable, it would be of a greater effectiveness than previously mentioned.
                                        To clarify, we declare that lying is never morally permissable, but may be, under certain conditions, practical. This is subjective and depends on the person.
                                    CA: There are situations in which lying would be used to secure negative utility—fraud, theft, and many modern crimes are accompanied with lying. If this view is truly rooted in practicality or consequentalism, then it is not safe to assume that lying will be used only in cases to "save a life". Most likely, there will be immoral people who will take advantage of the immorality of lying to cheat others.
                                    Response: It is true that a lie under the CI condition could be used to secure negative utility more effectively. The real value of this position is not utility, but moral agency—that is, one's ability to affect change through their moral character.
                                    Possible CA to above response: The above response makes an invalid link between moral agency and physical agency. The fact that one's choice doesn't affect one's surroundings as effectively because lying is not immoral does not diminish the moral agency one experiences. In the above condition, one experiences the same degree of moral agency, whether the lie is effective or not.
                                    A different possible response to above CA: We can also say that it is an imperative to act positive utility, but that's a different story.
                                    I ran out of time to polish as I have another Midterm (this time in Computer Science) tomorrow haha
                                Lying should be done on the other person’s desires rather than the lier’s interpretation.  
                                The dying husband scenario: what if the wife wanted her husband to die a painful death?
                                Lying to serve someone’s self-image. It’s obvious that this is a subjective of whether it is moral or not moral to lie.
                                Just because the outcome is positive does not mean its’ justified. Say I want to assassinate someone, miss and end up killing someone who was going to commit genocide. Just because the action’s outcome was positive does not mean that it is justified.
                                Lying is immoral because it creates an aberrance in the knowledge of the world. We have a moral obligation to advance the search of truth of humankind in this world. This absence of truth has the potential to lead others astray. It is this tinkering with the general knowledge of  the world that is immoral. That has the potential for bad outcomes.
                        Week 10
                            Three Trains of Thoughut
                                Strong Morality
                                    It could be rational to act morally
                                Moral Skeptic - Morality cannot be rationally defended
                                    Moral reasons are not genuine reasons in their own right
                                    Nozick, from Giving Everything Its Due
                                Morality has a place, but it's not the only metric
                            Nagel, Right and Wrong
                                The Golden Rule, Stealing an Umbrella
                                The basis of morality is that good and harm to particular people is good or bad not just from their point of view, but objectively
                            Discussion 
                                Mother accidentally kills the child
                                Tips
                                    Theorize
                                    Understand the difficulties of your position
                                    Counterarguments should be "How do you answer"
                                    Recognize the nuances and difficulties
                        Week 11
                            May, The Weight of the Past
                                Snowden and NFL players have peaked
                                We must not look at things this way, however
                            Shafer-Landau, Ten Arguments Against Moral Objectivity
                                Objectivism requires absolutism
                                    Objectivity requires absolute moral rules, but there are none
                                All truth is subjective
                                    Argument
                                        There are no objective truths
                                        Therefore, there are no objective moral truths
                                    Argument fails because Premise 1 is either true or false, but can't be true
                                Equal Rights Imply Equal Plausibility
                                Moral Objectivity Supports Dogmatism
                                Moral Objectivity Supports Intolerance
                                Moral disagreement Undermines Moral Objectivity
                                Atheism Undermines Moral Objectivity
                                The Absence of Categorical Reasons Undermines Moral Objectivity
                                Moral Motivation Undermines Moral Objectivity
                                Values Have No Place in a Scientific World
                            Being healthy doesn't mean you have everything, not being healthy means you have nothing
                            Is there a value in well-roundedness?
                                Hurka argues there is, though Kagan does not
                                10xer. People scale but Talent Doesn't
                                If given the choice to invest equal amount of goodness or excellence, is it better to distribute it in many lives or only one
                            Horatio Alger vs. Alger Horatio. Area under curve. Is improvement valuable?
                                The story
                                    Horatio Alger story↔starts out with nothing, works up to everything
                                    Consider the "Alger Horatio" story↔starts out with everything, works down to nothing
                                    The area under the curve is equal
                                My proposition: the value is not only dependent on the area under the curve, but the absolute value of the end of the function
                                    Two considerations
                                        Consider one where area under curve is equal but end points are different
                                        Consider one where end points are equal but area under curve is difference
                                Stable life vs. upwards life. Area under curve is equal but endpoint is higher
                            Stable life vs. a Z life? Area under curve is equal, endpoint is equal
                                I want to experience the whole range of emotions
                                    I want to suffer and experience the full range of emotions
                                    Life is suffering. Would I want to suffer?
                                    This is because of curiosity, and humans are inherently curious
                                Humans are inherently curious
                                Improvement is inherently alluring because it makes a better story. Humans are inherently storytellers    
                                    As a subset, Zig Zag is more desirable because it makes a better story
                                    Time is forward facing, and so since it is one direction, we prefer good to be ahead and bad to be in the past
                            November 12th, 2020
                                20th century analytical philosophy
                                    What separates truth from opinion is verifiability (Popper)
                                        Truth is something we can verify
                                        Anything not verifiable is bullshit
                                        Early 20th century, verificationists and logical positivists 
                                        Pitfall: if true, it disproves itself. If false, it is still false
                                    Truth is the convergence in the future (Charles Peirce)
                                        Getting the cart before the horse
                                        We will believe it because it is true
                                        It is true because we will believe it
                                Popper and Peirce -> Truth is verifiable (Popper) and will be verified (Peirce)
                        Week 12
                            Some things are reasonably true, not just opinions
                            Taylor, The Meaning of Life
                                Sisyphus' existence is meaningless, would have meaaning if there was a point
                            Nagel, The Absurd
                                Assertions that life is absurd are false
                                    "Nothing we do now will matter in a million years"
                                        But by the same token, this means nothing in a million a matters. Then this statement doesn't mean anything
                                    "We are all going to die", so all chains of justifications don't matter. If the end result is death it doesn't matter
                                        Life does not consist of a sequence of activities in which each has a purpose later in the sequence
                                        Aspirin is taken for headache without any further justification
                            Sarte's Case: The debate about the join the Resistance or stay with your mom
                                There are no moral 
                                Is morality addable? If the good of staying with mom outweighs the bad of not joining the cause, or vice versa
                                    Is 1000 people dying and 1001 people being born equal to 0 people dying and 1 being born
                                Calling this a dilemma because either way, you are wrong
                                    But couldn't this be overgeneralized and say dilemmas happen all the time
                                OR, say that both are morably permissible
                                Negative utilitarianism
                                    Minimize suffering, suffering is lexically inferior to pleasure
                                    Generalizes uncontrollably: don't have kids, since they'l suffer. We should try to all kill ourselves
                        Discussion
                            A sine line is better than a flat line (Could be my essay)
                                Humans naturally want to experience the full range of emotions
                                    Pixar movies
                                Why do people want to live lives that are story-worthy?
                                    Life is always changing, and we would want the change to be good or bad
                                    Prompt: When given the choice between a storied life and non storied life of equal utility (literally the same events but ordered), one should choose the former. There is inherently better goodness.
                                        What gets lost in a life that (even if you tried) you couldn't narrate
                                    But we want change that is bad. What makes a good story?
                                        We do not want only good change. We want change that is for the better  
                                        The justification is what matters. It is not a life where there is no suffering, but a life where the suffering is justified  
                                        Not the content, but the context, that gives it value. The context that negative content is worth it in the end
                                Humans are naturally gravitating towards stories
                                    Why else are we buying Horatio Alger stories and not Alger Horatio stories?
                                        You see stories that begin from nothing to everything, but not everything to nothing
                                    There is something inherently alluring in improvement to the human psyche
                                    Fallacy: what we observe doesn't mean it's what we desire
                                Humans are inherently curious
                                    We want to experience the full range of emotions
                                To experience happiness, you need pain to make it more meaningful
                                    2 distinctions: We could get bored of pleasure, or 
                                    Do not equate happiness to utility
                                There is something inherently good in improvement
                                Humans are always in up or down. There is no such thing as a flat line
                                We get bored of pleasure
                                
                        More thoughts on the essay
                            We prefer the pain to be behind us than ahead, so there's a desire for improvement
                    Week 13
                        The meaning of your life is defined by your problems, not your successes
                        Epistemology↔regarding to knowledge
                            epistemologically superior→better oriented towards truth seeking
                            Cosmological perspective is epistemologically superior to local/relative perspective
                        Metaphysical↔the essence of something
                        The problem of induction
                            Hume
                        Sellers
                            The synoptic vision
                            Things hang together
                        Two best advice
                            Clarity
                                It is okay to meander
                                Do not obfuscate with big terms, they are not the prerequisite to a good paper
                            Ambition: Prefer depth over breadth
                    Discussion
                        Michael: A soldier and a peacemaker have different meanings of life
                            You cannot know something until you experience it
                        Me:  The experiences of a soldier and peacemaker are different, and so they have different meanings of life. However, I contend that if we all experienced all the possible experiences of life, we would all arrive to the same conclusion. The meaning of life converges
                        Anjali: What about dying? What if we found out that through dying that death is way better than living
                        Me: This is interesting point. To imagine that the only way to converge to the meaning of life is to leave the realm of life and enter death
                        Armando: Dying vs. ceasing to exist are not the same thing
                            Dying could send you to the library
                            Ceasing to exist is conceptual
                
                
            ShARE
                MECE↔Mutually exclusive, Collectively exhaustive
                    in practice with a problem, you→cut up into multiple sub-problems, ideally with little overlap
                80-20 Rule
                    https://remnote-user-data.s3.amazonaws.com/dpBxsgy50l92GGNdhTS62sNPAh084qoJ3C4caBwEn0xLcMQ7ZhWGbRd8Y7UbqMR6VJ1G3ybOJQbwfOc5iuLsheagugsNAdh6x8siypA6wjDE9SaAtMtCs41XeZZ6n-VJ  https://remnote-user-data.s3.amazonaws.com/ZTVH1o2q82o2IQbBWIhroJsLgrZEi_ClosVJp43VaZ5MYBA6KY1mRIefSLg5ETZtMVR7HArDwvLbsDtydM6uQ2JdMU2cHl1XoFOinoIeEhEo4LLLcuet_AdhXbq4stls  
                    Low-hanging fruit↔An initiative which is easy to do and yield high impact
                8 and 3
                    why 8 and 3→8 steps, 3 times
                    steps
                        Define the issue through Mece  
                        Set a hypothesis and initial story
                            https://remnote-user-data.s3.amazonaws.com/JIxIpGj92r6-wbPWK_00v2xZdVvB-K6suUvDThvqeMjTjkK2XyGkN4SLFMT7RGAUnOe6Uqx2YnRWjI94POqalnKuFUh_KAn2AOkk74-uxUe-4eA8gT7ZKownyU3YOFlR  
                        Define analysis
                        Prioritize and plan
                        Research
                        Distill your message
                        Check your messages
                        Reformulate your story
                Powerpoint
                    advantages
                        Easy to share
                        Easy and fast to go through
                    common mistakes
                        Focus on making slides pretty
                        Only 3-4 points
                        Used as a text placeholder/notebook
                    methodology
                        three components  
                            
                        Well-structured
                        Self readable
                    three components
                        Message
                            crisp→short and concise
                            fits within  2 to 3  lines 
                            https://remnote-user-data.s3.amazonaws.com/iemK51HMA5RrDUSID-xznsBT5iBE1vEoA5ewhHkVP4IRj2cKq9p6zgIkmEsEPoZNvFndYcwmmMzy1AJHlNL0KuRWJAcPIMktvSXHWBGKZsCWYcDWBOJNg32sON8kqYTN  
                        Evidence
                            well-structured to support your message
                            do not forget unit, title, definition of chart
                            https://remnote-user-data.s3.amazonaws.com/rnlTJRwK22NPAUK-MwrwC91GO463bfvuzdkbUXrthjjCXn7bxzwe0VBaWr1mxemntRYUxUAAooPNVrnWeC6t9fEGIVdVes_Tkvp2Lc4T-WjLheVZVsdYrqe4Yr58kJww  
                        Source
                            strong and not fraudulent
                            https://remnote-user-data.s3.amazonaws.com/ALCCphoO3fzZOy_Md6jhOV8hXaz8LaK23HATDbWXqLzJxc6O1Bp7zhHMdj7MYBOX1SYAnDodcsyVRVnMzjqG3ShlqbVktLw7_vqbOyuRYVafbbW7lcBHRZSQLdU_QGCi  
                    Slide rules
                        Text and bulleting
                            https://remnote-user-data.s3.amazonaws.com/baSZr8XsjQqDkCHWB_VWOU3Tuid869kQYQGAYb3z3I0oWgGO-UBBFTqbAoh59EQ6sCshhzpmmRloHHttqC8IR6aGlPzzwry8v4JC7ibT8BSuhAqiU-Z1jM3qhPsu6dQB  
                        Graph
                            https://remnote-user-data.s3.amazonaws.com/rAj5IpaiRdnZbZtHGXngRjL8Soa2hqpTRXCxn42fvCT7d2gM5UsJShLntHzuH6YsSOhOrYLjMkW0q0JmByuYxt2R4yN0R6H2tNmCxPj04brebsdXoaaVErWaZ3196MSl  
                        Magic Tips
                            https://remnote-user-data.s3.amazonaws.com/u__hBNhjDbp8BdUk6SqP--DjS3R7Bc_6sT3dtMdJGMe2_k0q3AIZnKHebWuHzxMaLM8C6kcL-1wG3k6l11QSWrrFV2Uyljslu_YfDEDxNm7RJme7qyyip9rvgYbCLVAp  
                    Slide types
                        Basichttps://remnote-user-data.s3.amazonaws.com/IYKaG5_khafiH8McPTU2fMNt99FkLR4OgRBUvkcHvHhJfG28Fiy46HdBjKxDKispUoxMYzR94OYL42TDin0KpxO9XImSfffmr0pMcW4ZUuNcJQS8FDwcVi5X7C_Li8gw
                Types of Slides
                    Analytical Slide (aka chart slide)
                        Common mistakes
                            No clear label
                            No year for data
                            No units
                            Inconsistent decimal place
                            Formatting
                            Unnecessary elements
                            Wrong choice of chart type
                        Types of charts and their purpose
                            Bar chart↔For side-by-side comparison or change over time
                            Line chart↔For showing trends over time
                                Do not label every data point
                            Waterfall↔The cumulative effect of sequentially introduced pos/neg values
                            Clustered bar chart→https://remnote-user-data.s3.amazonaws.com/z9w8Op5WBBPLoiV-WfAXxZ2r-o4v4MJhbLP-ddGZv_MfTaCJvMSRbr6Dg7d4xhbUl-T8YtSuS8PzjYjTVH0Kia2DUd9nEp07Nf9HQeglCvGKXVgfG0mCk4hAgcLPqqvu
                            Use bubbles to make comments
                            Value Chain↔Chevrons show where value is added along the supply chain
                                https://remnote-user-data.s3.amazonaws.com/yywWZ45LAeBYciYzI4PyDZhBMf9e7nHoq5TDhaBPP1DtG6zhuxlehBOhSxrPq6ENSiyY825biK6WBp1J2rWtUnD2d9j_vTYd_PzkBbSSOX_RUTKISCQyYfR0J3wQNrQO  
                                    vertical form→https://remnote-user-data.s3.amazonaws.com/dP9fN5i9vm9XyaG7XCXcg6aanogTalFlg9UEwpKKA8Z1OP1ljySpNtH2bjNYHKfSmPPtXoOTWhutxLxmo0Kisn3ujotx82DtetQVhKr1AqyC9MQcmKRGuAczE2055Pwn
                                    feedback form→https://remnote-user-data.s3.amazonaws.com/OOLpu3rz-X6Lhx2cVKRixJ9PnrUhZl_XfHWlWEX_IYeabC67S20NHn2T8-mA8ncLRf-DdhEoHYKAsLDe7GxmKZK73l8oWDkAakb1BwiwfI_-HlsMTy1w3NTVF1HgY5Yq
            Chinese 110-120
        YUDI Finance
            Accrual Accounting
                GAAP (Generally Accepted Accounting Principles)↔Guidelines accountants use to prepare financial reports
                    revenue is “earned” by a company when it provides→a good or service
                    revenue and expense does not need to be incurred at the same time as cash is being received
                    for example, say Toyota buys $10MM in car parts from suppliers in 2020, but doesn’t sell the cars those parts were used to make until 2022. The $10MM expense will be counted on the Income Statement in the year→2022
                    Apple pays one of its software engineers a $300,000 salary in a lump-sum payment at the end of each year. Six months into the year, Apple has incurred $150,000 in expenses even though they have paid $0 in cash.
                    An industrial bakery buys $2MM in flour which it will use to make bread and pays immediately in cash. At the time of payment, $0 in expenses have been incurred. Over the next year, the company sells $5MM worth of bread, in which it used $1MM of the aforementioned flour. Throughout that year, the company has incurred $1MM of expenses associated with its flour $2MM purchase.
            Three major financial statements that are fundamental to financial analysis
                Income Statement:: Understanding revenues and expenses using Accrual Accounting #[[Accrual Accounting]] 
                    all listed items are↔taxable
                    general structure
                        
                        
                        
                        Revenue
                        COGS
                        Gross Profit↔Revenue - COGS
                        Gross Profit Margin↔Percent of revenue left after cost.Gross Profit / Revenue
                        Operating Expenses↔Anything not directly related to price of goods made
                            SG&A↔Selling, General & Administrative Expense
                            R&D
                            D&A
                        Operating Income↔Total earnings before tax and interest. Gross Profit - Operating Expenses
                        Non-operating costs↔Not reflective of operating costs. Lawsuits, sudden fires, emergencies, etc.
                        Pre-Tax Income↔All revenues and expenses except tax. Operating Income - Interest Expense + Other Income
                        Tax Expense↔Applied % tax to all previous items, because all listed items are taxable
                        Net Income↔Total earnings left for investors after all previous summed. The sum of all revenues and expenses
                        Interest Payments
                        
                    The income statement shows the revenues a company earns and the expenses they incur over a given period of time. Revenues and expenses are accounted for using the accrual accounting method. The sum of all these revenues and expenses lead to a figure called net income, which is a measure of profitability.
                Cash Flow Statement
                    purpose is to reconcile→the difference Net Income and the actual flow of cash
                    corrects for→depreciation/invisible costs and untaxed income
                    Cash Flow from Operations (CFO)
                        Net Income
                        ADD D&A
                        SUBTRACT Accounts Receivable because it hasn't come yet
                        SUBTRACT Inventory because increasing inventory means cash has flowed out
                        ADD Accounts Payable because we still have the money/haven't paid it out yet
                        Pattern Cis to  add  changes in liabilities and  subtract   changes in assets.
                    Cash Flow from Investing (in capital and other companies) (CFI)
                        Capital Expenditures (CapEx)↔PP&E
                        Purchase/Sales of Securities↔Selling/Buying stocks of other companies
                        M&A Activity
                    Cash Flow from Financing (CFF)
                        Equity Issuing/Buybacks
                        Debt Issuing/Repayment
                        Dividend
                    As we learned above, a revenue or expense on the income statement (under accrual accounting) does not necessarily align with an inflow or outflow of cash. Therefore, the net income figure at the bottom of the income statement almost never reflects net inflow or outflow of cash. The cash flow statement is used to reconcile this net income figure to a “change in cash” figure that reflects actual cashflow. In other words, it starts with net income and makes the appropriate adjustments so that we know how much cash entered/left the company in aggregate. Like the income statement, this is showing change over a given period of time.
                Balance Sheet
                    used as→snapshot of current assets, debt, equity
                    Assets, Debt, Equity Equation↔Assets = Debt (aka Liabilities) + Equity
                    Assets
                        Cash
                        Inventory
                        Accounts Receivable
                        Prepaid Expenses
                        Marketable Securities
                        Net PP&E
                        Goodwill↔Giving more than a company asks for when buying out and acquiring their assets
                    Liabilities
                        Accounts Payable
                        Deferred Revenue
                        Short Term Debt
                        Long Term Debt
                    Equity
                        Common Stock↔# Shares * Par Value
                        Additional Paid-In Capital (APIC)↔# Shares * (Share Price - Par Value)
                        Common Stock + Additional Paid-In Capital (APIC)→Total Cashflows from stock issuance #[[Additional Paid-In Capital (APIC)]] 
                        Treasury Stock↔Amount of money spent repurchasing shares
                            it's a Contra-Equity because↔increasing treasury stock decreases equity, there is less of the pie to be financed
                        Retained Earnings↔Sum of all periods' (net income - dividends)
                    The balance sheet shows a snapshot of company’s asset, liability, and equity items at a specific point in time (unlike the IS and CFS, which show change over a given period of time). 
                        The key accounting equation that defines the balance sheet is Assets = Liabilities + Equity
            Questions
                Basic understanding of each of the three financial statements and what purpose they each serve.
                How accrual accounting works and whether or not revenue is considered "earned" in a hypothetical transaction that we present you with.
                    revenue is “earned” by a company when it provides goods and services
                General structure of income statement (all listed line items and what each means).
                    --------------------- Portal ---------------------
 -- Avoided infinite recursion --                     
                General structure of cash flow statement; only need to know the three major sections, and a basic understanding of what each section shows (no need to know specific line items in each section).
                    --------------------- Portal ---------------------
 -- Avoided infinite recursion --                 General structure of balance sheet (the three major components); know at least two major items in each of the three components.
                    --------------------- Portal ---------------------
 -- Avoided infinite recursion --                     
                
            Week 1: DCF's
                DCF
                    Discounted Cash Flow (DCF) assumes that a company is worth the  sum  of all its future cash flows, discounted to the present to account for the time value of money.
                    DCF is an  intrinsic  valuation method, meaning it doesn't rely on the valuation of other companies.
                    Two parts: Explicit + Terminal Periods
                        
                    Steps for Explicit
                        Step 1: Project our FCFF
                            EBIT↔Operating Income
                            Find EBIT
                            Project Cash Flows
                            Project Change in Net Working Capital (Current Assets - Current Liabilities)
                            FCF = EBIT * (1-Tax Rate)
                        Step 2: Discounting Cash Flows
                            The discount rate used in DCF is the  WACC (Weighted Average Cost of Cpital)
                            WACC↔Cost of Equity * (E/(E+D)) + Cost of Debt * (D/(E+D)) * (1-Tax)
                            2a. Cost of equity
                                Cost of Equity is found using the  Capital Asset Pricing Model (CAPM)
                                Cost of Equity = R_rf + Beta * (R_m-R_rf)
                                    https://remnote-user-data.s3.amazonaws.com/PXv-2mK889ngAf4mBBBSkMRVSBj11HDv-SgPbaDXchSAiu5yeBZAZQX2wWraHZT_ppegf_VY5W-ZA1doYA8fgSMSuRnPCyW_gbb4UadW63LA0mP6TXBx-Qs2wab0PuZ3
                                     R_{rf}→ Risk-free rate of return
                                    Beta of the equity↔Correlation to the market
                                        What's the beta of a slot machine?→0. Because a slot machine is not dependent on the market.
                                    Rate of the return of the market
                                    “What does beta represent, in plain English?”↔The risk of the company relative to the risk of the stock market as a whole.
                    Steps for Terminal
                        Two methods: Perpetuity Growth Method or Exit Multiples Method
                        Perpetuity Growth Method↔assumes cash flows will continue until infinity, and will grow a low stable rate
                            FCF↔First Year Cash Flow
                            “What is the formula for unlevered FCF ?”↔FCF = EBIT * (1 – Tax Rate) 
                                + D&A
                                - CapEx
                                - Change in NWC
                            General perpetuity formula↔Present value = Initial payment/(Discount rate - Growth rate)
                            Terminal Value formula↔Terminal Value = FCF at T+ 1/(WACC-g) = (FCF at T)(1+g) / (WACC-g) where T is the number of years we explicitly forecast
                        Exit Multiple Method↔assumes that
                            Look at ratios that peer companies are being traded at, assume company will be sold at a  similar ratio  at the end of the explicit forecast 
                    
            Week 2: Private Equity
                Private Equity Firms
                    Private Equity Funds↔separate branches of Private Equity Firms, for legal reasons, vs. firms as the master branch
                    How they make money
                        Management fee↔Often near 2%
                        Carry↔Slice of profits, often after thresholds
                    Why is PE profit a lot
                    LBO↔Leveraged Buyouts - Acquire with lots of debt
                    Multiple of Money (MoM)↔How much we've multiplied our money before exit (New Equity/Old Equity)
                    Internal Rate of Return (IRR)↔Annualized effect of compounding interest rate
                        formula→(Original Investment) (1+IRR)^T=Final Value&
            Semester Review
                Enterprise Value
                Equity Value
                Comparable companies analysis↔Valuation based off metrics of similar companies in same markett
                Precedent transaction analysis↔Valuation based off past buyouts of similar companies
                DCF Basics
                    What are the basic steps of a DCF?→https://remnote-user-data.s3.amazonaws.com/pH1fIu4LUBShhh313BiFbIHL369h-DPvI-SOk1uxU0DdfVM1S9Vqs7LIETd-q5iNt2qIdaWYJ_o3sEhObgQQTjCSBOwoOgbGn-CK_CTXUn6trOFe5MHdMjh12vdcHhw2.png
                    What is the discount rate used? How is this calculated?→Discount rate is often from the WACC
                        https://remnote-user-data.s3.amazonaws.com/vPKcq9qA32YZtqzKiuMmJLZirrOvghtMoarCW0zUF_OLNcMa7-E-XwR1zwo1N-x9_YYzFlrquEd3vaQFC6bkRVnmYiOk78yE5pVdxU93gJyVwmYSWUFYH8rEJ4c_vuc2.png
                    What is the CAPM model for finding Cost of Equity?
                    What is Beta a measure of?
                    What sort of assumptions go into a DCF?
                    What are the two methods for finding terminal value?
                What is, and what drives, an LBO model?
            M&A Analysis
                What is M&A?
                What strategic and financial rationales drive M&A?
                How do we measure the impact of M&A on a company?
                How to do merger math (e.g. accretion/dilution analysis)?
                How do buy-side and sell-side processes differ?
        Alexander Hamilton Society
            September 28th, 2020  The end of history
                The End of History↔The idea that we have reached the ultimate form of government
                    description of history→linear progression
                Positive liberty vs. Negative liberty
                    Positive liberty↔Free from government
                    Negative liberty↔Liberty to rights, clean water, etc.
                originated from→Karl Marx
                separates liberalism from nationalism because→generally, liberal changes were driven by nationalistic pride/revolutions
                Hevel's belief
                    All human behavior in the material world is rooted in a prior state of consciousness
                    Yet another unfortunate legacy of Marxism is our tendency to retreat into materialist or utilitarian explanations of political or historical phenomena, and our disinclination to believe in the autonomous power of ideas
            
        
        
        Math 230
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
            
    Books
        Never Split the Difference
            Mirroring
            It seems like...
            Everyone wants to say no. Saying no relaxes you and invites critique saying yes does the opposite
            
            
        Skin in the Game
            Pilots and Plumbers vs. Economists and Restaurants―Darwinian evolution of self-selection vs. external selection
            Reverse Golden Rule
            Those who create risk should bear the risk―Hammurabai code is not about eye for eye, but reducing risk asymmetry architect who kills a person, etc.
    Calls
        Effective Altruism #[[Effective Altruism]] 
            Yale Effective Altruism Fellowship #[[Effective Altruism]] 
                CharitiesJune 17th, 2020
                    Four Charities
                        Demosquito
                        Deworming
                        Depression
                        Give Directly
                    When there is food on the table, there are many problems. When there is no food on the table, there is only one.
                    Pyramid Scheme, Noah Seth's point, damn we hit it off!
                        Noah--Braden you're too hard on yourself, you are way better than average
                    The whole idea
                    Time arbitrage, ceiling of $80 vs. floor of $20 to clean my email, we can both be happy with $50
                    Roast Nick Bostrom
                    What's your biggest problem in the world? What can you do about it?
                        EA is problem first, not solution first.
                            What am I good at?
                    Earning to give
                        Funding vs. talent constrained
                    1. Follow your problems, not passions
                        Daniel--The world orients us to be solutions first. You invest 15 years into a specific career. Problem first, second
                    2. Crowding out, comparative advantage, but the inherent unfairness of careers
                    
                    
                Animal Welfare | Factory FarmingJuly 1st, 2020
                     Why It's Time to End Factory Farming - Quillette
                        Think about the horses who were replaced by cars. Cars do the same thing horses do—they move people from one place to another—but without all the crap.
                        Farming is inefficent, at a ratio of ~1/10 
                        Factory farming: 99% in US, 90% globally
                    Equality for Animals?
                        Comparison to how slavery was treated as normal
                        We are used to regarding the oppression of blacks and women as among the most important moral and political issues facing the world today. These are serious matters, worthy of the time and energy of any concerned person. But animals? Surely the welfare of animals is in a different category altogether, a matter for old ladies in tennis shoes to worry about. How can anyone waste their time on equality for animals when so many humans are denied real equality?
                        This attitude reflects a popular prejudice against taking the interests of animals seriously - a prejudice no better founded than the prejudice of white slaveowners against taking the interests of blacks seriously. It is easy for us to criticize the prejudices of our grandfathers, from which our fathers freed themselves. It is more difficult to distance ourselves from our own beliefs, so that we can dispassionately search for prejudices among them. What is needed now is a willingness to follow the arguments where they lead, without a prior assumption that the issue is not worth attending to.
                        Would experimenters be prepared to perform their experiments on orphaned humans with severe and irreversible brain damage if that were the only way to save thousands? ( I say 'orphaned' in order to avoid the complication of the feelings of the human parents.) If experimenters are not prepared to use orphaned humans with severe and irreversible brain damage, their readiness to use nonhuman animals seems to discriminate on the basis of species alone, since apes, monkeys, dogs, cats and even mice and rats are more intelligent, more aware of what is happening to them, more sensitive to pain, and so on, than many brain-damaged humans barely surviving in hospital wards and other institutions. There seems to be no morally relevant characteristic
                        Capacity for suffering
                            If I give a horse a hard slap across its rump with my open hand, the horse may start, but it presumably feels little pain. Its skin is thick enough to protect it against a mere slap. If I slap a baby in the same way, however, the baby will cry and presumably does feel pain, for its skin is more sensitive. So it is worse to slap a baby than a horse, if both slaps are administered with equal force. But there must be some kind of blow - I don't know exactly what it would be, but perhaps a blow with a heavy stick - that would cause the horse as much pain as we cause a baby by slapping it with our hand. That is what I mean by 'the same amount of pain' and if we consider it wrong to inflict that much pain on a baby for no good reason then we must, unless we are speciesists, consider it equally wrong to inflict the same amount of pain on a horse for no good reason.
                        Benjamin Franklin Objection
                            'Well', Franklin said to himself, 'if you eat one another, I don't see why we may not eat you'
                            objections to the Ben Franklin Objection
                                Most animals that kill for food would not be able to survive if they did not, whereas we have no need to eat animal flesh.
                                It is odd that humans should, when it suits them, use an argument that implies we ought to look to animals for moral guidance.
                                Nonhuman animals are not capable of considering the alternatives open to them or of reflecting on the ethics of their diet.
                        The Use of Mental Defectives
                            also known as―"the argument from marginal cases"
                            Counterarguments
                                Mental defectives who don't possess the capacities of normal humans should nevertheless be treated as if they did possess these capacities, since they belong to a species which typically possesses them
                                Although mental defectives may not possess higher capacities than other animals, they are nonetheless human beings
                                Slippery slope' argument
                    Discussion
                        Pain is suffering, suffering is optional.
                        Decreasing demand is good but may not necessarily have the desired effect on supply
                            Halving demands doesn't necessarily result in twice as much space per animal, but the same amount and half the size of factories
                            The optimal strategy is not to only decrease the demand of factory farmed meat (which may have an unintended consequence on supply) but to increase the demand of ethically treated meat (which guarantees an intended consequence on supply)
                        Chicken sexers
                        Domestic sheep don't stop growing wool. Suppose we banned everything; would they all die off?
                        The ideal outcome is coexistence that is mutually beneficial to both of us, like dogs
                        Is it an evolutionary win to be factory farmed?
                            There are more chickens now than have ever been before
                            If we could help create them, feed them, and give them painless deaths, it could be great
                            If there is a way to reduce suffering in transit from beginning to end, that sounds like an optimal strategy
                        COVID causes a bunch of new concerns - Sophie
                        Domestication
                            Sheep
                            Bulldogs
                    
                    
                LongtermismJuly 8th, 2020
                    GCBR― 
                    A catastrophe that only kills 10% of the human population is still enormously bad with the potential of being the worst catastrophe in history
                    Nuclear Risk
                    Biohazard
                    AI affects wealthy nations
                        Also has repercussions with race, people of color
                    Is technology the largest accelerator of inequality
                    Jessica's Example―Handwriting AI, goes online and convinces to be allowed to go online
                    Self-driving cars
                        The danger of the availability heuristic
                        The cop-out solution--ID the problem, hand over to driver
                    Nuclear Weapons
                        Would you argue it's dangerous because it reduced hegemony?
                        Hegemonic Stability Theory
                        International Treaty of
                    
                 Rational group decision-making - YouTube
                    Plurality vs approval voting lead to drastically different outcomes
                    Condorcet, independent agents law
                    Truth and honesty are valued highly
                    Consent is transitive, Preference is not transitive
                        If people prefer x over y, and prefer y over z, it doesn't mean they pref z over x
                    Approval voting is to be preferred over preference voting (no spoiler effect)
                    If you prefer vanilla over chocolate, and introduce strawberry and suddenly prefer chocolate, that is irrational
                Career Seminar (EA Fellowship) July 22nd, 2020
                    b to a vs a to b, profit to nonprofit
                    Lakshana - The potential stage has grown, and so more people have a shot that otherwise would
                        Yes, audience grown and so stage grown, but proportion of audience to creators/stage has shrunk
                    1% rule (Internet culture)
                    Online school, accessibility
                    What's your story? - Reaching out is a compliment
                    Undergrad email is a free pass, no rep
                
                --------------------- Portal ---------------------
 -- Avoided infinite recursion --             Oxford In-Depth Fellowship Effective Altruism #[[Effective Altruism]] 
                August 7th, 2020
                    ITN Framework visualized 3D: Vertical shifts (priorities), horizontal shifts (another solution/cause area is discovered; change solution but doesn't change the fundamental problem), dimensional (framework)
                        Cause Area 1 | Cause Area 2
                        Cause Area
                            
                August 14th, 2020
                    Dragon in my garage―Invisible dragon, but there is no way to disprove.
                        "Where's the dragon?" you ask.
                        "Oh, she's right here," I reply, waving vaguely.  "I neglected to mention that she's an invisible dragon."
                        You propose spreading flour on the floor of the garage to capture the dragon's footprints.
                        "Good idea," I say, "but this dragon floats in the air."
                        Then you'll use an infrared sensor to detect the invisible fire.
                        "Good idea, but the invisible fire is also heatless."
                        You'll spray-paint the dragon and make her visible.
                        "Good idea, but she's an incorporeal dragon and the paint won't stick."  And so on.  I counter every physical test you propose with a special explanation of why it won't work.
                        Now, what's the difference between an invisible, incorporeal, floating dragon who spits heatless fire and no dragon at all?  If there's no way to disprove my contention, no conceivable experiment that would count against it, what does it mean to say that my dragon exists?  Your inability to invalidate my hypothesis is not at all the same thing as proving it true.  
                     Many Weak Arguments vs. One Relatively Strong Argument - LessWrong 2.0
                        Many independent weak arguments whose countargments are dependent
                        Find shared dependencies between arguments or counterarguments and target them mercilessly
                    Hillary Greeves - Investing in Developing Countries certain may be a net negative for society, increase X Risks and risk of conflict
                    I like Andrew Yang
                    Global Priorities research is only valuable if its conclusion is contrary to the status quo?
                        Bayesian thinking: The idea that the current evaluation is in itself not 100% accurate, and we must target the alternative outcome in which the test is wrong and the answer is remarkably novel
                        Does this create perverse incentives in Global Priorities research to generate a conclusion that is in contrary to current assessments?
                August 21st, 2020
                    Is–ought problem
                        https://philpapers.org/surveys/results.pl
                            Survey of Philosophers
                    Expanding the moral circle - you don't know what you don't know
                    Metaethics vs. normative philosophy
                    Normative Philosophy
                        Deontology
                        Consequentialism
                        Virtue Ethics
                    https://remnote-user-data.s3.amazonaws.com/n7l8WCbM5PtzThmQdkUSSgGUOUc583Mm4oIHBMuzKp3Sopk7a7nr2EiiINal-5YwrGBCfw5xdzJ-3fW-zF0G6Ucs0YgDl6GNLjKRwnh07IDop0lmZlU6WWINy2zt3RIZ
                    The scarcity mindset - Maslow's hierarchy of needs, freeing up
                        Psychologists have shown that we tend to feel more capable of extending moral concern to others if we’re not competing with them for scarce resources and if our own needs are already taken care of. Abraham Maslow famously illustrated this basic concept with his image of a pyramid representing our hierarchy of needs.
                        The washing machine, the refrigerator, the electric stove — were a major engine of liberation for women. Once the washing machine was invented and made widely accessible, for instance, women were freed up to do other things, like join the workforce.
                        The ethical crux―do people have a moral obligation to engage with politics, etc.?
                            I am sympathetic to a consequentialist view
                    Discounting―
                        distinction―it is different to discount because you value future lives less, given certain outcome (where you are certain that an action would give a parallel outcome in present and future) compared to because you are less certain of outcome, and value lives the same (EV)
                            Expected Future Utilty = Value of future lives saved * Certainty of outcome  
                    Do you try to maximize happiness or minimize suffering?
                        50-50 Idea
                            Add 10 happy people, or decrease 10 sad people
                            Add 10 happy people
                                60/110 -> 54.5454%
                            Subtract 10 sad people
                                50/90 -> 55.55%
                            Difference 
                    Insect suffering
                        Quality vs. quantity
                            There is no number of ordinary eight-year-olds who, when organized into a team, will become smart enough to beat a grandmaster in chess.
                            Is there a way that the suffering of millions of small sufferings equate to one large suffering?
                            You can't sum suffering of shallow depth to a different depth, in the same way you can't sum intelligence
                            There is a fundamental depth cannot be obtained
                            Rain patterings vs. a flood, a bunch of 10% efforts on a trailer vs. 100% on a trailer
                        Lexical threshold #Ethics
                             Clarifying lexical thresholds | Center for Reducing Suffering
                            Lexically worse/inferior if no amount of something can outweigh something
                                Brussel sprouts are lexically worse than chocolate in the sense that no amount of brussel sprouts are better than one chocolate
                        How many pig deaths equate to a human deaths?
                            Thought experiment
                                assumptions―the status quo represents the current threshold/general willingness/comfort of humans in how many humans die vs. how many pigs die
                                50 billion chickens slaughtered a year / 500,000 humans slaughtered a year = 100,000 chicken/human
                                fallacy―nature of slaughter is different (food vs. otherwise)
                August 28th, 2020
                    Longtermism: Concerns and responses
                     Flow-through effects - The GiveWell Blog:: Quality of life has holistically increased in every single way
                     Crucial Considerations and Wise Philanthropy - Effective Altruism
                        utilitarian definition―consideration that radically changes the expected value of pursuing some high-level subgoal
                        example―planning a path for hiking and realizing that your compass is broken/offset
                            Let’s take this question: “Should I vote in the national election?”  At the sort of “level one” of reasoning, you think, “Yes, I should vote  to put a better candidate in office.” That clearly makes sense.
                            Then you reflect some more: “But, my vote is extremely unlikely to  make a difference. I should not vote, but put my time to better use.”
                     Growth and the case against randomista development - EA Forum  
                        Advocate economic growth over randomista development
                    Randomista development―Improve the economy with only variables that can be tested through Random Control Trials
                    Simplifying cluelessness  
                        informal definition―this is the position of having no idea whatsoever what to do
                        not―simply facing actions that take on a wide distribution of possible value
                        generally due to issues with―imprecise credence or method
                        cluelessness is problematic in situations where we do not have evidential symmetry
                        cluelessness vs. uncertainty―cluelessness is a type of uncertainty. It is extreme uncertainty, or cluelessness is an uncertainty in the actual method/weighing in the decision-making process. Cluelessness is in the context of making potentially multiple decisions, while uncertainty is making a single one
                    Simple vs. Complex cluelessness (Straightforward vs. Butterfly Effect)
                        symmetry―there's a way to tell the difference how your actions have directly led to a good or bad outcomes/missed out on the outcome
                        symmetrical example―meeting someone in the street, delays them causing them to take a different job, different sperm reaches egg, etc.
                        simple has straightforward outcomes, complex has the butterfly effect
                    Activity Buckets
                        Short term and long term interventions
                            No room for only short term effect, as that's a band-aid
                            Help the global poor
                            Donate to Malaria Consortium or Deworm the world
                            Work for GiveWell
                            Donate to GiveDirectly
                        Create a flourishing long term future
                            Work on AI Safety and Ethics
                                Get a position at OpenAI
                                Fund CHAI
                            Policy
                                Conduct policy and political research in regards to voting and lawmaking
                            Improve mental health around the world
                        Spread awareness for Effective Altruism
                            Recruit for EA Club
                            Promote awareness to coworkers of Effective Atlruism
                September 3rd, 2020
                    Are we living in an influential time?
                    Three scenarios
                        Peace.
                        A nuclear war that kills 99 per cent of the world’s existing population.
                        A nuclear war that kills 100 per cent.
                        The difference between 2 and 3 is much much bigger than―1 and 2 (even though most people would believe the opposite)
                    Are we living in the most influential time in human history?
                        In the past, you represented a smaller proportion of the population and would be able to enact a greater percentage of change. However, technology improves the scope of influence
                        Population and technology are both exponential growth curves
                            rate of growth comparison―tech is more
                            start comparison―population starts earlier
                            eclipsing―there will be a point in which technology eclipses population and your ability to influence tomorrow will be greater than it is today, not less
                    Lock in events―locking in ethical values and unable to change, meaning that before the lock-in event is much more influential
                    Is there any action that we can do in the future that adds value to the past?
                        inspiration―the primary reason we pick the past is the idea that the past influences the future, but what if we pick future actions because they add value to the past?
                September 11th, 2020
                    Chance of extinction this century?
                    Nick Bostrom's argument on our future of technology―There's a point in which afterwards technology will rapidly  increase/peak or rapidly decline
                        Unstable vs. Stable equilibrium, idea of a ball in a valley or a mountain
                        The ball is on a mountain in which technological progress is the x axis
                    Dan's Deglobalizing, or the idea that centralization enables decentralizatino
                        Centralizing AI for food may enable smaller communities to be self-sustaining
                        Centralization may lead towards a greater discrepancy between achievement, such as the internet 
                        
            Individuals
                Cian Call June 13th, 2020 #[[Effective Altruism]] 
                    Compute, Memory, Bandwidth
                Kaleem Call #[[Effective Altruism]] 
                    Get a MacBook Pro 16
                    Go for double majors
                        Summer sessions
                    Get an external monitor
                        Data Scientist with four vertical monitors for one spreadsheet
                    Don't stay in your dorm room
                    Noise Cancelling Headphones  Sony Headphones
                Lonis Call #[[Effective Altruism]] 
                    Friends: Career or You
                    Signaling vs. Skills
                    Learning
                    Get in the system to break the system
                Call with Jessica #[[Effective Altruism]] 
                    Facebook University
                    Study Abroad to finish requirements
                    Light Fellowship
                    Domestic Summer Award
                    Yale House
                    Jessica's Workload
                        Two CS classes and TA CS50
                        40 Hour Psets
                        Full time EA
                        OFFICE HOURS!
                    
                Call with Kaleem July 20th, 2020
                    Immortality? - DALYs, generational change continues, finite number of ideas per life
                    Different moral languages are developed because they are developed in a space that they are not a part of
                    Create spaces that are inclusive and expose ideas, allow elderly to continue engaging
                    "Telephone effect"-some ideas are echoed from Twitter to Fox News to conservatives, etc.
                    Alcohol, lead poisoning should be looked into more often
                Daniel Wang - Brown University
                    Partner story with the founder, hilarious
                        Are you vegan?
                        I consider killing myself
                        Monist and dualist
                    Opinion vs. Evaluation - Damaging
                        Opinion has no evidence
                    Separating the policy from the politicians
                        Politicians and law making should be separate
                        Rank results/problems, not policy
                            Experts take care of policy
                        Politicians
                            Rank choice
                            Reddit for lawmaking
                            Problems           |   Solutions
                            Politicians          |   Lawmaker
                            Ranked Poll       |   Lawmaker
                            Poll | Politicians |   Lawmakers
                            Ranked Poll       |   Lawmaker
                        Animal Welfare
                            Most vegans use ethos to convince others whereas most
                            What about carbon emissions?
                            70-80% of Amazon is for agriculture
                        What makes an ineffective altruist? (Brown Altruism Fellowship, many were not ready)
                            Poor intellectual openness, many were social justice backgrounds
                            Use 3rd level thinking to override 1st
                        Maximize happiness or suffering? Usually people weigh the sums of one of the following:
                            Happiness + Suffering = Net
                            Happiness = Net
                            Suffering = Net
                        North Korea is really good at misallocating resources
                        --------------------- Portal ---------------------
 -- Avoided infinite recursion --                         Politicians
                        
                    
                Daniel Wang - Brown University with Andre
                    Morality of infantcide
                    Dumb People
                    Knowledge is confluence of truth and belief
                        Gettier Case Example is therefore knowledge
                    Knowledge is confluence of truth and belief that is also rightfully reasoned
                        Gettier Case Example is therefore not knowledge
                    Affirmative Action
                        Is it for looking at leaders with similar lived experiences vs. physiological similarity
                    The N Word
                        Ethnicity vs. Race
                            British blacks?
                    I find you very cute
        Yale
            Call with Herman
                Best use of time? FROCOs
                Any common avoidable mistakes incoming freshmen make? Talk to DUS and Deans and Emotional Wellness, Read College Emails
                Anything overpacked? Someone from IJndia brought an entire pantry of Indian spices and made banana chips LOL
            Call with Rohan August 4th, 2020
                Best use of time? Take campus jobs
                Worst use of time? Unorganized extracurriculars, don't be afraid to drop
            Call with Funbotics August 8th, 2020  
                Favorite classes? - AFAM, etc.
                201 vs. 223 - 201
                Common avoidable mistakes - Major in psychology, sleeping with your suitemates LOL
                
            Yale FOOT
                Are humans part of nature or not?
                    Nature -> Us -> Technology, but now Technology -> Us -> Nature
                    We are facing an unprecedented problem as we grow so rapidly, our understanding of nature no longer leads us to fear as much
                    Nature controlled us, and we controlled technology. But now, technology controls us, and we control nature.
                What is wilderness? Is it a construct?
                    There is an inherent bias in wilderness because it is a construct. We have evolved so quickly that there is no way to have a constant definition of wilderness.
                        An animal regards what humans create as nature? To them, nature has erected natural new structures around them.
                        A beaver regards a human dam as nature in the same way that a human regards a beaver dam.
                        As humans, we have an inherent bias of seeing everything through a human lens.
                    Animals do not regard humans as separate, but as other animals. Or as God. Is introducing invasive species morally bad? Animals may view it objectively, while we view it subjectively. Because we have control over our actions and understand it.
                What don't you want to lose when you get older?
                    My ability to be forgiven for my mistakes.
                What can't you wait to do once you get older?
                    Call people by their first names. Make meaningful connections with adults.
                Can you stop growing up?
                    80% of your growing up takes place outside of your control, in your surroundings. Your friends, your job, etc. Doing so would be to not take advantage of the opportunities given to the coming of age
            Call with Yvonne Froco
                Not even that you miss 100% of the shots you don't take, but the compliment: that you fail all 100 times is expontentially close to zero, and that doing so should be recognized as a profound achievement.
                My silence is a choice. Silence is not the absence of thought, but its ultimate manifestation.
        Friends
            Calls with Frank and Evelyn
                July 1st, 2020
                    Thoughts on ACA-5
                        What's the intended goal?
                        Kaldor Hicks and Pareto Principle
                        Affirmative Action gives both an excuse for success and failure
                    1968
                    Add up all of pollution, US eclipses China
                    Great Firewall Of China
                    China's giving wealth to poor African countries
                        The counterfactual, they're going to be
                        Don't be friends with poor nations
                        The huge port that only has 5 ships per year
                July 4th, 2020
                    How is US Currency international―Bretton Woods conference
                    Why is it not―Why would I be gambling with my money when someone is rolling the dice?
                    Who Will Be the Global Leader?
                        US wins the cultural victory (Civ V)
                        Technological deadlock? (Jordan)
                            Technology disappoints in the short run, surprises in the long run.
                            Moore's law―Progress doubles every two years
                                exponential because―more computing can be used to unlock even more computing
                    Russia and China team up
                        Who backstabbed who?
                    Tech
                    Deepfakes
                        Originally for porn-literally small brain
                    Nature documentaries
                        Fake noise
                        Scripted
                    UBI Downsides
                        Lowering wages in reponse?
                        Abuse birth rate
                    Good YouTube
                        Techquickie
                        Economics Explained
                        Coleman Hughes
                        Two Minute Papers
                    Take power to end power
                    Frank's Mom loves China, Father hates mainland
                    Evelyn's Mom is incredibly Westernized
                    Military as a social safety network
                        It isn't necessarily the most efficient way of investments
                            Satellites
                July 8th, 2020
                    Everyone will die
                        The culture will not endure, but the system will
                            What if the system that we created, designed to combat a racist culture, is now antiracist to the point of being racist
                        Who would you wish to die?
                            Most people will already be irrelevant when they're old, so people who stay relevant are not the rule, but the exception
                            Therefore, I wish people to live longer
                        Who should live longer?
                            People should live longer
                                Vietnam, World War II, Holocaust survivors
                                Anyone who grew up with conventional warefare
                    Pushy girls?
                    Give everyone a stable income  The issue isn't inequality (or inequity I guess), but a lack of cash
                        Give Trump supporters a stable income, they wouldn't support Trump
                        Give young college students a stable income, heck they might be conservative
                    When you're strapped for cash and the only problem is to get enough money, it's easy to scapegoat the millionaires and billionaires
                    When you have cash, even able to purchase the products that these billionaires made possible, I would dare say that your life would be very different
                    Success gives you a different kind of perspective
                    Live life as a sprint, not a marathon
                        Approach the day as a series of sprints, and zoom out and marathon. Marathon of sprints. 2 hours of continuous work is worse than 30 minutes in 4 splits
                    The best advice: avoid zero days at all costs. Live nonzero
                        Anything more than zero is improvement. Zero is atrophy. If I get nothing done in a day, it sucks. But if I do one push-up, I get stronger. If I do one math problem, I get smarter. Avoid nonzeroes at all costs
                July 11th, 2020
                    The glories of the cloud
                    Automation of service vs. manufacturing: automating requires no infrastructure, service is more likely
                    Companies lose millions on passwords
                    Cloud compute is effective because sending compute power is fast and easy, so scaling is easy. Imagine ice cream parlor that scales perfectly without inventory because there's an ice cream cloud that can send it perfectly
            Call with Grace Hopper, then Justin Lai August 10th, 2020
                Roasting our respective cities
                Justin's Metal Straw
                    Gettier Case Example―like how we thought that Justin had a straw because he cared about the environment, it is in fact completely false because he only likes the sensation #[[Gettier Case Example]] 
                Affirmative Action, Police, Leaked Bodycam Footage
                Justin's a Prankster--"We need more people like you in engineering. When I'm driving on a bridge, I want to feel a bump that had absolutely no reason to be there structurally..."  You're full of shit XD
                Shoes, New York, etc.
            Call with Yalies, Longtermism-Not applications, but philosophic implications
                Race to Mars--Good thing?
                    I think we're thinking of this as inherently zero sum when it doesn't have to be
                    Growing the pie, not the slice
                    Perhaps the allocation is not optimal, but an increase in innovation in general is a net positive for society
                The romanticize of something as life or death (survival of the species) encourages sacrifice
                Not what longtermism is or what counts as it, but if it is true
                     Introducing longtermism
                        A typical social discount rate might be 1% per year, which means that  benefits in 100 years are only worth 36% as much as benefits today, and  benefits in 1000 years are worth almost nothing.
                Discounting
                    Discounting as a concept works, but not quantitatively and measurably
                    The fundamental trade of immediate certain gain vs. long-term potential immense gains (over compounded)
                    Norwegian Sovereign Wealth fund - Set as a mandate to place more emphasis on future generations
                How many animal lives is a human life worth? My most standards, people are uncomfortable with this comparison, but is it somehow more palatable to do this with potential humans because they do not exist?
                Is it inherently good to bring people into existence
                    The repugnant conclusion/scenario (Counter of Utilitarianism)―We should bring as many people as possible into existence until the net increase is zero. Quality of life doesn't matter.
                    Are we trying to maximize happiness or minimize suffering?
                        The utilitarian argument is yes, the other one is no
                        Most religions have at a central tenet that life is suffering
                        If climate change is inevitable, should we bring more people in if they might not live? -More chance that some people live. If 10% survive, then more likely to keep human existence in place
                            Would you kill Baby Hitler? One person can cause immense suffering, but can also cause immense happiness
                    Anti-natalism―Unborn babies / Is it wrong to bring someone into existence if their life is complete suffering
                        The paradox of utilitarianism is why should we have the authority to prevent suffering when suffering is in fact subjective, and we are incapable of measuring the potential suffering an organism will endure. Whereas the measurement of happiness does not need to be exact in order for it to be worth it
            --------------------- Portal ---------------------
 -- Avoided infinite recursion --             
        Google CSSI
            Algorithms and Data Structures
                July 10th, 2020
                    Good Use of Time: Message Masters Students, Networking (Sending an email to professors in freshman year), Research (Can be automation projects), Leetcode Contests
                    Waste of Time: Leetcode, Hackathons, Applying, Studying for an A over A-
                July 17th, 2020
                    Prioritize Academics, universities have unique resources whereas personal projects no advantage
                July 24th, 2020
                    Russian culture―suffering together. Higher suicide rate in happier countries, not saddest countries.
                    Hedonic treadmill/hedonic adaptation
                    Set Context―Separate work from play, get accountability buddies
                        You are much more likely to let yourself down than someone else
                July 26th, 2020
                    Find professors
                    Find people who went to other companies
                    Practicing writing Rec Letters
                    Alisha
            Data Structures
                July 22nd, 2020
                    Approach smaller companies to get your foot in the door (big companies will have large lines) and follow up with the connections you make
                    If you could start again as a freshman, what's the one activity you would prioritize the most, and one you would deprioritize?―Get used to group settings
        Miscellaneous
            YouthAI First Meeting: John CohnAugust 13th, 2020
                Play!  Start playing, hands on, and build things.
        Call with Data Structures CSSI July 22nd, 2020
        
        
        Friends
        Call with Oxford EA
        
        
        
        
        
        
        
        Car
        College
        Effective Altruism #[[Effective Altruism]] 
        
    Math
        Intermediate Algebra
            Remainder Theorem―Remainder of  f(x)  divided by  (x-a)  is  f(a) 
            Factor Theorem― (x-s) divides f(x) if and only if f(s) = 0
            Rational Root Theorem
            
        
    Programming
        Web Dev
             4 Things You Have to Unlearn to Become a Better Programmer | by Li-Hsuan Lung | Sep, 2020 | Level Up Coding  
                Replace loops with higher-order functions (for-each, functional programming)
                Replace conditionals with data structures and polymorphism
                Replace literal variable names with purposeful variable names
                Forget global scope exists
        Python Functions
            *args―Pass an arbitrary number of positional arguments to your functionZ
                usage― 
                    def foo(*args):foo(1, 2, 'end')
                        print(type(args))
                        for arg in args:
                            print(arg)
                            
                    foo(1, 2, 'end')
            **kwargs―Pass a varying number of keyworded arguments to your function
                usage―
                    def foo2(**kwargs):
                        print(type(kwargs))
                        for keyword, value in kwargs.items():
                            print(f'{keyword}={value}')
                    foo2(a=1, b=2, z='end')
            Multiple Assignment―a = b = c = 1
            Sequence Unpacking―a, b, c = [1, 2, 3]
                Variable swapping― a, b = (1, 2)
                    a, b = b, a
            All and any―Check if all elements in an iterable are True, and if any element is True
                all([True, True, 1, 'hello']) = True
                any([0, False, True, '', []]) = True
            Help―help around function to learn more https://remnote-user-data.s3.amazonaws.com/tkLwPTu57etpNglWjBJqDU9v-ztY5V_1HdO0JLNAd4yBn3x5-BU48lE-TwCdSyKb97JuMR6xKpxXH1JRsOy9NBSutBvm9JEN_EpuOQtkiT-A_Zas0vVgzz_fvhz7TX07
                help(print)
            Enum―list variables next to listhttps://remnote-user-data.s3.amazonaws.com/_uBssAN84SGrv3v5i8ugobl66up0FCsFK5L_G6Af41QysgPsTCOtzalimbChXXHvHcJXRzST18XUzynG4fbiMc5j9Zm4yXwTRHveVsluj6d_6Z8FFgtl6VLHoqWjIYF-
            Enumerate―loop over an iterable and with an automatic counter https://remnote-user-data.s3.amazonaws.com/qZ1-DWFy66L4O0TNuqbavzJKlJ6GjXUYTN73LBMRxxHS6PrCKcIQcr_lTEWoiMoVWh-8YjJbkXHgc-44r4HdjEWEoOoM0Q5J7KFWy_-5M3frar6gdAEU88KKrRzXHDxE
            Dir()―returns a list of the attributes and methods of any object
            How to quickly swap variables―a, b = b, a
            How to chain comparison operators for if a < b and b < c―if a < b < c:
            returns a list of the attributes and methods―Dir()
    Coursera Courses
        COVID-19
            PCR
                Denature―Separate into 2 single strands @96'C
                Anneal―Primers bind to singles @55'C
                Extension―Taq polymerase enzyme reassembles @72'C
            If RNA, reverse transcriptase to produce cDNA
            COVID
                80% symptoms, r_0 = 2.2
                r_0―How many one person infects
                Chest CT symptoms
                    Ground glass opacity
                    Consolidations
                    Crazy paving
                N95 Mask
            
            
        Dog Emotions & Cognition
            Canine paradox―How did dogs become dogs when they are not close to wolves at first?
                The rise of humans as superpredators―we learn to throw projectiles, outcompete all predators
                All predators wiped except wolves and bears
                We even trained some dogs to kill wolves
            Morgan's Canon―Attribute action to simplest psychical faculty
                Morgan's trap - 2 traps https://remnote-user-data.s3.amazonaws.com/c1ndHeJTqfsIr-OZpt2q7474fn50fBLJcDQO3Y9FtLlx9HAoktMyG82zIO3Wukr9Z561DMKSmlY2Xp11XDNAkbRx_6WEzK5EmYyyLCWxR4vjTr5xd4IJRpEDSy2o0RbE  https://remnote-user-data.s3.amazonaws.com/WM4k9jUW-G-mq7NmnwFcpDyKrMsccD6aAP13GoQGa1m0r1sS-RKXYq5xzDKc9OpiJA0xQRKlmiPVW1yXxtCJVN0xDFH7fq3TOhcd9aZF6gBy1gj3d0TKVjiHutDwYl7_
                    Monkeys who figured trap 1 used same strategy on trap 2
                    Can trial and error, but not understand causal chain
                    Dogs have inferential reasoning―they can learn to open doors with the presence of humans to train/demonstrate how to open
            Central Tenet of Experimental Psychology―All behavior potentially explained by multiple psych. mechanisms
                Behavior
                    Mech 1
                    Mech 2
                    Mech 3
                    Mech 4
                Evolution definition in terms of allele―change in allele frequency over time
                Cognition―Flexibility, mental flexibility, mental trial and error
                Tinbergen 4 levels analysis for biological traits
                    Phylogenetic (Phylem) - species
                    Ontogenetic (Path) - developmental paths
                    Functional (Payoff of trait) - what does it allow you to do?
                    Proximate (Mechanism) - how does it work?
                    4 levels do not compete, but help reveal each other
            Dog Pointer Experiment vs. Chimps
                Dogs understand gestures
                    Use rock to point to right one, dogs get right but not Chimps
                Puppies can understand human gestures/novel markers as 6 weeks, while wolves do not have that ability, even when raised by humans
            Empathy is demonstrated early by contagious yawning
                Bonobos―Good-willed and prefer to share w/ strangers
                    Closer relatives than chimps, but have none of the dark traits of humans and chimps
                    They selected towards interested/less violent males, perhaps due to matriarchy
                Contagious yawning demonstrates social behavior
        Philosophy
            Emotivism―moral judgements from emotion
                Knowledge (classical account)―Knowledge is true belief, and requires truth
            Gettier Case Example― 
                Stopped Clock - Bertrand Russell
                Sheep Framer Sees
                Actually thought true, and thought true, but not through understanding or intuition, but luck
                Raise question - If true belief is justified, is it still Knowledge (classical account)?
                Radical skeptic―we know very little
                    Brain-in-vat hypo
            Why Obey Law? Theory
                Benefit - Obligated because we benefit
                Consent
                Fairness
                Philosophical anarchism―no obligation to follow the law
                Believing or not believing miracles (testimonies)
                    Hume
                        Hume's Definition of a miracle―a violation of natural law
                            The evidence in favor of a miracle will always be outweighed by the evidence for the law of nature
                    Reid
                        stance on Hume's Definition of a miracle―Against because of the Principle of Credulity. We are hardwired to rely on testimony--children are most trusting of them from birth. #[[Hume's Definition of a miracle]] 
                        Principle of Credulity―We are hardwired to rely on testimony--children are most trusting of them from birth.
                    Kant
                        Don't trust testimonies
                Are Scientific Theories true?
                    Views on the construction of scientific theories―
                        syntactic―structure
                        episteme―why believe?
                        semantic―meaning
                        
                    Identity Theory―mental state = brain activity (mind = neurons)
                    Chinese Room―Machines control syntax, but not semantics
                    Constructive Empiricist―science aims to produce theories that are empirically adequate rather than true, and to accept a theory involves no more belief than that it is empirically adequate
            
            
        Communicating Effectively in Teams
            
            Transmission model―Model, communication as a linear process of sending and receiving messages from one person to another (default communication process model)
                https://remnote-user-data.s3.amazonaws.com/D92jUzF8kXFPwrITN-nTd3D55lYRSvMEQnrA5jQqTCX7fhkb0AFI0Alc1rbW4QasMM3aPR0fu9dypS6W85WMP1FvoaA_ZBzUrffrsxeFHRIc9d2w91UOXNeEdVD_jV5N
            Context―Circumstances that form the setting for group communication
            Pluralism―The idea that there are many social worlds and constructs
            Preferred mode of talk
            Scale―Small group vs. big group in communication
                The Boulder City Council is planning a public meeting to discuss how to manage and develop a new parcel of open space land that the City of Boulder recently acquired. This is an important public issue and many people have strong opinions about what to do--or not do--with the land. The City Council wants citizen input, but there are so many people interested in this issue that it will be impossible to involve everyone at a public meeting. So the City Council creates a "citizen's input panel" made up of ten Boulder residents who will gather input from the entire community and represent these interests to the City Council in a report to be presented at the upcoming public meeting.
            Socialization―The learning of norms, values, and behaviors to fit into a culture or group
            Phase Model for groups―Linear phases
                Forming
                Storming
                Norming
                Performing
            5 Best Communication Practices
                Multiple alternatives
                Dissent and debate
                Assumption testing
                Perceived fairness
                Well-defined criteria
                \
            Decision-Making Traps
                Anchoring―First one is most impressive
                Status quo
                Sunk Costs
                Confirming evidence
                Framing
                Estimating & forecasting
            6 Team Conflict-Resolving Tactics
                Use facts, more information
                Multiple Alternatives
                Commonly agreed upon goals
                Inject humor
                Balanced power structure―Group members feel that they are being heard
                Unnecessary consensus―Disagreement is inevitable and we don't always have to force consensus to make process
            4 Principles of Principled Negotiations
                Problems, not people
                Interests, not positions
                    The orange analogy: Skin vs. flesh
                Options
                Standards
            3 waves of virtual works
                1st wave―Virtual freelancers, whole new level of workers in 1980s
                2nd wave―Virtual corporate colleagues
                3rd wave―Virtual coworkers, human interaction preserved
            Presenteeism vs Absenteeism―Presenteeism is less productive but more traditional
            Models of Communication Technology
                Media richness―Effective communication is a function of media richness and ambiguity
                    Using the right rich vs. lean media depending if topic is ambiguous vs. specific
                    https://remnote-user-data.s3.amazonaws.com/fIG6w-v9pVB5CKt0IvZcfjKjl2Pu3RMpWBNEkMkwWIuDK7I54A3dHCfuS5d_xaMNFYdbo5C5q3d6wOkwIyw4UQ7nGTsgG1KUhqS8jwdgooNazK6lDCFSy2yYcDLs3xo8
                Dual Capacity Model―Means of communication have different cultural contexts
            Nature of Communication
            Diversity among competing interests
            
        Predictive Analytics for Business Nanodegree
            Methodology Map
                https://remnote-user-data.s3.amazonaws.com/wFqMGeO3y7J71bi3hWc6EpxYH8_zys2GeEbKOB6_0jYswq38BY24FDCXozzWIfTYsH2GHh1zn4zhrsSZ-Xuo7HdGtXJJRYn0ynt87SgAktvH2UPqJxJ-VYbV_sRIT-wM
            Non-Predictive Analysis 4 Categories
                
                
                Geospatial Analysis―Location based. Calculating trade areas, store locations, etc.
                Segmentation Analysis―Grouping data together into categories
                Aggregation Analysis―Calculating a value across a group. Adding up all profit in year, month, etc.
                Descriptive Statistics―Mean, Median, Mode, Standard Deviation, Interquartile range, etc. of data
            Data Science Classification Models (Based Off Target Measurement)
                Types of Data Science Numerical Classification Models (3)
                    Continuous vs. Count―Any measurement in range vs. integer
                    Time-Based―Forecasting
                Types of Data Science Non-Numerical Classification Models (2)―Binary (2 choices), non-binary (3 or more)
            
            Linear Regression
                Functions in Excel
                    Slope()
                    Intercept()
                    Rsq()
                    Correl()
                         r ―Correlation Coefficient
                         r^2 ―Coefficient of determination
                        r >.7 is pretty good, (.5, .7) is okay, <.3 is not useful
                    Slope()
                Linear Regression (Single and Multiple)―y=mx+b and y=b_0+b_1x_1+b_2x_2
                    Using regression in Data Analysis add on of Excel―https://remnote-user-data.s3.amazonaws.com/i1mjRzy9a7RGMMXwCWEMht8TzTAW2BwfW8e0EResaRwK5BBhR6DdeiAFtW51vAzQOQhv6N4GHFo-ycytnLVL2_sf_x7hupYLqBP_4buZWJQZph39Pqq07EAz49Iye-PV
                    Dummy variables―a variable that takes two values, generally one or zero
                        a much better way of using categorical variables in regression
                        add one dummy variable for one less than the number of unique values in the categorical variable  
                        if the variable is binary, you'd add one dummy
                        if there are four categories, you'd add three dummy variables.
                        example―https://remnote-user-data.s3.amazonaws.com/ipad3678zEIO80jPFfNi6P4rQm0jvFKUz_SGxHVLciGwqKcibPMwrM0LlcdaR-syK9tuM1Y6oW5-c_NYjy03A_-Gga_p17MyGzErs7cylM3AG1Euan1dCgl52lNW-G7E  The location (west, east ,etc.) is a dummy variable that is 1 if true and 0 if false
                        
            Types of Data
                Structured―Rows and columns, Excel
                Unstructured
                Semistructured―HTML, JSON
            Dirty Data―Data with errors or duplicates in entering
                examples―incorrect name spelling, duplicate entries, wrong/old address
            
            
            
        Data Science Math Skills
            Product Rule
                formula 1― P(A,B) = P(A|B) \cdot P(B)
                formula 2― P(A|B) = \frac{P(A,B)}{P(B)}
                old definition of independence― P(A,B)=P(A)P(B)
                    https://remnote-user-data.s3.amazonaws.com/bnNc6_-Uh438aQNrKAQIdRclaq73V3YBgfLW--HGngUYx3ZGcNqX0JHxPyOQ_GLgL486Ae1oeSrqa0Saeqgyq70of0iZUJh_xQztJ9F02DwVfEr9skuLgRUmiNZeFtTD
                new definition of independence― P(A|B)=P(A) 
            Bayes' Theorem
                problem use case―Inverse probability problems
                https://remnote-user-data.s3.amazonaws.com/rLJpBog4WAbg3Kep3mKr7RsdeieUcXRHW805k4yqA2uHyYyvHqwvYY8pehoFpbTjMuo0FNDkRxqp3i3vXDCOO50m8wTm9nT7sQf8dpR0DfwZ19_jTL7s9aS16I9qq2yK
            
            
            
            
        Algorithmic Toolbox and Data Structures (Google)
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
            
            
            
        Science of Success
            <25% success related to IQ
            Growth mindset vs. fixed mindset
            Stereotype threat―Feel at risk of conforming to stereotypes about their social group.
            Social Capital (Don't confuse with human capital)―Mutually reciprocal relationships that benefit all, the resources you get from personal and professional relationships
            Nobody wants to work with a deenergizer, even if they know more than someone who makes them feel good
            Nearly 80% of professionals have a blind spot--what they perceive as a strength but others see as a weakness
            Susan Fiske - People make assumptions about your warmth and competence within the first few seconpds of meeting you.
        Successful Career Development
            Netweaving―What I can do for you, not what you can do for me (networking)
            Go into networking event as a research opportunity to find successful and interesting people in a variety of industries, not for a job search
            My explanations
                Please describe one of your career interests.
                    The application of data ownership with artificial intelligence to provide alternate income streams to the public. This is analogous to as if Youtube paid its users a share of their data used to train Machine Learning recommendation models.
                Create a LinkedIn headline that you might use to enter your expressed field of interest.
                    Artificial intelligence and data ownership to supercharge business models and economies
                Please explain the link between your career interest and the LinkedIn headline.
                    The LinkedIn summary encapsulates my ultimate career interest but also in terms of what employers may seek, alternative business models
            Today's engineering graduate is obsolete in less than five years.
        The Essentials of Global Health
            Intro / Global Terms
                Social determinant―The conditions in which people are born, grow, work, live and age and the wider set of forces in systems shaping the conditions of daily life.
                Direct determinants of health―Sex, genetics, etc.
                Sustainable development goals (SDGs)―Goals set in 2015 for 2030
                UNICEF―specialized agency of the United Nations system
                Product development partnership―Nonprofit that enables public, private, academic, and philanthropic sectors to work together to enable research for development of diagnostics, drugs, vaccines, etc.
                Which of the following are the specialized agencies of the United Nations that are most involved with health?―UNICEF, WHO
            Mortality rates
                maternal mortality ratio―Number of woman who die from pregnancy related causes for every 100,000 live births
                neonatal mortality rate―Number of deaths to infants under 28 days of age in a given year per 1,000 live births in that year
                As countries get better developed and people live longer in them, neonatal deaths represent a greater fraction of all under five child deaths
            Disability Adjusted Life Year (DALY)
                definition―A composite health gap measure that takes account of the years of life lost due to premature death and the years of life spent living with disability
                Years of Life Lost (YLL) due to premature death―years of life lost due to dying before your time
                Years of Life Lost due to Disability (YLD)―number of years you live with a certain disability multiplied by weight of disability
                equation―Years of Life Lost (YLL) due to premature death + Years of Life Lost due to Disability (YLD)
                affects men or women more―women
            Epidemiological transition―transition from a disease profile of predominantly Communicable Diseases to one that's predominantly Non-communicable Diseases (NCD)'s
                Non-communicable Diseases (NCD)'s―disease that cannot be spread from person to person
                Communicable Diseases―disease that can be spread from person to person
                Over the last several decades, the share of total deaths attributable to noncommunicable diseases and injuries has increased
            Neglected Tropical Diseases (NTDs)―group of parasitic and bacterial infections that are mainly prevalent in tropical and subtropical areas
            
        Getting Started with AWS Machine Learning
            Neural Nets
                Feed Forward Neural Networks―no loops
                Convolutional Neural Networks―Apply filter to image or sequence of images
                    use cases―Image recognition
                Recurrent Neural Nets―Sequence of input data matters
                    use cases―Natural Language Processing
            Amazon Tools
                Rekognition―Recognizes celebrities, objects, structures
                Deeplens Ecosystem
                    Sagemaker―Train and validate ML model
                    DeepLens―Create a computer vision model
                    Lambda―Create project function s
                    Greengrass―Deploy Lambda functions
        Big History
            Stars
                Population 1
                    luminous, they're hot, they're young, and metal-rich
                Population 2
                    older, less luminous, cooler, colder, metal-poor
                Massive stars live fast and die young
            Planets
                Formed gently
                Planetary formations past the ice belt enable formations of large gas giants
                Jupiter's rampage into the asteroid belt theory
                    Explains why
                        Mars is smaller than normal (Jupiter threw away a lot of material)
                        No planets near the asteroid belt (the materials there are moving way too quickly to form a planet)
                    The only thing that stopped was the resonance of Jupiter and Saturn
                Hundreds of mars-sized protoplanets in the early solar system, only 4 survived and others were ejected
            Earth Moon System
                Collision of protoplanet with Earth, causing melting of Earth
                Peculiar characteristics
                    Extraordinary amount of angular momentum
                    Moon was molten sometime in its history
                    Earth is water, Moon is bone dry
                    Chemical and material similarites from Earth
            The Earth
                Earth is extraordinarily dense
                    Volume calculated in ancient times, mass extrapolated from gravity
                    density = 5.5 tons/cubic meter, but crust is much less dense than this
                    Deep earth must be very dense
                Study of shockwaves through
                    Slow waves through only solid
                        Stopped at 2900 km, indicating change to liquid
                    Fast waves through solid and liquid
            Humans
                Collective learning means that humans have acquired more and more information about their environments
                Over time, hominin ancestors became increasingly less sexually dimorphic
                One key cognitive difference between humans and chimpanzees―
                    Humans have better abilities to imitate and learn by imitation. Allows more than one teacher, uncles and aunts and etc.
                Collective learning―ability of a species to accumulate more information with each passing generation than is lost by the next.
        Nomads
            Palaeolithic―Nomad, characterized by stone tools
            Humans have been foragers for approximately  95  % of their history. 
            What are the four world zones?
                Afro-Eurasia
                Australasia
                Pacific Islands
                Americas
        Future
            Climate Change
                Temperatures have only risen about a degree since the Industrial Revolution
                and that doesn't sound like much
        
        
        
        
        
    YouTube Notes
         Which of these TWO ways do you perceive time? #Science
            Time is objectively measured but subjectively understood
            Are you moving through time or is time moving through you?
                the 12pm meeting was moved forward by 2 hours―https://remnote-user-data.s3.amazonaws.com/BglYsVgRGmLJW71AR-spm1xnaZMKpZ1GwNX-yzGXAZQXpZGb6UJ7rsHahCEp1taqFhhURWThmkiJRFCdVXSkyr4UFVlZlDvvf6t6r6HQhU_Hs1CCewz9CnVV1Zs_3QpG
            Ego-moving perspective―https://remnote-user-data.s3.amazonaws.com/lQWahlK74RwCEFlcTDTMsV_qiiwbFLIcUTWq0Q51OwzdYmRNeArvGtcBInx8tFD5-RNwt2fYYXLfomj_Z0-uSgxvuoYVcTvwgnR9zyi5gKE3CWFAlTnrxE7BBABZvegp
            Time-Moving Perspective―https://remnote-user-data.s3.amazonaws.com/ndnPFnBcjt7nuIYC59g-x4_UPSzTAQUKwc6vmBNu5EALW6aXdOVtnboJLRf4UXD9T0y5u_Yc5xH27Ihc5CYfpQqxWG559A_BGdJ600f96RB9r39Mysuw805jvW39Clzg
         An Actual Review of Titanfall 2 - YouTube #Gaming
            A mediocre game done well is infinitely better than a good game done poorly
            The comments on that Call of Duty really confused me
                Despite no recollection of having set them to disabled, about half of them seemed to be anyways
            If it's not worth your money, it's at least worth your time
            A meta isn't designed, it's discovered
        Cold War  What game theory teaches us about war | Simon Sinek #Leadership
            The United States declared that it won, but the Soviets had dropped out of the infinite game
                The Cold War is an infinite game, not a finite one
            Nuclear, Ideology, Economic―Life, Liberty, Happiness
         Why Scurvy Shouldn't Exist #Science #Science
            What Vitamin C is necessary for―Collagen Production
            We lost the gene for Scurvy through random mutations
         Shark Tonic Immobility―Flipping or stroking nose allows a trancelike state #Science
            Shark Notes
                Breathing
                    Many are able to gulp air through Buccal Pumping
                    Obligate Ram Ventilators
                Lack of Swim Bladders allows them to ascend and descend rapidly
                Can hear low frequencies in a small hole in their skin
                Electrosensory System
                Reproduction
                    Oviporous―Egg-laying
                    Vivoporous―Live Birth
                    Ovovivoparous―Live birth with egg laying
                    Intrauterine Cannabalism
                
                Coloration
                    The gray top and white bottom of sharks is an example of counter-shading
                Eyes
                    Reflect light through retina twice for low light sensitivity
                    Eyelids close when biting prey
                Male vs. Female
                    Claspers―Doubled male genitalias
         Why Does Hair Grow The Way It Does? #Science
            Hair is made of  keratin
            Androgenetic hair is produced by hormones during adolescence (i.e. pubic hair)
            Gray hair comes from a  lack of color  and is not a color itself
         Adam Smith: The Grandfather of Economics #Economics
            The prevailing theory at Smith's time was  mercantalism  , a zero-sum theory
            Adam Smith's guiding hand of the free market was a counter to  mercantalism 
            The process of creating value (a tool is worth more than the sum of its parts) is also known as manufacturing
         Robotics Expert Breaks Down 13 Robot Scenes From Film & TV | WIRED - YouTube #Science
            Utility Functions―Willingness to give and take. Would save a lot of problems
         No, Your Dog Doesn't Think You're the "Alpha" - YouTube
            Alpha Wolves―Were studied with Wolves from many different packs, so their hierarchy was based off dominance
            Typically based off family values
         HOW TO LURK IN VALORANT - Playing specific roles, Guide to Lurking and not being a baiter. - YouTube   #Gaming
            Don't peek as a lurker, go the other way (your job is not to entry)
            Shift walk
        Get MORE KILLS and STOP DYING! #Gaming
            Incorporate mini jiggles into your peeking
            Peeking
                Pre-Aiming
                Tracing
                Prefire Peeking
                Strafe Shooting
                Clear One Angle At A Time
                Angle Advantage
            Wide Swinging―Only if you are facing one enemy / angle
            Shoulder Peeking
                Bunny Hop Shoulder Peeking―Jump airstrafe across corner
            Crouch Peeking
        MacBook Power Tips #Technology
            Emoji Keyboard―Ctrl+Command+Space
            Autocomplete―F5
            Select Text in a box―Option + Click Drag
            Preview in Finder on single or multiple selections―Press Space
            Change login page with information
        As Fast As Possible #Technology
            Nearest Neighbor Scaling Mode (TV's playing blurry Video Games)―Alternative to normal TV upscaling. Upscaling and heavy algorithms blur edges to make it seem more lifelike, at the cost of pixels
            Why is there no Channel 1?―TV and Radio were interfering, so Channel 1 was axed. FCC never shifted Channel 2 to be called Channel 1.
            DDR5 Ram―Faster Hz
            Computer CPUs
                lga―Land Grid Array
                pga―Pin Grid Array
            Video Compression
                Spatial Compresssion (Intraframe) [JPEG]―chromasampling -> macroblocks
                Temporal (Interframe)[mpeg]―i frame -> b frame -> b frame -> p frame
                    i frame―JPEG
                    b frame―interpolation between p and i frames
                    p frame―constructed using move instructions
            
            
        Make your most important decisions at 10:30 AM #Productivity
         Why Are Pandas Black and White? - YouTube   #Science
            Need both as snow and in the trees
            Black around eyes for masks
            Pandas can differentiate masks and can remember from an entire year
        Make your most important decisions at 10:30 AM
         A Flaw In Street Design May Be Costing Lives - Cheddar Explains - YouTube  
            Safe street design led to shift in driver behavior that led to speeding up, which in turn actually killed more
            Speed is the biggest killers
         The Unseen Inefficiency of Escalator Etiquette - Cheddar Explains - YouTube
            The split in elevator leads to inefficiency and danger of collapse
            Standing on both sides (no walk lane) leads to 30% increase in capacity
         The Problem with Auto-Tune  
            Auto-Tune vs. Pitch Correction―Pitch correction is EVERYWHERE
            You shouldn't be afraid of the obvious auto-tune (T-Pain, Kesha), but the ones where you can't notice
        Why is Blue rare in Nature?  
            Blue is engineered, not pigmented.
         How Oak Trees Manipulate Squirrels To Abandon Their Acorns - YouTube
            Predator satiation, like Cicadas
            Mast years are higher yield. These are much better than to spread it out evenly, as this overwhelms the current squirrel population but doesn't lead to a long-term increase in squirrel population
        https://www.youtube.com/watch?v=hUhisi2FBuw
         Why San Francisco Has No Active Cemeteries - Cheddar Explains - YouTube
        https://www.youtube.com/watch?v=URlA7irXpp0
            Salmon sushi is a European invention from Norway because Pacific Salmon has parasites (but Atlantic doesn't)
            Chinese takeout box is American, never been used in China
        Why Don't Birds Lay Square Eggs?
            Ovals are not necessarily symmetrical (egg-shaped in Latin), but egg-shaped. Ellipse is symmetrical
            The curve for an egg is stronger than half circle, which is called a catenary
            Eggs shapes are from membrane, not shell (you can dissolve shell and still same shape)
            Odd shape may allow roll in circles rather than straight
            
            
            Universal dimension less variables and fine structure
            Changing a few variables would change the world drastically
            
        What the Wright Brothers Should Actually Be Famous For  
            Wright brothers made steering possible
            Meticulous use of wind tunnel, even corrected values from the 17th century
         The Bizarre World of Animal Flight | Compilation
            Slideslip―When a plane yaws but still goes in the same direction. This is dangerous because lift decreases
                Vertical tail helps correct sideslip and applies correct force
            Black backs help flying because they absorb heat and radiate to the back to ease air moving over the top
            Spiders use differences in electric fields to balloon up and down
            Bats
                1/5 of all mammal species
                Have different immune systems because they fly
                To fly, mitochondria is in overdrive, have lots of oxidative stress which means lots of DNA damage
                Bats are able to fix DNA damage from overdrive
                However, DNA damage is also occurrence in disease. Bats suppress inflammation
        Spice
            Spice kills bacteria
            More prevalent in equator where bacteria is more common
         Do larger animals take longer to pee? - David L. Hu - YouTube  
            The other Golden Rule
         Why are some people left-handed? - Daniel M. Abrams - YouTube
            The number of lefties reflects a balance of cooperative and competitive society
            Competitive pushes to 50-50 to gain fighting advantage
                i.e. baseball (50% of all big hitters are left)
            Cooperative pushes to 100-0 to gain tool-sharing/asset advantage
                i.e. golf players (only 4% are lefty)
        Real Engineering
            A10  
                APU is an extra engine that allows main engine to start (often seen in back tail of airlines)
                Gun recoil halves forward thrust
                    https://remnote-user-data.s3.amazonaws.com/BBVlnjwhjUEXvFrFvtqDvrp8haKi4g-SuatQsdnBsEFt0wFHzdC3_8F3p83GdTX1REhIp8giKubZCA847CfaG-SiaVHKyb-cvXTrYAuiZdug9Ly8PG-DPNoxXzjwQelD
            Wing Dihedrals
                Restoring force
             Why Fighter Jets Can Be Too Unstable - YouTube  
                Stable vs. unstable equilibrium
                The use of the rear canards/horizontal as a restoring force
                    Using downwash
                    https://remnote-user-data.s3.amazonaws.com/WbSyVH8BK-2UlVRhvlOdCa8TxOYJSPXxf_el3Jq24uzKPXLWxb4Mj-X2EIzjlVCGs4uoUOuah2V9YKvva1U06PWzyV4v_95gJQny7dwSsDC-apWnVaIz7UJc422S2yNu
                    https://remnote-user-data.s3.amazonaws.com/9Wh1UBQSvbVJvA4nIhwohgXH44ftJ2NEFtmrbxyasObYVpjFzAfp5t_mlS6nvdpTIN9BS4-rL8eTcYttWx7gyB4ek6BwU1KgcksVsd14AydbI5SGdc0IR6DCD6QLc96b  
                    Using angle of attack to increase/decrease downward force at end
                    https://remnote-user-data.s3.amazonaws.com/bkdwiEM_WtHWQhszTqpZJaWv5jEOdUa5A3Mdlj7-VTkq83pLq4fDRGgao0UkG6pTfm5ayu2LkIBH4EV9epgr1sSaPdaXoKFIHGm4d1dKr0Ar9iO-D-diA-ABbXjIYEGx
        
        Technology
        Leadership
        YouTube Notes
            Valorant
        Gaming
        Productivity
        Science
        Philosophy
        Economics
    Podcasts
        Breathe through nose, not mouth
            Breathing out of mouth releases 40% more than nose
            Nose takes in 20% more oxygen than equivalent through mouth
            Tape up mouth, through nose
            Exhales should be completely in and out
                The body needs a balance of CO2 and O2, not enough CO2 is a bad thing
                Breathe normally and slowly
                Hypoventilation: double breathe out and then breathe in while running
                    What triggers a need to breathe is not Oxygen, but CO2
        Lex Fridman
            Grant Sanderson
                Exponential Growth Curve
                    Feynman is an incredibly deep thinker beyond the womanizer he is known for (as seen through his letter to his wife)
                        Reinvention, trying to approach the problem by yourself. You gain a bunch of inarticulatable intuitions around the topic, formulations of counterexamples, etc.
                    Rate of change is proportional to the amount of the thing in itself
                        Internet: Creating more content allows you to create more content
                        Software you write allows you to write more software
                        --------------------- Portal ---------------------
                            
 -- Avoided infinite recursion --                         
            Sheldon Solomon
                Psychologists, don't mistake statistical precision for knowledge
                John Locke
                    Neoliberal/Conservative framework by today's standard, but used to bring down divine right/monarchy
                    State of nature vs. social contract
                Marxism
                    Marxism was a terrible economist, but great analysis of future problems with capitalism. Right problem
            Michael Malice: Anarchy
                Superman helps good people, batman hurts bad people
                Anyone who calls anarchy a utopia is a critic of anarchy
                "The problem with democracy is that those who need leaders are not qualified to choose them" - Michael Malice
                Language is a successful example of anarchy
            Jim Gates: Physics
                The architecture which enables our consciousness has no patent on consciousness #[[IdeasRemNote Graph]] 
        Conversations with Tyler
            John Maynard Keynes
                Keynes discussed eugenics, concerns that India would out breed the English, and the idea that England was a great colonizing force
                Keynes was a complicated personality
        James Clear
             The 2 Types of Growth: Which Growth Curve Are You Following?
                Type 1: Logarithmic Growth Curve
                    https://remnote-user-data.s3.amazonaws.com/zY2wQbhgnAe91dOnw0BNbxAHX4KhARRpDOc21jzcjE6gEEM1nSjwL8hAnelWvkqXO-EMbMw34EPNwu2X9YSuWuuoI6FhtILGnrZIoZ0bTKp7hTaTmWgvgN_Kp65gKLBq
                    examples
                        Fitness and Strength Training: The “beginner gains” come quickly at first, but then it becomes more difficult to get stronger each week.
                        Literacy: Children and young students make massive leaps as they learn how to read. Meanwhile, college students and well-educated adults have to put in a focused effort to expand their vocabulary beyond commonly used words.
                        Language proficiency: Learning how to speak even a rudimentary level of a new language opens up a whole new world. However, there are only meager gains left for fluent speakers to discover.
                        Weight Loss: It may be relatively easy to shed five pounds within a week or two, but then the progress slows. Each successive pound of fat loss is more stubborn than the last.
                        Musical skill: Improvements come quickly for a novice guitar player. Improvements come very slowly for a concert pianist.
                Type 2: Exponential Growth Curve
                    
                    https://remnote-user-data.s3.amazonaws.com/OxI7gkVIJCfeH9Gkie7zH7i6y6GWhFfFRLvSDIGvMuw9r7M50idqCALPX1P-ta_m7KJeE9hywvAUEZ_tXt5xW21f7L2bOuSMQYf3OxcjZ8arYxu9WWP2XZmfc0ZW5_oK
                    examples
                        Investments and wealth: Thanks to the power of compound interest, your retirement savings start out as a small treasure in the early years, but balloon in size during the final decade or two of savings.
                        Email subscribers and website traffic: New websites receive just a trickle of traffic here and there, but as the weeks and months roll on those trickles can build into a raging river of visitors and subscribers.
                        Entrepreneurship and business growth: The assets that you build for your business stack on top of one another and revenue compounds throughout the life of a successful business.
                        Social media followers: When you only have 100 followers, getting another 100 followers may take six months. Once you have 1,000 followers, however, getting the next 100 may only take one month. Once you have 100,000 followers, getting another 100 probably takes one day. Your growth rate snowballs.
        The Portal
            Peter Thiel #[[The Portal]] 
                Powerful to powerless takes power
                Hyper capitalism and hyper socialism with ubi
                Almost all companies began with two people. Google Apple Facebook. Entrepreneurship is not alone.
                Slave ship near slave ship. One is independent
                Closed fist can't receive
                Positive sum
                How do we tell a story that motivates sacrifice, incredibly hard work, for gratification of a future that is not intrinsically violent
                    Space Age, World War 2, etc., was a fight for the death
                Germany is pessimistic but comfortable, California is optimistic but uncomfortable
                Extreme pessimism says no point, extreme optimism says no need to do anything
                Two interesting points Eric learned
                    Government is a monopoly on violence
                    Nation is a group of people who've agreed to forget something in common
                Endowment per student
                
            Julius Caesar
                Triumvirate
                    Caesar
                    Pompey
                    Crassius
            Andrew Yang
                Make lifestyle around work
            Timur Kuran
                Préférence falsification―People's do not disclose that their hidden preference does not match their exoteric preference
                Eso and exo teric
                Cultural revolution of Turkey
                    turks, not Muslims―Rapid secularization leads to preference falsification
            Men, Women, and Nikola June 9, 2020
                Men like watching, women like being watched.
                Men are like a mirror, the idea of being admired is what interests women
                Nikola
                
            June 11, 2020
                We're the only nation that stayed together after Civil War
                Men are wired to be expendable
                Ghandi prioritized nonviolence, violence, then pacifism. If choose between violence and pacifism, choose violence. Ghandi is not the person we thought.
                That time 14 & 15 year old boys beat the U S Women's National Soccer Team
            June 13, 2020
                Compute, Memory, Bandwidth
                Andrew Yang Interview with Eric
                Making lifestyle around work
                
            Rabbi Wolfe
                Christianity is portable
                    As long as you believe in Jesus
                    Enables separation of church and state
                Judaism is familial
                    Cultural implications, you can be a Jewish Atheist
                    Creation in religious law, not like Roman Empire
            
            
            
            
            
            
            
        Coleman Hughes
            Coverage Bias #[[Coleman Hughes]] 
                For every George Floyd, there's a Tony Timpa.
                For every Breonna Taylor, there's a Duncan Lemp.
                For every Philando Castile, there's a Daniel Shaver.
            What happens after reparations? June 10, 2020 #[[Coleman Hughes]] 
                As an apology? When I apologize to my girlfriend, it is an acknowledgement that ends conflict. Will reparations truly heal racial conflict?
            Neil deGrasse Tyson #[[Coleman Hughes]] 
                The percentage death in custody based off race is statistically insignificant
                The percent of getting into custody based off race is significant
            Stephen Pinker #[[Coleman Hughes]] 
                Lead caused crime spike theory
                Incarceration rate of African Americans has continually decreased since 2001
            Thomas Chatterto #[[Coleman Hughes]] 
                Native Americans are twice as likely to be killed by police than African Americans
        
        
    Vocabulary
        Vocabulary Sentences
            
        Barron's 800 High-Frequency GRE Word List
            
            Definition
                Abate―subside or moderate. #Abate
                Abdicate―renounce; give up. #Abdicate
                Aberrant―abnormal or deviant. #Aberrant
                Abeyance―suspended action. #Abeyance
                Abject―wretched; lacking pride. #Abject
                Abjure―renounce upon oath. #Abjure
                Abscission―the act of cutting; the natural separation of a leaf or other part of a plant #Abscission
                Abscond―depart secretly and hide. #Abscond
                Abstemious―moderate in appetite #Abstemious
                Abstinence―the giving up of certain pleasures #Abstinence
                Abysmal―bottomless. #Abysmal
                Accretion―growth; increase. #Accretion
                Accrue―come about by addition. #Accrue
                Adamant―hard, inflexible. #Adamant
                Adjunct―something attached to but holding an inferior position. #Adjunct
                Admonish―warn; reprove. #Admonish
                Adulterate―make impure by mixing with baser substances It is a crime to adulterate foods without informing the buyer. #Adulterate
                Aesthetic―relating to beauty or the arts #Aesthetic
                Affected―artificial; pretended. #Affected
                Affinity―kinship. #Affinity
                Aggrandize―increase or intensify; raise in power, wealth, rank or honor. #Aggrandize
                Aggregate―sum; total. #Aggregate
                Alacrity―cheerful promptness. #Alacrity
                Alchemy―medieval chemistry. #Alchemy
                Allay―calm; pacify. #Allay
                Alleviate―relieve. #Alleviate
                Alloy―mixture as of metals. #Alloy
                Allure―entice; attract. #Allure
                Amalgamate―combine; unite in one body. #Amalgamate
                Ambiguous―unclear or doubtful in meaning. #Ambiguous
                Ambivalence―the state of having contradictory or conflicting emotional attitudes. #Ambivalence
                Ambrosia―food of the gods. #Ambrosia
                Ameliorate―improve. #Ameliorate
                Amenable―readily managed; willing to be led. #Amenable
                Amenity―something that increases comfort #Amenity
                Amulet―charm; talisman. #Amulet
                Anachronism―something or someone misplaced in time. #Anachronism
                Analgesic―causing insensitivity to pain. #Analgesic
                Analogous―comparable. #Analogous
                Anarchy―absence of governing body; state of disorder. #Anarchy
                Anodyne―drug that relieves pain; opiate. #Anodyne
                Anomalous―abnormal; irregular. #Anomalous
                Antecedent―something that comes before #Antecedent
                Antediluvian―antiquated; ancient. #Antediluvian
                Antipathy―aversion; dislike. #Antipathy
                Apathy―lack of caring; indifference. #Apathy
                Apex―tip; summit; climax. #Apex
                Apogee―highest point. #Apogee
                Apothegm―pithy, compact saying. #Apothegm
                Appease―pacify; soothe. #Appease
                Appellation―name; title. #Appellation
                Apposite―appropriate; fitting. #Apposite
                Apprise―inform. #Apprise
                Approbation―approval. #Approbation
                Appropriate―acquire; take possession of for one's own use. #Appropriate
                Apropos―with reference to; regarding. #Apropos
                Arabesque―ornate design featuring intertwined curves; a ballet position in which one leg is extended in back while the other supports the weight of the body #Arabesque
                Archeology―the study of material evidence of past human life #Archeology
                Ardor―heat; passion; zeal. #Ardor
                Arduous―hard; strenuous. #Arduous
                Argot―slang. #Argot
                Artless―without guile; open and honest. #Artless
                Ascetic―practicing self-denial; austere. #Ascetic
                Asperity―sharpness (of temper). #Asperity
                Aspersion―slanderous remark. #Aspersion
                Assiduous―diligent. #Assiduous
                Assuage―ease; lessen(pain). #Assuage
                Astringent―binding; causing contraction; harsh or severe. #Astringent
                Asylum―place of refuge or shelter; protection. #Asylum
                Atavism―resemblance to remote ancestors rather than to parents; reversion to an earlier type;. #Atavism
                Attenuate―make thin; weaken. #Attenuate
                Audacious―daring; bold. #Audacious
                Austere―strict, stern. #Austere
                Autonomous―self-governing. #Autonomous
                Avarice―greed for wealth. #Avarice
                Aver―state confidently. #Aver
                Avocation―secondary or minor occupation. #Avocation
                Avuncular―like an uncle. #Avuncular
                Axiomatic―taken for granted; self-evident truth #Axiomatic
                Bacchanalian―drunken. #Bacchanalian
                Banal―hackneyed; commonplace; trite. #Banal
                Banter―playful conversation #Banter
                Bard―poet. #Bard
                Bawdy―indecent; obscene. #Bawdy
                Bedizen―dress with vulgar finery. #Bedizen
                Behemoth―huge creature; something of monstrous size or power. #Behemoth
                Belie―contradict; give a false impression. #Belie
                Beneficent―kindly; doing good. #Beneficent
                Bifurcate―to divide into two parts #Bifurcate
                Blandishment―flattery. #Blandishment
                Blase―bored with pleasure or dissipation. #Blase
                Bolster―support; reinforce. #Bolster
                Bombastic―pompous; using inflated language #Bombastic
                Boorish―rude; insensitive. #Boorish
                Bovine―cowlike; placid and dull. #Bovine
                Brazen―insolent. #Brazen
                Broach―open up. #Broach
                Bucolic―rustic; pastoral The meadow was the scene of bucolic gaiety. #Bucolic
                Burgeon―grow forth; send out buds. #Burgeon
                Burnish―make shiny by rubbing; polish. #Burnish
                Buttress―support; prop up. #Buttress
                Cacaphonous―unpleasant or harsh-sounding #Cacaphonous
                Cadge―to beg; sponge #Cadge
                Callous―hardened; unfeeling. #Callous
                Calumny―malicious misrepresentation. #Calumny
                Canard―unfounded rumor. #Canard
                Canon―an established set of principles; a basis or standard for judgment; a group of literary works #Canon
                Cant―pious phraseology; jargon of criminals. #Cant
                Cantankerous―ill-humored; irritable. #Cantankerous
                Capricous―fickle #Capricous
                Captious―faultfinding. #Captious
                Cardinal―chief. #Cardinal
                Carnal―fleshly. #Carnal
                Carping―petty criticism; fault-finding. #Carping
                Caste―one of the hereditary classes in Hindu society, social stratification; prestige. #Caste
                Castigation―punishment; severe criticism. #Castigation
                Cataclysm―deluge; upheaval. #Cataclysm
                Catalyst―agent that brings about a chemical change while it remains unaffected and unchanged. #Catalyst
                Categorical―without exceptions; unqualified; absolute. #Categorical
                Caucus―private meeting of members of a party to select officers or determine policy. #Caucus
                Causal―implying a cause-and-effect relationship. #Causal
                Caustic―burning; sarcastically biting. #Caustic
                Celestial―heavenly. #Celestial
                Centrifugal―radiating; departing from the center. #Centrifugal
                Centripetal―tending toward the center. #Centripetal
                Champion―support militantly Martin Luther King, Jr., won the Nobel Peace Prize because he championed the oppressed in their struggle. #Champion
                Chasten―discipline; punish in order to correct. #Chasten
                Chicanery―trickery. #Chicanery
                Chivalry―the qualities idealized by knighthood such as bravery and gallantry toward women #Chivalry
                Churlish―boorish; rude. #Churlish
                Circuitous―roundabout. #Circuitous
                Clairvoyant―having foresight; fortuneteller. #Clairvoyant
                Clamor―noise. #Clamor
                Clique―small, exclusive group. #Clique
                Cloister―monastery or convent. #Cloister
                Coalesce―combine; fuse. #Coalesce
                Coda―concluding section of a musical or literary composition. #Coda
                Codify―arrange (laws, rules) as a code; classify We need to take the varying rules and regulations of the different health agencies and codify them into a. #Codify
                Cognizant―informed; conscious; aware #Cognizant
                Commensurate―equal in extent. #Commensurate
                Compendium―brief, comprehensive summary. #Compendium
                Complacent―self-satisfied. #Complacent
                Complaisant―trying to please; obliging. #Complaisant
                Complement―complete; consummate; make perfect. #Complement
                Compliant―yielding. #Compliant
                Compunction―remorse. #Compunction
                Concave―hollow. #Concave
                Conciliatory―reconciling; soothing. #Conciliatory
                Concoct―prepare by combining; make up in concert. #Concoct
                Concomitant―that which accompanies. #Concomitant
                Condone―overlook; forgive; give tacit approval; excuse. #Condone
                Confound―confuse; puzzle. #Confound
                Congenial―pleasant; friendly My father loved to go out for a meal with congenial companions. #Congenial
                Conjugal―pertaining to marriage. #Conjugal
                Connoisseur―person competent to act as judge of art, ect.; a lover of an art. #Connoisseur
                Conscript―draftee; person forced into military service. #Conscript
                Consecrate―dedicate; sanctify. #Consecrate
                Contend―struggle; compete; assert earnestly. #Contend
                Contentious―quarrelsome. #Contentious
                Continence―self-restraint; sexual chastity. #Continence
                Contrite―penitent. #Contrite
                Contumacious―disobedient; resisting authority. #Contumacious
                Conundrum―riddle; difficult problem. #Conundrum
                Convention―social or moral custom; established practice. #Convention
                Converge―come together. #Converge
                Convex―curving outward. #Convex
                Convivial―sociable #Convivial
                Convoluted―twisted; complicated #Convoluted
                Copious―abundant; plentiful #Copious
                Coquette―woman who flirts #Coquette
                Cornucopia―horn overflowing with fruit and grain; state of abundance #Cornucopia
                Cosmology―study of the universe as a totality; theory of the origin and structure of the universe #Cosmology
                Covert―hidden; secret #Covert
                Covetous―desiring something owned by another #Covetous
                Cozen―to mislead by trick or fraud; decieve #Cozen
                Craven―cowardly #Craven
                Credence―acceptance of something as true #Credence
                Credo―statement of belief or principle; creed #Credo
                Daunt―intimidate. #Daunt
                Dearth―scarcity. #Dearth
                Debauchery―corruption #Debauchery
                Decorum―propriety; seemliness. #Decorum
                Defame―to malign; harm someone's reputation #Defame
                Default―failure to do. #Default
                Deference―courteous regard for another's wish. #Deference
                Defunct―dead; no longer in use or existence. #Defunct
                Delineate―portray. #Delineate
                Demographic―related to population balance. #Demographic
                Demotic―pertaining to the people. #Demotic
                Demur―delay; object. #Demur
                Denigrate―blacken. #Denigrate
                Denizen―inhabitant of. #Denizen
                Denouement―outcome; final development of the plot of a play or other literary work. #Denouement
                Deride―scoff at. #Deride
                Derivative―unoriginal; obtained from another source. #Derivative
                Desiccate―dry up. #Desiccate
                Desuetude―state of disuse #Desuetude
                Desultory―aimless; haphazard; digressing at random. #Desultory
                Deterrent―something that discourages; hindrance. #Deterrent
                Detraction―slandering; aspersion. #Detraction
                Diaphanous―sheer; transparent. #Diaphanous
                Diatribe―bitter scolding; invective. #Diatribe
                Dichotomy―branching into two parts. #Dichotomy
                Diffidence―shyness. #Diffidence
                Diffuse―to spread out #Diffuse
                Digression―wandering away from the subject. #Digression
                Dirge―lament with music. #Dirge
                Disabuse―correct a false impression; undeceive. #Disabuse
                Discerning―mentally quick and observant; having insight. #Discerning
                Discomfit―put to rout; defeat; disconcert. #Discomfit
                Discordant―inharmonious; conflicting. #Discordant
                Discrepancy―lack of consistency; difference. #Discrepancy
                Discrete―separate; unconnected. #Discrete
                Discretion―prudence; ability to adjust actions to circumstances. #Discretion
                Disingenuous―not naive; sophisticated Although he was young, his remarks indicated that he was disingenous. #Disingenuous
                Disinterested―unprejudiced. #Disinterested
                Disjointed―disconnected. #Disjointed
                Dismiss―eliminate from consideration; reject. #Dismiss
                Disparage―belittle. #Disparage
                Disparate―basically different; unrelated. #Disparate
                Dissemble―disguise; pretend. #Dissemble
                Disseminate―scatter (like seeds). #Disseminate
                Dissident―dissenting; rebellious. #Dissident
                Dissolution―disintegration; looseness in morals. #Dissolution
                Dissonance―discord. #Dissonance
                Distend―expand;swell out. #Distend
                Distill―purify; refine; concentrate. #Distill
                Distrait―absentminded. #Distrait
                Diverge―vary; go in different directionsfrom the same point. #Diverge
                Divest―strip; deprive. #Divest
                Divulge―reveal. #Divulge
                Doctrinaire―unable to compromise about points of doctrine; dogmatic; unyielding. #Doctrinaire
                Document―provide written evidence. #Document
                Doggerel―poorverse. #Doggerel
                Dogmatic―positive; arbitrary. #Dogmatic
                Dormant―sleeping; lethargic; torpid. #Dormant
                Dross―waste matter; worhtless impurities. #Dross
                Dupe―someone easily fooled. #Dupe
                Ebullient―showing excitement; overflowing with enthusiasm His ebullient nature could not be repressed. #Ebullient
                Eclectic―selective; composed of elements drawn from disparate sources. #Eclectic
                Effervescence―inner excitement; exuberance. #Effervescence
                Effete―worn out; exhausted; barren. #Effete
                Efficacy―power to produce desired effect. #Efficacy
                Effrontery―shameless boldness. #Effrontery
                Egoism―excessive interest in one's self; belief that one should be interested in one's self rather than in. #Egoism
                Egotistical―excessively self-centered; conceited #Egotistical
                Elegy―poem or song expressing lamentation On the death of Edward King, Milton composed the elegy "Lycidas.". #Elegy
                Elicit―draw out by discussion. #Elicit
                Elixir―cure-all; something invigorating. #Elixir
                Elysian―delightful; blissful #Elysian
                Emaciated―thin and wasted. #Emaciated
                Embellish―adorn My mother-in-law's stories about her journey from Russia made us laugh because she embellished the bare. #Embellish
                Emollient―soothing or softening remedy. #Emollient
                Empirical―based on experience. #Empirical
                Emulate―rival; imitate. #Emulate
                Encomium―high praise; eulogy. #Encomium
                Endemic―prevailinig among a specific group of people or in a specific are or country. #Endemic
                Enervate―weaken. #Enervate
                Engender―cause; produce. #Engender
                Enhance―advance; improve. #Enhance
                Entomology―study of insects. #Entomology
                Enunciate―speak distinctly. #Enunciate
                Ephemeral―short-lived; fleeting. #Ephemeral
                Epistemology―branch of philosophy tha texamines the nature of knowledge #Epistemology
                Equable―tranquil; steady; uniform. #Equable
                Equanimity―calmness of temperament. #Equanimity
                Equivocate―lie; mislead; attempt to conceal the truth. #Equivocate
                Errant―wandering. #Errant
                Erudite―learned; scholarly. #Erudite
                Esoteric―hard to understand; known only to the chosen few. #Esoteric
                Essay―to make an attempt; subject to a test #Essay
                Estimable―admirable; possible to estimate #Estimable
                Ethnocentric―based on the attitude tha one's group is superior #Ethnocentric
                Etiology―causes or origins #Etiology
                Etymology―study of word parts. #Etymology
                Eugenics―study of factors that influence the hereditary qualities of the human race and ways to improve those qualities #Eugenics
                Eulogy―praise. #Eulogy
                Euphemism―mild expression in place of an unpleasant one. #Euphemism
                Euphoria―feeling of exaggerated (or unfounded) well-being. #Euphoria
                Euthanasia―mercy killing. #Euthanasia
                Evince―show clearly. #Evince
                Evocative―tending to call to mind or produce a reaction #Evocative
                Exacerbate―worsen; embitter. #Exacerbate
                Exact―to force the payment of; demand and obtain by authority #Exact
                Exculpate―clear from blame. #Exculpate
                Execrable―very bad. #Execrable
                Exhort―urge. #Exhort
                Exigency―urgent situation. #Exigency
                Existential―pertaining to existence; pertaining to the philosophy of existentialism. #Existential
                Exorcise―drive our evil spirits. #Exorcise
                Expatiate―talk at length. #Expatiate
                Expatriate―exile; someone who has withdrawn from his native land. #Expatriate
                Expiate―make amends for (a sin). #Expiate
                Explicate―explain; interpret; clarify. #Explicate
                Expository―explanatory; serving to explain. #Expository
                Extant―still in existence. #Extant
                Extemporaneous―not planned; impromtu. #Extemporaneous
                Extirpate―root up. #Extirpate
                Extraneous―not essential; external. #Extraneous
                Extrapolation―projection; conjecture. #Extrapolation
                Extrinsic―external; not inherent; foreign. #Extrinsic
                Facetious―humorous; jocular. #Facetious
                Facilitate―make less difficult. #Facilitate
                Factotum―handyman; person who does all kinds of work. #Factotum
                Fallacious―misleading. #Fallacious
                Fallow―plowed but sowed; uncultivated Farmers have learned that it is advisable to permit land to le fallow every few years. #Fallow
                Fatuous―foolish; inane. #Fatuous
                Fauna―animals of a period or region. #Fauna
                Fawning―courting favor by cringing and flattering. #Fawning
                Felicitous―apt; suitably expressed; well chosen. #Felicitous
                Feral―existing in a wild or untamed state #Feral
                Fervor―glowing ardor. #Fervor
                Fetid―malodorous. #Fetid
                Fetter―shackle. #Fetter
                Fiat―command. #Fiat
                Fidelity―loyalty. #Fidelity
                Filibuster―block legislation by making long speeches. #Filibuster
                Finesse―delicate skill. #Finesse
                Fissure―crevice. #Fissure
                Flag―droop; grow feeble. #Flag
                Fledging―beginner; novice #Fledging
                Flora―plants of a region or era. #Flora
                Florid―flowery; ruddy. #Florid
                Flourish―grow well; prosper; make sweeping gestures. #Flourish
                Flout―reject; mock. #Flout
                Flux―flowing; series of changes. #Flux
                Foment―stir up; instigate. #Foment
                Forbearance―patience #Forbearance
                Forestall―prevent by taking action in advance. #Forestall
                Formidable―menacing; threatening. #Formidable
                Forswear―renounce; abandon. #Forswear
                Founder―fail completely; sink. #Founder
                Founder―person who establishes (an organization, business). #Founder
                Fracas―brawl; melee. #Fracas
                Fractious―unruly. #Fractious
                Fresco―painting in plaste (usually fresh). #Fresco
                Frieze―ornamental band on a wall. #Frieze
                Froward―stubbornly contrary; obstinately disobedient #Froward
                Frugality―thrift; economy. #Frugality
                Fulminate―thunder; explode. #Fulminate
                Fulsome―disgustingly excessive. #Fulsome
                Fusion―union; coalition. #Fusion
                Futile―ineffective; fruitless. #Futile
                Gainsay―deny. #Gainsay
                Gambol―skip; leap playfully. #Gambol
                Garrulous―excessively talkative, especially about unimportant subjects; loquacious; wordy. #Garrulous
                Gauche―clumsy; boorish. #Gauche
                Geniality―cheerfulness; kindliness; sympathy. #Geniality
                Gerrymander―change in voting district lines in order to favor a political party. #Gerrymander
                Glib―fluent. #Glib
                Goad―urge on. #Goad
                Gossamer―sheer; like cobwebs. #Gossamer
                Gouge―tear out. #Gouge
                Grandiloquent―pompous; bombastic; using high-sounding language. #Grandiloquent
                Gregarious―sociable. #Gregarious
                Grouse―complain; fuss. #Grouse
                Guileless―without deceit. #Guileless
                Guise―appearance; costume. #Guise
                Gullible―easily deceived. #Gullible
                Gustatory―affecting the sense of taste. #Gustatory
                Halcyon―calm; peaceful. #Halcyon
                Hallowed―blessed; consecrated. #Hallowed
                Harangue―long, passionate, and vehement speech. #Harangue
                Harrowing―extremely distressing; terrifying #Harrowing
                Herbivorous―grain-eating. #Herbivorous
                Hermetic―sealed by fusion so as to be airtight. #Hermetic
                Hermetic―obscure and mysterious; occult. #Hermetic
                Heterodox―unorthodox; unconventional. #Heterodox
                Hieroglyphics―a system of writing in which pictorial symbols represent meanings or sounds; wirting or symbols that are difficult to decipher #Hieroglyphics
                Hirsute―hairy. #Hirsute
                Histrionic―theatrical. #Histrionic
                Homeostasis―tendency of a system to maintain relative stability. #Homeostasis
                Homily―sermon; serious warning. #Homily
                Homogeneous―of the same kind. #Homogeneous
                Hyperbole―exaggeration; overstatement. #Hyperbole
                Iconoclastic―attacking cherished traditions. #Iconoclastic
                Idolatry―worship of idols; excessive admiration. #Idolatry
                Igneous―produced by fire; volcanic. #Igneous
                Imbroglio―complicated situation; perplexity; entanglement. #Imbroglio
                Immutable―unchangeable. #Immutable
                Impair―worsen; diminish in value. #Impair
                Impassive―without feeling; not affected by pain. #Impassive
                Impecunious―without money. #Impecunious
                Impede―hinder; block. #Impede
                Impermeable―impervious; not permitting passage through its substance. #Impermeable
                Imperturbable―calm; placid. #Imperturbable
                Impervious―not penetrable; not permitting passage through. #Impervious
                Impinge―infringe; touch; collide with. #Impinge
                Implacable―incapable of being pacified. #Implacable
                Implausible―unlikely; unbelievable. #Implausible
                Implicit―understood but not stated. #Implicit
                Implode―collapse inward violently #Implode
                Imprecation―curse. #Imprecation
                Impute―attribute; ascribe. #Impute
                Inadvertenly―carelessly; unintentionally #Inadvertenly
                Incarnate―endowed with flesh; personified. #Incarnate
                Inchoate―recently begun; rudimentary; elementary. #Inchoate
                Incongruity―lack of harmony; absurdity. #Incongruity
                Inconsequencial―insgnificant; unimportant #Inconsequencial
                Incorporate―introduce something into a larger whole; combine; unite. #Incorporate
                Incursion―temporary invasion. #Incursion
                Indeterminate―uncertain; not clearly fixed; indefinite. #Indeterminate
                Indigence―poverty. #Indigence
                Indolent―habitually lazy; idle #Indolent
                Ineluctable―irresistable; not to be escaped. #Ineluctable
                Inert―unable to move; sluggish #Inert
                Ingenous―naive and trusting; lacking sophistication #Ingenous
                Inherent―firmly established by nature or habit. #Inherent
                Innocuous―harmless. #Innocuous
                Insensible―unconscious; unresponsive. #Insensible
                Insinuate―hint; imply. #Insinuate
                Insipid―lacking in flavor; dull. #Insipid
                Insouciant―indifferent; without concern or care. #Insouciant
                Insularity―narrow-mindedness; isolation. #Insularity
                Insuperable―insurmountable; invincible. #Insuperable
                Intangible―not able to be perceived by touch; vague. #Intangible
                Interdict―prohibit; forbid. #Interdict
                Internecine―mutually destructive. #Internecine
                Interpolate―insert between. #Interpolate
                Interregnum―period between two reigns. #Interregnum
                Intimate―hint. #Intimate
                Intractable―unruly; refractory. #Intractable
                Intransigence―state of stubborn unwillingness to compromise. #Intransigence
                Introspective―looking within oneself. #Introspective
                Inundate―overflow; flood. #Inundate
                Inured―accustomed; hardened. #Inured
                Invective―abuse. #Invective
                Inveigh―denounce; utter censure or invective He inveighed against the demagoguery of the previous speaker and urged that the audience reject his. #Inveigh
                Inveigle―lead astray; wheedle. #Inveigle
                Inveterate―deep-rooted; habitual. #Inveterate
                Invidious―designed to create ill will or envy. #Invidious
                Irascible―irritable; easily angered. #Irascible
                Irresolute―uncertain how to act; weak. #Irresolute
                Itinerant―wandering; traveling. #Itinerant
                Itinerary―plan of a trip. #Itinerary
                Jaundiced―yellowed; prejudiced; envious. #Jaundiced
                Jibe―to be in agreement #Jibe
                Jocose―given to joking. #Jocose
                Juggernaut―irresistible crushin force. #Juggernaut
                Junta―group of persons joined in political intrigue; cabal. #Junta
                Juxtapose―place side by side. #Juxtapose
                Kudos―honor; glory; praise. #Kudos
                Labile―likely to change; unstable. #Labile
                Laconic―brief and to the point. #Laconic
                Lambaste―beat; thrash verbally or physically. #Lambaste
                Lascivious―lustful. #Lascivious
                Lassitude―languor; weariness. #Lassitude
                Latent―dormant; hidden. #Latent
                Laud―praise #Laud
                Lethargic―drowsy; dull. #Lethargic
                Levee―earthen or stone embankment to prevent flooding. #Levee
                Levity―lack of seriousness or steadiness; frivolity. #Levity
                Liberal―tolerant; broad-minded #Liberal
                Libertine―debauched person, roué. Although she was aware of his reputation as a libertine, she felt she could reform him and help him break his dissolute way of life. #Libertine
                Libido―emotional urges behind human activity. #Libido
                Lilliputian―extremely small. #Lilliputian
                Limn―draw; outline; describe. #Limn
                Limpid―clear. #Limpid
                Linguistic―pertaining to language. #Linguistic
                Litany―supplicatory prayer. #Litany
                Literati―scholarly or learned persons #Literati
                Litigation―lawsuit. #Litigation
                Log―record of a voyage; record of daily activities #Log
                Loquacious―talkative. #Loquacious
                Lucid―easily understood; clear; intelligible. #Lucid
                Lucre―money. #Lucre
                Luminous―shining; issuing light. #Luminous
                Lustrous―shining. #Lustrous
                Machiavellian―crafty; double-dealing. #Machiavellian
                Machinations―schemes. #Machinations
                Maelstrom―whirlpool. #Maelstrom
                Magnanimity―generosity; nobility #Magnanimity
                Malign―speak evil of; defame. #Malign
                Malinger―to feign illness to escape duty #Malinger
                Malleable―capable of being shaped by pounding. #Malleable
                Maverick―rebel; nonconformist. #Maverick
                Megalomania―mania for doing grandiose things. #Megalomania
                Menagerie―a variety of animals kept together #Menagerie
                Mendacious―lying; false. #Mendacious
                Mendicant―beggar. #Mendicant
                Meretricious―flashy; tawdry; falsely attractive. #Meretricious
                Mesmerize―hypnotize. #Mesmerize
                Metamorphosis―change of form. #Metamorphosis
                Metaphysics―a branch of philosophy tha tinvestigates the ultimate nature of reality #Metaphysics
                Metereological―concerned with the weather #Metereological
                Meticulous―excessively careful. #Meticulous
                Mettle―courage; spirit. #Mettle
                Mettlesome―full of courage and fortitude #Mettlesome
                Microcosm―small world. #Microcosm
                Militate―work against. #Militate
                Minatory―menacing; threatening. #Minatory
                Minuscule―extremely small. #Minuscule
                Minutia―petty details #Minutia
                Misanthrope―one who hates mankind. #Misanthrope
                Miscellany―mixture of writings on various subjects. #Miscellany
                Miscreant―wretch; villain. #Miscreant
                Misogynist―hater of women. #Misogynist
                Mitigate―appease. #Mitigate
                Mnemonic―pertaining to memory. #Mnemonic
                Modicum―limited quantity. #Modicum
                Mollify―soothe. #Mollify
                Monolithic―solidly uniform; unyielding. #Monolithic
                Morose―ill-humored; sullen. #Morose
                Motley―parti-colored; mixed. #Motley
                Multifarious―varied; greatly diversified. #Multifarious
                Mundane―worldly as opposed to spiritual. #Mundane
                Necromancy―black magic; dealings with the dead. #Necromancy
                Negate―to cancel out; nullify #Negate
                Neologism―new or newly coined word or phrase. #Neologism
                Neophyte―recent convert; beginner. #Neophyte
                Nexus―connection. #Nexus
                Nonplussed―bewildered #Nonplussed
                Nostalgia―homesickness; longing for the past. #Nostalgia
                Nostrum―questionable medicine. #Nostrum
                Nugatory―futile; worthless. #Nugatory
                Obdurate―stubborn. #Obdurate
                Obsequious―slavishly attentive; servile; sycophantic. #Obsequious
                Obsequy―funeral ceremony. #Obsequy
                Obviate―make unnecessary; get rid of. #Obviate
                Occlude―shut; close. #Occlude
                Occult―mysterious; secret; supernatural. #Occult
                Odyssey―long, evenful journey. #Odyssey
                Officious―meddlesome; excessively pushy in offering one's services. #Officious
                Olfactory―concerning the sense of smell. #Olfactory
                Oligarchy―government by a few. #Oligarchy
                Onerous―burdensome. #Onerous
                Onomatopoeia―formation or use of words that imitate sounds of the actions they refer to #Onomatopoeia
                Opprobium―public disgrace; contempt #Opprobium
                Ornithologist―scientific student of birds. #Ornithologist
                Oscillate―vibrate pendulumlike; waver. #Oscillate
                Ostentatious―showy; pretentious; trying to attract attention. #Ostentatious
                Overweening―presumptuous; arrogant. #Overweening
                Paean―song of praise or joy. #Paean
                Paleontology―study of past geological eras through fossil remains #Paleontology
                Pallid―pale; wan. #Pallid
                Panegyric―formal praise. #Panegyric
                Paragon―model of perfection. #Paragon
                Partisan―one-sided; prejudiced; committed to a party. #Partisan
                Pathological―pertaining to disease. #Pathological
                Patois―local or provincial dialect. #Patois
                Paucity―scarcity. #Paucity
                Pedantic―showing off learning; bookish. #Pedantic
                Pellucid―transparent; limpid; easy to understand. #Pellucid
                Penchant―strong inclination; liking. #Penchant
                Penury―extreme poverty. #Penury
                Peregrination―journey. #Peregrination
                Peremptory―demanding and leaving no choice. #Peremptory
                Perennial―something long-lasting. #Perennial
                Perfidious―faithless; disloyal; untrustworthy #Perfidious
                Perfunctory―superficial; not thorough; lacking interest, care, or enthusiasm. #Perfunctory
                Perigee―point of moon's orbit when it is nearest the earth. #Perigee
                Permeable―porous; allowing passage through. #Permeable
                Perturb―disturb greatly. #Perturb
                Pervasive―spread throughout. #Pervasive
                Petulant―touchy; peevish. #Petulant
                Phlegmatic―calm; not easily disturbed. #Phlegmatic
                Phoenix―anything that is restored after suffering great destruction #Phoenix
                Physiognomy―face. #Physiognomy
                Piety―devoutness; reverence for God. #Piety
                Piquant―pleasantly tart-tasting; stimulating. #Piquant
                Pique―irritation; resentment. #Pique
                Placate―pacify; conciliate. #Placate
                Placid―peaceful; calm. #Placid
                Plaintive―mournful. #Plaintive
                Plasticity―ability to be molded. #Plasticity
                Platitude―trite remark; commonplace statement. #Platitude
                Platonic―purely spiritual; theoretical; without sensual desire. #Platonic
                Plethora―excess; overabundance. #Plethora
                Plumb―vertical. #Plumb
                Plummet―fall sharply. Stock prices plummeted as Wall Street reacted to the rise in interest rates. #Plummet
                Plutocracy―society ruled by the wealthy. #Plutocracy
                Porous―full of pores; like a sieve Dancers like to wear porous clothing because it allows the ready passage of water and air. #Porous
                Poseur―person who pretends to be sophisticated, elegant, etc., to impress others. #Poseur
                Pragmatic―practical (as opposed to idealistic); concerned with the practical worth or impact of something. #Pragmatic
                Prate―speak foolishly; boast idly. #Prate
                Prattle―babble. #Prattle
                Preamble―introductory statement. #Preamble
                Precarious―uncertain; risky. #Precarious
                Precept―practical rule guiding conduct. #Precept
                Precipitate―headlong; rash. #Precipitate
                Precipitate―throw headlong; hasten. #Precipitate
                Precursor―forerunner. #Precursor
                Preempt―head off; forestall by acting first; appropriate for oneself; supplant. #Preempt
                Prehensile―capable of grasping or holding. #Prehensile
                Premonition―forewarning. #Premonition
                Presage―foretell. #Presage
                Presumptuous―rude; improperly bold #Presumptuous
                Preternatural―beyond that which is normal in nature. #Preternatural
                Prevaricate―lie. #Prevaricate
                Primordial―existing at the beginning (of time); rudimentary. #Primordial
                Pristine―characteristic of earlier times; primitive, unspoiled. #Pristine
                Probity―uprightness; incorruptibility. #Probity
                Problematic―perplexing; unsettled: questionable. #Problematic
                Prodigal―wasteful; reckless with money. #Prodigal
                Profound―deep; not superficial; complete. #Profound
                Prohibitive―extremely high (of prices etc.). #Prohibitive
                Proliferate―grow rapidly; spread; multiply. #Proliferate
                Propensity―natural inclination. #Propensity
                Propitiate―appease. #Propitiate
                Propriety―fitness; correct conduct. #Propriety
                Proscribe―ostracize; banish; outlaw. #Proscribe
                Provident―displaying foresight; thrifty; preparing for emergencies. #Provident
                Puissant―powerful; strong; potent. #Puissant
                Punctilious―laying stress on niceties of conduct or form; precise. #Punctilious
                Pungent―penetrating, caustic, to the point #Pungent
                Purport―intention; meaning. #Purport
                Pusillanimous―cowardly; fainthearted. #Pusillanimous
                Quagmire―soft, wet, boggy land; complex or dangerous situation from which it is difficult to free oneself. #Quagmire
                Quail―cower; lose heart. #Quail
                Qualified―limited; restricted. #Qualified
                Qualm―sudden feeling of faintness or nausea #Qualm
                Query―question #Query
                Quibble―equivocate; play on words. #Quibble
                Quiescent―at rest; dormant. #Quiescent
                Quorum―number of members necessary to conduct a meeting. #Quorum
                Raconteur―story-teller. #Raconteur
                Rail―scold; rant. #Rail
                Raiment―clothing. #Raiment
                Ramification―branching out; subdivision. #Ramification
                Rarefied―made less dense [of a gas]. #Rarefied
                Rationale―fundamental reason #Rationale
                Rebus―puzzle in whic pictures or symbols represent words #Rebus
                Recalcitrant―obstinately stubborn. #Recalcitrant
                Recant―repudiate; withdraw previous statement. #Recant
                Recluse―hermit. #Recluse
                Recondite―abstruse; profound; secret. #Recondite
                Redoubtable―formidable; causing fear. #Redoubtable
                Refractory―stubborn; unmanageable. #Refractory
                Refulgent―brightly shining, resplendent #Refulgent
                Refute―disprove. #Refute
                Regale―entertain. #Regale
                Relegate―banish; consign to inferior position. #Relegate
                Remonstrate―to object or protest #Remonstrate
                Renege―deny; go back on. #Renege
                Reparation―amends; compensation. #Reparation
                Repine―fret; complain. #Repine
                Reprise―recurrent action; musical repetition; repeat performance. #Reprise
                Reproach―blame; censure. #Reproach
                Reprobate―person hardened in sin, devoid of a sense of decency. #Reprobate
                Repudiate―disown; disavow. #Repudiate
                Rescind―cancel. #Rescind
                Resolution―determination. #Resolution
                Resolve―decide; settle; solve. #Resolve
                Resolve―determination. #Resolve
                Reticent―reserved; uncommunicative; inclined to silence Hughes preferred reticent employees to loquacious ones, noting that the formers' dislike of idle chatter #Reticent
                Reverent―respectful. #Reverent
                Riposte―retaliatory action or retort #Riposte
                Rococo―ornate; highly decorated. #Rococo
                Rubric―title or heading (in red print); directions for religious ceremony; protocol. #Rubric
                Rue―regret #Rue
                Ruse―trick; stratagem. #Ruse
                Sage―person celebrated for wisdom. #Sage
                Salacious―lascivious; lustful. #Salacious
                Salubrious―healthful. #Salubrious
                Salutary―tending to improve; beneficial; wholesome. #Salutary
                Sanction―approve; ratify. #Sanction
                Sardonic―disdainful; sarcastic; cynical. #Sardonic
                Sartorial―pertaining to tailors. #Sartorial
                Satiate―surfeit; satisfy fully. #Satiate
                Saturate―soak. #Saturate
                Saturnine―gloomy. #Saturnine
                Satyr―half-human, half-bestial being in the court of Dionysus, portrayed as wanton and cunning. #Satyr
                Savor―enjoy; have a distinctive flavor, smell, or quality. #Savor
                Schematic―relating to an outline or diagram; using a system of symbols. #Schematic
                Secrete―hide away or cache; produce and release a substance into an organism. #Secrete
                Sedition―resistance to authority; insubordination. #Sedition
                Sedulous―diligent. #Sedulous
                Seismic―pertaining to earthquakes. #Seismic
                Sensual―devoted to the pleasures of the senses; carnal; voluptuous. #Sensual
                Sensuous―pertaining to the physical senses; operating through the senses. #Sensuous
                Sentient―aware, concious, able to preceive #Sentient
                Servile―slavish; cringing. #Servile
                Sextant―navigation tool used to determine a ship's latitude and longitude. #Sextant
                Shard―fragment, generally of pottery. #Shard
                Sidereal―relating to the stars. #Sidereal
                Simian―monkeylike. #Simian
                Simile―comparison of one thing with another, using the word like or as. #Simile
                Sinecure―well-paid position with little responsibility. #Sinecure
                Singular―unique; extraordinary; odd. #Singular
                Sinuous―winding; bending in and out; not morally honest. #Sinuous
                Skeptic―doubter; person who suspends judgment until he has examined the evidence supporting a point of view. #Skeptic
                Sobriety―moderation (especially regarding indulgence in alcohol); seriousness. #Sobriety
                Sodden―soaked; dull, as if from drink. #Sodden
                Solicitous―worried, concerned. #Solicitous
                Soliloquy―talking to oneself. #Soliloquy
                Solvent―able to pay all debts. #Solvent
                Somatic―pertaining to the body; physical. #Somatic
                Soporific―sleep producing. #Soporific
                Sordid―filthy; base; vile. #Sordid
                Specious―seemingly reasonable but incorrect. #Specious
                Spectrum―colored band produced when a beam of light passes through a prism. #Spectrum
                Spendthrift―someone who wastes money. #Spendthrift
                Sporadic―occurring irregularly. #Sporadic
                Squalor―filthy, wretched condition #Squalor
                Staccato―played in an abrupt manner; marked by abrupt, sharp sound. #Staccato
                Stanch―check flow of blood. #Stanch
                Stentorian―extremely loud. #Stentorian
                Stigma―token of disgrace; brand. #Stigma
                Stint―be thrifty; set limits. #Stint
                Stint―supply; allotted amount; assigned portion of work. He performed his daily stint cheerfully and willingly. #Stint
                Stipulate―make express conditions, specify. #Stipulate
                Stolid―having or showing little emotion #Stolid
                Stratified―divided into classes; arranged into strata. #Stratified
                Striated―marked with parallel bands; grooved. #Striated
                Stricture―critical comments; severe and adverse criticism. #Stricture
                Strident―loud and harsh. #Strident
                Strut―pompous walk. #Strut
                Strut―supporting bar. #Strut
                Stultify―cause to appear or become stupid or inconsistent; frustrate or hinder. #Stultify
                Stupefy―make numb; stun; amaze. #Stupefy
                Stygian―literary dark. #Stygian
                Subpoena―writ summoning a witness to appear. #Subpoena
                Subside―settle down; descend; grow quiet. #Subside
                Substantiate―verify; support. #Substantiate
                Substantive―essential; pertaining to the substance. #Substantive
                Subsume―include; encompass. #Subsume
                Subversive―tending to overthrow; destructive. #Subversive
                Succor―aid; assistance; relief. #Succor
                Suffrage―the right to vote #Suffrage
                Sundry―various; several. #Sundry
                Supersede―cause to be set aside; replace. #Supersede
                Supine―lying on back. #Supine
                Supplant―replace; usurp. #Supplant
                Suppliant―entreating; beseeching. #Suppliant
                Supplicant―one who asks humbly and earnestly #Supplicant
                Supposition―hypothesis; surmise. #Supposition
                Syllogism―logical formula consisting of a major premise, a minor premise and a conclusion; deceptive. #Syllogism
                Sylvan―pertaining to the woods; rustic. #Sylvan
                Tacit―understood; not put into words. #Tacit
                Talisman―charm. #Talisman
                Tangential―peripheral; only slightly connected; digressing. #Tangential
                Tautology―unnecessary repetition #Tautology
                Taxonomy―science of classification #Taxonomy
                Tenet―doctrine; dogma. #Tenet
                Tenuous―thin; rare; slim. #Tenuous
                Terrestrial―on or relating to the earth. #Terrestrial
                Theocracy―government of a community by religious leaders. #Theocracy
                Thespian―pertaining to drama. #Thespian
                Timbre―quality of a musical tone produced by a musical instrument. #Timbre
                Tirade―extended scolding; denunciation. #Tirade
                Toady―servile flatterer; yes man. #Toady
                Tome―large volume. #Tome
                Torpor―lethargy; sluggishness; dormancy. #Torpor
                Torque―twisting force; force producing rotation. #Torque
                Tortuous―winding; full of curves. #Tortuous
                Tout―publicize; praise excessively. #Tout
                Tractable―docile. #Tractable
                Transgression―violation of a law; sin. #Transgression
                Transient―momentary; temporary; staying for a short time. #Transient
                Translucent―partly transparent. #Translucent
                Travail―painful labor. #Travail
                Travesty―comical parody; treatment aimed at making something appear ridiculous. #Travesty
                Treatise―article treating a subject systematically and thoroughly. #Treatise
                Tremulous―trembling; wavering She was tremulous more from excitement than from fear. #Tremulous
                Trepidation―fear; trembling agitation. #Trepidation
                Truculence―agressiveness; ferocity. #Truculence
                Tryst―meeting. #Tryst
                Tumid―swollen; pompous; bombastic. #Tumid
                Turbid―muddy; having the sediment disturbed. #Turbid
                Turgid―swollen; distended. #Turgid
                Tutelary―protective; pertaining to a guardianship. #Tutelary
                Uncanny―strange; mysterious. #Uncanny
                Undulating―moving in waves #Undulating
                Unfeigned―genuine; real. #Unfeigned
                Untenable―unsupportable. #Untenable
                Untoward―unfortunate; annoying. #Untoward
                Usury―lending money at illegal rates of interest. #Usury
                Vacillate―waver; fluctuate. #Vacillate
                Vacuous―empty; lacking in ideas; stupid. #Vacuous
                Valedictory―pertaining to farewell. #Valedictory
                Vapid―insipid; inane. #Vapid
                Variegated―many-colored. #Variegated
                Vaunt―to boast, drag #Vaunt
                Venal―capable of being bribed The venal policeman accepted the bribe offered him by the speeding motorist whom he had stopped. #Venal
                Vendetta―blood feud. #Vendetta
                Venerate―revere. #Venerate
                Veracious―truthful. #Veracious
                Verbose―wordy. #Verbose
                Vertigo―dizziness. #Vertigo
                Vexation―irritation, annoyance #Vexation
                Viable―capable of maintaining life; practicable; workable. #Viable
                Vindictive―revengeful. #Vindictive
                Virtuoso―highly skilled artist. #Virtuoso
                Visage―face; appearance. #Visage
                Viscous―sticky, gluey. #Viscous
                Vitiate―spoil the effect of; make inoperative. #Vitiate
                Vituperative―abusive; scolding He became more vituperative as he realized that we were not going to grant him his wish. #Vituperative
                Vivisection―act of dissecting living animals. #Vivisection
                Vogue―popular fashion. #Vogue
                Volatile―changeable; explosive; evaporating rapidly. #Volatile
                Vortex―whirlwind; whirlpool; center of turbulence; predicament into which one is inexorably plunged. #Vortex
                Warranted―justified #Warranted
                Wary―very cautious. #Wary
                Welter―wallow. #Welter
                Welter―turmoil; bewildering jumble. #Welter
                Whimsical―capricious; fanciful. #Whimsical
                Wistful―vaguely longing; sadly pensive. #Wistful
                Zealot―fanatic; person who shows excessive zeal. #Zealot
            
            
        
        
    Favorite Stories
        Running for President in Student Council
        Writing Competitions, and getting a B in Mr. Sylvia's Class
        Sierra Katow
    
    
    
    
    
IdeasRemNote Graph
    Contrarian Views
        Xenophilic Restrictionist
            I love immigrants, I hate they way they are used
        Discrepancies in achievement between men and women is understandable
            High standard deviation of men leads to higher proportions at the extremes
        The scarcity mindset
            When there is food on the table, there are many problems. When there is no food on the table, there is only one.  
            --------------------- Portal ---------------------
 -- Avoided infinite recursion --             
        Smart but not educated
        Gatling gun, potential violence helps prevent actualized violence
    Writing List of Ideas
        
        August 19th, 2020 An ethical can of words, not because we are evolving too slowly, but because we are evolving too quickly
        Comforting Thoughts for Regret and Failure
            Avoid getting hurt twice. First for not doing it, and second for dealing with the repercussions.
            How to Get Out
                1.Own It
                2. Just for fun
            Let Go
                If you're holding onto something, you can't receive anything. Release your hand
        You’re alone in this world
            The average number of times anyone in this audience thinks about you a day is 0. The average person does not have enough time to be thinking about you, but thinking about themselves. That is the most beautiful things ever.
            Everyone is pushing and pursuing their own agendas. 
                It’s not a thought you should fear, you should use it to push yourself towards full self reliance and freedom. 
                It’s liberating.
                https://thepowermoves.com/the-50th-law/
                "What you do in the dark is what makes you shine in the light"  
            Zero Sum Mindset
                Praise others. It will bring them peace of mind.  Do not expect others to praise you. It will bring you peace of mind.  
        My silence is a choice. Silence is not the absence of thought, but its ultimate manifestation.
        Context
        Not because you'll be gone, but because you won't be here.
        Practice
            Really important to apply concepts to remember the Contextto use it.
            Memorize Context not content
            Not what to know but when to use
            It is not so much what strategies but when to use it.
        Leadership
            Leadership is manipulation - not of people, but of words. Word things the right way
        Writing
            Write It Like an Email
                There was an experiment a couple of decades back that teachers conducted. They gave their students two assignments:
                a) Write a composition on paper
                b) Write on the same topic in an email
                They  were surprised to find that almost everyone scored higher in writing  the email. There was something about this medium of typed text that  released the burden off of the kids’ chests and allowed them to be  natural. They didn’t use too many fancy words, and they just said what  they wanted to say in an organic, direct way.
                I’ve  found that a great way to start writing a new blog post is to tell  yourself that you’re writing an email to an old friend after one or two  glasses of wine.
        What has been done before, can be done again (The story of the four minute mile)
            Why do you think we remember the first, but not the second? Following pushed boundaries is natural of human condition. Likewise, it is important to leverage this to our advantage. Read about other people's stories.
            Two types of inspiration, quotes, or stories that show the impossible
        
    Ideas Journal
        June 8th, 2020
            Goal oriented behavior can arise from goalless deterministic physical processes #[[Oh Shit]] 
                The goal of math is to generalize, not particularize
            Nikola #Memories
            Physics vs. Biology
                Physics wishes to generalize in spite of the details, biology wishes to generalize the details
            Coleman Hughes
                Zimbabwe
                Outpacing our parents, two steps behind are demonized
                Obama reversed his stance on gay marriage on 2010 #[[Oh Shit]] 
                We are in for a rude awakening if we apply the same standards onto our parents unto ourselves #[[Oh Shit]] 
        June 13th, 2020
            Physics
                Turbulent vs. Laminar Flow
                The rule vs. the exception
                Create turbulence, skin friction vs. pressure friction in Golf Ball
                Eddies
            Photography
                Faux Waist
                Chin down
                Extend neck
                Drop hip
                Push Chin Forward
            Eric Weinstein Podcast with Son
            EA Topics
                Self-Driving Cars are supervised learning
                Input vs. Output (GDP, Work)
                Availability heuristic with 9/11
                Save 10,000 lives
                Orthogonality Thesis
            Poland, Switzerland, Madrid, Berkeley, London, Scotland, Spain
        August 20th, 2020
            The problem of identity politics and biology
                Natural Selection is a machine which takes  A) VARIATION, subjects it to B) DIFFERENTIAL SUCCESS, and makes it C) HERITABLE to begin again.  Here's the rub:  A)=Diversity B)=Inequality C)=Privilege
        October 7th, 2020
            That and which: The difference of American and the rest of the world
            "That" is referring to limiting, whwereas which is not limiting
        Talk with Andrew, Jonathan, and KevinOctober 31st, 2020
            10xer. People scale but Talent Doesn't
        November 9th, 2020
            Call with Andre
                We talked about what to do when we don't vibe with people, time fixes relationships, when people are special, having a type vs. not a type
                You can be skeptical while being open-minded. Skeptical and close-minded are not mutually exclusive #[[IdeasRemNote Graph]] 
                Validation. That other people are on the same boat. Honestly, that is the best part of talking about it.
        November 10th, 2020
            Quora
                Math is the logic of certainty, whereas statistics is the logic of uncertainty    #[[IdeasRemNote Graph]] 
            Call with Kyung Mi Lee on Writing
                Hold a position. Do not simply regurgitate the prompt. You will make a tautology   #[[IdeasRemNote Graph]] 
                If you highlight your topic sentences and copy paste them to a separate essay, it will write a separate essay 
        November 11th, 2020
            Engineering Jokes
                "The optimist says the glass is half full, the pessimist says the glass is half empty. The engineer says the glass is twice as big as it needs to be." Best.  quote. ever.    #Joke
                A mathematician, a physicist, and an engineer were all given a red rubber ball and told to find the volume.  The mathematician carefully measured the diameter and evaluated a triple integral.  The physicist filled a beaker with water, put the ball in the water, and measured the total displacement.  The engineer looked up the model and serial numbers in his red-rubber-ball table.    #Joke
             Joshua Simpson's answer to What do you know that most people don’t? - Quora  
        November 18th, 2020
            Population Ethics
                It could be ethical to consume meat because the life of a cow is net positive
                Measuring a life worth living vs. what is tall?
                    Tall is subjectively defined
                    But I would say that the analogy is not proper because while there exists an absolute metric to measure length, ther is none for a life
                        5 feet to you should mean the same to you as 5 feet to me
                Fear of Missing Out in College?   #[[Writing List of Ideas]] 
                    There are people who would like this problem of missing out. The fact that we are sad about missing out on opportunity is a privilege.   
        
        
    Quotes
        description on page→Quotes are a rather unique art form. Of them, there is a unique and ineffable quality to a good one. Too great or extreme to be expressed or described in words.
        Productivity #Productivity
            
            Effective vs. Efficient "Rowing harder doesn't help if the boat is headed in the wrong direction." -Kenichi Ohmae  
        High Value Grit Mindsets (Habits, Perserverance) #[[High Value Grit Mindsets]] 
            Habits / Perseverance        #[[Habits / Perseverance]] 
                "What you do in the dark is what makes you shine in the light"
                "You throw a bucket of water on a rock and it doesn't do anything. You let a drop of water fall onto a rock everyday, it creates a hole in that rock."
                “You are only entitled to the action, never to its fruits.” - Bhagavad Gita, the ancient Sanskrit scripture
                What has been done before, can be done again (The story of the four minute mile)
                “When you're good at something, you'll tell everyone. When you're great at something, they'll tell you.”― Walter Payton
                "If you don't get what you want, it's a sign either that you did not seriously want it, or that you tried to bargain over the price." ―Rudyard Kipling
                Fall Down 7 Times, Stand up 8
                You're your best advocate. Don't also be your worst enemy.
                "What you do in the dark is what makes you shine in the light"
            Risk Taking #[[Risk Taking]] 
                The biggest risk is not taking any. The biggest failure is never failing. Ask the impossible questions. I am certain that there's a good chance that after this talk, many of you won't try. Statistics is not on your side. But that means that even wanting to be better makes you different, a minority that separates you from everyone else.
                Be the best at what you do, or the only one doing it
                The biggest risk is not taking one
            Misc.  
                Nothing is boring. If you're bored you're boring
            
        Interpersonal (Making Friends)
            Making Friends / Caring
                To the world you may be one person; but to one person you may be the world
                "Nobody cares how much you know, until they know how much you care" Theodore Roosevelt
                If you want to make friends, make people feel better when you're with them than when you are not
                “There isn’t anyone you couldn’t love once you’ve heard their story. ”― Mary Lou Kownacki
                “Humility is not thinking less of yourself, it's thinking of yourself less.”― CS Lewis
                
            Conversation
                "Speak only when you fully intend on finishing your sentence" - Charisma in Command
                "A good listener is one who helps us overhear ourselves." - Yahia Lababid
                Comforting
                    “You do not get to make me extraordinary as an excuse not to succeed.” — Lisa Nichols.
        James Clear
            Praise others. It will bring them peace of mind.  Do not expect others to praise you. It will bring you peace of mind.
            Most failures are one-time costs. Most regrets are recurring costs. The pain of inaction stings longer than the pain of incorrect action.
            "Your success depends on the risks you take.  Your survival depends on the risks you avoid."
            Opportunity: "If you spend too much time working on good things, then you don’t have much time left to work on great things." - James Clear
            "Procrastinating on something important is choosing to delay a better future."
            “Most people don’t have trouble with focusing. They have trouble with deciding.”-James Clear
            Asking Good Questions
                The physicist Isidor Isaac Rabi on the importance of good questions (and good mothers):
                “My mother made me a scientist without ever intending to.
                Every other Jewish mother in Brooklyn would ask her child after school: 'So? Did you learn anything today?'
                But not my mother.
                'Izzy,' she would say, 'did you ask a good question today?'
                That difference — asking good questions — made me become a scientist.”
            Results vs. Lifestyle
                "In the long-run, the people who succeed are the ones who want to live the lifestyle that precedes the results.
                Stop asking, "What results do I want to have?"
                Start asking, "What lifestyle do I want to live?"
                It's common to want results. It's rare to want the lifestyle."
            “Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday." --Wilma Rudolph
            Taking Shots
                "A few things you need to achieve exceptional results:
                1) Quantity: You take lots of shots.
                2) Quality: You take thoughtful shots.
                3) Consistency: You keep shooting for a long time.
                4) Feedback. You take better shots over time.
                5) Luck: You get a few favorable bounces."
            Avoid Debt
                "Don’t spend what you haven’t earned.
                Avoid financial debt. Don’t spend money you haven’t earned.
                Avoid social debt. Don’t spend goodwill you haven’t earned.
                Avoid calendar debt. Don’t spend (free) time you haven’t earned.
                The disciplined earner can be a guilt-free spender."
            "Most people think they lack motivation when they really lack clarity."
            "What looks like talent is often careful preparation. What looks like skill is often persistent revision."
            "Rowing harder doesn't help if the boat is headed in the wrong direction." -Kenichi Ohmae
            "Feel compliments as deeply as you feel insults."
            Reading vs. Reflection
                "Reading can teach you the best of what others already know.
                Reflection can teach you the best of what only you can know."
            "Be radically proactive about any behavior that pays off in 10 years."
            Ignorance vs. Genius
                "To simplify before you understand the details is ignorance.
                To simplify after you understand the details is genius."
            5-Step
                "A 5-step process for nearly anything:
                1) Explore widely. Find out what is possible.
                2) Test cheaply. Run small, quick experiments. Sample things.
                3) Edit ruthlessly. Focus on the best. Cut everything else.
                4) Repeat what works. Don't quit on a good idea.
                5) Return to 1."
        Me
            "The quality of your life is determined by the problems you have to solve, while your potential is by the problems you want to solve."
            Know what you want and find what others want--Me
            I'm surrounded by children but I'm the only one comfortable showing it
            If I'm immature then why am I surrounded by children
        We do not inherit the Earth from our ancestors—we borrow it from our children
        "Content doesn't determine our happiness but context"
            Vietnam Story
                It wasn't long before one American in the truck said, "This place stinks." Another said, "These people live just like animals." Finally, a young air force man said, "Yeah, they got nothin' to live for; they may as well be dead."
                What could you say? It seemed true enough.
                
                But just then, an old sergeant in the truck spoke up. He was the quiet type who never said much. In fact, except for his uniform, he kind of reminded you of one of the tough men in the village. He looked at the young airman and said, "You think they got nothin' to live for, do you? Well, if you are so sure, why don't you just take my knife, jump down off the back of this truck, and go try to kill one of them?"
                
                There was dead silence in the truck. . . .
                
                The sergeant went on to say, "I don't know either why they value their lives so much. Maybe it's those snotty nosed kids, or the women in the pantaloons. But whatever it is, they care about their lives and the lives of their loved ones, same as we Americans do. And if we don't stop talking bad about
                them, they will kick us out of this country!"
                
                [A soldier] asked him what we Americans, with all our wealth, could do to prove our respect for the peasants' human equality despite their destitution. The sergeant answered easily, "You got to be brave enough to jump off the back of this truck, knee deep in the mud and sheep dung. You got to have the courage to walk through this village with a smile on your face. And when you see the smelliest, scariest looking peasant, you got to be able to look him in the face and let him know, just with your eyes, that you know he is a man who hurts like you do, and hopes like you do, and wants for his kids just like we all do. It is that way or we lose."
                
                The code of the Ethical Warrior, even as an aspiration, shows that the American armed forces have come a long way from a time when its soldiers referred to Vietnamese peasants as gooks, slopes, and slants and when the military was slow to investigate atrocities against civilians such as the massacre at My Lai. As former Marine captain Jack Hoban, who helped to implement the Ethical Warrior program, wrote to me, "When I first joined the Marines in the 1970s it was 'Kill, kill, kill.' The probability that there would have been an honor code that trained marines to be 'protectors of all others — including the enemy, if possible' would have been o percent."
        
        Leadership
    I’ve always found it simple to make things complicated, but for me, writing is the opposite: it is the translation of the intangible to the tangible. My thoughts have had time over the years to become incredibly grand and complex, but that means I must expand my ability to condense these ideas into tiny words.
    "Not everyone's a king but anyone can wear the crown"
