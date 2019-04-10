---
title: AI assisted school mapping and discussion
date: 2019-03-12
layout: post.html
---
With a threshold score of 0.92 our model predicted that 73,717 tiles across Colombia and the eastern Caribbean islands contained schools. While this set certainly contained false positives and unverifiable tiles, it also significantly reduced the search space for schools in these countries to less than 0.15% of 52 million tiles. This shifted what was previously a nearly impossible task to one that could be done by 5 expert mappers in eight days.

With a validation speed of 10,000 tiles per day, the mappers identified 10,998 school geolocations, where 6,954 of them are unmapped schools (schools that were not part of the initial dataset of 44,665 schools). 60,568 predicted school tiles were tagged as “unrecognized” by our expert mappers, which turned into a heatmap (see the following figure). These tiles don’t have [clear school features](/methodology/school-data-cleaning/). During the machine learning prediction validation, we found that schools in rural areas are hard to verify as schools because residential houses may be used as school locations.

<figure class="align-center">
	<img src="/assets/graphics/content/results/table-2.png" alt="Results" />
	<figcaption> DevSeed Data Team validated 73,000 predicted school tiles from machine learning. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools. </figcaption>
</figure>

<figure class="align-center">
	<img src="/assets/graphics/content/results/new_schoos.png" alt="New Schools" />
	<figcaption>A few snapshots of unmapped schools we added to Colombia and East Caribbean islands</figcaption>
</figure>


Machine learning model generalizability is an active research area ([1](https://arxiv.org/abs/1611.03530), [2](https://developers.google.com/machine-learning/crash-course/generalization/video-lecture)), and in our study, the school classifier we trained in Colombia generalized well in the Eastern Caribbean islands. We added 262 schools to the islands that had not been mapped before. If users are looking at different countries or regions that have different terrains than Colombia, we recommend to add few but representative schools to fine tune our current trained school classifier. Our school classifier, the [Tensorflow Serving image(GPU version)](https://cloud.docker.com/u/geoyi/repository/docker/geoyi/2nd_sat_xception_tf-serving_gpu), lives on DockerHub now. It’s open-source and free to run as an end-points to users who want to send DG Vivid zoom 18 images tiles to classify schools in their area of interest.


<figure class="align-center">
	<img src="/assets/graphics/content/results/outputs_schools_2.png" alt="The predicted school from machine learning" />
	<figcaption> Schools are represented as black dots in figures A - C. UNICEF provided 44,655 school locations provided (A.). Of those 10,951 schools were confirmed as schools by expert mappers (B.). 70% of these verified schools were used to train the machine learning model. After the validation of our model predictions, 10,988 schools were added to the map (C.), around 7000 of these are previously unmapped schools that we newly added after the ML validation. The school heatmap was created from the machine learning predicted and validated as “unrecognized” by our expert mappers (D). The heatmap is an interactive map that the field agents/validators on the ground can use to prioritize ground validation of school locations. </figcaption>
</figure>
