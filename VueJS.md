# Introduction

Create Your First project App in Vue JS framework.

# The File Structure

These are the files contained in the initial project structure:

1. index.html
2. src/App.vue
3. src/main.js
4. src/assets/logo.png
5. src/components/HelloWorld.vue

We can use Vue by two ways: Install through NPM or Install through CLI.

# Install Vue through NPM

NPM (Node Package Manager) is used to install packages. You can use it to install Vue within either a new or existing project.
You will need to ensure you have Node.js installed along with access to NPM. To check, open up your console and type:

    > node -v
    > npm -v

Both of these commands should provide you with version numbers. If they go unrecognized, visit Nodejs.org and download the appropriate installer based on your operating system. Install it through the default options and reload your console. 

You can now re-issue the same commands and they will work.
First, we have to create a new project folder:

    > mkdir vue-npm && cd vue-npm

In order to save our project dependencies based on what we install with NPM, we need to create a package.json file.

To do that, issue the following command:

    > npm init -y

This will create a new package.json file and enter the defaults -y for the prompts.

Next, we will use npm to install vue:

    > npm install vue --save

At this point, you could create an index.html file with the same exact contents as the CDN example above, except change the <script .. src to node_modules/vue/dist/vue.js, and it will work just the same.

Typically, however, you would use something like Webpack or Gulp as a more robust development environment.

Because our project is not going to be set up in this fashion, we’re going to use the Vue CLI method as the actual method that we use to install Vue.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — 

# Installing Vue Cli

Let’s install the Vue cli by running the following command in your terminal.

    > npm install -g @vue/cli

If you’re using a mac then you need to add sudo before npm.

# Create Vue project

After you have installed vue-cli you will have the access to the vue binary in your command line.

Then create our vue project by running below command.

    vue create my-vueapp      #vue create folder-name

This command will download our project-related files in my-vueapp folder.

After this command you will be prompt with different questions:

Select the manually select features option by using your down arrow keys and hit enter. (Totally Optional, if you dont want use default).

    Vue CLI v3.0.0
    ? Please pick a preset:
    default (babel, eslint)
    ❯ Manually select features

Now it will prompt with various add-ons to add in our project Use spacebar to selectCSS Pre-processors then hit enter.

    ? Please pick a preset: Manually select features
    ? Check the features needed for your project:
    ◉ Babel
    ◯ TypeScript
    ◯ Progressive Web App (PWA) Support
    ◯ Router
    ◯ Vuex
    ❯◉ CSS Pre-processors
    ◉ Linter / Formatter
    ◯ Unit Testing
    ◯ E2E TestingSelect the manually select features option by using your down arrow keys and hit enter.

Now it will ask for choose your CSS pre-processor by using arrow keys to select your favorite preprocessor. We will go with SCSS/SASS.

    ? Pick a CSS pre-processor (PostCSS, Autoprefixer
    and CSS Modules are supported by default): (Use arrow keys)
    ❯ SCSS/SASS
    LESS
    Stylus

We will then choose ESLint+Prettier option for our project. (Totally Optional, if you dont want use ESLintwith error prevention only ).

    ? Pick a linter / formatter config:
    ESLint with error prevention only
    ESLint + Airbnb config
    ESLint + Standard config
    ❯ ESLint + Prettier

Now It will prompt with additional lint features option choose Lint on save option and hit enter.

    ? Pick additional lint features
    > to invert selection)
    ❯◉ Lint on save
    ◯ Lint and fix on commit

Now choose dedicated config files option.

    ? Where do you prefer placing config for Babel,
    PostCSS, ESLint, etc.?
    ❯ In dedicated config files
    In package.json

We will ask for Save this as a preset for future projects enter N for this project.

    Save this as a preset for future projects? (y/N): N

Note: if you like to save this options as your preset then type:Y so that next time if you’re creating a vue project you can choose this preset to generate your vue project fastly.

Once successfully downloaded our project-related files in my-vueapp folder now we need to change our current working directory by using below command.

    cd my-vueapp

# Running our Development server

Serving our vue project by running our development server. In your terminal run the following command to start development server.

    npm run serve
    Starting GUI... 🌠  Ready on http://localhost:8000

