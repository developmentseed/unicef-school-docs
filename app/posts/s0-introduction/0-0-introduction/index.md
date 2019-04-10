---
title: Executive Summary
date: 2012-08-20
layout: post.html
permalink: /
---

Accurate data about school locations is critical to provide quality education and promote lifelong learning, listed as [UN sustainable development goal](https://sustainabledevelopment.un.org/?menu=1300) 4 (SDG4), to ensure equal access to opportunity (SDG10) and eventually, to reduce poverty (SDG1). However, in many countries educational facilities’ records are often inaccurate, incomplete or non-existent.

An accurate, comprehensive map of schools - where no school is left behind - is necessary to measure and improve the quality of learning. Such a map, in combination with connectivity data collected by [UNICEF’s Project Connect initiative](https://www.unicef.org/innovation/school-mapping), can be used to reduce the digital divide in education and improve access to information, digital goods and opportunities for entire communities. In addition, understanding the location of schools can help governments and international organizations gain critical insights around the needs of vulnerable populations, and better prepare and respond to exogenous shocks such as disease outbreaks or natural disaster.

**[UNICEF](https://www.unicef.org/) and [Development Seed](http://devseed.com/doc-seed) are working to leverage machine learning, high-resolution imagery, and inexpensive cloud computing to create a comprehensive map of school at the national scale.** This report offers findings from activities conducted between October 2018 and March 2019 to map schools in Colombia and the Eastern Caribbean using a combination of powerful deep learning techniques and trained human mappers. This research involved the creation or improvement of new datasets, models, and software, including:
- Clean dataset of schools in Columbia and Eastern Caribbean
- Softwares ([Geokit](https://github.com/developmentseed/geokit#features-to-tiles) or [label-maker](https://github.com/developmentseed/label-maker)) to generate chipsets for overhead imagery
- Schools chipset optimized for school detection
- [Sat-Xception](http://devseed.com/unicef-school-docs/methodology/sat-xception-and-the-school-classifier/) - a python package to quickly run deep learning image classification algorithms.
- [Trained model](https://cloud.docker.com/u/geoyi/repository/docker/geoyi/2nd_sat_xception_tf-serving_gpu) for school detection in Latin America
- [Software](https://github.com/developmentseed/chip-n-scale-queue-arranger) to manage applying the model over extremely large areas.

This report provides additional details on these assets including links for download and documentation.

## Detecting Schools in Overhead imagery
Despite their varied structure, many schools have identifiable overhead signatures that make them possible to detect in high-resolution imagery with modern deep learning techniques. Our hypothesis, demonstrated in previous work in Liberia was that a CNN would have success identifying unmapped schools in high-resolution imagery. One goal of this project was to test the generalizability of these models. We believed that the digital signature of schools in Colombia was close enough to that of neighboring countries that a model trained on Colombia would perform well there. To test this, we used the model developed in Colombia to detect schools in [name islands]

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/school_features.png" alt="school features" />
	<figcaption>School features are visible to deep learning</figcaption>
</figure>

We trained a binary school classifier with existing and cleaned schools dataset in Colombia. We created a Convolution Neural Network (CNN) school classifier based on Xception and MobileNetV2, modified for use on overhead imagery and tuned with a new, highly accurate school dataset that we created for Colombia. We then selected the best-performed model--0.94 area under the ROC curve and 9% of the false positive rate--from our nearly 200 training iterations. We then applied this model across across Colombia and the Eastern Caribbean islands to detect potentially unmapped schools. Running the model over such a large area of high resolution imagery is a huge task, requiring processing over 52 million [DigitalGlobe Vivid imagery](https://mapsapidocs.digitalglobe.com/docs/imagery-and-basemaps) tiles. Development Seed created an open source tool,  [chip-n-scale-queue-arranger](https://github.com/developmentseed/chip-n-scale-queue-arranger), to manage high volume satellite imagery inference tasks.

*DG Vivid is a snapshot of the earth, mosaiced, sharpened and color-enhanced. This high-resolution imagery product has a 50cm spatial resolution and global coverage. At this sub-meter spatial resolution imagery, objects like buildings, cars, and trees can be observed clearly from space. DigitalGlobe has supported this research by providing access to its 31cm resolution Vivid Basemap. This project was initially selected as a recipient of a [GBDX Research Award](http://blog.digitalglobe.com/industry/gbdx-for-sustainability-challenge-mapping-every-school-in-the-world-and-reducing-the-digital-divide-in-education/), and continued to be supported by DigitalGlobe after the life of the award.*

After the model inference, we downloaded the model predicted schools from our inference pipeline. A group of five expert mappers on the [Development Seed Data Team](https://medium.com/devseed/announcing-devseed-data-1a3d8102cb23) validated 73,000 predicted school tiles from our machine learning inference within eight working days. We added about 11,000 schools to the map in Colombia and the Caribbean islands, of which approximately 7,000 were unmapped schools.

<figure class="align-center">
	<img src="/assets/graphics/content/results/table-2.png" alt="stats of ml schools" />
	<figcaption>The Development Seed Data Team validated 73,000 predicted school tiles from machine learning. We added about 11,000 schools to the map in Colombia and the Caribbean islands, of which approximately 7,000 were unmapped schools.</figcaption>
</figure>

Our study showed that current deep learning and inexpensive cloud computing can assist humans to detect schools at scale in a rapid, rigorous manner. This provides the first object-based detection model for schools. A complete and accurate school facility map can further reduce the digital divide in education and improve children’s access to information, digital goods, and opportunities, and make the best use of limited educational resources.

<figure class="align-center">
	<img src="/assets/graphics/content/results/unicef-final_schools.gif" alt="Put unmapped schools on the map with machine learning" />
	<figcaption> Put unmapped schools on the map with machine learning and the expert mappers. The color red are the existing and confirmed schools in Colombia; the yellow colored dots are the unmapped schools we added at the end of the project</figcaption>
</figure>
