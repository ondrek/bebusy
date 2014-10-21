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
        this.getAuthenticParagraph();

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

        rl.question(questions, function(answer){
            that.generateIpsum();
            rl.close();
        });

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

        console.log(randomModule.grey + " " + randomStatus.magenta + " " + randomMessage);

        setTimeout(function(){
            that.getAuthenticParagraph();
        }, 70);


    };



    /**
     *
     */
    BeBusy.prototype.getRandomMessage = function() {

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

        return underscoreMdl.sample(senteces);

    };



    /**
     *
     */
    BeBusy.prototype.getRandomModule = function() {

        var modules = [
            "npm",
            "install",
            "ruby",
            "download",
            "parse",
            "ok"
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
            "400 Bad Request",
            "401 Unauthorized",
            "402 Payment Required",
            "403 Forbidden",
            "404 Not Found",
            "405 Method Not Allowed",
            "406 Not Acceptable",
            "407 Proxy Authentication Required",
            "408 Request Timeout",
            "409 Conflict",
            "410 Gone",
            "411 Length Required",
            "412 Precondition Failed",
            "413 Request Entity Too Large",
            "414 Request-URI Too Long",
            "415 Unsupported Media Type",
            "416 Requested Range Not Satisfiable",
            "417 Expectation Failed",
            "418 I'm a teapot",
            "419 Authentication Timeout",
            "420 Method Failure",
            "420 Enhance Your Calm",
            "422 Unprocessable Entity",
            "423 Locked",
            "424 Failed Dependency",
            "426 Upgrade Required",
            "428 Precondition Required",
            "429 Too Many Requests",
            "431 Request Header Fields Too Large",
            "440 Login Timeout",
            "444 No Response",
            "449 Retry With",
            "450 Blocked by Windows Parental Controls",
            "451 Unavailable For Legal Reasons",
            "451 Redirect",
            "494 Request Header Too Large",
            "495 Cert Error",
            "496 No Cert",
            "497 HTTP to HTTPS",
            "498 Token expired/invalid",
            "499 Client Closed Request",
            "499 Token required",
            "500 Internal Server Error",
            "501 Not Implemented",
            "502 Bad Gateway",
            "503 Service Unavailable",
            "504 Gateway Timeout",
            "505 HTTP Version Not Supported",
            "506 Variant Also Negotiates",
            "507 Insufficient Storage",
            "508 Loop Detected",
            "509 Bandwidth Limit Exceeded",
            "510 Not Extended",
            "511 Network Authentication Required",
            "520 Origin Error",
            "521 Web server is down",
            "522 Connection timed out",
            "523 Proxy Declined Request",
            "524 A timeout occurred",
            "598 Network read timeout error",
            "599 Network connect timeout error",
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
            "installOne"
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