---
id: pipeline-and-data-management
title: Pipeline and data management
---


# Pipeline and data managementt

## Data management

Data plays a crucial role in shape modelling applications. The shape is learned from 
a set of tetrahedral or triangle meshes and the intensity distribution is usally estimated
from a set of images. The data itself usually goes through several differnet stages. It needs to be landmarked, aligned and brought into correspondence. Depending on the application, additional steps might be needed. 

Although all the steps in data handling are, in principle, straight-forward, it has shown in practice shape modelling pipelines quickly become messy and difficult 
to maintain when data is handled ad-hoc. We therefore start this case study with discussing an approach for data handling in shape modelling applications. 

### Data repository

The core idea is the following: 

> Data should never be explicitly referred to by its filename or URI. Rather, it is accessed through a data repository, using an abstract identifier (case-id) and processing stage to identify the data.  

This simple principle ensures that all information on how the data is stored and used is 
stored in a single place, namely the data repository. In our pipeline, the data repository is represented by a Scala ```trait``` (an inteface), which defines how we 
can interact with the data, plus a concrete implementation, which provides the concrete
mapping to the datasets, as they are physically stored in the filesystem or the database. 

The DataRepository class looks as follows:
```scala
trait DataRepository {

  def caseIds: Seq[CaseId]

  ... 

  def triangleMesh(stage: Stage, id: CaseId): Try[TriangleMesh[_3D]]
  def saveTriangleMesh(stage: Stage, id: CaseId, mesh: TriangleMesh[_3D]): Try[Unit]

  def tetrahedralMesh(stage: Stage, id: CaseId): Try[TetrahedralMesh[_3D]]
  def saveTetrahedralMesh(stage: Stage, id: CaseId, mesh: TetrahedralMesh[_3D]): Try[Unit]

  def landmarks(stage: Stage, id: CaseId): Try[Seq[Landmark[_3D]]]

  ...
}
```
(See the code on [Github](https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/data/DataRepository.scala) for more details.)

We see that data is accessed by specifying its ```id``` and the ```stage``` it is in. 
The id is just an identifier for each dataset. Typically, this id is
part of the filename of the dataset. The stage instead, refers to the processing stage
of the data. In a typical shape modelling application, we are distinguishing the folowing 
stages:

* Initial: The raw data as we get it from a database
* Aligned: All the data have been aligned to a common reference coordinate system, which is typically determined using a dataset as a reference and aligning all the data to it using e.g. procrustes alignment. 
* Registered: The meshes are in correspondence with a reference mesh, that was selected.


In code, the stage is defined as follows:
```scala
sealed trait Stage
case object Initial extends Stage 
case object Aligned extends Stage 
case class Registered(level: ResolutionLevel) extends Stage
```

We see that for the stage ```Registered``` we also distinguish between different resolution levels of the reference mesh. This is useful when we want to build 
models on different resolution levels. 


The ```DataRepository``` is just an interface. There can be several concrete implementations of it. As part of the pipeline, we provide the 
[DirectoryBasedDataRepository](https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/data/DirectoryBasedDataRepository.scala), which provides a concrete implementation, which assumes that the 
data are stored on the filesystem. It presupposes a special directory organisation. The implementation therefore also directly serves as documentation 
about how the data is organized. 


## Errorhandling,  Logging and Debugging

We see in the above code snippets that the functions to load the data do not simply return the dataset, such as a ```TriangleMesh[_3D]```, but rather a ```Try[TriangleMesh[_3D]]```. Wrapping all the data in a ```Try``` makes it possible to 
do principled error handling from within the pipeline. While this has some upfront cost in developing the pipeline, it will make life easier when running the pipeline. In a similar spirit, we use a logging framework to produce output from our simulation. 

When developing the pipeline it is important that we can visually assess the output. Our code therefore makes extensive use of  [Scalismo-ui](https://github.com/unibas-gravis/scalismo-ui) for visualizing the datasets, the processes and the results. The GUI that does the visualization is started using 
```scala
val ui = ScalismoUI()
```
Once the pipeline is stable and we would like to run it on a server, we can simply replace that call with 
```scala
val ui = ScalismoUIHeadless()
```
This will supress any debugging output. 
