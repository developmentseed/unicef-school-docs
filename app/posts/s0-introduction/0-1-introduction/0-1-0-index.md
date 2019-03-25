---
title: Executive Summary
date: 2012-08-20
layout: post.html
permalink: /
---


Having accurate data about schools is key for organizations to provide quality education and promote lifelong learning, listed as UN sustainable development goals 4 (SDG4), ensure equal access to opportunity (SDG10) and eventually, reduce poverty (SDG1). However, this is a challenging task since educational facilities’ records are often inaccurate, incomplete or non-existent. Machine learning is capable of detecting many types of objects in satellite imagery. By leveraging machine learning and high-resolution imagery, we are able to determine school detection at national scale.The following diagram shows the simplified workflow.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/UNICEF_Schools_diagram.png" alt="The workflow diagram" />
	<figcaption> The AI-assist workflow that simplified as a diagram, and we will go through more detailed in a more specific section</figcaption>
</figure>


Schools have an identifiable overhead signature, making it possible to detect them with modern deep learning approaches. This signature is more profound within a particular country or region. A school classifier was trained on school dataset with Convolution Neural Networks. Specifically, we fine-tuned pre-trained models, Xception and MobileNetV2, from ImageNet with cleaned school data in Colombia. A school classifier was trained on training dataset from Colombia. We achieved 0.89 validation accuracy with Xception, and 0.88 with MobileNetV2 on high-resolution satellite imagery. The satellite imagery we used was in 59.6cm spatial resolution and were queried from DigitalGlobe (DG) Vivid Maps API.

We selected the best-performed model that with 0.94 area under ROC curve and 9% of false positive rate from our nearly 200 training iterations. A large scale model inference across Colombia and the eastern Caribbean islands was implemented over 52? million DG Vivid tiles. A group of five expert mapper were able to validate 73,000 predicted school tiles from our machine learning inference within eight working days. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools.

<div class="scrollable-x">

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

Our study showed current deep learning and inexpensive cloud computing can assist human to detect school in a way that is rapid, repeated and rigorous at a scale. We believe this is the first object-based detection for school, such a predicted and validated school map can narrow school searching on the ground. A complete and accurate school facility map can reduce the digital divide in education and improve children’s accessibility to educational resources, information, and opportunities, and make the best use of limited educational resources.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/UNICEF_Schools_diagram.gif" alt="Put unmapped schools on the map with machine learning" />
	<figcaption> Put unmapped schools on the map with machine learning and the expert mappers</figcaption>
</figure>
