Ionic Material Design Base Application
=====================

A starting project for Ionic Material Design that supports using custom SCSS with bulk file importing (globbing), Compass, wired dependencies using `wiredeps` so you don't have to include everything and Jasmine for scaffolding and running tests.

## Using this project

We recommend reading the [Getting Started](http://ionicframework.com/getting-started) page in order to get familar with ionic and installing it's dependencies.

You'll need to run 3 commands to get started:

`npm install` - installs development dependencies 

`bower install` - installs all application dependencies

`ionic state restore` - installs Cordova Plugins setup by default

### Working with Ionic Material Design 
Read more here: https://github.com/delta98/ionic-material-design-lite

### Adding Platforms
You will still need to add platforms in the normal way. Using `ionic platform add <ios|android>`

##Changes from the original ionic-app-base
#### Renamed lib to vendor
Renaming `lib` to `vendor` was an idealogical change, in most robust applications there will be an internal library that shares common code, particularly if you are building applications that include common feature sets. `Vendor` provides a more coherent relationship with external dependencies. 

#### Added Sass bulk imports
If you use any form of structured CSS methodology such as [BEM](https://en.bem.info/) or [SMACSS](https://smacss.com) you'll no doubt use several `.scss` files and folders. Including these files can become cumbersome and if you forget to update your imports you can run into a number of errors. 

#### Remove splash screen spinner
Cordova applications show a loading spinner on the splash screen, we've added `<preference name="ShowSplashScreenSpinner" value="false"/>` to remove it by default.

#### Included Compass into the `sass` block for gulp
We like using [Compass](http://compass-style.org) it includes a wide range of helpful mixins and functions. 

#### Included [`Wiredep`](https://github.com/taptapship/wiredep) as part of the build process
Manually adding dependencies to your `index.html` file can become tedious, so automatically wiring them up based on your `bower.json` just makes sense and saves a lot of time.

#### We love tests
Testing is good, we love tests. So including scaffolding and a test runner is essential, which is why we've added [Jasmine](http://jasmine.github.io/) to the build process.
