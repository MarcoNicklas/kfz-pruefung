/* =====================================================================
   ZUGANG – Passwörter je Themenbereich
   ---------------------------------------------------------------------
   Für jeden Bereich steht hier der SHA-256-Wert seines Passworts.
   "alle" schaltet alles frei (Lehrkraft / Gesamtwiederholung).
   Passwort ändern: neuen SHA-256-Wert (z. B. Online-Rechner) eintragen.
   Welche Prüfung zu welchem Bereich gehört, steht in inhalte.js (kategorie).
   ===================================================================== */
(function () {
  var H = {
    alle:   "b25706e3b54368c24de24cd3e264da14f7481560894766d1e0ab022183eb1e4e",
    diesel: "46fd752b4c16c16a8bfc511b685c1242f350f9f274d504a6379a71d6fc758201",
    bremse: "e99e990cc12e844729ac5f6ed1b2993b71be479284cebb111477a27c62f25178",
    klima:  "1adacebaf7c5583818390deabdd0c479eff10df5335023ed4cece2eda663c9d0",
    airbag: "5c6f6f98395b8becd3ce83195da7aba63d4b1c5e59aa34f29f7d980483d97ec6",
    sonst:  "f519c016e76c072719b2747b900bb058eded4738ad4c286ccd3a1b16380e0128"
  };
  var KEY = "kfz-freigaben";
  function read(store) { try { return JSON.parse(store.getItem(KEY) || "[]") || []; } catch (e) { return []; } }
  function hashes() {
    var a = read(localStorage).concat(read(sessionStorage));
    try { var l = localStorage.getItem("kfz-zugang") || sessionStorage.getItem("kfz-zugang"); if (l) a.push(l); } catch (e) {}
    return a;
  }
  function freigaben() {
    var hs = hashes();
    return Object.keys(H).filter(function (k) { return hs.indexOf(H[k]) >= 0; });
  }
  function darf(kat) { var f = freigaben(); return f.indexOf("alle") >= 0 || f.indexOf(kat || "sonst") >= 0; }
  function speichern(hash, dauerhaft) {
    try {
      [sessionStorage].concat(dauerhaft ? [localStorage] : []).forEach(function (s) {
        var a = read(s); if (a.indexOf(hash) < 0) a.push(hash); s.setItem(KEY, JSON.stringify(a));
      });
    } catch (e) {}
  }
  function abmelden() {
    try { [localStorage, sessionStorage].forEach(function (s) { s.removeItem(KEY); s.removeItem("kfz-zugang"); }); } catch (e) {}
  }
  function katVonDatei(pfad) {
    var D = window.INHALTE || {}; var all = (D.themen || []).concat(D.pruefungen || []);
    for (var i = 0; i < all.length; i++) if (pfad.slice(-all[i].datei.length) === all[i].datei) return (all[i].kategorie || ["sonst"])[0];
    return "sonst";
  }
  window.KFZ_ZUGANG = { H: H, freigaben: freigaben, darf: darf, speichern: speichern, abmelden: abmelden, katVonDatei: katVonDatei };

  /* Auf Prüfungs- und Themenseiten: nur mit passender Freigabe anzeigen */
  var p = location.pathname;
  if (/\/(pruefungen|themen)\/[^\/]+$/.test(p)) {
    var kat = katVonDatei(decodeURIComponent(p));
    if (!darf(kat)) location.replace("../index.html#gesperrt");
  }

  /* Hilfestellungen (Simulationen) auf Prüfungsseiten nachladen */
  if (/\/pruefungen\/[^\/]+$/.test(p)) {
    var hs = document.createElement("script"); hs.src = "../hilfen.js"; document.head.appendChild(hs);
  }
})();
