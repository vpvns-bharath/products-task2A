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

