let r1=0;
let r2=0;
let r3=0;

function rotate1(){
    if(r1%2==0){
        console.log("hi");
        let box=document.getElementById("webtechskill")
        box.style.transform='rotateY(180deg)'
        box.style.transition="2s"
        let content=document.getElementById("webtechcontent")
        content.style.backgroundColor="lightblue"
        content.style.borderRadius="45px"
        content.innerHTML=`<div id="webcon">
        <h1 class="contentwb">Web Tech</h1>
        <ul class="contentwb">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TailwindCSS</li>
        </ul>
        </div>`
        let webcon=document.getElementById("webcon")
         webcon.style.transform='rotateY(180deg)'
            content.style.opacity="100%"
            content.style.transition="2s"
        r1++;
    }
    else{
        console.log("hi1");
        let box=document.getElementById("webtechskill")
        box.style.backgroundImage="./asset/react.jpg"
        box.style.transform='rotateY(0deg)'
        box.style.transition="2s"
        let content=document.getElementById("webtechcontent")
        content.style.backgroundColor="transparent"
        content.innerHTML=``
        content.style.transition="2s"
        r1++;
    }
}


function rotate2(){
    if(r1%2==0){
        console.log("hi2");
        let box=document.getElementById("javaskill")
        box.style.transform='rotateY(180deg)'
        box.style.transition="2s"
        let content=document.getElementById("javacontent")
        content.style.backgroundColor="lightblue"
        content.style.borderRadius="45px"
        content.innerHTML=`<div id="javacon">
        <h1 class="contentwb">JAVA</h1>
        <ul class="contentwb">
        <li>Java Basic</li>
        <li>OOPs concepts</li>
        <li>Exception and Handling</li>
        <li>Strings</li>
        </ul>
        </div>`
        let webcon=document.getElementById("javacon")
         webcon.style.transform='rotateY(180deg)'
            content.style.opacity="100%"
            content.style.transition="2s"
        r1++;
    }
    else{
        console.log("hi1");
        let box=document.getElementById("javaskill")
        box.style.backgroundImage="./asset/react.jpg"
        box.style.transform='rotateY(0deg)'
        box.style.transition="2s"
        let content=document.getElementById("javacontent")
        content.style.backgroundColor="transparent"
        content.innerHTML=``
        content.style.transition="2s"
        r1++;
    }
}

function rotate3(){
    if(r1%2==0){
        console.log("hi");
        let box=document.getElementById("frameworkskill")
        box.style.transform='rotateY(180deg)'
        box.style.transition="2s"
        let content=document.getElementById("frameworkcontent")
        content.style.backgroundColor="lightblue"
        content.style.borderRadius="45px"
        content.innerHTML=`<div id="frameworkcon">
        <h1 class="contentwb">Frameworks and Database</h1>
        <ul class="contentwb">
        <li>Hibernate</li>
        <li>Spring</li>
        <li>Spring Boot</li>
        <li>SQL</li>
        </ul>
        </div>`
        let webcon=document.getElementById("frameworkcon")
         webcon.style.transform='rotateY(180deg)'
            content.style.opacity="100%"
            content.style.transition="2s"
        r1++;
    }
    else{
        console.log("hi1");
        let box=document.getElementById("frameworkskill")
        box.style.backgroundImage="./asset/react.jpg"
        box.style.transform='rotateY(0deg)'
        box.style.transition="2s"
        let content=document.getElementById("frameworkcontent")
        content.style.backgroundColor="transparent"
        content.innerHTML=``
        content.style.transition="2s"
        r1++;
    }
}