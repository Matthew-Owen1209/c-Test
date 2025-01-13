function expandRow() {
    const tableBody = document.querySelectorAll('tbody');

    tableBody.forEach((row) => {
        row.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentElement;
            parent.classList.add('tr-border');
            parent.style.padding = '30px';
            parent.style.fontSize = '1.5em';
        });

        row.addEventListener('mouseover', (e) => {
            const target = e.target;
            const parent = target.parentElement;
            parent.style.backgroundColor = 'lightgrey';
        });

        row.addEventListener('mouseout', (e) => {
            const target = e.target;
            const parent = target.parentElement;
            parent.style.backgroundColor = 'white';
            parent.style.padding = '0px';
            parent.style.fontSize = '1em';
            parent.classList.remove('tr-border');
        });
    });
};



