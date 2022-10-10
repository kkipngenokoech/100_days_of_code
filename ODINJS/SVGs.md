
## SVG - SCALABLE VECTOR GRAPHIC.
vector graphics are simple images defined by math, as opposed to 'raster graphics'.
with raster graphics, If you want to increase the size of the image (scale it), you have to increase the size of that grid.
How do you decide what all those new pixels should look like? There’s no simple solution. Additionally, the larger the grid, the bigger your filesize grows.

With vector graphics on the other hand, there’s no grid. Instead, you have formulas for different shapes and lines. Since these are just formulas, it doesn’t matter how large or small you want them to appear–they can scale to any size you want, and it will have no effect on the quality or the size of the file.
it's syntax:
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=50 />
    <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```
this code can be embedded directly in an html format file.

SVGs are a scalable image format, which means they will easily scale to any size and retain their quality without increasing their filesize. They’re also very useful if you need to create or modify your images programmatically, because you can change their properties through CSS and JavaScript.

svgs are used for:
    icons
    Graphs and charts
    large, simple images
    patterned backgrounds
    Applying effects to other elements via SVG filters

## ANATOMY OF SVGs
Typically, you will not want to create SVGs from scratch in your code. Most often, you will download the file or copy the code either from a website or from an image editor that can create them (Adobe Illustrator and Figma are two popular apps that can create SVGs). However, it’s pretty common to download an SVG and want to tweak or adjust it just a little bit, so knowing what all the bits and pieces are, and how they work is very useful.

1. xmlns - stands for “XML NameSpace”.
    - This specifies what dialect of XML you’re using–in our case, that dialect is the SVG language spec. 
    - Without it, some browsers will not render your image or will render it incorrectly. 
2. viewBox - defines the bounds of your SVG. 
    - When you have to define the positions of different points of the elements in your SVG, this is what that’s referencing. 
    - It also defines the aspect ratio and the origin of your SVG. So it’s doing quite a lot! Be sure to play around with different values in the example above to get a feel for how it affects the shapes.
3. class, id - these attributes function just like they do in HTML. 
    - Using these in SVGs allows you to easily target an element via CSS or JavaScript, or to reuse an element via the use element.
4. Elements such as <circle>, <rect>, <path>, and <text> are defined by  the SVG namespace. 
    - These are our basic building-blocks.
5. Many SVG attributes, such as fill and stroke, can be changed in your CSS.


## EMBEDDING SVGs
There are two main approaches when deciding how to actually place the SVG in your document: linked, and inline.

Linking SVGs works basically the same way as linking any other image. You can use an HTML image element such as <img>, or link it in your CSS using background-image: url(./my-image.svg). They will still scale properly, but the contents of the SVG will not be accessible from the webpage.

The alternative is to inline your SVGs by pasting their contents directly into your webpage’s code, rather than linking to it as an image. It will still render correctly, but the SVG’s properties will be visible to your code, which will allow you to alter the image dynamically via CSS or JavaScript.

Inlining SVGs allows you to unlock their full potential, but it also comes with some serious drawbacks: it makes your code harder to read, makes your page less cacheable, and if it’s a large SVG it might delay the rest of your HTML from loading.