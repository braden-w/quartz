---
tags:
 - On/Artificial_Intelligence/Safety
 - Type/Source/Course
title: Intro to ML Safety
date: "2022-08-03"
date modified: "2022-08-07"
---

# Intro to ML Safety
[[Four Unsolved Problems in ML Safety]]

[[Risk Decomposition]]

## Risk Decomposition

### Risk Analysis Definitions
[[Failure Mode]]
[[Hazard (AI Safety)]]
[[Vulnerability (AI Safety)]]
[[Threat]]
[[Exposure]]
[[Ability to Cope]]

### Disaster Risk Equation
[[Disaster Risk Equation]] and the [[Extended Disaster Risk Equation]].
[[How the Four Unsolved Problems in ML Safety Relate to Disaster Risk Equation]]

- (References:: [risk\_decomposition - Google Slides](https://docs.google.com/presentation/d/1RMZ89VHzVnDhugcrrwvHQnRIw366dMr3JYFC3rkxjL0/edit#slide=id.g60c1429d79_0_0))

## Accident Models
[[Swiss Cheese Model]]
[[Boe Tie Model]]

### Complex Systems Background
Linear Models is not enough, see [[Introduction to STAMP#Introduction to STAMP#Capturing More Types of Causality Than Linear]] and [[Systems Theory]].

[[The Whole is Greater Than the Sum of Its Parts]].

We should see [[Deep Learning]] as [[Systems Theory|Complex Systems]].

- (References:: [accident\_models - Google Slides](https://docs.google.com/presentation/d/1HquuLs0OTVYvuk0QRCG_6aqWhmMEf7sDBFLvRaEAZL4/edit#slide=id.g60c1429d79_0_0))

## Black Swans
[[The Black Swan|Black Swan]]
[[Long Tailed Distributions]]
Mediocristan and Extremistan
Unknown Unknowns

- (References:: [black\_swans - Google Slides](https://docs.google.com/presentation/d/1rDWQuwdqFPm1ebqnuM9x_H-2ZYGehj6kSp_5LOi6q5E/edit#slide=id.g60c1429d79_0_0))

## Review
[[Z Score]]

- (References:: [adversarial\_robustness - Google Slides](https://docs.google.com/presentation/d/1HzloChC0XElQkCTI181CN6OaYcVNnB5l37sfuANkcq0/edit#slide=id.g60c1429d79_0_0))
- (References:: [black\_swan\_robustness - Google Slides](https://docs.google.com/presentation/d/1uW7hNstJAq7_lSyk3yP8yTSjN85itESbDHFRi1F4wiw/edit#slide=id.g60c1429d79_0_0))

## Different Forms of $x_adv$
FGSM

## Anomaly Detection
- Anomaly Scores
	- Assigning anomaly scores
	- Anomalous or [[Out-of-Distribution (OOD)]] examples should have higher anomaly scores
- [[True Positive Rate (TPR)]] and [[False Positive Rate (FPR))]]
- AUROC/AUPR/FPR95
	- [[ROC Curve]] shows [[True Positive Rate (TPR)|TPR]] and [[False Positive Rate (FPR))|FPR]] values at different thresholds
	- 50% AUROC is a random-chance level, while 100% is perfect.
		- Percent interpretation is like school grading. In AI, we want closer to 99.99%, not even 90% is considered good enough.
	- AUROC can be interpreted as the porbability an anomalous example has a higher anomaly score than a usual example
	- [[Precision]] and [[Recall]]
		- [[Precision]] = TP / (TP + FP)
		- [[Recall]] = TP / (TP + FN)
		- ![[Pasted image 20220807151122.png]]
	- [[Recall]] is the exact same as [[True Positive Rate (TPR)|TPR]]
	- The Boy Who Cried Wolf was High [[Recall]] but Low [[Precision]]
- Likelihoods and detection
- MSP baseline
- [[Outlier Exposure]]
	- For Classifier Models
		- Train on Tiny ImageNet (200 pictures), and use the remaining 800 as outlier dataset
		- Testing this model on OOD texture data greatly increases performance!
	- For Generative Models
- ViM
- Anomaly datasets
- One-class learning
	- [[Self-Supervised Learning]] Example
		- [[Rotation Prediction]]
			- Model rotates the image by some amount and then attempts to predict the actual rotation
			- Force models to learn more about structure
- Detecting adversaries
- Error detection

- (References:: [Intro\_to\_ML\_Safety/main.md at master · centerforaisafety/Intro\_to\_ML\_Safety](https://github.com/centerforaisafety/Intro_to_ML_Safety/blob/master/Anomaly%20Detection/main.md))
- (References:: [anomaly\_detection - Google Slides](https://docs.google.com/presentation/d/1WEzSFUbcl1Rp4kQq1K4uONMJHBAUWhCZTzWVHnLcSV8/edit#slide=id.g60c1429d79_0_0))
- (References:: [Anomaly Detection - YouTube](https://www.youtube.com/watch?v=344sNPH-cSE))

## Interpretable Uncertainty
- Performance Spikes
	- What if AI greatly increases in performance unexpectedly?
		- [[GPT-3 Learned to do 3-Digit Addition, Even Though]]
		- 3 Digit Addition
	- [[Grokking]]
	- Self-preservation as an [[Emergent Behaviors|Emergent Goal]]
		- Self-preservation improves an agent's ability to accomplish its goals, so self-preservation emerges in many adaptive system
		- Example - A robot which makes Coffee
- [[Proxy Gaming]]
	- Example - Decrease number of Cobras
	- Website
		- Objective: increase website user satisfaction
		- Proxy: number of clicks
		- Gaming strategy: promote clickbait, addict users
	- GPA
		- Objective: select smart, conscientious students
		- Proxy: GPA
		- Gaming strategy: take easy classes
	- Many systems will be counteracting intervention
	- [[Goodhart's Law]], which is not necessarily a law but a rule of thumb
		- Beware of the interpretation, "When a measure becomes a target, it ceases to be a good measure"
			- Beware of this, as it is an oversimplification
			- Do not extrapolate it to "we shouldn't have goal"
- Calibration vs sharpness
- Proper scoring rules
- Brier score
- RMS calibration error
- Reliability diagrams - Confidence intervals - Quantile prediction

- (References:: [interpretable\_uncertainty - Google Slides](https://docs.google.com/presentation/d/1GHKlv-9UmQdUPracBr09AC2rFZp_GQyJzSQrvSWFjPM/edit#slide=id.g60c1429d79_0_0))
- (References:: [Interpretable Uncertainty - YouTube](https://www.youtube.com/watch?v=nWfCp7ZN6H8))

## Transparency
- Saliency maps - Token heatmaps - Feature visualizations - ProtoPNet
- (References:: [interpretable\_uncertainty - Google Slides](https://docs.google.com/presentation/d/1GHKlv-9UmQdUPracBr09AC2rFZp_GQyJzSQrvSWFjPM/edit#slide=id.g60c1429d79_0_0))
- (References:: [Transparency - YouTube](https://www.youtube.com/watch?v=cqMe9E4p7fE))

## Trojans
- Hidden functionality from poisoning - Treacherous turns
- (References:: [trojans - Google Slides](https://docs.google.com/presentation/d/1Nu5WwLQ7CDk_DotP_ET98F2F-2KBp9W8lkAfuCbeZ7E/edit#slide=id.g60c1429d79_0_0))
- (References:: [Trojans - YouTube](https://www.youtube.com/watch?v=KnA_aTQ9upU))

## Detecting Emergent Behavior
- emergent capabilities - instrumental convergence - Goodhart's Law - proxy gaming
- (References:: [emergent\_behavior\_proxy\_gaming - Google Slides](https://docs.google.com/presentation/d/1MGz_eMPQNm5Ov52IZz2vTuTL9IRoABV2tn_MFVrxlQI/edit#slide=id.g60c1429d79_0_0))
- (References:: [Detecting Emergent Behavior - YouTube](https://www.youtube.com/watch?v=_4qrAck4q18))

# References
- References:: [Schedule | Intro to ML Safety](https://course.mlsafety.org/calendar/#media-popup))
