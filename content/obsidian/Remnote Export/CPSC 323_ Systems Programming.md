Lecture 0 September 1st, 2021
Syllabus
    https://remnote-user-data.s3.amazonaws.com/mdzo8Gt_WRry-gXFh27yJ4VyezqiPr8uMR7AtmOAQ8u6Owa_XSI9zoSwogZmtvHBZPvRxOEQ8pGEMIVnX0lIRN-BxlkpmSWnx4qGh38iGceIGdqOC4HuSf58cmDf7GlO.png  
323 is Intro to Computer Science
    Wooo F for 201 and 223
Lecture 1: Complexity September 3rd, 2021
    Processing Logic↔Hardware unit that executes instructions
        Compiler↔Generates set of instructions
        Typical logic has four cores
        Heart of modern system
        Restrictions on how many cores one can be very close on one chip
        Socket↔Physical socket where CPU capsules are placed
        Node↔Group of sockets that are closely linked to another (for example, in a data center)
        CPU is connected between each other through BUS
        BUS↔Connects CPU nodes in processing logic
        Local Memory↔Aka volatile memory
        GPU (Graphics processing unit)↔highly specialized in processing graphics, parallel structure, more efficient than a general purpose CPU
            composition↔many CPU put together for rendering graphics
            use↔machine learning, training neural networks, processing large graphs, protein foldings, general stuff
        NIC (Network Interface Card)↔Packet  processing
            Packet↔units of data sent between computers or a network
        ISP (Image signal processor)↔Specialized for image processing
        DSP (Digital signal processor)↔Specialized for FFT
        Hardware Accelerators↔Used for accelerating specific applications
            examples→GPU (Graphics processing unit)  , NIC (Network Interface Card) , ISP (Image signal processor)  
        https://remnote-user-data.s3.amazonaws.com/KqCIgv-rrMBgpm0SNfFIqrreQNFOv7G_QwL881HaYtqXOzsF_mkyY3A9Fcfd8Nq02u9jHZ_Nj5Bhu9y6EdKev-U2erQy0rsUy6YBR41ST1MfK8sIYrZ1Pwc2I5nJuEaS.png
        Why do we need Hardware Accelerators?
            main goal→maximize performance/watt
            Goal: power is low, performance should be high
            safety protocols→majority have tiny cpu ("wimpy CPU") that monitors the device and shuts down or down clock the device if it starts to overheat
    Physics of Creating Semiconductors
        Three main chip producers
            Intel
            TSMC
            GF
            Samsung (Sometimes)
        Parts
            Tubes↔300 nm wide tubes
            Wafers↔Cut from Tubes  
        Steps
            Separate impurities at very high temperature (try to get only one oxygen atom in 10 mil Silicon atoms)
            Pure silica forms Tubes
            Cut Tubes  into Wafers
        Pure silicon creates switches, which creates chips to put on a wafer
        We introduce impurities into silicon (using Boron and Phosphorus) to enable holes and switches
        Moore's law→The transistors can be smaller and smaller every 18 months #[[Moore's law]] 
            Moore's law  is no longer working→We cannot reduce the size of transistors because of physics
        Dennard Scaling↔As transistors get smaller, power density stays constant
        Dark Silicon↔the amount of circuitry of an integrated circuit that cannot be powered-on at the nominal operating voltage
            Dark Silicon  Era: to improve performance
                We should put more transistors on the chip
                But we are only allowed to turn on a subset of these transistors because otherwise we would introduce too much  power 


Lecture 2 September 8th, 2021
    
    Multicores
        Why they were introduced
            P~CV^2f
                P→power
                C→capacitor
                V→voltage
                Threshold voltage↔Minimal voltage needed to keep transistors actie
                F→frequency of the chip
                the problem | f  and V  are linearly related, so doubling f leads to an 8 x times higher power consumption
                realization→instead of doubling f  and all the side effects, why not just double CPUs
    System software layers
        Program in C
        Compiler
        Libraries
        Operating system
        Hardware
    Desired Properties of computer
        Correctness↔Should be correct
        Availability↔ 
        Durability↔Data is redundant and can be reconstructed in case something goes wrong
        Reliability↔Security + everything else that makes it reliable
Lecture 4 September 13th, 2021   Panopto  
    Data sizes
        characters→1 byte
        integers→2 to 4 bytes
        real numbers→4 to 8 bytes
        https://remnote-user-data.s3.amazonaws.com/vDr_Hpql3HpVE6At2pfvKAGYjdTnEEsUX13_nCkFW-uSSeoZzsb5ftb_I2X2sbI5xhJ3QLlLj0zFEntbriuoE6Hrp7OM55rE5fh8bJ-NIUdWFofnALrlIRLYELw-9xvx.png
    Big Endian  vs. Little Endian
        Big Endian↔Store most significant byte first
        Little Endian↔Store least significant byte first
        Most computers are Little Endian
        A0BC0012 is equivalent to 1200BCA0, but can lead to transmission errors between PC's
    Representing negative numbers in computers?
        Signed Magnitude↔Use the first char to denote positive or negative
            why it's bad→there are two ways to write zero as 0 (0000) or -0 (1000) 
        One's complement↔Just flip all the bits in memory
            examples
                0b01111↔0b10000
                0b10111↔0b01000
            difficulties→you still have two zeros
            how to add→Just add bits. IF it overflows, add 1 
            how to subtract→Just subtract bits. IF you need to borrow, subtract 1 
        Two's complement↔Just flip all the bits in memory, then add 1
            examples
                0b0001↔0b1111
            how to add→Add bits, remove overflow/carry on left side, then take two compliment of result.
            how to subtract→Just add using negative numbers
            there's only one way to represent 0
