ECHO
node ./lib/login.js
git status
SET /P ustatus=Is your status clean?(Y/N): 
IF "%ustatus%"=="N"  GOTO End
IF "%ustatus%"=="Y" GOTO rebase
GOTO End
:rebase
git fetch upstream master
git rebase upstream/master
:End