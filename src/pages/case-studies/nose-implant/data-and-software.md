--- 
id : data-and-software
title: Data and Software
---
<!--
# Data

We are using [10 public scans](https://faces.dmi.unibas.ch/bfm/index.php?nav=1-1-1&id=scans) from [Basel Face Model (BFM)](https://faces.dmi.unibas.ch/bfm/index.php).

The scans are already registered, i.e. all meshes have the same number of vertices and the vertices are numbered
consistently in every mesh, such that the $i$-th vertex always denotes the same anatomical point on all the meshes. 
This is a non-trivial property that in a practical setting needs to be established using registration algorithm using 
a registration algorithm. One of many possibility of how this can be done is discussed int the following Paper
by Gerig et al.[~1]

We extract the downloaded tgz file and, as we are only working with the .ply files, copy all files with the ending .ply into a folder `data`. 

# Software 

We are using [Scalismo](https://scalismo.org)

---
[^1] Gerig, Thomas, et al. "Morphable face models-an open framework." 2018 13th IEEE International Conference on Automatic Face & Gesture Recognition (FG 2018). IEEE, 2018. [pdf](https://ieeexplore.ieee.org/iel7/8372403/8373793/08373814.pdf?casa_token=lFJl7ATgfXIAAAAA:JPZSy39JdYPVN86QoyiGOLl1hzts9DNT4RoCB_VWWHCWbqfP5eEvlOOblWe3GTZEJdinq09_LQ)
-->