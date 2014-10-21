#!/usr/bin/env node

(function(){


    "use strict";


    /**
     *
     */
    var boganipsumMdl = require("boganipsum");
    var colorsMdl = require("colors");
    var readlineMdl = require("readline");
    var underscoreMdl = require("underscore");


    /**
     *
     */
    var BeBusy = function(options) {

        this.improveConsoleFn();
        this.askInitUserQuestions();

    };


    /**
     *
     */
    BeBusy.prototype.askInitUserQuestions = function() {

        console.log("Hello, visitor! Welcome in BeBusy package".green);
        console.log("Version: 1.0".red);
        this.askTheQuestionAndGetAnAnswer();


    };


    /**
     *
     */
    BeBusy.prototype.askTheQuestionAndGetAnAnswer = function() {

        var questions = "What speed do you want (fast, medium, slow or random): ";
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
    BeBusy.prototype.getAuthenticParagraph = function() {
        
        var type = ["info", "verb"];
        var that = this;

        var randomMessage = this.getRandomMessage();
        var randomColor = this.getRandomColor();
        var randomStatus = this.getRandomStatus();
        var randomModule = this.getRandomModule();
        var randomTime = this.getRandomShortTime();

        console.log(randomModule.grey + " " + randomStatus.magenta + " " + randomMessage);

        setTimeout(function(){
            that.getAuthenticParagraph();
        }, randomTime);

    };



    /**
     *
     */
    BeBusy.prototype.getRandomMessage = function() {

        var that = this;

        var senteces = [
            "it worked if it ends with ok",
            "cli [ 'node', '/usr/local/bin/npm', 'install', '--verbose' ]",
            "using npm@1.4.28",
            "using node@v0.10.32",
            "readDependencies using package.json deps",
            "install where, deps [ '/Users/samuel/Documents/bebusy', [ 'colors', 'boganipsum' ] ]",
            "preinstall bebusy@0.1.10",
            "readDependencies using package.json deps",
            "already installed skipping colors@1.0.3 /Users/samuel/Documents/bebusy",
            "already installed skipping boganipsum@0.1.0 /Users/samuel/Documents/bebusy",
            "build /Users/samuel/Documents/bebusy",
            "linkStuff [ false, false, false, '/Users/samuel/Documents' ]",
            "linkStuff bebusy@0.1.10",
            "linkBins bebusy@0.1.10",
            "linkMans bebusy@0.1.10",
            "rebuildBundles bebusy@0.1.10",
            "rebuildBundles [ '.bin', 'boganipsum', 'colors' ]",
            "install bebusy@0.1.10",
            "postinstall bebusy@0.1.10",
            "prepublish bebusy@0.1.10",
            "exit [ 0, true ]",
            "ok",
            "etag " + that.getRandomHexNumber()
        ];

        return underscoreMdl.sample(senteces);

    };


    /**
     *
     */
    BeBusy.prototype.getRandomHexNumber = function() {

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
    BeBusy.prototype.getRandomShortTime = function() {

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
    BeBusy.prototype.getRandomModule = function() {

        var modules = [
            "npm",
            "install",
            "download",
            "parse",
            "ok",
            "verb",
            "WARN",
            "info"
        ];

        return underscoreMdl.sample(modules);

    };



    /**
     *
     */
    BeBusy.prototype.getRandomStatus = function() {

        var allColors = [
            "100 Continue",
            "101 Switching Protocols",
            "102 Processing",
            "200 OK",
            "201 Created",
            "202 Accepted",
            "203 Non-Authoritative Information",
            "204 No Content",
            "205 Reset Content",
            "206 Partial Content",
            "207 Multi-Status",
            "208 Already Reported",
            "226 IM Used (RFC 3229)",
            "300 Multiple Choices",
            "301 Moved Permanently",
            "302 Found",
            "303 See Other",
            "304 Not Modified",
            "305 Use Proxy",
            "306 Switch Proxy",
            "307 Temporary Redirect",
            "308 Permanent Redirect",
            "prepublish",
            "postinstall",
            "install",
            "rebuildBundles",
            "linkMans",
            "linkBins",
            "linkStuff",
            "install",
            "about to build",
            "addNamed",
            "lock",
            "etag",
            "parsed url",
            "search",
            "query",
            "host",
            "auth",
            "slashes",
            "cache add",
            "GET",
            "POST",
            "trying",
            "installOne",
            "tar unpack"
        ];

        return underscoreMdl.sample(allColors);

    };


    /**
     *
     */
    BeBusy.prototype.getRandomColor = function() {

        var allColors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray" ];
        return underscoreMdl.sample(allColors);

    };


    /**
     *
     */
    BeBusy.prototype.generateIpsum = function() {

        for (var i=0; i<1000; i++){
            console.log( boganipsumMdl({ sentenceMin: 200, sentenceMax: 205 }) );
        }

    };


    /**
     *  Fancy logger with colors and a prefixed current date
     */
    BeBusy.prototype.improveConsoleFn = function() {

        var log = console.log;
        var that = this;

        console.log = function(){
            log.apply(console, [that.getFormattedDate()].concat(arguments[0]));
        };

    };


    /**
     *
     */
    BeBusy.prototype.getFormattedDate = function() {

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