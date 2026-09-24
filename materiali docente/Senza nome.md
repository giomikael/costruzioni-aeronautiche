
## Realizzazione e analisi comparativa del diagramma di manovra per velivoli di categoria Normale, Utility e Acrobatica

#### Obiettivi della prova:

1. Determinare le velocità caratteristiche di stallo accelerato e la velocità di manovra ($V_A$) per tre velivoli reali.
2. Tracciare l'inviluppo di volo strutturale ($V\text{-}n$) calcolando le curve di stallo aerodinamico e i limiti di carico strutturale.
3. Analizzare criticamente le differenze di impiego operativo e i margini di sicurezza tra le categorie di certificazione.

### Dati dei Velivoli Reali Scelti

Nei manuali di volo ([[POH AFM]]) e secondo le normative di certificazione EASA CS-23 / FAA FAR-23, sono stati estratti i seguenti dati operativi a peso massimo di decollo ($MTOW$):

|                                                  |                               |                                 |                       |
| ------------------------------------------------ | ----------------------------- | ------------------------------- | --------------------- |
| Velivolo                                         | Velivolo ACessna 172S Skyhawk | Velivolo BSIAI-Marchetti SF.260 | Velivolo CExtra 330SC |
| Categoria di certificazione                      | Normale                       | Utility (Semiacrobatica)        | Acrobatica            |
| Velocità di stallo pulito ($V_{S1}$)             | $48\text{ KIAS}$              | $68\text{ KIAS}$                | $64\text{ KIAS}$      |
| Peso massimo al decollo                          |                               |                                 |                       |
| Fattore di carico massimo positivo ($n_{lim,+}$) | $+3{,}8$                      | $+4{,}4$                        | $+10{,}0$             |
| Fattore di carico massimo negativo ($n_{lim,-}$) | $-1{,}52$                     | $-1{,}76$                       | $-10{,}0$             |
| Velocità di Mai Superare ($V_{NE}$)              | $163\text{ KIAS}$             | $236\text{ KIAS}$               | $220\text{ KIAS}$     |

### QUESITI DA SVOLGERE

#### Fase 1: Calcoli Analitici

Per ciascuno dei tre velivoli:

1. Calcolare la Velocità di Manovra Teorica ($V_A$) positiva, applicando la relazione dello stallo accelerato:  
    $$V_A = V_{S1} \cdot \sqrt{n_{lim,+}}$$
    
2. Calcolare la velocità di stallo accelerato negativo alla quota limite ($V_{A,'}$).
    
3. Determinare le equazioni delle parabole di stallo positivo e negativo:  
    $$n_+(V) = \left(\frac{V}{V_{S1}}\right)^2 \quad \text{e} \quad n_-(V) = -\left(\frac{V}{V_{S1,neg}}\right)^2$$  
    (Assumendo per semplicità $V_{S1,neg} \approx V_{S1}$ se non diversamente specificato).
    

#### Fase 2: Rappresentazione Grafica

Su un unico foglio di carta millimetrata (o tramite foglio di calcolo Excel/Python):

1. Tracciare un sistema di assi cartesiani: Orscisse $V$ [KIAS] (da $0$ a $250\text{ kts}$) e Ordinate $n$ (da $-10$ a $+10$).
    
2. Disegnare la parabola di stallo aerodinamico positivo fino al punto di manovra $A(V_A, n_{lim,+})$.
    
3. Disegnare la parabola di stallo negativo fino al punto $A'(V_{A,'}, n_{lim,-})$.
    
4. Tracciare i segmenti di delimitazione strutturale:
    

- Linea orizzontale superiore $n = n_{lim,+}$ da $V_A$ a $V_{NE}$.
    
