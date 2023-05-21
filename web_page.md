# Creating a personal web page

Create two versions of a personal web page

One version using:

* and the other one using FlexBox (which is not a framework).
* a CSS Grid framework called [SimpleGrid](https://simplegrid.io/).

Your web page should look similar to this on a **large screen:** 

![Webpage](https://codex-academy.github.io/learn-images/large-webpage.png)

And on a small **screen** it should look similar to this:

![Webpage](https://codex-academy.github.io/learn-images/small-webpage.png)

## Use frameworks

Create two version of this page one using Bootstrap and the other using Materialize.

> **Note:** If you are not familiar with HTML layouts work through the [basic layout](#basic_layout) exercise.

Then decide how many HTML containers you will need for this page.
<br>Draw the basic containers out on a piece of paper; take a photo of your drawing and add it to your kanban planning.
Review this with a mentor before your proceed.

## Create responsive web pages

The web pages should be responsive and resize according to the screen.

On small screens:

* the **Which City** photo and text should be below each other,
* and the **Historical Places/Favourite Subjects**  sections should be below each other - the photos and the text should be along side each other.
    
On larger screens:

* the **Which City** photo and text should be next each other,
* and the **Historical Places/Favourite Subjects**  sections should be next each other.

## Page content

Your web page should have the following sections

### Intro
A section with your full name and a photo of yourself with Table Montain in the background.

### Which city?

Add a section to your page about a city you would like to visit. 
Tell us why and add one photo of this city to your page.

### A foreign language

Tell us what foreign language you would like to learn and why. 
This should not be a South African Language. Add a table with 3-5 phrases in your language of choice that maps english phrases to the language you chose.

### Favourite subjects

Add a section to your page about your **three favourite subjects** during your studies.

The three subjects:	

* should be next to each other on a big screen 
* and be below each other on a small screen.
    
Add a photo or small diagram that describes or relates to each subject. OR use a placeholder image for each subject something like [this](https://betterplaceholder.com/) or one of [these](https://loremipsum.io/21-of-the-best-placeholder-image-generators/).

Above the 3 subjects state which qualification you completed at which institution.

## Gather the information for your web page.

Use the Google document that will be shared with you via Google Classrooms to complete all the information that you will need to add to you web page.

You will need this to create the JSON file described below.

## Files and folders to create

Create a folder called `responsive_webpages` in your `projects` folder.

Create three HTML files:

* one called `index-bootstrap.html` - for your web page using bootstrap,
* another one called `index-materialize.html` - for your web page using materialize,
* and a third HTML file called `index.html` that links to both versions of your web page.

Use ViteJS with Handlebars to share the information for the web pages from a JSON file.

Create a JSON file called `data.json` in your project route with this structure:

```json
{
    "user" : {
        "fullName": "",
        "photo" : ""
    },
    "city" : {
        "name" : "",
        "photo" : "",
        "description" : ""
    },
    "foreignLanguage" : {
        "language" : "",
        "phrases" : [{
            "englishPhrase" : "",
            "foreignLanguage" : ""
        },
        {
            "englishPhrase" : "",
            "foreignLanguage" : ""
        }]
    },
    "favouriteSubjects" : [
        {
            "name" : "",
            "description" : ""
        },
        {
            "name" : "",
            "description" : ""
        },
        {
            "name" : "",
            "description" : ""
        }
    ]
}
```

Import the JSON file into your HandlebarsJS context using this command:


```js
import data from 'data.json';
```

And then in the ViteJS setup add `data`:

```js
export default {
  plugins: [handlebars({
    context : {
        /*
        previous setup here
        */
        data   // add this
    }
  })],
};
```

## Make it responsive

Make sure both your webpages are responsive. They should look good on small and larger screens.

## Resize Images

Ensure that all images that you are using for your web page are resized accordingly.
Use [this website](http://resizeimage.net/) to resize images, remember to keep the image ratios the same, otherwise images will distort. Ensure all images are smaller than 100K.





