## FORMS
```
<form action = "" method = "">
</form>
```

`action` = this is where our form will send data to  - the backend
`method ` = it includes, get and post: We use GET when we want to retrieve something from a server, POST is used when we want to change something on the server.

`the for ` in label has to be the same with the ID of the input - it is used to associate it with an input.

When a label is associated with an input and is clicked, it will focus the cursor on that input, ready for the user to input some data. This helps make our forms more accessible to users who rely on assistive technologies.

## the name attribute
We need to use labels so that users understand what the data entered into an input field will represent. Just like that, we also need to let the backend, where we send our data, know what each piece of data represents.

We do this by adding a name attribute to our inputs

 You can think of it as a variable name for the input.Form input should always have a name attribute; otherwise, it will be ignored when the form is submitted.


## SELECT 
```
<select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select>
```
`optgroup` is used to split the data under the select options.

## RADIO BUTTON
When we select one of the radio buttons and then select another, it will deselect the first one. Radio buttons know to do this because they have the same name attribute. This is how the browser knows these elements are part of the same group of options.
We can set the default selected radio button by adding the checked attribute to it:

## CHECKBOX
Checkboxes are similar to radio buttons in that they allow users to choose from a set of predefined options. But unlike radio buttons, they allow multiple options to be selected at once.

To create a checkbox, we use the input element with a type attribute of “checkbox”:

We can set checkboxes to be checked by default on page load by giving them a checked attribute:

checkboxes should all hav the same name attribute.

## BUTTON 
#### types of button
1. submit - When a submit button is clicked, it will submit the form it is contained within. The type attribute has a value of submit by default, i.e. if the type is not specified or the value provided is invalid.

2. reset - A reset button clears all the data the user has entered into the form and sets all the inputs in the form back to what they were initially.

To create a reset button, we use the button element with a type attribute of “reset”.

3. generic - The third and final button type is simply a generic button that can be used for anything. It’s commonly used with JS for creating interactive UI’s.

To create a generic button, we use the button element with a type attribute of “button”

## ORGANIZING FORM ELEMENTS
#### FIELDSET ELEMENTS
The fieldset element is a container element that allows us to group related form inputs into one logical unit.

To create a fieldset, we use the <fieldset> element. Whatever form inputs we want to group together go within the opening and closing fieldset tags:

#### LEGEND ELEMENT
The legend element is used to give field sets a heading or caption so the user can see what a grouping of inputs is for.

To create a legend, we use the <legend> element with the text we want to display within its opening and closing tags. A legend should always come right after an opening fieldset tag

## FORM VALIDATION
Validations allow us to set specific constraints or rules that determine what data users can enter into an input. When a user enters data that breaks the rules, a message will appear, providing feedback on what was wrong with the entered data and how to fix it.

## REQUIRED VALIDATION
We will often want to ensure specific fields have been filled in before submitting the form, for example, the email and password in a login form.

To make a field required, we simply add the required attribute to it

To ensure a good user experience and to meet accessibility guidelines, we should always indicate which fields are required. This will often be done by adding an asterisk(*) to the required field label