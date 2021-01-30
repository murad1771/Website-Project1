window.addEventListener("scroll", function () { showFunction() });

function showFunction()
{
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("fade").style.display = "block";
    } else {
        document.getElementById("fade").style.display = "none";
    }
}