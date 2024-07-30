function ValidatePAN() {
    var txtPANCard = document.getElementById("txtPANCard");
    var lblPANCard = document.getElementById("lblPANCard")
    var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (regex.test(txtPANCard.value)) {
        lblPANCard.style.visibility = "hidden";
        return true;
    } else {
        lblPANCard.style.visibility = "visible";
        return false;
    }
}