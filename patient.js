// PAGE LOAD AAGUM POTHU DATA LOAD
window.onload = function () {
    loadPatients();
};

// ADD PATIENT
function addPatient() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var disease = document.getElementById("disease").value;
    var cabin = document.getElementById("cabin").value;

    if (name === "" || age === "" || disease === "" || cabin === "") {
        alert("Please fill all patient details");
        return;
    }

    // current date
    var today = new Date();
    var date =
        today.getDate().toString().padStart(2, "0") + "-" +
        (today.getMonth() + 1).toString().padStart(2, "0") + "-" +
        today.getFullYear();

    var patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.push({
        date: date,
        name: name,
        age: age,
        disease: disease,
        cabin: cabin
    });

    localStorage.setItem("patients", JSON.stringify(patients));

    loadPatients();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
    document.getElementById("cabin").value = "";
}

// LOAD PATIENTS TO TABLE
function loadPatients() {
    var table = document.getElementById("patientTable");

    // clear old rows (heading thavira)
    table.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Cabin</th>
        </tr>
    `;

    var patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.forEach(function (p) {
        var row = table.insertRow();
        row.insertCell(0).innerHTML = p.date;
        row.insertCell(1).innerHTML = p.name;
        row.insertCell(2).innerHTML = p.age;
        row.insertCell(3).innerHTML = p.disease;
        row.insertCell(4).innerHTML = p.cabin;
    });
}





      

    

       
     

