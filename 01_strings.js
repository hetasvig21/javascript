// const name = "yige"
// const repoCount = 45

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name} and repo count is ${repoCount} `);


// const gamename = new String("tfuwid");
// console.log(gamename[0]);

// console.log(gamename.__proto__);


// at() to find char at particular index  
// synatax : at(index)
// let sentance = "hello i am supername and nice to mett you.";
// let index = 6;
// console.log(`in sentence, charater is ${sentance.at(index)} at index ${index}`)
// let index1 = -7
// console.log(`in sentence, charater is ${sentance.at(index1)} at index ${index1}`)
// at() supports both positive index and negetive index

// charat() to find char at particular index
// syntax : charAt(index)
// let sentance = "hello i am supername and nice to mett you.";
// let index = 6;
// console.log(`in sentence, charater is ${sentance.charAt(index)} at index ${index}`)
// let index1 = -7
// console.log(`in sentence, charater is ${sentance.charAt(index1)} at index ${index1}`)
// // charAt() support ONLY positive index not negetive index


// concat() to join more then two strings 
// syntax : 
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)
// let str1 = "hello"
// let str2 = "world"
// let str3 = "???"
// console.log(str1.concat(" " , str2));
// console.log(str2.concat(" " , str1));
// console.log(str2.concat(" " , str1 , " " , str3));


// endsWith() to check is that string is ends with given string
// syntax : 
// endsWith(searchString)
// endsWith(searchString, endPosition)
// let sentance = "hello i am supername and hoew are you?";
// console.log(sentance.endsWith("you?"))
// console.log(sentance.endsWith("you" ,37))
// console.log(sentance.endsWith("you" ,36))


// startsWith() to check is that string is starts with given string
// syntax : 
// startsWith(searchString)
// startsWith(searchString, endPosition)
// let sentance = "hello i am supername and hoew are you?";
// console.log(sentance.startsWith("hello"))
// console.log(sentance.startsWith("ello" ,1))
// console.log(sentance.startsWith("ello" ,4))


// includes() to check given word is present or not in string
// syntax :
// includes(searchString)
// includes(searchString, position)
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "fox";
// console.log(`the word "${word}" ${sentence.includes(word)  ? "is" : "is not"} present`);


// indexOf()  to searches this string and returns the index of the first occurrence of the specified substring
// syntax :
// indexOf(searchString)
// indexOf(searchString, position)
// const sentence = "The quick brown fox jumps over the lazy fox.";
// const word = "fox";
// console.log(`the word ${word} is at ${sentence.indexOf(word)}`);


// lastIndexOf()  to searches this string and returns the index of the last occurrence of the specified substring
// syntax :
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)
// const sentence = "The quick brown fox jumps over the lazy fox.";
// const word = "fox";
// console.log(`the word ${word} is at ${sentence.lastIndexOf(word)}`);


// padEnd()  pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.
// syntax: 
// padEnd(targetLength)
// padEnd(targetLength, padString)
// const word = "asdfg"
// console.log(word.padEnd(12 , "?."));
// const word2 = word.padEnd(12);
// console.log(word2.length);


// padStart()  pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the start of this string.
// syntax: 
// padStart(targetLength)
// padStart(targetLength, padString)
// const word = "asdfg"
// console.log(word.padStart(12 , "?."));
// const word2 = word.padStart(12);
// console.log(word2);
// console.log(word2.length);


// repeat() constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
// syntax :
// repeat(number)
// let word = "happy ";
// console.log(`i am feeling ${word.repeat(3)}`)


// replace() returns a new string with one, some, or all matches of a oldString replaced by a newString
// syntax :
// replace(oldString , newString)
// let sentance = "The quick brown fox jumps over the lazy fox.";
// console.log(sentance.replace("fox", "dog"));


// replaceAll() returns a new string with all matches of a pattern replaced by a replacement
// syntax :
// replaceAll(oldString , newString)
// let sentance = "The quick brown fox jumps over the lazy fox.";
// console.log(sentance.replaceAll("fox", "dog"));

// slice() extracts a section of this string and returns it as a new string, without modifying the original string.
// syntax : 
// slice(startIndex)
// slice(startIndex , endIndex)
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(31));
// console.log(str.slice(3,31));
// console.log(str.slice(31 , 3)); // not 
// console.log(str.slice(-3));
// console.log(str.slice(-9 ,-2));
// console.log(str.slice(-2 ,-9));  // not allowed

// substring() returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// syntax :
// subString(startIndex)
// subString(startIndex , endIndex)
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.substring(31));
// console.log(str.substring(3,31));
// console.log(str.substring(-3));
// console.log(str.substring(-3 ,-7)); //not
// console.log(str.substring(-7,-3)); // not
// console.log(str.substring(9 ,2));
// console.log(str.substring(2 ,9)); 


// substr() values returns a portion of this string, starting at the specified index and extending for a given number of characters afterwards.
// syntax :
// substr(Index , length)
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.substr(31));
// console.log(str.substr(3,7));
// console.log(str.substr(-3));
// console.log(str.substr(-3 ,1)); 


// split() takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// syntax :
// split(pattern)
// const str = "The quick brown fox jumps over the lazy dog.";
// let word = str.split(" ")
// console.log(word);


// toLowerCase returns this string converted to lower case
// syntax :
// toLowerCase()
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.toLowerCase());


// toUpperCase returns this string converted to upper case
// syntax :
// toUpperCase()
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.toUpperCase());


// toString() returns this string value.
// syntax :
// toString()
// let word = new String("ryef");
// console.log(word);
// let word2 = word.toString();
// console.log(word2);
 

// trim()  removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// syntax :
// trim()
//trimEnds() and trimStart()
// let word = "       yewld;uo    "
// console.log(word.trim())
// console.log(word.trimEnd())
// console.log(word.trimStart())


// valueOf()  returns this string value.
// let word = new String("utewk");
// console.log(word)
// console.log(word.valueOf())


// length to find length of string
// let word = "ewxsowgoepj'dxwg'"
// console.log(word.length)



