---
title: AI assisted school detection: confirmed schools
date: 2019-03-12
layout: post.html
---
When the threshold is set to 0.92, after we the model inference on Colombia and the eastern Caribbean islands, we have 73,717 tiles that are predicted school tiles for our expert mappers to go through. With the validation speed of 10,000 tiles, our expert mappers validated added unmapped schools to complete the school map. We add 10,998 school geolocations in the end, and 6,954 of them are unmapped schools. However, we have 60,568 predicted school tiles were tagged as “unrecognized” by our expert mappers. They don’t have clear school features (Figure 2). In the machine learning prediction validation, we found schools in rural areas are hard to verify as schools because “school” can’t be distinguished from residential houses.

Table 2. The stats from our machine learning school detection in Colombia and the eastern Caribbean island.
<table here> 
Total tiles reviewed
73, 717
Confirmed ml_school tiles
12,250
Confirmed and added ml_school geolocations
10,998
ml_school unrecognized
60,568
ml_school no
899





Figure 7. Schools are presents black dots from A - C in the figure. We had 44,655 schools provided by UNICEF team (A.) and among them 10,951 schools  (B.) have been confirmed as schools by their school features. We use 70% of schools in (B.)  to train the machine learning model, and after the prediction validation, 10,988 schools were added to the map (C.), and 7000 of them are unmapped schools that we newly added after the ML validation. The school heatmap was created from the machine learning predicted and validated as “unrecognized” by our expert mappers (D). The heatmap is interactive map that the field agents/validators on the ground can room in and see much more detail possible geolocation would be within 152 by 152 m searching space.
