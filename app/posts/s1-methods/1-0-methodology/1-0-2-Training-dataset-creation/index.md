---
title: Training dataset creation
date: 2019-03-12
layout: post.html
---

## image tiles downloading with [Geokit](https://github.com/developmentseed/geokit)

Two categories of datasets, school and not-school, were generated as the training dataset for the coming machine learning model. We randomly sampled half of the school geolocations from “confirmed school”, and generated 5,904 tiles as “school” training dataset (Table 1.). However, the not-school category is more complex. It can be forest, grassland, agricultural fields without any buildings. It can also be a building complex that looks very similar to “school” from space, e.g. hospitals, market places, courthouses etc. To enrich the “not-school” category, and allow our machine learning algorithm to detect real schools better, we queried available hospital, farmlands, parks, courthouses and marketplaces from OpenStreetMap to added to “not-schools” as training dataset. We ended up having 9,092 tiles (Table 1.) as “not-schools”. Through the machine learning model training iterations, we learned that the model was over-confident in certain areas, we adjusted the training dataset. For instance, we randomly included more schools as well as purposely added more regular building tiles that are not schools. You can see the detailed information(Table 1.) especially for the training dataset for the first and second sessions.

Table 1. School data cleaning and training dataset creation for machine learning.

| Tasks | Confirmed | Unrecognized | not-school | Total|
| --- | --- | --- | --- | --- |
|Data Cleaning | 10,951 | 26,638 | 7,066 | 44,655 schools |
|Training dataset for the 1st session  | 5,904 | - | 9,092 | 14,996 tiles |
|Training dataset for the 2nd session | 8,716 | - | 11,192 | 19,908 tiles |



## training dataset split

To assess the model performance fairly, our training dataset of two categories, school and not-school tiles, are then split into 70:20:10 ratio as train, validation and test datasets. We randomly selected 70% of tiles to train the model, the remaining 20% was used to validate the model. The training set was seen and used by the model intensively to train the school classifier, and the validation set is occasionally seen and used to fine-tune the classifier. However, the last 10% of test dataset was not seen by the model, and it acts as the golden standard dataset to evaluate the model performance. 
