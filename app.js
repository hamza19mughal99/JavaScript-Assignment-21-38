// CHAPTER 21 - 25

// TASK # 1

// var firstName = prompt("enter First Name ");
// var secondName = prompt("enter Second Name ");
// var fullName = firstName + " " + secondName;
// alert("Welome ! " +fullName);


// TASK # 2

// var favouriteMob = prompt("Enter Favourite mob ");
// var lengthfavouriteMob = favouriteMob.length;
// alert("your favorite mob is : " + " " + favouriteMob + "\r\n" + "length of string " +lengthfavouriteMob );


// TASK # 3

// var name = "Pakistani";
// document.write("String : " +name + "<br>");

// document.write("index of : " + name.indexOf("n"));


// TASK # 4

// var a = "Hello World";
// document.write("String : " +a + "<br>");
// document.write("Last index of l : " + a.lastIndexOf("l"));


// TASK # 5

// var a = "Pakistani";
// document.write("String : " +a + "<br>");
// document.write("Character at index 3 : " + a.charAt(3));


// Task # 6

// var a = "Hyderabad";
// for( var i=0; i< a.length; i++)
// {
//     if(a.slice(i , i+5) === "Hyder")
//     {
//         a = "Islamabad"
//         document.write(a);
//     }
// }

// Task # 8

// var para = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(para + "<br>");
// var indexNum = para.indexOf("and");
// var firstText = para.slice(0,indexNum);
// var secondText = para.slice(indexNum + 3 );
// document.write(firstText + "&" + secondText);


// Task # 9

// var a = "423"
// document.write(typeof(a) + "<br>" );
// var b = parseInt("423");
// document.write(typeof(b));




// Task # 10 

// var a = "peanut";
// document.write(a.toUpperCase());


// Task # 11

// var a = "javascript";
// document.write(a.charAt(0).toUpperCase() + a.slice(1) );


// Task # 12


// var num = 35.36;
// var num1 = num.toString().replace(".", "");
// document.write(num1);


// Task # 13


