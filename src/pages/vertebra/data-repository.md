---
id: data-repository
title: Data repository
---

# Data repository

```scala
trait DataRepository {
    def triangleMesh(stage : Stage, id : CaseId) : Try[TriangleMesh[_3D]]
}
```