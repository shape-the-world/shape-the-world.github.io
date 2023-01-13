---
title: Bayesian Workflow for Shape Modelling
id: bayesian-workflow-article
---

# Towards a principled Bayesian workflow for Shape Modelling

### Abstract

# Introduction
Statistical shape models, in particular Point Distribution Models, have been firmly established as an 
important tool for modelling and analyzing shape variations of anatomical structures. Growing out of 
the research stage in the computer science and medical image analysis field, these models are now embedded
in larger pipelines as part of more applied research in biomechanics, medical applications (TODO word). 
Furthermore they are widely employed in industrial settings, such as for implant planning, etc (TODO)
Despite their success, the building and validation of these models is often done ad-hoc. As a result, 
despite the simplicity of the models, their capabilities and limitations are not properly understood. 

Recently, generic workflows for Bayesian analysis have been  proposed by Gelman et al. [@wrigstad2017mastery] and Betancourt et al. [@swrigstad2017mastery] (TODO say what these doe). An application of this workflow to the area of cognitive science [@wrigstad2017mastery] (TODO change citation). 
In this article we adapt the principles highlighted in these papers to the specific situation of 
building statistical shape models. In particular, we focus on Point Distribution Models [@cite](TODO cite)
and use the mathematical interpretation as Gaussian process models (TODO cite), which is fully probabilistic
and easy to embed into a Bayesian Analysis. 

The paper is organized as follows. In section  [@sec:overview] we present the steps involved in 
the workflow and quickly comment on how these steps relate to shape modelling. We then introduce
an example application - the 2D to 3D reconstruction of vertebra from bilateral contours.(TODO is bilateral the right word?) 
 In the subsequent sections, we discuss each of the steps involved in modelling in detail using 
 the example application to ground the discussion. In particular we discuss the following steps:

1. Model building
2. Prior-predictive checks
3. Fitting a model and checking computational faithfulness
5. Posterior predictive checks
6. Model comparison

All the examples that we present in this article are produced using the open-source software
Scalismo [@scalismo](TODO cite). Accompanying this article is an online case-study, which provides additional experiments and implementation details, as well as the full source-code of all 
steps in this case study. 

# Overview of the workflow

Following Gelman et al (TODO cite) the workflow is structures as seen in Figure 1. 
(TODO Figure)

### Picking an initial model

TODO mention that it is a joint distribution consisting of a shape prior $\alpha$
a pose prior $t, R$ and a likelihood term connecting the observation with the data. 
$$
p(\theta, \Gamma_T) = p(\theta) p(\Gamma_T | \theta)
$$

In shape modelling, the parameters $\theta$ usually consists at least of shape parameters $\alpha$, 
pose parameters $t=(t_x, t_y, t_z)$ and $R=R_\phi, R_\psi, R_\theta$. But it can include 
any other parameters we are unsure about. If we assume, for example, that the observations 
are noisy, we might want to add the variance of that noise as a parameter. 

##### Building a Point-distribution model (PDM)

The first step is building a statistical shape model. In context of Point Distribution Models, the 
steps are well established. 

1. Collect a set of representative example data (typically surfaces represented as triangle meshes)
2. Establish correspondence among all the examples using a registration algorithm
3. Align the data using Generalised Procrustes Analysis (TODO cite)
4. Estimate the sample mean and sample covariance using the registered and aligned data. Use these
parameters to define a normal distribution (Gaussian process) of the shape variations. 

The result of this procedure is a model of typical shape variations, 
$$
u \sim GP(\mu, k), \mu : \Gamma_R \to \mathbb{R}^3, k : \Gamma_R \times \Gamma_R \to \mathbb{R}^{3\times3}
$$ 

