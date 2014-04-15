About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repositories, was getting to be more and more difficult, especially as each has its own version of Grunt.

There are trade-offs of course. While it will now be easier to manage all repositories, as a team, we'll have to be especially
careful to manage merges and conflicts, as this repository will be modified by many developers working on many different
projects.

Install
=====

### Step 1: Fork and Clone

First, fork the repository so that you create a copy of it into your own account, using the fork button at the upper right.
Once forked, clone the new repository to your computer using the command below (replace [USERNAME] with your username):

```
git clone git@github.secureserver.net:[USERNAME]/Sales.git && cd Sales
```

Once cloned, you have to create an ```upstream``` source. This creates a connection back to main repository so that you
can make sure your repository stays in sync with the original one. I don't know if you can do this with the GUI so you'll have to
do this in the terminal or shell:

```
git remote add upstream https://github.secureserver.net/FOS-CDS-Pages/Sales.git
```

Now that you have connection back to the originating repository, make sure you have the latest content:

```
git pull upstream master
```

Do this daily to make sure you're never too far off.

### Step 2: Install Dependencies

**Install global dependencies**

#### NodeJS

Make sure you have NodeJS installed. It's available for both Windows and OS X at [NodeJS](http://www.nodejs.org)

#### Gulp

This new repository requires [GulpJS](http://www.gulpjs.com) for running the build tasks. You'll need to make sure it's installed.

```
sudo npm install -g gulp
```

#### Package Dependencies

Before you do anything, it is important that you install any local dependencies associated to this repository via the ```package.json``` file.
Dependencies are installed via the node package manager, ```npm``` so you have to make sure you have node installed.
See [Node Website](http://www.nodejs.org/) for more information.

Once you've ensured node is installed, open your project folder in terminal or the git shell. Then type this command:

```
npm install
```

This will find and install any dependencies you have listed in the ```package.json``` file.

Tasks
=====

Tasks are now executed with [GulpJS](http://www.gulpjs.com) instead of Grunt. It would be helpful to get more
acquainted with Gulp before continuing.

#### TEMPLATES
This task will render your templates, preparing them for CDS importing. The task uses a gulp plugin called
[gulp-swig](https://www.npmjs.org/package/gulp-swig) which renders your templates using the Swig JS template engine. This
lets you use layouts, variables, and includes within your pages to help keep things
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself). The compiled templates get copied to the ```build``` folder.
```
gulp templates --src website-builder
```

#### LANGUAGE
This task will render/copy your ```.language``` files to the build folder.
```
gulp language --src website-builder
```

#### STYLES
These two tasks will compile and minify any less files you have in your CSS folder. The compiled CSS, gets copied
to the ```build``` folder.
```
gulp styles --src website-builder
```

#### IMAGES
This task will copy your images folder to the build folder.
```
gulp images-deploy --src website-builder
```

#### TEMPLATES-DEPLOY
This task will copy any html files found on the build folder to CDS.
```
gulp templates-deploy --src website-builder
```

#### LANGUAGE-DEPLOY
This task will copy any language files found on the build folder to CDS.
```
gulp language-deploy --src website-builder
```

#### STYLES-DEPLOY
This task will copy any CSS files found in the build folder to the image server.

```
gulp styles-deploy --src website-builder
```

#### IMAGES-DEPLOY
This task will copy any image files found in the build folder to the image server.

```
gulp images-deploy --src website-builder
```

#### WATCH
A watch task is set up so that any changes made to any of the above files, their associated tasks will automatically get run.
For example, if you make a change to your html file, upon save, Gulp will execute the templates task.
```
gulp watch --src website-builder
```

### Task Aliases
These tasks are aliases that combine one or more tasks into one:

#### BUILD
This task combines the 'templates', 'language', 'projectfile', 'styles', and 'images' tasks.

```
gulp build --src website-builder
```

#### DEPLOY
This task combines the 'templates-deploy', 'language-deploy', 'images-deploy', and 'styles-deploy' tasks.
```
gulp deploy --src website-builder
```

#### ASSETS-DEPLOY
This task combines the 'images-deploy', and 'styles-deploy' tasks.

```
gulp assets-deploy --src website-builder
```

Creating/Updating Project Files
=====

Each project is represented in a sub-folder under the ```./src/``` folder. The path directly correlates with the path that you'll find in CDS 2; this is just for
organization and useful for finding things, not technically required for it to work. This is where all changes will be made.

Each folder will minimally contain:

 * the project data file (ex. src/sales/ssl/static-ip/project.json)
 * the html source (ex. src/sales/ssl/static-ip/static-ip.html)
 * a copy of the english dictionary (ex. src/sales/ssl/static-ip/static-ip.language)
 * an images folder (ex. src/sales/ssl/static-ip/img/)
 * a css folder (ex. src/sales/ssl/static-ip/css/)
 * a LESS file (ex. src/sales/ssl/static-ip/css/styles.less)

Roadmap
=====

 * i18n support / language token generation
