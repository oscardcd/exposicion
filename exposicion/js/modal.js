function openSignificado(significado){
    var i;
    var x=
    document.getElementsByClassName("significado");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(significado).style.display="block";
}