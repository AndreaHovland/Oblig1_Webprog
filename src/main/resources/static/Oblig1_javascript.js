// Oblig1 javascript

// Array for å lagre kjøpte billetter
let billetter = [];

// Funksjon for å kjøpe billetter
function kjopteBiletter() {
    // Hent verdier fra input-feltene
    let film = document.getElementById("filmer").value;
    let Antall = document.getElementById("antallBiletter").value;
    let Fornavn = document.getElementById("fornavn").value;
    let Etternavn = document.getElementById("etternavn").value;
    let TelefonNr = document.getElementById("telefonNr").value;
    let Epost = document.getElementById("epost").value;

    const bilettValgt : {...}={
        film: film, Antall, Fornavn, Etternavn, TelefonNr, Epost
    };

    // Validering av input-feltene
    if (film === "Velg film" || antallBiletter === "" || fornavn === "" || etternavn === "" || telefonNr === "" || epost === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }

    // Legg til billetten i billetter-arrayet
    billetter.push({
        film: film,
        antallBiletter: antallBiletter,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonNr: telefonNr,
        epost: epost
    });

    // Oppdater visningen av billetter
    visBilletter();
}
//Tøm inputfeltene
document.getElementById('filmer').value = '';
document.getElementById('antallBiletter').value = '';
document.getElementById('fornavn').value = '';
document.getElementById('etternavn').value = '';
document.getElementById('telefonNr').value = '';
document.getElementById('epost').value = '';
document.getElementById('feilAntall').value = '';
document.getElementById('feilFornavn').value = '';
document.getElementById('feilEtternavn').value = '';
document.getElementById('feilTelefonNr').value = '';
document.getElementById('feilEpost').value = '';
}
//funskjon for å vise kjøpte biletter
function visKjopteBiletter():{
    let bilettListe :  =document.getElementById("kjopteBiletter");
    bilettListe.innerHTML="";
    let htmlListe: string ="";
    for (let i : =0; i<biletter.lenght; i++){
        let bilett=biletter[i];
        htmlListe+=<li>Film: ${bilett.film}, Antall: ${bilett.antall}, Fornavn: ${bilett.fornavn}, Etternavn: ${bilett.etternavn}, TelefonNr: ${bilett.telefonNr}, Epost: ${bilett.epost}</li>
    }
    bilettListe.innerHTML=htmlListe;
}
//funskjon for å slette alle billettene
function slettAlleBiletter(): {
    biletter=[];
    visKjopteBiletter
});
}



/*
// Funksjon for å slette alle billetter
function slettAlleBiletter() {
    billetter = [];
    visBilletter();
}

// Funksjon for å vise billetter
function visBilletter() {
    let liste = document.getElementById("kjopteBiletter");
    liste.innerHTML = "";

    // Gå gjennom hver billett i billetter-arrayet og legg til i listen
    billetter.forEach(function (billett) {
        let listItem = document.createElement("li");
        listItem.textContent = `Film: ${billett.film}, Antall: ${billett.antallBiletter}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefonNr}, E-post: ${billett.epost};
        liste.appendChild(listItem);
    });
 */