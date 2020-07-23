//Chapter #01
//Assignment # 1
document.write("chapter 01"+"<br>")

//Q #1
alert("Hello!Visitors,Please Check out my complete website.")

//Q #2
alert(" Error! Please enter a valid password.")

//Q #3
alert("Welcome to JS Land... \n Happy Coding!")

//Q #4(i)
alert("Welcome to JS Land...")

//Q #4(ii)
alert("Happy Coding!")

//Q #5
var a = "Hello...I can run JS through web browser's console";

console.log(alert(a));

//Q #6
alert("Hello! This is a simple and basic HTML & CSS project.")

//Q #7
//solve in index file

document.write("Chapter 02"+ "<br>")


//Chapter #02
//Assignment #02

//Q #1
var username;

//Q #2
var myName = "Full Name";

//Q #3(i)
var message;

//Q #3(ii)
var message = "Hello World";

//Q #3(iii)
alert("Hello World!");

//Q #4
var StdName = "Jhone Doe";
var Stdage = "15 years old";
var StdCourse = "Certified Mobile Application Development";

alert(StdName);
alert(Stdage);
alert(StdCourse);

//Q #5
var word = "PIZZA";

alert(word + "\n" + word.slice(0, 4) + "\n" + word.slice(0, 3) + "\n" + word.slice(0, 2) + "\n" + word.slice(0, 1));

//Q #6
var email = "jk400152@gmail.com";

alert("My email address is" + " " + email);

//Q #7
var book = "A smarter way to learn JavaScript ";

alert("I am trying to learn from the book" + " " + book);

//Q #8
var text = "Yah! I can write HTML content through JavaScript";

document.write(text + "<br>" + "<br>");

//Q #9
var structure = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(structure);
document.write(structure + "<br>" + "<br>")


document.write("Chapter 03"+"<br>")


//Chapter #03
//Assignment #03

//Q #1
var age = 22;

alert("I am" + " " + age + " " + "years old");

//Q #2
var visitor = 14;

alert("You have visited this site" + " " + visitor + " " + "times");

//Q #3
var birthYear = 1998;

document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number" + "<br>" + "<br>");

//Q #4
var VisitorName = "John Doe";
var ProductTitle = "T-shirts";
var Quantity = "5";

document.write(VisitorName + " " + "ordered" + " " + Quantity + " " + ProductTitle + " " + "on XYZ Clothing store." + "<br>" + "<br>");

document.write("Chapter 04"+"<br>")
//Chapter #04
//Assignment #4

//Q #1
var x, y, z;

//Q #2
//illegal

//(i)
//var product cost;//variable are not declare with space

//(ii)
//var P2_a% 88$;//variable are not declare with any sign

//(iii)
//var Nameofband;//variable are declare using camelCase,its not camelCase

//(iv)
//var 18;//variable are not declare numbers

//(v)
//var first-name;//variable are not declare with hyphen(-) 

//legal
//(i)
var firstName;//variable are declare using camelCase
//(ii)
var my_Name;//variable are declare using underscores
//(iii)
var val1;//variable are declare using letters and numbers
//(iv)
var text$;//variable are declare using letters and dollar sign
//(v)
var $_;//variable are declare using dollar sign and underscores

//Q #3
var str = "Rules for naming JS variables"
document.write(str.bold() + "<br>" + "<br>" +
    "Variable names can only contain,numbers,$ and __.For example $my_1stVariable" +
    "<br>" + "Variables must begin with a letter,$ or __.For example $name, _name or name" +
    "<br>" + "Variable names are case sensitive" + "<br>" +
    "Variable names should not be JS keywords" + "<br>" + "<br>");


    document.write("Chapter 05"+"<br>")
//Chapter #05
//Assignment # 5

//Q #1
//(Addition)
var i = 3;
var j = 5;
var k = i + j;

