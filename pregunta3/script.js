function guardar(){
   
    var _fech = document.getElementById("fech").value;
    var _tipo = document.getElementById("tipo").value;
    var _vaso = document.getElementById("vaso").value;

    if(_vaso < 8){
        var _msm = "Tomar más agua"
    } else{
        var _msm = "Meta alcanzada"
    }

    var fila="<tr><td>"+_fech+"</td><td>"+_tipo +"</td><td>"+_vaso +"</td></tr>"+_msm +"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}

