
//Lab05:
/* //var name ="abdullah saif";
//var age = 23;
//var gender = "male";

//console.log("the name", name);
//console.log("the age", age);
/*console.log("the gender", gender);



if(age==23) {
    alert("you have the same age");
} else {
    console.log("you are elder than him");
}

//Lab06
//prompt("what is your name")
var gender1;
prompt("what is your gender : ")
console.log("user\`s gender", gender1)

var name1= confirm("what is you name")
console.log("user Name", name1)

var outPut = function(){
var x =1;
var y =2;
var z =x+y;

return z;
}
console.log("the output value", outPut)

function fun2(){

}

//To get the result of the first function we need to 
//call fun1. like the folowwinh
outPut;

//or

//var outPut= fin1();
//console.log("the output", outPut)
//Lab07
function gendertype() {
    var gender= prompt("what is your gender: ");
    if(gender == "female"){
        //alert("your gender is: ", gender)
        document.write("<h2> your gender is: "  + gender + " </h2>");
    } else{
        alert("other gender", gender)
    }

    return gender;
} */

// input your name, var name = prompt('enter your name ');
//input your age, var age = prompt('enter your age); 
//my name is nawal and I am 32 years old "
//my varibales are ( name , age );
//document.write("my name is " + name + "and I am"+ age+ "years old");
//console.log("my name is " + name + "and I am"+ age+ "years old");


//Lab08

var custumers = function(){
    
    var cityAddress =prompt('Type Your City adress amman or balqa:');
//The costumers city adress should be amman and balqa only.
    while(cityAddress !== 'amman' && cityAddress !== 'tafila'){
        //T & T --> will excute the the cond. wrong answers
        //T & F --> will not excute the cond. --> right answers.
        //F & T --> Will not excute the cond. --> right answer.
        //F & F --> will not excute the cond. --> right answer.
        console.log('the city inside while before again ',cityAddress);
        cityAddress=prompt('Type Your City Adress again (Amman or Balqa) :');
        console.log('the city inside while after again ',cityAddress)

    }
    alert('correct choice ');
    console.log('the city after while ',cityAddress)
    var text;
    //input
    var numberOfServices=prompt('How many services do you need?');
    //number of services 3
    //process
    for(var i=0; i<numberOfServices;i++){
        //i=0 --> 0<3 --> will excute for.
        //i=1 --> 1<3 --> will excute for.
        //i=2 --> 2<3 --> will excute for>
        //i=3 --> 3!< --> ..outside the for loop.
        if (cityAddress === 'amman'){
            console.log('the city inside for if true ',cityAddress)
            document.write('<h3> The custumer sevices are '+ numberOfServices+' car:room:tour</h3>');
        } else if(cityAddress ==='tafila'){
            //document.write(('<h3>'The costumer sevices car:tour'</h3>');
            console.log('the city inside for  if false  ',cityAddress)
            document.write("<h2> your city name is " +cityAddress+"</h2");

        }
        //output
    } // end of for 
    alert('Done');
    
    
} // end of function 