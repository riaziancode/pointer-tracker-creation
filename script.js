window.addEventListener('pointermove', (event)=> {
    let pointer = document.getElementById('pointer');

    let top = event.clientY;
    let left = event.clientX;

    pointer.style.left = (`${left-4}px`);
    pointer.style.top = `${top}px`;
})