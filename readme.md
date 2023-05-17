# Handlebars templates with ViteJS


Create a new folder called `handlebars-with-vitejs` using this command:

```bash
mkdir handlebars-with-vitejs
```

Initialize the folder as a NodeJS project:

```
npm init es6
```

Install Handlebars using `npm` - handlebars is a template language that we will be using.

```
npm install --save-dev vite vite-plugin-handlebars
```

Now setup Handlebars in ViteJS - we will be using ViteJS to run HandlebarsJS.

```
touch vite.config.js
```

Paste this into the `vite.config.js` file.

```js
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [handlebars({
    context : {
        title : "Hello this is some text",
        show : false,
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
    }
  })],
};
```

Add these two script files to the `package.json` file's script section:

```json
    "dev": "vite",
    "deploy": "vite build"
```

Add an `index.html` file in the route folder of of your project.

Add some HTML to it and add a `{{title}}` tag in the `body` tag.

Start vite using the `npm run dev` command. In the terminal window type `o` (the letter `o`) - for it to open the current ViteJS server in a web browser.


## Handlebars basics

Handlebars is a templating language. Templates makes it easy to combine a layout with data - and allows us to decouple data from a layout. The same layout can be used for different datasets.


HandlebarsJS use `{{ key_name }}` blocks as places to be replaced with data.
This will go with a JavaScript object literal called:

```json
{
    "key_name" : 'this value will go in the template'
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

### Conditional statements

Templates can hide and show data based on a boolean (true/false) value.

```
Hi there {{name}},

{{#if isClient}}
Welcome back to our website.
{{else}}
Welcome to our website.
{{/if}}
```

The data for this template looks like this:


```json
{
    "name" : "Joe Bloggs",
    "isClient" : false
}
```

Based on the data above Handlebars will return `Welcome to our website.`.


### Loops

Handlebars can loop over a list in a Object.

Given a list of `days`

```json
{
    "days" : ["Monday", "Wednesday", "Friday"]
}
```

you can loop over them using the `#each` tag

```
The days you attended are:
{{#each days}}
* {{this}}
{{/each}}
```

In the template above `this` refers to the current item the template is looping over.