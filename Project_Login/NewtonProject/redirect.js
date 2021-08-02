function redirect()
{
    var un=document.forms["myForm"]["username"].value;
    var pw=document.forms["myForm"]["password"].value;

    if( un=="student"  && pw=="S123")
    {
        window.location.href="cv.html";
    }
    else
    {
        alert("invalid username or password");
    }
}
