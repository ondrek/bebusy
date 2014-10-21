# BeBusy

## The best hashing algorithm for speed, uniqueness and length for Javascript

<br/><br/>

### Problems of conventional hashes and HonestHash solutions

**problem SPEED:** hashing can't be too slow (for big files) or too fast (rainbow([*][1]) tables)<br>
**solution:** HonestHash has an optional speed parameter and can be set between 4ms ~ 22000ms
 
**problem LENGTH:** hash can't be too long (shorter hash means faster and cheaper databases)<br>
**solution:** HonestHash is only 40 characters long and still without any collisions 

**problem SALTING:** can't be hashed without a salt (rainbow tables have 43([*][2]) billion results)<br>
**solution:** HonestHash has a mandatory salt and an optional number of hashing

**problem UNIVERSALITY:** you must be able to reuse the same library on cliend and server<br>
**solution:** HonestHash has just one implementation for Node.js and client JS

**problem COLLISIONS:** many hashes have already known collisions (MD5, SHA0, SHA1..)<br>
**solution:** HonestHash uses internally SHA3-512 and RIPEMD-160 (not known collisions)

<br/>

![HonestHash](http://bit.ly/UFowHY "honest hash")

<br/><br/><br/>

### How to install and use Honest Hash?

**Installation on server within package.json**

    > npm install honesthash
    > node require("./Honesthash.js")

<br/>

**Short usage with salt and speed options**

    var options = { salt : "744bdf813e57252146", speed : 15000 };
    var result = require("./Honesthash.js")(options).hex("123");
    
    console.log(result);
    > e457227529744e2146bdf813e57259f256fd7cdc
    
<br/>
    
**Standard usage with more instances of the hash**

    var hashModule = require("./Honesthash.js");

    var develHash = hashModule({ speed: 1, salt: "1f5a5ab970a1945c91394", logs: true });
    var testHash = hashModule({ speed: 10000, salt: "159139413f5a5970a", logs: true });
    var prodHash = hashModule({ speed: 10000, salt: "d73ce9fc1776ad4f", logs: false  });

    console.log( develHash.hex("123"), testHash.hex("123"), prodHash.hex("123") );

<br/>

**Shortest usage without options**

    console.log( require("./Honesthash.js")().hex("string") );
    > 1176e5c9188f73a5203656949848c19680ecc062

<br/><br/><br/>

### Available options

    {
      (mandatory) salt: "1234567890", // your custom hash, can be any string
      (optional) loop: 1, //  can be between 1 and 1000000
      (optional) logs: false // logs everything to console (speed, hash, string)
    }

<br/><br/><br/>

### How Honest Hash works?

**Hashing**

Honest Hash puts raw string to SHA512 with given salt. SHA3-512 is used because its the best implementation
of famous SHA serie and result is unique, without any collisions and strong. Problem is that is too long. 
This SHA3 result is given to hashing function RIPE160 and it result is provided back.

    uniqButLong = SHA3-512("your string" + salt);
    shortAndUniq = RIPE160(uniqButLong + salt);

![HonestHash](https://raw.githubusercontent.com/ondrek/honesthash.js/master/graphs/howitworks.png "how it works?")
   
    
**Speed**  

Speed is inspired by Niels Provos([*][2]) and David Mazières and theirs **bcrypt**. Optional speed besides 
incorporating a salt protects against rainbow table attacks. Hashing iterates within a loop that is set by
optional parameter `speed`. Iteration makes hashing slower, so it remains resistant to brute-force search
attacks even with increasing computer power.

<br/>

<br/><br/><br/>

### Backward compatibility algorithms

Honest Hash is tested not just for English characters, but also for the Cyrillic script (1), numbers (2), 
special characters (3), Eastern European characters (4) and many others..

    1: `бвгдеёжзийклмнопрстуфхцчшщъыьэюя`
    2: `1234567890`
    3: `!@#$%^&*()_-+={[}]:;"'|\?/>.<,œ∑´†¥¨ˆπ¬˚∆˙ƒ∂ßåΩ≈ç√∫˜Ω`
    4: `ąàáäâãåæăăâćęèéëêìíïîîłńòóöôõøśșşțţùúüûñçżźа`
    5: `zxcvbnmlkjhgfdsaqwertyuiop`

<br/><br/><br/>

### Bechmark

For a full benchmark see file `docs/bechmark.md`, that contains results of our benchmark. We used iMac 2011
with OSX Yosimite and Node.js v10.17. Computer had installed 4GB RAM.

<br/>

![HonestHash](https://raw.githubusercontent.com/ondrek/honesthash.js/master/graphs/speed1.png "honest hash speed 1")
![HonestHash](https://raw.githubusercontent.com/ondrek/honesthash.js/master/graphs/speed2.png "honest hash speed 2")


<br/><br/><br/>

### Versions

*1.2*

 - Updated colors of initial

<br/>

 [1]: http://en.wikipedia.org/wiki/Rainbow_table  "Check what is a rainbow table on Wikipedia"
 [2]: http://www.hashkiller.co.uk/  "Try to crack your own MD5 hash"
 [3]: http://en.wikipedia.org/wiki/Niels_Provos "Niels is a researcher in the areas of secure systems"
 [4]: http://en.wikipedia.org/wiki/Avalanche_effect
 [5]: http://en.wikipedia.org/wiki/Pigeonhole_principle