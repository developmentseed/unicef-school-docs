---
title: School data cleaning
date: 2019-03-12
layout: post.html
---

A high-quality training dataset is essential for machine learning models to accurately learn object features. Our first step was to prepare a set of verified school locations, as well as a set of locations that are verified not to contain schools. The CNN will use its knowledge of both to build a model of determining whether any given image contains a school.

## School locations
UNICEF was able to provide a preliminary list of 44,665 school locations in Colombia. Five expert mappers from [Development Seed’s Data Team](https://medium.com/devseed/announcing-devseed-data-1a3d8102cb23), reviewed that dataset, and compared it to the DG Vivid RBG imagery. The Data team classified each location into those where 1) overhead imagery clearly contain schools ('confirmed'), 2) overhead imagery clearly does not contain a school ('not-school'), 3) it is uncertain whether or not overhead imagery contains a school ('unrecognized'). **Confirmed schools** are these observed from the high-resolution satellite imagery and have very clear school features, e.g. building size, shape, and facilities. Here are some of the school features that were used as criteria for schools and that can be used to label the tiles as “confirmed” schools.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/school_features.png" alt="Confirmed schools features" />
	<figcaption> School feature examples that our expert mapper use to clean and validate schools across Colombia.</figcaption>
</figure>

**The unrecognized schools** referred to geolocations that were part of the original 44,665 school dataset but that had no clear school features, especially in urban areas with high building density or, in rural areas that can’t be distinguished from residential buildings. Another case of unrecognized schools is school building(s) that can not be seen on DG Vivid because of cloud/tree cover. These locations were not used in training the model.

## 'Not School' locations
**The not-schools** refers to locations from the original 44,665 school dataset where the expert mappers could not find any school looking buildings at the provided school geolocations. As an example, some of the schools were mislocated in the middle of the ocean. This can be caused the school geolocation was recorded incorrectly or because the DG Vivid imagery has been updated in particular areas of Colombia after schools were built.  

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/not-school-compo.png" alt="Confirmed not schools" />
	<figcaption> A few examples of “not-school” covers various look of buildings and not buildings in Colombia</figcaption>
</figure>
