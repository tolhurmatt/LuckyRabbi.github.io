---
layout: post
title: "The Subject of Style(ing)"
date: 2021-06-19
version: 0.1
abstract: "In which I fill the page with as many of the elements that I will need to style to make all of my blog posts look good."
use_math: true
---

# Elements that I will need to style

- Lists
- Images
- Tables
- Code blocks
- Horizonal Lines
- Definition Lists
- Math

There's probably more that I will eventually realise I need, in which case I will just update this document and have a go at styling them. The first element, a list, is already above.

The point of reference for the elements that I will be using is [kramdown]("https://kramdown.gettalong.org/index.html"), a Ruby library for parsing and converting a superset of Markdown. There is quite a bit of detail to it and I'm still learning, such is the process.

Images are also already taken care of, I just need to put them in HTML code instead of

## Code Blocks

Instead of trying to figure out a solution on my own I am using [highlight.js]("https://highlightjs.org/"), which seems to be very convenient and just works right out of the box. 

**Put a before and after here**

## Tables

A table would be a useful thing to include, the way to include them in markdown, or more specifically kramdown, is quite easy.

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell 1   | cell 2   | cell 3   |
| cell 4   | cell 5   | cell 6   |
|----
| cell 1   | cell 2   | cell 3   |
| cell 4   | cell 5   | cell 6   |
|=====
| Footer 1   | Footer 2   | Footer 3
{: .table}

Without formatting, the table does not look good at all - although it is a convenient way to include a table in a markdown document. This can be fixed very easily thanks to bootstrap by adding the `{: .table}` attribute list definiton to opt-in to bootstraps table styling. I will have a look at how I want these to be formatted at a later date but for now it ticks all of the boxes.

## Horizontal Lines


## Definition Lists


## Math

Okay this one is actually quite important, from what I can tell kramdown doesn't by default have a maths display engine. That is very bad! Let's test this out.

This should be an inline maths formula:  $$ x = \frac{3t^{2}+4t}{3y^{4} - 15y^{2}} $$