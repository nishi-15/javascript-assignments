let selectedRow = null;

//Fuction is called after submit button clicked by user
function onEmployeeDetailSubmit() {

    //Create object of readEmployeeData Class
    let formData = new readEmployeeData();

    //If selectedRow is null, then it will perform insertion else updation
    if (selectedRow === null) createNewRecord(formData);
    else updateRecord(formData);
    reset();
}

// Getting value from User using class
class readEmployeeData {
    constructor() {
        const empData = new Array();
        empData[0] = document.getElementById('emp_id').value;
        empData[1] = document.getElementById('emp_name').value;
        empData[2] = document.getElementById('emp_address').value;
        empData[3] = document.getElementById('emp_designation').value;
        return empData;
    }
}

//Used iterator to fetch data
function iterator(empDetail) {
    let i = 0;
    return {
        next: function () {
            if (i < empDetail.length) {
                return {
                    value: empDetail[i++],
                    done: false
                }
            }
            else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

// Inserting & Showing Record in Another Table-----------------------------------------------
function createNewRecord(data) {

    let it = iterator(data);

    let table = document
        .getElementById("empList")
        .getElementsByTagName("tbody")[0];

    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = it.next().value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = it.next().value;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = it.next().value;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = it.next().value;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onUpdate(this)">Edit</a>`;
    reset();
}

// Reseting Form details
function reset() {
    document.getElementById('emp_id').value = "";
    document.getElementById('emp_name').value = "";
    document.getElementById('emp_address').value = "";
    document.getElementById('emp_designation').value = "";
    selectedRow = null;
}

//Fill details in form, when user clicks on edit button from list of records in table
function onUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('emp_id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('emp_name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('emp_address').value = selectedRow.cells[2].innerHTML;
    document.getElementById('emp_designation').value = selectedRow.cells[3].innerHTML;
}

// Update Records in table
function updateRecord(formData) {

    const data = iterator(formData);

    selectedRow.cells[0].innerHTML = data.next().value;
    selectedRow.cells[1].innerHTML = data.next().value;
    selectedRow.cells[2].innerHTML = data.next().value;
    selectedRow.cells[3].innerHTML = data.next().value;
}
