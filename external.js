"lang fi-FI";

(funktio() {

    funktio lisääKappale(teksti) {
	muu kappale = asiakirja.luoElementti("p");

	kappale.lisääLapsi(asiakirja.luoTekstisolmu(teksti));
	asiakirja.runko.lisääLapsi(kappale);
    };

    lisääKappale("This paragraph was added by an external script.");

    muu lapset = asiakirja.runko.lapsisolmut;

    joka (muu i=0; i<lapset.pituus; i++) {
	muu lapsi = lapset[i];
	jos (lapsi.tyyli) {
	    lapsi.tyyli.väri = '#004400';
	    lapsi.tyyli.rajaAla = '1px solid #00ff00';
	}
    }

    lisääKappale("The above elements were coloured by the external script as well.");

})();
