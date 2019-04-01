---
title: The large scale model inference
date: 2019-03-12
layout: post.html
---

To run the inference at a country-wide scale on high-resolution imagery, we developed a library called [`chip-n-scale-queue-arranger`](https://github.com/developmentseed/chip-n-scale-queue-arranger). It is open sourced now. It is composed of a configuration code for Amazon Web Services (AWS CloudFormation) as well as small scripts for automating the necessary tasks associated with the satellite imagery and machine learning predictions. A high-level overview of the process looks like this:
A user sends `x/y/z` tile indices to an AWS SQS queue in the form of `'{ "x": 1, "y": 2, "z": 3}'`. These indicate which geographic region to run our model over.
Each SQS message triggers the Lambda function `DownloadAndPredict` which downloads images, posts to a prediction cluster (via a Load Balancer endpoint), and saves the result to an RDS database.
The prediction cluster on ECS runs the TensorFlow Serving image to predict each tile. All instances are behind an Application Load Balancer which will dynamically register new instances that appear on the cluster and allocate jobs to them evenly.
A user manually downloads predictions from RDS after the full inference process is complete.
  The prediction from RDS was converted to a shapefile so that our expert mappers can upload a map editor for validation. In the editor, the mappers can overlay the predicted school tiles only and focus their attention on confident predictions, avoiding the tedious task of reviewing the entire area for Colombia and the eastern Caribbean islands.
