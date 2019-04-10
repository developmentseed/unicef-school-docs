---
title: Sat-Xception and the school classifier
date: 2018-10-01
layout: post.html
---

#### Selecting a machine learning framework
We did initial testing on two promising ML frameworks: Sat-Xception and MobileNetV2. Our preliminary testing showed slightly better results from Sat-Xception, so we selected Sat-Xception for the remainder of the project.

#### Sat-Xception

To quickly train the school classifier, we create a deep learning python package called `Sat-Xception`. It is a deep learning package that utilizes pre-trained models from [ImageNet](https://en.wikipedia.org/wiki/ImageNet). **It currently private and we will make it open sourced soon**. [Xception](https://arxiv.org/abs/1610.02357) and [MobileNetV2](http://keras.io/applications/) were two pre-trained models built-in in the package. The package is designed to quickly install, transfer-learn and fine-tune image classifiers with the built-in pre-trained models, which can be used to train other classifiers rather than just school classifier in this case. They were written by [Keras](http://keras.io/), a high-level python package that can allow users to quickly reconstruct neural networks Google's [Tensorflow](https://www.tensorflow.org) was used as backend.  

<figure class="align-center">
<img src="/assets/graphics/content/methodology/DCNNs.jpeg" alt="Put unmapped schools on the map with machine learning" />
<figcaption> Xception and MobileNetV2 are both high-performed pretrained models</figcaption>
</figure>

Xception is one of current state-of-the-art CNN architectures and pre-trained models on top of [ImageNet](http://www.image-net.org/).  It’s a high performing and efficient network compared to other [pre-trained networks]( http://keras.io/applications/). [MobileNetV2](https://arxiv.org/abs/1801.04381) on the other hand, is a model that is slightly less accurate compared to Xception. However, it's a very light-weight, fast, and easy to tune when limited resources available (appropriate for scenarios with resource vs. accuracy tradeoff). Both Xception and MobileNetV2 have fewer hyper-parameter available to tune compared to other pre-trained models, e.g. VGG and Inception, but both are high-performed models.


#### Training a school classifier with `sat-xception`

To install `sat-xception` , transfer-learn and fine tune an image classification model, you need to:

- set up an python environment using [conda to create a virtual environment](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/) or use [pyenv](https://gist.github.com/Geoyi/f55ed54d24cc9ff1c14bd95fac21c042);

- git clone [this repo](https://github.com/developmentseed/unicef-schools.git) (will open source soon);
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

To train a school classifier, or any other image classification, you only need to install the `Sat_Xception` and run `train` with the selected models. For instance, to train a school classifier with MobileNetV2 you can run:

```{bash}
sat_xception train -model=mobilenetv2 -train=train -valid=valid
```

#### School classifier and model performance

We broke the training sessions into two sessions. The first session was designed to test the feasibility of using Sat-Xception to train a well-performed school classifier in Colombia. The model was over-confident in rural Colombia in the first session, leading to too many false predictions in the area. To overcome the issue, the expert mapper team created a new training dataset that was slightly different from the training dataset in the first session. In the second training session, 2,048 ‘not-school’ buildings were added. In addition, for the “school” category, we only kept rural schools that have very clear school features. We also randomly selected another 2,500 confirmed school tiles to add to the category.  

We trained about 200 model iterations on two separate [AWS EC2](https://aws.amazon.com/ec2)  [P3.2xlarge](https://aws.amazon.com/ec2/instance-types/p3/). They are AWS’s deep learning AMI machines that have deep learning virtual environment setup, e.g. python3 with Tensorflow GPU version pre-installed in our case, and ready-to-use.  We found the best-performing model from MobileNetV2 with a validation accuracy of 0.88. However, Xception reached a validation accuracy of 0.89, and therefore, we picked the model trained with Xception. We packaged the best-trained Xception model with Tensorflow Serving. [Tensorflow Serving](https://www.tensorflow.org/tfx/guide/serving) helps to package the Keras and Tensorflow model as a [a Docker image](https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/). The image can serve as an endpoint for large spatial scale model inference, which allows us to run model inference on tens of millions of image tiles per hour without manually watching the inference.

<figure class="align-center">
<img src="/assets/graphics/content/methodology/val_acc_loss_cv4gc.png" alt="ML accuracy" />
<figcaption> The validation accuracy and loss from model training iterations. Model training iteration with Xception at the first row and MobileNetV2 at the second row. The two models were trained on the same dataset, and the following graph only reflected the training with the 2nd session of the training dataset.</figcaption>
</figure>
