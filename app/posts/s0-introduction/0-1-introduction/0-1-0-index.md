---
title: Executive Summary
date: 2012-08-20
layout: post.html
permalink: /
---


Having accurate data about schools is key for organizations to provide quality education and promote lifelong learning, listed as UN sustainable development goals 4 (SDG4), ensure equal access to opportunity (SDG10) and eventually, reduce poverty (SDG1). However, this is a challenging task since educational facilities’ records are often inaccurate, incomplete or non-existent. Machine learning is capable of detecting many types of objects in satellite imagery. By leveraging machine learning and high-resolution imagery, we are able to determine school detection at national scale.

We fine-tuned pre-trained models, Xception and MobileNetV2, from ImageNet with cleaned school data in Colombia. A school classifier was trained on training dataset from Colombia. We achieved 0.89 validation accuracy with Xception, and 0.88 with MobileNetV2 on high-resolution satellite imagery. The satellite imagery we used was in 59.6cm spatial resolution and were queried from DigitalGlobe (DG) Vivid Maps API.

We selected the best-performed model that with 0.94 area under ROC curve and 9% of false positive rate from our nearly 200 training iterations. A large scale model inference across Colombia and the eastern Caribbean islands was implemented over 52? million DG Vivid tiles. A group of five expert mapper were able to validate 73,000 predicted school tiles from our machine learning inference within eight working days. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools.

Our study showed current deep learning and inexpensive cloud computing can assist human to detect school in a way that is rapid, repeated and rigorous at a scale. We believe this is the first object-based detection for school, such a predicted and validated school map can narrow school searching on the ground. A complete and accurate school facility map can reduce the digital divide in education and improve children’s accessibility to educational resources, information, and opportunities, and make the best use of limited educational resources.


Exogenous shocks, e.g. infectious disease outbreaks, natural disasters and population displacements, are sudden and often unpredictable. A complete map of school can leverage an organization's strength, e.g. UNICEF, to access to critical insights of the needs of vulnerable populations, and make more informed decisions about how to invest its resources to respond to disaster, epidemics and other challenges. A comprehensive map of all schools is critical to measuring and improving the quality of education. A map of education infrastructure can be used to reduce the digital divide in education and improve children’s accessibility to educational resources, information and opportunities, and make best use of limited educational resources.

However, this kind of map does not exist today. By advancing machine learning and very high-resolution overhead imagery make "mapping every school" a possible task. In this study case, we explored deep learning approach with UNICEF to detect and map schools in Colombia and 15 eastern Caribbean islands.

| schools | not-schools |

[images of schools and not-schools]
We built an AI-assist workflow that can direct our expert mappers to look for school-like building complexity at country scale in Colombia and the eastern Caribbean islands. This workflow relied on a Convolutional Neural Net (CNN) to detect schools and expert mappers validate the prediction. The final outputs are confirmed schools geolocation added by our expert mappers and a heatmap that indicate likelihood of existing schools. Our workflow can be simplified as the following diagram.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/UNICEF_Schools_diagram.png" alt="The workflow diagram" />
	<figcaption> The AI-assist workflow that simplified as a diagram, and we will go through more detailed in a more specific section</figcaption>
</figure>

We ran the model inference, the large scale model prediction on about 53 million DG imagery tiles (152m x 152m per tile) that cover Colombia and the eastern Caribbean islands. 73, 717 tiles tiles have prediction score higher that 0.92. It was the total tile number that our expert mappers went through and validate if there is any school building complex exists in the imagery tile. At the end of the project, we added 10,998 schools that double-confirmed by machine learning and our expert mappers. 7216 out of added schools are unmapped schools in Colombia and Eastern Caribbean islands. We also created a heatmap that indicate the likelihood of schools in the area.

<div class="scrollable-x">
[use Karito's interactive graph instead]

| Description | related numbers|
|---------------------------|---------------------------|
| total tiles |~ 53 million (Colombia + eastern Caribbean islands) |
| ML prediction >0.92 | 73, 717 tiles |
| total added schools | 10,998 schools |
| existing schools    | 4,045 schools|
| added unmapped schools | 6,954 schools |
| unrecognized schools | 60,568 tiles|
| confirmed not-schools | 899 tiles|

</div>
