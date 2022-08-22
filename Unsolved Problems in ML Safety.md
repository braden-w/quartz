---
tags:
 - On/Artificial_Intelligence/Safety
 - Type/Source/Paper
title: Unsolved Problems in ML Safety
date: "2022-07-30"
date modified: "2022-07-30"
---

# Unsolved Problems in ML Safety
Unsolved Problems in ML Safety is a research paper by Dan Hendrycks et. al that discusses some of the challenges associated with ensuring the safety of machine learning systems. The paper highlights a number of issues that need to be addressed in order to make machine learning safe for use in critical applications, which are robustness, monitoring, alignment, and systemic safety.

![](https://lh5.googleusercontent.com/CoN1YKemBU417r-1CskcgKsMViIzD6LS8RfvxEYE1sf8n-Dxnnrhuldg6H7ZtBBEYVdzW9dyacrpsJ_JtuXXgQW3hKJphROMeVerGWu0Jsd60jrAWrqlugHKhGERo06_vcUzK0-lldDuy7nu9YcjbbY)

Robustness refers to the ability of a machine learning system to continue functioning correctly even in the presence of data that is not clean or well-formatted. This is a particularly important issue when it comes to safety-critical applications, as even small errors in the data can lead to catastrophic results. The paper cites the 2010 Flash Crash as an example. Adversarial Robustness refers to the ability of a machine learning system to resist attacks by malicious actors who deliberately introduce errors into the data in order to cause the system to fail. 

Monitoring refers to the process of monitoring a machine learning system during its operation in order to ensure that it is functioning correctly and is not making any dangerous mistakes. This is important because it allows for early detection of any problems so that they can be corrected before any harm is done. Anomaly Detection is a type of monitorying that can be used to detect when a machine learning system is behaving in a way that is not expected. Representative Model Outputs is another type of monitoring where models accurately assess their domain of competence and uncertainty, and should undergo [[Calibration]].

Alignment refers to the problem of ensuring that a machine learning system is working towards the same goals as the humans who are using it. This is important because if a machine learning system is not aligned with the goals of its users, it may make decisions that are harmful to them.

Systemic safety refers to the need to consider the safety of a machine learning system as a whole, rather than just the safety of individual components. This is important because machine learning systems are often used as part of larger systems, and the failures of one system can often propagate to other systems. Topics here include [[Cybersecurity]] and Improved Epistemics and Decision Making.

![](https://lh3.googleusercontent.com/YPvAJ1ITwHUwwwnaqYxeAGwCwB0D2gSNsI4LTUTpIX-n21XGNuxiS6sIQchNdrsSs4EA-KmmuutKWhfxicc4a-LyK4qmWaJqSSGW3UZVq95AszAgZtmED1SOA85kx9EbYyTCIsHN840TtQGn9W8jZKg)

Combined, these layers form the “[[Swiss Cheese Model]]”, which posits that no system is completely safe, but that multiple layers of safety can help to mitigate risks.

A potential weakness that is not addressed in this paper is the lack of transparency in many machine learning systems. This can make it difficult to understand how the system is making decisions, and to identify when something has gone wrong. This means that it can be difficult to correct errors when they do occur, and that monitoring may not be effective. However, it should be noted that this is not an issue specific to machine learning, but rather a general problem with complex systems, and many of these changes can still be done externally to the system.

# References
- (References:: [Unsolved Problems in ML Safety | Abstract](https://arxiv.org/abs/2109.13916))
