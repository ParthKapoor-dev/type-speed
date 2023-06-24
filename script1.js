const mainText = document.querySelector('.main-text');
const inputBtn = document.querySelector('.inputBtn');
const timer = document.querySelector('.timer');
const timerBox = document.querySelector('.timeTaken')

window.addEventListener('keydown', (event)=>{
    console.log(event.key)
    if(event.key == 'Enter' && event.key== 'Tab'){
        event.preventDefault();
        console.log("Hello THere Parth Babu")
    }
})

let startTime, endTime;
jassos = 0;
wordCount = 0;
letterCount = 0;
letterOfWordCount = 0;
correctWordCount = 0;
correctWordArray = [];
correctLetterArray = [];

const url ='https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'f910172880mshc445b1e925d5466p197cc4jsncc99e08c252a',
      'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
  };

fetch(url, options)
.then(response => response.json())
.then(data => {
    mainData = data[0].joke;
    mainDataLetterArray = mainData.split('');
    changedDataLetterArray = mainDataLetterArray.map((word, k) => `<span class="highlighted${k}">${word}</span>`);
    changedData = changedDataLetterArray.join('');
    mainText.innerHTML = changedData;

    mainDataArray = mainData.split(' ');

    noOfWords = mainDataArray.length;
    noOfLetters = mainDataLetterArray.length;
    for(let i = 0 ; i<= noOfWords-1;i++){
        correctWordArray[i] = 1;
    }
    for(let i = 0 ; i<=noOfLetters-1;i++){
        correctLetterArray[i] = 0;
    }

})



    mainData = "Hello There this is sample Text";
    mainDataLetterArray = mainData.split('');
    changedDataLetterArray = mainDataLetterArray.map((word, k) => `<span class="highlighted${k}">${word}</span>`);
    changedData = changedDataLetterArray.join('');
    mainText.innerHTML = changedData;

    mainDataArray = mainData.split(' ');

    noOfWords = mainDataArray.length;
    noOfLetters = mainDataLetterArray.length;
    console.log(mainText.innerHTML)
    for(let i = 0 ; i<= noOfWords-1;i++){
        correctWordArray[i] = 0;
    }
    for(let i = 0 ; i<=noOfLetters-1;i++){
        correctLetterArray[i] = 0;
    }



function start (){
    startTime = Date.now();
}

function end (){
    endTime = Date.now();
    totalTime = endTime - startTime;
    console.log(totalTime);
    return totalTime;
}

function theEnd(){
    console.log('----The ENd of line----');
    let timeTaken = end()/1000;
    let finalWordCount = 0;
    correctWordArray.forEach(data => {
        if(data != 0) finalWordCount++;
    })
    console.log('THis is the final word Count' + finalWordCount)
    console.log(timeTaken);
    wpm = Math.floor((finalWordCount/timeTaken)*60);
    timer.innerHTML = wpm;
    timerBox.style.display = 'block';
    console.log(correctWordArray);
}

function wordEnd(){
    console.log('word is finished');
    console.log(correctLetterArray);
    for(let i = letterCount - letterOfWordCount ;i < letterCount;i++){
        if(correctLetterArray[i]==1) {
            if(i == letterCount-1) correctWordArray[wordCount]++;
        }else break;
    }console.log(correctWordArray[wordCount]);
    letterOfWordCount = 0;
    noOfOldLetters = mainDataArray[wordCount].length;
    startingPointOfWord = letterCount - noOfOldLetters-1;
    console.log(startingPointOfWord)
    wordCount++;
}


inputBtn.oninput = function (event){
    event.preventDefault();
    if(jassos == 0){
        console.log('Begin!!!');
        jassos = 1;
        element = document.querySelector(`.highlighted0`);
        element.style.color = 'blue';
        start();
    }

   while(wordCount <= noOfWords)
   {
    theWord = mainDataArray[wordCount];
    theWord =  theWord + ' ';
    noOfLettersOfWord = theWord.length;
    while(letterOfWordCount <= theWord.length)
    {
        theLetter = theWord[letterOfWordCount];
        console.log(theWord + ' ' + theLetter);
        if(inputBtn.value[letterCount] == theLetter)
        {
            console.log("****Correct letter:  " + theLetter);
            element = document.querySelector(`.highlighted${letterCount}`);
            element.style.color = 'blue';
            element.style.weight = 'bold';
            correctLetterArray[letterCount] = 1;
            letterCount++;
            letterOfWordCount++;
            
            if(letterOfWordCount == theWord.length )
            {
                
                wordEnd()

            }
            if(wordCount == (mainDataArray.length-1) && letterOfWordCount == (theWord.length-1))
            {
                wordEnd();
                theEnd();
            }
        }
        else if(event.inputType == 'deleteContentBackward')
        {
            console.log('this is a backspace ' + letterOfWordCount);
            letterCount--;
            if(letterOfWordCount == 0){
                wordCount--;
                letterOfWordCount = mainDataArray[wordCount].length;
            }else
            letterOfWordCount--;
            element = document.querySelector(`.highlighted${letterCount}`);
            element.style.color = 'grey';
            // letterCheckArray[letterOfWordCount] = 0;
        }
        else
        {
            console.log(event);
            element = document.querySelector(`.highlighted${letterCount}`);
            element.style.color = 'red';
            letterCount++;
            letterOfWordCount++;

            if(letterOfWordCount == theWord.length)
            {
                console.log('word is finished')
                letterOfWordCount = 0;
                wordCount++;
            }
            if(wordCount == (mainDataArray.length-1) && letterOfWordCount == (theWord.length-1))
            {
                theEnd();
            }
        }
        break;
    }
    break;
   }
}