/* =====================================================================
   INHALTE DER WEBSEITE  –  hier trägst du neue Themen und Prüfungen ein
   ---------------------------------------------------------------------
   So geht's:
   1. HTML-Datei in den Ordner "themen" (Übungen) oder "pruefungen" hochladen.
      → Sie erscheint automatisch auf der Startseite (Titel = Dateiname).
   2. Für eine schöne Karte mit Beschreibung: hier einen Eintrag ergänzen.
      Einfach einen vorhandenen Block { ... }, kopieren und anpassen.
      Wichtig: Jeder Block endet mit einem Komma, Texte stehen in "Anführungszeichen".
   3. Themenfilter: Feld  kategorie: ["diesel"]  setzen. Mögliche Werte:
      "diesel"  = Dieselmotor (Common-Rail & AdBlue)
      "bremse"  = Bremsanlage (El. Parkbremse & ESP)
      "klima"   = Klimaanlage (Diagnose & Reparatur)
      "airbag"  = Sicherheitssysteme (Airbag)
      Ohne kategorie erscheint der Eintrag unter „Weitere Themen“.
   Felder, die du nicht brauchst, kannst du weglassen.
   ===================================================================== */

window.INHALTE = {

  /* ---------- Filter-Kategorien (Prüfungsthemen) ---------- */
  kategorien: [
    { id: "diesel", name: "Dieselmotor", detail: "Common-Rail & AdBlue", icon: "⛽" },
    { id: "bremse", name: "Bremsanlage", detail: "El. Parkbremse & ESP", icon: "🛑" },
    { id: "klima",  name: "Klimaanlage", detail: "Diagnose & Reparatur", icon: "❄️" },
    { id: "airbag", name: "Sicherheitssysteme", detail: "Airbag", icon: "🛡️" },
  ],

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
      kategorie: ["diesel"]
    },
  ],

  /* ---------- PRÜFEN: Prüfungen (einmalige Abgabe je Aufgabe) ---------- */
  pruefungen: [

    /* ===== Dieselmotor (Common-Rail & AdBlue) ===== */
    {
      datei: "pruefungen/common-rail-diagnosetechnik.html",
      titel: "Common-Rail-System – Diagnosetechnik 1",
      termin: "Winter 2025",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Passat 2.0 TDI (DFHA)",
      beschreibung: "„Der Wagen hat wenig Leistung und erreicht nicht mehr die Höchstgeschwindigkeit“ – Diagnose am Common-Rail-System.",
      dauer: 60,
      punkte: 100,
      themen: ["themen/pumpe-duese.html"],
      kategorie: ["diesel"]
    },
    {
      datei: "pruefungen/scr-adblue-audi-q5-winter-2021.html",
      titel: "SCR-System / AdBlue – Diagnosetechnik 1",
      termin: "Winter 2021",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Audi Q5 2,0 TDI",
      beschreibung: "„Fehler AdBlue – kein Motorstart in 1000 km“: SCR-Technik, Bauteile, AdBlue-Verbrauch berechnen, Dosierventil prüfen und tauschen, Dichtheitsprüfung.",
      dauer: 60,
      punkte: 100,
      kategorie: ["diesel"],
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
      kategorie: ["diesel"]
    },
    {
      datei: "pruefungen/common-rail-audi-a6-winter-2011.html",
      titel: "Common Rail mit Piezo-Injektoren – Audi A6 2,7 TDI",
      termin: "Winter 2011",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Audi A6 2,7 TDI Allroad (MJ 2007)",
      beschreibung: "Motor im Notlauf: Aufbau CR-Anlage, Piezo-Injektor, Raildrucksensor messen, Kraftberechnung, Raildruckregelventil (PWM) prüfen.",
      dauer: 60,
      punkte: 100,
      themen: ["themen/pumpe-duese.html"],
      kategorie: ["diesel"],
      neu: true
    },

    /* ===== Bremsanlage (El. Parkbremse & ESP) ===== */
    {
      datei: "pruefungen/bremse-pruefstand-hydraulik-winter-2020.html",
      titel: "Bremsenprüfstand & ABS-Hydraulikschaltplan – Opel Astra",
      termin: "Winter 2020",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Opel Astra H 1,4 (EZ 06/2007)",
      beschreibung: "Auto zieht beim Bremsen nach links: Prüfstand auswerten, StVZO-Grenzwerte, Faustsattel, Bremsscheibe messen/tauschen, Hydraulikwege einzeichnen, 2/2-Wegeventil, Bremsflüssigkeit, Bremsmoment.",
      dauer: 60,
      punkte: 100,
      kategorie: ["bremse"],
      neu: true
    },
    {
      datei: "pruefungen/bremse-bkv-hydraulik-polo-sommer-2022.html",
      titel: "Bremskraftverstärker (Pneumatik) & Hydraulik – VW Polo",
      termin: "Sommer 2022 (Teil I)",
      pruefung: "Gesellenprüfung Teil I",
      fahrzeug: "VW Polo (2016)",
      beschreibung: "Schlechte Bremswirkung: Unterdruck-Bremskraftverstärker (Aufbau, Funktion, Prüfung), Tandemhauptzylinder, Druckdifferenz und Kraft berechnen, Trommelbremse, Nasssiedepunkt.",
      dauer: 60,
      punkte: 100,
      kategorie: ["bremse"],
      neu: true
    },
    {
      datei: "pruefungen/bremse-epb-golf7-winter-2025.html",
      titel: "Hinterradbremse mit EPB – Golf VII",
      termin: "Winter 2025",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Golf VII (11/2014)",
      beschreibung: "Hinterradbremse hat „geraucht und gestunken“: elektromechanische Feststellbremse, Bremsbeläge wechseln, Schutzkappe, Reifendaten, Bremslicht-/ESP-Schaltplan.",
      dauer: 60,
      punkte: 100,
      kategorie: ["bremse"],
      neu: true
    },
    {
      datei: "pruefungen/esp-diagnose-winter-2020.html",
      titel: "ESP – Diagnosetechnik 2",
      termin: "Winter 2020",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Pkw, EZ 09/2011",
      beschreibung: "Keine ESP-Regelung bei hoher Geschwindigkeit: ESP-Hydraulik, Magnetventile, Spannungsversorgung unter Last, Z-Diode, Drucksensor, Entlüften.",
      dauer: 60,
      punkte: 100,
      kategorie: ["bremse"],
      neu: true
    },
    {
      datei: "pruefungen/epb-esp-vw-passat-winter-2017.html",
      titel: "Elektrische Parkbremse & ESP – VW Passat",
      termin: "Winter 2017",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Passat mit EPB",
      beschreibung: "Fahrzeug fährt nicht an, ein Hinterrad blockiert: EPB-Stellmotor, Strommessung, Belagwechsel-Modus, TÜV-Modus, ESP-Hydraulik, CAN, Reifendruckkontrolle.",
      dauer: 60,
      punkte: 100,
      kategorie: ["bremse"],
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
      kategorie: ["bremse"]
    },

    /* ===== Klimaanlage (Diagnose & Reparatur) ===== */
    {
      datei: "pruefungen/klimaanlage-hybrid-prius-winter-2020.html",
      titel: "Klimaanlage mit HV-Kompressor – Toyota Prius",
      termin: "Winter 2020",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Toyota Prius Hybrid",
      beschreibung: "Klimaanlage funktioniert nicht richtig: Kältemittelkreislauf, Leistungsaufnahme el. Kompressor, Kältemittel, HV-Sicherheitsregeln, Batterielüfter, POE-Öl.",
      dauer: 60,
      punkte: 100,
      kategorie: ["klima"],
      neu: true
    },
    {
      datei: "pruefungen/klimaanlage-vw-touran-winter-2018.html",
      titel: "Klimaanlage – Diagnose VW Touran",
      termin: "Winter 2018",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Touran",
      beschreibung: "Klimaanlage kühlt schlecht und riecht modrig: Kreislauf, Drücke, Hochdrucksensor messen, PWM-Signal, Regelventil, Ölmenge berechnen.",
      dauer: 60,
      punkte: 100,
      kategorie: ["klima"],
      neu: true
    },

    /* ===== Sicherheitssysteme (Airbag) ===== */
    {
      datei: "pruefungen/airbag-vw-touran-winter-2025.html",
      titel: "Airbag & Insassenschutz – VW Touran",
      termin: "Winter 2025",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Touran",
      beschreibung: "Nach einem Unfall haben mehrere Airbags ausgelöst: Sicherheitsvorschriften Pyrotechnik, Datenbus, Fußgängerschutz, Gurtstraffer, Zündkreis mit Prüfwiderstand messen.",
      dauer: 60,
      punkte: 100,
      kategorie: ["airbag"],
      neu: true
    },
    {
      datei: "pruefungen/airbag-mitsubishi-imiev-winter-2015.html",
      titel: "Airbag-Kontrollleuchte – Mitsubishi i-MiEV",
      termin: "Winter 2015",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Mitsubishi i-MiEV",
      beschreibung: "Airbag-Leuchte brennt: Sicherheitskarosserie, Ablauf der Airbagauslösung, Verzögerung berechnen, Fehlercode Seitenairbag, Leitungen messen.",
      dauer: 60,
      punkte: 100,
      kategorie: ["airbag"],
      neu: true
    },

    /* ===== Weitere Themen ===== */
    {
      datei: "pruefungen/nockenwellensensor-golf6-winter-2020.html",
      titel: "Nockenwellensensor – Diagnosetechnik 1",
      termin: "Winter 2020",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Golf VI 1.8 TSI",
      beschreibung: "MIL leuchtet, Motor springt schlecht an: Diagnoseablauf, MIL-Funktionen, Hall-Nockenwellensensor prüfen, Stromlaufplan, Reparaturkosten.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/luftfahrwerk-audi-a6-winter-2021.html",
      titel: "Luftfahrwerk – Kfz- u. Instandhaltungstechnik 1",
      termin: "Winter 2021",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Audi A6, Bj. 2008",
      beschreibung: "Fahrzeug sinkt ab, Hochpumpen nicht möglich: Komponenten, Kompressor-Relais, Druckberechnung, Federkennlinien, Dämpfer, Achsvermessung.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/zuendung-klopfen-vw-sharan.html",
      titel: "Zündanlage & Klopfen – VW Sharan",
      termin: "Winter 2018",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Sharan Bj. 2010 (ATM)",
      beschreibung: "Ölverbrauch, Leistungsverlust, blauer Rauch: klopfende Verbrennung, Klopfsensor messen, Einzelfunkenzündspule, Zündkerzen-Wärmewert, Drehmoment.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/motronic-me76-opel-corsa.html",
      titel: "Motormanagement Motronic ME 7.6 – Opel Corsa",
      termin: "Winter 2017",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Opel Corsa C 1,2i 16V",
      beschreibung: "Motor läuft unrund und nimmt schlecht Gas an: E-Gas, DK-Potentiometer, Einspritzventile, Oszilloskop-Diagramme, Verbrauchsrechnung.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/zuendung-golf4-sommer-2013.html",
      titel: "Zündanlage – Golf IV springt nicht an",
      termin: "Sommer 2013",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW Golf IV 1,6 l (BFQ)",
      beschreibung: "Motor springt nicht an: Zündsysteme, Zündkerzen und Wärmewert, Drehzahlgeber, Prüfplan, Sekundärbild, Schließwinkel, Klopfen.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/zuendung-vw-eos-fsi.html",
      titel: "Zündanlage – Verbrennungsaussetzer VW EOS FSI",
      termin: "Winter 2012",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "VW EOS 2,0 FSI (BVY)",
      beschreibung: "Unrunder Leerlauf, Ruckeln, MIL blinkt: Abgaswerte, Aussetzererkennung, Stromlaufplan Zündspulen, Schließzeit, Oszillogramme, Zündkerzen.",
      dauer: 60,
      punkte: 100
    },
    {
      datei: "pruefungen/zentraleinspritzung-sommer-2008.html",
      titel: "Kraftstoffeinspritzung – Zentraleinspritzung",
      termin: "Sommer 2008",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Ford Fiesta 1,1i (Zentraleinspritzung)",
      beschreibung: "Anlasser dreht, Motor springt nicht an: Einspritzarten, Fehlersuchplan, Drehzahlsensor, Lambda, Zündbilder, Abgas, Leistungsberechnung.",
      dauer: 60,
      punkte: 98
    },
    {
      datei: "pruefungen/cabrio-verdeck-hybrid.html",
      titel: "Cabrio mit HV – Kfz- und Instandhaltungstechnik 2",
      termin: "Winter 2017",
      pruefung: "Gesellenprüfung Teil II",
      fahrzeug: "Hybrid-Cabrio (Stoffverdeck)",
      beschreibung: "Verdeck lässt sich nur noch per Komfortbetätigung öffnen – Funktionsbeschreibung, Stromlaufpläne, Steuergeräte und Messtechnik.",
      dauer: 60,
      punkte: 100
    },
  ]
};
