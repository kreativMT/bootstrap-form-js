function teruletkerulet() {
    var r = document.getElementById('sugar').value;
    r = Number(r);

    var T = r*r*Math.PI ;
    var K = 2*r*Math.PI;

    document.getElementById('ter').innerText = T;
    document.getElementById('ker').innerText = K;
}