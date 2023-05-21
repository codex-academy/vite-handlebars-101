# Handlebars templates with ViteJS

This section is an introduction to using Handlebars Templates with ViteJS.

[Handlebars](https://handlebarsjs.com/) is a templating language.

[ViteJS](https://vitejs.dev/) is a frontend development utility tool for modern front end development

Using these two tools together makes it easy for to get going with HandlebarsJS.

The aim of this section is to learn how to create HTML template files that can be combined with JavaScript JSON files.
It is an introduction to the concept of creating data driven HTML pages.


```
Handlebars HTML template + JSON = Generated HTML output
```

We will be using `npm` - the Node Package Manager to install and run `ViteJS` with `HandlebarsJS`.


## ViteJS & HandlebarsJS setup


Create a new folder called `handlebars-with-vitejs` using this command:

```bash
mkdir handlebars-with-vitejs
```

Change into the folder:

```bash
cd handlebars-with-vitejs
```

Initialize the folder as a NodeJS project:

```bash
npm init es6
```

Install Handlebars using `npm` - handlebars is a template language that we will be using.

```bash
npm install --save-dev vite vite-plugin-handlebars
```


### Setup Handlebars in ViteJS

Now setup Handlebars in ViteJS - we will be using ViteJS to run HandlebarsJS.

```
touch vite.config.js
```

Paste this into the `vite.config.js` file.

```js
import handlebars from 'vite-plugin-handlebars';

const basicContext = {
        title : "Hello this is some text",
        show : false,
        fruits : [
            "apples",
            "oranges",
            "bananas"
        ],
        isClient : true,
        fruitSales : [
            {day : "Monday", apples : 13, oranges : 34},
            {day : "Tuesday", apples : 17, oranges : 28},
            {day : "Thursday", apples : 7, oranges : 45},
        ]
    };

export default {
  plugins: [handlebars({
    context : basicContext
  })]
};
```

Add these two script files to the `package.json` file's script section:

```json
    "dev": "vite",
    "deploy": "vite build"
```

Add an `index.html` file in the route folder of of your project.

```bash
touch index.html
```

You can open the folder in VS Code - using this command:

```bash
code .
```

Add some html to the `index.html` file. Type html adn then press `ctrl-spacebar` - if should autocomplete a HTML page structure for you.

Add some HTML to it and add a `{{title}}` tag in the `body` tag.


Start vite using the `npm run dev` command. In the terminal window type `o` (the letter `o`) - for it to open the current ViteJS server in a web browser.

You can change the `title` attributes value in the ViteJS config file - the changes should reflect in the browser


If you look at this part of the `vite.config.js` file:

```js
export default {
  plugins: [handlebars({
    context : basicContext
  })]
};
```

Note that the `context` attribute us exposed to html files in deployed via `vitejs`.

You can create other html files and also add  HandlebarJS tags using `{{`  `}}` sections.

If you create `info.html` file for example the file should be visible at `http://localhost:5073/info.html` - or at whichever port number ViteJS started up on your machine.

### Ignore the node_modules folder

Add a `.gitignore` file

```bash
touch .gitignore
```

And add this text into it:

```bash
node_modules/
```

> The `.gitignore` is used to exclude folders and files from a GitHub repository. The `node_modules/` folder should not be added to the `git` repo and should be ignored. So we add it to the `.gitignore` file. The `node_modules/` folder will be recreated after an install using `npm install`.


## Handlebars basics

Handlebars is a templating language. Templates makes it easy to combine a layout with data - and allows us to decouple data from a layout. The same layout can be used for different datasets.

You can learn more about the Handlebars language syntax [here](https://handlebarsjs.com/guide/#simple-expressions).

HandlebarsJS use `{{ key_name }}` blocks as places to be replaced with data.
This will go with a JavaScript object literal called:

```json
{
    "key_name" : "this value will go in the template"
}
```

A template like this:

```
Hello {{name}}, today is {{week_day}} how are you on this {{week_day}}?
```

Will use a data Object like this:

```json
{
    "name" : "Joe",
    "week_day" : "Wednesday"
}
```

> You can add the JSON above to the `vite.config.js` file in the `basicContext` object attribute and add a section in the HTML `index.html` file to see the template in action.

You can add this to the index.html file:


```html
<div>
Hello {{name}}, today is {{week_day}} how are you on this {{week_day}}?
</div>
```

The `basicContext` sections should look like this:


```js
const basicContext = {
    title : "Hello this is some text",
    show : false,

    name : "Joe",
    week_day : "Wednesday"

    fruits : [
        "apples",
        "oranges",
        "bananas"
    ],
    fruitSales : [
        {day : "Monday", apples : 13, oranges : 34},
        {day : "Tuesday", apples : 17, oranges : 28},
        {day : "Thursday", apples : 7, oranges : 45},
    ]
};
```

### Conditional statements

Templates can hide and show data based on a boolean (true/false) value.

```
Hi there {{name}},
<section>
{{#if isClient}}
Welcome back to our website.
{{else}}
Welcome to our website.
{{/if}}
<section>
```

The data for this template looks like this:

```json
{
    "name" : "Joe Bloggs",
    "isClient" : false
}
```

Based on the data above Handlebars will return `Welcome to our website.`.

> Test this out by adding the above HTML to `index.html` and the appropriate `attributes` in the `vite`

### Loops

Handlebars can loop over a list in the context.

Given a list of `days`

```json
{
    "fruits" : [
        "apples",
        "oranges",
        "bananas"
    ]
}
```

To loop over them using the `#each` tag

```
The days you attended are:
{{#each fruits}}
* {{this}}
{{/each}}
```

Loop over a list of Object literals is very similar:

```json
{
    "fruitSales" : [
        {"day" : "Monday", "apples" : 13, "oranges" : 34},
        {"day" : "Tuesday", "apples" : 17, "oranges" : 28},
        {"day" : "Thursday", "apples" : 7, "oranges" : 45},
    ]
}
```

You can create a dynamic HTML table


```html
<table>
<thead>
    <tr>
        <th>Week day</th>
        <th>Apple sales</th>
        <th>Orange sales</th>
    </tr>
</thead>
{{#each fruitSales}}
<tr>
    <td>{{day}}</td>
    <td>{{apples}}</td>
    <td>{{oranges}}</td>
</tr>
{{/each}}
<table>
```

In the template above not `this` is needed - use the attribute names in the object literal.

