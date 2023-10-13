function  analyzeText (text) {

    const numCharacters  = text.length;
  
    const  numWords =  text.trim().split(/\s+/).length;

    const stop = /[.]/;
    const sentence = text.split(stop);
    const numSentence = sentence.length-1;

    return[ numCharacters,numWords,numSentence]

}

const [ numCharacters,numWords,numSentence] = analyzeText("The Sun. The Moon.");
 console.log("numCharacters:",numCharacters,"\n"," numWords:",numWords,"\n",
 
    "numSentence:" ,numSentence);













