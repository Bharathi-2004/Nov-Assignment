let sname=document.getElementById("name");
    let gmail=document.querySelector("#mail");
    let input1=document.querySelectorAll("input") [0];
    let input2=document.querySelectorAll("input") [1];
    let selects=document.getElementById("choice");

    function submits(event){
        event.preventDefault();
        if(sname.value.trim() !== "" && gmail.value.trim() !== "" && selects.value){
        let display=document.createElement("div")
        //display.style.border = "2px solid blue";
        display.style.borderRadius = "10px";
        display.style.padding="4px"
        display.style.width = "400px";
        display.style.margin = "10px";
        display.style.backgroundColor="MistyRose"
        display.innerHTML=`<h4>Student Details</h4>
        <p>Name: ${sname.value}</p>
        <p>Email: ${gmail.value}</p>
        <p>Department: ${selects.value}</p>`;
        console.log(sname.value,gmail.value,selects.value);
               document.getElementsByTagName("body")[0].appendChild(display);
        }else{
            let display1=document.createElement("div")
            display1.style.color = "red";
            display1.style.margin = "10px";
            display1.innerHTML=`<h4>Fulfill the all field...</h4>`
        document.getElementsByTagName("body")[0].appendChild(display1);
        }


input1.addEventListener("focus",function(){
            input1.style.border="2px solid red";

        })
    }

function displayvalue(){

    console.log(input1.value)
    let displayvalue=document.getElementById("namevalue");
    displayvalue.textContent=`Name:${input1.value}`;
    
}
function selectdepartment(){
    let selectvalue1=document.getElementById("selectvalue");
    console.log(selects.value);
    selectvalue1.textContent=`Department:${selects.value}`;
    
}















