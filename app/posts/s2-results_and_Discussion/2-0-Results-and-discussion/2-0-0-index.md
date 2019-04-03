---
title: Result and Discussion
date: 2019-03-12
layout: post.html
---

Searching for Points of Interest (POIs) (e.g. schools and hospitals) manually is time-consuming, especially at national level. Our approach provided a way where humans are assisted by machine learning to narrow down the search space of the POIs from high-resolution satellite imagery. However, schools can look very different in different regions, for instance, schools in rural and urban areas often don’t have the same characteristics. Furthermore,the looks will vary a lot from country to country. To overcome this challenge, the parameterization of the school classifier can be further explored for optimal classification to specific geolocations.

#### Overall machine learning

The machine learning model took individual tiles as input and provided an output in the form of a probability between zero and one for each. By running the model prediction over the test set (about 2000 tiles) we plotted a ROC curve.  The ROC curve gives us an overall model performance and guidance on threshold cutoff.

The ROC curve indicates the area under the curve is up to 0.94 from the test set with the given threshed of 0.44 (Figure 5) -  we got a false positive rate of 9%. The ROC curve (Figure 5, A) shows that the model we selected was a high-performed model, where only 9% of schools have ring false alarms.


<figure class="align-center">
	<img src="/assets/graphics/content/results/ROC_Curve_all.png" alt="School validation maps" />
	<figcaption>The ROC curve and false positive rate for the school classifier in Colombia</figcaption>
</figure>

The ROC curve indicates the area under the curve is up to 0.94 from the test set with the given threshed of 0.44

We found that Xception model was more accurate but that MobileNetV2 was much faster for each model training iteration. Specifically, MobileNetV2 only used a quarter of time per training iteration on exactly the same training set. In the case of our study, we had the AWS infrastructure set up and available and we were able to take more computing resources for increasing the accuracy. However,for whom does not have access to rich cloud computing resources, we recommend to use MobileNetV2 to train the model instead.

During the validation process, the expert mappers validate each predicted school tile and tag it as “yes”, “unrecognized” and “no” based on the school features part of the selection criteria defined during the initial data cleaning process (Figure 2). With the increase of the threshold (e.g. from 0.44 to 0.99) we would limit the false predictions but in the process, we will also lose an increasing proportion of correct predictions (Figure 5).
