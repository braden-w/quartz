Lecture 1February 1st, 2021: Intro to improv
    Constitutive equation↔Based on an equation
    Flow in general =↔Net in - Net Out + Generation
        Net in = q0
        Net out = q1
    Dimensionless variable↔divide unit by itself
        example→\overline{t}=t/\tau 
        \tau is a collection of constants (such as RA)
            Set \tau to all the constants we want to get rid of in the t  term
        why use them→allows us to use a "scale" that applies to all problems
Lecture 2 February 3rd, 2021: Theory of dimensionless variables
    Buckingham PI theorem↔Physical problems are invariant from measurement units.
        Solutions depend on N  dimensionless parameters (\pi's ). Solutions can also be can be written in terms of relations between N  dimensionless parameters \pi's
        \pi's→Dimensionless parameters
        N→number of parameters (P) - number of units (U)
        Buckingham Pi says that I can find N parameters. They can be anything (any can work), but once we find some, we can find the rest!
Lecture 3 February 8th, 2021
    What to set
        \bar{v} = \frac{v}{v_0}
        \bar{v} = \frac{v}{v_\infty}
        \bar{v} = \frac{v-v_\infty}{v_0-v_\infty}
        Characteristic time↔\tau 
        Characteristic velocity↔\bar{v} 
    Mantras: If stuck, consider...
        When in doubt, divide by \omega_0=\omega_1=\omega_2
        Introduce t=\frac{t}{\tau}  early on
        Isolate v so divide everything out
        When introducing \bar{v} , declare \bar v = 1
        Steady state: consider when \frac{dv}{dt}=0
Lecture 4 February 10th, 2021
    Multicomponent Problems
        Separation, and mixing
https://remnote-user-data.s3.amazonaws.com/NfMWFpF_rTr3S15zeTVmqGoA_ZTAkep1KgWRw455FzpbCZmMMkOl46l1-z42TrfViv0V2jEelqduEfyTA92-XsgPLLArgs_2fpn8_KuWj-F0_DNBrW4c3Q-sJkTAutDU.png
    Component separation problem
        w→mass (solute+solvent) flow
        \omega→solute mass fraction
        1-\omega→solvent mass fraction
    Separation problems
        Rigorous approach, correcting for different \omega's
https://remnote-user-data.s3.amazonaws.com/ad50sXM4-MWEb9RP2pmhS6U9MiiYdPkNgG6OqQ0Jp7Cljo9ZEo9UkpWr3ddxJwCYqgPOEyvi5mAKqXqp5dAIefsBZbYBTTWCdvYUkjC-hz1tj9Do9-eJ6ShpsxXypWrF.png  
2 are independent, the other is not
        https://remnote-user-data.s3.amazonaws.com/YahSMbihShhu8wsxOr6aR92HI-ac9b1KTerA1-QZ-VE4u-Eq8XDRN0oS9vlHeUQKQN-WxWirVChmmOKTf2BXhhzu4NjYQUc0nitveiCwe51TkvszrU21NQsi6PhwbqsI.png 
w_1,\omega_1  is a fluid separated from the solute w_2,\omega_2
            Setup
                inputs→w_0, \omega_0  
                unknowns→w_1, w_2, \omega_2, m ,\omega 
                need 3 additional equations
                2 equations
                    w_1+w_2=\frac{m}{r}  where r  is "resistance"
                    q=\frac{h}{r}
            How to remove variables
                assume↔Well-stirred, so \omega = \omega_2 
                fraction of solvent removed w_1=f(1-\omega_0)w_0
            Steady state (note that there is no need for mass)
                https://remnote-user-data.s3.amazonaws.com/RxrlHkzS5dLY0VnjKBB7HqmWrYsRIA5NanSPw-Z5Z1QnWpdyzyYbTBb2tQQ_t9phalVVmTWwQSIQmufiaxvu4_NbzxNGZtVy2s2gCnB1FH3iiwnMQMQk_MAb_w8Y8nim.png  https://remnote-user-data.s3.amazonaws.com/kbsATevimIZUm1ohoqFz1mWhanr0cRgzFamroC1v8sVtmyb6BtaRac5L9lHxVgIuYsZC65BXUn3Posy0RohL72UBOlL7FXmnHEIp9gvDRPOp_NtDRIk7_OMgPOvGBrrx.png
                Solution for steady state, when f=1
                    1) becomes
