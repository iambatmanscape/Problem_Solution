function longestWordWithVowels(str) {
    function vowelLength(word) {
      const vowel='aeiouAEIOU';
      let count=0;
      for(const char of word) {
         if(vowel.includes(char)) {
            count++;
         }
      }
      return count;
    }
    const regex = /[^A-Za-z\s]+/gi;
    const formattedStr = str.replaceAll(regex, '');
    
    const maxWords = [];
    let maxLen = 0;
    const arr = formattedStr.split(' ');
    
    arr.forEach((n, i) => {
      const wordLength = n.length;
      
      if (wordLength === maxLen) {
        maxWords.push(n);
      } else if (wordLength > maxLen) {
        maxLen = wordLength;
        maxWords.length = 0;
        maxWords.push(n);
      }
    });
    
  if(maxWords.length===1) {
    return maxWords[0];
  } else {
    let wordWithMostVowels = maxWords[0];
    let maxVowelCount = vowelLength(maxWords[0]);
  
    for (let i = 1; i < maxWords.length; i++) {
      const currentWord = maxWords[i];
      const currentVowelCount = vowelLength(currentWord);
  
      if (currentVowelCount > maxVowelCount) {
        wordWithMostVowels = currentWord;
        maxVowelCount = currentVowelCount;
      }
  }
  return wordWithMostVowels;
    
}
}
console.log(longestWordWithVowels('The sun set behind the mountains, casting a warm orange glow across the tranquil lake.'))
console.log(longestWordWithVowels("What is the meaning of eulogia?"));
console.log(longestWordWithVowels("After a long day at work, she curled up on the couch with a good book and a cup of tea."));
