/*function showContent(section){
    const contentDiv=document.querySelector("#tab1);
    if(section==="Tools"){
        contentDiv.innerHTML="Git, VS Code,, Canva."
    }
    else if(section==="Programming Languages"){
        contentDiv.innerHTML="C, Python, HTML, CSS, Javascript."
    }
    else if(section==="Soft Skills"){
        contentDiv.innerHTML="Leadership, Public Speaking, Time Management, Writing, Singing, Problem Solving, Communication, Teamwork."
    }
}*/
  /* document.addEventListener("DOMContentLoaded", () => {
    const toolsLink = [...document.querySelector("#tab1")].find(tab1 => tab1.textContent.trim() === "Tools");

    toolsLink.addEventListener("click", e => {
      e.preventDefault();

      let para = document.getElementById("tools-info");
      if (!para) {
        para = document.createElement("p");
        para.id = "tools-info";
        para.textContent = "Git, VS Code, Canva, etc.";
        toolsLink.parentNode.appendChild(para);
      } else {
        para.style.display = (para.style.display === "none") ? "block" : "none";
      }
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const plLink = [...document.querySelectorAll("a")].find(a => a.textContent.trim() === "Programming Lamnguages");

    plLink.addEventListener("click", e => {
      e.preventDefault();

      let para = document.getElementById("Programming Lannguages-info");
      if (!para) {
        para = document.createElement("p");
        para.id = "Programming Languages-info";
        para.textContent ="C, Python, HTML, CSS, Javascript";
        plLink.parentNode.appendChild(para);
      } else {
        para.style.display = (para.style.display === "none") ? "block" : "none";
      }
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const ssLink = [...document.querySelectorAll("a")].find(a => a.textContent.trim() === "Soft Skills");

    ssLink.addEventListener("click", e => {
      e.preventDefault();

      let para = document.getElementById("Soft Skills-info");
      if (!para) {
        para = document.createElement("p");
        para.id = "Soft Skills-info";
        para.textContent = "Leadership, Public Speaking, Time Management, Writing, Singing, Problem Solving, Communication, Teamwork.";
        toolsLink.parentNode.appendChild(para);
      } else {
        para.style.display = (para.style.display === "none") ? "block" : "none";
      }
    });
  });*/
  /*document.getElementById("tab1").onclick = function () {
    let para = document.getElementById("tab1-text");

   /* if (!para) {
      // Create the paragraph if it doesn't exist
      /*para = document.createElement("p");*/
      /*para.id = "tools-text";
      para.textContent = "Tools include Git, VS Code, Canva, etc.";
      this.parentNode.appendChild(para);*/
      // Toggle visibility
      /*if (para.style.display === "none") {
        para.style.display = "block";
      } else {
        para.style.display = "none";
      }*/


       document.querySelector("#tab1").onclick = function () {
    let para = document.getElementById("tools-text");

    if (!para) {
      para = document.createElement("p");
      para.id = "tools-text";
      para.textContent = "Tools include:Git, VS Code, Canva, etc.";
      this.parentNode.appendChild(para);
    } else {
      para.style.display = (para.style.display === "none") ? "block" : "none";
    }
  }; 
  document.querySelector("#tab2").onclick = function () {
    let para = document.getElementById("pl-text");

    if (!para) {
      para = document.createElement("p");
      para.id = "pl-text";
      para.textContent = "Programming Languages include:C, Python, HTML, CSS, Javascript";
      this.parentNode.appendChild(para);
    } else {
      para.style.display = (para.style.display === "none") ? "block" : "none";
    }
  };
  document.querySelector("#tab3").onclick = function () {
    let para = document.getElementById("sk-text");

    if (!para) {
      para = document.createElement("p");
      para.id = "sk-text";
      para.textContent = "Soft Skills include:Leadership, Public Speaking, Time Management, Writing, Singing, Problem Solving, Communication, Teamwork.";
      this.parentNode.appendChild(para);
    } else {
      para.style.display = (para.style.display === "none") ? "block" : "none";
    }
  };