https://remnote-user-data.s3.amazonaws.com/57THRvatJW4WPnwFSKwpTOKoB-t75xtvtblqD6-GUQqOXWKAYa2h9lFHxUje1bJTGZHYw1PcsMN8v1ZYrVhKdK68UvFvRmt0Rd_Ev0nLQth7PXdsCpzj8FI2lPrdVAhT.png  when f=1  (steady state)
                    2) becomes
https://remnote-user-data.s3.amazonaws.com/pmK2EEI804_eNCbwMg_nnYxGXnkwiHGKGPHolzMtVE30mm3NTFUHCwF9ip-SC4JW9fHm0j_AyF1DrfpNFaVhO3DvKPIc61yCQQMNxYVaG1RWD_kgXoxhpuv17khby5Xr.png when f=1  (steady state)
                    
Lecture 5 February 15th, 2021
    Steady state mixing problems
        https://remnote-user-data.s3.amazonaws.com/3pefy9i15a-nLEnlB3SgAXQCCVXR02EEhOUoOxGgnUhfDGMy5Rci78p45x6fwAi1VsKuwpoeJhnmX8VX9d5801XflbRjmP3DOEkFkT6rAgyVgbqimyk-kgZGQv_BgAlv.pnghttps://remnote-user-data.s3.amazonaws.com/2Hb0qp60BGwm1HHmOn09t7r9rc5ZEQQpl78UL1vmoYAGT3O0GI0heouQ-luk0f-bWe2hZxEm0oPMhAdwjWPbs98RXqCubOyxufHSiFhZWtapCFacW8ewkfP8TkF9tI_K.png
        https://remnote-user-data.s3.amazonaws.com/RWN8xEcIqVgTDSw0dkyqr-Pl6V5_O-xCJfx7oaSndTQuyDMAojizC3hJiyKmpo0v_4g92mF7M-k2ZP2CHQs9ld-GRPP3_D8RnSCX1aKI9b49Q8aT9P2T-2p4mWCVcxYa.png
        --------------------- Portal ---------------------
            Second Semester
    Degrees of freedom
        Degrees of freedom↔# Variables - # Equations
            f>0 underspecified
            f<0 overspecified
        Question
https://remnote-user-data.s3.amazonaws.com/gT-p_uMRId-a0eKbqsKh9CiA6oGH_cCvxt9iXg-BTrQKf8Ogy7tewTfLnXNb7YMql5Zft02nIZOskhHD-S7KQqDInIeKWbW4lHKCFmU1uFu3CdhrjzprtWmwkCwLvAEV.png https://remnote-user-data.s3.amazonaws.com/fnDE95wxQ6a66UvZ9pzv7rZMOcFYksYtw9YVETEVkxAoP4PVzSejqJV6OX0I0J3G_mFpaQfWMYxlTwrfLDFwRZznzHZx-SRjXP6U5_2ooAr5v-p_7MDmG9OVOy8BOSFT.png
            
Lecture 10 March 15th, 2021
    Balancing chemical equations
        https://remnote-user-data.s3.amazonaws.com/SJcaJ6wTNRkNmTyY_wCDiw9DySByIh-n8Hho1qbVzSPt7OgG3n3DF7y2Gza1mptMlyG_82f_8k0O9s2xzBXPupYt7f7dcFE4RUNksfK3SLMSXCA53bwVB6qNyCo4iBQo.png
        https://remnote-user-data.s3.amazonaws.com/dq7qP7DHFdMA58WKHELg6c9uncRnMBlfTROaCuykEtBxo0b5nu8n9XShKNoBp9HQ6F2utXbH-PjUqTCAKy_PMjDbKrzoZydFmZH1WSn7DVHzZU_N1ZyemCAmPnHCmHzh.png
        F_a = qC_A, r_A = kc_Ab
Review Session March 22nd, 2021
    Accumulation = In + Out + Generation Term
        Use if you see  steady state equation 
    Constitutive equation: Supplied
    Stochiometry
    Dimensionless variables
        Introduce a steady state concentration \overline C = C/C_\infty  , where C\infty = S/q, or \overline C = C/C_0
        Introduce a time constant \overline t = t/\tau
        Introduce \overline z=z/z_c
        Introduce K
    Can you solve for C_A?
        Steady state
            CSTR↔V\frac{dC_A}{dt}(=0)=qC_0-qC_A+r_AV 
                q is volume flow rate
                Follows \frac{dc}{dt} = Input-output+generation
        Smoke room→V\frac{dc}{dt}=-qC+S 
        Plug flow↔q\frac{dC_A}{dz} = r_AS 
        Batch reactor↔q\frac{dC_A}{dt} = r_A 
            \frac{dN_a}{dt} = r_A V , N_A(0) = N_{A_0} 
