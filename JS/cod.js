var afismeniu = 0;
function meniu()
{
    if (!afismeniu)
    {
        afismeniu = 1;
        document.getElementById('submeniu').style.display='block';
        document.getElementById('butonsubmeniu').classList.add('menusisubmeniu');
    }
    else
    {
        afismeniu = 0;
        document.getElementById('submeniu').style.display='none';
        document.getElementById('butonsubmeniu').classList.remove('menusisubmeniu');
    }
}
function copierefill1()
{
    var text = document.getElementById("fill1");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
}
function copierefill2()
{
    var text = document.getElementById("fill2");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
}
function copy(id)
{
    var text = document.getElementById(id);
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
   // alert("merge");
}
function evaluareelemente(){
    var nr = 0;
    if (document.getElementById("1").checked) nr++;
    if (document.getElementById("2").checked) nr++;
    if (document.getElementById("3").checked) nr++;
    if (document.getElementById("4").checked) nr++;
    if (document.getElementById("5").checked) nr++;
    if (document.getElementById("6").checked) nr++;
    document.getElementById('elementescor').innerHTML = nr + "/6";
}
document.addEventListener('DOMContentLoaded', function() {
    const animatie = document.querySelector('.antet');
    if (window.scrollY > 60) 
    {
        animatie.style.position = 'sticky';
        animatie.style.webkitAnimationPlayState = 'paused';
    } 
    animatie.addEventListener('animationend', function() {
        animatie.style.position = 'sticky';
    });
});