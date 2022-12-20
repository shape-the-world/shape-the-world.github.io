---
id: big-data-africa
title: Big data africa
--- 

# Big Data Africa School 2023 - Course Project 


### 3D from 2D reconstruction using Gaussian Process Morphable Models

This page holds all the lecture material for the course project 
*3D from 2D reconstruction using Gaussian Process Morphable Models*, as presented
at the [Big Data Africa School - 2023](https://www.sarao.ac.za/students/4th-big-data-africa-school/). 


### Contents

In this course, the participant will work on the problem of 3D from 2D reconstruction of a vertebra from a single 2D contour using statistical shape models. 
Along the way, the participants will learn how to approach such a problem in a principled way using the Bayesian workflow. The goal is that the participants do not only learn how to 
perform 3D from 2D reconstruction using shape models, but learn a principled workflow that they can apply to all sorts of inference problems. 


#### Day 1: Generative modelling and the Bayesian workflow
- [Part 1](/courses/big-data-africa/part1): Introduction to the Bayesian workflow and generative modelling
- [Part 2](/courses/big-data-africa/part2): Modelling of vertebra shapes

#### Day 2: Fitting a model
- [Part 3](/courses/big-data-africa/part3): Model fitting using Markov Chain Monte Carlo
- [Part 4](/courses/big-data-africa/part4): 3D from 2D Reconstruction of Vertebrae

#### Day 3: Evaluating a fitted model
- [Part 5](/courses/big-data-africa/part5) : Assessing and evaluating the reconstructed 3D vertebra shape


### Target audience and prerequisites

The participants should have passed a first course in probability theory and statistics. No prior exposition to Bayesian statistics is assumed. 
The course project will be written using the programming language *Scala*. While no previous experience in *Scala* is required, the participants should have strong programming skills, preferably in a 
strongly typed language such as Java, C# or C++.


### Literature and additional resources

#### Research papers

The following two papers provide the conceptual foundation for the project

- Gelman, Andrew, et al. "Bayesian workflow." arXiv preprint arXiv:2011.01808 (2020) [(pdf)](https://arxiv.org/abs/2011.01808)
- Lüthi, Marcel, et al. "Gaussian process morphable models." IEEE transactions on pattern analysis and machine intelligence 40.8 (2017): 1860-1873. [(pdf)](https://ieeexplore.ieee.org/abstract/document/8010438/)

#### Software

As a basis for all the practical parts we will use the Open Source Software library Scalismo. 

- Scalismo - Scalable Image and Shape Modelling ([Webpage](https://scalismo.org/), [Github](https://github.com/unibas-gravis/scalismo))

#### Online courses with additional material 

- Online course on Statistical Shape Modelling [(Course page)](https://shapemodelling.cs.unibas.ch/ssm-course)
- Online course on probabilistic model fitting [(Course page)](https://shapemodelling.cs.unibas.ch/probabilistic-fitting-course/)