This is molar flow
            \frac{dC_A}{dt} = -kC_A , C_A(0) = C_{A_0}
    What is the concentration of C_B  relative to other concentrations?
        C_A = C_0 - a \triangle C
            a is some integer based on stochiometry
            Note it's C_0  and not C_A
    Mass, solute, solvent balance
    Common mistakes
        Make sure you're using the right r_A  and not r_B
        Sub in for r_A
        Make sure you use \overline z
        Recalculate \overline C_A(0) = 1 \neq 0 = C_A(0)
Lecture 11 March 31st, 2021
    \triangle H = NC_p \triangle T  where C_p = \frac{dh}{dT}
        \triangle H = N\triangle C_p T
    Q dot is Q derivative added to system
    W dot is W derivative added to system
    https://remnote-user-data.s3.amazonaws.com/157xjzQFjnN7bR9P2TDJEFwYCpOEQSKcXQSAiPfZtlSYnDc2R45A6cBVnNB9USwxT94Jtc3Hh-Hsu4mIZ-HIMGiLI3pr5ENb-DLNJ-oYqxtfbI4XkVKP2x_BzazTaauQ.png
Heat = T * S
\triangle Q = T * \triangle S
    https://remnote-user-data.s3.amazonaws.com/oYvsVIhdwjKnCbMB0DhQD1N0EHzN_MKieYPPf9FQuJvuE3A7NIQyJy1l-i91Ug1UtcYn6KLKQEYGuGHCBzkoVX4BrzvkwmiVpAI6Gnft_sJIL6iOw8H_EDJ-Hp3h_X2I.png
    https://remnote-user-data.s3.amazonaws.com/FHqfYZrUdAACvvuKm1jMPhId--Owpi0nVjSpwCaH4Bn9AwFshAiRCclkTGGZRpXv1H5muKrjtpntLQkHqkWpqDnu3uuzbfnHWKmHLunn0HOxjY-T_Xn4QeLYwc33UG8_.png
