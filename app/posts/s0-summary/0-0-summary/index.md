---
title: Executive Summary
date: 2019-02-15
layout: post.html
permalink: /
---

A comprehensive map of all schools is critical to measuring and improving the quality of education. A map of education infrastructure can be used to reduce the digital divide in education and improve children’s accessibility to educational resources, information and opportunities, and make best use of limited educational resources. This map does not exist today, but advancements in machine learning and remote mapping make it feasible to map schools around the world using satellite imagery.

| schools | not-schools |

[ images of schools and not-schools]
We built an AI-assist workflow that can direct our expert mappers to look for school-like building complexity at country scale in Colombia and the eastern Caribbean islands. This workflow relied on a Convolutional Neural Net (CNN) to detect schools and expert mappers validate the prediction. The final outputs are confirmed schools geolocation added by our expert mappers and a heatmap that indicate likelihood of existing schools. Our workflow can be simplified as the following diagram.

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/UNICEF_Schools_diagram.png" alt="The workflow diagram" />
	<figcaption> The AI-assist workflow that simplified as a diagram, and we will go through more detailed in a more specific section</figcaption>
</figure>

We ran the model inference, the large scale model prediction on about 53 million DG imagery tiles (152m x 152m per tile) that cover Colombia and the eastern Caribbean islands. 73, 717 tiles tiles have prediction score higher that 0.92. It was the total tile number that our expert mappers went through and validate if there is any school building complex exists in the imagery tile. At the end of the project, we added 10,998 schools that double-confirmed by machine learning and our expert mappers. 7216 out of added schools are unmapped schools in Colombia and Eastern Caribbean islands. We also created a heatmap that indicate the likelihood of schools in the area.

<div class="scrollable-x">

| Description | related numbers|
|---------------------------|---------------------------|
| total tiles |~ 53 million (Colombia + eastern Caribbean islands) |
| ML prediction >0.92 | 73, 717 tiles |
| total added schools | 10,998 schools |
| existing schools    | 4,045 schools|
| added unmapped schools | 6,954 schools |
| unrecognized schools | 60,568 tiles|
| confirmed not-schools | 899 tiles|

</div>
