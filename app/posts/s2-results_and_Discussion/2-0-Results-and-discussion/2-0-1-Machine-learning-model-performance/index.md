---
title: AI assisted school detection and discussion
date: 2019-03-12
layout: post.html
---
A  threshold score of 0.92 is, and the model inference is run on Colombia and the eastern Caribbean islands. 73,717 tiles were predicted as school tiles and passed to the team of expert mappers to validate. It’s almost impossible to search for schools at the national level, however, the machine learning model was able to narrow down the searching scace to less than 0.15% of 52 million tiles for our expert mappers to validate. With a validation speed of 10,000 tiles per day, the mappers identified 10,998 school geolocations, where 6,954 of them are unmapped schools (schools that were not part of the initial dataset of 44,665 schools) (Figure 7). 60,568 predicted school tiles were tagged as “unrecognized” by our expert mappers, which turned into a heatmap (Figure 6). These tiles  don’t have clear school features (Figure 2). During the machine learning prediction validation, we found that schools in rural areas are hard to verify as schools because a “school” can’t be distinguished from residential houses.

The machine learning model generalizability is an active research area [23, 24], and in our study, the school classifier we trained in Colombia generalized well in the Eastern Caribbean islands. We added 262 schools to the islands that had not been mapped before. If users are looking at different countries or regions that have different terrains than Colombia, we recommend to add few but representative schools to fine tune our current trained school classifier.  Our school classifier, the Tensorflow Serving image(GPU version), lives on DockerHub now. It’s open-source and free to run as an end-points to users who want to send DG Vivid zoom 18 images tiles to classify schools in their area of interest.

<figure class="align-center">
	<img src="/assets/graphics/content/results/schools_table_2.png" alt="The predicted school from machine learning" />
	<figcaption> DevSeed Data Team validated 73,000 predicted school tiles from machine learning. We added about 11,000 schools to the map in Colombia and the Caribbean islands, and around 7,000 of them were unmapped schools. </figcaption>
</figure>


<figure class="align-center">
	<img src="/assets/graphics/content/results/schools_table_2.png" alt="The predicted school from machine learning" />
	<figcaption> Schools are represented as black dots from A - C in the figure. We had 44,655 schools provided by UNICEF(A.) and among them 10,951 schools  (B.) have been confirmed as schools by their clear school features shown in Figure 2. We use 70% of schools (10,951) in (B.)  to train the machine learning model, and after the validation of predictions, 10,988 schools were added to the map (C.), around 7000 of them are unmapped schools that we newly added after the ML validation. The school heatmap was created from the machine learning predicted and validated as “unrecognized” by our expert mappers (D). The heatmap is an interactive map that the field agents/validators on the ground can room in and see much more detail of the possible geolocation of the school  within a 152 by 152 m searching space. </figcaption>
</figure>
