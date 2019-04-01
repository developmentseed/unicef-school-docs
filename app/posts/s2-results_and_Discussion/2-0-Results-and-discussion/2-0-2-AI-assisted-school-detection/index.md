---
title: AI assisted school detection and discussion
date: 2019-03-12
layout: post.html
---
To searching for points of interest (POIs), e.g. schools and hospitals manually is time-consuming especially at the national level. Our approach provided a way that human can be assisted by machine learning to narrow down searching space of the POIs from high-resolution satellite imagery. However, schools look very different in different regions, for instance schools in rural and urban. The looks will be vary a lot from country to country. The parameterization of the school classifier can be further explored for optimal classification to specific geolocations.

The machine learning model generalizability is an active research area , the school classifier we trained generalized-well in the eastern Caribbean islands. We added 262 schools to the islands that have not been mapped before. If users are looking at different countries or regions that have different terrains than Colombia, we recommend to add few but representative schools to fine tune our current trained school classifier.  Our school classifier, the Tensorflow Serving image(GPU version), lives on DockerHub now. It’s open-source and free to run as an end-points to users who want to send DG Vivid zoom 18 images tiles to classify schools in the interest area.


<figure class="align-center">
	<img src="/assets/graphics/content/results/schools_result0.png" alt="School validation maps" />
	<figcaption> </figcaption>
</figure>
<figure class="align-center">
	<img src="/assets/graphics/content/results/schools_result1.png" alt="School validation maps" />
	<figcaption> A few snapshots of newly discovered schools by the machine learning model, and they were validated by the expert mappers</figcaption>
</figure>


Again, the contemporary machine learning shed light on narrow down searching space for POIs. The trained model can be run, update the prediction frequently. An accurate school map, produced by machine learning and the expert mappers together, will still need field agents on the ground to further validate and confirm with local authorities in education.

Another our AI-assisted high-voltage grid mapping has been proved working. In the case, we used a similar model to detect high-voltage towers in Pakistan, Nigeria and Zambia that our expert mappers used the prediction to map high-voltage grid at the country-wide scale. The grid map now lives in OpenStreetMap that the platform users who have local knowledge about grid can update and correct the grid. Machine learning has provided a means to study the SDGs related issues., and the school detection case we present here address machine learning or AI assist school mapping with satellite imagery is possible.