document.write("Sum of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//Q #2(Subtraction)
var i = 3;
var j = 5;
var k = i - j;

document.write("Subtract of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Multiplication)
var i = 3;
var j = 5;
var k = i * j;

document.write("Multiply of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Division)
var i = 3;
var j = 5;
var k = i / j;

document.write("Divide of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Modulus)
var i = 3;
var j = 5;
var k = i % j;

document.write("Remainder of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//Q #3
var num;
document.write("Value after variable declaration is" + " " + num + "<br>");
var num = 5;
document.write("Initial value:" + " " + num + "<br>");
var num = num + 1;
document.write("Value after increment is:" + " " + num + "<br>");
var num = num + 7;
document.write("Value after addition is:" + " " + num + "<br>");
var num = num - 1;
document.write("Value after decrement is:" + " " + num + "<br>");
var num = num % 3;
document.write("The remainder is :" + " " + num + "<br>" + "<br>" + "<br>");

//Q #4
var ticketPrice = 600;
var totalTicket = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to movie is" + " " + totalTicket + "PKR" + "<br>" + "<br>");

//Q #5
var table = 16;
var heading = "Table of 16";
document.write(heading.bold("Table of" + " " + table));
for (var t = 1; t <= 10; t++) {
    document.write("<br>" + table + "x" + t + "=" + " " + table * t);
}
document.write("<br>" + "<br>");

//Q #6
var Celcius = 25;
var Fahrenheit = 70;
var calCelcius = (Fahrenheit - 32) * 5 / 9;
var calFahrenheit = (Celcius * 9 / 5) + 32;

document.write(Celcius + "℃" + " " + "is" + " " + calFahrenheit + "℉" + "<br>");
document.write(Fahrenheit + "℉" + " " + "is" + " " + calCelcius + "℃" + "<br>" + "<br>");

//Q #7
var cart = "Shopping Cart";
document.write(cart.fontsize(5) + "<br>" + "<br>" + "<br>");
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippinCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippinCharges;

document.write("Price of item 1 is" + " " + priceItem1 + "<br>");
document.write("Quantity of item 1 is" + " " + quantityItem1 + "<br>");
document.write(" Price of item 2 is" + " " + priceItem2 + "<br>");
document.write(" Quantity of item 2 is" + " " + quantityItem2 + "<br>");
document.write("Shipping charges" + " " + shippinCharges + "<br>" + "<br>");
document.write("Total cost of your order is " + " " + totalCost + "<br>" + "<br>");

//Q #8
var totalMarks = 980;
var obtainedMarks = 804;
var per = (804 / 980 * 100);//calculate the percentage

document.write("Total Marks:" + " " + totalMarks + "<br>" + "Marks Obtained:" + " " +
    obtainedMarks + "<br>" + "Percentage:" + " " + per + "<br>" + "<br>");

//Q #9
var crncy = "Currency in PKR";
var US = 10;
var SA = 25;
var avrUs = US * 104.80;
var avrSa = SA * 28;
var totalCurrency = avrUs + avrSa;
document.write(crncy.fontsize(5) + "<br>" + "<br>" + "<br>" + "Total Currency in PKR:" + " " + totalCurrency + "<br>" + "<br>");

//Q #10

var arith = 72;
var add = arith + 5;
var mutly = arith * 10;
var div = arith / 2;
var exp = arith + add * mutly / div;

document.write("Perform all calculation :" + " " + exp + "<br>" + "<br>");


//Q #11
var ageCal = "Age Calculator";
document.write(ageCal.fontsize(5) + "<br>" + "<br>" + "<br>");
var crntYear = 2020;
var yourYear = 1998;
var yourAge = 2020 - 1998;
document.write("Current Year:" + " " + crntYear + "<br>" + "Birth Year:" +
    " " + yourYear + "<br>" + "Your Age is:" + " " + yourAge + "<br>" + "<br>");

//Q #12
var geom = "The Geometrizer";
document.write(geom.fontsize(5) + "<br>" + "<br>" + "<br>");
var radCircle = 20;
var π = 3.142;
var circumCircle = 2 * π * radCircle;
var areaCircle = π * radCircle ** 2;

document.write("Radius of a circle is:" + " " + radCircle + "<br>"
    + "The Circumference is:" + " " + circumCircle + "<br>" + "The area is:" + " " + areaCircle + "<br>" + "<br>");


//Q #13
var life = "The Lifetime Supply Calculator";
document.write(life.fontsize(5) + "<br>" + "<br>" + "<br>");
var snack = "Lays";
var currentAge = 22;
var maxAge = 70;
var amntSnack = 5;
var final = (70 - 22) * 5;

document.write("Favourite Snack:" + " " + snack + "<br>" + "Current age:" + " " + currentAge +
    "<br>" + "Estimated Maximum Age:" + " " + maxAge + "<br>" + "Amount of snacks per day:" + " " +
    amntSnack + "<br>" + "You will need" + " " + final + " " + "to last you until the ripe old age of" + " " +
    maxAge + "<br>" + "<br>");

    document.write("Chapter 06-09"+"<br>")
//Chapter #6-9
//Assignment #6-7

//Q #1
var a = 10;
document.write("Result:" + "<br>" + "The value of a is:" + " " + a + "<br>" + "........................................." + "<br>" + "<br>");
++a;
document.write("The value of ++a is:" + " " + a + "<br>" + "Now the value of a is:" + " " + a + "<br>" + "<br>");
a++;
document.write("The value of a++ is:" + " " + --a + "<br>" + "Now the value of a is:" + " " + ++a + "<br>" + "<br>");
--a;
document.write("The value of --a is:" + " " + a + "<br>" + "Now the value of a is:" + " " + a + "<br>" + "<br>");
document.write("The value of a-- is:" + " " + a + "<br>" + "Now the value of a is:" + " " + --a + "<br>" + "<br>");

//Q #2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1  = 3
document.write("a is" + " " + a + "<br>" + "b is" + " " + b + "<br>" + "result is" + " " + result + "<br>" + "<br>")

--a;
// 1
--a - --b;
// 1  -  0
--a - --b + ++b;
// 1  -  0  +  1
--a - --b + ++b + b--;
// 1  -  0  +  1  +  1


//Q #3
var input = prompt("Enter Your Name");
alert("Hello" + " " + input);

//Q #4,Q #5
var userNum = prompt("Enter Any Number:",5);
if(userNum !== null){
    for(var u=1; u<=10; u++){
        document.write(userNum + "x"+ u +"="+" "+ userNum * u +"<br>");
    }

}
else{
    for(var u=1; u<=10; u++){
        document.write(userNum + "x"+ u +"="+" "+ userNum * u +"<br>");
    }
}
document.write("<br>" + "<br>");

//Q #6
var head1 = "Subject";
var head2 = "Total Marks";
var head3 = "Obtained Marks";
var head4 = "Percentage";
var userSubj1 = prompt("Enter Your Subject");
var subj1 = userSubj1;
var userSubj2 = prompt("Enter Your Subject");
var subj2 = userSubj2;
var userSubj3 = prompt("Enter Your Subject");
var subj3 = userSubj3;
var subjMark = 100;
var obtMark1 = +prompt("Enter Your English Obtained Marks");
var obtdMark1 = obtMark1;
var obtMark2 = +prompt("Enter Your Math Obtained Marks");
var obtdMark2 =  obtMark2;
var obtMark3 = +prompt("Enter Your Urdu Obtained Marks");
var obtdMark3 = obtMark3;
var totalMark = subjMark + subjMark + subjMark;
var totalObtMark = obtdMark1 + obtdMark2 + obtdMark3;
var percent1 = (obtdMark1/subjMark*100);
var percent2 = (obtdMark2/subjMark*100);
var percent3 = (obtdMark3/subjMark*100);
var totalPercent = (obtdMark1/subjMark*100) + (obtdMark2/subjMark*100) + (obtdMark3/subjMark*100);

document.write(head1.bold()+"\xa0\xa0 "+ head2.bold() +"\xa0\xa0"+ head3.bold() + "\xa0\xa0"+ head4.bold() +"<br>"+
 userSubj1 +"\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark1 +"\xa0\xa0\xa0"+ percent1 +"<br>"+
 userSubj2 +"\xa0\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark2 +"\xa0\xa0\xa0"+ percent2 +"<br>"+
 userSubj3 +"\xa0\xa0\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark3 +"\xa0\xa0\xa0"+ percent3 +"<br>"+
 "\xa0\xa0\xa0"+ totalMark +"\xa0\xa0\xa0"+ totalObtMark +"\xa0\xa0"+ totalPercent + "<br>"+"<br>");


 document.write("Chapter 09-11"+"<br>")
//Chapter #9-11
//Assignment #9-10

//Q #1
var city = prompt("Enter any city name:");
if(city === "Karachi"){
    alert("Welcome to city of lights");

}

else{
    alert("Welcome to"+" "+ city);
}

//Q #2
var gender = prompt("Enter Your Gender");
var ma = "male";
var fe = "female";

if(gender === ma){
    alert("Good Morning Sir.");
}

else if(gender === fe){
    alert("Good Morning Ma'am.");
}

//Q #3
var clrRoad = prompt("Enter color of road traffic signal (Red,Green or Yellow)");
if (clrRoad === "red"){
    alert("Must Stop");
}
else if(clrRoad === "yellow"){
    alert("Ready to move");
}
else if(clrRoad === "green"){
    alert("Move now");
}

//Q #4
var fuel = prompt("Enter remaining fuel in your car(in liter)");
var crntFuel = 0.25;
if(fuel < crntFuel){
    alert("Please refill the fuel in your car");
}

//Q #5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");//No Run because condition is false
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");//No Run because condition is false
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");//No Run because condition is false
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False");//No Run because code is unreachable
    }

if("car" < "cat"){
    alert("car is smaller than cat");
    }
            

//Q #6
var sheet = "Marks Sheet";
var comObtained = +prompt("Enter Your Computer Obtained Marks");
var comTotal = +prompt("Enter Your Computer Total Marks");
var mathObtained = +prompt("Enter Your Math Obtained Marks");     
var mathTotal = +prompt("Enter Your Math Total Marks");
var phyObtained = +prompt("Enter Your Physics Obtained Marks");
var phyTotal = +prompt("Enter Your Physics Total Marks");
var subTotalObtained = (comObtained + mathObtained + phyObtained);
var subTotalMarks = (comTotal + mathTotal + phyTotal);
var percent = (subTotalObtained/subTotalMarks*100);
document.write(sheet.fontsize(6)+"<br>"+"<br>"+"<br>");
document.write("Total Marks:"+" "+ subTotalMarks + "<br>");
document.write("Marks Obtained:"+" "+ subTotalObtained +"<br>");
if(percent >=80){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "A-one"+"<br>");
    document.write("Remarks:"+" "+"Excellent"+"<br>"+"<br>");
}
else if(percent >=70){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "A"+"<br>");
    document.write("Remarks:"+" "+"Good"+"<br>"+"<br>");
}
else if(percent >=60){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "B"+"<br>");
    document.write("Remarks:"+" "+"You need to improve"+"<br>"+"<br>");;
}
else if(percent < 60){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "Fail"+"<br>");
    document.write("Remarks:"+" "+"Sorry"+"<br>"+"<br>");
}


