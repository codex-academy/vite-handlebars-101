# Deployment

Add your project to git and deploy to GitHub Pages. 

Push your code to a `main` branch.

Deploying a ViteJS driven project to GitHub pages use GitHub actions - the instructions are below.

## Ignore the node_modules folder

Add a `.gitignore` file

```bash
touch .gitignore
```

And add this text into it:

```bash
node_modules/
```

> The `.gitignore` is used to exclude folders and files from a GitHub repository. The `node_modules/` folder should not be added to the `git` repo and should be ignored. So we add it to the `.gitignore` file. The `node_modules/` folder will be recreated after an install using `npm install`.


## Deploy using GitHub Actions

Deploying a ViteJS app to GitHub pages is marginally more tricky than creating a `gh-pages` branch and pushing it to GitHub. You can find the instructions online [here](https://vitejs.dev/guide/static-deploy.html#github-pages), but you can follow the instructions below.

Once your project is pushed to GitHub there are a few things you need to do.

Set the `base` of your app in your ViteJS setup.

Add this: 

```js
export default {
    base : '/responsive_webpages/',   // <-- add this
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
