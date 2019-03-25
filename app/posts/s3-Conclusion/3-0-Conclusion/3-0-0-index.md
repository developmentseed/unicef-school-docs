---
title: Conclusion
date: 2019-03-12
layout: post.html
---

Satellite imagery enables the generation of unique insights into population dynamics, urbanization and economic development at a scale that cannot be achieved using conventional survey techniques in isolation. Machine learning is capable of detecting many types of objects in satellite imagery. By leveraging the machine learning and high-resolution imagery, we are able to determine school detection at national scale is possible, and machine learning can assist human to narrow down searching space for points of interests. It can speed up school or other POIs mapping much faster.

We fine-tuned pre-trained models, Xception and MobileNetV2, with cleaned school data in Colombia. Our school classifier model achieved 0.89 validation accuracy with Xception, and 0.88 with MobileNetV2 on high-resolution satellite imagery. Specifically, the satellite image tiles with 59.6cm spatial resolution were query from DG Vivid Maps API. The schools classifier is a high-performed model on current training dataset, with 0.94 AUC and 9% of false positive rate. A large scale model inference across Colombia and the eastern Caribbean islands was implemented over ? million tiles with our best-performed trained model. The model inference returned more than 73,000 predicted school tiles that further validated by our expert mappers. We added about 11,000 schools to school maps to Colombia and the Caribbean islands, and around 7,000 of schools are unmapped schools.

[ Besides all the technologies support to make this case achievable. Here another few things, we think it was helpful too. Human and machine work together, and not replace human. few things here: machine learning can do a large scale, repeatable prediction on images, but it’s learn and predict at single image; human validation overlay the prediction with satellite imagery, and it turns to validate the prediction at bigger spatial scale. Human and machine work together can speed up the searching POIs.]

Our school classifier, including model training and model inference, can be fully automated, and scale up to a much larger geospatial areas in the future. These results suggest considerable potential for mapping schools at a scale quickly with human mappers’ validation. It will help support mitigating educational gap, improve quality education, further disaster response to vulnerable populations. Thereby aid the achievement of the relevant UN sustainable Development Goals of quality education.
