const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL ="http://api.exchangeratesapi.io/v1/latest?access_key=aaae82bf05a5aaf80d850acd0888853f";
let html = '';
 
async function rates(){
    const res = await fetch(API_URL);
    const data = await res.json();
   
    const arrkeys = Object.keys(data.rates);
  const rate = data.rates;
  //console.log(rate)
    //console.log(arrkeys)
    arrkeys.map(item =>{
        return html += `<option value=${item}>${item}</option>`
    });
    //console.log(html);
    for(let i=0;i<select.length;i++){
        select[i].innerHTML = html;
    };
    input[0].addEventListener('keyup',()=>{
        input[1].value = input[0].value * rate[select[1].value]/ rate[select[0].value];
    });
    input[1].addEventListener('keyup',()=>{
        input[0].value = input[1].value * rate[select[0].value]/ rate[select[1].value];
    });
    select[0].addEventListener('change',()=>{
        input[1].value = input[0].value * rate[select[1].value]/ rate[select[0].value];
    });
    select[1].addEventListener('change',()=>{
        input[0].value = input[1].value * rate[select[0].value]/ rate[select[1].value];
    });
 }
 rates();