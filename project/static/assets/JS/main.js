function searchFocus() {
    document.getElementById("textPart").style.display = "none";
    document.getElementById("textField").style.display = "block";
    document.getElementById("textField").focus();
}

function outFocus() {
    console.log("Entered");
    document.getElementById("textPart").style.display = "block";
    document.getElementById("textField").style.display = "none";
}

function customize() {
    var labelList;
    if (window.innerWidth <= 1080) {
        labelList = document.getElementsByClassName("label");
        for (i = 0; i < labelList.length; i++) {
            labelList[i].style.display = "none";
        }
    } else {
        labelList = document.getElementsByClassName("label");
        for (i = 0; i < labelList.length; i++) {
            labelList[i].style.display = "inline-block";
        }
    }

    if (window.innerWidth <= 744) {
        labelList = document.getElementById("siteName");
        labelList.style.display = "none";
    } else {
        labelList = document.getElementById("siteName");
        labelList.style.display = "block";
    }

    if (window.innerWidth <= 970) {
        labelList = document.getElementsByClassName("attributeslabel");
        for (i = 0; i < labelList.length; i++) {
            labelList[i].style.display = "none";
        }
    } else {
        labelList = document.getElementsByClassName("attributeslabel");
        for (i = 0; i < labelList.length; i++) {
            labelList[i].style.display = "inline-block";
        }
    }
}