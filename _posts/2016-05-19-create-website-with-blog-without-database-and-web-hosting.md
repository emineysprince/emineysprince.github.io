---
layout: posts
title: Create a free website with blog without database
author: Prince Emineys
abstract: You can have a fee website hosted and blog like an hacker
published: true
---
WordPress, which humbly started as a blogging platform, has now transformed into a full-fledged and a very popular CMS. With WordPress, you can build (almost) any kind of website, from a portfolio to an e-Commerce website.

But what if you only concern about blogging, and you do not need jam-packed features in WordPress like custom taxonomy, user management, comment moderation, and a nice media uploader?

In short, you just want to be focusing on writing and publishing your content. If that is something you have in mind, let’s meet [Jekyll](http://jekyllrb.com/), a static blogging engine.

**About Jekyll**
Jekyll comes with the idea of creating a static (same old HTML) blog, one which is easily maintainable. In comparison to a dynamic blogging tool, like WordPress that is built with a server-side language like PHP, a static website has 2 key advantages.

First, it serves and perform faster. Second, it consumes less web resources namely memory and database I/O. Additionally, if you use Jekyll, you can host your blog in [Github Pages](http://pages.github.com/) for free.

** Install Jekyll**
First, let’s install Jekyll in our system. Launch Terminal and type the following command line:
> sudo gem install jekyll

Once installed, run this command to ensure that jekyll command is functioning.
> jekyll -v

**Create a Jekyll Site**
To create a new blog with Jekyll, type jekyll followed by new and the name of the site in Terminal. For example:
> jekyll new jekyll-blog

Type this command below to activate Jekyll server
> jekyll serve

You can also run the the server using the _--watch flag;_ that way it will automatically update the blog everytime we made a change.

Go to the browser and type _http://localhost:4000_, or as shown in the Terminal screen to open the blog.
![jekyll-server.jpg]({{site.baseurl}}/_posts/jekyll-server.jpg)

**The Document Structure**
Jekyll applies a specific document structure that we have to follow, so the blog could function properly. Let’s take a look at what we have in our blog directory below:

 _config.yml
 _layouts
 _posts
 _site
  css
  index.html

First, we have _config.yml; it is the the blog’s configuration file written in Yaml. In this file we can specify the blog name, the permalink format, host, Port number, and etc.

_layouts is where we put customized layout for page or post.

_posts is the directory where we save all our posts. All the posts should be written either with Markdown or Textile. They will be compiled and save the output in _site directory; this is the directory where Jekyll will serve the posts in the Browser.

Lastly, we have css and index.html.

For now, we will leave them as they are, with no custom configuration. Let’s start writing our first post.

**Writing a New Post**
As mentioned above, in Jekyll, we either write the post in Markdown or Textile. We have covered in the previous on how to write with Markdown; you may want to check that link first before going any further.

**Naming Convention**
To create a post, we also create a new file that must follow this naming convention year-month-date-{post-slug}.{file-extension}, for example: 2014-03-11-hello-world.md. Save the file in _posts directory.
![new-jekyll.jpg]({{site.baseurl}}/_posts/new-jekyll.jpg)

**Post Front-matter**
Before we begin writing the body content of our post, we must first define the post front-matter namely the title and the post layout. We can also define the post categories and the tags, but these are optional. The most important thing is that the front-matter must be set within triple-dashed line. Here is an example:
![new-post.jpg]({{site.baseurl}}/_posts/new-post.jpg)

1. -
2. layout: post
3. title: Hello World!
4. -

**Then we can write the content**
Hello world! Welcome to Jekyll. This is your first post.
Save the file. We will see the psot generated, and appear on our blog. Nice!

We are done, credit to [HongKiat](http://www.hongkiat.com/) follow me on twitter [@emineysprince](http://www.twitter.com/emineysprince)
