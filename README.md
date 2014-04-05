About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repos, was getting to be more and more difficult, especially as each has its own version of Grunt.

There are trade-offs of course. While it will now be easier to manage all repos, as a team, we'll have to be especially
careful to manage merges and conflicts, as this repository will be modified by many developers working on many different
projects.

### Ownership

Ownership will only be assigned to designated page champions. All other developers, as a matter of course, will need to
fork this repostiory, make, commit, and push their changes, then do a merge request.

Install
=====

If you're an owner, you can clone the repo directly:

```
git clone git@github.secureserver.net:FOS-CDS-Pages/Sales.git && cd Sales
```

If you're not an owner, you can fork the respository using the button in the upper right. Once forked, use either the
command line or your GUI to clone the repo.

**Install global dependencies**

#### Gulp

This new repository requires [GulpJS](http://www.gulpjs.com) for running the build tasks. You'll need to make sure it's installed.

```
sudo npm install -g gulp
```

**Install local dependencies**

Before you do anything, it is important that you install any local dependencies associated to this repo via the ```package.json``` file.
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

#### LESS, LESSMIN
These two tasks will compile and minify any less files you have in your CSS folder. The compiled CSS, gets copied
to the ```build``` folder and out to the image server.

#### TEMPLATES
This task will render your templates, preparing them for CDS importing. The task uses a gulp plugin called
[gulp-swig](https://www.npmjs.org/package/gulp-swig) which renders your templates using the Swig JS template engine. This
lets you use layouts, variables, and includes within your pages to help keep things
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself). The compiled templates get copied to the ```build``` folder and
out to the image server.

#### IMAGES
This task simply takes any images you have and copies them to the build folder and out to the image server.

#### WATCH
A watch task is set up so that any changes made to any of the above files, their associated tasks will automatically get run.
For example, if you make a change to your html file, upon save, Gulp will execute the templates task.

CDSM Tool
=====

TODO: Describe CDS API process.

Roadmap
=====

 * i18n support / language token generation
 * 
