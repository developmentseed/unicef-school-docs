---
title: School data cleaning
date: 2019-03-12
layout: post.html
---

A high-quality training dataset is essential for the machine learning models to learn the right object features. Our first step is to validate and clean the schools provided by UNICEF. [Development Seed’s Data Team](https://medium.com/devseed/announcing-devseed-data-1a3d8102cb23), a group of five expert mappers, validated the dataset that was used for training. The goal of the validation exercise is to split the original data into 1) a set of image tiles that contain schools, 2) a set of image tiles that clearly do not contain a school, 3) a set of image tiles that it’s uncertain if it contains a school or not.  The first two sets of clear school tiles and clear non-school tiles were used by the neural network to learn how to distinguish between the two. We use red, blue and green (RGB) spectral bands from DG Vivid to create the training image tiles.

The expert mappers tagged the school geolocations within the original dataset of 44,665 schools with the attributes of “confirmed”, “unrecognized” and “not-school”. **Confirmed schools** are these observed from the high-resolution satellite imagery and have very clear school features, e.g. building size, shape, and facilities. For instance, below are some of the school features that were used as criteria for schools and that can be used to label the tiles as “confirmed” schools.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/school_features.png" alt="Confirmed schools features" />
	<figcaption> School feature examples that our expert mapper use to clean and validate schools across Colombia.</figcaption>
</figure>

**The unrecognized schools** referred to geolocations that were part of the original 44,665 school dataset but that had no clear school features, especially in urban areas with high building density or, in rural areas that can’t be distinguished from residential buildings. Another case of unrecognized schools is school building(s) that can not be seen on DG Vivid because of cloud/tree cover.

**The not-schools** refers to locations from the original 44,665 school dataset where the expert mappers could not find any school looking buildings at the provided school geolocations. As an example, some of the schools were mislocated in the middle of the ocean. This can be caused the school geolocation was recorded incorrectly or because the DG Vivid imagery has been updated in particular areas of Colombia after schools were built.  

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/not-school-compo.png" alt="Confirmed not schools" />
	<figcaption> A few examples of “not-school” covers various look of buildings and not buildings in Colombia</figcaption>
</figure>
