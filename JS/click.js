document.onclick = function(e){
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("efect-la-click");
    span.style.top = y + 'px';
    span.style.left = x + 'px'; 
    document.body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 600);
}
document.addEventListener('DOMContentLoaded',function(){
    var z = document.getElementsByTagName('a');
    z.addEventListener('click',function(){
        let x = e.pageX;
        let y = e.pageY;

        let span = document.createElement("span");
        span.classList.add("efect-la-click");
        span.style.top = y + 'px';
        span.style.left = x + 'px'; 
        document.body.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 600);
    });
});