---
published: true
layout: posts
author: Prince Emineys
abstract: "As a web developer, we have always been searching for a tool to increase our workflow in coding, from 1 line of code to 20+ line of code here."
---
As a web developer, we have always been searching for a tool and editors to increase our workflow and productivity in coding and programing. if your the one, here is a solution to improve your coding.

Some of my friend asking me how I get a project with a thousand line of codes? (Said Muhama & Nopex) among them. but today I come with this simple method to archieve the super fast coding with [Emmet](http://emmet.io/)  follow me here...

Emmet is the extending development of [ZenCoding](http://en.wikipedia.org/wiki/Zen_Coding), which is written purely with JavaScript. While in this demonstration I’m going to use Sublime Text, Emmet is also available for many code editors including TextMate, Coda, Eclipse, Notepad++, and Adobe DreamWeaver.

## **Installing Emmet**

Head over to this page to find and [download Emmet](http://emmet.io/download/) for your code editor. If you are using Sublime Text, like I am, Emmet can be installed easily through Package Control. Once installed, you may need to restart your text editor.

## **Writing HTML with Emmet**

Most current editors probably have a similar built-in functionality. For example, in Sublime Text we simply write ``` <ul> ``` and hit the Tab key, it will automatically expand into a complete unordered list with the ``` <li> ``` element.

To test your Emmet tool if its working correctly just let us test these HTML tags.

Open the new document and save it as ```.html``` 
type ```html:5``` and hit ```Tab``` and it will give you all 5 basic html tag 
 
 We can also write the following ```div.class``` to assign ```HTML``` class in the element.

Emmet, in this case, extends this functionality further, allowing us to write complex HTML structures in a more simplified way with abbreviations or aliases, similar to the one in CSS. So, if you are familiar with CSS syntax already, you should get used to it quickly.

In addition, [Emmet documentation](http://docs.emmet.io/) provides a massive list of abbreviations and aliases and the uses, which could be very intimidating for the first-timer. But, here are some of the basic things that I think you should know – at least.

## **Child Element**

As we mentioned, Emmet uses syntax similar to CSS. In CSS we have a direct child selector which is represented with the ```>``` sign. In Emmet, we use this operator to add child elements as well. For example: ```header>nav>ul>li``` and hit ```Tab``` and it will format all three elements.

## **Sibling Element**

Sibling refers to the element in the same nesting level. In CSS, we can select sibling element with the plus ```+``` sign. Similarly we can use it to add sibling elements with Emmet. ```header+article+footer``` and it will format all three elements siblings.

## **Assigning ID or Class**

We can select an element with its id attribute using the ```#``` sign in CSS. With Emmet, we use # to assign ID attribute to element, and as we have shown you before we can also assign an HTML class in the element, the same way we select the element class by ```.``` For example: ```#thisID``` and ```.thisClass``` and it will format all tags of the Id and Class tags with their names.

Specifically for the HTML class, we can assign multiple classes in one element in this way. ```div.classNama1.className2.className3``` it will formart all three classes specified with their names. 

## **Multiplication**

Emmet also allows us to add HTML element in specific numbers using the asterisk (*) sign, which can be a time saver. In this example, we add an ```<h3>``` and four ```<h4>``` under a ```<section>``` element. ```section>h3+h2*3``` *3 will generate three ```h2``` elements inside the section. 

## **Lorem Ipsum**

Lastly, this is one of my favorites in Emmet. Sublime Text and other editors comes with a shortcut to generate the lorem ipsum dummy text. We simply write lorem and hit Tab, and it will expand to around 5 to 7 lines of lorem ipsum.
Emmet, in this case, works slightly different. With Emmet, we can specify how many words to generate. Say, we want only 30 words, we can write ```lorem30``` it will generate 30 dummy lorem text. 

## **Using Emmet in CSS**

We can also write CSS with Emmet. Similar to HTML, it extends the aliases into a complete CSS property as well as its value. Let me show you one example: say we want to add a padding with the value of ```10px```, we simply write ```p:10``` and hit the ```Tab key```, and it will automatically expand it ```topadding: 10px```. Try these other CSS tags ```.className{ p:10 }``` Or if we want to hide elements, we can do either with ```visibility``` or ```display``` property. With Emmet, we can write these CSS properties this way ```.className{ d:n }``` and it will generate ```display:none``` properties.

You can try more tags as you can, and sure this will speed up your coding speed, if facing any problem just leave a comment or just halla me on twitter [@emineysprince](https://twitter.com/emineysprince)
