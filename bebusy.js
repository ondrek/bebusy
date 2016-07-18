#!/usr/bin/env node

(function(){


    "use strict";


    /**
     *  Just a regular global modules and local included node modules
     */
    var boganipsumMdl = require("boganipsum");
    var colorsMdl = require("colors");
    var readlineMdl = require("readline");
    var underscoreMdl = require("underscore");


    /**
     *  Constructor should be as same for a client as for a server version
     */
    var BeBusy = function(options) {

        this.improveConsoleFn();
        this.askInitUserQuestions();

    };


    /**
     *
     */
    BeBusy.prototype.askInitUserQuestions = function(){

        console.info("\n Welcome, you lazy piece of shit!".green);

        this.askTheQuestionAndGetAnAnswer();

    };


    /**
     *
     */
    BeBusy.prototype.getRandomSystemInfos = function(){

        var env = process.env;
        var systemPaths = [ env.TMPDIR, env.PATH, env.PWD, env.HOME ];

        return underscoreMdl.sample(systemPaths);

    };


    /**
     *
     */
    BeBusy.prototype.askTheQuestionAndGetAnAnswer = function(){

        var questions = " Press ENTER for random speed".green + " (or type 'slow'/'medium'/'fast'): ";
        var that = this;

        this.rl = readlineMdl.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.rl.question(questions, function(answer){
            that.handleUserInitialAnswers(answer);
        });

    };


    /**
     *
     */
    BeBusy.prototype.handleUserInitialAnswers = function(answer) {

        var possibleAnswers = ["slow", "medium", "fast", "random"];
        var isValidAnswer = (possibleAnswers.indexOf(answer)!==-1);

        if (answer.length===0){
            // no answer, so ENTER pressed
            isValidAnswer = true;
            answer = "random";
        }

        console.info("");


        this.rl.close();

        if (!isValidAnswer){
            this.askTheQuestionAndGetAnAnswer();
        } else {
            this.selectedSpeedByUser = answer;
            this.getAuthenticParagraph();
        }

    };


    /**
     *
     */
    BeBusy.prototype.getAuthenticParagraph = function(){
        
        var type = ["info", "verb"];
        var that = this;

        var randomMessage = this.getRandomMessage();
        var randomColor = this.getRandomColor();
        var randomStatus = this.getRandomStatus();
        var randomModule = this.getRandomModule();
        var randomTime = this.getRandomShortTime();

        console.log(randomModule.grey + " " + randomStatus.magenta + " " + randomMessage[randomColor]);

        setTimeout(function(){
            that.getAuthenticParagraph();
        }, randomTime);

    };



    /**
     *
     */
    BeBusy.prototype.getRandomMessage = function(){

        var that = this;

        var senteces = [
            "it worked if it ends with ok",
            "cli [ 'node', '" + this.getRandomSystemInfos() + "', 'install', '--verbose' ]",
            "using npm@1.4.28 " + this.getRandomSystemInfos(),
            "using node@v0.10.32",
            "readDependencies using package.json deps",
            "install where, deps " + this.getRandomSystemInfos() + ", [ '" + this.getRandomNodePackage() + "' ] ]",
            "readDependencies using package.json deps",
            "already installed skipping  " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "already installed skipping boganipsum@0.1.0 " + this.getRandomSystemInfos(),
            "build /Users/samuel/Documents/bebusy",
            "linkStuff [ false, false, false, '/Users/samuel/Documents' ]",
            "rebuildBundles " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "rebuildBundles [ '.bin', 'boganipsum', 'colors' ]",
            "install " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "postinstall " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "prepublish " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "preinstall " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "linkStuff " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "linkBins " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "linkMans " + this.getRandomNodePackage() + "@" + this.getRandomVersion(),
            "exit [ 0, true ]",
            "ok",
            "etag " + that.getRandomHexNumber()
        ];

        return underscoreMdl.sample(senteces);

    };


    /**
     *
     */
    BeBusy.prototype.getRandomVersion = function(){

        var mayorV = underscoreMdl.random(1, 9);
        var minorV = underscoreMdl.random(1, 9);
        var devV = underscoreMdl.random(1, 9);

        return "v" + mayorV + "." + minorV + "." + devV;
    }


    /**
     *
     */
    BeBusy.prototype.getRandomHexNumber = function(){

        var stringSize = 60;
        var generatedHexString = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i=0; i<stringSize; i++){
            generatedHexString += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return generatedHexString;
    }


    /**
     *
     */
    BeBusy.prototype.getRandomShortTime = function(){

        var speed = this.selectedSpeedByUser;

        if (speed==="fast") {
            return underscoreMdl.random(10, 20);
        } else if (speed==="medium") {
            return underscoreMdl.random(50, 200);
        } else if (speed==="slow") {
            return underscoreMdl.random(100, 500);
        } else if (speed==="random") {
            return underscoreMdl.random(10, 300);
        }

    };


    /**
     *
     */
    BeBusy.prototype.getRandomModule = function(){

        var modules = [
            "npm", "install", "download", "parse", "ok", "verb", "WARN", "info"
        ];

        return underscoreMdl.sample(modules);

    };


    /**
     *
     */
    BeBusy.prototype.getRandomNodePackage = function(){

        var modules = [
            "underscore", "async", "request", "lodash", "commander", "express", "optimist", "colors", "coffee-script",
            "mkdirp", "debug", "q", "chalk", "yeoman-generator", "moment", "glob", "through2", "jade", "uglify-js",
            "socket.io", "gulp-util", "redis", "cheerio", "through", "node-uuid", "connect", "winston", "mime",
            "minimist", "bluebird", "grunt", "handlebars", "mongodb", "rimraf", "semver", "ejs", "mongoose", "marked",
            "xml2js", "underscore.string", "fs-extra", "mocha", "js-yaml", "superagent", "less", "extend", "esprima",
            "jquery", "stylus", "body-parser", "xtend", "jsdom", "event-stream", "shelljs", "minimatch", "prompt",
            "browserify", "wrench", "ws", "mysql", "readable-stream", "yosay", "inherits", "when", "pkginfo",
            "backbone", "nopt", "cli-color", "concat-stream", "passport", "nodemailer", "gulp", "chai", "inquirer",
            "nconf", "validator", "yargs", "mustache", "qs", "clean-css", "npm", "ncp", "should", "open", "aws-sdk",
            "graceful-fs", "temp", "http-proxy", "iconv-lite", "requirejs", "socket.io-client", "hiredis", "uuid",
            "promise", "escodegen", "bower", "oauth", "log4js", "cli-table"
        ];


        return underscoreMdl.sample(modules);

    };



    /**
     *
     */
    BeBusy.prototype.getRandomStatus = function(){

        var allColors = [
            "100 Continue", "101 Switching Protocols", "102 Processing", "200 OK", "201 Created", "202 Accepted",
            "203 Non-Authoritative Information", "204 No Content", "205 Reset Content", "206 Partial Content",
            "207 Multi-Status", "208 Already Reported", "226 IM Used (RFC 3229)", "300 Multiple Choices",
            "301 Moved Permanently", "302 Found", "303 See Other", "304 Not Modified", "305 Use Proxy",
            "306 Switch Proxy", "307 Temporary Redirect", "308 Permanent Redirect", "prepublish", "postinstall",
            "install", "rebuildBundles", "linkMans", "linkBins", "linkStuff", "install", "about to build", "addNamed",
            "lock", "etag", "parsed url", "search", "query", "host", "auth", "slashes", "cache add", "GET", "POST",
            "trying", "installOne", "tar unpack"
        ];

        return underscoreMdl.sample(allColors);

    };


    /**
     *
     */
    BeBusy.prototype.getRandomColor = function(){

        var allColors = [ "white", "grey", "green", "blue", "cyan", "white", "gray" ];
        var randomNmbr = underscoreMdl.random(0, 100);
        var twentyPercentProbab = (randomNmbr<5);

        if (!this.currentColor){
            // first init
            this.currentColor = underscoreMdl.sample(allColors);
        }

        if (twentyPercentProbab){
            var newColor = underscoreMdl.sample(allColors);
            this.currentColor = newColor;
            return newColor;
        } else {
            return this.currentColor;
        }

    };


    /**
     *
     */
    BeBusy.prototype.generateIpsum = function(){

        for (var i=0; i<1000; i++){
            console.log( boganipsumMdl({ sentenceMin: 200, sentenceMax: 205 }) );
        }

    };


    /**
     *  Fancy logger with colors and a prefixed current date
     */
    BeBusy.prototype.improveConsoleFn = function(){

        var log = console.log;
        var that = this;

        console.log = function(){
            log.apply(console, [that.getFormattedDate()].concat(arguments[0]));
        };

    };


    /**
     *
     */
    BeBusy.prototype.getFormattedDate = function(){

        var date = new Date();

        var leadingZero = function(nmbr){
            if (nmbr<10) { return ("0" + nmbr) } else { return nmbr }
        };

        var formattedTime = "";
        formattedTime += leadingZero( date.getHours() );
        formattedTime += ":" + leadingZero( date.getMinutes() );
        formattedTime += ":" + leadingZero( date.getSeconds() );

        return formattedTime;

    };


    /**
     *
     */
    module.exports = function(options) {

        return new BeBusy(options);

    };



    new BeBusy({});



})();