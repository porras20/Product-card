const colors = document.querySelector('.colors');
const colores = document.querySelectorAll('.color');
const fondoCard = document.querySelector('.left');

document.addEventListener('DOMContentLoaded', () =>{
    changeColor()
})


const changeColor = () =>{
    colors.addEventListener('click', (e) => {
        if (e.target.classList.contains('color')) {
            colores.forEach(color => {
                color.classList.contains('active') ?
                color.classList.remove('active') : null;
    
            });
            e.target.classList.add('active');
            setColor(e.target.id);
        }
        
    })
}

const setColor = (color)  =>{
    fondoCard.style.backgroundColor = color;
}