whose mean and covariance are estimated from the examples. 
Usually, the Gaussian process is represented in the Karhunen-Lo\`eve basis (or PCA-baseis) (TODO cite GPMMs):
$$
u = \mu + \sum_{i=1}^n \alpha_i \sqrt{\lambda_i}\varphi, \,  \alpha_i \in N(0, 1)
$$


##### Modelling pose

Note that this model represents only the shape variability. Geometric effects like translation or
rotation (together commonly referred to as pose) are not modelled yet. We therefore need to augment 
the model with additional translation parameters $t = (t_x, t_y, tz_)$ and rotation parameters
$R = (R_\phi, R_\psi, R_\theta)$ (here represented as Euler angles). 

##### Likelihood 

The likelihood function $p(\Gamma_T | \theta)$ describes the probability of the data
as a function of the parameters. Thus it is inherently application specific. In shape modelling
applications, the likelihood is often itself a shape in some suitable representation.  
A common strategy is to define the likelihood in three steps:
1. Synthesis of a surface $\Gamma_M(\theta)$ from the given parameters 
2. Projection or rendering step $\phi$ to make the generated surface comparable with the target
3. Characterize the noise and/or bias probabilistically

As an example, if the target is another surface, the likelihood function might be
$$
p(\Gamma_T | \theta) = \prod_{i=1}^n p(cp_{\Gamma_T}(\Gamma_M(\theta))(x_i)|\theta)=  N(\Gamma_M(\theta)(x_i), \sigma_2 \mathcal{I}_{3\times 3})
$$

The idea is that we project the points of the model to their closest point on the target.
The assumption is that for the correct parameters $\theta$, the model explains the closest 
point up to Gaussian noise with variance $\sigma \mathcal{I}_{3\times3}$

### Prior predictive checks

After the definition of the initial model, the first key step is to check whether this 
model corresponds with our expertise. We need to answer questions like: 

* Are the generated surfaces anatomically valid?
* Do they span the proper range of shape variations that we expect to see?
* Are the pose variations sufficiently large to capture the pose variations
* Does the rendering or projection function produce data that is comparable to the observed data?

As statistical shape models are fully generative models, these questions can be answered by sampling a large
number of random samples from the model. In some cases it makes most sense to visualize the samples directly. 
In others we first compute summary statistics, which we then plot and compare to prior domain knowledge. 
If we for example model a femur shape, it makes sense to measure the length on all the generated samples (which can be done automatically) 
due to correspondence), which we then compare to the reported measures in the literature. 

The resulting process generates samples from the joint distribution $p(\Gamma_T, \theta)$. Note however, that ignoring the $\theta$
in all the samples amounts to marginalization. Hence what is formally computed is the *prior predictive distribution*
$$
p(\Gamma_T) = \int_\theta p(theta) p (\Gamma_T | \theta) \, d\theta
$$

TODO reference to generalization and specificity

##### Cross-validation of the shape

As the point distribution model is usually built from a set of examples, if we have these examples available, we can 
assess the generalization ability of the model directly using this data.
The idea is to check how well the shape model can represent the example data. This needs to be done in a leave-k-out fashion, 
where the model is built from $n-k$ examples, and the left-out $k$ examples are used for assessing the quality. 

Given that this data is in correspondence and properly aligned, finding the posterior distribution is easy and can be done in 
closed form. (TODO cite GPMM-Paper) The procedure features a noise-term for which we need to choose a value. This value should be 
chosen according to the noise that we assume we have on the example data. If the example data already come from a 
registration procedure, which smoothes-out the surfaces, it can be set to a very small value, that is just somewhat above 0 to 
increase numerical stability. If there is real noise on the data, as the registration result was obtained using a registration
procedure, which perfectly matches the target surface, a correspondingly higher value should be chosen. 
As a result we can for example record the Hausdorff distance and average distance for every left-out-shape to the best
representation in terms of the model. A histogram can be plotted to get a visual impression of the values. 
From this procedure we know the bias of the model. The values represent a lower-bound to the error we should expect in any application of the model. 

TODO note that this is distinct from the data we want to analyze in the application.



### Fitting a model and checking computational faithfulness

Once the initial model is selected the next step is to fit the model to example data to obtain the 
posterior distribution $P(\Gamma_T | \theta)$. Here the example data is a single 
dataset (i.e. a shape, an image or a contour in 2D or 3D) to which the model should be fitted. 

Usually it is not possible to find a closed form solution (except in the trivial case where we already have correspondence, see 
Cross-validation above (TODO)). The solution of choice is usually a sampling algorithm, such as Metropolis-Hastings or 
Hamiltonian Monte-Carlo (TODO cite)

Setting up a good sampler is a delicate matter and requires a lot of care to get right. 
The next important step in the workflow is therefore to assess computational faithfulness. 


##### Fake data simulation 
One way to find out whether a sampler works is to run it on simulated data. 
Simulating data from the joint distribution gives us a playing ground, which is hopefully close
to the real situation, but for which we know the shape of the target distribution. 

##### Simulation-based-calibration 

more formal method to 


### Posterior predictive checks

Once a model is fit, it is time to visualize again. This time we use the posterior

##### Cross-validation (again)

One possibility to understand if the fit to the model is good is to use cross validation. 
While we discussed cross-validation already in the part of model-building, the cross-validation 
we have in mind here is different. Here we leave out some part of the observations and try 
to fit them using our model. As we have almost infinitely many observation (as a surface is made
from infinitly many points) this is simple. TODO but what part should we leave out?

### Modifying a model

* Change priors, Incorporate additional data (observations from the surface)

* Change the shape model itself:
    * Should we standardize size
    * Should we align 
    * Should we augment the data


### Model comparison

In the final step we can compare different models. 
- Does it make sense to use an independence assumption in the likelihood, 
- Should we maybe use another likelihood
- Crossvalidation and model-averaging

# Example application: 2D to 3D reconstruction of Vertebra L5 from 2D contours

We demonstrate the workflow on an example application: Reconstructing the full 3D shape
from 2, orthogonal 3D contours. The data, and all the code, as well as a detailed description 
of all the steps involved in this case study is available on TODO (GITHUB/ SHape the world). 


## Initial model 

### Point distribution model

While the workflow we propose in this article is applicable to any shape modelling application using 
any type of shape model, such as SpharmPDM, XXX (TODO) we discuss here only point distribution models, 
interpreted as a Gaussian process model. The point distribution model we use was built from 
(TODO how many) example surfaces of the L5 vertebra, obtained from the Verse dataset (TODO cite). To build the model, a 
standard modelling workflow was followed. Details are given in (TODO cite).


#### Interlude: Registration using Gaussian process morphable models

With Gaussian Process Morphable Models, the idea is to use the same mathematical setting that is used
for modelling is used for registration. A Gaussian process is built using a mean- and covariance-function, that is defined analytically instead of learned from data. In this case all 
the steps discussed here can also be applied already in the registration step. 

A Gaussian Process Morphable Model is defined by defining a Gaussian process 
over deformation fields, i.e. by defining a mean and covariance function. In most cases, 
the mean deformation is chosen as the zero-mean and the covariance function is usually defined by 
a mixture of Gaussian kernels with varying length-scale $\sigma_i$ and scale $s_i$.
$$ 
k(x,x')=\sum_{i=1}^n s_i exp(-\norm{x - x'}/2\sigma_i ).
$$ 

Figure XXX shows samples from the prior for different length-scales and scale parameters. These give
us a visual overview of the possible shapes that could be obtained. Note that it is not a problem 
if the shapes are two flexible and not yet anatomically correct. Here it is only important that
they can represent the shapes for which we need to establish correspondence. 
To get a more quantitative feeling over the deformations we can measure quantities such as the distances between 
landmark points or variance at given points using samples from the Gaussian process model, and compare these to 
known values for the population. In some cases we might obtain these values from the literature. But even if this is not possible, we can just use the training data, which was used to build the statistical shape model, and measure the respective quantities. We illustrate this approach here for two different measurements:

1. The distance between the transverse processes (see figure xxx) 
2. Total variance at the spine. 




#### Crossvalidation
Before building the full model, we test the properties of the shape model using leave-one-out 
cross-validation. 

The following figures show a histogram of average distance and the Hausdorff distance when we try 
to explain a left-out sample using the model. We observe that on average, we get a good 
reconstruction. However, in at least one case there is an average error of around 2. 
It is important that we investigate this example further, as it shows that ....

#### Prior predictive checks

In the next step we perform prior predictive checks. 
We first simulate the parameters by sampling from the corresponding prior distributions over the parameters. 
We treat shape and pose independently, to make the results easier to interpret. 

Once we have these fake parameter vectors, we use them according to the sampling distribution given 
the parameters. 
In our case this would imply that we had to perform a 2D projection add Gaussian noise. (TODO where was this introduced?). 

Figure XXX show 10 pose samples and 10 shape samples projected into the XY plane. 

### Fitting

We start with fake data from the model. 
Step 1: Check if inference for each parameters are informative beyond the prior. E.g. the length could maybe not be predicted from only a sample, if length is really orthogonal
Step 2: Check that we get approximately the parameters right (up to uncertainty) Can we get the uncertainty?
Step 3: Check different ranges of parameters. Where does the fitting break?

Extreme - Simulation based calibration. Sample from the prior many times and pool the posterior samples. They should reflect the prior


##### Resolving fitting problems
>
> When you have computational problems, often there’s a problem with your model (Yao, Vehtari,
and Gelman, 2020)
>

Addressing the problems:

* Fit to fake data
* Start with a simple model and then increase complexity. We could reduce size of the model or number of components. This 
would even give rise to a multi-scale strategy
* Start with only few iterations while debugging
* Make sure the priors reflect your knowledge and make them informative. 
* Fit the model on a subset of the data (sample only parts)

Discuss multiscale strategies for fitting shape models

###### Monitoring the fits
* visual debugging by fitting

## Evaluating and using a fitted model

### Posterior predictive checks

* Free in Scalismo as samples from the posterior

### Cross-validation

Leave a part of the data out and check predictive performance. 
Does this lead to reasonable predictions?


### Influence of prior information

Do our results change if we change the prior slightly?

### Comparing models 

Fit many models to a single problem. Do we also do that? What could possible model be?


# References
TODO cite paper:
- Visualization in Bayesian workflow (Gabry et al.)
