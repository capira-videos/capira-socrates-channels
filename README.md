# capira-socrates

## Install Tools
If you don't have npm, install Node.js first. npm comes bundled with Node.js. Node.js 0.12.x or nwer is required.
When you have npm, run:

```
npm install -g gulp bower yo generator-polymer
```
If you encounter an `EACCES` error, please consult this site: https://docs.npmjs.com/getting-started/fixing-npm-permissions

### Use Tools
To let the tools take care of dependencies, install new npm packages like:
```
npm install awesome-grunt-plugin --save
```
This will automatically update your packages.json.
The workflow is similar for bower.


## Download Project:
Download the project:
```
 mkdir capira && cd capira
 git clone https://github.com/capira12/capira-socrates-polymer.git
 ```
 
Install the dependencies of the project:
```
 cd capira-socrates-polymer
 bower install
 npm install
 ```
 
 To update your local dependencies-folder run
```
npm update
```
 
### Install the dependencies in Windows
Installing the npm modules in windows is unfortunately not very smooth and somewhat tricky.

First, you are required to have Python installed, where the version is >= v2.5.0 & < 3.0.0.
If you have several Python versions installed, you can point to a specific one like npm install --python=python2.7

It also seems that you need to have Visual Studio installed.
However, I could not test whether it complains if Visual Studio is not installed.

Another problem is that you will probably hit the limit for maximal allowed file path lengths in Windows as npm puts
the dependencies in a lot of nested folders.
The recommended way to work aound this is to use an npm newer than version 3.0. Npm 3.0 just got released this month, so
we're lucky :)
With version 3.0 npm changed the behaviour and tries to install the dependencies as flat as possible instead of nested.
Npm 3.0 is still an experimental release. To install it download it from
https://github.com/npm/npm/releases, and unpack it in the node_modules\npm\ folder inside node's installation folder.


## Build Project:
 ```
 gulp
 ```
