---
layout: post
title: "I'm online, therefore I exist"
date: 2021-06-20
version: 0.1
abstract: "In which I outline what I want this website to be and have a place to both spitball ideas and have a sandbox to style them."
use_math: true
---

# I'm online, therefore I exist

The adage is a bit tongue-in-cheek but I think the sentiment is genuine. Much of the interesting work that I want to do involves some computational or digital component, and so the best way to hone my skills is to create a platform to share my work. This website is exactly that, but I don't want it to serve the sole purpose of showcasing my work. I want it to reflect some of my thinking about the world and represent some part of me as a human being. 

I read somewhere that making a personal website is much more effective if it's made with a well-defined purpose. I figure that it would be interesting for my first bonafide post on my, as of yet unfinished website, to outline what I want this website to be. In addition, this post is going to help me style the website in a nice way; my design skills leave much to be desired, and so having a reference will make a world of difference.

## What will my website include?

I haven't written down what I want my website to include. A brief spitball of possible elements are as follows:

1. A **landing page** that has my face, a quick summary of who I am and what I enjoy.
2. A **blog** that will include some projects that I find interesting, to give me a place to practice communicating these projects to other people and incentivise fleshing them out and following through.
3. A collection of **my writing**, should I decide that any of my writing is of sufficient quality to be shared.
4. A **portfolio** of the projects that demonstrate my competence. Skills I want to demonstrate competence in include research ability, academic writing, bioinformatics, programming, machine learning etc.
5. An **About** me section/CV - the section that I am most hesitant to write.

So, let's break it down even further, because I certainly want to have each of these elements on my website but simply writing this down does not a good website make. 

### The Landing Page 
{:.landing}

**The Intention:** a sleek introduction to my website, and to me.

The simplest possible thing to do here is to have my name, a picture of myself (is that even necessary or is it purely self-indulgent?), some quippy non-commital details about myself and maybe some extra flair. This is what people will see first when (if) they come to my website, so it will need to make a statement. 

The landing page should outline my interests. Most of these are obvious for someone making a website and choosing not to use the myriad website building tools that are available, easy to use and allow a novice like me to build a sleek and functional webstie in minutes rather than days. Some interest are not so obvious. At heart I am a biologist and a mathematician, I write code and I love to skateboard; I want people to see these things as I see them, disparate at first but fundamentally related (even the skateboarding) at some level.

In my head, I see having a few icons, that summarise these key interests. Mathematics, Biology, Programming, Machine Learning, Education, Skateboarding. Finally, a footer that has some links to social media sites, maybe LinkedIn, Instagram? I really don't want to make a LinkedIn but I've been told that I would be foolish not to - while I don't mind being foolish, I don't like not doing things. Here's a rough sketch of what this might look like in the future.

<img src="{{ site.posts.directory }}\assets\images\Landing_outline.png" class="img-fluid" alt="...">

If you're reading this, you can go back home and see how close I came to this feverish sketch!

### The Blog

**The Intention:** documenting my journey of writing code, buiding things, failing often and sometimes succeeding.

Having a blog seems self-explanatory, but I think this intention is the most important one to set clearly for the purposes of **this** post. That's because I haven't actually spent any time working on the design of the catalogue *or* the posts themselves, so this blog post will need to contain the elements that are likely to pop up in the future posts that I make. Right now, the catalogue of posts looks like this:

<img src="{{ site.posts.directory }}\assets\images\catalogue.png" class="img-fluid" alt="...">

The posts themselves currently look something like this:

<img src="{{ site.posts.directory }}\assets\images\post_layout.png" class="img-fluid" alt="...">

Immediately, the fact that there is a scrollbar horizontally should jump out at you, this is because I have simply added screenshots, which are large, and there is no image formatting. That's the kind of problem that I am trying to address. So, I need to work on both the catalogue and the posts themselves, let's start simple and work our way to the big one.




#### Lists of Posts

