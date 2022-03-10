---
title: Image Optimization - Lazy Loading for Angular using lazysizes
published: true
description: 
tags: Angular, lazyloading, directive
//cover_image: https://direct_url_to_image.jpg
---

*This story was originally published on my Medium page on Aug 22, 2018 and had 8.1K views before I moved my posts to dev.to page.*

Images optimization is very important. They often have very large file sizes and they take a big amount of internet bandwidth. It can slow down your webpage loading time and makes your user close your webpage before they even see the content. Images that are off-screen and could be lazy-loaded. They will be loaded when the user scrolls your webpage which will save you initial loading time. This post will show you how to do it easily with lazysizes library.

### What is lazy loading?

Lazy loading is a web performance pattern that delays the loading of images. Instead of loading whole webpage content, non-critical images are loaded asynchronously on demand when the user needs to see them. Important images that are placed in visible areas for the user are loaded straight away, however, images below, which are not yet visible can be loaded later - only when users scroll down the page and it is necessary to show them. This is used by many notable sites, for example, Medium.

It is easy to verify what images should be changed. You can perform a site audit that will highlight opportunities to better optimize your images. You can use for example Lighthouse in Chrome DevTools to get suggestions on how to change your webpage.

Lazy loading has many benefits. It reduces data consumption. You can load only a minimal number of images, and load more if required. This also means less workload for the browser which can save battery life on mobile. Lazy loading will also improve webpage loading time which may have an impact on webpage users staying around. This is also a better user experience when users can see content almost immediately.

### Angular directive for lazy loading with lazysizes

You can find many techniques and plugins available for lazy loading. I was using lazysizes. It is a javascript library that requires no configuration. It has a very good performance and allows for optional integration with Intersection Observer. It also supports plugins. It can be used with hundreds of images on CSS and JS-heavy pages and web apps. It is also improved for SEO, it does not hide assets from crawlers and robots.

You can add lazysizes to your project very easily, github page is very straightforward and there is no need to write a blog post about plugin installation. I can show you however how to use it better with few improvements. I created a simple directive which makes using lazysizes very easy, either with `img` tag or as a `background-image` property. The code with explanation is below:

```
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import { lazySizes } from 'lazysizes';
@Directive({
  selector: '[lazyload]',
  exportAs: 'lazyload'
})
```
Let's import lazysizes with additional plugin added to library and create a directive.

```
public tempImage: string = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  @Input('lazyload') imgSrc: string;
  public img;
```
In your directive create a temporary image that will be shown before loading the original file. In my example, I used a base64 string with a white image, but you can use a different one. This is used to fill up space for the image when it is loaded a bit slower so the user will not notice page content 'jumping' while the image is loaded. It is good to use just a simple picture with the color of your webpage background. You need also a directive input for the image source and variable for an image.

```
constructor(private el: ElementRef, private renderer: Renderer2) {          }
  
  ngOnInit() {
    this.img = require(`../../assets/img/${this.imgSrc}`);
    this.initLazyLoading();
    this.setAttributes();
  }
initLazyLoading() {
    if (lazySizes) {
      lazySizes.init();
    }
  }
```

When the directive is initialized it will build up an image path using the assets directory and the library will be loaded. If the statement will help to hide error that may appear. Next, it will run the function `setAttributes` presented below.

```
setAttributes() {
    this.renderer.addClass(this.el.nativeElement, 'lazyload');
    if (this.el.nativeElement.localName === 'img') {
      this.setImgSrc();
    } else {
      this.setElementBackgroundImage();
    }
  }
```
This function will add a CSS class `lazyload` to the given element. It is used by the library to recognize which element needs to be lazy-loaded. Then element `localName` is checked to verify what type of DOM element is used. The `img` elements will be processed differently than the others.

```
setImgSrc() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.img);
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.tempImage);
  }
```
The `img` element is edited based on requirements from library documentation. Two attributes are added. Temporary image is added as `src` and original image path is added as `data-src`.

```
setElementBackgroundImage() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-bg', this.img);
    this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.tempImage})`);
  }
```

For other elements, we assume that the image loaded will be used as a background image. We add a `background-image` property with a temporary image as value and `data-bg` attribute with the original image path.
Full directive code is presented below:

```
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import { lazySizes } from 'lazysizes';
@Directive({
  selector: '[lazyload]',
  exportAs: 'lazyload'
})
export class LazyloadDir {
  public tempImage: string = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  @Input('lazyload') imgSrc: string;
  public img;
  constructor(private el: ElementRef, private renderer: Renderer2) {          }
  
  ngOnInit() {
    this.img = require(`../../assets/img/${this.imgSrc}`);
    this.initLazyLoading();
    this.setAttributes();
  }
  initLazyLoading() {
    if (lazySizes) {
      lazySizes.init();
    }
  }
  setAttributes() {
    this.renderer.addClass(this.el.nativeElement, 'lazyload');
    if (this.el.nativeElement.localName === 'img') {
      this.setImgSrc();
    } else {
      this.setElementBackgroundImage();
    }
  }
  setImgSrc() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.img);
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.tempImage);
  }
  setElementBackgroundImage() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-bg', this.img);
    this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.tempImage})`);
  }
}
```

The directive can be used in a very easy way not depending on the element's type. We just need to set a `lazyload` attribute with image name or image location and everything else will be processed properly. See examples below:

```
<div lazyload={{images.section_backgroud}} class="section">
  <p>This is section</p>
</div>
<img lazyload="footer/linkedin.svg" alt="Linkedin Logo">
```

I hope this quick blog post will help you with your webpage implementation and optimization. If you have any questions please leave a comment.