let eingabefeld1;
let eingabefeld2;
let eingabefeld3;
let ergebnis = 0
let ergebnisgesamt

function tfAuslesen () {

    /*
  function "tfAuslesen" ließt Textfelder aus und berechnet danach die Summe der Kalorien nachdem die Eingaben nach Glültigket geprüft wurden.
   */

    eingabefeld1 = parseInt(document.getElementById("tfAuswah1").value);
    eingabefeld2 = parseInt(document.getElementById("tfAuswahl2").value);
    eingabefeld3 = parseInt(document.getElementById("tfAuswahl3").value); // Auslesen der Eingabefelder

eingabeUeberpruefen(eingabefeld1)
eingabeUeberpruefen(eingabefeld2)
eingabeUeberpruefen(eingabefeld3)  // Werte die in eingabfeld1-3 zugeordnet wurden werden überprüft

if (ergebnis < 700) {
    document.getElementById("ausgabe").style.color = "green";
} else if
(ergebnis < 850) {
        document.getElementById("ausgabe").style.color = "purple"; //Aenderung der Farbe des Ergebnisses
    } else {
        document.getElementById("ausgabe").style.color = "crimson";
    }

// Aenderung der Farbe des Ergebnisses

ergebnisgesamt = eingabefeld1 + eingabefeld2 + eingabefeld3 //Rechenschritt zum Ergebnis
document.getElementById("ausgabe").innerHTML = ergebnis; //Ergebnis an die richtige Stelle
ergebnis = 0;

    if (eingabefeld1 === 1) {
        ergebnis = ergebnis + 36
    } else if (eingabefeld1 === 2)
    {
        ergebnis = ergebnis + 57
    } else if (eingabefeld1 === 3)
    {
        ergebnis = ergebnis + 90
    } else if (eingabefeld1 === 4)
    {
        ergebnis = ergebnis + 39
    }
    if (eingabefeld2 === 5) {
        ergebnis = ergebnis + 530
    } else if (eingabefeld2 === 6)
    {
        ergebnis = ergebnis + 495
    } else if (eingabefeld2 === 7)
    {
        ergebnis = ergebnis + 630
    } else if (eingabefeld2 === 8)
    {
        ergebnis = ergebnis + 770
    } else if (eingabefeld2 === 9)
    {
        ergebnis = ergebnis + 710
    } else if (eingabefeld2 === 10)
    {
        ergebnis = ergebnis + 800
    }
    if (eingabefeld3 === 11) {
        ergebnis = ergebnis + 300
    } else if (eingabefeld3 === 12)
    {
        ergebnis = ergebnis + 250
    } else if (eingabefeld3 === 13)
    {
        ergebnis = ergebnis + 240
    } else if (eingabefeld3 === 14)
    {
        ergebnis = ergebnis + 70
    } else if (eingabefeld3 === 15) {
        ergebnis = ergebnis + 90
    }
}
 // Berechnung der Kalorien anhand der ausgelesenen Werte in eingabefeld1-3. Mit if werden alle möglichen Werte für ein Eingabefeld geprüft und die entsprechend zugeordnete Kalorien zu ergebnisgesamt addiert

function eingabeUeberpruefen(auswahl) {
    if (isNaN(auswahl)){
        document.getElementById("prüfen").innerHTML = "Gültige Zahl eingeben"
    } else {
        if ((auswahl) > 15 ){
            console.log("Eine Auswahlmöglichkeit ist nicht gültig.")
        } else {
            ergebnisgesamt = eingabefeld1 + eingabefeld2 + eingabefeld3
        }
    }

    // prüft ob die Auswahlmöglichkeiten gültig sind

    if (eingabefeld1 > 4) {
        console.log("Eine ungültige Zahl eingetippt.")
    } else {
        if (5 > eingabefeld2 > 10) {
            console.log("Eine ungültige Zahl eingetippt.")
        } else {
            if (11 > eingabefeld3 > 15) {
                console.log("Eine ungültige Zahl eingetippt.")
            } else {
                ergebnisgesamt = eingabefeld1 + eingabefeld2 + eingabefeld3
            }
        }
    }
}
    // prüft ob in jedem Eingabefeld eine Zahl steht die für dieses Feld gültig ist.
