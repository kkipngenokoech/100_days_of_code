welcome to my thirty days of reactjs.
here I am going to build a real world react app
this are some of the react features I am going to learn:
    pagination
    client-side searching
    server-side searching
    sorting

# FUNDAMENTALS OF REACT JS
for REACT appliactions you need to have node and NPM installed in your machine.
    to verify node version - node --version
    to verify npm version - npm --version
## SETTING UP A REACTJS PROJECT
command used - `npx create-react-app hacker-stories`
then cd into the directory `cd hacker-stories`
then run `npm start`

## INSIDE THE HACKER-STORIES DIRECTORY
there are a number of files created inside the [hacker-stories directory](./hacker-stories/)
1. [node_modules](./hacker-stories/node_modules):
    it contains all node packages installed via npm, we don't need to make any changes on this app since almost everything is done via the terminal.
2. [package.json](./hacker-stories/package.json):
    this file shows a list of node packages dependencies and other project configurations.
3. [package-lock.json](./hacker-stories/package-lock.json):
    this file indicates npm how it will break down all node package versions - we are not going to touch this file
4. [.gitgnore](./hacker-stories/.gitgnore):
    this file displays all files that are not going to be added to our repo when we use git. - this include files and folders
5. [public](./hacker-stories/public/):
    this folder holds development files
6. [SRC](./hacker-stories/src/)
    this contains static files which include and not limited to all our css and js files

N/B: the react commands that we may need are found in the [package.json](./hacker-stories/package.json)
the scripts are run with a prefix of npm run, with an exceptions of `start` and `test`
you can just `npm start` and `npm test`