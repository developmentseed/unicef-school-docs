---
title: School data cleaning
date: 2019-03-12
layout: post.html
---

A high-quality training dataset is essential for the machine learning models to learn the most important object features. Our first step is to validate and clean the schools provided by the UNICEF team. Our Data Team, a group of five expert mappers, validated training dataset that can be used for training. The goal of the validation exercise is to produce a set of clear image tiles that contain schools and a set of image tiles that clearly do not contain the school so that the neural network can learn to distinguish between the two. We only use red, blue and green (RGB) spectral bands from DG Vivid imagery to create the training image tiles.

We received 44,665 schools geolocations from the UNICEF team at the beginning of the the project. Through the school training dataset cleaning and validations, our five expert mappers tag the school geolocation with the attributes of “confirmed”, “unrecognized” and “not-school” to the provided schools.

**Confirmed schools** are these observed from the high-resolution satellite imagery and have very clear school features, e.g. building size, shape, and facilities. For instance, here are a few school features we selected and can be used to label the tiles as “confirmed” schools when verifying the provided school geolocations.


<figure class="align-center">
	<img src="/assets/graphics/content/methodology/confirmed_schools.png" alt="Confirmed Schools" />
	<figcaption> School feature examples that our expert mapper use to clean and validate schools across Colombia.</figcaption>
</figure>

**The unrecognized school** referred to the provided schools that has no clear school features, especially in the urban area with dense buildings and building can’t be distinguished from residential houses in the rural area. Another case can be school building(s) can not be seen on DG Vivid because of cloud/tree cover.


**The not-school** is the location that our expert mappers could not find any buildings at the provided geolocation. It can be caused by the school geolocation were recorded incorrectly or DG Vivid imagery has been updated in a particular area in Colombia after schools were built.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/not_schools.png" alt="Confirmed Schools" />
	<figcaption> A few examples of “not-school” covers various look of buildings and not buildings in Colombia</figcaption>
</figure>
