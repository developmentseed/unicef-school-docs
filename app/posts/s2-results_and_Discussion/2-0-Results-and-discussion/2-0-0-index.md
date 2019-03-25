---
title: Result and Discussion: AI assisted school detection
date: 2019-03-12
layout: post.html
---

## Overall machine learning

The machine learning model took individual tile as input and provided output for each in the form of a probability between zero and one. By running the model prediction over the test set (about 2000 tiles) we plotted a ROC curve.  ROC curve gives us an overall model performance and guidance on thresh cutoff. The model was trained on available and 70% confirmed schools from our the cleaned school dataset (Table 1).


<figure class="align-center">
	<img src="/assets/graphics/content/results/roc_curves.png" alt="School validation maps" />
	<figcaption>The ROC curve and false positive rate for the school classifier in Colombia</figcaption>
</figure>

The ROC curve indicates the area under the curve is up to 0.94 from the test set with the given threshed of 0.44 (above figure), and we got a false positive rate of 9%. The ROC curve (above figure, A) showed the model we selected was a high-performed model, which only 9% of schools have ring the false alarms by giving schools have various looks and features.

However, to pick a threshold that will give us enough correct prediction but doesn’t overwhelm us when we validate the prediction afterword is hard (above figure. B).  Since the selected machine learning model was run on? million tiles in Colombia and multiple eastern Caribbean islands, if we use the given threshold (0.44), we would have 73, 717 predicted school tiles to be validated. But if we set the threshold too high, we will lose some confirmed school that we knew was in 10, 951 confirmed schools of the cleaned school dataset.
