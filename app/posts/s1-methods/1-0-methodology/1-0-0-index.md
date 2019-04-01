---
title: Methods
date: 2019-03-12
layout: post.html
---

Our workflow of school detection with DG Vivid imagery and machine learning can be simplified as a diagram as follows. The diagram of our school detection system with high-resolution satellite imagery and machine learning. The Core Machine Learning Model and model inference sit at the center of the diagram. To its left is the pipeline for cleaning, validating and generating the training dataset, and to its right is the machine learning prediction and validation.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/unicef-UNICEF_Schools_diagram.png" alt="Put unmapped schools on the map with machine learning" />
	<figcaption> Our AI-assisted workflow for schools detection</figcaption>
</figure>

A high-quality training dataset is essential for the machine learning models to learn the right object features. Our first step is to validate and clean the schools provided by UNICEF. Development Seed’s Data Team, a group of five expert mappers, validated the dataset that was used for training. The goal of the validation exercise is to split the original data into 1) a set of image tiles that contain schools, 2) a set of image tiles that clearly do not contain a school, 3) a set of image tiles that it’s uncertain if it contains a school or not.  The first two sets of clear school tiles and clear non-school tiles were used by the neural network to learn how to distinguish between the two. We use red, blue and green (RGB) spectral bands from DG Vivid to create the training image tiles.

Our AI-assist school detection in Colombia and the East Caribbean islands are:
- Data cleaning
- Training data creation
- Sat-Xception and the school classifier
- The model inference with the best performed model over Colombia and the eastern Caribbean islands
- The expert mapper validate the machine learning prediction

See the detailed steps under this section.