//Q #7
var secNum = 6;
var guess = +prompt("Enter a secret number (ranging 1 to 10)");
if (guess === secNum){
    alert("Bingo! Correct answer.");
}

else if(++secNum === guess ){
    alert("Close enough to the correct answer.");
}

//Q #8
var givNum = +prompt("Enter any number (check number divisible by 3 or not)");

if(givNum%3===0){
    alert("Your number is divisible by 3");

}
else{
    alert("Your number is not divisible by 3");
}

//Q #9
var checkNum = +prompt("Enter any number (check odd or even)");

if(checkNum%2===0){
        alert("Your number is even");
    }
else{
        alert("Your number is odd");
    }


//Q #10
var temp = prompt("Enter a temperature (starting number > 10)");
if(temp > 40){
    alert("It is too hot outside.");
}    
else if(temp > 30){
    alert("The Weather today is Normal.");
}
else if(temp > 20){
    alert("Today’s Weather is cool.");
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}

//Q #11-------Simple Calculator

var firstNum =+prompt("Enter Your First Number:");
var signOp =prompt("Enter Your Operator");
var secondNum =+prompt("Enter Your Second Number");
alert(firstNum + signOp + secondNum);

if(signOp === "+"){
    alert(firstNum + secondNum);
}
else if(signOp === "/"){
    alert(firstNum / secondNum);
}
else if(signOp === "*"){
    alert(firstNum * secondNum);
}
else if(signOp === "%"){
    alert(firstNum / secondNum *100 + "%");
}

