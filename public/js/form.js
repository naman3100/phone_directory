
var n=document.getElementById("n");
var phone=document.getElementById("phone");
var putName=document.getElementById("putName");
var putPhone=document.getElementById("putPhone");

phone.addEventListener("input", function()
{
    var t=phone.value;
    putPhone.textContent=t;
});

n.addEventListener("input", function()
{
    var t=n.value;
    putName.textContent=t;
});

