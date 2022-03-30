var Clicks = 0;

function AddClick() {
    Clicks = Clicks + 1;
    document.getElementById('CountedClicks').innerHTML = Clicks;
}

var Clicks1 = 0;

function AddClick1() {
    Clicks1 = Clicks1 + 1;
    document.getElementById('CountedClicks1').innerHTML = Clicks1;
}

function Comments() {
    var x = document.getElementById("cm");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Comments1() {
    var x = document.getElementById("cm1");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ValidateForm() {
    var f = document.getElementById("RegForm");
    let N = document.forms["RegForm"]["Uname"];
    window.UN = N.value
    let P = document.forms["RegForm"]["pass"];
    var A = /^[A-Za-z]+$/;
    var D = /^[A-Z]{1}[0-9]{5}$/;
    var V1 = false;
    var V2 = false;
    if (N.value == "") {
        alert("Name required");
        return V1;
    } else {
        if (N.value.match(A)) { V1 = true } else {
            alert("Name must contain alphabets only");
            return V1;
        }
    }
    if (P.value == "") {
        alert("Password required");
        return V2;
    } else {
        if (P.value.match(D)) { V2 = true } else {
            alert(" Wrong password format");
            return V2;
        }
    }

    if (V1 & V2) {
        f.setAttribute('action', "Blog.html");
    }
}

function Display() {
    document.getElementById("UI").innerHTML = window.location.search;

}