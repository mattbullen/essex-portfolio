window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-units');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const blanks = document.getElementsByClassName('blank'),
                displayed = !blanks[0].style.display || blanks[0].style.display.toLowerCase() === 'display';
            for (let i = 0; i < blanks.length; i++) {
                if (displayed) {
                    blanks[i].parentElement.style.display = 'none';
                    toggle.innerText = 'Show All Units';
                } else {
                    blanks[i].parentElement.style.display = 'display';
                    toggle.innerText = 'Only Show Units With Exercises';
                }
            }
        });
    }
});
