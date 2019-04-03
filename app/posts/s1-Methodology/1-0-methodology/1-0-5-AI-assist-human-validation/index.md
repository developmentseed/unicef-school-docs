---
title: ML prediction validation
date: 2019-03-12
layout: post.html
---

In the validation process, the expert mapped validate each predicted school tile and tag “confirmed”, “unrecognized” and “no” schools based on the learned [school features](/methodology/school-data-cleaning/) from the cleaned school dataset. With the increase of the threshold, e.g. from 0.44 to 0.99, we would limit the false prediction but we will also lose an increasing proportion of correct prediction. When the threshold is set to 0.92, we have 73,717 tiles that are predicted school tiles for our expert mappers to go through. With the validation speed of 10,000 tiles, we were able to complete the predicted school validation within eight working days. See our the results in [next section](/results-and-discussion/ai-assisted-school-detection-and-discussion/).

<figure class="align-center">
	<img src="/assets/graphics/content/methodology/m20.gif" alt="Put unmapped schools on the map with machine learning"/>
	<figcaption> AI-assist human schools detection in Colombia. Blue dots are validated and confirmed as schools by the expert mappers</figcaption>
</figure>
