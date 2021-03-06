## UPDATE (December 9, 2014)

Package.json versions have been changed to static versions, to prevent newer untested versions from being installed. To ensure we are all using the same versions, Delete node_modules folder and run npm install. After npm has been reinstalled, we should all be using the same dependency versions.

## UPDATE (October 13, 2014)

An additional feature was added to cds-lib.  This feature will create a file and folder structure if a file does not exist in CDS instead of displaying an error.  To have access to this new feature you will want to backup and remove your old node modules directory or just the cds-lib directory which is located within the cdsm node modules and complete a npm install.


---

**Full documentation (under construction) can/will be found here:**

https://github.secureserver.net/FOS-CDS-Pages/Sales/wiki/_pages

About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repositories, was getting to be more and more difficult, especially as each has its own version of Grunt.

There are trade-offs of course. While it will now be easier to manage all repositories, as a team, we'll have to be especially careful to manage merges and conflicts, as this repository will be modified by many developers working on many different projects.

---


Install
=====

### Step 1: Fork and Clone

First, fork the repository so that you create a copy of it into your own account, using the fork button at the upper right.
Once forked, clone the new repository to your computer using the SSH or HTTPS commands below (replace [USERNAME] with your username):

Note: To clone via SSH, you may need to set up your SSH key. To do that refer to this [github article](https://help.github.com/articles/generating-ssh-keys/). setting up with SSH is recommended because you do not need to enter your username and password each time you contact the remote repositories.

With SSH:
```
git clone git@github.secureserver.net:[USERNAME]/Sales.git && cd Sales
```

With HTTPS:
```
git clone https://github.secureserver.net/[USERNAME]/Sales.git && cd Sales
```

Once cloned, you have to create an ```upstream``` source. This creates a connection back to main repository so that you
can make sure your repository stays in sync with the original one. I don't know if you can do this with the GUI so you'll have to
do this in the terminal or shell:

With SSH:
```
git remote add upstream git@github.secureserver.net:FOS-CDS-Pages/Sales.git
```

With HTTPS:
```
git remote add upstream https://github.secureserver.net/FOS-CDS-Pages/Sales.git 
```

```
Tip: By default, when you clone a repository, Git will automatically create a remote called "origin" which
points back to your forked version. You can change that to be whatever you want. For instance, some are changing it
to be the same as their user name, which makes it easier to remember when pushing commits:
git push clbrown master (instead of git push origin master)
```

Now that you have connection back to the originating repository, make sure you have the latest content:

```
git fetch upstream master
git rebase upstream/master
```

Do this daily to make sure you're never too far off. More info on syncing up forks: https://help.github.com/articles/syncing-a-fork

### Step 2: Install Dependencies

**Install global dependencies**

#### NodeJS

Make sure you have NodeJS installed. It's available for both Windows and OS X at [NodeJS](http://www.nodejs.org) (Recommend latest for Windows)

#### Gulp

This new repository requires [GulpJS](http://www.gulpjs.com) for running the build tasks. You'll need to make sure it's installed.

```
sudo npm install -g gulp
```

#### Package Dependencies
Dependencies were being included with the repo and so didn't need to be installed separately. This was becoming more trouble than it was worth. We are back to installing dependencies via ```npm install```.


Tasks
=====

Tasks are now executed with [GulpJS](http://www.gulpjs.com) instead of Grunt. It would be helpful to get more
acquainted with Gulp before continuing.

More detail on tasks can be found here https://github.secureserver.net/FOS-CDS-Pages/Sales/wiki/Tasks

#### HTML
This task will render your templates, preparing them for CDS importing. The task uses a gulp plugin called
[gulp-swig](https://www.npmjs.org/package/gulp-swig) which renders your templates using the Swig JS template engine. This
lets you use layouts, variables, and includes within your pages to help keep things
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself). The compiled templates get copied to the ```build``` folder.
```
gulp html
```

Running this task requires you to be logged in if you want your content uploaded to CDS. At the command prompt just type: ```node ./lib/login.js``` and type in your username and password. 

If you get a ```no success``` message when trying to log in and you have the correct permissions to access CDS2, you might neeed to set your SSL certificate policy for node to accept untrusted certificates. To accomplish this, run the following commands:

Windows CMD:
```SETX NODE_TLS_REJECT_UNAUTHORIZED 0```

Git Bash Shell:
```echo 'export NODE_TLS_REJECT_UNAUTHORIZED="0"' >> ~/.profile```

After that, restart your terminal session and it should work.

#### LANGUAGE

This task will render/copy your ```.language``` files to the build folder. It will also upload it to CDS if you're logged in and did not specify the ```ignore-cds``` argument.
```
gulp language
```

#### RULE

This task will render/copy your ```.rule``` files to the build folder.  It will also upload it to CDS if you're logged in and did not specify the ```ignore-cds``` argument.
```
gulp rule
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

For additional information on the workflow for Git based CDS2 pages, check out this [confluence page](https://confluence.int.godaddy.com/display/EPW/Workflow+for+Git-based+CDS+pages).

Roadmap
=====

 * i18n support / language token generation
