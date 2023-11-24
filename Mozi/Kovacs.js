let ja = true;

function Szincsere(sor){
    if (ja) {
        sor.style.backgroundColor = "aqua";
    } else {
        sor.style.backgroundColor = "purple";
    }
    ja = !ja;
}