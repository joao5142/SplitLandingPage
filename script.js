const container = document.querySelector('.container');
const left = document.querySelector('.split.left');
const right = document.querySelector('.split.right');
const splitEl = document.querySelectorAll('.split');
const links = document.querySelectorAll('.split a');

links.forEach(link => {
    link.innerHTML = link.innerText.split('').map((letter, idx) => {
        let i = ' ';
        if (idx == 3) {
            return `<span style="margin-left:5px;transition-delay:${idx*50}ms">${letter}</span>`
        }
        return `<span style="transition-delay:${idx*50}ms">${letter}</span>`
    }).join('');
})

left.addEventListener('mouseenter', () => {
    container.classList.add('other-width');
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('other-width');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('width-change');
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('width-change');
});

//event mobile
splitEl.forEach(split => {
    split.addEventListener('touchmove', () => {
        container.classList.remove('width-change');
        container.classList.remove('other-width');
        console.log("dblclick event");
    });
});