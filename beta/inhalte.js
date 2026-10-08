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
