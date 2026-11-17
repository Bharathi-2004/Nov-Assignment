let inputs=document.getElementsByTagName("input")[0];

function updatestop(){
    
    console.log(inputs.value);

    let p = document.createElement("p");
    p.textContent = inputs.value;
    output.prepend(p);


}

function updatesbottom(){
    
    console.log(inputs.value);

    let p = document.createElement("p");
    p.innerText  = inputs.value;
    output.append(p);


}

output.addEventListener("dblclick", (e) => {
    const p = e.target.closest("p");
    if (p) p.remove();
});

output.addEventListener("click", (a) => {

    let p=
}   
