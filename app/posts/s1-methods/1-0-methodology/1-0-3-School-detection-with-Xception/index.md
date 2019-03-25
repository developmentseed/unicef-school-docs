---
title: Nightlight trends
date: 2018-10-01
layout: post.html
---

## Sat_Xception

To quickly train a school classifier with our data, we create a deep learning python package called Sat-Xception. It is a deep learning package that utilizes pre-trained models from ImageNet. The package is designed to quickly install, transfer-learn and fine-tune image classification with the built-in pre-trained models, which can be used to train other classifiers besides the school classifier. Xception and MobileNetV2 were two pre-trained models that built-in in the python package. They were written by Keras, a high-level python package that can allow users to quickly reconstruct neural networks,  and we used Google's Tensorflow as backend.  

Xception is one of current state-of-art CNN architectures and pre-trained models on top of ImageNet.  It’s a high performing and efficient network compares to other pre-trained networks. MobileNetV2 is a model that is slightly less accurate compared to Xception. However, it's a very light-weight, fast, and it's easy to tune for resources vs. accuracy. Both Xception and MobileNetV2 have fewer hyper-parameter available to tune compared to other pre-trained models, e.g. VGG and Inception, but both are high-performed models.

### Training a school classifier with Sat_Xception

To install `sat-xception` , transfer-learn and fine tune an image classification model, you need to:

- set up an python environment using [conda to create a virtual environment](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/) or use [pyenv](https://gist.github.com/Geoyi/f55ed54d24cc9ff1c14bd95fac21c042);

- git clone [this repo](https://github.com/developmentseed/unicef-schools.git);
- cd to main_model where the `sat-xception` core script is located;
- run `pip3 install -e .` or `pip install -e .`

We organize the training dataset in such a order:

```

└── main_model/
    ├── train/
           ├── not-school
           ├── school
    └── valid/
           ├── not-school
           ├── school
    └── test/
           ├── not-school
           ├── school
```

To train a school classifier, or any other image classification, you only need to install the `Sat_Xception` and run `train` with the selected models. For instance:

```{bash}
sat_xception train -model=xception -train=train -valid=test
```

## School classifier and model performance
A binary image classification,  the school classifier, was trained with Xception and MobileNetV2 for the purpose of comparison and A-B testing at our model training sessions. We monitored the model training through TensorBoard. TensorBoard allows engineers to understand, debug and optimize machine learning model training that built on top of Tensorflow.

We broke the training sessions into two sessions. The first session was designed to test the water if Sat-Xception can train a well-performed school classifier in Colombia. The model was over-confident in rural Colombia in the first session, which means we have too many false predictions in the area. To overcome it, our expert mapper created a new training dataset that was slightly different from our training dataset in the first session. In the second training session, we added 2,048 buildings that are not-school. For the “school” category, we only kept rural schools that have very clear school features (Figure 2.). We also randomly selected another 2500 tiles to add to the category (Table1.).  

We trained about 200 model iterations on two separate AWS EC2  P3.2xlarge and it’s AWS’s deep learning AMI machines that have deep learning virtual environment setup, e.g. python3 with Tensorflow GPU version pre-installed in our case, and ready-to-use.  and found the best-performing model from MobileNetV2 validation accuracy was 0.88 but it was 0.89 with Xception, therefore, we picked the model trained with Xception (see Figure 4.). We packaged the best-trained Xception model with Tensorflow Serving . Tensorflow Serving helps to package the Keras and Tensorflow model as a Docker image. The image can serve as an Endpoint for large spatial scale model inference, which allows us to run model inference on tens of millions of image tiles per hour without manually watching the inference.

<figure here>
