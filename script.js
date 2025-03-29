var main = document.querySelector('main')
var cursor = document.querySelector('.cursor')
var heading = document.querySelector('h1')
0
main.addEventListener("mousemove" , function(e){
    cursor.style.left = e.x + 'px'
    cursor.style.top = e.y + 'px'
})