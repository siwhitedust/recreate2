const img = document.getElementById('imgA')
const img2 = document.getElementById('imgB')
const img3 = document.getElementById('imgC')
const img4 = document.getElementById('imgD')
const img5 = document.getElementById('imgE')
const img6 = document.getElementById('imgF')


const txt = document.getElementById("pCB3")
const txt2 = document.getElementById("pCB3-2")
const txt3 = document.getElementById("pCB3-3")
const txt4 = document.getElementById("pCB3-4")
const txt5 = document.getElementById("pCB3-5")
const txt6 = document.getElementById("pCB3-6")



img.addEventListener('mouseenter', function(){
    img.style.filter = "blur(5px)"
    img.style.transition = "0.3s all ease-in-out"
    txt.style.display = "flex"
})

img.addEventListener('mouseleave', function(){
    img.style.filter = "blur(0)"
    txt.style.display = "none"
})

img2.addEventListener('mouseenter', function(){
    img2.style.filter = "blur(5px)"
    img2.style.transition = "0.3s all ease-in-out"
    txt2.style.display = "flex"
})

img2.addEventListener('mouseleave', function(){
    img2.style.filter = "blur(0)"
    txt2.style.display = "none"
})

img3.addEventListener('mouseenter', function(){
    img3.style.filter = "blur(5px)"
    img3.style.transition = "0.3s all ease-in-out"
    txt3.style.display = "flex"
})

img3.addEventListener('mouseleave', function(){
    img3.style.filter = "blur(0)"
    txt3.style.display = "none"
})

img4.addEventListener('mouseenter', function(){
    img4.style.filter = "blur(5px)"
    img4.style.transition = "0.3s all ease-in-out"
    txt4.style.display = "flex"
})

img4.addEventListener('mouseleave', function(){
    img4.style.filter = "blur(0)"
    txt4.style.display = "none"
})

img5.addEventListener('mouseenter', function(){
    img5.style.filter = "blur(5px)"
    img5.style.transition = "0.3s all ease-in-out"
    txt5.style.display = "flex"
})

img5.addEventListener('mouseleave', function(){
    img5.style.filter = "blur(0)"
    txt5.style.display = "none"
})

img6.addEventListener('mouseenter', function(){
    img6.style.filter = "blur(5px)"
    img6.style.transition = "0.3s all ease-in-out"
    txt6.style.display = "flex"
})

img6.addEventListener('mouseleave', function(){
    img6.style.filter = "blur(0)"
    txt6.style.display = "none"
})