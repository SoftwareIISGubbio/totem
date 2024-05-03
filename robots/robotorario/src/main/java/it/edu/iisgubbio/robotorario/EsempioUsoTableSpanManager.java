package it.edu.iisgubbio.robotorario;

public class EsempioUsoTableSpanManager {

    /* si vuole analizzare una tabella leggendo i tr e td dall'html
     * voglio sapere di volta in volta in quale colonna/riga mi trovo
     * +-----------------+
     * !        !  due   !
     * +   uno  +--------+
     * !        !  tre   !
     * +-----------------+
     */
    public static void main(String[] args) {
        TableSpanManager gestoreSpan = new TableSpanManager();

        int colonna;
        int riga=0;
        // come procedere leggendo i 3 td dell'esempio

        // che sto nella riga zero bisogna saperlo
        // (ma per le righe è facile: basta contare i tr)
        // voglio capire dove sta il <td>uno</td> che incontro per primo in questa riga
        // considero eventuali span da sopra anche se sto sulla riga zero
        colonna = gestoreSpan.primaLibera(riga);
        System.out.println("'uno' sta alle coordinate : " + riga+","+colonna);
        gestoreSpan.occupa(riga, colonna);
        // siccome il mio td ha un rospan=2, devo occupare anche la cella sottostante
        gestoreSpan.occupa(riga+1, colonna);

        // leggo il <td>due</td>
        colonna = gestoreSpan.primaLibera(riga);
        System.out.println("'due' sta alle coordinate : " + riga+","+colonna);
        gestoreSpan.occupa(riga, colonna);

        // mi sposto sulla seconda riga
        riga++;

        // voglio considerare il <td>tre</td>
        // e questa volta è bene che mi informi se ho span da sopra
        colonna = gestoreSpan.primaLibera(riga);
        System.out.println("'tre' sta alle coordinate : " + riga+","+colonna);
    }
}