Lecture 5 September 15th, 2021  Panopto
    Handling overflow
        You should avoid overflow because it leads to unexpected behavior in the compiler
    2 Methods of Floating points representations
        Fixed point representation
            Representing 0b1.01
                https://remnote-user-data.s3.amazonaws.com/_aLGmoGCye7Ah6I7Jrp3UYisYq66o8cu3-WtGKZYnVuwD0g6iYZoBa9aPgs4IQHCK22BeGTTGKlV3kyKNXJei3guSSCFpLqpQ06ThWcf7fLEtFCqz3-xcysYAt0hDzX7.png
            0b1101.010 = 13.25 in base 10
            How to extend numbers
                for negative numbers→Add more 1's from the left side
                float https://remnote-user-data.s3.amazonaws.com/XJxS3NJF-tIcjfE-ltNHWAcdpJl92jgPFSlg1kjDPgAAon6Wiid8MuILBYlOrW0nAaW83sViv7CJRNLRgvlwSuuVvptuQdmoGdQlbCl6WmGSTO2icRV1hCeXZmj-aAme.png
                
            https://remnote-user-data.s3.amazonaws.com/IIOpx8UokmKtxtCQ_l1dCYTEhJJOjd2CjCTE8Xdy2rVZ7GG9IWp18UJChqc_L4xKwmKUCiLs1hXVeNzMFHkIrfhG11ZnOqrLMQA7vCw2CQCAEYyCoO4xqDm4jH3BHA9D.png
            
        Scientific notation (floating point representation)
            3 Parts of Scientific notation (floating point representation)
                https://remnote-user-data.s3.amazonaws.com/dIh6If6qaHGRsAzH42DMaFOPyVPOIt6gzsZR6qCVgYI50WYhfA4zKCuU-nOG0thkbsjeY008_vyPYr2QDFnvxXeYNGt6qfNytznBDy7k-ZJw9gIsYIrmEWK3k9n-1h3d.png
                Sign
                Exponent
                Mantissa
            why use it→Because arithmetic is way faster compared to Fixed point representation
            
            special cases
                Normalized value:
                    exp is not all 0's and 1's
                    https://remnote-user-data.s3.amazonaws.com/Dr4qDcerLr1VLh-pZRnsOGj-j3vjoMNv12GxpmZGh2JB_6202yTxc9KG0IuHthUUa_ZQjlPSBRxeSbSkHL6JBhkEkTKJ0WnxvNKOWizn0zxR6L1lB3iDOhL4TH1Dt83X.png
                Special case | exp are all 1's, mantissa are all 0. Examples include  infinity  and  nan   . There are many different values/ways to represent  nan .
                    https://remnote-user-data.s3.amazonaws.com/N80Q9VabQPkQpg_u172hBOD8uEm-V_htyiQtNvNLr0Gb_6gUyQa7m3pu_pYE41rrS8ShZIuaVVFmtYRSrM7Al542yw_scsvFswpfoBJ7KOAJZx4jNhUxlgrEOwl-PFvS.png
                Denormalized value | exp are all 0's
                    https://remnote-user-data.s3.amazonaws.com/Wxfa7iUL1atkO03N6Ewr41yMxOZfs_fsBuV2aAAc6WtPhsT0QDBBCxp36uBOZOOd-MMrrrkg7vdYcuOwQqYw0_K_H1lxJNXYDiaiMAoqDeXZYcuNo2Ec6hv0-c_TOr62.png https://remnote-user-data.s3.amazonaws.com/SffDIC7GyOF37Pn2YaMRhN0ssnXrKSHbTsronqu4KmMpW7DbUe_hc5NtNqYxKp7E6ETGywhDyWsDTWsMthycdhrL64_M0JLOtd4OP9E-vR5VMdTZtP8hv2A8RgihXmrA.png
                
    Largest Positive Value
        https://remnote-user-data.s3.amazonaws.com/94xz6cZXGjeAB_6A4oVz_mzdrFAp0aXPbDbikxs7dlRZ6k_5-RKUv70nBsS0DwrWUXTLNBxmSs8Iec8F_Tsq-qSIK1FN0UlRanDI7I5CQTboE8_d7ZCZE1dq_PHIEso5.png
    Smallest Positive Normalized Value
        https://remnote-user-data.s3.amazonaws.com/xRr4FagnUo9A8yyZLi6eaH_KRruXSNyi-epFmEqdIraHGV0dyP_K0XgcRxRyd_3TFMH_lr3GEMcJYu0UaOXDSjrKSm9RypK8oxj8nMmtdiEbl7ApaytHBTZqB_HxgEJj.png 
    Largest positive denormalized value and smallest positive non-zero value
        https://remnote-user-data.s3.amazonaws.com/vWKT-BwJqWtYdmqBioPnFJkKkIX8SnWF7_TX71ynqZ9wRGMoOTAAczy-ggDZoffPFuHYklRJmWSYLjm_2KAN4W94jdL7YFnv5o15AVf5xFfZFoD_iTs6-54lhIIvkcxE.png 
