---
date: "2021-10-17"
date modified: "2022-06-15"
title: CPSC 323 Quiz 3
---

# CPSC 323 Quiz 3
**True or False:** A data type's alignment rules will be met in only the heap but not the stack.
** False**

**True or False:** A program's virtual address space is linear, contiguous, byte-addressable and maintains one segment for code & constant global variables, one segment for modifiable global variables, one segment for the heap, and one segment for the stack.
**True**

**True or False:** The bss region is usually fetched from secondary storage.
**True**

**True or False:** The stack grows towards lower addresses.
**True**

## **x86 Assembly:**
Suppose that **%rax** holds the value of \$0x111102AB before the following instruction is executed (shown in AT&T notation):

%movl \$0x1011, %eax

What are the contents of **%rax** at the end of this instruction, in hexadecimal notation?

_Format your answer to start with \$0x._

## **x86 Assembly:**
Suppose that **%rax** holds the value of \$0x111102AB before the following instruction is executed (shown in AT&T notation):

%mov \$0x11, %ax

What are the contents of **%rax** at the end of this instruction, in hexadecimal notation?

_Format your answer to start with \$0x._

**True or False:** The number of architecturally-exposed registers in the system equals the number of physical registers within the CPU.

True

False

What structure is used to convert architecturally-exposed register names in the CPU to physical register name within the hardware, without software involvement? Write down the answer as a three-letter acronym.

**True or False:** The memory addresses stored in registers are usually physical addresses.

True

False

Given the following initial values and IA32 instructions, use these initial values for each question given below (each question is based on the initial values, not any changes the previous question might or might not implement).

**Address**

**Value**

0x100

0xFF

0x104

0xAB

0x108

0x13

0x10C

0x11

**Register**

**Value**

eax

0x100

ebx

0x104

ecx

0x001

edx

0x003

movl 0x100, %eax # What is stored in eax?
movl (%eax, %edx, 4), %ecx # What is stored in ecx?
decl %ecx # What is stored in ecx?
leal (0, %ebx, 5), %ecx # What is stored in ebx?

_Your answer should be in hex notation, begin with 0x_, and is case-insensitive.

**Answer 1:**

0xFF

**Answer 2:**

0x11

**Answer 3:**

0x0

**Answer 4:**

0x104

Given the following C code, fill in the blanks to create an equivalent IA32 assembly code.

int max(int x, int y) {
    if (x > y) return x;
    else return y;
}

Assembly:

movl 8(%ebp), %edx
movl 12(%ebp), %eax
\_**\_ %eax, %edx
\_\_** L9
movl %edx, %eax
L9: ret

- What should go in the first blank?
- What should go in the second blank?
- How many memory references can happen at least?
- How many memory references can happen at most?

**Answer 1:**

cmpl

**Answer 2:**

jle

**Answer 3:**

8

**Answer 4:**

9

Select all correct statements:

As automatic lifetime objects are created, the stack pointer increases in value.

The content of a register is accessed in Assembly using the % prefix.

We can access the contents of a register by dereferencing a pointer that stores its address.

According to the x86-64 calling convention, return values of functions are passed through the %rax register.

The top of the stack is stored in the %rsp register.

%eax refers to only the first 32 bits of the %rax register.

Select all correct statements:

Recursive functions can be made more efficient though the use of “tail call elimination”.

Buffer overflow attacks write more data into a buffer than it is capable of holding, thereby accessing memory outside of the buffer object.

Recursive C functions are sometimes “transformed” into a loop-based implementation in assembly by the compiler in order to optimize the runtime of the program.

In order to allocate space within a function, we can simply decrement the %rsp pointer.

When a new function is called with more than six arguments, the first six arguments are stored in special registers, while additional arguments are stored in the callee’s stack frame.
