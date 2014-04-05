About
=====

This repository is now the single place to store all pages, where previously each individual page (at a project level,
not strictly), was a separate repository. The reason for this change is it became apparent that managing that growing
list of repos, was getting to be more and more difficult, especially as each as its own version of Grunt.

There are trade-offs of course. While it will now be easier to manage all repos, as a team, we'll have to be especially
careful to manage merges and conflicts, as this repository will be modified by many developers working on many different
projects.

## Ownership

Ownership will only be assigned to designated page champions. All other developers, as a matter of course, will need to
fork this repostiory, make, commit, and push their changes, then do a merge request.

Install
=====

Clone repo

```
git clone git@github.secureserver.net:FOS-CDS-Pages/Sales.git && cd Sales
```

Install dependencies

```
npm install
```

Tasks
=====

Tasks are now executed with [GulpJS](http://www.gulpjs.com) instead of Grunt. 
