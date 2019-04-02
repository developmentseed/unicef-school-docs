---
title: Executive Summary
date: 2012-08-20
layout: post.html
permalink: /
---

Having accurate data about schools is key for organizations to provide quality education and promote lifelong learning, listed as UN sustainable development goal 4 (SDG4), ensure equal access to opportunity (SDG10) and eventually, reduce poverty (SDG1). However, this is a challenging task since educational facilities’ records are often inaccurate, incomplete or non-existent. By leveraging machine learning and high-resolution imagery, we are able to determine school detection at the national scale.

Despite their varied structure, many schools have identifiable overhead signatures that might make possible to detect them with modern deep learning techniques applied to high-resolution satellite imagery. This paper presents the results of a Convolution Neural Networks school classifier for high-res satellite imagery. This classifier is based on Xception and MobileNetV2 and fine-tuned with a new cleaned school dataset in Colombia.

We selected the best-performed model with 0.94 area under the ROC curve and 9% of the false positive rate from our nearly 200 training iterations. A large scale model inference across Colombia and the Eastern Caribbean islands was implemented over 52 million DigitalGlobe Vivid imagery tiles. A group of five expert mappers was able to validate 73,000 predicted school tiles from our machine learning inference within eight working days. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools.

<figure class="align-center">
	<img src="/assets/graphics/content/results/m20.gif" alt="Put unmapped schools on the map with machine learning"/>
	<figcaption> A snapshot of AI-assist human schools detection in Colombia. [DevSeed Data Team](https://medium.com/devseed/announcing-devseed-data-1a3d8102cb23), a group of five expert mappers validated the machine learning model predictions </figcaption>
</figure>

<figure class="align-center">
	<img src="/assets/graphics/content/results/schools_table_2.png" alt="The predicted school from machine learning" />
	<figcaption> DevSeed Data Team validated 73,000 predicted school tiles from machine learning. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools. </figcaption>
</figure>

Our study showed that current deep learning and inexpensive cloud computing can assist humans to detect schools at scale in a rapid, rigorous manner. This provides the first object-based detection model for schools. A complete and accurate school facility map can further reduce the digital divide in education and improve children’s access to information, digital goods, and opportunities, and make the best use of limited educational resources.

<figure class="align-center">
	<img src="/assets/graphics/content/results/unicef-final_schools.gif" alt="Put unmapped schools on the map with machine learning" />
	<figcaption> Put unmapped schools on the map with machine learning and the expert mappers</figcaption>
</figure>
