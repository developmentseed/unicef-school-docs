---
title: Executive Summary
date: 2012-08-20
layout: post.html
permalink: /
---

Having accurate data about schools is key for organizations to provide quality education and promote lifelong learning, listed as [UN sustainable development goal](https://sustainabledevelopment.un.org/?menu=1300) 4 (SDG4), ensure equal access to opportunity (SDG10) and eventually, reduce poverty (SDG1). However, this is a challenging task since educational facilities’ records are often inaccurate, incomplete or non-existent.

An accurate, comprehensive map of schools - where no school is left behind - is critical to measuring and improving the quality of learning. The map, combined with connectivity data collected by [UNICEF’s Project Connect initiative](https://www.unicef.org/innovation/school-mapping), can be used to reduce the digital divide in education and improve access to information, digital goods and opportunities for entire communities. In addition, understanding the location schools, can help governments and international organizations gain critical insights around the needs of vulnerable populations, and better prepare and respond to exogenous shocks such as disease outbreaks or natural disasterr.

**[UNICEF](https://www.unicef.org/) and [Development Seed](http://devseed.com/doc-seed) worked together to leverage machine learning, high-resolution imagery, and inexpensive cloud computing to determine school detection at the national scale.**

Despite their varied structure, many schools have identifiable overhead signatures that might make possible to detect them with modern deep learning techniques applied to high-resolution satellite imagery. This project presents the results of a Convolution Neural Networks school classifier for high-res satellite imagery. This classifier is based on Xception and MobileNetV2 and fine-tuned with a new cleaned school dataset in Colombia.

<figure class="align-center">
	<img src="unicef-school-docs/app/assets/graphics/content/methodology/school_features.png" alt="school features" />
	<figcaption>The school features are visible to deep learning. From top to bottom, we concluded that schools are normally in bigger size, varied shape compared to surrounding residential houses. Schools have boundary, and the buildings are in unified shape and color.Both urban and rural schools will have different facilities attach to the campus e.g. playground, basketball courts and swimming pool.</figcaption>
</figure>

A binary school classifier was trained with existing and cleaned schools dataset in Colombia. We then selected the best-performed model with 0.94 area under the ROC curve and 9% of the false positive rate from our nearly 200 training iterations. A large scale model inference, by Development Seed's open sourced tool [chip-n-scale-queue-arranger](https://github.com/developmentseed/chip-n-scale-queue-arranger), across Colombia and the Eastern Caribbean islands was implemented over 52 million [DigitalGlobe Vivid imagery](https://mapsapidocs.digitalglobe.com/docs/imagery-and-basemaps) tiles. DG Vivid is a snapshot of the earth, mosaiced sharpened and color-enhanced. This high-resolution imagery product has a 50cm spatial resolution and global coverage. At this sub-meter spatial resolution imagery, objects like buildings, cars, and trees can be observed clearly from space. DigitalGlobe has supported this research by providing access to its 31cm resolution Vivid Basemap. This project was initially selected as a recipient of a [GBDX Research Award](http://blog.digitalglobe.com/industry/gbdx-for-sustainability-challenge-mapping-every-school-in-the-world-and-reducing-the-digital-divide-in-education/), and continued to be supported by DigitalGlobe after the life of the award.

After the model inference, we downloaded the model predicted schools from our inference pipeline. [DevSeed Data Team](https://medium.com/devseed/announcing-devseed-data-1a3d8102cb23), a group of five expert mappers was able to validate 73,000 predicted school tiles from our machine learning inference within eight working days. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools.

<figure class="align-center">
	<img src="/app/assets/graphics/content/results/table-2.png" alt="stats of ml schools" />
	<figcaption>DevSeed Data Team validated 73,000 predicted school tiles from machine learning. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools</figcaption>
</figure>



Our study showed that current deep learning and inexpensive cloud computing can assist humans to detect schools at scale in a rapid, rigorous manner. This provides the first object-based detection model for schools. A complete and accurate school facility map can further reduce the digital divide in education and improve children’s access to information, digital goods, and opportunities, and make the best use of limited educational resources.

<figure class="align-center">
	<img src="/assets/graphics/content/results/unicef-final_schools.gif" alt="Put unmapped schools on the map with machine learning" />
	<figcaption> Put unmapped schools on the map with machine learning and the expert mappers. The color red are the existing and confirmed schools in Colombia; the yellow colored dots are the unmapped schools we added at the end of the project</figcaption>
</figure>
