function imgChange(x) {
    document.getElementById("mainimg").src = x.src;
}


function cartbtn() {
    var qty = 1;
    if (table.rows.length < 1) {
        // Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Product Name";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Size";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Price";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Quantity";
        let heading_5 = document.createElement('th');
        heading_5.innerHTML = "TotalPrice";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        thead.appendChild(row_1);


        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = pname.innerText;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = ssize.innerText;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = sprice.innerText;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = qty;
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.innerHTML = sprice.innerText;

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        tbody.appendChild(row_2);
    }
    else
        if (table.rows.length > 1) {
            outerloop:
            for (var i = 1; i <= table.rows.length - 1; i++) {
                var objCells = table.rows.item(i).cells;

                for (var j = 1; j <= 1; j++) {
                    if (objCells.item(j).innerText == ssize.innerText) {
                        objCells.item(3).innerText = parseInt(objCells.item(3).innerText) + 1
                        objCells.item(4).innerText = parseInt(objCells.item(3).innerText) * parseInt(sprice.innerText)
                        break outerloop;
                    }
                }

                if (i == table.rows.length - 1) {
                    let row_2 = document.createElement('tr');
                    let row_2_data_1 = document.createElement('td');
                    row_2_data_1.innerHTML = pname.innerText;
                    let row_2_data_2 = document.createElement('td');
                    row_2_data_2.innerHTML = ssize.innerText;
                    let row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML = sprice.innerText;
                    let row_2_data_4 = document.createElement('td');
                    row_2_data_4.innerHTML = qty;
                    let row_2_data_5 = document.createElement('td');
                    row_2_data_5.innerHTML = sprice.innerText;

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    tbody.appendChild(row_2);
                    break outerloop;
                }
            }
        }
}

function changedata(x) {

    if (x.innerText === "2-3") {
        sprice.innerText = "2090"
        ssize.innerText = "2-3"
    } else
        if (x.innerText === "3-4") {
            sprice.innerText = "2090"
            ssize.innerText = "3-4"
        } else
            if (x.innerText === "4-5") {
                sprice.innerText = "2390"
                ssize.innerText = "4-5"
            } else
                if (x.innerText === "5-6") {
                    sprice.innerText = "2390"
                    ssize.innerText = "5-6"
                } else
                    if (x.innerText === "6-7") {
                        sprice.innerText = "2590"
                        ssize.innerText = "6-7"
                    } else
                        if (x.innerText === "7-8") {
                            sprice.innerText = "2590"
                            ssize.innerText = "7-8"
                        } else
                            if (x.innerText === "8-9") {
                                sprice.innerText = "2790"
                                ssize.innerText = "8-9"
                            } else
                                if (x.innerText === "9-10") {
                                    sprice.innerText = "2790"
                                    ssize.innerText = "9-10"
                                }

}