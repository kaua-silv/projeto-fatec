let count= 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
 nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}


function alertSubmit(){

    var emaildigitado=document.getElementById("email").value;
    
    alert("Sua mensagem foi enviado com sucesso! Logo entraremos em contato com: " + emaildigitado) ;
  }