document.write("Chapter 12-13"+"<br>")
//Chapter #12-13


//Q #1
var ch,code, i
ch = prompt("Enter any character")
code = ch.charCodeAt(0)
document.write("<br>ASCII Code is " + code)
for(i = 65; i <= 90; i++)
{
    if(Number(code) == Number(i))
   { document.write("<br> Character is uppercase " )}
   
}
for(i = 97; i <= 122; i++)
{
    if(Number(code) == Number(i))
    {document.write("<br> Character is lowercase " )}
    
}

//Q #2
var a = +prompt("Enter first number ");
var b = +prompt("Enter second number ")

if(a > b)
{
    document.write("<br>" + a + " is larger")
}

else if(a < b)
{
    document.write("<br>" + b + " is larger")
}

else if(a = b)
{
    document.write("<br>" + a + " and " + b + " are equal")
}

//Q #3
var a
a = +prompt("enter number ")

if(a < 0)
{
    document.write("<br>" + a + " is negative")
}

else if(a > 0)
{
    document.write("<br>" + a + " is positive")
}

if(a == 0)
{
    document.write("<br>" + a + " is zero")
}

//Q #4
var v = prompt("enter an alphabet ")
if(v === 'a')
{
    document.write("<br> it is a vowel")
}
else if(v === 'e')
{
    document.write("<br> it is a vowel")
}
else if(v === 'i')
{
    document.write("<br> it is a vowel")
}
else if(v === 'o')
{
    document.write("<br> it is a vowel")
}
else if(v === 'u')
{
    document.write("<br> it is a vowel")
}
else
{
    document.write("<br> it's not a vowel")
}

//Q #5

var  b = "789HelloDear$99"
var a = prompt("Enter password ",)
if(a === b)
{
    document.write("<br> correct password")
}
else if(a !== b && a !== "")
{
    document.write("<br> wrong password")
}

else if(a === "")
{
    document.write("<br> please enter password")
}

//Q #6
var greetingDay = 'Good Day', greetingEve = 'Good Evening'
var hour = 19;
if (hour < 18) 
{
    document.write("<br>" + greetingDay)
}
else
{
    document.write("<br>" + greetingEve)
}

//Q #7
var t = prompt("Enter time ")
if(t >= 0000 && t < 1200)
{
    document.write("<br>Good Morning " )
}
else if(t >= 1200 && t < 1700)
{
    document.write("<br>Good Afternoon " )
}
else if(t >= 1700 && t < 2100)
{
    document.write("<br>Good Evening " )
}
else if(t >= 2100 && t <= 2359)
{
    document.write("<br>Good Night " )
}


document.write("Chapter 14-16"+"<br>")
//Chapter #14-16

//Q #1

var arr = []

//Q #2
var arr = {}

//Q #3

var words = ["hello", "knowledge", "bug bounty", "bitcoin"]

 //Q #4

var numb = [776, 555, 007, 2020]

//Q #5

var bool = [true, false]

//Q #6

var mixx = ["bond", 007, true, 'access granted']

 //Q #7

var qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'], a = 1

document.write("<br> <h1> Qualifications: </h1>")
for(i = 0; i < qual.length; i++)
{
    document.write("<br>" + a + ") "  + qual[i])   
    a++
}

//Q #8

var std, scr, total, i
std = ['Muneeb', 'Junaid', 'Awais']
scr = [320, 230, 480]
total = 500
for(i = 0; i < std.length; i++)
{
    document.write("<br>Score of " + std[i] + " is " + scr[i] + ".Percentage: " + (scr[i]/total)*100 + "%")
}

 //Q #9

var col, col2, col3
col = ["yellow", "green", "blue"]
document.write("<br>" + col)

col2 = prompt("add color to beginning")
col.unshift(col2)
document.write("<br>" + col)

col3 = prompt("add color to end")
col.push(col3)
document.write("<br>" + col)

col.unshift('orange', 'brown')
document.write("<br>" + col)

col.shift()
document.write("<br>" + col)

col.pop()
document.write("<br>" + col)

col[2] = prompt("enter color to specific index ")
document.write("<br>" + col)

ind = prompt("enter specific index to del color ")
delete col[ind]
document.write("<br>" + col)

 //Q #10

var score, 
score = [320, 230, 480, 120]
document.write("<br> Scores of students " + score)
for(i = 0; i < score.length; i++)
{
    for(j = i+1; j < score.length; j++)
    {
        if(score[i] > score[j])
        {
            temp = score[j]
            score[j] = score[i]
            score[i] = temp
        }
    }   
}
document.write("<br> Ordered Scores of students " + score)

 //Q #11

var cities, sCit
cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
sCit = cities.slice(2, 4)
document.write("<br> Cities list <br>" + cities)
document.write("<br> Selected cities list <br>" + sCit)