// var text = prompt("enter name");
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) == "!" || text.charAt(i) == "," || text.charAt(i) == "." || text.charAt(i) == "@" ) {
//         alert("enter a valid username");
//         break;
        
//     }
//     else{
//         alert(text);
//         break;

//     }
// }

// Task # 14

// var a = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var search = prompt("search...");
// if(search == a[0] ){
//     alert(a[0] + " is avaiable at index " + "0" + " in our bakery");
// }

// else if(search == a[1] ){
//     alert(a[1] + " is avaiable at index " + "1" + " in our bakery");
// }
// else if(search == a[2] ){
//     alert(a[0] + " is avaiable at index " + "2" + " in our bakery");
// }
// else if(search == a[3] ){
//     alert(a[0] + " is avaiable at index " + "3" + " in our bakery");
// }
// else if(search == a[4] ){
//     alert(a[0] + " is avaiable at index " + "4" + " in our bakery");
// }
// else{
//     alert("we are sorry " + search + " is not avaiable in our bakery ");
// }



// ******************************************* CHAP END *****************************



// Chapter  26  -  30 

// Task # 1

// var num = +prompt("enter number..");
// var b = Math.round(num);
// var c = Math.floor(num);
// var d = Math.ceil(num);
// document.write( "round off: " + b + "<br>");
// document.write( "floor : " + c + "<br>");
// document.write( "ceil : " + d + "<br>");


// Task # 2

// var num = +prompt("enter number..");
// var b = Math.round(num);
// var c = Math.floor(num);
// var d = Math.ceil(num);
// document.write( "round off: " + b + "<br>");
// document.write( "floor : " + c + "<br>");
// document.write( "ceil : " + d + "<br>");

// Task # 3

// var a = +prompt("enter number");
// var b = Math.abs(a);
// document.write(a + "<br>");
// document.write(b);

// Task # 4

// var a = Math.random();
// var b = a*3;
// var c = Math.floor(b);
// document.write(c);


// Task # 5

// var a = Math.random();
// var b = a*2;
// var c = Math.floor(b);


// if (c === 0){
//     alert(c + "\r\n" + "Heads");
    
// }
// else if (c === 1){
//     alert(c + "\r\n" + "Tails");
    
// }

// Task # 6

// var a = Math.random();
// var b = a * 99;
// var c = Math.ceil(b);
// document.write("Random Number between 1 to 100 " + c);

// Task # 7

// var a = prompt("enter your weight in kilograms");
// document.write("The weight of the user : " + a);

// Task # 8

// var sec = 7;
// var a = +prompt("enter number to guess");
// if(a === sec){
//     document.write("Correct!!");
// }
// else{
//     document.write("Try Again");
// }



// ******************************************* CHAP END *****************************



// Chapter # 31  -  34

// Task # 1

// var a = new Date();
// document.write(a);

// Task # 2

// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,8);
// document.write(c);

// Task # 3


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// document.write( "Today is : "+ c);


// Task # 4

// var a = new Date();
// document.write(a);

// var b = a.toString();
// var c = b.slice(16,18);
// if (c >=0 && c < 12){
//     document.write( " <br>" +"Its AM");
// }
// else{
//     document.write( " <br>" +"Its PM");
// }


// Task # 5

// var a = new Date();
// document.write(a);
// var b = a.toString();
// var c = b.slice(8,10);
// if (c >=1 && c <=15){
//     document.write("<br>" + "First Fifteen Days of the Month");

// }
// else{
//     document.write("<br>" + "Last Days of the Month");

// }

// Task # 6

// var a = new Date();
// document.write(a + "<br>");
// var b = new Date("Thu Dec 31 2020")

// document.write(b);


// Task # 7

// var a = new Date();
// document.write(a + "<br>");
// var d = a.toString();
// var monCurrent = d.slice(4,7);
// var dateCurrent = d.slice(8,10);


// var b = new Date("Thu apr 23 2020")
// document.write(b + "<br>");
// var q = b.toString();
// var monRamzan = q.slice(4,7);
// var dateRamzan = q.slice(8,10);


// if (monCurrent === "May"){
//     var cal = (23-30)+30;
//     document.write(cal + "days have passed since 1st Ramzan 2020");
// }
// else if (monCurrent === "Jun"){
//     var cal = (23-30)+30+30;
//     document.write(cal + " days have passed since 1st Ramzan 2020");
// }
// else if (monCurrent === "Jul"){
//     var cal = (23-30)+30+30+30;
//     document.write(cal + " days have passed since 1st Ramzan 2020");
// }

// Task # 8

// var birthYear = "feb 19, 1999";
// document.write(birthYear + "<br>");
// var birthYearMili = birthYear.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = birthYearMili - todaymili;
// var accAge = diff/(1000*60*60*24*30*12);
// var age = math.floor(accAge);
// document.write(age)

// Task # 9

// var name = "Hamza Ahmed Mughal";
// document.write(name + "<br>");
// var month = "June";
// document.write(month + "<br>");
// var unit = 410;
// document.write(unit + "<br>");
// var perUnit = 16;
// document.write(unit + "<br>");
// var netAmount = unit*perUnit;
// document.write( "Net Amount payable (within due date) " + netAmount + "<br>");
// var surCharge = 350;
// var netAmount1 = netAmount+surCharge;
// document.write( "Net Amount payable (after due date) " + netAmount1 + "<br>");



// ******************************************* CHAP END *****************************


// Chapter 35 - 38

// Task # 1

// function todayDate(){
// var a = new Date();
// document.write(a);
// }
// todayDate();


// Task # 2

// function name(firstName,lastName){
//    var fullName = firstName + lastName;
//    document.write(fullName); 
// }
// name("HamzaAhmed","Mughal");

// Task # 3

// function add(a,b){
//     var z = a+b;
//     return z;
// }
// var g = add(2,2);
// document.write(g);

// Task # 4

// function add(num1,operator,num2){
//     if(operator == "+"){
//         var z = num1 + num2;
//         return z 
//     }
//     else if(operator == "-"){
//         var z = num1 - num2;
//         return z 
//     }
//     else if(operator == "*"){
//         var z = num1 * num2;
//         return z 
//     }
//     else if(operator == "/"){
//         var z = num1 / num2;
//         return z 
//     }
    
// }
// var g = add(5,"-",2);
// document.write(g);


// Task # 5

// function sq(num){
//     var a = num*num;
//     document.write(a);
// }
// sq(9);

// Task # 6

// function fact(num){
//     for(var i = num; i > 0; i--){
//         document.write(i + " ");
//     }
// }
// fact(5);

// Task # 7

// function counter(){
//     var start = +prompt("enter start num ");
//     var end = +prompt("enter end num ");
//     for(var i = start; i <= end; i++){
//         document.write(i + "<br>");
//     }
// }
// counter();

// Task # 8

// var base = +prompt("enter base..");
// var perp = +prompt("enter perpendicular..");
// function squ(){
// var sq = hypo*hypo;
// document.write( "square of hypo : " + sq + "<br>"); 
// }
// var hypo = (base*base) + (perp*perp);
// document.write("hypo : " + hypo + "<br>");
// squ();

// Task # 9

// function are (width,height=3){
//     var area = width*height;
//     document.write(area);
// }
// are(2);

// Task # 10

// function capital(){
// var a = "the quick brown fox";
// document.write(a.charAt(0).toUpperCase() + a.slice(1,2) + a.charAt(4).toUpperCase() 
// + a.slice(5,9) + a.charAt(10).toUpperCase() + 
// a.slice(11,15) + a.charAt(16).toUpperCase() + a.slice(17,19) );
// }
// capital();


// Task # 11

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// document.write(longestWord("Web Development Tutorials"));

// Task # 12

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

// Task # 13

// var radius = 20;
// function calcCircumference(){
//     var a = 2*3.14*radius;
//     var res = Math.floor(a);
//     document.write("circumference of Circle : " + res + "<br>");
// }
// function calcArea(){
//     var b = 3.14*(radius*radius);
//     var res1 = Math.floor(b);
//     document.write("radius : " + res1 + "<br>");
// }
// calcCircumference();
// calcArea();


// ******************************************* END *****************************