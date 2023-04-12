// Searching strings methods

// String slice()=>it exctract and returns a section of a string
// it does not change the orignal  string
// it will rslice substring from index 0, to 10 if the index where -0,-10 it would strat slicing from   backwards

const string=("Hello, world");
let result=string.slice(0,10);
console.log(string);


// string trim()=> it removes white space from both end of a string it does not take in any parameters

const letters=(" A B,C,D,");
let results=letters.trim();
console.log(letters);

// string length=>it returns the number of characters in a string
// it does not take any parameters

const code=("coding is fun");
let len =code.length
console.log(len);

// string search()=>it searches for a match between a given string and a regular expression
// it returns the index of the first match between the regular expression and the given  string and it returns -1 if no match was found

const sentence=(" i love jumping");
let sent=sentence.search("jumping");
console.log(sent);

// String replace()=>method returns a new string with the specified string replaced

const names=("joy");
let myname=names.replace("joy","jumping" )
console.log(myname);

// String startsWith()=>it returns true if the string starts with specified  string if not returns false


const senten=("I was here");
let check=senten.startsWith("I");
console.log(check);
console.log(check);

// string endsWith()=>it returns true if the string ends with specified string if not returns false
// it takes two paramateres
const Str=(" i was here");
let chec=Str.endsWith("here");
console.log(chec);
console.log(chec);

// string concat()=>concatenates given arguments to the given string it returns a new strings to concantenate to string

let emptstring=""
let joinedstring=emptstring.concat("today is sunny day");
console.log(joinedstring);

// string repeat()=>it  creat a new string by repeating the given string a specified numbers of times and returns it
// it returns a new strings containing the specified numbers of copies of the given strings

let newone=("cups","plates","spoons","bananas");
let newstr=newone.repeat(3);
console.log(newstr);

// Strings Questions

// Extract the first four characters from the string below;
// "beautiful"

const charct="beautiful"
let extract=charct.slice(0,4);
console.log(extract);
// Insert the following string at the tenth index of the below variable:
// "eat"
const food = "I did not have appetite today"
let insert=food.slice(0,10) + "eat" + food.slice(10)
console.log(insert)
// Count how many times the following string appears in the string variable://
// 1. "the"
// 2."s"//
const story= "She sells sea shells at the sea shore";
var count = (story.match(/s/g)).length;
console.log(count);
var count =(story.match(/the/g)).length;
console.log(count);
// const story= "She sells sea shells at the sea shore"
// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"/
// 3. Title case "A busy office"
const  capital="CONfidant";
let cap=capital.toUpperCase()
console.log(cap);

const small=("amazing","beautiFUL");
let sma=small.toLocaleLowerCase();
console.log(sma);

const title=" A busy office";
let titl=title.replace(title.tocapital());
    console.log(title)
// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"/
const string1="The lady went to the market   with her sister";
console.log(string1.slice(21,27));

const string2="my favorite season is spring";
console.log(string2.slice(12,19)); 

const boy="what do you want"
console.log(boy.replace("want","school"))

const girl="what  do you want"
console.log(girl.length -3 )







