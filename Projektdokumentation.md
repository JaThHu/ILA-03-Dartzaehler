# Projekt-Dokumentation

Janick Thomas Hurschler

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  10.01.2025    | 0.0.0   | Start des Projektes - Informieren, Planen, Entscheiden. Doku erstellt. |
|  17.01.2025    | 0.1.0 |Implementierung der Startseite, Spieleauswahl und Logik für das 301/501-Game. |
|  24.01.2025    |  | |
|  14.02.2025    |  | |
|  21.02.2025    |  | |
|  28.02.2025    |  | |
|  07.03.2025    |  | |


## 1 Informieren

### 1.1 Ihr Projekt

Eine Dartzählapp, als Webapp mit React und Firebase für Speicherung, die sich auf drei beliebte Spielmodi konzentriert: 301/501, Around the Clock und High Score.

### 1.2 Meilensteine

| Meilenstein-Nr. | Beschreibung | geplantes Datum |
|------|----|-----|
| 1 | Grundstruktur und Navigation.  | 17.01.2025 |
| 2 | Implementierung der Spielmodi | 21.02.2025 |
| 3 | Statistik und Design | 28.02.2025 |
| 4 | Veröffentlichung und Test | 07.03.2025 |


* **Meilenstein 1** 
  - Startseite und Routing sind funktionsfähig.
  - Firebase ist eingerichtet.
* **Meilenstein 2**
  - Alle drei Spielmodi (301/501, Around the Clock, High Score) sind implementiert und funktionstüchtig.
* **Meilenstein 3** 
  - Statistikfunktion ist integriert und funktioniert mit Firebase.
  - Responsives Design ist fertiggestellt.
* **Meilenstein 4**
  - Die Webapp ist auf Netlify veröffentlicht.
  - Alle Funktionen wurden getestet und notwendige Optimierungen durchgeführt.
    

### 1.3 User Stories

| US-№ | Verbindlichkeit | Typ          | Beschreibung                                                                                       |
|------|-----------------|--------------|---------------------------------------------------------------------------------------------------|
| 1    | muss            | Funktional   | Als Nutzer möchte ich aus drei Spielmodi (301/501, Around the Clock, High Score) auswählen können. |
| 2    | muss            | Funktional   | Als Nutzer möchte ich meine Punkte während eines Spiels erfassen und automatisch berechnen lassen. |
| 3    | muss            | Funktional   | Als Nutzer möchte ich am Ende eines Spiels den Gewinner und das Spielergebnis angezeigt bekommen. |
| 4    | muss            | Funktional   | Als Nutzer möchte ich eine Statistik einsehen können, die meine Spielhistorie und Ergebnisse zeigt. |
| 5    | muss            | Funktional   | Als Nutzer möchte ich, dass die App auf verschiedenen Geräten (Desktop und Mobil) benutzerfreundlich ist. |
| 6    | kann            | Funktional   | Als Nutzer möchte ich Animationen sehen, die meine Aktionen im Spiel visuell unterstützen.        |
| 7    | kann            | Qualität     | Als Nutzer möchte ich zwischen verschiedenen Farbschemata wechseln können, um die Optik anzupassen. |
| 8    | muss            | Randbedingung| Die Webapp muss auf Netlify veröffentlicht und öffentlich zugänglich sein.                        |
| 9    | muss            | Randbedingung| Alle Statistiken müssen in Firebase gespeichert und abrufbar sein.                                |
| 10   | muss            | Qualität     | Die App muss ein dunkles Farbschema verwenden, um die Benutzererfahrung zu verbessern.            |


### 1.4 Testfälle 