Work energy
Work  is the transfer of energy by any process other than heat . Heat  and work  are related: work  can be completely converted into heat , but the reverse is not true: heat  cannot be completely converted to work .
Review
    
    Relevant Problem Set Questions
        Problem Set 8: Energy Balance
            https://remnote-user-data.s3.amazonaws.com/Odh8BH6Kg46L2W8FNpaXA4n_cFwLajVBf-8NlueURwjiPL6NkKytUU7CQX3NSM5rWnKty6TDwR--P6ZHhgZrAVpzc04VIdVkLGgcIyyQl_4tuxa6iPtziauiik8Ll6JT.png
            Relate H to specific heat
                https://remnote-user-data.s3.amazonaws.com/BSS6RtRIxppXjaDwP8qwvYfSeyRViNpnSWZzJ9c3D_nOvURfh-xwlN5mlazeYqOYRW9zA2xLl5a63N_qrdoxmXQEm2mlF-W4IaNmOoezD8HGim48cDvgUNuUrSH9T4yx.png
            https://remnote-user-data.s3.amazonaws.com/8CcSVNEokUwiDq2LmTJmDA_S8G4jEWqh91iRBkbU2IRNu6FOmB348Xl9jXCK8lusCWiI7Ge5eSNmusQTlzXYiBYcSvyIfqfDPK5vr_p-C67eLrTHytCFIPIfm-Nz7E59.png  https://remnote-user-data.s3.amazonaws.com/Qyrnbvs8QTtmi4ACzN8p_mqYhCliQKnGj7hA8iTWu5CRPxRRmtRySBQPbxvcyJ5hCHrxujh7bR1U6BTXjf33sLwA_6J2RAc4Zxi2SM0qG2VK5iR8S5reRz9dVQw7wDRU.png
        Problem Set 9: Engines
            https://remnote-user-data.s3.amazonaws.com/dPkLdvaQPNv2YETONL37kyLhctiW-FCNPyRBVGqHhQMsC9KRcOCwYH9xLznwAkNmWmzN4v04oAdelEoxvl8WknlfyEs4-rPcQFa0Iv45QWjjzUYldp3ApKmnYtEue_Rr.pnghttps://remnote-user-data.s3.amazonaws.com/wyBjq6V-FWcD0PFggqTFTBre9w2tpKbyUlvalwvYinVSrPxqVu12K1WTYDClKUE93Ux6KliKa9Wq4xN0t4pPkPmETtXnPH37pRcAwssbjXeEugKG_wpBuvoYLSCTCZgz.png
            https://remnote-user-data.s3.amazonaws.com/vMBef3bEuwQ-Py-ttssmwLqoqSxrFnNrpdSnkoW6x_kjRyFXRXehfHL8p0qIF3jNkkyf70Zn5S8ErVG1hVTPN2ApAgOJQUZUSJTJuCxizmSb5-FWpteCLCTRIbo1clYF.png  https://remnote-user-data.s3.amazonaws.com/a2dbWeSMupHE62Oe4MOCoM_gaWRyskwxgh9yUqivrTPHXHx0kXOBTDfE9CSKAiQ3cGwTyckGs-FcTHJ-iBzpwN9znNJG2nNjZR2dzSVZ0aIPqfydmZam3jffDSEftrRe.pnghttps://remnote-user-data.s3.amazonaws.com/cM_Q8Ic6LczbsrmtN0w63drvtVgMswDJJqUe38Hm9PiKGw_XL3Y9qg-rqsxDL97ZypaDotBLOouMxmvEi52UbXwMUsLbNeikcIGggib6IaA-tBFUO7-YCiu-Nd-iLGK5.png
            
        Problem Set 10: Scaling
            https://remnote-user-data.s3.amazonaws.com/opcjffCaARg-JqcsRtV4ECP2ERdGHFsls2k_sTJf6dZQSVgGFpmmcALJfaSCQ3m-Vy60Yf2mzKZF5SIrxfEe-yOrD3PYtr75MuTyLpOmnAfJQGpQ8KLdaTkU-_KvRxxV.png  https://remnote-user-data.s3.amazonaws.com/0TIyl0oTiBGpFisyagUEjt8Ud5MZVnmUHMKt_0elBoya_CgTyaUwoJuPYbSdVEIwi3wE2joiUtpEuDMah_J5cixFk-K-P1ZquhJ5fbr4liyA0WNZM8nbLsEwM5KfEhh1.png
        Problem Set 11: Buckingham Pi
            https://remnote-user-data.s3.amazonaws.com/9Cf4NG6nJ_x0yGdrXAQJXtv5CmO5BW04B-RAklEsXkkJeuAKTWJoemj5DPrEHw9A6Ab-SWZh6YWstCMm3HTAcWXWZ2HohaKEFYdySWU5rrHApetmZZ8Ef-K7u283bQKl.pnghttps://remnote-user-data.s3.amazonaws.com/TqFycAWnaVZ56ZLauWQkdka-5ToQl31JrPQg6h-gUQvFjn9cw8cu9aldYGbJ9EYiZzpJdKH_3Yg1iSfmhXthiq7LeJPG6zMDvHOMh5bX5_K4rU19iTBA57XC6zft56LB.png
            https://remnote-user-data.s3.amazonaws.com/FWGPPA92bw7pYDEjY5AfGi7S9o4-LS5nSFQNWVtVKPWeDJlSiVtODPG0mFzYvJQG9v5ndMwqp670F99u5gezcgiCdlZUZO4pL3yWaaAZRE2PmIO_1OpAFHi_qwKMyZaD.pnghttps://remnote-user-data.s3.amazonaws.com/w1Oqww-OxQb0AqjtI8TXNP4baqiDkhbUs5YfDK0UTIcFWwwskxlIAwT36fQ7fMSoh_ANXGZ3Paaq0SY47srmN9211-tr_hjNkM0inxduDcmZVclYe-jQnYvRaEjAbG9c.png https://remnote-user-data.s3.amazonaws.com/7skiek1JF3_L-grJ4CWjxO6DYrCtFwUbT_petIHNxGasUxMrKUoSGdW1NzJzt1DT4lEn4TahEiucXVS-3aEe3fvLVSSsG8nDgZfpPuVriFOtI6XhAGvYiejVqQUykwxc.png
            https://remnote-user-data.s3.amazonaws.com/wn0UNl91x0rWFw9GfFOSYJgzURhYh_Bj0MQRO0muAW9CAEns7iApPwNzywptQ-nVQ5fbhHfdg2r7otS1PJeo7DSuwst8DBQH7w6zIP8E9tHriW6xhdt5kGrLBzn4C_Zb.pnghttps://remnote-user-data.s3.amazonaws.com/YE-jfJ2VBvAgkU-paxZPZZQbp1x_61Qc88pQH8Nhqo0zqgdtriyZ7rE3o-0h1u2Qi6T2Wk_KEsA1OUPY51IpcRdrpKiCt_11MriDPu-nxB7IKEW-BTT7D7W9Wp17iQlQ.png https://remnote-user-data.s3.amazonaws.com/rbcezZ_iF7OcMALcvLK3jtelPyn8fud29JTT-x7UaEokyYrEMySIiUVW_5wZ20xV-o5N8AwG7kX0MkfUqB7uC-NVD5nR2125IcB-peviQ3JSY8O9mc3vdKxqxzPF8C8U.png
        Problem Set 12:
            https://remnote-user-data.s3.amazonaws.com/kdDt-Tu3b8R12k758m5Jl1vATrb1PUexfFZi7cVKafJSQuttE1GuGYBeW_cPJpGd9uspTRPdq2uY0yAKUADukm4LPR4YUOiCZj3x86AdknypRaeHOAevCt-UFOsA4fBH.png https://remnote-user-data.s3.amazonaws.com/DhR2MSDukOF_DnclCISiBfUKzAwYwWrLFw5qSXKkDXIuUDy693Kun2Cw2pSTXFkT-KMJz-hdiBQbB_TjS6xsSgASKz5A1OycwgFzyQbS9pofZPcHPdZhIu27SN_SPtQi.png
            https://remnote-user-data.s3.amazonaws.com/TDWjHw3KshN6mPJlqpuBp7NbVRXrjOLSKmkv4TAZscyT4s91l4dfsAMZeHfrRg_YKQmXj5OVq5bEOXxifd1FAEGQvy3SPUOeFqHXs_MLwvgQtKU8nP1veXQ0NJo2ZzG7.png  https://remnote-user-data.s3.amazonaws.com/hhuQyHz3ETZUxVKznM-GF7Wa-IA1G8_nU3DdhMtcHr5KmJOIGfLqgLY3Fd_NAznzUjTQW3Jj4dp244uTFDFn7kqRy4qdGiALrUh-5IMQIV5omgZX4oJlxah5ilpBCC8j.png
            https://remnote-user-data.s3.amazonaws.com/t5L4OpWbcJum4F3exdsUTT_zle7PcdntQuMjI8rmbjgZzOPLgV_wtbfmBhqte_D_HVNW4fi3eu8BZ9uyltwUTWZs0tnZjqjzl5uIiw7olkVAeuE1R7aYSbZtiNuZs2zq.png https://remnote-user-data.s3.amazonaws.com/UoFI5Crs3XSWqcQ__U2zNUDpIJs9d6mqOanjYkEoW3WUWW_a8MP9V2wcgjG3aPRGBhc2FZF1GlINShSFj9AyW0AX_lXmBqvGppI195jMnB3m4OMuOib2FXOEu4_m8r36.png
            https://remnote-user-data.s3.amazonaws.com/aXpIMR_E-rVNz0Iq8eXi_9heKRXLjCsHKphdR1hU1atExac_kXdt6kdbCznHj3sizmqGkhJMREvLch4iM0i9kSH3YfistgIhB4fygxZXY9selHZ8sZoZvHDNmtUOnlZD.png https://remnote-user-data.s3.amazonaws.com/WtwAMedDQSlrXZfvjhss-fW6Rwo8ekrAJW8raJHtlyammfXsCoytSm3HRBA42rOMRzZ1S6wqb-zJmMOxG-x3MJ_9X37wCMykBXMFBzIEhLmVh0sl4ZLFbtUXlBW1ueRr.png
    Study Guide
        Thermodynamics
            The first law of thermodynamics↔\triangle U = Q + W   (state function) 
                U↔internal energy
                Q↔heat added to the system
                W↔work done to the system
        Entropy↔\triangle S \geq \triangle \frac{Q}{T} (state function)
            https://remnote-user-data.s3.amazonaws.com/laSfolNTfhOQZ1MEcoarvOlhYLToVk4ZkPoGjsVeDiiEzj7hqbCdZftSBIhsjvczU1jr54VybjVHvrlC_pVo8gHDHy3HO2IIcj-eCe25HRixZVeKR9uVjuqKicEVAUB4.png
            Irreversible processes = spontaneous processes
            https://remnote-user-data.s3.amazonaws.com/ZK-iDzprHFuzJYA3SBqXTWU0wPjetUzfEkZC9ZacPajq9PblgvXFiOq44cqs3xaJmhLG9LmEJyjvt0T3lD4V11VKIW9uLxgl-JjCkC8GR_OwrbYHKFQGLqwB369ZBpVp.png
        Engines, Refrigerators and Heat Pumps
            efficiency of engine→https://remnote-user-data.s3.amazonaws.com/16PemPJEge3bxVFIo1NAFCl6OnHKH14JTNjh4W4ccQrmbTxbYX5rUCEYlP03QJyaFE20CXHoL769fohyDqF6ua1XXEV04yyYY54J43rTc_fioS9aHZMte5lew44bdXFs.png (3)
                aka→https://remnote-user-data.s3.amazonaws.com/MX5aUmQzkvfKDlcZQxfXjHr6BywBm3KMphqDKuW-6hXuLhQ6o7wptb6avxS6RChCNFgZTD2qKfvD3v5J9an7PG-mQ0tmLEYoZWcQld-HKsdsgC-C8MbLOm5kAnoge-yT.png (7)
            efficiency of refrigerator and heat pumps→https://remnote-user-data.s3.amazonaws.com/oxAvSf2XHtX_9c8QE7ir49lrpVPS-ppVBgn_R8-8WftLDhcodenPHMSL4oy6rltRinW0y3ZDuQr5kJUdySWru9ep9XSHzcrAjXEQ1Y2VzzmiQrouTfPJnYD4VmjLmraI.png  (8)
                aka→https://remnote-user-data.s3.amazonaws.com/FAoxGvpOWjkzLfSf-ILdkAdQzw_K3jXpvMJsx3pMImzU9ZI-CXrXsO5h6ItNShwrCUP1ejPf6ofy0GeI1eiCAfiXI3UETEjS_ELT6ewb3jTM7V7KPJjkjxBkoQCZO1mw.png  (11)
        Thermodynamic cycles
            https://remnote-user-data.s3.amazonaws.com/3EAmg6FOFfigrhaCPxnbX8HYbF3UQgGLyP6OD9F-x2UKa7akKPwp9x1Dzrv78d5L0rdAWRvK5uT_xFXYWGAv9Ah7ebIKmvGQwVdBuXt9B_zQRoE-YJSmMhYtlTloQxrX.png
            The efficiency of a Carnot cycle depends only on the temperatures of the hot and cold reservoirs.
        Buckingham Pi
            https://remnote-user-data.s3.amazonaws.com/-_Xs-XWHnPYGaE8b-w9YyBbSFP4DP__Fc8GiNFICHe-cMPaLMcIIIZdw1WHKsLvamccSK25XcxMilJs-ZhS_o14at-x96b7MekoU2EOzc0wPzC3nRQkw2J542TFl8eyU.png
        Scaling
            https://remnote-user-data.s3.amazonaws.com/7vsFZvWacOSIAfzlyprD23WD3jSgJZZPD8yLvSjXfUom1nU0NZWvaFmT-yi6rSsKP1nDmQOxdfqcH7tOhtDG3yd4EyJR6SPLjMPVTb6wI1_Hpqh6JpPVWdJ5p6S-7X5c.png
        Transport phenomena
            Master equation↔https://remnote-user-data.s3.amazonaws.com/X7P4QtJsqexo2fAmr1nl57Ns7XztgjmuEpRDQO2HlRlhlo1mhlEqsC3qaMm8WRMD-XBdyS9rwKRQTnuJSxLg7xwnlu-jZzKoA8aZ9FjunCw7NAEA5paRtOqNPoL15XWn.png
                for diffusive transport of chemical species→plug in b=c and f=-D\frac{\partial c}{\partial x}  to get \frac{\partial c}{\partial t} = D\frac{\partial ^2 c}{\partial x^2} + S .
                for energy transport by condition→plug in b=p\overline h  (where \overline h  is specific enthalpy, p  is mass density) and f=-k\frac{\partial T}{\partial x}  to get \frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} + \frac{S}{p\overline c_p} 


