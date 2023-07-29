let colorDivEle=document.getElementById("colorid");



let list_a=["FFFFFF","C2E3FF","008CFF","003F73"]

for (let eachItem of list_a){
    let innerdivEle=document.createElement("div");
    innerdivEle.classList.add("inner-list");
    let boxEle = document.createElement("div");
    boxEle.classList.add("box");
    boxEle.style.backgroundColor="#"+eachItem;
    innerdivEle.appendChild(boxEle);
    let colorEle= document.createElement("p");
    colorEle.textContent=eachItem;
    colorEle.classList.add("inner-text");
    innerdivEle.appendChild(colorEle);
    let percentEle = document.createElement("p");
    percentEle.textContent="100%";
    percentEle.classList.add("inner-text");
    innerdivEle.appendChild(percentEle);
    colorDivEle.appendChild(innerdivEle);
}

let formElement = document.getElementById("formId");
let maxIdEle = document.getElementById("maxId");
let inputIdEle = document.getElementById("inputId");

maxIdEle.addEventListener("keydown",function(event){
    if (event.key == "Enter"){
        inputValue = parseInt(inputIdEle.value);
        maxValue = parseInt(maxIdEle.value);
        if (maxValue < inputValue){
            alert("input value is greater than max value");
        }
        else{
            colorValue=Math.round((inputValue/maxValue)*100)
            let resultElement = document.getElementById("resultId");
            let headingElement = document.createElement("h1");
            headingElement.textContent="Graphs";
            headingElement.classList.add("graphText-style")
            resultElement.appendChild(headingElement);

            let graphdivEle = document.createElement("div");
            graphdivEle.classList.add("resultDiv-styles")       
            resultElement.appendChild(graphdivEle);
            
            let level1Ele = document.createElement("div");
            graphdivEle.appendChild(level1Ele);
            level1Ele.classList.add("l1div-style");

            let l1boxEle = document.createElement("div");
            level1Ele.appendChild(l1boxEle);
            l1boxEle.classList.add("l1box-styles");
            
            let colorFillEle = document.createElement("div");
            l1boxEle.appendChild(colorFillEle);
            colorFillEle.style.width="100%";
            colorFillEle.style.height=colorValue+"%";
            colorFillEle.style.backgroundColor="#008CFF";

            let percentTextEle = document.createElement("p");
            level1Ele.appendChild(percentTextEle);
            percentTextEle.textContent=colorValue+"%"
            percentTextEle.classList.add("text-styles");

            let l1textEle = document.createElement("p");
            l1textEle.textContent = "Level 1";
            level1Ele.appendChild(l1textEle);
            l1textEle.classList.add("l1text-styles");

            let level2Ele = document.createElement("div");
            graphdivEle.appendChild(level2Ele);
            level2Ele.classList.add("l2div-styles");

            let l2boxEle = document.createElement("div");
            level2Ele.appendChild(l2boxEle);
            l2boxEle.classList.add("l2box-styles");

            let colorFill2Ele = document.createElement("div");
            l2boxEle.appendChild(colorFill2Ele);
            colorFill2Ele.classList.add("l2c-styles")
            colorFill2Ele.style.width="275px";
            colorFill2Ele.style.height="275px";
            colorFill2Ele.style.borderRadius="275px";
            let degvalue = Math.round((colorValue/100)*360);
            console.log(degvalue)
            console.log(360-degvalue)
            colorFill2Ele.style.backgroundImage="conic-gradient(from 90deg, #008CFF "+degvalue+"deg, transparent "+parseInt(360-degvalue)+"deg)";
            
            let percent2Ele = document.createElement("p");
            percent2Ele.textContent=colorValue+"%";
            colorFill2Ele.appendChild(percent2Ele);
            percent2Ele.classList.add("percet2-styles");

            let l2textEle = document.createElement("h1");
            level2Ele.appendChild(l2textEle);
            l2textEle.textContent="Level 2";
            l2textEle.classList.add("l2text-styles");

            let level3Ele = document.createElement("div");
            graphdivEle.appendChild(level3Ele);
            level3Ele.classList.add("l2div-styles");

            let l3boxEle = document.createElement("div");
            level3Ele.appendChild(l3boxEle);
            l3boxEle.classList.add("l3box-styles");

            l3boxEle.style.backgroundImage ="linear-gradient(to top, #008CFF "+parseInt(100-colorValue)+"%,"+" #C2E3FF)"; 

            let per3Ele = document.createElement("p");
            level3Ele.appendChild(per3Ele);
            per3Ele.classList.add("text-styles");
            per3Ele.textContent=colorValue+"%";

            let l3textEle = document.createElement("h1");
            level3Ele.appendChild(l3textEle);
            l3textEle.textContent="Level 3";
            l3textEle.classList.add("l1text-styles");
        }
    }
});