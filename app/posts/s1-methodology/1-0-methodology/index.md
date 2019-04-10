---
title: Methodology
date: 2019-03-12
layout: post.html
---

Our approach to school detection with DG Vivid imagery and machine learning involved five steps:
1. Create a high quality map of known schools
2. Generate a training dataset
3. Iterate and tune a school classified using Sat-Xception
4. Run our model over all of Colombia and the Eastern Caribbean to identify candidate unmapped schools
5. Validate these predictions with Development Seed expert mappers.

The diagram below provides this workflow in greater detail. The core machine learning model and model inference sit at the center of the diagram. On either side are data curation activities undertaken by expert mappers. To its left is our pipeline for cleaning, validating and generating the training dataset, and to its right is the machine learning prediction and validation.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/UNICEF_Schools_diagram.png" alt="machine learning workflow diagram" />
	<figcaption> Our AI-assisted workflow for schools detection</figcaption>
</figure>
