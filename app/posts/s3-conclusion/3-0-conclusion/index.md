---
title: Conclusion
date: 2019-03-12
layout: post.html
---
Satellite imagery enables the generation of unique insights into population dynamics, urbanization and economic development at a scale that cannot be achieved using conventional survey techniques in isolation. Machine learning is capable of detecting many types of objects in satellite imagery. By leveraging machine learning and high-resolution imagery, we are able to determine school locations at national scale, proofing that machine learning can assist humans to narrow down the search space for points of interests (POIs). This can speed up the process of mapping schools or other POIs considerably.

The aim of this project is to explore the use of contemporary deep learning methods for assisted automated mapping of schools to locate accurate school geo-locations in a timely manner. This methodology will allow us to rapidly, frequently and rigorously detect schools in different terrains and regions. This work forms the foundations towards an approach that could be used to allow point-to-point mapping of schools - and eventually other facilities like health centers - at national scale on a repeatable basis.

Recent advances in the fields of earth observation and computer science offers tremendous potential for mapping schools with machine learning at scale. First, fine spatial and temporal resolution satellite sensor data is widely available. In this study, we used DigitalGlobe Vivid Imagery (DG Vivid) at zoom level 18, which is 0.596m spatial resolution.

The second key technological advance that enables this work is a GPU-powered image classification based on Convolutional Neural Networks (CNN). At the emerging spotlight of machine learning, CNNs allow partial remote sensing applications, especially object-based and pixel-based remote-sensed image analysis, moving towards high performing GPU-powered parallel computed machine learning. In fact, multiple studies indicate that CNN based machine learning methods can yield into more accurate classifications  than conventional statistical classifiers.

We were able to train a high-performed school classifier  on current training dataset, with 0.94 AUC and 9% of false positive rate. A large scale model inference across Colombia and the Eastern Caribbean islands was implemented over 52 million tiles with our best-performed trained model. The model inference returned more than 73,000 predicted school tiles that were further validated by our expert mappers. As a result, about 11,000 schools were added to school maps for Colombia and the Caribbean islands, among which around 7,000 of schools are new previously unmapped schools.

<figure class="align-center">
	<img src="assets/graphics/content/results/unicef-final_schools.gif" alt="Put unmapped schools on the map with ML" />
	<figcaption> Put unmapped schools on the map with machine learning and the expert mappers. The color red are the existing and confirmed schools in Colombia; the yellow colored dots are the unmapped schools we added at the end of the project</figcaption>
</figure>


Last but not least, deploying the school detection model at large spatial scale was only possible because of the advances in cloud computing. Cloud computing allows for on-demand, cheap access to computing power, data storage, applications, and other IT resources. Our school classifier, including model training and model inference, can be fully automated, and scaled up to much larger geospatial areas in the future. These results suggest considerable potential for mapping schools at a scale, quickly with human mappers’ in the loop for validation. This will support the improvement of education information management systems, reduce gaps in access to information and opportunity, improve the quality of education, and further disaster response to vulnerable populations. Thereby aid the achievement of the relevant UN sustainable Development Goals of equal access to quality education.
References
