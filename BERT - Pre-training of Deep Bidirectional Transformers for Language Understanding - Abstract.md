---
aliases: BERT
tags:
 - On/Machine_Learning
 - Type/Source/Paper
title: BERT - Pre-training of Deep Bidirectional Transformers for Language Understanding - Abstract
date: "2022-07-30"
date modified: "2022-07-30"
---

# BERT - Pre-training of Deep Bidirectional Transformers for Language Understanding - Abstract
This research paper discusses the pre-training of deep bidirectional transformers for language understanding using the BERT model. The model is trained on a large corpus of text and Wikipedia and then fine-tuned for specific tasks. The paper shows that the model can be used for a variety of tasks such as question answering, natural language inference, and sentiment analysis. The model outperforms previous state-of-the-art models on several benchmarks.

The article discusses several related implementations of pre-training general language representations, such as Unsupervised Feature-based Approaches and Unsupervised Fine-tuning Approaches. Unsupervised feature-based approaches learn general language representations by training a model on a large corpus of text and discerning low-dimension features from that data. Unsupervised fine-tuning approaches are pretrained using unlabeled text and fine-tuned on labeled data, such as GPT 3.

BERT is composed of two major sections: pre-training and fine-tuning. The pre-training section is responsible for training the model on a large corpus of text and Wikipedia. Specifically, the model is trained to predict masked words in a sentence (Masked Language Model, or MLM) and to predict whether two sentences are consecutive or not (Next Sentence Prediction, or NSP). The fine-tuning section is responsible for taking the pre-trained model and adapting it to a specific task, such as question answering or sentiment analysis. Specifically, the model is fine-tuned on a task-specific dataset. 

The paper shows that the BERT model outperforms previous state-of-the-art models on several benchmarks, including the SQuAD v1.1 and v2.0 question-answering datasets, SWAG, and the MultiNLI natural language inference dataset.

A possible weakness of the paper is that it does not explicitly mention the potential for overfitting when the model is used on small datasets. Since the datasets used are so large, such as Wikipedia and BooksCorpus, it is possible that the model could overfit if used on a smaller dataset. Furthermore, the paper does not mention how the model would perform on out-of-domain data. Despite these weaknesses, the paper is well-written and provides a clear description of the BERT model. The results are impressive and show that the model can be used for a variety of tasks.

# References
- (References:: [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding | Abstract](https://arxiv.org/abs/1810.04805))