//Q #12

var arr
arr = ['This ', ' is ', ' my ', ' cat ']

document.write("<br>array <br>" + arr)
document.write("<br>string <br>" + arr[0] + arr[1] + arr[2] + arr[3])

 //Q #13

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = 0; i < d.length; i++)
document.write("<br>out: <br>" + d[i])

 //Q #14

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = (d.length-1); i >= 0; i--)
document.write("<br>out: <br>" + d[i])

 //Q #15

var ph
ph = ['Apple', 'Samsung', 'Motorolla', 'Nokia', 'Sony', 'Haier']

document.write('<br> <select name="company"')

for(i = -1; i < ph.length; i++)
{
document.write('<option value="' + ph[i] + '">')
document.write(ph[i]) 
document.write('</option>')
}

document.write('</select>'+"<br>")

document.write("Chapter 17-20"+"<br>")
// CHAPTER 17-20 

 //Q #1


var arr = [
     [],
     [],
     []
 ]
 
 //Q #2
 
 var arr1 = [
     [0,1,2,3],
     [1,0,1,2],
     [2,1,0,1]
 ]
 for(i = 0; i < 3; i++)
 {
     for(j = 0; j <= 3; j++)
     {
         document.write(arr1[i][j] + " ")
     }
     document.write('<br>')
 }

 //Q #3

 for(var n = 0; n <= 10;n++){
     document.write(n +"<br>")
 }

 //Q #4
 var userTable = +prompt("Enter a number to show its multiplication table");
 var userLength = +prompt("Enter length multiplication table")
 document.write("<h3>" +"Multiplication table of"+" "+ userTable +"</h3>")
 document.write("<h3>"+"Length"+" "+ userLength  +"</h3>")
 for(var t = 1;t <=userLength;t++){
    
    document.write(userTable+" " + "x"+" "+ t+" " +"="+" "+ userTable*t +"<br>")
 }

 //Q #5
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var f = 0;f <fruits.length;f++){
    document.write(fruits[f]+"<br>")
}
document.write("<br>"+"Element at index"+" "+ 0 +" "+"is"+ " "+ fruits[0]+"<br>"+
"Element at index"+" "+ 1 +" "+"is"+ " "+ fruits[1]+"<br>"+
"Element at index"+" "+ 2 +" "+"is"+ " "+ fruits[2]+"<br>"+
"Element at index"+" "+ 3 +" "+"is"+ " "+ fruits[3]+"<br>"+
"Element at index"+" "+ 4 +" "+"is"+ " "+ fruits[4]+"<br>");

//Q #6
document.write("<br>" +"<b>"+"a. Counting: "+"</b>"+"<br>"+"<br>")
for(var c = 1;c <= 15;c++){
    document.write( c +",")
}

document.write("<br>" +"<br>" +"<b>"+"b. Reverse counting: "+"</b>"+"<br>"+"<br>")

for(var r = 10;r >=1;r--){
    document.write(r + ",")
}
document.write("<br>" +"<br>" +"<b>"+"c. Even: "+"</b>"+"<br>"+"<br>")
var ev = 0
while(ev <= 20){
    if(ev %2 === 0){
        document.write(ev +"," )
    }
    ev++
}

document.write("<br>" +"<br>" +"<b>"+ "d. Odd: "+"</b>"+"<br>"+"<br>")
var od = 1
while(od < 20){
    if(od %2 !== 0){
        document.write(od + ",")
    }
    od++
}
document.write("<br>" +"<br>"+"<b>"+ "e. Series: "+"</b>"+"<br>"+"<br>")
var s = 2
while(s <= 20){
    if(s %2 === 0){
        document.write(s +"k" +"," )
    }
    s++
}


//Q #7
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var list = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?"+"\n");

if(list === "cake"){
    document.write(A[0] +" " +"is available at index"+" "+ 0 +" "+ "in our bakery")
}
else if(list === "apple pie"){
    document.write(A[1] +" " +"is available at index"+" "+ 1 +" "+ "in our bakery")
}
else if(list === "cookie"){
    document.write(A[2]+" "+ "is available at index"+" "+ 2 +" "+ "in our bakery")
}
else if(list === "chips"){
    document.write(A[3] +" " +"is available at index"+" "+ 3 +" "+ "in our bakery")
}
else if(list === "patties"){
    document.write(A[4] +" " +"is available at index"+" "+ 4 +" "+ "in our bakery")
}
else {
    document.write("We are sorry"+" "+ list +" "+"is"+"<b>"+ "not available"+"</b>"+ "in our bakery");
}

//Q #8
var N = [24, 53, 78, 91, 12]
var nResult = Math.max(24,53,78,91,12);
document.write("Array items: "+ N +"<br>"+"The largest number is "+ nResult +"<br>")

//Q #9
var N1 = [24, 53, 78, 91, 12]
var nResult1 = Math.min(24,53,78,91,12);
document.write("Array items: "+ N1 +"<br>"+"The largest number is "+ nResult1 +"<br>")

//Q #10
var m = 5
while(m <= 100){
    if(m %5 === 0){
        document.write( m +",")
    }
    m++
}

 document.write("<br>" +"Chapter 21-25"+"<br>")
 //Chapter 21-25

//Q #1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName +" "+ lastName;
alert("Hello"+" "+ fullName);

//Q #2
var model = prompt("Enter your favorite mobile model:");
var len = model.length;

