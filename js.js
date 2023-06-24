const para = document.querySelector('.para');
const quote = "This is a sample sentence in html"
const paraArr = quote.split(' ');

for(let i=0; i<paraArr.length;i++){
    para.innerHTML = `${para.innerHTML} <p id=${i}>${paraArr[i]}</p>`;
}
const parth = document.querySelector('#word0');
console.log(paraArr);