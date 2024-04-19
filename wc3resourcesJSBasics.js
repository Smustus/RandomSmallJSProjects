  //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
  
  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value); //returns the index of first occurance of value in the array and store it in variable index
    console.log(index);
    
    arr.splice(index, 1);
    
    return arr;
  }
  
  function removeItemAll(arr, value) {
    var i = 0;    //Make a variable and set to 0 to start while loop from first value in array.
    while (i < arr.length) {
      if (arr[i] === value) { //if array value is the same as parameter, splice it from array. Otherwise grab next value in array
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  //Usage
  console.log(removeItemOnce([2,2,5,9,1,5,8,5], 5))
  console.log(removeItemAll([2,5,9,1,5,8,5], 5))
  
  
    //1. Write a JavaScript program to display the current day and time in the following format.  ----------------------------------
    //    Sample Output : Today is : Tuesday.
    //    Current time is : 10 PM : 30 : 38
  
      var today = new Date(); //new makes it into an object, otherwise Date() is a string
      console.log(today);
      console.log(typeof today);
  
      let day = today.getDay(); //Get current day as a number, 0 = sunday, 6 = saturday
      console.log(day);
      console.log(typeof day);
      
      const dayArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday',]
      const dayOfWeek = dayArray[day];
      console.log(dayOfWeek);
  
      const hour = today.getHours();   //gets current hours
      console.log(hour);
  
      const minutes = today.getMinutes();  //gets current minutes of the hour
      console.log(minutes);
  
      const seconds = today.getSeconds();  //get current seconds of the minute
      console.log(seconds);
  
      // const AMPM = hour < 12 ? 'AM' : 'PM';  //Instead of a function you can make a if hour below 12 = AM, else PM
  
      function AmPm() {
        if (hour < 12){
          return 'AM'
        } else {
          return 'PM'
        }
      }
  
      console.log(`Today is: ${dayOfWeek}. \nCurrent time is : ${hour} : ${minutes} : ${seconds} ${AmPm()}`)
  //------------------------------------------------------------------------------------------------------------------------------
  
  //3. Write a JavaScript program to get the current date.  
  //Expected Output :
  //mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
  
      function getCurrentDate(){
        const month = today.getMonth();
        const formattedMonth = month < 10 ? `0${month}` : month.toString();
        console.log(month);
        
        const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December']
        console.log(monthList[month]);
  
        const date = today.getDate();
        console.log(date);
        const formattedDate = date < 10 ? `0${date}` : date;  //addint toString() makes it into a string otherwise its a number
        
        const year = today.getFullYear();
        console.log(year);
  
        const currentDate = `${formattedMonth}-${formattedDate}-${year}`
  
        console.log(currentDate);
      }
      getCurrentDate();
  
  
  //4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
  //Herons formula:  Area = SquareRoot( s*((s-a)*(s-b)*(s-c)) ),  s = 1/2 (a+b+c)
      const side1 = 5;
      const side2 = 6;
      const side3 = 7;
      const semi = 0.5*(side1+side2+side3);
      console.log(semi);
      const area = Math.sqrt( semi*((semi-side1)*(semi-side2)*(semi-side3)) );
      console.log(area);
  //----------------------------------------------------------------------------------------------------------------------------------------------------    
  
  //5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
  //This is done by periodically removing one letter from the string end and attaching it to the front.  
      
      function rotate(par){
        var rotate = document.getElementById('#rotateDiv');
        
        var textNode = rotate.childNodes[0]; //Retrieves the first child node of the rotate element. This assumes that the element has at least one child node. The childNodes[0] property accesses the first child node, and it is assumed to be a text node containing the text to rotate
        var text = textNode.data  // The code then extracts the text content from the textNode using the data property. The data property represents the content of the text node.
        console.log(text);
  
        setInterval(() => {
          text = text[text.length -1] + text.substring(0, text.length -1);  //  It assigns a new value to text by taking the last character (text[text.length -1]) and appending it to the beginning of the string (text.substring(0, text.length -1))
          textNode.data = text;
          console.log(text);
        }, 100000);
            }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------
  
  //6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
  //Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is
    
    const is_leapyear = (year) => {
      return new Date(year, 1, 29).getMonth() === 1;  
                                                       //  Use new Date(), setting the date to February 29th of the given year.
                                                       //  Use Date.prototype.getMonth() to check if the month is equal to 1.
  
    }
  
    console.log(is_leapyear(2016));
    console.log(is_leapyear(2000));
    console.log(is_leapyear(1700));
    
  
    const is_leapyears = (year) => {
        return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;  //      The condition being evaluated is year % 100 === 0. This checks if the year is divisible evenly by 100, i.e., if it  is a multiple of 100.
                                                                              // If the condition is true (the year is a multiple of 100), the expression evaluates to year % 400 === 0. This checks if the year is also divisible evenly by 400.
                                                                              //If the condition is false (the year is not a multiple of 100), the expression evaluates to year % 4 === 0. This checks if the year is divisible evenly by 4.
    }
    console.log(is_leapyears(2016));
    console.log(is_leapyears(2000));
    console.log(is_leapyears(1700));
    console.log(is_leapyears(2028));
    
    
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
    for (let years = 2014; years <= 2050; years++){
      if (new Date(years, 0, 1).getDay() === 0){
        console.log("1st January is being a Sunday  "+years);
      }
    }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 
  
  
      const playerInput = document.createElement('input');
      playerInput.type = 'number';
      playerInput.max = '10';
      playerInput.min = '0';
      document.body.appendChild(playerInput);
      playerInput.classList.add('input');
  
      const inputBtn = document.createElement('button');
      inputBtn.textContent = 'Guess';
      document.body.appendChild(inputBtn);
      inputBtn.addEventListener('click', guessInteger);
  
      
  
    function guessInteger(){
      const playerInt = Number(playerInput.value);
      console.log(playerInt);
  
      const randomInt = Math.floor(Math.random()*11);  //Return random integer between 0-1, multiplied with 10 and avrundat neråt
      console.log(randomInt);
      
      if (randomInt === playerInt){
        console.log('Good work, its a match')
      } else {
        console.log(`Not matched, try again. Number was ${randomInt}`);
      }
    }
  
    //--------------------------------------------------------------------------------------------------------------------------------------------------------
    
    function myFunction() {
    let text;
    //let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
    switch(favDrink) {
      case "Coca-Cola":
        text = "Excellent choice. Coca-Cola is good for your soul.";
        break;
      case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
      case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
      default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
  }
  
    //------------------------------------------------------------------------------------------------------------------------------------------------------
  
    //9. Write a JavaScript program to calculate the days left before Christmas.  
  
    const currentDate = new Date();
    console.log(currentDate);
    
    const christmas = new Date(currentDate.getFullYear(), 11, 24);
  
    console.log(christmas);
  
    const daysToChristmasInMs = christmas - currentDate;
    console.log(daysToChristmasInMs);
    
    const daysToChristmas = daysToChristmasInMs/1000/60/60/24;
    console.log(`It is ${Math.floor(daysToChristmas)} days to christmas`);
  
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  
    //10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
  
      const calcBox = document.createElement('div');
      calcBox.style.marginTop = '15px';
      calcBox.style.width = '270px';
      calcBox.style.height = '150px';
      calcBox.style.border = '2px solid black';
      calcBox.style.borderRadius = '5px';
      calcBox.style.padding = '2px';
      document.body.appendChild(calcBox);
     
      const form = document.createElement('form');
      form.style.margin = '2px';
      form.addEventListener('submit', (e) => e.preventDefault()); //Prevents the default form submission behavior, ensuring that the result remains displayed on the page after clicking the Multiply or Divide buttons.
      calcBox.appendChild(form);
  
      const pCalc = document.createElement('p')
      pCalc.textContent = 'Muliply or Divide numbers'
      form.appendChild(pCalc);
  
      const firstNumberLabel = document.createElement('label');
      firstNumberLabel.textContent = 'Add 1st number:';
      firstNumberLabel.setAttribute('for', 'firstNumber');
      firstNumberLabel.style.marginRight = '6px';
      form.appendChild(firstNumberLabel);
  
      const firstNumberInput = document.createElement('input');
      firstNumberInput.id = 'firstNumber';
      firstNumberInput.type = 'number';
      form.appendChild(firstNumberInput);
  
      const secondNumberLabel = document.createElement('label');
      secondNumberLabel.textContent = 'Add 2nd number:';
      secondNumberLabel.setAttribute('for', 'secondNumber');
      secondNumberLabel.style.marginRight = '1px';
      form.appendChild(secondNumberLabel);
      
      const secondNumberInput = document.createElement('input');
      secondNumberInput.id = "secondNumber";
      secondNumberInput.type = 'number';
      form.appendChild(secondNumberInput);
  
      const multiplyBtn = document.createElement('button');
      multiplyBtn.textContent = 'Multiply';
      form.appendChild(multiplyBtn);
      multiplyBtn.addEventListener('click', () => {
        resultDiv.textContent = 'Result is: ' + firstNumberInput.value * secondNumberInput.value;
      });
  
  
      const divideBtn = document.createElement('button');
      divideBtn.textContent = 'Divide';
      form.appendChild(divideBtn);
      divideBtn.addEventListener('click', () => {
        resultDiv.innerHTML = 'Result is: ' + firstNumberInput.value / secondNumberInput.value;
      });
  
      const resultDiv = document.createElement('div');
      resultDiv.style.marginTop = '8px';
      resultDiv.style.marginLeft = '6px';
      form.appendChild(resultDiv);
  
    //---------------------------------------------------------------------------------------------------------------------------
      /*
      const calcBox = document.createElement('div');
  calcBox.style.marginTop = '15px';
  calcBox.style.width = '270px';
  calcBox.style.height = '150px';
  calcBox.style.border = '2px solid black';
  calcBox.style.borderRadius = '5px';
  calcBox.style.padding = '2px';
  document.body.appendChild(calcBox);
  
  const form = document.createElement('form');
  form.style.margin = '2px';
  calcBox.appendChild(form);
  
  const pCalc = document.createElement('p');
  pCalc.textContent = 'Multiply or Divide numbers';
  form.appendChild(pCalc);
  
  function createInputLabel(id, labelText) {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', id);
    label.style.marginRight = '6px';
    return label;
  }
  
  function createInput(id, type) {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    return input;
  }
  
  function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
  }
  
  const firstNumberLabel = createInputLabel('firstNumber', 'Add 1st number:');
  const firstNumberInput = createInput('firstNumber', 'number');
  form.appendChild(firstNumberLabel);
  form.appendChild(firstNumberInput);
  
  const secondNumberLabel = createInputLabel('secondNumber', 'Add 2nd number:');
  const secondNumberInput = createInput('secondNumber', 'number');
  form.appendChild(secondNumberLabel);
  form.appendChild(secondNumberInput);
  
  const multiplyBtn = createButton('Multiply', () => {
    resultDiv.textContent = parseInt(firstNumberInput.value) * parseInt(secondNumberInput.value);
  });
  form.appendChild(multiplyBtn);
  
  const divideBtn = createButton('Divide', () => {
    resultDiv.innerHTML = firstNumberInput.value / secondNumberInput.value;
  });
  form.appendChild(divideBtn);
  
  const resultDiv = document.createElement('div');
  resultDiv.style.marginTop = '8px';
  resultDiv.style.marginLeft = '6px';
  form.appendChild(resultDiv);
  */
  //------------------------------------------------------------------------------------------------------------------------------
  //11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
  //[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
  //Expected Output :
  //60°C is 140 °F
  //45°F is 7.222222222222222°C 
  
    const temperature = (degrees, param) => {
      if (param === 'F') {
        return  5 * (degrees-32) / 9
      } else if (param === 'C') {
        return (9 * degrees + (32 * 5)) / 5
      }
    }
  
    console.log(temperature(60, 'C'))
    console.log(temperature(45, 'F'))
  
  //-------------------------------------------------------------------------------------------------------------------------------
    const str = 'Hello';
    function solution(str){
      if (str.length === 0) return "";
  
      return str[str.length -1] + solution(str.slice(0, str.length -1))
    }
    console.log(solution(str));
    
  
  
    function factorial(n) {
      if (n == 0){
          return 1
      } else { 
        return n * factorial(n - 1)
      }}
      console.log(factorial(3)); //Expected output 6, 3! = 3*2 = 3*n-1 * n-2 * 1 = 6. !5 = 5*4 * 3 * 2 * 1 * 1 = 120. n(n-1)(n-2)(n-3)
    //----------------------------------------------------------------------------------------------------------------------------------
  
    function Person(name) {
    this.name = name;
  }
  
  const john = new Person("John");
  console.log(john.name);
  
  //------------------------------------------------------------------------------------------------------------------------------------
  
  // 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
  
    function sum(int1, int2) {
      if (int1 == int2) {
        return ((int1 + int2) * 3)
      } else {
        return (int1 + int2);
      }
    }
    console.log(sum(2, 2)); //expected 12
    console.log(sum(1, 2)); //expected 3
  
  //--------------------------------------------------------------------------------------------------------------------------------------
  
  //17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.   
  
  function sum2(int1) {
      if (int1 > 19) {
        return ((int1 - 19) * 3)
      } else {
        return (19 - int1);
      }
    }
    console.log(sum2(1)); //expected 18
    console.log(sum2(21)); //expected 6
  
  //---------------------------------------------------------------------------------------------------------------------------------------
  
  //18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
  
    function pair50(nr1, nr2){
      if(nr1 === 50 || nr2 === 50 || (nr1 + nr2 === 50) ){
        return true;
      } else {
        return false;
      }
    }
    console.log(pair50(1, 5)); //expected false
    console.log(pair50(55, 50)); //expected true
  
  //---------------------------------------------------------------------------------------------------------------------------------------
  
  //19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  (20+- än 100 eller 400)
  
    function testInt(nr){
      return ((Math.abs(100-nr) <= 20) || (Math.abs(400-nr) <= 20));  //if difference is greater then 20, return false
    }
  
    console.log(testInt(5)); //expected false
    console.log(testInt(85)); //expected true
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  
  //20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
  
    function checkStatus(in1, in2){
      if(in2 > 0 && in1 > 0 || in2 < 0 && in1 < 0){
        return false;
      } else {
        return true;
      }
    }
    console.log(checkStatus(5, 5)); //expected false
    console.log(checkStatus(-5, 5)); //expected true
    console.log(checkStatus(5, -5)); //expected true
    console.log(checkStatus(-5, -5)); //expected false
  
  //-------------------------------------------------------------------------------------------------------------------------------------------
  
  //21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 
  
    function createString(string){
      
      if (string.substring(0, 2) == 'Py') {
        return string;
      }
      return 'Py' + string;
    }
    console.log(createString('Python'))
    console.log(createString('Xethon'))
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  
  //22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  
  
    function removeChar(param1, param2){
        const a = param1.substring(0, param2);
        console.log(a);
        const b = param1.substring(param2 + 1, param1.length);
        console.log(b);
        return a + b;
      }
  
  console.log(removeChar('param1', 2)); // 'paam1'
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------
  
  //23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  
  
      function adjustString(string){
        
        if(string.length <= 1) {
          return string;
        } else {
        let last = string.substring(string.length - 1, string.length);
        let first = string.substring(0, 1);
        const newString = last.toUpperCase() + string.substring(1, string.length -1) + first.toLowerCase();
        return newString;
        }
      }
      console.log(adjustString('Q'));
      console.log(adjustString('xenon'));
      console.log(adjustString('Terror'));
  
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
  
      function addFrontnBack(string) {
        let first = string.substring(0, 1)
        const newString = first.toUpperCase() + string + first.toLowerCase();
        return newString;
      }
      console.log(addFrontnBack('Terror'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
  
      function checkMultiple(number){     
        if(number > 0) {
          if(number % 3 === 0 || number % 7 === 0) {
            return 'Yes';
          } else {
            return 'No';
          }
        } else {
          return 'Negative number'
        }
      }
      console.log(checkMultiple(55)); //expected no
      console.log(checkMultiple(15)); //expected yes
      console.log(checkMultiple(-5)); //expected negative number
    
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 
  
      function adjustString2(string){
        
        if(string.length < 3) {
          return string;
        } else {
        let last = string.substring(string.length - 3, string.length);
        const newString = last.toUpperCase() + string + last.toUpperCase();
        return newString;
        }
      }
      console.log(adjustString2('Qw')); //expected Qw
      console.log(adjustString2('xenon')); //expected NONxenonNON
      console.log(adjustString2('Terror')); //expected RORTerrorROR
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  
  
      function checkString(string){
        if(string.length < 4){
          return false;
        } else if(string.substring(0, 4).toUpperCase() === 'JAVA'){
          return true;
        } else {
          return false;
        }
      }
      console.log(checkString('ball')); //expected false
      console.log(checkString('JAVAco')); //expected true
      console.log(checkString('JavaCo')); //expected true
      console.log(checkString('javaCo')); //expected true
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range
  
      function checkInt(value1, value2){
        return value1 >= 50 && value1 < 100 || value2 >= 50 && value2 < 100 ? true : 'Outside range';
        /*
        if(value1 >= 50 && value1 < 100 || value2 >= 50 && value2 < 100){
          return true;
        } else {
          return 'Outside range';
        }*/
      }   
      console.log(checkInt(5, 11)); //expected false
      console.log(checkInt(5, 55)); //expected true
      console.log(checkInt(57, 66)); //expected true
      console.log(checkInt(257, 166)); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range
  
      //Same as above, add another parameter
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 
  
      function checkString(string){
        if(string.substring(4, 10).toUpperCase() === 'SCRIPT'){
          return string.substring(0, 4) + string.substring(10, string.length);
        } else return string
      }
  
      console.log(checkString('JavaScript')); //expected Java
      console.log(checkString('JaVaSCriPt')); //expected JaVa
      console.log(checkString('JavAscripter')); //expected JavA
      console.log(checkString('Javascripternr1')); //expected Javaernr1
      console.log(checkString('JavaTScript')); //expected JavaTScript
      console.log(checkString('Bull')); //expected Bull
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //31. Write a JavaScript program to find the largest of three given integers.  
  
      function largestInt(int){
        let integer = 0;
        int.forEach( (value) => {
          if(value > integer){
           integer = value;       
          }
        });
        return integer;
      }
      console.log(largestInt([1, 3, 2])); //expected 3
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
  //32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
  
      function closest100(value1, value2) {
        const values = [value1, value2]
        const valOne = Math.abs(value1 - 100)
        const valTwo = Math.abs(value2 - 100)
        if(valOne === valTwo){
          return values;
        } else return valOne < valTwo ? value1 : value2;
        }
       
      
      console.log(closest100(5, 55)); //expected 55
      console.log(closest100(99, 155));  //expected 99
      console.log(closest100(99, 101)); //expected 99, 101
      console.log(closest100(101, 99)); //expected 101, 99
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  
  
    function checkInteger(value1, value2){
      if(value1 >= 40 && value1 <= 60 || value1 >= 70 && value1 <= 100 && value2 >= 40 && value2 <= 60 || value2 >= 70 && value2 <= 100){
        return true;
      } else return false;
    }
    console.log(checkInteger(5, 55)); //expected false
    console.log(checkInteger(55, 88)); //expected true
    console.log(checkInteger(33, 66)); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
  
    function fitRange(value1, value2){
      if(value1 === value2){
        return 'Values are identical';
      }
      else if(value1 >= 40 && value1 <= 60 && value2 >= 40 && value2 <= 60){
        return value1 > value2 ? value1 : value2;
      } else {
        return 'Value are outside range';
      }
    }
    console.log(fitRange(5, 55)); //expected Value are outside range
    console.log(fitRange(45, 55)); //expected 55
    console.log(fitRange(55, 55)); //expected Values are identical
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
  
    function characterInString(string, char){
      let ctr = 0;
      let stringx = '';
      for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === char && i >= 1 && i <= 3){
          ctr++      
        }
      }    
      return ctr > 0 ? true : false;        
    }
  console.log(characterInString('Ordinary string', 'i')); //expected true
  console.log(characterInString('Ordinary string', 'o')); //expected false
  console.log(characterInString('Ordinary string', 'y')); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
  
  function checkDigits(int1, int2, int3){
    if (int1 > 0 && int2 > 0 && int3 > 0){
      if(int1 % 10 === int2 % 10 && int2 % 10 === int3 % 10){ //Check if the remaining is the same in all cases
        return true;
      } else return false;
    } else return false;
  }
  console.log(checkDigits(32, 312, 313)); //expected false
  console.log(checkDigits(34, 34, 34)); //expected true
  console.log(checkDigits(255, 25, 345)); //expected true
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  
  
  function convertString(string){
    if(string.length < 3){
      return string.toUpperCase();
    } else {
      const lowerCase = string.substring(0, 3).toLowerCase();
      return lowerCase + string.substring(3, string.length);
    }
  }
  console.log(convertString('FIReball')); //expected fireball
  console.log(convertString('Fo')); //expected FO
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false
  
  function testGrade(exam, total, student){
    if(exam === 'Final-exam'){  
      if(total >= 90 && total <= 100){
        return true;
      } else return false;
    } else if (total >= 89 && total <= 100) {
      return true;
    } return false;
  } 
  console.log(testGrade('Final-exam', 65, 'Alfred')); //expected false
  console.log(testGrade('Final-exam', 90, 'Kirsten')); //expected true
  console.log(testGrade('Random test', 89, 'Alfredo')); //expected true
  console.log(testGrade('Random test', 59, 'Alfredo')); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 
  
  function computeSum(x, y){
    let sum = x + y;
    if(sum >= 50 && sum <= 80){
      return 65;
    } else {
      return 80;
    }
  }
  console.log(computeSum(25, 33)); //expected 65
  console.log(computeSum(66, 44)); //expected 80
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 
  
  function checkSum(x, y){
    if(x === 8 || y === 8){
      return true;
    } else if(x + y === 8){
      return true;
    } else if(Math.abs(x - y) === 8){
      return true;
    } return false;
  }
  console.log(checkSum(9, 8)); //expected true
  console.log(checkSum(8, 8)); //expected true
  console.log(checkSum(4, 4)); //expected true
  console.log(checkSum(12, 4)); //expected true
  console.log(checkSum(15, 4)); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  
  
  function compareNumber(x, y, z){
    if(x === y && y === z){
      return 30;
    } else if (x === y || y === z || x === z ){
      return 40
    }return 20
  }
  console.log(compareNumber(5, 5, 5)); //expected 30
  console.log(compareNumber(11, 11, 6)); //expected 40
  console.log(compareNumber(5, 3, 15)); //expected 20
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
  //Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 
  
  function increments(x, y, z){
    if(x < y && y < z){
      return 'Strict mode';
    } else if(y < z){
      return 'Soft mode';
    } else return 'No mode';
  }
  console.log(increments(10, 15, 31));
  console.log(increments(24, 22, 31));
  console.log(increments(22, 22, 31));
  console.log(increments(22, 55, 31));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  
  
  function rightDigit(x, y, z) {
    let storage = 0;
    
    if (x % 10 === y % 10){
      storage++
    }
    if (z % 10 === y % 10){
      storage++
    }
    if (x % 10 === z % 10){
      storage++
    }
    return `Amount with same rightmost digit is ${storage}`;
  }
  
  console.log(rightDigit(455, 432, 65)); 
  console.log(rightDigit(32, 45, 476));
  console.log(rightDigit(444, 564, 234));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. And is it less than one of the others. 
  
  function check(x, y, z){
    if (x >= 20 && x < y || x < z) {
      return true;
    }
    if (y >= 20 && (y < x || y < z)) {
      return true;
    }
    if (z >= 20 && (z < x || z < y)) {
      return true;
    }return false;
  } 
  console.log(check(25, 55, 155)); //expected true
  console.log(check(5, 55, 44)); //expected true
  console.log(check(24, 535, 5)); //expected true
  console.log(check(55, 15, 5)); //expected false
  console.log(check(23, 23, 11)); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15. 
  
  function check2(x, y){
    if (x == 15 || y == 15 || Math.abs(x - y) == 15 || x + y == 15){
      return true;
    } return false;
  } 
  console.log(check2(7, 8));  //expected true
  console.log(check2(15, 5)); //expected true
  console.log(check2(17, 32)); //expected true
  console.log(check2(14, 16)); //expected false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
  
  function multipleOf(x, y){
    if(x > 0 && y > 0){
      const seven = 7;
      const eleven = 11;
      const a = x % seven === 0
      const b = x % eleven === 0
      const c = y % seven === 0
      const d = y % eleven === 0
      if( (a || b) && (c || d) ){
        return 'Both are mulitples of either 7 or 11'
        } 
        if(a || b){
        return `${x} is a multiple of 7 or 11`;
        } else if (c || d) {
        return `${y} is a multiple of 7 or 11`;
      }return 'None is multiple of 7 or 11';
    }return 'Invalid input'
  }
  console.log(multipleOf(-49, 110));
  console.log(multipleOf(7, 1));
  console.log(multipleOf(43, 56));
  console.log(multipleOf(36, 25));
  console.log(multipleOf(35, 44));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //47. Write a JavaScript program to check whether a given number exists in a particular range ex. 40..10000.  
  //For example 40 presents in 40 and 4000
  
  function inRange(lrange, hrange, number){
    if(number >= lrange && number <= hrange){
      return 'Yes'
    }return 'No'
  }
  console.log(inRange(40, 10000, 555));
  console.log(inRange(40, 10000, 35));
  console.log(inRange(40, 10000, 55555));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //48. Write a JavaScript program to reverse a given string. 
  
  function reverseString(string){
    return string.split('').reverse().join(''); ///Reverse a string, convert it into an array with split, reverse the array, then join it back 
  }
  console.log(reverseString('Hobbe'));
  
  function reverseString2(string){
    let reversed = '';
    for(let i = string.length -1; i >= 0; i--){   //iterate over the characters of the string from the last character to the first and concatenate them to form a reversed string
      reversed += string[i]
    }return reversed;
  }
  console.log(reverseString2('Hobbe'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  
  
  function replaceChar(str){
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters (A-Z)
        result += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters (a-z)
        result += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
      } else {
        result += str.charAt(i); // Non-alphabetic characters remain unchanged
      }
    }
    return result;
  }
  
  console.log(replaceChar('abc'));
  console.log(replaceChar('YouLube'));
  
  /*(charCode - 65 + 1)
  
      charCode represents the Unicode value of the current character in the range of 65 (which corresponds to the character 'A') to 90 (which corresponds to the character 'Z').
      By subtracting 65, we normalize the range to start from 0. For example, 'A' would become 0, 'B' would become 1, and so on.
      Adding 1 to this value shifts the range by one position, making 'A' become 1, 'B' become 2, and so on. This step is responsible for getting the next character in the alphabet.
  
  % 26
  
      The % operator calculates the remainder after dividing the value from the previous step by 26.
      This step is necessary to wrap the range back to the beginning of the alphabet after reaching the end.
      For example, if the value is 26 (corresponding to 'Z' after shifting by one), the remainder would be 0, which wraps the range back to 'A'.
  
  + 65
  
      After obtaining the remainder from the previous step, we add 65 to bring the value back to the range of Unicode values for uppercase letters ('A' to 'Z').
      This step maps the normalized value back to its corresponding Unicode value in the alphabet.
  */
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //50. Write a JavaScript program to capitalize the first letter of each word in a given string. 
  
  function captalize(string){
    string = string.split(" "); //Convert string into an array. Leave a space to not separate each letter, but to separate the word instead
    
    
    for (let i = 0; i < string.length; i++){
      string[i] = string[i][0].toUpperCase() + string[i].substring(1); //Turn each array value at i. Replace it with = string[i][0].toUpperCase() Turns every first letter in every word into uppercase and add rest of substring starting from index 1. 
    }
    return string.join(" "); //Turn array into string
  }
  console.log(captalize('I am a hero'));
  console.log(captalize('i challenge you to pee competition'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //51. Write a JavaScript program to convert a given number into hours and minutes.  
  
  function convertIntoTime(num){
    let hours = num / 60   //Convert the amount of minutes into hours
    console.log(hours);
    console.log(Math.floor(hours));
    //let minutes = (num - Math.floor(hours) * 60)  //Raden under gör samma sak
    let minutes = num % 60;
    console.log(minutes);
    
    return Math.floor(hours) + ':' + minutes
  }
  
  console.log(convertIntoTime(71)); //expected 1:11
  console.log(convertIntoTime(2500)); //expected 41:40
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //52. Write a JavaScript program to convert letters of a given string in alphabetical order.
  
  function sortOrder(string){
    console.log(string.split(""));  //Delar string i delar, separerade med "c" "b" "a"
    console.log(string.split("").sort()); //Sorterar efter bokstavordning
    console.log(string.split("").sort().join("")); //Tar bort "" och förenar ny string abc
    return string.split("").sort().join("");
  }
  console.log(sortOrder('cba')); //expected abc
  console.log(sortOrder('cannot')); //expected acnnot
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
  
  function isSeparated(string){
    return (/a...b/).test(string) || (/b...a/).test(string);  //The expression (/a...b/).test(string) creates a regular expression pattern using the syntax /pattern/ and tests if it matches the given string. In this case, the pattern is "a...b". The dots (...) represent any character or characters in between "a" and "b". So, the regular expression /a...b/ matches any string that starts with "a", has any character(s) in between, and ends with "b".
    }
  console.log(isSeparated('acebb'));
  console.log(isSeparated('acebe'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //54. Write a JavaScript program to count the number of vowels in a given string. Vokal
  
    function countVowels(string){
      return string.replace(/[^aeiou]/g, "").length;  //The expression uses the replace() method to replace all characters in the string that are not vowels with an empty string "".
      //The replace() method takes two parameters: the first parameter is the regular expression /[^aeiou]/g, and the second parameter is the replacement string "".
      //The regular expression /[^aeiou]/g is used to match any character that is not a vowel. 
      //Here's a breakdown of the regular expression:
      //[] indicates a character set, meaning it matches any single character within the brackets.
      //^ inside the character set negates the match, so [^aeiou] matches any character that is not one of the vowels 'a', 'e', 'i', 'o', or 'u'.
      ///g at the end of the regular expression is a modifier that stands for "global" and ensures that the regular expression matches all occurrences in the string, rather than just the first one.
      //The length property is then accessed on the modified string to determine the number of characters (vowels) in it.
    }
    console.log(countVowels("Python"));
    console.log(countVowels("w3resource.com"));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
  
    function equalNum(string){
      let string_p = string.replace(/[^p]/g, '');
      let string_t = string.replace(/[^t]/g, '')
      return string_p.length === string_t.length ? true : false;
    
    }
    console.log(equalNum("paatpss")); // false
    console.log(equalNum("paatpst")); // true
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas. 
  
  function formatNumberWithCommas(result){
    const parts = result.toString().split('.');
    console.log(parts);
    console.log(parts[0]);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); //The integer part is then processed using a regular expression /(\d)(?=(\d{3})+(?!\d))/g. This regular expression matches any digit \d that is followed by groups of three digits \d{3} (repeated one or more times +) and ensures that it is not followed by another digit (?!\d). This effectively matches every digit that should have a comma before it.
    //The replace() method is used with the regular expression and a replacement string ',' to insert the commas at the appropriate positions.
    console.log(parts[0]);
    return parts.join('.');
  }  
  
  
  function numbersx(nr1, nr2){
      const result = nr1 / nr2;
      
      // Format the result with commas
      const formattedResult = formatNumberWithCommas(result);
  
      // Return the formatted result
      return formattedResult;  
    }
    console.log(numbersx(5, 25));
    console.log(numbersx(25000, 5));
    console.log(formatNumberWithCommas(10000));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. 
  
    function createCopies(string, repeats){
      let count = 0;
      let stringAcc = '';
      while(count < repeats){
        stringAcc += string
        count++;
      }return stringAcc;
    }
    console.log(createCopies('Gala', 3));
    console.log(createCopies('Juego', 5));
  
    function string_copies (str, n) {
      if (n < 0)
        return false;
      else
      return str.repeat(n);
    }
    console.log(string_copies('Gala', 3));
    console.log(string_copies('Juego', 5));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 
  
    function stringRepeat(string){ 
      const repeat = string.charAt(string.length -3) + string.charAt(string.length -2) + string.charAt(string.length -1);
        if(string.length >= 3){
          return repeat.repeat(3);
        } return false;
    }
    console.log(stringRepeat('Canoe'));
    console.log(stringRepeat('No'));
  
    function newstring(str){
    if (str.length >= 3) {
      const result_str = str.substring(str.length - 3);
      return result_str.repeat(3);
    }
    else return false;
    }
    console.log(newstring("Python 3.0"));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //59. Write a JavaScript program to extract the first half of a even string.  
  
    function extractHalf(string){
      const half = string.length / 2
      if(string.length % 2 === 0){
        return string.substring(0, half);
        //return str.slice(0, str.length / 2);
      }return string.substring(0, half + 0.5);
    }
    console.log(extractHalf('string')); //6 str
    console.log(extractHalf('stringe')); //9
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //60. Write a JavaScript program to create a new string without the first and last characters of a given string.  
  
    function firstLast(string){
      return string.substring(1, string.length - 1);
    }
    console.log(firstLast('xHamx'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //61. Write a JavaScript program to concatenate two strings except for their first character.  (sammanfoga)
  
    function concatenate(str1, str2){
      return str1.substring(1) + str2.substring(1)
    }
    console.log(concatenate('Mu', 'uwu')); // uwu
    console.log(concatenate('Cha', 'Cha')); // haha
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  
  
    function movethreeChar(string){
      const last3 = string.charAt(string.length -3) + string.charAt(string.length -2) + string.charAt(string.length -1)
      console.log(last3);
      if(string.length >= 3){
      return last3 + string.substring(0, string.length -3);
      }
    }
    console.log(movethreeChar('Beggar')); // garBeg
  
    function right_three(str) {
       if (str.length > 1){
           return str.slice(-3) + str.slice(0, -3);
         }
    return str;
    }
    console.log(right_three('Beggar'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
  
    function odd3Char(string){
      if(string.length >= 3){
        if(string.length % 2 === 1){
          return string.slice((string.length / 2) -1, (string.length / 2) +2);
        } return 'Invalid string length'
      } return 'String to short'
    }
    console.log(odd3Char('Gubbels')); // bbe
    console.log(odd3Char('Hashm')); // ash
    
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string. 
  
    function concatenate2(str1, str2){
      const m = Math.min(str1.length, str2.length);
      console.log(m);
        if(str1.length !== str2.length){
          return str1.slice(0, str2.length) + str2.slice(0, str1.length)
        }else return str1.substring(0) + str2.substring(0)
      }
    console.log(concatenate2('Mustang', 'Sally')); // MustaSally
    console.log(concatenate2('Cha', 'Cha')); // ChaCha
    console.log(concatenate2('Mu', 'uwu')); // Muuw
  
    function str_con_cat(str1, str2) {
      const m = Math.min(str1.length, str2.length);
  
      return str1.substring(str1.length - m) + str2.substring(str2.length - m);
    }
  
    console.log(str_con_cat("Python", "JS"));
    console.log(str_con_cat("ab", "cdef"));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  
  
    function endWithScript(string){
      const stringEnd = string.substring(string.length - 6, string.length);
      
      if((stringEnd === 'Script' || stringEnd === 'script' && stringEnd.length >= 6)){
        return true;
      } return false;
    }
    console.log(endWithScript('JavaScript'));
    console.log(endWithScript('Typescript'));
    console.log(endWithScript('Scrip'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
  
    function displayCity(string){
      if(string.substring(0, 3) === 'Los' || string.slice(0, 3) === 'New'){
        return string;
      }return false;
    }
    console.log(displayCity('Los Santos'));
    console.log(displayCity('New Herry'));
    console.log(displayCity('Charlescity'));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  
  
    function removeChar(string){
      if(string.substring(0, 1) === 'P' && string.substring(string.length - 1) === 'P'){
        return string.substring(1, string.length -1);
      } else if (string.substring(0, 1) === 'P'){
        return string.substring(1);
      } else if (string.substring(string.length - 1) === 'P'){
        return string.substring(0, string.length - 1);
      }return string;
    }
  console.log(removeChar('PstringP')); // string 
  console.log(removeChar('stringP')); // string
  console.log(removeChar('Pstring')); // string
  console.log(removeChar('Normal')); //Normal
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. 
  
    function firstAndLast(string, n){
      if(string.length >= n * 2){
        return string.slice(0, n) + string.slice(string.length - n);
      } return 'Invalid string length'
    }
  
    console.log(firstAndLast('Sång för fred', 4)); //Sångfred
    console.log(firstAndLast('Struggle', 5));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
  
    function sumArray(array){
      let count = 0;
      array.forEach((value) => {
        count += value;
      });
      return count;
    }
    console.log(sumArray([1, 2, 3]));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3. 
  
    function rotateLeft(array){
      return [array[1], array[2], array[0]]
    }
    console.log(rotateLeft([3, 4, 5])) //4, 5, 3
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1
  
    function checkArray1(array){
      if(array[0] == 1 || array[array.length - 1] == 1){
        return true;
      } return false;
    }
    console.log(checkArray1([1, 4, 7])); //true
    console.log(checkArray1([1, 4, 1])); //true
    console.log(checkArray1([6, 1, 5])); //false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  
  
    function checkArray2(array){
      if(array[0] === array[array.length - 1]){
        return true;
      } return false;
    }  
    console.log(checkArray2([1, 4, 1])); //true
    console.log(checkArray2([6, 1, 5])); //false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //73. Write a JavaScript program to reverse the elements of a given array of integers of length 3. 
  
    function reverseEle(array){
      return array.reverse();
    }
    console.log(reverseEle([1, 2, 3]));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. 
  
    function findLargest(array){
      var largerValue = Math.max(...array);
      var modifiedArray = array.map( () => {
          return largerValue;
        }); 
        return modifiedArray;
    }
    console.log(findLargest([1, 5, 7]));
    console.log(findLargest([1, 3, 24, 7]));
    console.log(findLargest([4, 66, 15]));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //75. Write a JavaScript program to create an array, extracting the middle elements of the two arrays of integer and each length 3. 
  
    function removeMiddle(arr1, arr2){
      return [arr1[1], arr2[1]]
    }
    console.log(removeMiddle([1, 3, 6], [2, 6, 5]));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 
  
    function firstAndLast(){
      let arr = Array.from(arguments);
      return [arr[0], arr[arr.length -1]]
    }
    console.log(firstAndLast(1, 3, 5))
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  
  
    function testArr(array){
      if(array.includes(1) || array.includes(3)){
        return true;
      }return false;
    }
    console.log(testArr([1, 5])); // true
    console.log(testArr([4, 2]));  // false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
  
    function testArr2(array){
      return !array.includes(1) && !array.includes(3)
     
    }
    console.log(testArr2([2, 3])); // false
    console.log(testArr2([4, 2])); // true
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
  
    function checkArray3(array){
      let count30 = 0;
      let count40 = 0;
  
      for(let i = 0; i < array.length; i++){
        if(array[i] === 30){
          count30++
        } else if (array[i] === 40){
          count40++
        }
      }return count30 === 2 || count40 === 2;
  
    }
    console.log(checkArray3([30, 40, 50, 40])); // true
    console.log(checkArray3([30, 60, 50, 40])); // false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  
  
    function swap(array) {
        [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
        return array;
    }
    console.log(swap([1, 2, 3, 4]));  
    console.log(swap([0, 2, 1, 5, 7])); 
  
    function swap2(array) {
        [array[0], array[array.length - 1]] = [array[array.length - 1], array[3]];
        return array;
    }
    console.log(swap2([1, 2, 3, 4]));  // 4 2 3 4
     
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //81. Write a JavaScript program to add two digits of a given positive integer of length two. 
  
     function addTwoDigits(digits){
      const units = digits % 10
      const denary = (digits - units) / 10
      return denary + units;
     }
     console.log(addTwoDigits(25)); // 7
     console.log(addTwoDigits(73)); // 10
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //82. Write a JavaScript program to add two positive integers without carrying. 
  
    function add_two_int_without_carrying(n1, n2) {
      var result = 0,
          x = 1;
      while (n1 > 0 && n2 > 0) {
          result += x * ((n1 + n2) % 10); // 1st: 1 * 911 + 222 % 10 = 3,3. 2nd: 10 * 91 + 22 % 10 = 30. 3rd: 100 * 9 + 2 % 10 = 1 * 100 = 100.
          n1 = Math.floor(n1 / 10); // 222 / 10 = 22,2 avrunda neråt = 22 -> 22 / 10 = 2,2 -> 2 / 10 = 0,2 = 0; Loopen stannar och result returns     
          n2 = Math.floor(n2 / 10); // 911 / 10 = 91,1 avdunda neråd = 91 -> 91 / 10 = 9,1 -> 9 / 10 = 0,9 = 0; Loopen stannar och result returns   
          x*= 10;      
      }
      return result;
    }
    console.log(add_two_int_without_carrying(222, 911))
    
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //83. Write a JavaScript program to find the longest string from a given array of strings.  
  
    function longestString(stringArray){
      let max = stringArray[0].length; //Längden på första value 'apple' = 5
      stringArray.map((value) => {     //iterera igenom array med map och utför callback på varje value
        max = Math.max(max, value.length)}); //varje value.length jämförs mot nuvarande max och Math.max return det högsta utav dessa
        
        const result = stringArray.filter((value) => { //filtrera genom array, lagra i variabel för att enkelt return
          return value.length == max    // return det värdet som motsvarar värdet på max i tidigare map, 11 == 11, Elderberry uppfyller true och blir return
        });
        return result;
    }
    
    console.log(longestString(['Apple', 'Banana', 'Blueberry', 'Elderberry', 'Kiwi']));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
  //Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
  
  
    function alphabet_char_Shift(str) {
      var all_chars = str.split("");   //Omvandlar string till array och separerar varje bokstav med ""
      
      for(var i = 0; i < all_chars.length; i++) {   //Itererar över array 
        var n = all_chars[i].charCodeAt() - 'a'.charCodeAt()  //index värdet [i], i varje index och omvandlar till charCoteAt(), sen substraherar med charCode för a. Detta ger position i alfabetet
        console.log(n); // för a vore det 97-97 = 0
        console.log('a'.charCodeAt()) // charCode 97
        console.log('A'.charCodeAt()) // charCode 65
        n = (n + 1) % 26; //1 + 1 / 26 = 2 Since 2 is lower then 26 itself the remainder of 2 / 26 returns 2
        all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());  //Från charCode n + 97 gör vi om charcode till string med String. och lagrar värde i allchars index position
        console.log(all_chars[i])
      }
    return all_chars.join("");
  }
  
  console.log(alphabet_char_Shift("bGdkkn")) //Hello
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.  
  
    function divideArray(array){
      let splitArray = [0, 0];
  
      for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
          splitArray[0] += array[i];
        } else splitArray[1] += array[i];
    
      } return splitArray
    }
    
    console.log(divideArray(['Few', 'Pew', 'Lew', 'Mew'])); // 
    console.log(divideArray([1, 5, 3, 8])); // 1 + 3 och 5 + 8
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //86. Write a JavaScript program to find the types of a given angle.  
  
    function returnAngle(angle){
      if(angle < 90 && angle >= 0){
        return 'Acute Angle'
      } else if(angle === 90){
        return 'Right Angle'
      }else if(angle < 180 && angle > 90){
        return 'Obtuse Angle'
      }else if (angle === 180){
        return 'Straight Angle'
      }
    }
    console.log(returnAngle(85));
    console.log(returnAngle(90));
    console.log(returnAngle(180));
    console.log(returnAngle(135));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  
  
    function array_checking(arra1, arra2) {
  
      for(var i = 0; i < arra1.length; i++) {
        for(var j = i; j < arra1.length; j++) {
          var result = true,
            temp = arra1[i];
          arra1[i] = arra1[j];
          arra1[j] = temp;
          for(var k = 0; k < arra1.length; k++) {
            if(arra1[k] !== arra2[k]) {
              result = false;
              break;
            }
          }
          if(result) {
            return true;
          }
          arra1[j] = arra1[i];
          arra1[i] = temp;
        }
      }
    return false;
  }
  
    console.log(array_checking([10,20,30], [10,20,30]))
    console.log(array_checking([10,20,30], [30,10,20]))
    console.log(array_checking([10,20,30,40], [10,30,20,40]))
  
    function areArraysSimilar(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
  
      let diffCount = 0;
      let diffIndexes = [];
  
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          diffCount++;
          diffIndexes.push(i);
        }
        if (diffCount > 2) {
          return false;
        }
      }
      if (diffCount === 0 || diffCount === 2) {
        const [index1, index2] = diffIndexes;
        return arr1[index1] === arr2[index2] && arr1[index2] === arr2[index1];
      }
      return false;
    }
    // Testing the function
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [5, 2, 3, 4, 1];
    console.log(areArraysSimilar(arr1, arr2)); // Output: true
  
    const arr3 = [1, 2, 3, 4, 5];
    const arr4 = [5, 2, 3, 4, 6];
    console.log(areArraysSimilar(arr3, arr4)); // Output: false
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers or does not divide either, two specified integers are similar. Check whether two integers are similar or not.  
  
    function checkSimilar(in1, in2, div){
      if(in1 % div === 0 && in2 % div === 0 || in1 % div !== 0 && in2 % div !== 0){
        return true;
      } return false;
    }
    console.log(checkSimilar(15, 10, 2)); // false
    console.log(checkSimilar(15, 10, 5)); //true
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
  //For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
  
    function replace$(x, y, z){
      return x + y === z || x * y === z || x / y === z || x - y === z
    }
    console.log(replace$(100, 1, 100));
    console.log(replace$(100, 3, 200));
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //90. Write a JavaScript program to find the kth greatest element in a given array of integers. Finding the element that occupies the kth position when the array is sorted in descending order
  
    function greatestElement(array, k){
  
      const sortedArray = array.sort((a, b) => b - a)  //comparison function substracts a from b, resulting in a positive value if b should be sorted before a, This result in descending order
      console.log(sortedArray);
      return sortedArray[k - 1]; //eftersom index startar på 0
  
    }
    console.log(greatestElement([1, 56, 122, 114, 32], 2))
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 
  
    function findMaxSum(array, k){
      let maxVar = 0;    //Create a variable to store max sum
      let tempSum = 0;   //Create a 2nd variable to sum temporary
      for(let i = 0; i < k - 1; i++){ // iterate index 0-1 
        tempSum += array[i];
      }
      
  
      for(let i = k - 1; i < array.length; i++){ // iterate index 2-end
        tempSum += array[i];  // add array value at respective index to tempSum
        console.log(tempSum)
        
        if(tempSum > maxVar){   //if the temporary stored sum is larger then the stored max value
          maxVar = tempSum;  //temporary sum is stores as new max value
        }
        tempSum -= array[i - k + 1]  // for i 6 = 7, [6 - 3 + 1] = 4. Substract the value 5. Add to the end of the loop to make sure the max value is saved before we substract?
      }
      return maxVar;
    }
    console.log(findMaxSum([1, 2, 3, 4, 5, 6, 7], 3)); // 5 + 6 + 7 = 18
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 
  
    function maxDiffAdj(array){
      let maxDiff = 0;
      for(let i = 0; i < array.length; i++){
        let diff = Math.abs(array[i] - array[i + 1])
        if(diff > maxDiff){
          maxDiff = diff;
        }
      } return maxDiff;
    }
    console.log(maxDiffAdj([1, 45, 3, 25, -25, 15])); // 50
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 
  
    function maxDiff(array){
      let maxDiff = 0;
      let maxVal = 0;
      for(let i = 0; i < array.length; i++){
        if(array[i] > maxVal){
          maxVal = array[i];
        }
        let diff = Math.abs(maxVal - array[i])
        if(diff > maxDiff){
            maxDiff = diff;
          }
      } return maxDiff;
      }
    console.log(maxDiff([8, 50, 3, 25, -50, 15])); // 100
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //94. Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
  
    function appearFreq(array){
      ////We create a new Map called countFreq to store the frequency of each number. The Map data structure allows us to associate keys (numbers) with values (counts). 
      //Each key in the Map will represent a unique number from the array, and the corresponding value will be the count of how many times that number appears in the array.
        const countFreq = new Map();
        
      //We iterate over the input array using the forEach method. For each number in the array, we check if it already exists as a key in the frequency map using the has -method. 
      //If it does, we increment its count by 1 using the set method. If it doesn't exist, we add it to the frequency map with an initial count of 1. 
        array.forEach((number) => {              
          if(countFreq.has(number)){
            countFreq.set(number, countFreq.get(number) + 1);
          } else {
            countFreq.set(number, 1);
          }
        });
        console.log(countFreq);
      //After populating the countFreq map with the counts of each number, we initialize variables mostFrequentNumber and highestFreq to keep track of the number with the highest frequency and its corresponding count.
      let mostFrequentNumber;
      let highestFreq = 0;
      //We use the forEach method on the frequency map to iterate over its entries. For each entry (number, count), we compare the count with the current highestFrequency value. 
      //If the count is greater, we update both mostFrequentNumber and highestFrequency accordingly.
      countFreq.forEach((count, number) => {  
        if(count > highestFreq){
          mostFrequentNumber = number;
          highestFreq = count;
        }
      });
      return mostFrequentNumber;
    }
    console.log(appearFreq([5, 10, 15, 5, 20, 35, 10, 5])); // 5
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //95. Write a JavaScript program to replace all numbers with a specified number in an array of integers. 
  
    /*function replaceNums(array, num){
      for(let i = 0; i < array.length; i++){
        array[i] = num
      }
      return array;
    }
    console.log(replaceNums([5, 1, 6, 7, 25], 2));
    */
  
    function replaceNums(array, num){
      const replacedArray = [];
      for(const element of array){
        replacedArray.push(num);
      }
      return replacedArray;
    }
    console.log(replaceNums([5, 1, 6, 7, 25], 2));
  
    //Avoid modifying the original array: It's generally a good practice to avoid modifying the input array unless there's a specific reason to do so. Instead, consider creating a new array with the replaced values.
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 
  
    function computeSumDiff(array){
      let sumDiff = 0;
      for(let i = 0; i < array.length - 1; i++){
        sumDiff += Math.abs(array[i] - array[i + 1]);
      } return sumDiff;
    }
    console.log(computeSumDiff([4, 6, 7, 15, 24])); // 20
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //97. Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it
  
  function build_Palindrome(str) {
    var flag;
    for (let i = str.length;; i++) {
      flag = true;
      for (let j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < str.length && str[j] != str[i - j - 1]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        for (let j = str.length; j < i; j++) {
          str += str[i - j - 1];
        }
        return str;
      }
    }
  }
  
  console.log(build_Palindrome("abcddc"))
  console.log(build_Palindrome("Gugg")) // GugguG
  
  //isPalindrome(str): Checks if a given string is a palindrome by comparing it with its reversed version.
  //shortestPalindrome(str): Takes an input string and iterates through its substrings to find the shortest palindrome by adding characters to the end. It does this by checking if the substring from the current 
  //position to the end is a palindrome. If a palindrome substring is found, it constructs and returns the shortest palindrome.
  
  function isItPalindrome(string){
    const reversedString = string.split('').reverse().join(''); //Separera input, reverse och join
    console.log(reversedString);
    console.log(string === reversedString) //false
    return string === reversedString; //return true eller false
  }
  
  function createPalindrome(string){
    for(let i = 0; i < string.length; i++){
      const storedSubstring = string.substring(i); //Store substring starting from index we loop in
      console.log(storedSubstring);
      if(isItPalindrome(storedSubstring)){ //If the stores substring returns true in above function we run this code
        const prefix = string.substring(0, i); //Förstavelse, tar string börjar från 0 och upp till där vi hittade att string === omvänd string
        console.log(prefix);
        return prefix + string.split('').reverse().join('');    //Adderar Förstavelsen + omvända string = Palindrom
      }
    } return string; //In case its already a palindrome
  }
  console.log(createPalindrome('Hallu')); //HallullaH
  console.log(createPalindrome('HalaH'));
  
  // 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
  //For example "Write" will be write and "PHp" will be "PHP"
  
  function adjustCase(string){
    let countU = 0;
    let countL = 0;
    for(let i = 0; i < string.length; i++){
      if(/[A-Z]/.test(string[i])){  //Test if the index value is within the A-Z range in the alphabet
        countU++
      } else countL++
    }
    console.log(countU);
    console.log(countL);
  
    if(countU > countL){
      return string.toUpperCase();
    } else if(countU < countL){
      return string.toLowerCase();
    } else return string;
  }
  console.log(adjustCase('Hello')); //hello
  console.log(adjustCase('HeLLo')); //HELLO
  
  function switchCaseToMakeUniform(str) {
    // /[A-Z]/g to find all uppercase letters in the string str. The regular expression [A-Z] matches any uppercase letter in the range of A to Z. The g flag stands for "global," which means it searches for all occurrences of the pattern in the entire string.
    //To handle the case when no matches are found (and avoid potential errors), the code uses the || [] to provide an empty array [] if the result is null.
    const uppercaseCount = (str.match(/[A-Z]/g) || []).length;   //Returns the length of the array
    const lowercaseCount = (str.match(/[a-z]/g) || []).length;
  
    if (uppercaseCount === lowercaseCount) {
      return str; // Convert to lowercase
    } else if (uppercaseCount > lowercaseCount) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  
  const inputString = "HelloWorld";
  const result3 = switchCaseToMakeUniform(inputString);
  console.log("Original:", inputString);
  console.log("Modified:", result3);
  console.log(switchCaseToMakeUniform('HeLlOs'))
  console.log(switchCaseToMakeUniform('HeLlO'))
  
  //99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
  
  function testRearrange(string, string2){
    const rearrange1 = string.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
    const rearrange2 = string2.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
    console.log(rearrange1);
    console.log(rearrange2);
    if(rearrange1 === rearrange2){
      return true;
    } return false;
  }
  console.log(testRearrange('Jacko', 'Jckoa')); //true
  console.log(testRearrange('Jacko', 'jckod')); //false
  
  
  function canRearrangeToMatch(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Different lengths, rearrangement not possible
    }
  
    const charCount = {};
  
    for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (const char of str2) {
      if (!charCount[char]) {
        return false; // Character not present in str1, rearrangement not possible
      }
      charCount[char]--;
    }
  
    return true; // All characters in str2 accounted for in str1
  }
  
  const string1 = "listen";
  const string2 = "silent";
  
  if (canRearrangeToMatch(string1, string2)) {
    console.log("It is possible to rearrange the characters.");
  } else {
    console.log("It is not possible to rearrange the characters.");
  }
  /*
      The function canRearrangeToMatch(str1, str2) is defined with two input parameters, str1 and str2.
  
      The first check compares the lengths of the two input strings, str1 and str2. If they have different lengths, it's not possible to rearrange the characters to make them equal, so the function immediately returns false.
  
      A JavaScript object named charCount is created to store the count of characters in str1.
  
      The first loop iterates through each character in str1 using a for...of loop. For each character, the code updates the count of that character in the charCount object. It uses charCount[char] = (charCount[char] || 0) + 1; to increment the count. If the character is encountered for the first time, charCount[char] is undefined, so charCount[char] || 0 evaluates to 0, and 1 is added.
  
      The second loop iterates through each character in str2. For each character, the code checks if the character is present in the charCount object. If it's not present (meaning it was not found in str1 during the first loop), the function immediately returns false because it's not possible to rearrange the characters to make them equal.
  
      If the character is found in charCount, the count is decremented to indicate that a match has been found.
  
      If all characters in str2 are successfully matched and accounted for in str1, the function returns true, indicating that it's possible to rearrange the characters of str1 to make it equal to str2.
  */
  
  
  //100. Write a JavaScript program to check whether there is atleast one common element in two separate given sorted arrays of integers. 
  
    function checkTwoArrays2(array1, array2){
      let i = 0;
      let j = 0;
      while (i < array1.length && j < array2.length){
        if (array1[i] === array2[j]){
          return true;
        }else if(array1[i] > array2[j]){
          j++
        }else i++
      } return false;
      
    }
    console.log(checkTwoArrays2([2, 7, 3], [3, 5, 7, 1, 4])); //True
    console.log(checkTwoArrays2([1, 3, 7, 3], [2, 6, 4]));    //False
  
    function check_common_element(arra1, arra2) {
      for (let i = 0; i < arra1.length; i++)
      {
        if (arra2.includes(arra1[i])) 
          return true;
      }
      return false;
    }
    console.log(check_common_element([1,2,3], [3,4,5]));  //True
    console.log(check_common_element([1,2,3], [5,6,7]));  //False
  
  
  //101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
  
    function checkLatin(string){
      function isLatin(char){
        return /^[A-Za-z]$/.test(char); //The ^ and $ symbols ensure that the pattern matches the entire string, not just a part of it 
        //$: This symbol is called a dollar sign and it asserts the end of the string
        //^: This symbol is called a caret and it asserts the beginning of the string
      }
      for(let i = 1; i < string.length; i++){
        if(!isLatin(string[i])){
          return false;
        }
        const currentChar = string[i];
        const previousChar = string[i - 1];
          if ((currentChar === currentChar.toUpperCase() && previousChar === previousChar.toUpperCase()) || (currentChar === currentChar.toLowerCase() && previousChar === previousChar.toLowerCase())){
          console.log(currentChar);
          console.log(previousChar);
            return false;
        }
      } return true;
    }  
    console.log(checkLatin('DoAjE')); //True
    console.log(checkLatin('DoAjeE')); //False
    console.log(checkLatin('DoAj324eE')); //False
  
  //102. Write a JavaScript program to find the number of inversions of a given array of integers. 
  //Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
  
  function countInversions(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
        if(array[i] > array[j]) {
        count++
        }
      }
    }return count;
  }  
  console.log(countInversions([3, 5, 1, 2, 3])); //5
  console.log(countInversions([0, 3, 2, 5, 9])); //1
  console.log(countInversions([9, 3, 2, 8, 5])); //6  
  
  
  //103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.  
  
  function findMaxIntAfterDel(int){
    let currMax = 0;
    let numStr = int.toString();
    console.log(numStr);
    
    for(let i = 0; i < numStr.length; i++){
      let newNumber = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));
      if(newNumber > currMax){
        currMax = newNumber;
      }
    }return currMax;
  }
  console.log(findMaxIntAfterDel(3567)); //567
  console.log(findMaxIntAfterDel(8657)); //867
  
  
  //104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer. 
  
  function findElementsInt(array, int){
    let stored = 0;
    let nr1 = 0;
    let nr2 = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
        let calc = Math.abs(array[i] - array[j])
        if(calc <= int && calc >= stored){
            stored = calc;
            nr1 = array[i];
            nr2 = array[j]
        }
      }
    } return `Numbers ${nr1} and ${nr2} with the absolute difference of ${stored}, have the closest absolute difference to ${int}`
  }
  console.log(findElementsInt([5, 4, 20, 25, 7, 49], 22)) //25 - 4 = 21
  
  
  //105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number. 
  // 155 = 1 + 5 + 5 = 11, 1 + 1 = 2 (single digit)
  
  function sumDigits(numbers){
  let toString = numbers.toString().split('').reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue);
    }, 0);
    return toString;
  }
  
  function becomeSingleDigit(number){
    let result = sumDigits(number);
    console.log(result);
    
    let count = 1;
    if(result < 10){
      return `Number of replacements: ${count}`;
    } else if(result > 9){
      count++
      sumDigits(result);
    }
    
    return `Number of replacements: ${count}`;
  }
  console.log(becomeSingleDigit(777)); //2  
  console.log(becomeSingleDigit(123)); //1
  //------------------------------------------------------------------------------------------------
  
  //106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 
  
  function divideInteger(int, divInt){
    if(divInt === 1){
      return num;
    } else {
      while(int % divInt === 0){ //Så länge remainder är 0 så fortsätt dividera
      int /= divInt
      } return int;
    }
  }
  console.log(divideInteger(12, 2)); //3
  console.log(divideInteger(18, 2)); //9
  console.log(divideInteger(15, 2)); //15
  
  
  //107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 
  //For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
  //The output of [2, 4, 6] -> 2 - (2,4), (2,6)
  //The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
  
  function numberSortedPairs(array){
    let count = 0;  
    for(let x = 0; x < array.length; x++){
      for(let y = x + 1; y < array.length; y++){
        if(array[x] % array[y] === 0 || array[y] % array[x] === 0){
          count++
        }
      }
    }
    return count;
  }
  console.log(numberSortedPairs([1, 3, 2])); //2
  console.log(numberSortedPairs([5, 15, 30])); //3
  
  function sortArray(array){
    let sorted = array.slice().sort((a, b) => a - b);
    let sorted2 = array.slice().sort((a, b) => b - a); //Slice viktigt eftersom det skapar en kopia istället för att justera den ordinarie array
    let arrays = [sorted, sorted2]
    let sliced = array.slice();
    console.log(sliced);
    return arrays
  }
  console.log(sortArray([5, 34, 3 , 7 , 15])); // 3, 5, 7, 15, 34 and 34, 15, 7, 5, 3
  
  
  //108. Write a JavaScript program to create the dot products of two given 3D vectors. 
  //Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
  
  function dotProduct(vector1, vector2){
    let results = 0;
    for(let i = 0; i < vector1.length; i++){
      results += vector1[i] * vector2[i]
    }return results;
  }
  console.log(dotProduct([1, 2, 3], [1, 2, 3])); //1 + 4 + 9 = 14
  
  
  //109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  function primeNumber(int){
    let resultArr = [];
    let start = 2;
    while(start <= int){
      if(isPrime(start)){
        resultArr.push(start);
      }
      start++
    }return resultArr;
    
  }
  console.log(primeNumber(15)); //[2, 3, 5, 7, 11, 13]
  
  
  //110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number. 
  
  function isEven(value){
    if(value % 2 === 0){
      return true;
    }return false;
  }
  function findNumberOfEven(array, number){
    let result = 0  
    let start = 1;
    while(start < number){
      if(isEven(start)){
      result++
      }start++
    }return result;
  }
  console.log(findNumberOfEven([1, 2, 3, 4, 5, 6, 12], 5)); //2
  
  
  //111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one. 
  
  function findNonEqual(num1, num2, num3){
    if(num1 !== num2 && num1 !== num3){
      return num1;
    } 
    if(num1 !== num2 && num2 !== num3){
      return num2;
    } 
    if(num1 !== num3 && num2 !== num3){
      return num3;
    } return 'All numbers are unequal'
  
  }
  console.log(findNonEqual(5, 4, 5)); //4
  
  
  //112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 
  
  function findZeros(factorial){
    let count = 0;
  
    for (let i = 5; factorial / i >= 1; i *= 5) {
      count += Math.floor(factorial / i);
    }
    return count;
  }
  
  console.log(findZeros(4)); //0
  console.log(findZeros(5)); //1
  
  
  //113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 
  
  function sumOfIntDivision(int){
    let division = 2;
    let sum = int;
    let div = int / division;
  
      if(int > 0){
        while(div >= 1){  //loop condition to stop when div becomes less than 1. This ensures that you include all the divisions that are greater than or equal to 1 in the sum.
        sum += Math.floor(div);
        division *= 2
        div = int / division;  //Recalculate the value of div in each iteration of the loop.
        }
      } 
      return Math.floor(sum);
  
  }
  console.log(sumOfIntDivision(8)); //8 = 15
  console.log(sumOfIntDivision(9)); //9 = 16
  
  
  //114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 
  
  function checkCorrectSent(sentence){
    let split = sentence.split('');
    console.log(split);
    if(split[0].match(/[A-Z]/) && split[split.length - 1] === "."){
      return true;
      }return false;
  }
  console.log(checkCorrectSent('sentence is not correct.')); //false
  console.log(checkCorrectSent('Sentence is correct.')); //true
  
  function checkCorrectSent(sentence) {
    // Use regular expressions to test the pattern
    //^[A-Z] asserts that the sentence starts with an uppercase letter.
    //.* matches any number of characters in between.
    //\.$ asserts that the sentence ends with a period.
    if (/^[A-Z].*\.$/.test(sentence)) { 
      return true;
    }
    return false;
  }
  
  console.log(checkCorrectSent('sentence is not correct.')); // false
  console.log(checkCorrectSent('Sentence is correct.')); // true
  
  
  //115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). 
  //Example:
  //[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
  //[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
  
  function checkDiagonalMatrix(array1, array2, array3){
    if((array1[1] || array1[2] || array2[0] || array2[2] || array3[0] || array3[1]) > 0){
      return false;
    } return true;
  }
  console.log(checkDiagonalMatrix([1, 0, 0], [0, 2, 0], [0, 0, 3])); //true
  console.log(checkDiagonalMatrix([1, 1, 0], [0, 2, 0], [0, 0, 3])); //false
  
  
  function isDiagonalMatrix(matrix) {
    console.log(matrix);
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    if (rows !== cols) {
      return false; // Not a square matrix, cannot be diagonal
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        
        if (i !== j && matrix[i][j] !== 0) {
          return false; // Found a non-diagonal element that is not zero
        }
      }
    }
    return true; // All non-diagonal elements are zero
  }
  const matrix1 = [
    [5, 0, 0],
    [0, 8, 0],
    [0, 0, 2]
  ];
  console.log(isDiagonalMatrix(matrix1)); // true
  
  
  //116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
  //For a string "2*0", the output should be : ["210", "240", "270"]
  let stringDigitHash = '2#0'
  
  function findOptions(string) {
    let result = [];
  
    for(let digit = 0; digit <= 9; digit++){
      let replacedHash = string.replace('#', digit);
  
      if(Number(replacedHash) % 3 === 0){
        result.push(replacedHash);
      } 
    }
    return result;
  }
  console.log(findOptions(stringDigitHash));
  
  
  //117. Write a JavaScript program to check whether a given matrix is an identity matrix. 
  //Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n x n square matrix with 1 on the main diagonal and zeros elsewhere.
    const matrix2 = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ]; //true
  
    const matrix3 = [
      [1, 0, 0], 
      [0, 1, 0], 
      [1, 0, 1]
    ]; //false
  
    function isIdMatrix(matrix){
      //Check if amount of columns matches rows
      if(matrix.length !== matrix[0].length){
        return false;
      }
      //The nested for loops are used to iterate through each element of the matrix. The outer loop (i) iterates over the rows, and the inner loop (j) iterates over the columns.
      for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
          console.log(i);
          console.log(j);
          console.log(matrix[i]);
          console.log(matrix[j]);
          //Checks whether the current element is on the diagonal of the matrix (where i equals j). If it is on the diagonal, it checks whether the value is 1. If it's not 1, the function immediately returns false because identity matrices have 1 as their diagonal elements.
          if (i === j && matrix[i][j] !== 1) {
          return false;
          //Checks whether the current element is off the diagonal (where i is not equal to j). If it's off the diagonal, it checks whether the value is 0. If it's not 0, the function immediately returns false because identity matrices have 0 as their non-diagonal elements.
          } else if (i !== j && matrix[i][j] !== 0) {
          return false;
          }
        }
      }
      return true;
    } 
    console.log(isIdMatrix(matrix2)); //true
    console.log(isIdMatrix(matrix3)); //false
  
  
    //118. Write a JavaScript program to check whether a given number is in a given range. 
    function checkNumber(range, number){
      if(range.length <= 2){
        let min = range.slice(0, 1);
        let max = range.slice(1, 2);
          if(number >= min && number <= max){
            return `Number ${number} is within the range`;
          }
        } return `Number ${number} is not within the range`;
    }
    console.log(checkNumber([5, 200], 122)); //true
    console.log(checkNumber([5, 200], 222)); //false
  
  
    //119. Write a JavaScript program to check if a given integer has an increasing digit sequence.
    function checkDigitSequence(input){
  
      if(Array.isArray(input)){
        for(let i = 0; i < input.length; i++){
          if ( parseInt(input[i]) >= parseInt(input[i + 1]) ){
            return false;
          }
        }
      } else {
        let array = input.toString().split('');
        for(let i = 0; i < array.length; i++){
          if ( parseInt(array[i]) >= parseInt(array[i + 1]) ){
            return false;
          }
        }
      } return true;
      
    }
    console.log(checkDigitSequence(3456)); //true
    console.log(checkDigitSequence(74536)); //false
    console.log(checkDigitSequence([3, 4, 5, 6])); //true 
    console.log(checkDigitSequence([6, 4, 3, 5])); //false 
  
  
    //120. Write a JavaScript program to check if a point lies strictly inside the circle. 
    //Input:
    //Center of the circle (x, y)
    //Radius of circle: r
    //Point inside a circle (a, b)
    //A(circle)= 3.14*r^2
  
    function checkPointCircle(pointx, pointy, radius){
      const calcx = (radius - pointx);
      const calcy = (radius - pointy);
      if((calcx > radius || calcy > radius) || (calcx < 0 || calcy < 0)){
        return false;
      }
      return true;
    }
    console.log(checkPointCircle(2, 3, 5)); //true
    console.log(checkPointCircle(6, 3, 5)); //false;
    console.log('--------------------');
  
  
    //122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence. 
  
    function checkArrayOfInt(array){
      let increasing = 0;
      let decreasing = 0;
      const length = array.length;
      
      for(let i = 0; i < length - 1; i++){
        if(array[i] < array[i + 1]){
          increasing++
      } else if(array[i] > array[i + 1]){
          decreasing++
        }
      }
      if(parseInt(increasing) === length -1){
          return 'Array is strictly increasing';
        }else if(parseInt(decreasing) === length -1){
          return 'Array is strictly decreasing';
        } else {
          return 'Array is neither strictly increasing or decreasing';
        }
  }
    console.log(checkArrayOfInt([12, 5, 3, 1])); //true
    console.log(checkArrayOfInt([3, 7, 8, 11, 12])); //true
    console.log(checkArrayOfInt([5, 3, 8, 1, 12])); //false
    console.log('--------------------');
  
  
    //123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer. 
    function permutationArray(array, int){
      if (array.length !== int) {
          return false;
      }
      // Create a set to keep track of unique elements. Ensures no duplicates in the new array
      const uniqueSet = new Set(array);
      console.log(uniqueSet);
       // Check if the set size is equal to 'n'. Checks for duplicates
       if (uniqueSet.size !== int) {
          return false;
      }
  
      for (let i = 1; i < int; i++) {
        //If the set doesnt not have (i), return false
        if (!uniqueSet.has(i)) {
              return false;
          }
      } return true;
    }
    console.log(permutationArray([1, 3, 2, 5, 4], 5)); //true
    console.log(permutationArray([1, 2, 2, 5, 4], 5)); //false
    console.log(permutationArray([1, 3, 4, 5], 4)); //false
    console.log('--------------------');
  
    //124. Write a JavaScript program to create the NOR value of two given booleans. 
    //Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
    //Sample Example:
    //For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.
  
    function norFunction(x, y){
      return (!x && !y);
    }
    console.log(norFunction(true, true)); //false
    console.log(norFunction(false, true)); //false
    console.log(norFunction(false, false)); //true
    console.log('--------------------');
  
  
    //125. Write a JavaScript program to find the longest string in a given array. 
    function longestString(array){
      let longest = array[0];
  
      for(string of array){
        if(string.length > longest.length){
          longest = string;
        }
      }return longest;
    }
    console.log(longestString(['kebab', 'french fries', 'turkey', 'bearnaise', 'charles dickens mother in law', 'tomato']));
    console.log('--------------------');
  
  
    //126. Write a JavaScript program to get the largest even number from an array of integers. 
    function largestEvenNum(array){
      let biggest = null;
  
      for(const num of array){
        if(num > biggest && num % 2 === 0){
          biggest = num;
        }
      }return biggest;
    }
    console.log(largestEvenNum([25, 2, 33, 144, 66, 243, 44]));
    console.log('--------------------');
  
    //128. Write a JavaScript program to find the smallest round number not less than a given value. 
    //Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
    function smallestNumber(value){    
      while(value % 10 !== 0){
        value++
      }return value;
    } 
    console.log(smallestNumber(541));
    console.log(smallestNumber(24));
    console.log('--------------------');
  
    //129. Write a JavaScript program to find the smallest prime number strictly greater than a given number. 
    function findPrimeGreater(number){
      let value = number + 1;
      if(value === 3){
        return value;
      }
      
      while (value % 2 === 0 || value % 3 === 0){
        value++
      } return value;
    }
    console.log(findPrimeGreater(1));
    console.log(findPrimeGreater(19));
    console.log('--------------------');
  
  
    //130. Write a JavaScript program to find the number of even digits in a given integer. 
    function findEvenDigits(num){
      let count = 0;
      const numArray = num.toString().split('');
      for(const str of numArray){
        if(parseInt(str) % 2 === 0){
          count++
        }
      }
      return count;
    }
    console.log(findEvenDigits(5723)); //1
    console.log(findEvenDigits(4726)); //3
    console.log(findEvenDigits(4600)); //4
    console.log('--------------------');
  
  
    //131. Write a JavaScript program to create an array of prefix sums of the given array. 
    //In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
    //y0 = x0
    //y1 = x0 + x1
    //y2 = x0 + x1+ x2
    function createPrefixSum(array){
      let result = [];
      let calc = 0;
  
      for(let i = 0; i < array.length; i++){
        calc += array[i];
        result.push(calc); 
      }
      return result;
    }
    /*  function createPrefixSum(array) {
      let result = [];
      let calc = 0;
  
      for (const value of array) {
        calc += value;
        result.push(calc);
      }
      return result;
    } */
  
    console.log(createPrefixSum([1, 2, 3, 4, 5, 6])); //1, 3, 6, 10, 15, 21
    console.log(createPrefixSum([1, 2, -3, 4, 5, 6])); //1, 3, 0, 4, 9, 15
    console.log('--------------------');
  
  
    //132. Write a JavaScript program to find all distinct prime factors of a given integer.
    //the prime factors of a positive integer are the prime numbers that divide that integer exactly
  
  
    //133. Write a JavaScript program to check whether a given fraction is proper or not. 
    //Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than  the denominator, and improper otherwise.
  
    function checkProperFraction(num1, num2){
      if(num1 < 0 || num2 < 0){
        return 'Neither proper or improper';
      }
  
      if(num1 < num2){
        return num1 / num2 + ', Proper fraction';
      } else return num1 / num2 + ', Improper fraction';
    }
    console.log(checkProperFraction(2, 4));
    console.log(checkProperFraction(4, 2));
    console.log(checkProperFraction(-4, 2));
    console.log('--------------------');
  
  
    //134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 97 = a, 122 = z.
    
    function changeCharacters(string){
      /* const strArr = string.split('');
      console.log(strArr); */
      let newString = '';
      for(let i = 0; i < string.length; i++){
      const getCharCode = string.toLowerCase().charCodeAt([i]);
      const newCharCode =  (122 + 97 - getCharCode);
      newString += String.fromCharCode(newCharCode);
      }
      return newString;
    }
    console.log(changeCharacters('abc')); //zyx
    console.log(changeCharacters('aBC')); //zyx
    console.log('--------------------');
  
  
    //135. Write a JavaScript program to remove all characters from a given string that appear more than once. 
  
    function removeDoubles(string){
      const splitString = string.split('');
      const newSet = Array.from(new Set(splitString)).join('');
      return newSet;
    }
    console.log(removeDoubles('aabbcdee')); //abcde
    console.log('--------------------');
  
  
    //136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character. 
  
    function replaceFirstLetter(string){
      return '$'+string.substring(1);
      
    }
    console.log(replaceFirstLetter('String'));
    console.log('--------------------');
  
  
    //137. Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15. 
    //TOeasy
  
    //138. Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer. 
    //BITS?
  
    
    //139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  
    //Note: A round number is informally considered to be an integer that ends with one or more zeros.
  
    function findRightmostRoundNum(array){
      let rightMostIndex = 0;
      for(let i = array.length - 1; i > 0; i--){
        if(array[i] % 10 === 0){
          rightMostIndex = i;
          break; //Break asap we found first value
        }
      }
      return rightMostIndex;
    }
    console.log(findRightmostRoundNum([31, 40, 65, 50, 102, 94])); //3
    console.log(findRightmostRoundNum([31, 46, 65, 52, 102, 94])); //0
    console.log('--------------------');
  
  
    //140. Write a JavaScript program to check whether all the digits in a given number are the same or not.
  
    function checkDigits(num){
      const numArr = [num].toString().split('');
      console.log(numArr);
      let correct = 0;
      for(let i = 1; i < numArr.length; i++){
        if(Number(numArr[i]) !== Number(numArr[0])){
          return 'No they arent identical'
        } else {
          correct++
        }
        if(correct === numArr.length - 1){
          return 'Yes they are identical'
        }
        
      }
    }
    console.log(checkDigits(1589)); //false
    console.log(checkDigits(5555)); //true
    console.log(checkDigits(5565)); //false
    console.log(checkDigits(6555)); //false
    console.log('--------------------'); 
  
  
    //141. Write a JavaScript program to find the number of elements which presents in both of the given arrays
  
    function findNumberOfElements(arr1, arr2){
      let count = 0;
      for(const num of arr1){
        for(const num2 of arr2){
          if(num === num2){
            count++
          }
        }
      }
      return count;
    }
    console.log(findNumberOfElements([31, 15, 46, 44, 16, 55], [14, 25, 15, 45, 16, 31])); // 3 = 15, 16, 31
    console.log('--------------------'); 
  
  
    //142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.  
  
    function simplifyPath(path) {
    // Split the path by '/' and filter out any empty strings and '.' (current directory)
    const pathArray = path.split('/').filter(part => part !== '' && part !== '.');
  
    const stack = [];
  
    for (const part of pathArray) {
      if (part === '..') {
        // If part is '..', pop the last element from the stack (go up one directory)
        stack.pop();
      } else {
        // Otherwise, push the part onto the stack
        stack.push(part);
      }
    }
  
    // Join the remaining parts in the stack with '/' to get the simplified path
    const simplifiedPath = '/' + stack.join('/');
  
    return simplifiedPath;
  }
  
    const absolutePath = '/home/user/../documents/./file.txt';
    const simplified = simplifyPath(absolutePath);
    console.log(simplified); // Output: '/home/documents/file.txt'
    console.log('--------------------'); 
  
    //143. Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
    //Note: Do not change the order if the lengths of two string are same.
  
    function sortAccordingToLength(array){
      for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
          if(array[i].length > array[j].length){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
      return array;
    }
    console.log(sortAccordingToLength(['kebab', 'french fries', 'turkey', 'bearnaise', 'charles dickens mother in law', 'tomato']));
    console.log('--------------------'); 
  
    function sortStringsByLength(arr) {
    arr.sort(function(a, b) {
      // Compare the lengths of strings
      const lenA = a.length;
      const lenB = b.length;
  
      if (lenA < lenB) {
        return -1; // a comes before b
      } else if (lenA > lenB) {
        return 1; // a comes after b
      } else {
        return 0; // lengths are equal, maintain original order
      }
    });
    return arr;
  }
  
  // Example usage:
  const strings = ["apple", "banana", "cherry", "date", "fig"];
  const sortedStrings = sortStringsByLength(strings);
  console.log(sortedStrings);
  console.log('--------------------'); 
  
  
    //144. Write a JavaScript program to break an URL address and put its parts into an array.  
    //Note: url structure : ://.org[/] and there may be no part in the address.
  
    function breakURLIntoParts(url) {
    try {
      const urlObject = new URL(url);
      console.log(urlObject);
      
      const urlParts = [];
  
      urlParts.push(urlObject.protocol);
      urlParts.push(urlObject.hostname);
      urlParts.push(urlObject.port);
      urlParts.push(urlObject.pathname);
      urlParts.push(urlObject.search);
      urlParts.push(urlObject.hash);
  
      return urlParts;
    } catch (error) {
      console.error("Invalid URL:", error.message);
      return [];
    }
  }
  
    // Example usage:
    const url = "https://www.w3resource.com/javascript-exercises/";
    console.log(breakURLIntoParts(url));
  
    console.log('--------------------'); 
  
  
    //145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.  
  
    function findMaxInt(int){
      let maxInt = 0;
      let acc = 0;
      for(let i = 1; i < int; i++){
        if(acc < int){
          acc += i;
          maxInt = i;
        }
      }
      return maxInt;
    }
    console.log(findMaxInt(15)); //5
    console.log(findMaxInt(21)); //6
    console.log('--------------------'); 
  
  
    //146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.  
  
    function sumOfCubes(int){
      let acc = 0;
      for(let i = 1; i <= int; i++){
        acc += (i ** 3)
      }
      return acc;
    }
    console.log(sumOfCubes(3)); //36 1^3 + 2^3 + 3^3 = 36
    console.log(sumOfCubes(4)); //100 1^3 + 2^3 + 3^3 + 4^3 = 100
    console.log('--------------------');
  
  
    //147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.  
  
    function computeSum(string){
      const split = Array.from(string);
      let acc = 0;
      for(const item of split){
        if(/[0-9]/.test(item)){
          acc += +item;
        }
      }
      return acc;
    }
    console.log(computeSum("abcd12efg9")); //12
    console.log(computeSum("w3resource")) //3
    console.log('--------------------');
  
  
    //148. Write a JavaScript program to swap two halves of a given array of integers of even length. 
  
    function swapHalves(arr1, arr2){
      if(arr1.length !== arr2.length){
        return 'Array unequal length'
      }
      const arrLength = arr1.length;
  
      for(let i = arrLength / 2; i < arrLength; i++ ){
        console.log(arr1[i]);
        console.log(arr2[i]);
        const temp = arr2[i];
        arr2[i] = arr1[i];
        arr1[i] = temp;
      }
      return [arr1, arr2];
    }
    console.log(swapHalves([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1])); //[1, 2, 3, 3, 2, 1] [6, 5, 4, 4, 5, 6]
    console.log('--------------------');
  
    function swapHalves2(arr){
      if(arr.length % 2 !== 0){
        return 'Array unequal length'
      }
      const halfArr = arr.length / 2;
      const firstHalf = arr.slice(0, halfArr);
      const secondHalf = arr.slice(halfArr);
      const newArr = [...secondHalf, ...firstHalf];
      return newArr;
    }
    console.log(swapHalves2([1, 2, 3, 4, 5, 6])); //[4, 5, 6, 1, 2, 3] 
    console.log('--------------------');
  
  
    //149. Write a JavaScript program to change the capitalization of all letters in a given string.  
  
    function changeCapitalization(string){
      const split = string.split('');
      const newArr = [];
      for(const letter of split){
        if(/[a-z]/.test(letter)){
          newArr.push(letter.toUpperCase());
        } else {
          newArr.push(letter.toLowerCase());
        }
      }
      return newArr.join('');
    }
    console.log(changeCapitalization('aBcDeFgH')); //AbCdEfGh
    console.log('--------------------');
  
  
    //150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
  
    function swapAdjDigits(arr){
      if(arr.length % 2 !== 0){
        return 'Array unequal length'
      }
      const newArr = [];
      console.log(arr.length);
      
      for(let i = 0; i < arr.length - 1; i += 2){
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      return arr;
    }
    console.log(swapAdjDigits([1, 2, 3, 4])); //[2, 1, 4, 3]
    console.log(swapAdjDigits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
    console.log('--------------------');
  
    const database = 'https://majazocom.github.io/Data/attendees.json';
   
    async function getData(database){
      const data = await fetch(database);
      console.log(data)
      const dataObj = await data.json()
      console.log(dataObj);
      return dataObj;
    }
    console.log(getData(database));
    
    function GenElement(type, content){
      this.element = document.createElement(type);
      this.element.innerText = content;
      document.body.append(this.element);
    }
  
    async function genHTML(data){
      const dataObj = await getData(data);
      console.log(dataObj);
      dataObj.map(function(obj) {
        if(obj.attending && obj.allergies.length){
          return new GenElement('p', [obj.name + ': ' + obj.allergies]);
        }
      });
    }
    genHTML(database);
  
  
    const currDate = new Date()
    console.log(currDate);
  
  
    function renderCountdown(){
      const christmas = 25
      const currentDate = new Date();
      const daysToChristmas = christmas - currentDate.getDate();
      const hoursToChristmas = 23 - currentDate.getHours();
      const minutesToChristmas = 59 - currentDate.getMinutes();
      const secondsToChristmas = 60 - currentDate.getSeconds();
      const timeToChristmas = `Days: ${daysToChristmas}, Hours: ${hoursToChristmas}, Minutes: ${minutesToChristmas}, Seconds: ${secondsToChristmas}`;
      
      console.log(daysToChristmas);
      console.log(hoursToChristmas);
      console.log(minutesToChristmas);
      console.log(secondsToChristmas);
      console.log(timeToChristmas);
  
      // Task:
      // - Get today's date (you only need the day).
      // - Calculate remaining days.
      // - Display remaining days in countdownDisplay.
  }
  
    renderCountdown()
  
  
    
  