| TC-№ | Ausgangslage                            | Eingabe                                      | Erwartete Ausgabe                             |
|------|----------------------------------------|---------------------------------------------|-----------------------------------------------|
| 1.1  | Startseite ist geladen.                 | Der Nutzer wählt den Spielmodus "301/501".  | Der Spielmodus "301/501" wird gestartet.      |
| 1.2  | Startseite ist geladen.                 | Der Nutzer wählt den Spielmodus "Around the Clock". | Der Spielmodus "Around the Clock" wird gestartet. |
| 1.3  | Startseite ist geladen.                 | Der Nutzer wählt den Spielmodus "High Score". | Der Spielmodus "High Score" wird gestartet.   |
| 2.1  | Ein Spielmodus (z. B. 301/501) läuft.   | Der Nutzer gibt die Punktzahl eines Wurfs ein (z. B. 20). | Die Punktzahl wird korrekt vom Gesamtscore abgezogen. |
| 2.2  | Ein Spielmodus (z. B. High Score) läuft.| Der Nutzer gibt die Punktzahl eines Wurfs ein (z. B. 50). | Die Punktzahl wird zur Gesamtpunktzahl addiert. |
| 3.1  | Ein Spiel ist beendet.                  | Keine Eingabe erforderlich.                 | Der Gewinner und die Endergebnisse werden angezeigt. |
| 4.1  | Statistikseite ist aufrufbar.           | Der Nutzer öffnet die Statistikseite.       | Die Spielhistorie und Ergebnisse werden angezeigt. |
| 4.2  | Statistiken existieren.                 | Keine Eingabe erforderlich.                 | Die Statistikdaten werden korrekt geladen und dargestellt. |
| 5.1  | Die Webapp wird auf einem Desktop geöffnet.| Keine Eingabe erforderlich.                 | Die Benutzeroberfläche wird korrekt angezeigt und ist funktional. |
| 5.2  | Die Webapp wird auf einem Smartphone geöffnet.| Keine Eingabe erforderlich.                 | Die Benutzeroberfläche wird responsiv angepasst und ist funktional. |
| 6.1  | Animationen sind aktiviert (optional).  | Der Nutzer gibt eine Punktzahl ein.         | Eine Animation (z. B. Trefferanzeige) wird angezeigt. |
| 7.1  | Farbschema-Auswahl ist verfügbar (optional).| Der Nutzer wählt ein anderes Farbschema aus.| Das Farbschema der App wird geändert.        |
| 8.1  | Die Webapp ist auf Netlify veröffentlicht.| Keine Eingabe erforderlich.                 | Die Webapp ist online zugänglich.             |
| 9.1  | Firebase ist konfiguriert.              | Der Nutzer beendet ein Spiel.               | Die Ergebnisse werden in Firebase gespeichert. |
| 9.2  | Firebase ist konfiguriert.              | Der Nutzer öffnet die Statistikseite.       | Daten werden korrekt aus Firebase geladen.    |
| 10.1 | App ist auf einem Gerät geöffnet.       | Keine Eingabe erforderlich.                 | Das Farbschema ist standardmäßig dunkel.      |



## 2. Planen


| AP-№  | Frist        | Zuständig       | Beschreibung                                                                 | Geplante Zeit in Stunden |
|-------|--------------|-----------------|-----------------------------------------------------------------------------|---------------------------|
| 1.1   | 17.01.2025   | Janick            | Implementierung der Startseite und Auswahlmöglichkeiten für alle Spielmodi. | 2                         |
| 2.1   | 17.01.2025   | Janick            | Implementierung der Punktzählung für den Spielmodus 301/501.                | 2                         |
| 2.2   | 24.01.2025   | Janick            | Implementierung der Punktzählung für den Spielmodus High Score.             | 2                         |
| 3.1   | 24.01.2025   | Janick            | Implementierung der Gewinneranzeige und Spielende-Bedingungen.              | 2                         |
| 4.1   | 14.02.2025   | Janick            | Erstellung der Statistikseite und Anbindung an Firebase.                    | 3                         |
| 5.1   | 21.02.2025   | Janick            | Optimierung des responsiven Designs für verschiedene Geräte.                | 3                         |
| 8.1   | 21.02.2025   | Janick            | Deployment der Webapp auf Netlify und Test der Verfügbarkeit.               | 2                         |
| 9.1   | 28.02.2025   | Janick            | Speichern der Spielstatistiken in Firebase nach Spielende.                  | 2                         |
| 9.2   | 28.02.2025   | Janick            | Laden und Anzeigen von gespeicherten Statistiken aus Firebase.              | 2                         |
| 10.1  | 07.03.2025   | Janick            | Implementierung des dunklen Farbschemas als Standarddesign.                 | 1                         |

**Total:** 21 Stunden  

## 3 Entscheiden

1. **Technologie: Bootstrap CSS**

    - **Entscheidung:** Ich habe mich für Bootstrap CSS entschieden, um das Design meiner WebApp zu gestalten.
    - **Alternativen:**
      - **Tailwind CSS:** Eine moderne CSS-Bibliothek, die ein flexibles und benutzerdefiniertes Styling ermöglicht.
    - **Begründung:** Bootstrap CSS bietet eine umfassende Sammlung vorgefertigter Komponenten, die die Entwicklung beschleunigen und konsistente Designs gewährleisten. Im Gegensatz dazu erfordert Tailwind CSS ein tieferes Verständnis für individuelles Styling, was die Entwicklungszeit verlängern könnte. Außerdem bin ich bereits vertraut mit Bootstrap CSS.