document.write("My favorite phone is:"+" "+ model +"<br>"+ "Length of string:"+" "+ len +"<br>"+"<br>");

//Q #3
var coun = "Pakistani";
var letter = coun.indexOf("n");
document.write("String:"+" "+ coun +"<br>"+"Index of 'n':"+" "+ letter +"<br>"+"<br>");

//Q #4
var msg = "Hello World";
var word = msg.lastIndexOf("l");
document.write("String:"+" "+ msg +"<br>"+ "Last index of 'l':"+" "+ word +"<br>"+"<br>");

//Q #5
var str = "Pakistani";
var char = str.charAt(3);
document.write("String:"+" "+ str +"<br>"+"Character at index 3:"+" "+ char +"<br>"+"<br>");

//Q #6
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = fullName.concat(firstName +" " + lastName);
alert("Hello"+" "+ fullName);

//Q #7
var word ="Hyderabad";
var rep = word.replace("Hyder","Islam");

document.write("City:"+" "+ word + "<br>"+ "After replacement:"+" "+ rep +"<br>"+"<br>");

//Q #8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repMsg = message.replace(/and/g,"&");
document.write(repMsg +"<br>"+"<br>");

//Q #9
var strNum = "472";
var  int = parseInt("472");
document.write("Value:"+" "+ strNum +'<br>'+"Type:"+" "+ "String"+"<br>"+ "Value:"+" "+
 strNum +'<br>'+"Type:"+" "+ "Number"+"<br>"+"<br>");

//Q #10
var user = prompt("Enter any words");
var upp = user.toUpperCase();

document.write("User input:"+ " "+ user +"<br>"+ "Upper case:"+ " "+ upp +"<br>"+"<br>");

//Q #11


//Q #12


//Q #13


//Q #14
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var list = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?"+"\n");

if(list === "cake"){
    alert(items[0] +" " +"is available at index"+" "+ 0 +" "+ "in our bakery")
}
else if(list === "apple pie"){
    alert(items[1] +" " +"is available at index"+" "+ 1 +" "+ "in our bakery")
}
else if(list === "cookie"){
    alert(items[2]+" "+ "is available at index"+" "+ 2 +" "+ "in our bakery")
}
else if(list === "chips"){
    alert(items[3] +" " +"is available at index"+" "+ 3 +" "+ "in our bakery")
}
else if(list === "patties"){
    alert(items[4] +" " +"is available at index"+" "+ 4 +" "+ "in our bakery")
}
else {
    alert("We are sorry"+" "+ list +" "+"is not available in our bakery");
}


//Q #15


//Q #16
var university = "University of Karachi";
document.write(university[0]+"<br>"+university[1]+"<br>"+university[2]+"<br>"+university[3]+"<br>"
+university[4]+"<br>"+university[5]+"<br>"+university[6]+"<br>"+university[7]+"<br>"+university[8]+
"<br>"+university[9]+"<br>"+university[10]+"<br>"+university[11]+"<br>"+university[12]+"<br>"+university[13]+
"<br>"+university[14]+"<br>"+university[15]+"<br>"+university[16]+"<br>"+university[17]+"<br>"+university[18]+
"<br>"+university[19]+"<br>"+university[20]+"<br>"+"<br>"+"<br>");


//Q #17
var ownChar = prompt("Enter any character");
var lastChar = ownChar.charAt(ownChar.length-1);

document.write("User input:"+" "+ ownChar +"<br>"+"Last character of input:"+" "+ lastChar +"<br>"+"<br>");


//Q #18
var text = "The quick brown fox jumps over the lazy dog";
var  occu = 0;
for(var i=0 ; i<text.length ; i++){
    if(text.charAt(i) === "the"){
        occu++;
    }
}
// document.write("Text:"+" "+ text +"<br>"+"There are"+" "+ occu +" " +"occurence(s) of word 'the'"+"<br>"+"<br>");



document.write("Chapter 26-30"+"<br>")
//Chapter 26-30

//Q #1
var posInt = +prompt("Enter positive integers number");
var rnd = Math.round(posInt)
var flr = Math.floor(posInt)
var cl = Math.ceil(posInt)

document.write("number:"+" "+ posInt +"<br>"+"round off value:"+" "+ rnd +"<br>"+"floor value:"+" "+
 flr +"<br>"+"ceil value"+" "+ cl +"<br>"+"<br>" );


//Q #2
var negFlt = +prompt("Enter negative floating point number");
var rnd = Math.round(negFlt)
var flr = Math.floor(negFlt)
var cl = Math.ceil(negFlt)

document.write("number:"+" "+ negFlt +"<br>"+"round off value:"+" "+ rnd +"<br>"+"floor value:"+" "+
 flr +"<br>"+"ceil value"+" "+ cl +"<br>"+"<br>" );


//Q #3
var Num = -4;
var abslt = Math.abs(Num);

document.write("The absolute value of"+" "+ Num +" "+"is"+" "+ abslt +"<br>"+"<br>");

//Q #4
var dice = Math.floor(Math.random() * 10 ) + 1;
document.write("random dice value:"+" "+ dice +"<br>"+"<br>")


//Q #5
var heads = 0;
var tails = 0;

var x = Math.floor( Math.random() * 4 === 0);

if(x){
    document.write("2"+"<br>"+"random coin value:"+" "+"Heads"+"<br>"+"<br>")
}
else{
    document.write("1"+"<br>"+"random coin value:"+" "+"Tails"+"<br>"+"<br>")
}

