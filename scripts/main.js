/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"; */
//   document.querySelector("html").textContent="aaaaa";


// myVariable
/* let myVariable = "Bob";
myVariable = "Steve"; */

// function
/* function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  alert(multiply(2,3)); */

  /* let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
} */

/*   document.querySelector("html").addEventListener("click",  ()=> {
    alert("Ouch! Stop poking me!");
  }); */
  

/*   const myImage = document.querySelector("img");

  // click change image
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}; */

//Adding a personalized welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
  
myButton.onclick = () => {
    setUserName();
  };
  
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

 
    