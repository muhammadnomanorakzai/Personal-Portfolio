const boxes = document.querySelectorAll('.animateMe')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes(){
    const triggerButton = (window.innerHeight / 5) * 4

    boxes.forEach((box)=> {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerButton){
            box.classList.add('animate__animated')
        }
        else{
            box.classList.remove('animate__animated')
        }
    })
}