Lecture 6 September 20th, 2021  
    2 Methods of Floating points representations  continued
        To find the largest possible floating points
            We fill the exponent with all 1's except the last digit being 0, because making the last digit 1 would make it a Special case | exp are all 1's, mantissa are all 0. Examples include  infinity  and  nan   . There are many different values/ways to represent  nan .
    Memory layout
        Memory is also known as address space
        Virtual address space
        Segment
            forms→virtual memory map https://remnote-user-data.s3.amazonaws.com/wq2cD9sbJTSa5v0HQTVomUndLe5WrzGkNO5Px_2y7BTj4NsAraqsXLwGtteLVAQi0ep79MweECKjdU7zNQpLSdFGAOS239N08BfDI3iEChaAg0bGG4SCp2kQ5WiGsBEA.png 
    Segments are groups of unloaded pages
    Problem Set 2
        mmap→Allocates something to a page
https://remnote-user-data.s3.amazonaws.com/2CfdzsqSiN8bu74RywCybcqFCApicKDCMtqcXdAOO-r0haMiHQIXpjVCC6gPF6aHMls5aqfT_1pYegwJUb2QOEUekrsfsDNFOKm_OFV_rQorIL5INoQplN3UQWcCvkGs.png 
Lecture 7 September 22nd, 2021 
    
Review of Concepts
    Floating point
        Normalized Value vs. denormalized
            Bias
    Two's complement
     Twos complement: Negative numbers in binary - YouTube 

    Floating is just scientific notation in binary  Floating Point Numbers - Computerphile - YouTube
Lecture 8 September 27th, 2021 Storage, Alignment
    Structs
        https://remnote-user-data.s3.amazonaws.com/xUFOtq7k04VRnFwNYj05fHzFxot5nxP_pHgStXj9L60I5ZOwbT80Ub_OQi9xvwdi5SlGomNZsRvBYtHcodIcZyHhoNcvnuFU8L8_I5qx-qGizo1_ibekIwJE5QlWyZFU.png 

    Alignment↔Data must be stored at multiples of addresses for alignment
        https://remnote-user-data.s3.amazonaws.com/kkIN-0iD9JJvCEw3kvp-hGUZpuIvnFEMcb6jkofBOZf0ZhjShdWLxBSGb9h7njy5k1u4cg2I-ERVbSKw2D8ta_2Kycb2gLNl5Jr3gchmQyPOpiyUVlRyJVDcc0aRF-KZ.png
        https://remnote-user-data.s3.amazonaws.com/6jO06rQ-GDdRkf1w396i8YuoLHPPt0IdxQvXj1vsUdPNHqRFOX22ptBIvXe7-8lB0afEz5P2kOcXH4wRmEJ9xgHufRLvgzqPu9YWSuq6KnaBk68mP-rgFsahcDFbROTD.png
        Note that for doubles (special case)
            Doubles start on multiple of 8 on Windows
            Doubles start on multiple of 4 on Linux
    Size of struct is always a multiple of the largest data type, based off the alignment rule
        https://remnote-user-data.s3.amazonaws.com/UVhZdrYQdY8-7tJZ1xSwjfbq3YNhLhutS_u8T1ibVkpPQAyDL7UpLRUw9EiaLHGUNl6n7-DAMruzXz5_dYv1XJuLoOgQVMSkW0J4hWgAQjdssrCGzjCLTClzjS9MHur_.png 

    https://remnote-user-data.s3.amazonaws.com/1EQON0FmTn16oDnv3cU30pAb6bxDLFn9KFvFoW_CLHDfl4AGVfg3n6I-e5Nc6zdzrzyELFylaj5Hux5HBjsMILrVmuZBmvYVmVy97YgklsaSFXabgWVRauOf9Y0POjhr.png 
    https://remnote-user-data.s3.amazonaws.com/jCL_XMgkttZoQfaCqgG_8jnsDVx2LfCfpbIYeTR1O_3mQIwn57oQqWUMfU7Essj0gIzYWgDjOKCV3T4DBrYmzwvhZC2cDuyQJFlyZXbpBdu3BhvjWj9C48StP9-B21J9.png 
        Notice that we work recursively; apply the alignment rule on the inner struct to determine its total size (as a multiple of 8), then take into account foo
