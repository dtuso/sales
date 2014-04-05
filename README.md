About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repos, was getting to be more and more difficult, especially as each as its own version of Grunt.

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

Tasks are now executed with [GulpJS](http://www.gulpjs.com) instead of Grunt. 
