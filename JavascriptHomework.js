// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    let f1=1;
    let f2=1;
    let fi;
    let i;
    for(i=3; i <= n; i++){
        fi=f1+f2;
        f1=f2;
        f2=fi;
    }
    return fi;
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    let i;
    for(i=0; i < numArray.length; i++){
        let j=0;
        for(j=0; j < numArray.length; j++){
            if(numArray[j] > numArray[j+1]){
                let temp=numArray[j];
                numArray[j]=numArray[j+1];
                numArray[j+1]=temp;
            }
        }
    }
    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseString(someStr){
    let reversed="";
    let i;
    for(i=someStr.length-1; i >= 0; i--){
        reversed+=someStr[i];
    }
    return reversed;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if(someNum===1){
        return 1;
    }
    else{
        return someNum*factorial(someNum-1);
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset){
    if(length >= 0 && offset >=0 && offset+length < someStr.length){
        return someStr.substring(offset, offset+length+1);
    }
    else if (length < 0 || offset < 0){
        console.log(`Offset and length must be greater than or equal to 0.`);
    }
    else{
        console.log(`Offset+length must be strictly less than ${someStr.length}`);
    }
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    while(someNum > 0){
        someNum-=2;
    }
    if(someNum){
        return false;
    }
    return true;
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let regExp=/[-()&$@!+|?"':,./ ]/g;
    s=someStr.replace(regExp, '').toLowerCase();
    let i;
    for(i=0; i < Math.floor(s.length/2); i++){
        if(s[i]!==s[s.length-i-1]){
            return false;
        }
    }
    return true;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    switch(shape){
        case 'Square':
            let square='';
            let i;
            for(i=0; i < height; i++){
                let row='';
                let j;
                for(j=0; j < height; j++){
                    row+=character
                };
                row+='\n';
                square+=row;
            };
            console.log(square);
            break;
        case 'Triangle':
            let triangle='';
            let k;
            for(k=1; k <= height; k++){
                let j;
                for(j=1; j <= k; j++){
                    triangle+=character;
                }
                triangle+='\n';
            }
            console.log(triangle);
            break;
        case 'Diamond':
            let diamond='\n';
            let p;
            let mid=Math.floor((height-1)/2)
            let leftBorder=mid-1;
            let rightBorder=mid+1;
            for(p=0; p < height; p++){
                let j;
                for(j=0; j < height; j++){
                    if(j <= leftBorder || rightBorder <= j){
                        diamond+=` `;
                    }
                    else{
                        diamond+=character;
                    }
                }
                diamond+='\n';
                if(p < mid){
                    leftBorder--;
                    rightBorder++;
                }
                else if(p >= mid){
                    leftBorder++;
                    rightBorder--;
                }
            }
            console.log(diamond);
            break;
            
            
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){

    Object.keys(someObj).forEach(element => {
        console.log(`Property: ${element} and corresponding Value: ${someObj[element]}`);
    });

}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    someArr[2]=undefined;
    console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr);
    someArr.splice(2, 1);
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age){
    this.name=name,
    this.age=age
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age){
    let person={
        name:name,
        age:age
    }
    return person;
}
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA(){

    let spans=Array.from(document.getElementsByTagName('span'));
    for(let i=0; i < spans.length; i++){
        if(spans[i].innerText==='USA'){
            console.log(spans[i].innerHTML);
        }
    }
   
}
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let employeeNames=Array.from(document.getElementsByClassName('empName'));
    for(let i=0; i < employeeNames.length; i++){
        if(employeeNames[i].nextElementSibling.innerHTML==='Sales'){
            console.log(employeeNames[i].innerHTML);
        }
    }
}
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let anchors=Array.from(document.getElementsByTagName('a'));
    for(let i=0; i < anchors.length; i++){
        let children=Array.from(anchors[i].children);
        for(let j=0; j < children.length; j++){
            if(children[j].matches('span')){
                console.log(children[j].innerHTML);
            }
        }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    let skills=Array.from(document.getElementsByName('skills'));
    let children=Array.from(skills[0].children);
    for(let i=0; i < children.length; i++){
        if(children[i].matches('option')){
            console.log(`Value: ${children[i].getAttribute('value')}`);
            console.log(`Contents: ${children[i].innerHTML}`);
        }
    }
}
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute(){
    let data=Array.from(document.querySelectorAll('[data-customAttr]'));
    for(let i=0; i < data.length; i++){
        console.log(`Value of attribute: ${data[i].getAttribute('data-customAttr')}`);
        console.log(`Element: ${data[i].tagName}`)
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function Sum(){
    let in1=document.getElementById('num1');
    let in2=document.getElementById('num2');
    let sum=document.getElementById('sum');
    let both=parseFloat(in1.value)+parseFloat(in2.value);
    if(both){
        sum.innerText=both;
    }
    else if(both===0){
        sum.innerText=both;
    }
    else{
        sum.innerText='Cannot add';
    }
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function areYouSure(){
    let skills=Array.from(document.getElementsByName('skills'))[0];
    if(skills.value==='css'){
        alert('Are you sure CSS is one of your skills?');
    }
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let favorite=Array.from(document.getElementsByName('favoriteColor'));
for(let i=0; i < favorite.length; i++){
    favorite[i].addEventListener("click", colorChanged);
}
let oldColor;
let newColor;
function colorChanged(event){
    let ele=document.elementFromPoint(event.clientX, event.clientY);
    oldColor=newColor;
    newColor=ele.getAttribute('value');
    if(oldColor!==undefined){
        alert(`So you like ${newColor} more than ${oldColor} now?`);
        ele.style.backgroundColor=newColor;
    }
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
let employees=Array.from(document.getElementsByClassName('empName'));
for(let i=0; i < employees.length; i++){
    employees[i].addEventListener("mouseover", hover(employees[i]));
}
function hover(ele){
    return () => {
        if(ele.style.opacity==0){
            ele.style.opacity=100;
        }
        else{
            ele.style.opacity=0;
        }
    }
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime(){
    let h5=document.getElementById('currentTime');
    let time=new Date();
    let hr=time.getHours()%12;
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let amPm=(time.getHours() <= 12)? 'AM':'PM';
    h5.innerText=`${hr}:${min}:${sec}`;
    setInterval(currentTime, 1000);
}
currentTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function hello(){
    let helloWorld=document.getElementById('helloWorld');
    setTimeout(() => {
        let colors=['blue', 'red', 'green', 'purple', 'yellow', 'red', 'orange', 'black', 'gray'];
        let ind=Math.floor(Math.random()*colors.length);
        helloWorld.style.color=colors[ind];
    }, 3000);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function func(node){
    let child=node.firstChild;
    walkTheDOM(child, func);
}
function walkTheDOM(node, func){
    console.log(node);
    let child=node.firstChild;
    let sibling=node.nextSibling;
    if(child || sibling){
        if(child){
            func(node);
        }
        if(sibling){
            walkTheDOM(sibling, func);
        }
    }
}
let root=document.getElementsByTagName('html').item(0);
walkTheDOM(root, func);


