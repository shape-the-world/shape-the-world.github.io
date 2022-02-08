---
id: bmd-application
title: Bone mineral density estimation
---

# Bone mineral density estimation

The final part of this case study consists of transfering a template, that defines the trabecular region of the vertebra, to the specific anatomy and use this region for estimating the 
bone mineral density. 

### Estimating the trabecular region
As part of the data preparation, we have annotated the trabecular region in our reference mesh, which we used for building the shape and intensity model. The result of the contour fitting is 
a warp of the reference mesh to the vertebra shape with the given contour. Estimating 
the trabecular region in the reconstructed shape can therefore be done by warping the annotated 
region along with the reference mesh. 

### Bone mineral density estimation 
Assuming that the intensity model was successfully fitted, we have now the correct intensities for the target vertebra defined on the annotated trabecular region. The estimation of the bone
mineral density is then performed by computing the mean intensity over this region. 


The code for performing this operation is given in [BMDMeasurement.scala](https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/bmd/BMDMeasurement.scala).
