---
layout: page
title: "An Introduction to Machine Learning for Physicists"
description: A five-lecture short course taught at the 6th Dr. Riaz ud Din Memorial School on Physics, University of Agriculture Faisalabad, August 2026
img: assets/img/project_rmsop_2026_ml/rmsop_titlepage_cover.png
importance: 1
category: work
related_publications: false
---

---

## About the Course

I taught **An Introduction to Machine Learning for Physicists** as a five-lecture short course at the 6th Dr. [Riazuddin](/blog/2019/riazuddin/) Memorial School on Physics, held August 3–7, 2026 at the Department of Physics, University of Agriculture Faisalabad, in hybrid mode.

The course builds machine learning from first principles for an audience of physicists — no prior background assumed. Rather than surveying methods, it follows a single running dataset (a cricket match) from a line fitted by hand through to neural networks, then turns to real physics data: planetary orbits, where symbolic regression rediscovers Kepler's third law, and the Iris dataset for classification. The final lecture covers generative models and language models, along with an honest account of what these methods cannot do.

Each lecture has worked examples, hands-on activities, and an accompanying Jupyter notebook. The complete notes include five appendices with supplementary derivations and a glossary organised by lecture.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0 text-center">
    {% include figure.liquid
       path="assets/img/project_rmsop_2026_ml/rmsop_schedule.jpeg"
       title="Schedule of the 6th Dr. Riaz ud Din Memorial School on Physics, August 3–7, 2026."
       alt="Poster showing the schedule of the 6th Dr. Riaz ud Din Memorial School on Physics at the University of Agriculture Faisalabad"
       class="img-fluid rounded z-depth-1" %}
    <div class="caption">
      Schedule of the 6th Dr. Riaz ud Din Memorial School on Physics, Department of Physics, University of Agriculture Faisalabad.
    </div>
  </div>
</div>

---

## Lectures

<div class="table-responsive" markdown="1">

| #   | Lecture                               | Topic                                                                          | Materials                                                                                                                                                                                                                          |
| :-- | :------------------------------------ | :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **What Is Machine Learning, Really?** | Fitting a line by hand; naming model, loss, and training                       | [Slides](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_lecture1.pdf) · [Notebook](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/lecture1_what_is_ml/L1_notebook.ipynb)          |
| 2   | **How Machines Learn**                | Gradient descent, overfitting, and regularization                              | [Slides](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_lecture2.pdf) · [Notebook](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/lecture2_how_machines_learn/L2_notebook.ipynb)  |
| 3   | **Neural Networks**                   | The artificial neuron, layers, and backpropagation                             | [Slides](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_lecture3.pdf) · [Notebook](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/lecture3_neural_networks/L3_notebook.ipynb)     |
| 4   | **AI That Discovers Physics**         | Symbolic regression (rediscovering Kepler's third law) and classification      | [Slides](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_lecture4.pdf) · [Notebook](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/lecture4_discovering_physics/L4_notebook.ipynb) |
| 5   | **The Bigger Picture**                | Generative models, language models, honest limitations, and a capstone project | [Slides](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_lecture5.pdf) · [Notebook](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/lecture5_bigger_picture/L5_notebook.ipynb)      |

</div>

---

## Materials

**[Complete lecture notes (PDF)](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/main.pdf)** — all five lectures in a single document, with appendices on least-squares derivation, convergence, polynomial fitting, and network training, plus a glossary and a list of data sources and further reading.

**[Opening slides (PDF)](https://github.com/mbilalazam/rmsop-2026-lecture-notes/blob/main/build/slides_intro.pdf)** — course introduction and overview.

**[rmsop-2026-lecture-notes](https://github.com/mbilalazam/rmsop-2026-lecture-notes)** — full LaTeX source, notebooks, figure-generation scripts, and data. Figures are pre-generated and committed; each lecture folder has a `make_figures.py` to regenerate them.
