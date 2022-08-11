
let userName = prompt("Please Enter your name");
let gender = prompt("Please Enter your gender (male or female)");
let age = prompt("Please Enter your age");
if (age <= 0)
    alert("The Age should be a real number");



let welcomeMsg = confirm("Do you want to Skip welcome message ?");

if (welcomeMsg) {
    if (gender == "male")
        alert("welcome to our Stars Fandom  Mr. " + userName);
    else if (gender == "female")
        alert("welcometo our Stars Fandom   Ms. " + userName);
    else
        alert("welcome to our Stars Fandom  " + userName);
}


const array_questions = [];

let like = prompt("Do you like Orion?");
array_questions[0] = like

let star = prompt("Do you like star?");
array_questions[1] = star

let join = prompt("Do you want to join our club?");
array_questions[2] = join




for(let i = 0; i < array_questions.length; i++)
{
    switch(array_questions[i])
    {
        case "yes" :
        array_questions[i] = "yes"
        break;

        case "no" :
        array_questions[i] = "no"
        break;
    
    
        case "y" :
        array_questions[i] = "y"
        break;
    
        case "n" :
        array_questions[i] = "n"
        break;
    
        default : 
        array_questions[i] = "Invalid"
        break;
    
    }

    console.log(array_questions[i]);

}


let stars = prompt("please can you  rate our club ?")
if (rate < 0)
    rate = 0;
else if (rate > 5)
    rate = 5;


    alert("thanks for your rate"+ stars);

    console.log(stars);
