# Kfz-Prüfungsvorbereitung – Berufsschule (Gesellenprüfung Teil II)

Webseite: https://marconicklas.github.io/kfz-pruefung/

## Aufbau
| Ordner/Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit den Bereichen **Üben** und **Prüfen** |
| `inhalte.js` | Liste der Themen und Prüfungen (Titel, Beschreibung, Fahrzeug …) |
| `themen/` | Übungen: Überblick + Übungsaufgaben, beliebig oft prüfbar |
| `pruefungen/` | Prüfungen: jede Aufgabe nur **einmal** abgebbar (Sperr-Modus) |

## Neues Thema oder neue Prüfung hinzufügen
1. Ordner `themen` oder `pruefungen` öffnen → **Add file → Upload files** → HTML-Datei hochladen → **Commit changes**.
2. Nach 1–2 Minuten erscheint die Datei automatisch auf der Startseite (Titel = Dateiname, z. B. `glueh-anlage.html` → „Glueh anlage“). Dateinamen ohne Leerzeichen und Umlaute wählen.
3. Optional für eine schöne Karte: `inhalte.js` öffnen → Stift-Symbol → einen vorhandenen `{ … },`-Block kopieren und anpassen → **Commit changes**.
   - `themen: ["themen/…html"]` bei einer Prüfung verlinkt passende Übungsthemen („Vorher üben“).
   - `neu: true` zeigt ein grünes „neu“-Abzeichen.

## Prüfungsmodus / Lehrkraft-PIN
In den Prüfungen kann jede Aufgabe nur einmal abgegeben werden (Speicherung im Browser des Schülers). Ein neuer Durchgang ist unten auf der Prüfungsseite mit der Lehrkraft-PIN möglich. Hinweis: Die PIN steht im Quelltext der öffentlichen Seite.
