**Full documenation (under construction) can/will be found here:**

https://github.secureserver.net/FOS-CDS-Pages/Sales/wiki/_pages

About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repositories, was getting to be more and more difficult, especially as each has its own version of Grunt.

There are trade-offs of course. While it will now be easier to manage all repositories, as a team, we'll have to be especially careful to manage merges and conflicts, as this repository will be modified by many developers working on many different projects.

---

UPDATE: The build folder is no longer being included into the repository because of the exponential growth. If you need to review and search the compiled output in lieu of it being gone, note that the contents of the folder has been moved to:

Via Windows

```
I:\Delta\Developer\FOS-CDS-Sales-Backup
```

Via OS X

```
smb://jomax.paholdings.com/data/Delta/Developer/FOS-CDS-Sales-Backup
```

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
git fetch upstream master
git rebase upstream/master
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

#### CDS Command Line Interface (cds-cli)

You must also install the cds global command line interface. This is used for managing authentication with the CDSM related tasks.

```
$ npm install -g git+ssh://git@github.secureserver.net:WebOps/cds-cli.git
```

This installs a new command ```cds``` for running several different requests against the CDS API. For this repository, you just need to use it for authenticating:

```
$ cds login
```


**NOTE FOR WINDOWS USERS: ** the newly created ```cds``` command is installed using NPM but for some reason for windows it doesn't install it correctly.
Until this issue can be resolved [Fix-CDS-CLI](https://github.secureserver.net/FOS-CDS-Pages/Sales/wiki/Fix-CDS-CLI)

For more detail see [WebOps/cds-cli](https://github.secureserver.net/WebOps/cds-cli)

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

#### HTML
This task will render your templates, preparing them for CDS importing. The task uses a gulp plugin called
[gulp-swig](https://www.npmjs.org/package/gulp-swig) which renders your templates using the Swig JS template engine. This
lets you use layouts, variables, and includes within your pages to help keep things
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself). The compiled templates get copied to the ```build``` folder.
```
gulp html
```

#### LANGUAGE

This task will render/copy your ```.language``` files to the build folder.
```
gulp language
```

#### STYLES

These two tasks will compile and minify any less files you have in your CSS folder. The compiled CSS, gets copied
to the ```build``` folder.

```
gulp styles
```

#### SCRIPTS

This tasks will minify any JavaScript files you have in your JS folder. The a copy of the original as well as the minified JavaScript
gets copied to the ```build``` folder.

```
gulp scripts
```

#### IMAGES

This task will copy your images folder to the build folder.

```
gulp images
```

#### WATCH

A watch task is set up so that any changes made to any of the above files, their associated tasks will automatically get run.
For example, if you make a change to your html file, upon save, Gulp will execute the templates task.

```
gulp watch
```

### Task Aliases

These tasks are aliases that combine one or more tasks into one:

#### BUILD

This task combines the 'html', 'language', 'styles', 'scripts', and 'images' tasks.

```
gulp build
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
