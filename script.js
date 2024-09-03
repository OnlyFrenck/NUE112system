function check() {
    var email = document.getElementById("email").value;
    var psw = document.getElementById("password").value;
    console.log(email+" "+psw);
    if(email.endsWith("nue112-fvg.it"))
        document.cookie = "foo=1; domain=onlyfrenck.github.io";
    else
        window.location.href = "https://kerlemn.github.io/repartometro"
}