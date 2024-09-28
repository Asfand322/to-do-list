alert("helo")
function addlist() {
    document.getElementById('error').innerHTML="";

    let name=document.getElementById('name').value;
    if(name=='') {
        document.getElementById('error').innerHTML="please enter a value";
    }
    else {
       let box=document.getElementById('box');
       let li=document.createElement('li');
       li.textContent=name;
       let pos=box.firstElementChild;
       if(pos==null) {
        box.appendChild(li);
       }
       else {
        box.insertBefore(li,pos);
       }
       
    }
}