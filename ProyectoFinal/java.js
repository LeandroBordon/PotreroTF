circle = document.getElementById("circle")
circlearray = circle.textContent.split('')
circle.textContent = ''
for(var i = 0; i< circlearray.length; i++){
    circle.innerHTML += '<span style="transform:rotate('+((i+26)*10)+'deg)">'+ circlearray[i]+'</span>'
}