- Linea orizzontale inferiore $n = n_{lim,-}$ da $V_{A,'}$ a $V_{NE}$.
    
- Linea verticale di chiusura a $V = V_{NE}$.
    

6. Evidenziare e sovrapporre i tre inviluppi con colori differenti.
    

#### Fase 3: Quesiti di Analisi Critica

1. Significato fisico di $V_A$: Spiegare perché volare a una velocità superiore a $V_A$ in presenza di forte turbolenza o con azionamento brusco dei comandi comporta rischi di deformazione strutturale o rottura anziché lo stallo.
    
2. Coefficiente di Sicurezza / Carico Ultimo: Se un velivolo in categoria Normale ($n_{lim} = +3{,}8$) subisce una manovra a $+4{,}5\,g$, subirà una rottura immediata della struttura? Giustificare la risposta introducendo il concetto di fattore di carico ultimo ($n_{ult}$).
    
3. Confronto tra categorie: Analizzare perché il velivolo acrobatica (Extra 330SC) presenta un inviluppo simmetrico e molto ampio rispetto al Cessna 172S, e quali implicazioni strutturali (scelta dei materiali, spessori e peso a vuoto) questo comporta.
    

# 📐 SOLUZIONE 

### 1. Tabella dei Risultati Analitici

|   |   |   |   |
|---|---|---|---|
|Parametro|Velivolo A (Cessna 172S)|Velivolo B (SIAI SF.260)|Velivolo C (Extra 330SC)|
|$V_{S1}$ (Stallo $1\,g$)|$48\text{ KIAS}$|$68\text{ KIAS}$|$64\text{ KIAS}$|
|$n_{lim,+}$|$+3{,}8$|$+4{,}4$|$+10{,}0$|
|$n_{lim,-}$|$-1{,}52$|$-1{,}76$|$-10{,}0$|
|$V_A = V_{S1}\sqrt{n_{lim,+}}$|$93{,}57\text{ KIAS}$|$142{,}64\text{ KIAS}$|$202{,}39\text{ KIAS}$|
|$V_{A,'} = V_{S1}\sqrt{\Vert{}n_{lim,-}\Vert{}}$|$59{,}18\text{ KIAS}$|$90{,}21\text{ KIAS}$|$202{,}39\text{ KIAS}$|
|$V_{NE}$|$163\text{ KIAS}$|$236\text{ KIAS}$|$220\text{ KIAS}$|

### 2. Coordinate dei Punti Notabili del Diagramma V-n

Per la correzione dei grafici degli studenti, verificare i seguenti vertici del poligono $V\text{-}n$:

- Cessna 172S (Normale):
    

- $O(0, 0)$
    
- Stallo $1\,g$: $(48, +1)$
    
- Punto $A$ (Manovra Positiva): $(93{,}6; +3{,}8)$
    
- Punto $D$ (Velocità Massima Positiva): $(163; +3{,}8)$
    
- Punto $E$ (Velocità Massima Negativa): $(163; -1{,}52)$
    
- Punto $A'$ (Manovra Negativa): $(59{,}2; -1{,}52)$
    

- SIAI-Marchetti SF.260 (Utility):
    

- Punto $A$: $(142{,}6; +4{,}4)$
    
- Punto $D$: $(236; +4{,}4)$
    
- Punto $E$: $(236; -1{,}76)$
    
- Punto $A'$: $(90{,}2; -1{,}76)$
    

- Extra 330SC (Acrobatica):
    

- Punto $A$: $(202{,}4; +10{,}0)$
    
- Punto $D$: $(220; +10{,}0)$
    
- Punto $E$: $(220; -10{,}0)$
    
- Punto $A'$: $(202{,}4; -10{,}0)$
    

### 3. Risposte ai Quesiti Teorici

1. Significato fisico della Velocità di Manovra ($V_A$):
    

- A velocità $V < V_A$, se il pilota applica il massimo brandeggio dell'equilibratore (o se l'aereo incontra una forte raffica verticale), l'angolo d'attacco supera il valore critico ($\alpha_{crit}$) e l'ala stalla aerodinamicamente prima che il fattore di carico possa superare $n_{lim}$. Lo stallo agisce da "valvola di sicurezza aerodinamica".
    
- A velocità $V > V_A$, la portanza generabile al $C_{L,max}$ supera la resistenza della struttura ($L_{max} > n_{lim} \cdot W$). Un'azione brusca sui comandi genera un fattore di carico superiore a $n_{lim}$, provocando deformazioni plastiche o rotture strutturali prima di raggiungere lo stallo.
    

3. Fattore di carico limite vs Fattore di carico ultimo:
    

- La normativa aeronautica stabilisce un Coefficiente di Sicurezza $K_s = 1{,}5$.
    
- Fattore di carico limite ($n_{lim}$): Massimo carico previsto in esercizio operativo. La struttura risponde in campo perfettamente elastico (nessuna deformazione permanente).
    
- Fattore di carico ultimo ($n_{ult} = 1{,}5 \times n_{lim}$):  
    Per il Cessna 172S: $n_{ult} = 1{,}5 \times 3{,}8 = +5{,}7\,g$.
    
- Risposta: A $+4{,}5\,g$, il velivolo supera il limite elastico ($+3{,}8\,g$) e subirà deformazioni plastiche permanenti (es. svergolamento delle ali o snervamento dei rivetti/longheroni), ma non si romperà istantaneamente, in quanto il carico è inferiore a $+5{,}7\,g$. Il velivolo dovrà tuttavia essere messo a terra e sottoposto a ispezione/riparazione straordinaria.
    

5. Confronto tra categorie e scelte progettuali:
    

- Normale: Inviluppo ridotto ($+3{,}8 / -1{,}52$). Ottimizzato per l'efficienza di crociera e per contenere il peso a vuoto della struttura.
    
- Utility: Inviluppo intermedio ($+4{,}4 / -1{,}76$). Permette manovre di addestramento avanzato (es. stalli accelerati, virate strette e vite autorizzata).
    
- Acrobatica: Inviluppo ampio e simmetrico ($\pm 10\,g$). Progettato con profili alari a curvatura quasi nulla (o simmetrici) e struttura rinforzata in fibra di carbonio/traliccio d'acciaio con elevata resistenza a fatica e torsione per sostenere manovre inverted (volo rovescio).
    

L'Extra 330SC rappresenta un'eccezione fondamentale perché è un velivolo progettato specificamente per l'acrobazia aerea illimitata (Unlimited). La simmetria del suo diagramma di manovra ($\pm 10\,g$) è dovuta a tre ragioni tecniche principali:

1. Profilo alare perfettamente simmetrico
 I velivoli comuni utilizzano profili alari asimmetrici (con curvatura verso l'alto) per massimizzare la portanza nel volo livellato con il minimo attrito.

- L'Extra 330 adotta invece un profilo alare simmetrico (es. serie MA 15S).
    
-  Dal punto di vista aerodinamico, l'ala si comporta nell'identico modo sia in volo dritto sia in volo rovescio: il $C_{L,max}$ positivo è esattamente identico al $C_{L,max}$ negativo.
    

 2. Dimensionamento della struttura (Longherone unificato)

 Negli aerei normali, le ali devono sopportare la flessione verso l'alto dovuta al peso dell'aereo. La parte inferiore del longherone lavora a trazione e quella superiore a compressione.

-  Nell'Extra 330, la struttura dell'ala (interamente in fibra di carbonio ad alto modulo) e il castello motore in traliccio d'acciaio sono progettati con sezioni e rinforzi simmetrici.
    
-  La struttura resiste alla stessa identica sollecitazione di flessione sia se spinta verso l'alto (richiamata positiva), sia se spinta verso il basso (spinta negativa).
    

 3. Requisiti operativi dell'acrobazia "Unlimited"

 Nelle gare di acrobazia aerea moderna, i piloti eseguono figure dette "esterne" o "negative" (come la gran volta rovesciata o outside loop, colossei, e frullate negative) in cui l'aereo viene spinto violentemente verso l'esterno della traiettoria. In queste manovre, il pilota subisce e applica fino a $-8\,g / -10\,g$.

 Un dettaglio normativo utile per la lezione

 La normativa di certificazione EASA CS-23 impone per la categoria Acrobatica un limite minimo di $+6{,}0\,g / -3{,}0\,g$ (dove ritroveresti il rapporto di circa la metà). Tuttavia, velivoli puri da competizione come l'Extra 330, l'Edge 540 o il Sukhoi Su-31 vengono sovradimensionati dai costruttori fino a $\pm 10\,g$ di carico limite (con un carico ultimo di rottura pari a $\pm 15\,g$), superando di gran lunga i requisiti minimi di legge.

  
  
**