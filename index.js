var formElement = document.querySelector('form');
var result = document.querySelector('.result');

formElement.onsubmit = function (e){
    e.preventDefault();
    if(e.target.elements[1].value=='dollar')
    {
        //console.log (e.target.elements[1].value)
        result.innerHTML= ((e.target.elements[0].value)*0.27);
    }
     else if(e.target.elements[1].value=='dinar')
     {
        //console.log (e.target.elements[1].value)
        result.innerHTML= ((e.target.elements[0].value)*0.19);
     }
     else if(e.target.elements[1].value=='nis')
     {
        //console.log (e.target.elements[1].value)
        result.innerHTML= ((e.target.elements[0].value)*1);
     } 
}
