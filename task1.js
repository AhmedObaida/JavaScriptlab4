

function showBorder()
{
    let fullname = document.getElementById("fullname");
    fullname.style.border = "3px solid blue" ;
}


function removeBorder()
{
    let fullname = document.getElementById("fullname");
    fullname.style.border = "1px solid black" ;
    validateName();
}

function validateName()
{
    let fullname = document.getElementById("fullname");
    let invalidName = document.getElementById("invalidname");
    if(fullname.value.length <3 )
    {
        
        invalidName.style.display ="inline-block";
        invalidName.style.color = "blue"
        return 0;


    }
    else
    {
        invalidName.style.display ="none";
        return 1;

        
    }
}

function passwordMatching()
{
    let password= document.getElementById("password");
    let repeatPassword= document.getElementById("repeat-password");
    let passwordMatch = document.getElementById("password-match");
    if(repeatPassword.value != password.value)
    {

        passwordMatch.style.display= "inline-block";
        return 0;
    }
    else
    {

        passwordMatch.style.display= "none";
        return 1;

    }
    

}

function goToWelcomePage()
{
    if(passwordMatching() && validateName())
    {
        let fullname = document.getElementById("fullname");
        welcomeWindow = window.open("","","height=300 width=300")
        welcomeWindow.document.write("Thank you, "+ fullname.value +" for registration in our website.")
    }

}