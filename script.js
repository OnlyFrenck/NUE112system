function check() {
    var email = document.getElementById("email").value;
    var psw = document.getElementById("password").value;
    console.log(email+" "+psw);
    if(email.endsWith("nue112-fvg.it"))
        document.cookie = "foo=1; domain=onlyfrenck.github.io";
    else
        window.location.href = "https://kerlemn.github.io/repartometro"
}

function populate() {
    const vehicles = [
        ["sierra-947", "GR 832 UE (Ambulanza Sierra 947 SOGIT)"],
        ["sierra-279", "GA 755 HN (Automedica Sierra 279 SOGIT)"],
        ["ABP9", "VF 89773 (ABP 009)"],
        ["GDF", "GF 973117 (GDF 73)"],
        ["POL782", "R9110973 (POL782)"],
        ["CC611", "CC 907165 (CC 611)"],
        ["I-GOOO", "Airbus Helicopter EC135 (I-GOOO)"],
        ["I-RESQ", "Airbus Helicopter EC135 (I-RESQ)"],
        ["I-HFVG", "Airbus Helicopter EC135 (I-HFVG)"],
        ["I-WIND", "Airbus Helicopter EC135 (I-WIND)"],
        ["all", "Tutti i mezzi disponibili (MAXIEM)"]
    ]
    var div = document.getElementById("emergencyvehicles");
    for(veh of vehicles){
        div.innerHTML+='<label><input type="checkbox" name="'+veh[0]+'" value="'+veh[0]+' style="width:auto;"/> '+veh[1]+' </label>';
    }
}

function mobility() {
    var invio = document.getElementById("send");
    invio.innerHTML='I mezzi selezionati sono stati inviati correttamente!';
}

function alert(corpo) {
    var allerta = document.getElementById("services")
    allerta.innerHTML='Il servizio di emergenza selezionato ('+corpo+') è stato allertato correttamente!'
}