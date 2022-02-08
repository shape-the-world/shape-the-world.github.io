---
id: vertebra
title: Vertebra case study - Overview
---

# Shapemodel-based 2D/3D reconstruction of vertebra for BMD estimation

This case study describes a complete pipeline for building a shape and intensity model of the vertebra and its application to the use of bone mineral density estimation from a single X-Ray image. It consists of several part, each of which 
describes a self-contained modul that could be useful by itself in other shape modelling applications. The individual parts are

- [Pipeline and data management](/case-studies/vertebra/pipeline-and-data-management)
- [Building a statistical shape model](/case-studies/vertebra/shape-model-building)
- [Building a statistical intensity model](/case-studies/vertebra/intensity-model-building)
- [2D/3D reconstruction of manually annotated contours in a 2D X-Ray image](/case-studies/vertebra/contour-fitting)
- [Fitting the intensity model](/case-studies/vertebra/intensity-fitting)
- [Bone mineral density estimation](/case-studies/vertebra/bmd-application)

The pipeline is deliberately kept simple. For the last 2 steps, it is fair to 
say that these are even overly simplistic. The rational is to show the simplest approach that can work to illustrate the principle and the use of the software. These models should, however, be a good basis for developing more realistic models. 

### The software 

The pipeline is implemented using the open source software [Scalismo](https://scalismo.org). The full source code is available on our [Github repository](https://github.com/shape-the-world/vertebra-case-study).