package it.edu.iisgubbio.robotorario;

/****************************************************************************
 * Questa classe gestisce la disposizione delle celle di una tabella.
 * In particolare, tiene traccia delle celle già occupate.
 *
 * USO: TableSpanManager gestoreSpan = new TableSpanManager()
 *      per sapere quale è la prima colonna libera di una riga
 *          int cella = gestoreSpan.primaLibera(numeroRiga)
 *      per occupare una crta casella
 *          occupa gestoreSpan.occupa(numeroRiga, numeroColonna)
 ***************************************************************************/
public class TableSpanManager {

    // FIXME: numeri arbitrari, sarebbe bene sistemare un costruttore
    private boolean spazi[][] = new boolean[20][20];

    /**************************************************************************
     * Segna come occupata una casella
     * @riga la riga della casella da occupare
     * @colonna la colonna della casella da occupare
     **************************************************************************/
    public void occupa(int riga, int colonna) {
        spazi[riga][colonna]=true;
    }

    /**************************************************************************
     * C erca la prima colonna libera in una certa riga
     * @riga la riga da controllare
     * @return la prima colonna libera nella riga
     **************************************************************************/
    public int primaLibera(int riga) {
        for(int i=0; i<spazi[0].length; i++) {
            if(spazi[riga][i]==false) {
                return i;
            }
        }
        return -1; // XXX: tanto non succede!
    }
}