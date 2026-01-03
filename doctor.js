function addDoctor() {

    var dname = document.getElementById("dname").value;
    var specialist = document.getElementById("specialist").value;
    var experience = document.getElementById("experience").value;
    var room = document.getElementById("room").value;

    if (dname === "" || specialist === "" || experience === "" || room === "") {
        alert("Please fill all doctor details");
        return;
    }

    var table = document.getElementById("doctorTable");
    var row = table.insertRow();

    row.insertCell(0).innerHTML = dname;
    row.insertCell(1).innerHTML = specialist;
    row.insertCell(2).innerHTML = experience + " Years";
    row.insertCell(3).innerHTML = room;

    // clear inputs
    document.getElementById("dname").value = "";
    document.getElementById("specialist").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("room").value = "";
}