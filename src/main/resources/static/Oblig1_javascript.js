// Oblig1 javascript

// Array for å lagre kjøpte billetter
let biletter = [];

// Funksjon for å kjøpe billetter
function kjopteBiletter() {
    // Hent verdier fra input-feltene
    let Film = document.getElementById("filmer").value;
    let AntallBiletter = document.getElementById("antallBiletter").value;
    let Fornavn = document.getElementById("fornavn").value;
    let Etternavn = document.getElementById("etternavn").value;
    let TelefonNr = document.getElementById("telefonNr").value;
    let Epost = document.getElementById("epost").value;

    // Regex validering på telefonnr (10 siffer)
    const telefonRegex = /^\d{10}$/;

    //Regex validering på epost
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const bilettValgt : {}={
        film: Film, AntallBiletter, Fornavn, Etternavn, TelefonNr, Epost
    };


    // Validering av input-feltene
    if (film === "Velg film" || antallBiletter === "" || fornavn === "" || etternavn === "" || telefonNr === "" || epost === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }
    if (!telefonRegex.test(TelefonNr)) {
        alert("Vennligst skriv inn et gyldig telefonnummer med 10 sifre.");
        return;
    }

    if (!epostRegex.test(Epost)) {
        alert("Vennligst skriv inn en gyldig e-postadresse.");
        return;
    }

    // Legg til billetten i billetter-arrayet
    biletter.push({
        film: Film,
        antallBiletter: AntallBiletter,
        fornavn: Fornavn,
        etternavn: Etternavn,
        telefonNr: TelefonNr,
        epost: Epost
    });

    // Oppdater visningen av billetter
    bilettValgt();
}
//Tøm inputfeltene
document.getElementById('filmer').value = "";
document.getElementById('antallBiletter').value = "";
document.getElementById('fornavn').value = "";
document.getElementById('etternavn').value = "";
document.getElementById('telefonNr').value = "";
document.getElementById('epost').value = "";
document.getElementById('feilAntall').value ="";
document.getElementById('feilFornavn').value = "";
document.getElementById('feilEtternavn').value = "";
document.getElementById('feilTelefonNr').value = "";
document.getElementById('feilEpost').value = "";

//funskjon for å vise kjøpte biletter
function visKjopteBiletter(){
    let bilettListe : any =document.getElementById("kjopteBiletter");
    bilettListe.innerHTML="";
    let htmlListe: string ="";
    for (let i =0; i<biletter.lenght; i++){
        let bilett=biletter[i];
        htmlListe+=<li>Film: ${bilett.film}, Antall: ${bilett.antallBiletter}, Fornavn: ${bilett.fornavn}, Etternavn: ${bilett.etternavn}, TelefonNr: ${bilett.telefonNr}, Epost: ${bilett.epost}</li>
    }
    bilettListe.innerHTML=htmlListe;
}
//funskjon for å slette alle billettene
function slettAlleBilletter() {
    biletter= [];
    visKjopteBiletter();
}