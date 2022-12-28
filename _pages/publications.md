---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
---

{% for y in page.years %}
      <h3 class="bibliography-year">{{y}}</h3>
      {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
