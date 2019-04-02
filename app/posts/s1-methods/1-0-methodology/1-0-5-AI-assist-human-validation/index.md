---
title: Machine learning prediction validation
date: 2019-03-12
layout: post.html
---

In the validation process, the expert mapped validate each predicted school tile and tag “confirmed”, “unrecognized” and “no” schools based on the learned school features(Figure 2) from the cleaned school dataset. With the increase of the threshold, e.g. from 0.44 to 0.99, we would limit the false prediction but we will also lose an increasing proportion of correct prediction. When the threshold is set to 0.92, we have 73,717 tiles that are predicted school tiles for our expert mappers to go through. With the validation speed of 10,000 tiles, our expert mappers validated added unmapped schools to complete the school map within eight working days.

<figure class="align-center">
	<img src="/assets/graphics/content/results/m20.gif" alt="Put unmapped schools on the map with machine learning"/>
	<figcaption> AI-assist human schools detection in Colombia - 1 </figcaption>
</figure>

<figure class="align-center">
	<img src="/assets/graphics/content/results/m19.gif" alt="Put unmapped schools on the map with machine learning"/>
	<figcaption> AI-assist human schools detection in Colombia - 2</figcaption>
</figure>
