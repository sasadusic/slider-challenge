const prev = document.querySelector('.arrow-left')
const next = document.querySelector('.arrow-right')
const items = document.querySelectorAll('.item')
const slider = document.querySelector('#slider')

// let index = 1

// prev.onclick = () => {
//         document.querySelector(`#item-${index}`).style.display = 'none'
//         index-- 
//         if(index < 1) {index = 2}
//         console.log(index)
//         document.querySelector(`#item-${index}`).style.display = 'flex'
// }

// next.onclick = () => {
//     document.querySelector(`#item-${index}`).style.display = 'none'
//     index++
//     if(index > 2) {index = 1}
//     console.log(index)
//     document.querySelector(`#item-${index}`).style.display = 'flex'
// }
let index = 0

next.onclick = () => {
    if(index < 1){
        index++
    }else{
        index = 0
    }
    updateSlider()
}
prev.onclick = () => {
    if(index > 0){
        index--
    }else{
        index = 1
    }
    updateSlider()
}

function updateSlider() {
    const translateValue = -index * 100
    slider.style.transform = `translateX(${translateValue}%)`
}