// console.log("scriptttttttttttttttttttt");

//sezione mail
var lista = ["mail@lol.com", "viafarlocca@indirizzo.com", "numero22@gmail.com"];
var trovato=false;

//input
var mail = prompt("inserisci la mail : ");

if(mail.indexOf("@") != -1){ // controllo sull'inserimento
    for(let i=0 ; i < lista.length ; i++){
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
else{ //se la stringa inserita non è una mail 
    document.getElementById("output").innerHTML="mail non corretta";
}

//sezione Cognomi
var cognomi = ["Bianchi","Neri","Rossi","Verdi","Gialli"];
var cognome = prompt("inserisci il cognome : ");
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1); // al fine di ordinare rendo la prima lettera maiuscola indipendetemente che lo sia già o meno
console.log(cognome);
cognomi.push(cognome); //inserimento input a fine array
console.log(cognomi); //visualizzazione array non ordinato
cognomi.sort(); //ordinamento array
console.log(cognomi); //visualizzazione array ordinato


