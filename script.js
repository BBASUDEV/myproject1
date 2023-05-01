document
  .getElementById("add-employee-button")
  .addEventListener("click", function () {
    const table = document
      .getElementById("employee-table")
      .getElementsByTagName("tbody")[0];

    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "form-control";
    nameCell.appendChild(nameInput);
    newRow.appendChild(nameCell);

    const departmentCell = document.createElement("td");
    const departmentInput = document.createElement("input");
    departmentInput.type = "text";
    departmentInput.className = "form-control";
    departmentCell.appendChild(departmentInput);
    newRow.appendChild(departmentCell);

    const phoneCell = document.createElement("td");
    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.className = "form-control";
    phoneCell.appendChild(phoneInput);
    newRow.appendChild(phoneCell);

    const actionCell = document.createElement("td");
    const addButton = document.createElement("button");
    addButton.className = "btn btn-primary";
    addButton.innerHTML = "Add";
    addButton.onclick = function () {
      const name = nameInput.value;
      const department = departmentInput.value;
      const phone = phoneInput.value;

      const dataRow = document.createElement("tr");

      const nameDataCell = document.createElement("td");
      nameDataCell.innerHTML = name;
      dataRow.appendChild(nameDataCell);

      const departmentDataCell = document.createElement("td");
      departmentDataCell.innerHTML = department;
      dataRow.appendChild(departmentDataCell);

      const phoneDataCell = document.createElement("td");
      phoneDataCell.innerHTML = phone;
      dataRow.appendChild(phoneDataCell);

      const actionDataCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger";
      deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      deleteButton.onclick = function () {
        table.removeChild(dataRow);
      };
      actionDataCell.appendChild(deleteButton);

      const editButton = document.createElement("button");
      editButton.className = "btn btn-primary ml-2";
      editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
      editButton.onclick = function () {
        editEmployee(dataRow);
      };
      actionDataCell.appendChild(editButton);

      dataRow.appendChild(actionDataCell);

      table.appendChild(dataRow);

      table.removeChild(newRow);

      // Show the "No data" message if there are no more records in the table
      const noDataMessage = document.getElementById("no-data-message");
      if (noDataMessage) {
        noDataMessage.remove();
      }
    };

    const cancelButton = document.createElement("button");
    cancelButton.className = "btn btn-secondary ml-2";
    cancelButton.innerHTML = "Cancel";
    cancelButton.onclick = function () {
      table.removeChild(newRow);

      // Show the "No data" message if there are no more records in the table
      if (table.rows.length === 0) {
        const noDataMessage = document.createElement("tr");
        noDataMessage.id = "no-data-message";
        const cell = noDataMessage.insertCell();
        cell.colSpan = 4;
        cell.innerHTML = "No data";
        table.appendChild(noDataMessage);
      }
    };

    actionCell.appendChild(addButton);
    actionCell.appendChild(cancelButton);
    newRow.appendChild(actionCell);

    table.appendChild(newRow);
  });

function editEmployee(row) {
  const nameCell = row.cells[0];
  const departmentCell = row.cells[1];
  const phoneCell = row.cells[2];

  const name = nameCell.innerHTML;
  const department = departmentCell.innerHTML;
  const phone = phoneCell.innerHTML;

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = name;
  nameCell.innerHTML = "";
  nameCell.appendChild(nameInput);

  const departmentInput = document.createElement("input");
  departmentInput.type = "text";
  departmentInput.value = department;
  departmentCell.innerHTML = "";
  departmentCell.appendChild(departmentInput);

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.value = phone;
  phoneCell.innerHTML = "";
  phoneCell.appendChild(phoneInput);

  const updateButton = document.createElement("button");
  updateButton.className = "btn btn-primary";
  updateButton.innerHTML = "Update";
  updateButton.onclick = function () {
    const updatedName = nameInput.value;
    const updatedDepartment = departmentInput.value;
    const updatedPhone = phoneInput.value;

    nameCell.innerHTML = updatedName;
    departmentCell.innerHTML = updatedDepartment;
    phoneCell.innerHTML = updatedPhone;

    const actionCell = row.cells[3];
    actionCell.innerHTML = "";
    const editButton = document.createElement("button");
    editButton.className = "btn btn-primary";
    editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editButton.onclick = function () {
      editEmployee(row);
    };
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger ml-2";
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.onclick = function () {
      deleteEmployee(row);
    };
    actionCell.appendChild(deleteButton);
  };

  const cancelButton = document.createElement("button");
  cancelButton.className = "btn btn-secondary ml-2";
  cancelButton.innerHTML = "Cancel";
  cancelButton.onclick = function () {
    nameCell.innerHTML = name;
    departmentCell.innerHTML = department;
    phoneCell.innerHTML = phone;

    const actionCell = row.cells[3];
    actionCell.innerHTML = "";
    const editButton = document.createElement("button");
    editButton.className = "btn btn-primary";
    editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editButton.onclick = function () {
      editEmployee(row);
    };
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger ml-2";
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.onclick = function () {
      deleteEmployee(row);
    };
    actionCell.appendChild(deleteButton);
  };

  const actionCell = row.cells[3];
  actionCell.innerHTML = "";
  actionCell.appendChild(updateButton);
  actionCell.appendChild(cancelButton);
}

function deleteEmployee(row) {
  row.parentNode.removeChild(row);

  // Show the "No data" message if there are no more records in the table
  const table = document.getElementById("employee-table");
  if (table.rows.length === 1) {
    const noDataRow = document.createElement("tr");
    const noDataCell = document.createElement("td");
    noDataCell.setAttribute("colspan", "4");
    noDataCell.innerHTML = "No data";
    noDataRow.appendChild(noDataCell);
    noDataRow.id = "no-data-message";
    table.appendChild(noDataRow);
  }
}
