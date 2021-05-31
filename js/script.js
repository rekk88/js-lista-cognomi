// console.log("scriptttttttttttttttttttt");
var lista = ["mail@lol.com", "viafarlocca@indirizzo.com", "numero22@gmail.com"];
var trovato=false;

//input
var mail = prompt("inserisci la mail : ");
if(mail.indexOf("@") != -1){
    for(var i=0 ; i < lista.length ; i++){
        // console.log(lista[i]);
        if(mail == lista[i]){
            trovato = true;
        }
    }
    if(trovato==true){
        console.log("appost , sei in lista");
        document.getElementById("output").innerHTML="appost , sei in lista";
    }
    else{
        console.log("non sei in lista , via di qui !!!");
        document.getElementById("output").innerHTML="non sei in lista , via di qui !!!";
    }
}
else{
    document.getElementById("output").innerHTML="mail non corretta";
}


