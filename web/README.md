# sito web

qui dentro devono starci sia la pagina principale che sutti gli script
che fanno i diversi lavori.

Rischia di essere un bel caos ma una parte dovremmo averla già fatta


## Firefox

nella cartella del profilo di Firefox (.mozilla/nafiladerobestrane/)
se non c'è va creato il file ´prefs.js´ e inserite
(l'ultima ovviamente è sospetta)

    user_pref("widget.non-native-theme.scrollbar.style", 4);
    user_pref("widget.non-native-theme.scrollbar.size.override", 40);
    user_pref("layout.testing.overlay-scrollbars.always-visible", true);


## debug

Supponiamo che per fare debug si usi come client e come server web la stessa macchina

Gli script JS fanno riferimento all'IP di talos, se si vuole che quell'IP 
venga rediretto su un'altra macchina (localhost) su macOS si può usare
`sudo ifconfig lo0 alias 10.1.0.52`

Per avviare un server web al volo: `python3 -m http.server`