There is a little bit of nice functionality which is hidden beneath the horrendous styling shown above, but I would like to expand. Jekyll has native support for posts, which by using some [liquid](https://jekyllrb.com/docs/liquid/){: target="_blank"} can easily generate a list of posts in chronological order. It's as simple as adding a for loop over each post.

~~~
% for post in site.posts %
  <div class="row py-2 px-3">
    <div class="col-sm-2"></div>
    <div class="col-sm-8 border bg-light rounded">
      <div class="datetime align-top">{{ post.date | date_to_string }}</div>
      <div class="post"><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></div>
      <details>
        <summary>Read More</summary>
        {{ post.abstract }}
      </details>
      </div>
    <div class="col-sm-2"></div>
  </div>
% endfor %
~~~
{: .language-html}

The features that I want to add to the list of posts are:

1. <del>An estimated time to read, which should be quite easy to write a small plugin for.</del>
2. Tags
3. Maybe an optional picture for extra flair
4. Expandable abstract/short summary - already implemented but it needs to look nicer.
5. A search feature

Here's a handy table outlining what the post list will be composed of

| Post List |       |         |        |
|:----------|:------|:--------|:-------|
|           |**Element**| **Purpose** | **Status** |
|           |Date   | Pretty self explanatory I think.        | Already added although the formatting might be subject to change.       |
|           |Time to Read|  I personally love this feature in blog posts, unless something really interests me I don't want to spend 30mins reading it.  | Added, although I am currently using 180wpm and haven't looked into what the average reading time actually is.       |
|           |Summary   |   A brief snippet or outline of the post, to see if the content interest the reader.   |    Implemented but I don't really like the formatting.    |
|           |Tags           | This is for a search feature later down the line, so that users can quickly find specific topics. | Not currently implemented. |
{: .table}

It was quite easy as it turns out to write a small plugin to do read time. I didn't write the script but there was a custom Ruby gem that did it quite nicely. I found out quickly that github pages, which I use to host this site doesn't support [custom plugins](https://stackoverflow.com/questions/53215356/jekyll-how-to-use-custom-plugins-with-github-pages){: target="_blank"}, although there appears to be a [work-around](https://learn.cloudcannon.com/jekyll/using-jekyll-plugins/){: target="_blank"} but I would prefer not to take a tangent.

The solution I ended up using was a slight variation on what I found [here](https://int3ractive.com/blog/2018/jekyll-read-time-without-plugins/){: target="_blank"} from Trần Trọng Thanh. An elegant solution indeed.

#### Post Layout

The first issue that was addressed, was the fact that there was no formatting of images. This turned out to be an easy fix, although I imagine a more elegant one exists. I simply added HTML tags into the markdown document with the `img-fluid` class. Bootstrap handled the rest.

I've also discovered that I can add bootstrap classes quite easily because of kramdown, which is the native jekyll markdown <del>interpreter (compiler?)</del> renderer. I'm not sure how I will use this feature right now, but it seems like it will be really helpful to align stuff nicely should the need arise.

Some of the features I want to add are:

- A table of contents that is sticky to the left hand side of the screen for web-browsers and at the top of the page on mobile?
- An accordion to hide and show code, more technical posts should have code expanded enabled by default whereas less technical posts should have it disabled by default.
- A progress bar, that fills up slowly as the page is read through.
- A version control system, which Jekyll will be able to recognise. If this works you are currently reading version {{ page.version }}

The blog posts will include a number of elements that I will need to make sure are well formatted. Thinking about this more carefully I will create another blog post that will simply contain all of these different elements so that I can format them correctly. When this is done, you can go **here** to take a look.

In the above screenshot I had included a light-grey border around the element, I have since removed this, as I think that it looks cleaner that way.


### My Writing

**The Intention:** to have a place to put my writing, bad, good, and everything in between.

Writing is something that I love to do. A lot of the writing that I do doesn't fit well with my work, and so it would make sense to have a seperate place to put my writing. This section will be very simple, have a list of my writing, without dates or any other flairs.

The material will probably be aligned very simply, no outlines or any extra styling. Just the writing.

### My Portfolio

**The Intention:** a collection of my technical skills.

A collection of my most interesting projects, I really want to put a cool fusion of biotechnology, machine learning, bioinformatics and mathematics here. This will be a showcase of my technical skill.

### About Me 

**The Intention:** a voyeuristic insight into the things I care about.

