---
title: Conclusion
date: 2019-03-12
layout: post.html
---

<figure class="align-center">
	<img src="/assets/graphics/content/results/new_schoos.png" alt="New Schools" />
	<figcaption>A few snapshots of unmapped schools we added to Colombia and East Caribbean islands</figcaption>
</figure>

Satellite imagery enables the generation of unique insights into population dynamics, urbanization and economic development at a scale that cannot be achieved using conventional survey techniques in isolation. Machine learning is capable of detecting many types of objects in satellite imagery. By leveraging machine learning and high-resolution imagery, we are able to determine school locations at national scale, proofing that machine learning can assist humans to narrow down the search space for points of interests. This can speed up the process of mapping schools or other POIs considerably.

For this study, we fine-tuned pretrained models (Xception and MobileNetV2), with cleaned school data in Colombia. Our school classifier model achieved 0.89 validation accuracy with Xception, and 0.88 with MobileNetV2 on high-resolution satellite imagery. Specifically, the satellite image tiles with 59.6cm spatial resolution were queried from DG Vivid Maps API. The school classifier is a high-performed model on current training dataset, with 0.94 AUC and 9% of false positive rate. A large scale model inference across Colombia and the Eastern Caribbean islands was implemented over 52 million tiles with our best-performed trained model. The model inference returned more than 73,000 predicted school tiles that were further validated by our expert mappers. As a result, about 11,000 schools were added to school maps for Colombia and the Caribbean islands, among whicharound 7,000 of schools are new (Figure 6, 7), previously unmapped schools.

Our school classifier, including model training and model inference, can be fully automated, and scaled up to much larger geospatial areas in the future. These results suggest considerable potential for mapping schools at a scale, quickly with human mappers’ in the loop for validation. This will support the improvement of education information management systems, reduce gaps in access to information and opportunity, improve the quality of education, and further disaster response to vulnerable populations. Thereby aid the achievement of the relevant UN sustainable Development Goals of equal access to quality education.
References
