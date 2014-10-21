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

        this.improveConsoleFn()
        this.askInitQuestions();

        this.options = options ? options : {
            version : options.version || 1,
            logs : options.logs || false,
            salt : options.salt || "",
            speed : options.speed || 1
        };


    };


    /**
     *
     */
    BeBusy.prototype.askInitQuestions = function() {

        console.log("Hello, visitor! Welcome in BeBusy package".green);
        console.log("Version: 1.0".red);

        var that = this;

        var rl = readlineMdl.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        var questions = "[bebusy] What speed of generated messages do you want (slow, medium, fast): ";



        that.getAuthenticParagraph();


        return;
        rl.question(questions, function(answer){
            that.generateIpsum();
            rl.close();
        });

    };


    /**
     *
     */
    BeBusy.prototype.getAuthenticParagraph = function() {
        
        var prefix = "npm";
        var type = ["info", "verb"];
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
            "ok"
        ];

        var randomColor = that.getRandomColor();
        senteces.forEach(function(one){

            console.log("npm ".grey + "info ".cyan + one[randomColor]);
        });

        this.getAuthenticParagraph();

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

        var date = new Date();
        var log = console.log;

        var leadingZero = function(nmbr){
            if (nmbr<10) { return ("0" + nmbr) } else { return nmbr }
        };

        var formattedTime = "[bebusy] ";
        formattedTime += leadingZero( date.getHours() );
        formattedTime += ":" + leadingZero( date.getMinutes() );
        formattedTime += ":" + leadingZero( date.getSeconds() );

        console.log = function(){
            log.apply(console, [formattedTime + " - "].concat(arguments[0]));
        };

    };


    /**
     *
     */
    module.exports = function(options) {

        return new BeBusy(options);

    };



    new BeBusy({});



})();