---
date: "2021-10-17"
date modified: "2022-06-15"
title: CPSC 323 Quiz 2
---

# CPSC 323 Quiz 2
Moore's law is: A physical law of nature that states that the number of transistors in a chip doubles roughly every 18 months
**False**

Moore's law has led to: transistors today that are in the 3.5-14nm range
**True**

Moore's law states that: beyond transistor density, power is important -- i.e., that transistor density can increase within the same power budget.
**True**

Suppose that you have a 7-bit number represented in two's complement.
What is the smallest value that you can represent (write in decimal, human notation)?
**-64**

What is the largest value that you can represent with this (write in decimal, human notation)?
**63**

How many representations of 0 do you have with this? (Answer field is numerical)
**1**

Can you have overflow if you add one positive number with one negative number in this representation?
**No**

Suppose that you use 1 bit for the sign, 3 bits for the exponent, and 14 bits for the mantissa and that you represent numbers in normalized notation. Assume that setting exponent bits to all 0s or 1s are special cases.
If you want to split the range of the exponent fields into one half that represents negative exponents, and another half that represents positive exponents (where 0 is counted as a negative number), what bias should you apply to the exponent?
**3**

What is the largest number that you can represent, assuming the bias from the previous question, truncated to the third decimal place? (Note that this is not the same as rounding, you are simply discarding the last digits)
**15.999**

What is the smallest number that you can represent, assuming the same bias? Again, truncate the result to the third decimal place.
**-15.999**

What is the smallest positive number (normalized) that you can represent, ignoring 0? Again, truncate the result to the third decimal place
**0.25**

Given that number=0.15625, what is the bit pattern for the variable y and i at line 9 in the above code?
**00111110001000000000000000000000**

For the variable in part 1, what is the value if you interpret this bit pattern as an IEEE 32-bit floating-point number?
**0.1563 (with margin: 0.1)**

Given that number=0.15625, what is the bit pattern for the expression ( i >>1 ) after the execution of line 9 in the above code?
**00011111000100000000000000000000**

For the expression evaluated in part 3, if the bit pattern is evaluated as an IEEE 32-bit floating-point number, what is the value of the mantissa in decimal form?
**1.125**

For the expression evaluated in part 3, if the bit pattern is evaluated as an IEEE 32-bit floating-point number, what is the value of the exponent in decimal form?
**-65**

Given that number=0.15625, what is the bit pattern for the variable i after the execution of line 10 in the above code?
**01000000001001110101100111011111**

For the variable evaluated in part 6, if the bit pattern is evaluated as an IEEE 32-bit floating-point number, what is the value of this number in decimal?
**2.6149 (with margin: 0.01)**
This value is only 3.4% off o the actual answer. After doing one round of newton's approximation, the error drops to 0.17%. This shows the kind of low-level optimization that C can allow. With subsequent hardware advancements, this method is usually not the fastest way but it stands as an interesting example. It also stands as an example to show the kind of stuff C gives the programmer the power to do.

Select all correct statements:
**The mantissa field of a floating point number can be determined for normalized representation by assuming a single 1 at the left of the decimal point**

Select all correct statements
**OxDEADBEEF = 0b1101 1110 1010 1101 1011 1110 1110 1111
Dynamic memory regions, i.e., regions of the memory allocated by malloc(), are located in the heap
The line of C code: val = val << 4; multiplies val by 16**

Select all correct statements:
**IEEE floating-point representation uses signed magnitude format
ISA stands for Instruction Set Architecture and it is the contract between software and hardware on what instructions are supported by the machine**

Select all correct statements:
**Two's complement —1 in binary is: 0b1111 1111 1111 1111 1111 1111 1111 1111
A pointer in C is a number that stores a memory address**

Select all correct statements:
**Different names for the same objects are known as aliases.
Objects on the Heap have a dynamic lifetime, and objects on the Stack of an automatic lifetime.
Recursive function calls take advantage of the program stack.**

Select all correct statements:
**In C, a char corresponds to one byte.**
**When "little-endian" representation is used, the least-significant byte is put at the lowest address**

Linkers set the entry point of an ELF file to:
**\_start function symbol**

What could potentially fail if alignment for a section was not respected by the linker?
**C's struct and array alignment rules will be violated**
**Optimized instructions for memory references may fail**

For this section, use the object files saved under /c/cs323/ULA/ELF-quiz/ . Use readelf to parse the elf file and find the following information
How many function symbols does a.out contain?
**16**

For this section, use the object files saved under /c/cs323/ULA/ELF-quiz/ . Use readelf to parse the elf file and find the following information
How many (non-NULL) sections does a.out contain?
**30**

For this section, use the object files saved under /c/cs323/ULA/ELF-quiz/ . Use readelf to parse the elf file and find the following information
How many segments does a.out have?
**13**

For this section, use the object files saved under /c/cs323/ULA/ELF-quiz/ . Use readelf to parse the elf file and find the following information
Simply based on the function symbols that you noticed, what do you think the program might be doing?
**File I/O**
**Standard I/O**
Just looking at the functions themselves may give away a lot of what kind of program a binary is. In the next project, we will look at something more fine-grained to figure out the computation in the binary.

Which ELF file section requires no data (other than metadata) to be stored in an ELF file?
**BSS.**
The BSS segment is filled with only 0s, so there is no need to duplicate this information by storing a block of zeros in the ELF file.

Which of the following would you expect to cause a SEGFAULT?
**Writing data to the .text segment**
Correct. Normally, we don't expect the code to change (unless we are using self-modifying code). Therefor, the .text segment is normally protected from writes.
**Executing data within the .data segment**
Being able to execute data as code is a massive source of security issues. For example, a hacker may be able to set up a data structure to contain bytes that represent a series of machine instructions and then the hacker exploits a program bug to redirect control flow to this data structure, where the data is interpreted as code and executed.
