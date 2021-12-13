---
id: pipeline-and-data-management
title: Pipeline and data management
---

* Data organisation
* Error handling
* Logging
* Debugging with the GUI 
* Making it ready to run on a server


```scala
trait DataRepository {
    def triangleMesh(stage : Stage, id : CaseId) : Try[TriangleMesh[_3D]]
}
```
