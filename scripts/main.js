// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

//shift images
// let myImage = document.querySelector('img');
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/Crash.jpg') {
//       myImage.setAttribute('src', 'images/科研联盟logo.png');
//     } else {
//       myImage.setAttribute('src', 'images/Crash.jpg');
//     }
// }

//input user name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        alert('error');
      setUserName();

    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '欢迎您,' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎您,' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }
