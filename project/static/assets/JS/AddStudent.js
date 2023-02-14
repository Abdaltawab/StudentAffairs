function checkInfo() {
    var id = document.getElementById("ID").value;
    var prevented = /[a-z]/;


    var currentDate = new Date().getFullYear();

    var d = new Date(document.getElementById("DOP").value).getFullYear();
    if (currentDate - d < 18 || d > currentDate) {
        alert("Invalid Date!");
        document.getElementById("DOP").focus();
        return false;
    }

    confirm("Complete Process?");
}

function checkID() {
    var id = document.getElementById("ID");
    if (id.value.length > id.maxLength) {
        id.value = id.value.slice(0, id.maxLength);
    }

    if (id.value < 0) {
        var myRequest = new XMLHttpRequest();

        myRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("idWarning").innerHTML = myRequest.responseText;
                document.getElementById("idWA").style.visibility = "visible"
            }
        }

        myRequest.open("GET", "noNeg.txt", true);
        myRequest.send();
    }

    if ((id.value > 0 && (id.innerHTML != null)) || id.value.length === 0) {
        document.getElementById("idWarning").innerHTML = null;
        document.getElementById("idWA").style.visibility = "hidden"
    }
}

function checkLength() {
    var id = document.getElementById("ID");
    if (id.value.length < id.maxLength && id.value != 0) {
        var myRequest = new XMLHttpRequest();

        myRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("idWarning").innerHTML = myRequest.responseText;
                document.getElementById("idWA").style.visibility = "visible"
            }
        }

        myRequest.open("GET", "LessThanMin.txt", true);
        myRequest.send();
    }

    if (id.value.length === id.maxLength) {
        document.getElementById("idWarning").innerHTML = null;
        document.getElementById("idWA").style.visibility = "hidden"
    }

}