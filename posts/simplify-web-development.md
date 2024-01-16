---
title: Simplify web development, please
description: Short history lesson and development advice, all in one short post.
date: "2019-05-07"
layout: layouts/post.njk
---
When I started building websites back in the ’00, there weren’t any of the fancy tools like transpilers, compilers, bundlers, package and dependency managers we have today. We had pure and simple HTML, CSS and JavaScript on the frontend and PHP and something called ColdFusion on the backend.  Oh, and you had FTP for putting websites online. 

Even though we created layouts using `<table>`s — yes, we weren’t even using CSS right — times were simple. I’m not saying they were good, just simple. You would design something in Photoshop (yeah, we weren’t using that right as well), mark it up with HTML, add some styles to those tables with CSS, add some DHTML — that’s what we called JavaScript back then; We were idiots, I know — and put it online over the FTP, it was that simple.

Then years went by, stuff happened and now we have all these tools that allow us to build things with such speed it’s incredible! We even have version control, who would’ve guessed. Now you can have half of your website or application done even before you’ve done with planning the whole thing. All you need to do is install Node… Then npm and Webpack or Gulp. After that you just pull in your dependencies like Express, Lodash, Underscore, Coffee-script, Post-css, Bootstrap, Materials or jQuery — if you’ve been living under a rock for the past 10 years — and you’re ready… to begin writing some actual HTML and CSS. 

Only it’s not HTML… Or CSS. You write some kind of JavaScript that generates markup and styles for you, then use one of the googol npm packages to transpile, compile and bundle all of that to HTML, CSS and JavaScript that browser understands and can render on screen. After that, you just run all of that in Vagrant. Or Docker. And deploy it to server using Jenkins. Or Shippable. Or AWS.

If you haven’t left to swear me off, I’m not saying all of these tools are necessarily bad. Hell, I’m working with most of them on a daily basis, c’est la vie. Well, some of them are bad — :cough: Bootstrap :cough:

What I want to say is that we begun using all these tools even when we don’t need them. We’re using them just because they’re cool, new, shiny or whatever and that’s bad. We cram everything without mercy to node_modules, no wonder it’s the heaviest thing in the known universe.

When you start your next project from scratch, actually start it from scratch, zero, nada. Think about requirements for a second. Do you really need that fancy package, or you can make it with vanilla JS? Then add dependencies when and if you need them for the first time and not right away. 

Now, I’m not saying dump everything and go vanilla. I understand the value some of those libraries, frameworks and plugins bring. I also know we’ve got a lot of legacy code, tech debt and other reasons for using those packages. I just ask you to think twice before jumping and adding something new to package.json. 

Think about progressive enhancement. Can you build the core functionality with basic tools, then enhance it with everything else? Do you really need whole Bootstrap when you’re building simple magazine website that has two different views and you can build it just by using flexbox or css-grid? At the end, think about what you’re building. The easiest or fastest solution isn’t always the best one.