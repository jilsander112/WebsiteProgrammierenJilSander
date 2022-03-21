let eingabefeld1 =["tfAuswahl1"]
let eingabefeld2 =["tfAuswahl2"]
let eingabefeld3 =["tfAuswahl3"]
let ergebnis;
let 1 = 50
let 8= 400  // Beispielzuordnungswerte, funktioniert jedoch nicht
let 11 = 56

function tfAuslesen () {

    /*
  function "tfAuslesen" ließt Textfelder aus und berechnet danach die Summe der Kalorien nachdem die Eingaben nach Glültigket geprüft wurden
   */

    ergebnis = eingabefeld1 + eingabefeld2 + eingabefeld3 //Rechenschritt zum Ergebnis
    document.getElementById("ausgabe").innerHTML = ergebnis; //Ergebnis an die richtige Stelle

    if (300 < ergebnis < 700) {
        document.getElementById("ausgabe").style.color = "green";
    } else {
        if (ergebnis < 850) {
            document.getElementById("ausgabe").style.color = "purple";
        } else {
            document.getElementById("ausgabe").style.color = "crimson";
        }
//Aenderung der Farbe des Ergebnisses
    }

}

function eingabeUeberpruefen(auswahl) {
    if (isNaN(auswahl)){
        console.log("Keine Zahl")
    } else {
        if ((auswahl) > 15 ){
            console.log("Eine Auswahlmöglichkeit ist nicht gültig.")
        } else {
            ergebnis = eingabefeld1 + eingabefeld2 + eingabefeld3
        }
    }
}
