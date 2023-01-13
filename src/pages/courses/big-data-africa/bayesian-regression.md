---
id: bayesian-regression
title: Bayesian regression
---

# Bayesian linear regression


In the previous video we have already seen the basic principle of Bayesian inference.
We have factored the joint distribution $$p(l,s)$$ as
$$
p(l, s) = p(s|l)p(l)
$$

and specified a distribution for each factor. By specifying these distributions we have encoded
our assumptions and beliefs about the modelled variables.
Once a measurement of the span became available, it was a simple matter of using Bayes rule to
compute the posterior distribution $$p(l | s)$$, and thus to formally update our beliefs in light of
this new data.

A crucial step in our modelling was the likelihood function. We just assumed that
$$p(l | s) = N(l, 9)$$, i.e. that the value we observe for the length is also the
mean for the span. However, we usually don't know the exact relationship and would rather like
to use data to estimate how the measurements are related. This is what Bayesian linear regression allows us to do.

In this article we start by exploring the Bayesian linear regression model on the simple example of modelling the length and the span of the hand. In a second step we show how this model can be used to
in the context of 3D shape model fitting using Gaussian Process Morphable Models.


### Bayesian regression of 2D hands

A widely used model for learning a relationship between two or more variables is the linear regression model.
In this model, the (mean-free) span $$s$$ is assumed to be a linear function of the  length $$l$$, perturbed by Gaussian noise $$\epsilon \sim N(0, \sigma^2)$$:
$$
s = a \cdot (l - \overline{l}) + b + \epsilon.
$$
Here the slope $$a$$, intercept $$b$$ and noise variance $$\sigma^2$$ are parameters of our model. $$\overline{l}$$ denotes the mean length. Subtracting the mean makes it easier to interpret the intercept parameter, as we know that the intercept corresponds exactly to the span for the mean hand.

These modelling assumptions lead to the following likelihood function:
$$
p( s | a, b, \sigma^2, l) = N(a \cdot (l - \overline{l}) + b, \sigma^2).
$$
Note that the difference compared to the previous version is, that we have introduced the parameters $$a$$, $$b$$ and $$\sigma^2$$. For fixed values of these parameters, we would be back at the model that we discussed in the video. But our goal here is to estimate the distribution of the parameters $$a, b$$ and $$\sigma^2$$, which
characterize the dependency between the span and length are. Thus we need a model of the joint distribution
$$p(a, b, \sigma^2, l, s)$$, which we factorize as follows:<sup>[1](#regression-footnote)</sup>

$$
p(a,b, \sigma^2, l, s) = p(a)p(b)p(\sigma^2)p(s| a, b, \sigma^2, l)
$$

To complete our model, we need to specify our prior beliefs about the parameters, by specifying $$p(a)$$, $$p(b)$$ and $$p(\sigma^2)$$.I believe, for example, that the span is approximately the same as the length irrespective of the length of the hand. I also assume that the noise parameter $$\sigma^2$$ is positive and rather small. These beliefs can be encoded using the following prior distributions:
$$
\begin{array}{l}
a \sim N(1, 1) \\
b \sim N(0, 2) \\
\sigma^2 \sim logNormal(0, 0.25)
\end{array}
$$
Note that these are just my prior beliefs. Somebody else could assign different distributions.


In the following  notebook, we will implement this model and assess the implications of different prior assumptions. 


#### Footnotes
<a name="regression-footnote">1</a>: Note that in this model we do not explicitly model uncertainty on l. This is the common assumption in Bayesian linear regression. For a justification and discussion, see e.g. 
[Bayesian Data Analysis](http://www.stat.columbia.edu/~gelman/book/), by Gelman et al, Page 354ff.