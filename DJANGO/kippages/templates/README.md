README.md about templates
this is a directory about templates used in this project
if you have used the web before, you tend to notice redudancy or repetitive nature of the header, footer or some parts(content) for that matter 
it is good practice to have one template that would help us maintain that repetitiveness.
that's where [base page](./base.html) comes in.

in base .html link the urls of both home and base content using {% url 'names of the individual pages' %} as a link passed into the <a href=""></a> tag.
then you extend the [base page](./base.html) in [about page](./about.html) and [home page](./home.html), check the individual files for how to extend the base page