2. **Technologie: React.js**
   - **Entscheidung:** Für die Entwicklung der Benutzeroberfläche haben wir uns für React.js entschieden.
   - **Alternativen:**
     - **Angular:** Ein umfassendes Framework, das ebenfalls zur Erstellung von Webanwendungen verwendet wird.
   - **Begründung:** React.js bietet eine einfache Struktur, die es uns ermöglicht, wiederverwendbare Komponenten zu erstellen. Da wir bis Dato meistens mit React.js gearbeitet haben, sind wir bereits in der Lage, es anzuwenden und müssen nicht extra Zeit zum lernen aufwenden.

3. **Plattform: WebApp**
   - **Entscheidung:** Wir haben uns entschieden, eine WebApp zu entwickeln, die auf Browsern läuft.
   - **Alternativen:**
     - **Native App:** Entwicklung einer Anwendung, die speziell für mobile Geräte (iOS/Android) erstellt wird.
     - **Desktop-App:** Erstellung einer Anwendung, die auf Desktop-Betriebssystemen (Windows, macOS, Linux) läuft.
   - **Begründung:** Eine WebApp ermöglicht uns, eine einfachere Umsetzung, da sie auf verschiedenen Geräten ohne Installation zugänglich ist. Das Publishen einer WebApp ist ausserdem auch einfacher durch Netlify.

4. **Projektart: Dart-zähler**
   - **Entscheidung:** Ich habe mich für die Entwicklung einer Dart-Zähler-WebApp entschieden, mit welcher man verschiedene Darts-Spiele spielen kann.
   - **Alternativen:**
     - **Plattform für soziale Spiele:** Entwicklung einer App für soziale Spiele wie Trivia oder Kartenspiele ohne Glücksspiel.
     - **Bildungs-App:** Erstellung einer App mit Fokus auf Lerninhalte, z.B. Programmieren oder Mathe.
   - **Begründung:** Ich habe mich dazu entschieden, da ich selber gerne und viel Darts spiele und alle herkömmlichen Apps Werbung oder Abonements beinhalten. Ich will die Webapp auch selber nutzen.

5. **Methodik: IPERKA**
   - **Entscheidung:** Wir haben die IPERKA-Methode (Informieren, Planen, Entscheiden, Realisieren, Kontrollieren, Auswerten) gewählt.
   - **Alternativen:**
     - **Agile Methoden (z.B. Scrum):** Eine iterative Vorgehensweise, die in vielen Softwareentwicklungsprojekten verwendet wird.
     - **Wasserfallmodell:** Eine lineare, sequenzielle Entwicklungsweise.
   - **Begründung:** IPERKA bietet eine strukturierte Herangehensweise, die uns hilft, jeden Schritt klar zu definieren und zu dokumentieren. Agile Methoden wären zwar flexibel, könnten jedoch zu Unklarheiten bei der Planung führen, während das Wasserfallmodell in einem dynamischen Umfeld nicht genügend Anpassungsfähigkeit bietet.

6. **Versionskontrolle: GitHub**
   - **Entscheidung:** Wir haben GitHub als Plattform für die Versionskontrolle und Zusammenarbeit gewählt.
   - **Alternativen:**
     - **GitLab:** Eine weitere beliebte Plattform für Versionskontrolle und CI/CD.
   - **Begründung:** Da wir schon immer mit GitHub gearbeitet haben und es für die Versionskontrolle, Zusammenarbeit und Ablage sehr gut geeignet, entscheiden wir uns für Github.

7. **Hosting: Netlify**
   - **Entscheidung:** Für das Hosting der WebApp haben wir Netlify gewählt.
   - **Alternativen:**
     - **Vercel:** Eine weitere beliebte Plattform für das Hosting von Frontend-Anwendungen.
   - **Begründung:** Netlify bietet eine einfache und schnelle Bereitstellung für statische Webseiten und unterstützt die Integration mit GitHub für automatisierte Deployments. Wir haben Netlify schon in früheren Projekten verwendet und wissen deshalbt wie es anzuwenden ist.



### 4. Realisieren

| AP-№ | Datum   | Zuständig               | Geplante Zeit | Tatsächliche Zeit |
|------|---------|-------------------------|---------------|-------------------|
|1.1 |  17.01. |    Janick           |   2  |    2     |
|2.1|17.01.|Janick|2|2|


## 5 Kontrollieren

### 5.1 Testprotokoll


| TC-№ | Datum       | Resultat | Tester         |
|------|-------------|----------|----------------|
| |  |      |  |






