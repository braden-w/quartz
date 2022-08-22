---
tags:
 - On/Machine_Learning
 - Type/Concept
 - Type/Source/Lecture 
title: Reinforcement Learning
date: "2022-07-31"
date modified: "2022-07-31"
---

# Reinforcement Learning
Create an agent that performs actions in environment, and receives rewards. Goal: learn how to take actions that maximize reward.

## So Far
- [[Supervised Learning]]—learn a function to map $x \to y$.
- [[Unsupervised Learning]]—learn some underlying hidden structure of the data
	- No labels, just data!

## How it Works
![](https://i.imgur.com/noyW2Ap.png)

1. The agent sees a state; may be noisy or incomplete
2. The agent makes an action based on what it sees
3. Reward tells the agent how well it is doing

## Example Problems

### Cart Pole Problem
![](https://i.imgur.com/zbdN7Ju.png)

### Robot Locomotion
![](https://i.imgur.com/PoxVrFl.png)

### Atari Games
![](https://i.imgur.com/HGEvdTJ.png)

### Go
![](https://i.imgur.com/Qqwu82T.png)

## How [[Reinforcement Learning]] is Different Than [[Supervised Learning]]
Notice the structures are similar, but there are key differences
![300](https://i.imgur.com/gzRP6N9.png)
![300](https://i.imgur.com/tnXINhh.png)

### Stochasticity
Rewards and state transitions may be random.

### Credit Assigment
Rewards $r_t$ may not depend directly on action $a_t$. We do not have the immediate feedback of a [[Loss Function]] that tells us why this is the case.

### Nondifferentiable
Can't bakprop through the world; can't compute $\frac{dr_t}{da_t}$

### Nonstationary
What the agent experiences depends on how it acts

## Markov Decision Procecss (MDP)
Mathematical formalization of the RL problem: A tuple (S, A, R, P, $\gamma$)
S: Set of possible states
A: Set of possible actions
R: Distribution of reward given (state, action) pair
P: Transition probability: distribution over next state given (state, action)
$\gamma$: Discount factor (tradeoff between future and present rewards)
Agent executes a **policy** $\pi$ giving distribution of actions conditioned on states
Goal: Find policy $\pi'$ that maximizes cumulative discounted reward: $\sum_t \gamma^t r_t$
[[Marov Property]]: The current state completely characterizes the state of the world. Rewards and nextstates depend only on current state, not history

### Example: Grid World
![](https://i.imgur.com/Vgs0NPp.png)
Goal: Find the optimal policy $\pi'$ that maximizes (discounted) sum of rewards.
Problem: Lots of randomness! Initial state, transition probabilities, rewards
Solution: Maximize the expected sum of rewards
![](https://i.imgur.com/Rzbnu9G.png)

Following a policy $\pi$ produces **sample trajectories** (or paths)
How good is a state? The [[Value Function]] at state $s$, is the expected cumulative reward from following the policy from state $s$:
$$V^\pi(s)$$

How good is a state-action pair? The [[Q function]] at state $s$ and action $a$, is the expected
cumulative reward from taking action $a$ in state $s$ and then following the policy:
$$Q^\pi(s,a)$$

## Bellman Equation
Form that shows that the Optimal [[Q function]] $Q*(s,a)$ has the following [[Recurrence]] Relation:
![](https://i.imgur.com/fmXVFFM.png)

## Policy Gradient
Reinforce gradient
![](https://i.imgur.com/KJDQSLV.png)

## Other Model Based [[Reinforcement Learning]]
1. Actor-Critic: Train an actor that predicts actions (like policy gradient) and a critic that predicts the future rewards we get from taking those actions (like Q-Learning)
2. Model-Based: Learn a model of the world's state transition function P(St+1|St, at) and then use planning through the model to make decisions
3. Imitation Learning: Gather data about how experts perform in the environment, learn a function to imitate what they do (supervised learning approach)
4. Inverse Reinforcement Learning: Gather data of experts performing in environment; learn a reward function that they seem to be optimizing, then use RL on that reward function
5. Adversarial Learning: Learn to fool a discriminator that classifies actions as real/fake

## Case Study: Playing Games
[[AlphaGo]]
[[AlphaGo|AlphaGo Zero]]
[[AlphaGo|Alpha Zero]]
[[AlphaGo|MuZero]]
![](https://i.imgur.com/zUQMJnb.png)

# References
- (References:: [Lecture 21: Reinforcement Learning - YouTube](https://www.youtube.com/watch?v=Qex3XzcFKP4&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r))
- (References:: https://web.eecs.umich.edu/~justincj/slides/eecs498/498_FA2019_lecture21.pdf)
