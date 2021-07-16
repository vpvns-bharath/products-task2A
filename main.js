var x=document.getElementById("menu-items");
x.style.maxHeight="0px";
function MenuToggle(){
    if(x.style.maxHeight=="0px")
    {
        x.style.maxHeight="200px";
    }
    else
    {
        x.style.maxHeight="0px";
    }
}

var btn=document.getElementsByClassName('btn');
var div=document.getElementsByClassName('details');

btn[0].addEventListener('click',()=>{
    if(div[0].style.display==='block')
    {
        div[0].style.display='none';
    }
    else{
        div[0].style.display='block';
    }
})

btn[1].addEventListener('click',()=>{
    if(div[1].style.display==='block')
    {
        div[1].style.display='none';
    }
    else{
        div[1].style.display='block';
    }
})

btn[2].addEventListener('click',()=>{
    if(div[2].style.display==='block')
    {
        div[2].style.display='none';
    }
    else{
        div[2].style.display='block';
    }
})

btn[3].addEventListener('click',()=>{
    if(div[3].style.display==='block')
    {
        div[3].style.display='none';
    }
    else{
        div[3].style.display='block';
    }
})

btn[4].addEventListener('click',()=>{
    if(div[4].style.display==='block')
    {
        div[4].style.display='none';
    }
    else{
        div[4].style.display='block';
    }
})

btn[5].addEventListener('click',()=>{
    if(div[5].style.display==='block')
    {
        div[5].style.display='none';
    }
    else{
        div[5].style.display='block';
    }
})

btn[6].addEventListener('click',()=>{
    if(div[6].style.display==='block')
    {
        div[6].style.display='none';
    }
    else{
        div[6].style.display='block';
    }
})

btn[7].addEventListener('click',()=>{
    if(div[7].style.display==='block')
    {
        div[7].style.display='none';
    }
    else{
        div[7].style.display='block';
    }
})

btn[8].addEventListener('click',()=>{
    if(div[8].style.display==='block')
    {
        div[8].style.display='none';
    }
    else{
        div[8].style.display='block';
    }
})