//Q #6
var rand1 = Math.floor( Math.random() * 50)
document.write("random number between 1 and 100:"+" "+ rand1 +"<br>"+"<br>")

//Q #7
var userWeight = +prompt("Enter your weight in kilograms");
document.write("The weight of user is"+" "+ userWeight +" "+ "kilograms"+"<br>"+"<br>");


//Q #8
var secNum = 9
var secNum1 =+prompt("Enter any number (between 1 to 10)")
if (secNum1 === secNum){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}



document.write("Chapter 31-34"+"<br>")
//Chapter 31-34

//Q #1
var crntDate = new Date();
document.write(crntDate +"<br>"+"<br>");

//Q #2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

alert("Current month:"+" "+ months[crntDate.getMonth()])


//Q #3
var day_name = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

alert("Today is"+" "+ day_name[crntDate.getDay()])


//Q #4
var user =prompt("Enter day")
if(user === "saturday" || user === "sunday"){
    alert("It's Fun day")
}

//Q #5
var userDate =+prompt("Enter date")
if(userDate < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

//Q #6


//Q #7
var userNoon = prompt("Enter a time")
if(userNoon < 12){
    alert("It's AM")
}
else{
    alert("It's PM")
}

//Q #8
var laterDate = new Date(2020,11,31,0,0,0,0)
document.write("Later date:"+" "+ laterDate +"<br>"+"<br>")


//Q #9
var oldDate = new Date("June 18, 2015")
var CurrentDate = new Date("June 19, 2020,")
var diff_time = CurrentDate.getTime() - oldDate.getTime()
var diff_day = diff_time/(1000*60*60*24)

document.write(diff_day +" "+"days have passed since 1st Ramadan, 2015"+"<br>"+"<br>")


//Q #10
var refDate = new Date("January 06, 2015")
var elpDate = new Date("Dec 05, 2015, 22:50:16")
var diff_time1 = elpDate.getTime() - refDate.getTime()
var diff_sec = Math.abs(refDate - elpDate) / 1000;

document.write("On reference date"+" "+ elpDate +","+"<br>"+ diff_sec +" "+"seconds had passed since beginning of 2015 "+"<br>"+"<br>")


//Q #11
var crntDate1 = new Date("June 20, 2020,13:15:25")
var hourAgo = new Date("June 20, 2020,12:15:25")

document.write("Current date:"+" "+ crntDate1 +"<br>"+"1 hour ago,it was"+" "+ hourAgo +"<br>"+"<br>")


//Q #12
var crntDate2 = new Date("June 20, 2020, 13:17:34")
var yearAgo = new Date("June 20, 1920,13:17:34 ")

alert("Current date:"+" "+ crntDate2 +"\n"+"100 year ago,it was"+" "+ yearAgo)


//Q #13
var userAge = prompt("Enter your date of birth","Jan 23, 1998");
var userMilli = userAge.getTime();
var currentDate1 = new date();
var currentMilli = currentDate1.getTime();
var diff_age = currentMilli - userMilli;
var accAge = Math.floor(diff_age/(1000*60*60*30*24));

document.write("Your age is"+" "+ accAge +"<br>"+"Your birth year is"+" "+ userAge +"<br>"+"<br>");


//Q #14
var name = "K-Electric Bill";
var customerName = prompt("Enter customer name:");
var month = prompt("Enter month");
var numOfUnit = +prompt("Enter number of units:");
var chargeUnit = +prompt("Enter charge per unit:");
var netAmount = numOfUnit * chargeUnit ;
var latePay = prompt("Enter number of late payment");
var grossAmount = netAmount + latePay ;

document.write( name.fontsize(6) +"<br>"+"<br>"+"<br>"+"Customer Name:"+" "+ customerName.bold() +
"<br>"+"Month:"+" "+ month.bold() +"<br>"+"Number of Units:"+" "+ numOfUnit.bold() +"<br>"+"Charges per Unit:"+
" "+ chargeUnit.bold() +"<br>"+"<br>"+"Net Amount Payable (within Due Date) :"+" "+ netAmount.bold() +"<br>"+
"Late Payment Surcharge:"+" "+ latePay.bold() +"<br>"+"Gross Amount Payable (after Due Date):"+" "+
 grossAmount.bold() +"<br>"+"<br>" );


 document.write("Chapter 35-38"+"<br>")
//Chapter  35-38

//Q #1
function date_time(){
    var d = new Date()
    return d;
}

var result = date_time()
document.write(result)


//Q #2
function greet(){
    var firstName =prompt("Enter your first name")
    var lastName =prompt("Enter your last name")
    var fullName = firstName +" "+ lastName
    return fullName

}
var result1 = greet()
alert(result1)



//Chapters 38-42
//Assignment 38-44

//Q #1
function pwr(a,b){
    var pwrResult = Math.pow(a,b)
    return pwrResult
}
var pwrResult2 = pwr(9,7)
document.write(pwrResult2)

//Q #2
function leapYear(year){
    var year = +prompt("Enter any year")
    if(year % 4 === 0){
        document.write(year +" "+"is a leap year"+"<br>")
    }
    else{
        document.write(year +" "+"is not a leap year"+"<br>")
    }
}
leapYear()


//Q #3
function areaTriangle(a,b,c){
    var area = S*(S - a)*(S - b)*(S - c)
    document.write("Area of Triangle is"+" "+ area +"<br>")
     find = sides(a,b,c)
}

function sides(){
    var S =  ( a + b + c ) / 2
    return S 
}

areaTriangle(4,8,3)


//Q #4


//Q #5
function check(){
    text = "Hello World! Long Live Pakistan"
    char = text.indexOf("Pakistan")
    return char

}
var resChar = check()
document.write("<br> Index of"+" "+ "Pakistan" +" "+"is:"+ resChar +"<br>")

//Q #6
String.prototype.character = function(){
    return this.replace(/[aeiou]+/g,"")
}

function deleteVowels(){
    var input = document.getElementById("vowels").value
    document.getElementById("result").innerHTML = input.character()
    
}

//Q #7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;

    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
            count++
        case 'E':
            count++
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return 1;
        default:
            return 0;
    }
}

