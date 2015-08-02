# capira-socrates

#Capira Stack

##Frontend Frameworks
- [Polymer 1.x](https://www.polymer-project.org/1.0/docs/devguide/feature-overview.html)
    - [Custom Elements Golden Standard](https://github.com/webcomponents/gold-standard/wiki)
    - [Atomic Design](http://patternlab.io/) 
        - "The Web-App itself is not the primary thing I am creating. The primary thing I am creating is the the Design System and the final web experience is just one instance of that." [Google Podcast](https://www.youtube.com/watch?v=7gVOeAdHt0E)
- [Material Design](https://www.google.com/design/spec/material-design/introduction.html)
    - [Icons](https://www.google.com/design/icons/)
- [Polymer Elements](https://elements.polymer-project.org/browse)
- [ECMA Script 6](http://codepen.io/mikkokam/pen/jPMLJN) ?

##Backend Frameworks
- PHP >= 5.3
- RESTful JSON API
    - Testing: [Behat](http://docs.behat.org/en/v2.5/)
    - DocGen: [apidocjs](http://apidocjs.com/)
        - Gulp Task: [gulp-apidocjs](https://www.npmjs.com/package/gulp-apidocjs)
    - [Swagger](http://swagger.io)
        - Gulp Task: [gulp-apidoc-swagger](https://www.npmjs.com/package/gulp-apidoc-swagger)


##Dependencies Management 
- Nodejs
- Bower

##Dev & Build Tools
- Automate Workflow: [Gulp](http://gulpjs.com/)
- Scaffolding: Yeoman
    - [Polymer-Generator](https://github.com/yeoman/generator-polymer)
    - [Polymer Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/index?hl=en)
- vulcanizer
- jscs
- jshint
- browser-sync
- [Polybuild](https://github.com/PolymerLabs/polybuild) ?

##Testing & Documentation
- Auto-Docs: [iron-component-pages](https://elements.polymer-project.org/elements/iron-component-page)
    - [Hydrolysis](https://github.com/Polymer/hydrolysis)

##IDE
- [Sublime Text 3](http://www.sublimetext.com/3) ?
    - Package Manager 
    - linter
    - plugins ... 


##Repository 
- [git](https://git-scm.com/)
- Hoster: [github](https://github.com/capira12/capira-socrates-channels)
- GUI for Mac: [Tower](http://www.git-tower.com/)

##Deployment and Hosting
- Hoster: Hetzner 
- Deployment: Filezilla

##Speed and Performance Measurement
- [Polymer for the performance obsessed](https://aerotwist.com/blog/polymer-for-the-performance-obsessed/)
- [Webpage Test](http://www.webpagetest.org/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

##Project Management and Communication
- Project Management System [Jira](https://www.atlassian.com/software/jira)
- Team Communication: [Slack](https://slack.com/) 


##Ressources
- [Polymer Slack Channel](https://polymer.slack.com/)
- [Google Developers](https://developers.google.com/web/)
    - [Totally Tooling Tips](https://developers.google.com/web/shows/ttt/)
- [The Web Plattform Podcast](https://www.youtube.com/channel/UCjz3j22CyBpy6Qk5SL6UwcQ)
- 






# Install Tools
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
 git clone https://github.com/capira12/capira-socrates-channels.git
 ```
 
Install the dependencies of the project:
```
 cd capira-socrates-channels
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
