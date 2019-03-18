---
title: Machine learning prediction validation
date: 2019-03-12
layout: post.html
---

In the validation process, the expert mapped validate each predicted school tile and tag “confirmed”, “unrecognized” and “no” schools based on the learned school features(Figure 2) from the cleaned school dataset. With the increase of the threshold, e.g. from 0.44 to 0.99, we would limit the false prediction but we will also lose an increasing proportion of correct prediction (Figure 5). The following figure (Figure 6) gave us a hint on what threshold to selected that our expert mappers can find unmapped schools from ?number of the predicted school tiles. 

When the threshold is set to 0.92, after we the model inference on Colombia and the eastern Caribbean islands, we have 73,717 tiles that are predicted school tiles for our expert mappers to go through. With the validation speed of 10,000 tiles, our expert mappers validated added unmapped schools to complete the school map.
