---
date: "2022-06-09"
date modified: "2022-06-15"
title: Parts of a computer
---

# Parts of a Computer

## Processing Logic
- The heart of a modern system
- Responsible for executing instructions from the code
- A [[#Compiler]] generates a set of instructions
- Processing logic is a hardware unit that executes those instruction
- Typical logic has four cores
- Restrictions on how many cores one can be very close on one chip

## Compiler
Generates set of instructions

## Socket
Physical socket where CPU capsules are placed
Connected to each other via a high bandwidth bus (a communication fabric) sometimes also called an "interconnect"

## Node
Group of [[#Socket]]s that are closely linked to another (for example, in a data center)
CPU is connected between each other through [[#BUS]]

## BUS
Connects CPU nodes in [[#Processing Logic]]

## Local Memory
Aka volatile memory

## GPU (Graphics Processing unit)
Highly specialized in processing graphics, parallel structure, more efficient than a general purpose CPU

### Composition
Many CPU put together for rendering graphics

### Uses
Machine learning, training neural networks, processing large graphs, protein foldings, general stuff

## NIC (Network Interface Card)
For [[Network Packet]] Processing

## ISP (Image Signal processor)
Specialized for image processing

## DSP (Digital Signal processor)
Specialized for FFT

[[Hardware Accelerators]]

![](https://i.imgur.com/90PiL6Q.png)
