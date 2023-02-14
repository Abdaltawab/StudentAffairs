function searchFocus1() {
    document.getElementById("textPart1").style.display = "none";
    document.getElementById("textField1").style.display = "inline-block";
    document.getElementById("textField1").focus();
}

function outFocus1() {
    document.getElementById("textPart1").style.display = "inline-block";
    document.getElementById("textField1").style.display = "none";
}

function regularSearch1() {
    var textField = document.getElementById("textField1").value;
    var table = document.getElementById("Table1");

    var intValue;
    if (/\d/.test(textField)) {
        var intValue = parseInt(textField);

        for (var i = 1, row; row = table.rows[i]; i++) {
            if ((((row.cells[1]).innerHTML).startsWith(' ' + textField))) {
                row.style = "display : table-row;";
                continue;
            }
            console.log(row.cells[1]);
            row.style = "display : none;";
        }
    } else {
        textField = textField.charAt(0).toUpperCase() +
            textField.slice(1);
        for (var i = 1, row; row = table.rows[i]; i++) {
            if ((((row.cells[0]).innerHTML).startsWith(' ' + textField))) {
                row.style = "display : table-row;";
                continue;
            }
            console.log(row.cells[0]);
            console.log(row.cells[1]);
            row.style = "display : none;";
        }
    }
}