/* =====================================================================
   INHALTE DER WEBSEITE  –  hier trägst du neue Themen und Prüfungen ein
   ---------------------------------------------------------------------
   So geht's:
   1. HTML-Datei in den Ordner "themen" (Übungen) oder "pruefungen" hochladen.
      → Sie erscheint automatisch auf der Startseite (Titel = Dateiname).
   2. Für eine schöne Karte mit Beschreibung: hier einen Eintrag ergänzen.
      Einfach einen vorhandenen Block { ... }, kopieren und anpassen.
      Wichtig: Jeder Block endet mit einem Komma, Texte stehen in "Anführungszeichen".
   Felder, die du nicht brauchst, kannst du weglassen.
   ===================================================================== */

window.INHALTE = {

  /* ---------- ÜBEN: Themen mit Überblick und Übungsaufgaben ---------- */
  themen: [
    {
      datei: "themen/pumpe-duese.html",
      titel: "Pumpe-Düse-Einspritzsystem (PDE)",
      bereich: "Dieselmotormanagement",
      beschreibung: "Aufbau, Einspritzphasen, Kennwerte, Diagnose und Instandsetzung am Golf V 1,9 TDI – mit Überblick und 21 Übungsaufgaben.",
      aufgaben: 21,
      punkte: 100,
      schlagworte: ["Diesel", "Einspritzung", "Diagnose", "Rechnen"],
      neu: true
    },
  ],

  /* ---------- PRÜFEN: Prüfungen (einmalige Abgabe je Aufgabe) ---------- */
  pruefungen: [
    {
      datei: "pruefungen/nockenwellensensor-golf6-winter-2020.html",
      titel: "Nockenwellensensor – Diagnosetechnik 1",
      termin: "Winter 2020",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Golf VI 1.8 TSI",
      beschreibung: "MIL leuchtet, Motor springt schlecht an: Diagnoseablauf, MIL-Funktionen, Hall-Nockenwellensensor prüfen, Stromlaufplan, Reparaturkosten.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/luftfahrwerk-audi-a6-winter-2021.html",
      titel: "Luftfahrwerk – Kfz- u. Instandhaltungstechnik 1",
      termin: "Winter 2021",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Audi A6, Bj. 2008",
      beschreibung: "Fahrzeug sinkt ab, Hochpumpen nicht möglich: Komponenten, Kompressor-Relais, Druckberechnung, Federkennlinien, Dämpfer, Achsvermessung.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/zuendung-klopfen-vw-sharan.html",
      titel: "Zündanlage & Klopfen – VW Sharan",
      termin: "Winter 2018",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Sharan Bj. 2010 (ATM)",
      beschreibung: "Ölverbrauch, Leistungsverlust, blauer Rauch: klopfende Verbrennung, Klopfsensor messen, Einzelfunkenzündspule, Zündkerzen-Wärmewert, Drehmoment.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/motronic-me76-opel-corsa.html",
      titel: "Motormanagement Motronic ME 7.6 – Opel Corsa",
      termin: "Winter 2017",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Opel Corsa C 1,2i 16V",
      beschreibung: "Motor läuft unrund und nimmt schlecht Gas an: E-Gas, DK-Potentiometer, Einspritzventile, Oszilloskop-Diagramme, Verbrauchsrechnung.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/zuendung-golf4-sommer-2013.html",
      titel: "Zündanlage – Golf IV springt nicht an",
      termin: "Sommer 2013",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Golf IV 1,6 l (BFQ)",
      beschreibung: "Motor springt nicht an: Zündsysteme, Zündkerzen und Wärmewert, Drehzahlgeber, Prüfplan, Sekundärbild, Schließwinkel, Klopfen.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/zuendung-vw-eos-fsi.html",
      titel: "Zündanlage – Verbrennungsaussetzer VW EOS FSI",
      termin: "Winter 2012",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW EOS 2,0 FSI (BVY)",
      beschreibung: "Unrunder Leerlauf, Ruckeln, MIL blinkt: Abgaswerte, Aussetzererkennung, Stromlaufplan Zündspulen, Schließzeit, Oszillogramme, Zündkerzen.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/zentraleinspritzung-sommer-2008.html",
      titel: "Kraftstoffeinspritzung – Zentraleinspritzung",
      termin: "Sommer 2008",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Ford Fiesta 1,1i (Zentraleinspritzung)",
      beschreibung: "Anlasser dreht, Motor springt nicht an: Einspritzarten, Fehlersuchplan, Drehzahlsensor, Lambda, Zündbilder, Abgas, Leistungsberechnung.",
      dauer: 60,
      punkte: 98,
      neu: true
    },
    {
      datei: "pruefungen/abs-esp-audi-a4.html",
      titel: "ABS / ASR / ESP – Bremssystem Audi A4",
      termin: "Winter 2007",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Audi A4 1,9 TDI Avant quattro (AVF)",
      beschreibung: "ABS- und ESP-Leuchte brennen dauerhaft: Raddrehzahlsensor VR, Lenkwinkelsensor, Arbeitsplan, Anhalteweg, Schaltpläne.",
      dauer: 60,
      punkte: 100,
      neu: true
    },
    {
      datei: "pruefungen/diagnosetechnik-winter-2022.html",
      titel: "Dieseleinspritzung – Diagnosetechnik 1",
      termin: "Winter 2022",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Touran 2,0 TDI (CFHC)",
      beschreibung: "Motorkontrolllampe und Startprobleme bei kaltem Motor: Common Rail, Glühanlage, Kühlmitteltemperatursensor, Messtechnik.",
      dauer: 60,
      punkte: 100,
      themen: ["themen/pumpe-duese.html"],
      neu: true
    },
    {
      datei: "pruefungen/common-rail-diagnosetechnik.html",
      titel: "Common-Rail-System – Diagnosetechnik 1",
      termin: "",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Passat 2.0 TDI (DFHA)",
      beschreibung: "„Der Wagen hat wenig Leistung und erreicht nicht mehr die Höchstgeschwindigkeit“ – Diagnose am Common-Rail-System.",
      dauer: 60,
      punkte: 100,
      themen: ["themen/pumpe-duese.html"]
    },
    {
      datei: "pruefungen/cabrio-verdeck-hybrid.html",
      titel: "Cabrio mit HV – Kfz- und Instandhaltungstechnik 2",
      termin: "",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Hybrid-Cabrio (Stoffverdeck)",
      beschreibung: "Verdeck lässt sich nur noch per Komfortbetätigung öffnen – Funktionsbeschreibung, Stromlaufpläne, Steuergeräte und Messtechnik.",
      dauer: 60,
      punkte: 100
    },
  ]
};
