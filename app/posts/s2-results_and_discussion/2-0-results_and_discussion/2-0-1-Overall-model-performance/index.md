---
title: Overall model performance
date: 2019-03-12
layout: post.html
---
Our machine learning model took individual tiles as input and provided an output in the form of a probability between zero and one for each. By running the model prediction over the test set (about 2000 tiles) we plotted a ROC curve.  The ROC curve gives us an overall model performance and guidance on threshold cutoff.

The ROC curve indicates the area under the curve is up to 0.94 from the test set with the given threshed of 0.44 -  we got a false positive rate of 9%. The ROC curve (A) shows that the model we selected was a high-performed model, where only 9% of detected schools are expected to be false positive.


<figure class="align-center">
	<img src="/assets/graphics/content/results/ROC_Curve_all.png" alt="School validation maps" />
	<figcaption>The ROC curve and false positive rate for the school classifier in Colombia. The ROC curve indicates the area under the curve is up to 0.94 from the test set with the given threshed of 0.44</figcaption>
</figure>

In initial testing, we found that Xception model was slightly more accurate than MobileNetV2. However we also noticed that MobileNetV2 was much faster for each model training iteration. Specifically, MobileNetV2 only used a quarter of time per training iteration on exactly the same training set. Our study on AWS infrastructure allowed us to opt for using additional computing resources for a marginally better result. For those without access to rich cloud computing resources, you might consider using MobileNetV2 to train the model instead.

During the validation process, the expert mappers validate each predicted school tile and tag it as “yes”, “unrecognized” and “no” based on the school features part of the selection criteria defined during the initial data cleaning process. With the increase of the threshold (e.g. from 0.44 to 0.99) we would limit the false predictions but in the process, we will also lose an increasing proportion of correct predictions.