document.write(findOccurrences())

//Q #8
var inputDistance = +prompt("Enter the distance between two cities (in km)")
var meter = inputDistance*1000;//convert in km because 1km = 1000m
var feet = inputDistance*3280.84;//convert in feet because 1km = 3280.84feet
var inches = inputDistance*39370.1;//convert in inches because 1km = 39370.1inches
var cm = inputDistance*100000;//convert in cm because 1km = 100000cm

document.write("<br>"+inputDistance +" "+"distance b/w two cities convert to"+" " + meter +"meter")
document.write("<br>"+ inputDistance+" "+"distance b/w two cities convert to"+" " + feet +"feet")
document.write("<br>"+ inputDistance +" "+"distance b/w two cities convert to"+" " +inches +"inches")
document.write("<br>"+ inputDistance+" "+"distance b/w two cities convert to"+" "  +cm +"cm" +"<br>")

//Q #9

//Q #10
var amount = +prompt("Please Enter Amount for Withdraw :")
var hund = (amount / 100)-1
var hund1 = Math.ceil(hund )
var fif = ((amount % 100) / 50)-1
var fif1 = Math.ceil(fif)
var ten = (((amount % 100) % 50) / 10) 
var ten1 = Math.ceil(ten)
var remain = (((amount % 100) % 50) % 10)
var remain1 = Math.ceil(remain)
document.write("You will have" +" "+  hund1+" "+ "hundred notes"+" "+
fif1 +" "+"fifty notes"+" "+ ten1 + " "+"ten notes."+"<br>"+
"Amount still remaining is : " + remain1)



//Chapter 43-48

//Q #1,Q #2



//Q #3
function deleteRow(row){
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('all').deleteRow(d);
}

 //Q #4
 function changeImg(){
    var img1 = document.getElementById('img')
    img1.src = " image2.jpg"
}

function reverseImg(){
    var img2 = document.getElementById('img')
    img2.src = " image1.jpg"

}

//Q #5




//chapters49-52
//Assignment # 49-52

//Q #1
function getVal()
  {
    var txt1 = document.getElementById('fname').value;
    document.getElementById('mytext').innerHTML = txt1;
    var txt1 = document.getElementById('lname').value;
    document.getElementById('mytext1').innerHTML = txt1;
    var txt1 = document.getElementById('age').value;
    document.getElementById('mytext2').innerHTML = txt1;
    var txt1 = document.getElementById('email').value;
    document.getElementById('mytext3').innerHTML = txt1;
    var txt1 = document.getElementById('pwd').value;
    document.getElementById('mytext4').innerHTML = txt1;
  }

//Q #2
function readMore(){
    txt = "Some projects are simple JavaScript projects for beginners and will take about 10 minutes and others can take up to an entire weekend!"+"<br>"+ "But don't fear, even if it takes you six months to get through all of these projects, this is only a small period of your life relative to the time you'll spend for the rest of your life as a full-time JavaScript developer."
    para = document.getElementById("para").innerHTML = txt
}

//Q #3
var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;

if(fname === ""){
    alert("First Name Connot Be Empty");
    isEmpty = true;
}
else if(lname === ""){
    alert("Last Name Connot Be Empty");
    isEmpty = true;
}
else if(age === ""){
    alert("Age Connot Be Empty");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;

cell1.innerHTML = fname;
cell2.innerHTML = lname;
cell3.innerHTML = age;
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      document.getElementById("age").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = fname;
table.rows[rIndex].cells[1].innerHTML = lname;
table.rows[rIndex].cells[2].innerHTML = age;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("fname").value = "";
document.getElementById("lname").value = "";
document.getElementById("age").value = "";
}



//Chapter 53-58

//Q #1
var modal = document.getElementById("myModal");

var wallpaper = document.getElementById("wallpaper");
var modalWallpaper = document.getElementById("wallpaper01");

function myModal(){
    modal.style.display = "block";
    modalWallpaper.src = src;
}

var span = document.getElementsByClassName("close");

function closeModal(){
    modal.style.display = "none";
}

//Q #2
function zoomIn() { 
    var para = document.getElementById("para01"); 
    // var currWidth = para.clientWidth; 
    var currSize = para.style.fontSize    
    para.style.fontSize = (currSize + 10) + "px"; 
} 

function zoomOut() { 
    var para = document.getElementById("para01"); 
    // var currWidth = para.clientWidth; 
    var currSize = para.style.fontSize    
    para.style.fontSize = (currSize - 10) + "px"; 
} 



