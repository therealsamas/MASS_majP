// Define an array to store appliance data
let applianceData = [];

// Function to add an appliance to the table and array
function addAppliance(name, status, consumption, voltage, current, energy, connectionType) {
    const applianceTable = document.getElementById('applianceTable').getElementsByTagName('tbody')[0];
    const row = applianceTable.insertRow();
    const nameCell = row.insertCell(0);
    const statusCell = row.insertCell(1);
    const consumptionCell = row.insertCell(2);
    const voltageCell = row.insertCell(3);
    const currentCell = row.insertCell(4);
    const energyCell = row.insertCell(5);
    const connectionTypeCell = row.insertCell(6);
    const actionCell = row.insertCell(7);

    nameCell.textContent = name;
    statusCell.textContent = status;
    consumptionCell.textContent = consumption;
    voltageCell.textContent = voltage;
    currentCell.textContent = current;
    energyCell.textContent = energy;
    connectionTypeCell.textContent = connectionType;

    // Add a delete button to the action cell
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        // Remove the appliance from the table and array
        const rowIndex = row.rowIndex - 1; // Subtract 1 to account for header row
        applianceTable.deleteRow(rowIndex);
        applianceData.splice(rowIndex, 1);
    });

    actionCell.appendChild(deleteButton);

    // Add the appliance to the array
    applianceData.push({ name, status, consumption, voltage, current, energy, connectionType });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const consumption = parseFloat(document.getElementById('consumption').value);
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const energy = parseFloat(document.getElementById('energy').value);
    const connectionType = document.getElementById('connectionType').value;

    // Add the appliance to the table and array
    addAppliance(name, status, consumption, voltage, current, energy, connectionType);

    // Reset the form
    document.getElementById('applianceForm').reset();
}

// Function to add dummy appliances
function addDummyAppliances() {
    const dummyAppliances = [
        {
            name: 'Smart TV',
            status: 'On',
            consumption: 120,
            voltage: 120,
            current: 1,
            energy: 0.5,
            connectionType: 'Wi-Fi',
        },
        {
            name: 'Refrigerator',
            status: 'On',
            consumption: 150,
            voltage: 120,
            current: 1.25,
            energy: 2.0,
            connectionType: 'Ethernet',
        },
        {
            name: 'Light 1',
            status: 'Off',
            consumption: 10,
            voltage: 120,
            current: 0.083,
            energy: 0.02,
            connectionType: 'Bluetooth',
        },
    ];

    // Add dummy appliances to the table and array
    dummyAppliances.forEach(appliance => {
        addAppliance(
            appliance.name,
            appliance.status,
            appliance.consumption,
            appliance.voltage,
            appliance.current,
            appliance.energy,
            appliance.connectionType
        );
    });
}

// Attach the form submission event listener
document.getElementById('applianceForm').addEventListener('submit', handleSubmit);

// Call the function to add dummy appliances when the page loads
window.addEventListener('load', addDummyAppliances);
