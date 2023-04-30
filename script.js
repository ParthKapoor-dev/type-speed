const mainText = document.querySelector('.main-text');
const inputBtn = document.querySelector('.inputBtn');
const timer = document.querySelector('.timer');
const timerBox = document.querySelector('.timeTaken')
mainTextArray = mainText.innerHTML.split(' ');

let arr = [];
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
    if(j==0){
        startTime();
        console.log('Begin!!!!');
        j = 1;
    }
    if(event.data == ' '){
        while(i <= mainTextArray.length-1)
        {
            if(inputBtn.value == mainTextArray[i]+ ' '){
                // newWord = new RegExp(mainTextArray[i],'g');
                if(i !=mainTextArray.length-1){
                    x = mainTextArray[i] + ' ';
                }
                else{
                    x = mainTextArray[i];
                }
                let a=1;
                if(arr.forEach(ele=>{
                    ele == mainTextArray[i]
                })){
                    a++;
                }   
                arr.push(mainTextArray[i]);
                if(a!= 1)
                regexp = new RegExp(x + "(?:(?!" + x + ").){" + a + "}")
                else
                regexp = x;
                console.log(arr, a);

                mainText.innerHTML = mainText.innerHTML.replace(regexp,`<span class = 'highlighted'>${x}</span>`);
            
                element = document.querySelectorAll('.highlighted');
                element.forEach((ele)=>{
                    ele.style.backgroundColor = 'blue';
                    ele.style.color = 'white';
                })
                console.log(inputBtn.value);
                inputBtn.value = '';
                i++;
                
                if(i == mainTextArray.length){
                    timeTaken = endTime();
                    console.log(timeTaken);
                    timer.innerHTML = timeTaken;   
                    timerBox.style.display = 'block';

                }
            }
            break;
        }
    }
}

