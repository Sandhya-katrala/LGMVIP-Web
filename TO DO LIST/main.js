let addToDoButton=document.getElementById("add-To-Do");
let todocontainer=document.getElementById("todocontainer");
let inputField=document.getElementById("inputField");

addToDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraphstyle');
    paragraph.innerText=inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })

})
