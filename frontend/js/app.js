document.addEventListener('DOMContentLoaded', function () {

    var table = document.getElementById('to-do-list');
    var plus = document.getElementById('plus');
    var checkbox = document.getElementById('checkbox');
    var input = document.getElementById('my-input');
    var alertBox = document.getElementById('alert-box');

    console.log(table);
    console.log(plus);
    console.log(checkbox);
    console.log(input);
    console.log(alert);

// dodawanie nowego wiersza

    function addRow(type) {

        var newRow = table.insertRow(table.rows.length - 1);

        // wstawianie nowych elementów <td>

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = '<input type="checkbox" class="checkbox">';
        cell2.innerHTML = '';
        cell3.innerHTML = `<p>${type}</p>`;
        cell4.innerHTML = '<div class="trash"><img src="./images/trash.png" alt="Delete item"> </img></div>';
    }

    plus.addEventListener('click', function newElement() {

        if (input.value === '') {
            alertBox.style.display = 'inline-block';
        }
        else {
            addRow(input.value);

            // czyszczenie wartości inputa po dodaniu

            input.value = "";
        }
    });
});


