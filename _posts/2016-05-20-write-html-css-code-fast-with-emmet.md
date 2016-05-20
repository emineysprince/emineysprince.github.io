---
published: true
layout: posts
author: Prince Emineys
abstract: Find the format to get this post nature
---
As a web developer, we have always been searching for a tool and editors to increase our workflow and productivity in coding and programing. if your the one, here is a solution to improve your coding.

Some of my friend asking me how I get a project with a thousand line of codes? (Said Muhama & Nopex) among them. but today I come with this simple method to archieve the super fast coding with [Emmet](http://emmet.io/)  follow me here...

Emmet is the extending development of [ZenCoding](http://en.wikipedia.org/wiki/Zen_Coding), which is written purely with JavaScript. While in this demonstration I’m going to use Sublime Text, Emmet is also available for many code editors including TextMate, Coda, Eclipse, Notepad++, and Adobe DreamWeaver.

## **Installing Emmet**

Head over to this page to find and [download Emmet](http://emmet.io/download/) for your code editor. If you are using Sublime Text, like I am, Emmet can be installed easily through Package Control. Once installed, you may need to restart your text editor.

## **Writing HTML with Emmet**

Most current editors probably have a similar built-in functionality. For example, in Sublime Text we simply write <ul> and hit the Tab key, it will automatically expand into a complete unordered list with the <li> element.

<div class="code-block">
  {% highlight html  linenos%}
<div class="contact_form">
    <h2>How can we help?</h2>
    <div id="show-message"></div>
    {exp:email:contact_form user_recipients="no" recipients="youremail@website.com" charset="utf-8" form_class="custom"}
    <div class="row">
        <label for="email_address">Email Address</label>
        <input type="email" id="email_address" name="from" required="required" />
    </div>
    <div class="row">
        <label for="full_name">Full Name</label>
        <input type="text" id="full_name" name="name" required="required">
    </div>
    <div class="row">
        <label for="message">Your Message</label>
        <textarea class="message" id="message" name="message" required="required"></textarea>
    </div>

    <div class="row">
        <div class="right">
            <input name="submit" type='submit' value='Contact Us' class="button small" />
        </div>
    </div>
    {/exp:email:contact_form}
</div>
  {% endhighlight %}
</div>
