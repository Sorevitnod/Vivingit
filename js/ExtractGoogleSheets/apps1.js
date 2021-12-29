//https://docs.google.com/spreadsheets/d/1EgnjzKuodX9tdwUqtW92WSdlIBZvTnrgf9cXgGGL03Y/edit?usp=sharing
const output = document.querySelector('.output');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1EgnjzKuodX9tdwUqtW92WSdlIBZvTnrgf9cXgGGL03Y';
const query1 = `/gviz/tq?`;
const endpoint1 = `${url}${ssid}${query1}`;
fetch(endpoint1)
    .then(res => res.text())
    .then(data => {
        const temp = data.substr(47).slice(0, -2);
        const json = JSON.parse(temp);
        const rows = json.table.rows;
        rows.forEach((row) => {
            const div = document.createElement('div');
            const temp1 = row.c;
            temp1.forEach((cell) => {
                const box = document.createElement('div');
                box.textContent = cell.v;
                box.classList.add('box');
                div.append(box);
            })
            output.append(div);
        })
    })
© 2021 GitHub, Inc.
Terms
Privacy
