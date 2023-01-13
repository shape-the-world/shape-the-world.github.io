---
id: part4
title: Shape model fitting to 2D contours
---

# 3D from 2D Reconstruction of Vertebra on Fake data

In this part we apply Markov Chain Monte Carlo fitting for 3D from 2D reconstruction. 
We start by using simulated contours, which we know the model can explain, and use this data 
to calibrate our method and to detect computational problems. Once the pipeline is up and running we 
run it on real data. 


### Contents:
* Fitting shape models as Bayesian regression ([Article](/courses/big-data-africa/fitting-as-regression))
* 3D from 2D reconstruction of vertebra shapes on simulated data ([Jupyter-Notebook](../TODO))

#### Learning goals

The participants

* Understand shape model fitting as a regression problem.
* can fit their shape model of the vertebra to simulated 2d contours.
* can use simulated data to evaluate and assess fitting problems.
* can assess the limitations of the model.
* know how to extend the model to include pose and rendering parameters.


### Reading

- Gelman, Andrew, et al. "Bayesian workflow." arXiv preprint arXiv:2011.01808 (2020) [(pdf)](https://arxiv.org/abs/2011.01808), Pages 12 - 30. 
