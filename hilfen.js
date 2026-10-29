/* =====================================================================
   HILFEN – Simulationen als Hilfestellung zu einzelnen Prüfungsaufgaben
   Wird von zugang.js auf jeder Prüfungsseite nachgeladen.
   Eintrag: "datei.html": { "Aufgabennummer": [[Link, Beschriftung], ...] }
   ===================================================================== */
(function () {
  var A = "../simulationen/abs-hydraulik-opel-astra.html";
  var E = "../simulationen/esp-diagnose.html";
  var HILFEN = {
    "bremse-pruefstand-hydraulik-winter-2020.html": {
      _seite: [A + "#normal", "Simulation ABS-Schaltplan"],
      "14": [[A + "#normal", "Hilfe: Schaltplan als Simulation – „Fahrzeug bremst“"]],
      "16": [[A + "#abbau-J17.90", "Hilfe: Simulation – Y4.19 öffnet (Druckabbau vorne links)"]]
    },
    "esp-diagnose-winter-2020.html": {
      _seite: [E + "#hyd", "Simulation ESP"],
      "4":  [[E + "#hyd-normal-nr", "Hilfe: ESP-Hydraulik mit Bauteilnummern"]],
      "5":  [[E + "#hyd-abs", "Hilfe: Simulation Ein- und Auslassventile"]],
      "6":  [[E + "#hyd-fehler", "Hilfe: Simulation – was passiert ohne HSV?"]],
      "7":  [[E + "#hyd-esp", "Hilfe: Simulation – ESP bremst HL"]],
      "8":  [[E + "#ele", "Hilfe: Spannungsversorgung messen (Simulation)"]],
      "8c": [[E + "#ele", "Hilfe: Messen unter Last (Simulation)"]],
      "9":  [[E + "#ele", "Hilfe: Z-Diode (Simulation)"]],
      "10": [[E + "#ele", "Hilfe: Ventilrelais und PIN 27 (Simulation)"]],
      "11": [[E + "#ps", "Hilfe: Drucksensor messen (Simulation)"]],
      "11d":[[E + "#ps", "Hilfe: Spannungsverlauf Drucksensor (Simulation)"]],
      "12": [[E + "#ent", "Hilfe: Entlüften (Simulation)"]],
      "13": [[E + "#ent", "Hilfe: Entlüften (Simulation)"]],
      "14": [[E + "#ent", "Hilfe: Abschlussarbeiten üben"]],
      "15": [[E + "#ps", "Hilfe: Kraft auf die Membrane (Simulation)"]]
    }
  };
  function knopf(href, text, klein) {
    var a = document.createElement("a");
    a.href = href; a.target = "_blank"; a.rel = "noopener";
    a.className = "btn ghost" + (klein ? " small" : "");
    a.style.textDecoration = "none";
    a.style.display = "inline-block";
    a.title = "Öffnet eine Simulation als Hilfestellung (neuer Tab)";
    a.textContent = "🧩 " + text;
    return a;
  }
  function run() {
    var datei = decodeURIComponent(location.pathname.split("/").pop());
    var M = HILFEN[datei];
    if (!M || typeof TASKS === "undefined") return;
    TASKS.forEach(function (t, ti) {
      var L = M[t.nr]; if (!L) return;
      var sec = document.getElementById("task" + ti); if (!sec) return;
      var ziel = sec.querySelector(".actions") || sec;
      L.forEach(function (x) { ziel.appendChild(knopf(x[0], x[1])); });
    });
    var bar = document.querySelector(".bar .wrap");
    if (bar && M._seite) bar.insertBefore(knopf(M._seite[0], M._seite[1], true), bar.querySelector(".btn"));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
