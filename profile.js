const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            about.style.display = "inline"
            about2.style.display = "inline"
        }
    })
})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            experince.style.display = "flex"
            experince2.style.display = "flex"
            experince3.style.display = "grid"
        }
    })
})

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            footer.style.display = "flex"
        }
    })
})




observer.observe(document.getElementById('about'))
observer.observe(document.getElementById('CB5'))

observer2.observe(document.getElementById('CB6'))
observer2.observe(document.getElementById('CB7'))
observer2.observe(document.getElementById('CB8'))

observer3.observe(document.getElementById('containerBesar9'))
const footer = document.getElementById('h1CB9')

const about = document.getElementById('pCB4')
const about2 = document.getElementById('pCB5')
const experince = document.getElementById('pCB6')
const experince2 = document.getElementById('pCB7')
const experince3 = document.getElementById('divCK')
