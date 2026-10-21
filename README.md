# Kfz-Prüfungsvorbereitung – Berufsschule (Gesellenprüfung Teil II)

Webseite: https://marconicklas.github.io/kfz-pruefung/ (passwortgeschützt)

## Aufbau
| Ordner/Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit Passwortabfrage, den Bereichen **Üben** und **Prüfen** und dem Themenfilter |
| `inhalte.js` | Liste der Themen und Prüfungen (Titel, Beschreibung, Fahrzeug, **kategorie** für den Filter …) |
| `themen/` | Übungen: Überblick + Übungsaufgaben, beliebig oft prüfbar |
| `pruefungen/` | Prüfungen: jede Aufgabe nur **einmal** abgebbar (Sperr-Modus) |

## Themenfilter
Prüfungsthemen der Gesellenprüfung Teil II: Dieselmotor (Common-Rail & AdBlue), Bremsanlage (El. Parkbremse & ESP), Klimaanlage (Diagnose & Reparatur), Sicherheitssysteme (Airbag).
In `inhalte.js` bei jedem Eintrag `kategorie: ["diesel"]` bzw. `"bremse"`, `"klima"`, `"airbag"` setzen. Einträge ohne Kategorie erscheinen unter „Weitere Themen“.

## Neues Thema oder neue Prüfung hinzufügen
1. Ordner `themen` oder `pruefungen` öffnen → **Add file → Upload files** → HTML-Datei hochladen → **Commit changes**.
2. Nach 1–2 Minuten erscheint die Datei automatisch auf der Startseite (Titel = Dateiname). Dateinamen ohne Leerzeichen und Umlaute wählen.
3. Optional für eine schöne Karte: `inhalte.js` öffnen → Stift-Symbol → einen vorhandenen `{ … },`-Block kopieren und anpassen → **Commit changes**.

## Passwortschutz
Die Startseite fragt ein Passwort ab; jede Prüfungsseite leitet ohne Anmeldung zur Startseite um.
In `index.html` und oben in jeder Prüfungsdatei steht der SHA-256-Wert des Passworts (`KFZ_HASH` bzw. `var H=`). Zum Ändern beide Stellen ersetzen.
Hinweis: Das ist ein einfacher Zugangsschutz für die Klasse, kein Hochsicherheitsschutz – das Repository selbst ist öffentlich.

## Prüfungsmodus / Lehrkraft-PIN
In den Prüfungen kann jede Aufgabe nur einmal abgegeben werden (Speicherung im Browser des Schülers). Ein neuer Durchgang ist unten auf der Prüfungsseite mit der Lehrkraft-PIN möglich. Hinweis: Die PIN steht im Quelltext der öffentlichen Seite.
