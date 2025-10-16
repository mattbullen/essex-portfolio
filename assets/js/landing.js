window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-units');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const blanks = document.getElementsByClassName('blank'),
                displayed = !blanks[0].parentElement.style.display || blanks[0].parentElement.style.display.toLowerCase() === 'block';
            for (let i = 0; i < blanks.length; i++) {
                if (blanks[i] && blanks[i].parentElement) {
                    if (displayed) {
                        blanks[i].parentElement.style.display = 'none';
                        toggle.innerText = 'Show All Units';
                    } else {
                        blanks[i].parentElement.style.display = 'block';
                        toggle.innerText = 'Only Show Units With Exercises';
                    }
                }
                if (blanks[i] && blanks[i].parentElement && blanks[i].parentElement.previousElementSibling) {
                    if (displayed) {
                        blanks[i].parentElement.previousElementSibling.style.display = 'none';
                    } else {
                        blanks[i].parentElement.previousElementSibling.style.display = 'block';
                    }
                }
            }
        });
    }
});
