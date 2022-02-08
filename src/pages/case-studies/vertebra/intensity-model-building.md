---
id: intensity-model-building
title: Intensity model building
---

# Building an intensity model 

In the application of Bone mineral density estimation, we are not mainly interested in the shape of a vertebra but rather its intensity distribution. 
We therefore also need an intensity model. As we have to every image a registered
tetrahedral mesh, we can simply estimating the sample mean and 
sample covariance matrix of the intensity at the vertices of the tetrahedral mesh, as we would for standard shape modelling. 

The implementation in [BuildIntensityModel](https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/modelling/BuildIntensityModel.scala) should not contain any surprises. 