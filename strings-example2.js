    
    //Example 1
   //Split the string into the array of words
    let s="Hello World";
    let arr=s.split(" ");
    console.log(arr);

    //Find the last word in the array 
   //let lastword="Hello World";
   //let output=lastword.slice(6);
   console.log(arr[1]);


  //Calculate the length of the word 

   //let string="Hello World";
   console.log(arr[1].length);

    //Example: 2

    let sentence =" fly me to the moon ";
    let trimedSentence=sentence.trim();
    console.log(trimedSentence);

    let splitSentenced=trimedSentence.split(" ");
    console.log(splitSentenced);

    let lastWord=splitSentenced[splitSentenced.length-1]
    console.log(lastWord);
    console.log(lastWord.length);


    //Example: 3

    function isAnagram(str1, str2) {
        let formattedStr1 = format(str1);
        console.log("formattedStr1:" + formattedStr1);
        let formattedStr2 = format(str2);
        console.log("formattedStr2:" + formattedStr2);
        //comparing and return the result
        return formattedStr1===formattedStr2;
    }

    function format(str) {
        //sorting
        return str.toLowerCase().split('').sort().join('');
    }
    console.log("isAnagram: " + isAnagram("listen","silent"));
    console.log("isAnagram for Hello World: " + isAnagram("hello","world"));

