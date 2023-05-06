// NOTES -> 
// add speed for individual words and the whole para
// error given by user 
// number of words that is required by the user





const mainText = document.querySelector('.main-text');
const inputBtn = document.querySelector('.inputBtn');
const timer = document.querySelector('.timer');
const timerBox = document.querySelector('.timeTaken')

const url ='https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'f910172880mshc445b1e925d5466p197cc4jsncc99e08c252a',
      'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
  };
  
fetch(url,options)
.then(response => response.json())
.then(data=> {
    const quoteArray = data[0].joke.split(' ');
    const newQuoteArray = quoteArray.map((word ,k)=> `<span class='highlighted${k}'>${word}</span>`);
    const newQuote = newQuoteArray.join(' ');
    mainText.innerHTML = newQuote;
    mainTextArray = quoteArray;
    wordCount = mainTextArray.length;
});
//changing the span of every element in the mainText. so that we can manipulate its style easily 

let i =0 , j=0;
var start , end;
function startTime(){
    start = new Date();
}
function endTime(){
    end = new Date();
    timeDiff = end - start;
    timeDiff /= 1000;
    return timeDiff;
}

inputBtn.oninput = function(event){
//this function works whenever data inside the inputBtn changes
    if(j==0){
        startTime();
        console.log('Begin!!!!');
        firstWord = document.querySelector(`.highlighted0`);
        firstWord.style.color= 'blue';
        firstWord.style.fontWeight= 'der';
        j = 1;
    } // To check if the typing has beginned!! & change the style of first word
    if(event.data == ' '){ // to check when space button is pressed
        while(i <= mainTextArray.length-1)
        {
            console.log('over here');
            if(inputBtn.value == mainTextArray[i]+ ' '){
                //to change the color of correct written value
                ele = document.querySelector(`.highlighted${i}`);        
                ele.style.color = 'black';
                ele.style.fontWeight = 'lighter ';
                //to change the font style of correctly written elment

                wordToWrite = document.querySelector(`.highlighted${i+1}`);
                if(wordToWrite){
                    wordToWrite.style.color= 'blue';
                    wordToWrite.style.fontWeight= 'bolder';
                console.log(inputBtn.value);
                }//to change the font style of the next element 
                
                inputBtn.value = '';
                i++;
                
                if(i == mainTextArray.length){
                    timeTaken = endTime();
                    console.log(timeTaken);
                    wpm = Math.floor((wordCount / timeTaken)*60);
                    timer.innerHTML = wpm;   
                    timerBox.style.display = 'block';
                    // when the last word is written correctly 
                }
            }   
            break;
        }
    }
}

