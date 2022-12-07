import React from "react";
import kezdetiosztalydiagram from "../assets/kezdetio.png";
import osztalydiagram from "../assets/osztalydiagram.png";
import dinamikusmodell from "../assets/dinamikusmodell.png"
import funcmodell from "../assets/funcmodell.png";
import ermodell from "../assets/er.png";
import relaciosmodell from "../assets/relacios.png";
import databaseService from "../assets/databaseService.png";
import ef from "../assets/ef.png";
import kezdetiosztaly from "../assets/kezdetiosztalyteljes.png";
const F4 = () => {

    return (
        <div className="w-[1080px] my-5 px-10 fade-in-anim">
            <h1 className="font-bold w-full border-solid border-b-2 border-black">Analízis modell és Rendszertervezés</h1>
            <h2>Történet</h2>
            <table class="text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Dátum</th>
                        <th>Verzió</th>
                        <th>Leírás</th>
                        <th>Szerző</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2022.11.22.</td>
                        <td>1.0</td>
                        <td>H4 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                    <tr>
                        <td>2022.11.22.</td>
                        <td>1.1</td>
                        <td>H4 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="mt-10 underline">Tartalomjegyzék</h2>
            <div className="flex flex-col">
                <a href="#1"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Analízis modell</button></a>
                <a href="#11" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">1. Bevezetés</button></a>
                <a href="#12" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">2. Kezdeti osztálydiagram</button></a>
                <a href="#13" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">3. Az első alrendszer modellje</button></a>
                <a href="#2"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Rendszer tervezés</button></a>
                <a href="#21" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">1. Bevezetés</button></a>
                <a href="#22" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">2. Felhasználói felületek</button></a>
                <a href="#23" style={{ marginLeft: 30 }}><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">3. Adatmodellek</button></a>
                <a href="#3"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Dokumentumok</button></a>
            </div>
            <h1 id="1" className="font-bold w-full border-solid border-b-2 border-black">Analízis modell</h1>
            <h2 id="11">1. Bevezetés</h2>
            <div>
                A dokumentum célja a “Bottle Battle” nevű játékunk analízismodelljének reprezentálása.  Bemutatjuk a játék osztálydiagramját, alrendszerjének modelljét, valamint a dinamikus és funkcionális modelljét.
            </div>
            <h2 id="12">2. Kezdeti osztálydiagram</h2>
            <div className="my-4"><img src={kezdetiosztalydiagram} alt="img"></img></div>
            <h2>2.1 Osztálydiagram</h2>
            <div><img src={kezdetiosztaly} alt=""></img></div>
            <h3>2.2 Osztályok felsorolása</h3>
            <ul className="list-disc" style={{ marginLeft: 50 }}>
                <li>Player: A játékosok adatait tartalmazza</li>
                <li>SupportWindow: A support elérésére használatos UI felület</li>
                <li>MenuView: Az alkalmazás főmenüjének UI felülete</li>
                <li>Options: A Beállítások megtekintésére és módosítására használatos UI felület</li>
                <li>SessionListView: A játékmenetek listás nézete</li>
                <li>LobbyCodeView: A lobbyhoz való csatlakozáshoz szükséges kódot jeleníti meg</li>
                <li>Sessions: A sessionok adatait tartalmazza</li>
                <li>LobbyView: Adott lobby UI felülete</li>
                <li>ReactionGameMode: A reakcióidős játékmódhoz tartozó adatokat tartalmazza</li>
                <li>BalanceGameMode: A egyensúlyozós játékmódhoz tartozó adatokat tartalmazza</li>
                <li>SpeedTestGameMode: A gyorsasági játékmódhoz tartozó adatokat tartalmazza</li>
                <li>PuzzleGameMode: A kirakós játékmódhoz tartozó adatokat tartalmazza</li>
                <li>BaseGameMode: Ősosztály, az összes játékmód örökli</li>
            </ul>
            <h3>2.3. Alrendszerek</h3>
            <ul className="list-disc" style={{ marginLeft: 50 }}>
                <li>Játékmód kezelő osztályok</li>
                <li>Adatbázis kezelő alrendszer</li>
                <li>Regisztrációs, login, és subscription alrendszer</li>
                <li>Support rendszer</li>
            </ul>
            <h2 id="13">3. Az első alrendszer modellje</h2>
            <h3>3.1 Statikus modell</h3>
            <div>Mivel a játék egy szerveren fut, és a hálózati feladatokat a keretrendszer látja el, kezelhetjük úgy mintha egy számítógépen futna. A játékban elkülönítünk játékos specifikus osztályokat amik játékosonként léteznek. </div>
            <div className="font-bold">Game controllers, game views, game states</div>
            <div>Ezek az osztályok játékmódonként különböznek, mindegyiknek van ős osztálya, mivel sok dologban hasonlítanak a játékmódok, mind pl.:
            </div>
            <ul className="list-disc" style={{ marginLeft: 50 }}>
                <li>Mindegyikben van a játékosoknak pontszáma</li>
                <li>Mindegyik játékmód megjelenít egy felületet.</li>
                <li>Mindegyik játékmódban játékosok vannak</li>
                <li>Mindegyik játékmódot el lehet indítani és le lehet állítani vagy magától leáll egy idő után valamilyen eredménnyel.</li>

            </ul>
            <div className="font-bold">Nézet osztályok</div>
            <div>A nézetek is sokban hasonlítanak, viszont ezeket kötelező osztályként elkészíteni a blazor nem enged nekünk mást.
            </div>
            <div className="font-bold">Adat osztályok</div>
            <div>A player osztály tárolja a játékos adatait, nevét stb.
                A session osztályt a session service használja, de elérik az egyéni játékosok is. Egy játékmenethez egy session tartozik.
            </div>
            <div className="font-bold">Service osztályok</div>
            <div>A servicek, az háttérben meghúzódó üzleti logika implementációjáért felelősek. A blazornek hála vannak scoped servicek, ezek kliensenként vannak példányosítva és amolyan “lokális” réteget képeznek a működésben.
            </div>
            <h3>3.1.1 Kapcsolatok pontosítása</h3>
            <div>Player: A player példányok a session service sessionjeiben-ben léteznek, tárolják a játékosok adatait. A player service-ből minden játékos alkalmazás példánya eléri a saját magához tartozó játékost.
            </div>
            <div>Session: A sessionök a session serviceben vannak statikus listaként. A sessionservice helyi példányából le lehet kérni hogy éppen sessionben vagyunk e.
            </div>
            <div>SessionService: A session servicet dependency injectionnel érhetjük el amit a blazor old meg beépített függvényekkel.
            </div>
            <div>ExplosiveGameController: A session hozza létre, és tárolja.</div>
            <div>ExplosiveGameState: A game controller hozza létre minden játékoshoz egyet. Ez közvetíti a játékosok saját példánya a játék állását az ő szemszögükből. Ha változik, az újrarenderelést jelent.</div>
            <h3>3.1.2 Attribútumok azonosítása</h3>
            <div className="font-bold">Player</div>
            <div style={{ marginLeft: 30 }}>PlayerName, PlayerColor, PlayerScore</div>
            <div className="font-bold">Session</div>
            <div style={{ marginLeft: 30 }}>PlayersInSession, Owner</div>
            <div className="font-bold">SessionService</div>
            <div style={{ marginLeft: 30 }}>Sessions</div>
            <div className="font-bold">ExplosiveGameController</div>
            <div style={{ marginLeft: 30 }}>PREPARE_TIME, MAX_TRIGGER_TIME, CLIENT_TIMEOUT_TIME</div>
            <div className="font-bold">ExplosiveGameState</div>
            <div style={{ marginLeft: 30 }}>Provocateur, ExplosionTime, ExplosionTimer, TimeoutTimer, ResponseTime</div>
            <div className="font-bold">BaseGameController</div>
            <div style={{ marginLeft: 30 }}>AttachedSession, ScoreReallizer, ClientStates</div>
            <h3>3.1.3 Bázisosztályok keresése</h3>
            <div>A játékban ismétlődő elemként megjelennek a játékmódok. A játékmódok működését biztosító osztályoknak célszerű ős osztályokat csinálni. Ilyenek a GameState, GameController, és GameView osztályok. Az ősosztály létrehozásával sok ismétlődő kódot megspórolhatunk és generikus megoldásokkal pl a session service-ben a generikus játékmódot elindító metódussal javíthatunk a kód rendezettségén. (Ez a metódus autómatikusan elindítja megadott típus alapján az adott játékmódot.)</div>
            <h3>3.2. Dinamikus modell</h3>
            <img src={dinamikusmodell} alt=""></img>
            <h3>3.3. Funkcionális modell</h3>
            <img src={funcmodell} alt=""></img>
            <h3>3.4 Az analízis modell osztálydiagramja</h3>
            <img src={osztalydiagram} alt=""></img>
            <h2>3.5. Az analízis modell osztályainak listája</h2>
            <h3>3.5.1 Player</h3>
            <ul className="list-disc" style={{ marginLeft: 30 }}>
                <li>Felelőssége, feladata: Ez az osztály reprezentálja a játékost. Adatokat tartalmaz a játékosról, például nevét, pontjait és ikonjának színét</li>
                <li>Együttműködők: PlayerService, IPlayerService</li>
                <li>Attribútumok:</li>
            </ul>
            <table class="text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Leírás</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PlayerName</td>
                        <td>String</td>
                        <td>A játékos neve</td>
                    </tr>
                    <tr>
                        <td>PlayerColor</td>
                        <td>String</td>
                        <td>A játékos ikonjának színe</td>
                    </tr>
                    <tr>
                        <td>Playerscore</td>
                        <td>Integer</td>
                        <td>A játékos pontszáma</td>
                    </tr>
                </tbody>
            </table>

            <h3>3.5.2 Session service</h3>
            <ul className="list-disc" style={{ marginLeft: 30 }}>
                <li>Felelőssége, feladata: A sessionökért felelős egység. Session-ök létrehozása törlése.</li>
                <li>Együttműködők: Player </li>
                <li>Attribútumok:</li>
            </ul>
            <table class="text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Leírás</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sessions</td>
                        <td>List</td>
                        <td>Session-ök listája</td>
                    </tr>
                </tbody>
            </table>
            <ul className="list-disc" style={{ marginLeft: 30 }}>
                <li>Operációk:</li>
            </ul>
            <table class="text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Argumentumok</th>
                        <th>Működése, feladata</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JoinSession()</td>
                        <td>Player, Session</td>
                        <td>Egy játékost hozzárendel egy sessionhöz.</td>
                    </tr>
                    <tr>
                        <td> LeaveSession()</td>
                        <td>Player</td>
                        <td>Egy játkékost leválaszt egy sessionről.</td>
                    </tr>
                    <tr>
                        <td> StartGame()</td>
                        <td>T: Az elindítandó játék típusa</td>
                        <td> Elindít egy mini játékot típus alapján</td>
                    </tr>
                    <tr>
                        <td>StopGame()</td>
                        <td>none</td>
                        <td>Leállítja a játékot, törli a futó game controllert</td>
                    </tr>
                </tbody>
            </table>
            <h3>3.5.3 ExplosiveGameController</h3>
            <ul className="list-disc" style={{ marginLeft: 30 }}>
                <li>Felelőssége, feladata: A explosive game játékért felelős egység.</li>
                <li>Együttműködők: SessionService</li>
                <li>Attribútumok:</li>
                <table class="text-[17px] w-full">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Típus</th>
                            <th>Leírás</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PREPARE_TIME</td>
                            <td>Integer</td>
                            <td> A felkészülési időt kezeli</td>
                        </tr>
                        <tr>
                            <td>MAX_TRIGGER_TIME</td>
                            <td>Integer</td>
                            <td>A maximum lenyomási időt jelzi</td>
                        </tr>
                        <tr>
                            <td>CLIENT_TIMEOUT_TIME</td>
                            <td>Integer</td>
                            <td>A játékos lecsatlakozási idejét jelzi</td>
                        </tr>
                    </tbody>

                </table>
                <li>Operációk:</li>
                <table class="text-[17px] w-full">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Argumentumok</th>
                            <th>Működése, feladata</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>StartGame()</td>
                            <td>none</td>
                            <td> Elindítja a játékot.</td>
                        </tr>
                        <tr>
                            <td>EndRound()</td>
                            <td>none</td>
                            <td> Befejezi az adott kört.</td>
                        </tr>
                        <tr>
                            <td>StartRound()</td>
                            <td>none</td>
                            <td>Elindítja az adott kört.</td>
                        </tr>
                        <tr>
                            <td>CatchExplosion()</td>
                            <td>Player</td>
                            <td>A játékos elkapja a robbanást.</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
            <h3>3.5.4 ExplosiveGameState</h3>
            <li>Felelőssége, feladata: Az explosive game játék állapotáért felelős egység.</li>
            <li>Együttműködők: ExplosiveGameController.</li>
            <li>Attribútumok:</li>
            <table class="text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Leírás</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Provocateur</td>
                        <td>Player</td>
                        <td>Az a felhasználó aki téged provokál és meg akar szivatni a játékban.</td>
                    </tr>
                    <tr>
                        <td>ExplosionTime</td>
                        <td>Integer</td>
                        <td>A bomba robbanásának ideje.</td>
                    </tr>
                    <tr>
                        <td>ExplosionTimer</td>
                        <td>Timer</td>
                        <td>A timer figyeli a játékban eltelt időt.</td>
                    </tr>
                    <tr>
                        <td>TimeoutTimer</td>
                        <td>Timer</td>
                        <td>A response időt méri</td>
                    </tr>
                    <tr>
                        <td>ResponseTime</td>
                        <td>Integer</td>
                        <td>inaktivitással eltöltött idő</td>
                    </tr>
                </tbody>
            </table>
            <h3>3.5.5 BaseGameController</h3>
            <ul className="list-disc" style={{ marginLeft: 30 }}>
                <li>Felelőssége, feladata: Az alapvető játékirányítási funkciókat látja el.</li>
                <li>Együttműködők: Minden játékmód osztály.</li>
                <li>Attribútumok:</li>
                <table class="text-[17px] w-full">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Típus</th>
                            <th>Leírás</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AttachedSession</td>
                            <td>Session</td>
                            <td> Az a session amiben a játékmód éppen fut, ezen keresztül éri el a játéklogika hány játékos van stb..</td>
                        </tr>
                        <tr>
                            <td>ScoreRealizer</td>
                            <td>ScoreRealizer</td>
                            <td>A játékosok adott pontjait számolja</td>
                        </tr>
                        <tr>
                            <td>ClientStates</td>
                            <td>List</td>
                            <td>A játékosok helyzetét írja le</td>
                        </tr>
                    </tbody>

                </table>
                <li>Operációk:</li>
                <table class="text-[17px] w-full">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Argumentumok</th>
                            <th>Működése, feladata</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>StartGame()</td>
                            <td>none</td>
                            <td> Elindítja a játékot.</td>
                        </tr>
                        <tr>
                            <td>ControllerHasChanged()</td>
                            <td>none</td>
                            <td> Jelzi egy EventHandlernek hogy a contorller változott, a feliratkozott listenerek értesítést kapnak</td>
                        </tr>
                        <tr>
                            <td>GetGameStateForPlayer</td>
                            <td>Player</td>
                            <td>A játékosok számára biztosítja a játék állapotot. </td>
                        </tr>
                    </tbody>
                </table>
            </ul>
            <h1 id="2" className="pt-10 font-bold w-full border-solid border-b-2 border-black">Rendszertervezés</h1>
            <h2 id="21">1. Bevezetés</h2>
            <div>A dokumentum célja a játék felhasználói felületének, valamint adatbázisának leírása. A szemléletesség érdekében ER diagrammal továbbá relációs adatmodellel mutatjuk be az adatbázisunkat. Ezek mellet bemutatásra kerül még az adatbázis-kezelővel kapcsolatot tartó osztály,valamint metódusai. </div>
            <h2 id="22">2. Felhasználói felület</h2>
            <div>
                A játékunkban több fajta felületet használhatnak a felhasználók az egyes funkciók elérésére. Ezek a felületek két csoportra oszthatók, ingame felületek és menü felületek. Az ingame felületeket játék közben látják, míg a menü felületeket a játékmódok közötti navigálásra, beállításokra használhatják.
                A játékban előforduló felületek:
            </div>
            <ul className="" style={{ marginLeft: 30 }}>
                <li>1. Menü felületek</li>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>Főmenü</li>
                    <li>Csatlakozás lobbyhoz</li>
                    <li>Bejelentkező felület,</li>
                    <li>Regisztrációs felület</li>
                    <li>Beceneves belépés felület</li>
                    <li>Support felület</li>
                    <li>Fórum felület</li>
                    <li>Lobby</li>
                </ul>
                <li>2. InGame felületek</li>
                <ul>
                    <li>Játékfelület (Játékmódonként minimum 1)</li>
                    <li>A Játékban aktív játékosokat mutató alsó sáv, játékmódonként megegyezik</li>
                </ul>
            </ul>
            <h2 id="23">3. Adatmodellek</h2>
            <h3>3.1. Adatbázis kezelő kiválasztása</h3>
            <div>A játékhoz a Cassandra adatbázis-kezelő programot használjuk. SQL táblákon tárolunk minden adatot, ebbe beletartoznak a felhasználók adatai, a ranglista és a vásárlási adatok.</div>
            <h3>3.2. Szemantikai adatmodell (ER modell)</h3>
            <img src={ermodell} alt=""></img>
            <h3>3.3 Relációs adatmodell</h3>
            <img src={relaciosmodell} alt=""></img>
            <h3>3.4. Egyedi tulajdonságai</h3>
            <div>
                <div>Játékos egyed tulajdonságai:</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>Ez a tábla a játékosok adatait tartalmazza.</li>
                    <li>Jatekos_id: Elsődleges kulcs, szükséges egyedi azonosító a továbbiakban.</li>
                    <li>Vezetéknév: A játékosok vezetéknevét tárolja.</li>
                    <li>Keresztnév: A játékosok keresztnevét tárolja.</li>
                    <li>Születési idő: A játékosok születési idejét tárolja.</li>
                    <li>Email: A játékosok e-mail címét tárolja</li>
                    <li>Jelszó: A játékosok jelszavát tárolja</li>
                    <li>Felhasználónév: A játékosok felhasználónevét tárolja.</li>
                </ul>

                <div>Tranzakció egyed tulajdonságai:</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>Tranz_id : Elsődleges kulcs, szükséges egyedi azonosító a továbbiakban.</li>
                    <li>Idő: A tranzakció időpontját tárolja.</li>
                    <li>Összeg: A tranzakció összegét tárolja</li>
                    <li>Jatekos_id: idegen kulcs mely a játékostáblából származtatható.</li>
                </ul>
                <div>Hiba jegyek egyed tulajdonságai:</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>Ticket_id: Elsődleges kulcs, szükséges egyedi azonosító a továbbiakban.</li>
                    <li>Leírás: A hibával kapcsolatos leírást tárolja.</li>
                    <li>Idő: A hibajegy létrejöttét tárolja.</li>
                    <li>Státusz: A hibajegy státuszát tárolja.</li>
                    <li>Jatekos_id: Idegen kulcs, amely a játékos táblából származtatható.</li>
                    <li>Support_id: idegen kulcs, amely a support táblából származtatható.</li>
                </ul>
                <div>Support egyed tulajdonságai:</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>Support_id:  Elsődleges kulcs, szükséges egyedi azonosító a továbbiakban.</li>
                    <li>Vezetéknév: A support vezetéknevét tárolja.</li>
                    <li>Keresztnév: A support keresztnevét tárolja.</li>
                    <li>Jelszó: A support jelszavát tárolja.</li>
                    <li>E-mail: A support e-mail címét tárolja.</li>
                </ul>
            </div>
            <h2>3.5. Az adatbázis kezelővel kapcsolatot tartó osztályok</h2>
            <div>Egy DatabaseService osztály tart kapcsolatot az adatbázis-kezelővel. </div>
            <img src={databaseService} alt=""></img>
            <div>
                <p className="font-bold">Adattagjai:</p>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>ConnectionString: Ez egy json fájlból kiolvasott érték minden olyan adat benne van amely az adatbázishoz való kapcsolódáshoz szükséges.</li>
                </ul>
                <p className="font-bold">Metódusai:</p>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li>createConnection(): a kapcsolat létrehozásáért felelős metódus.</li>
                    <li>respond(): a válaszolásért felelős metódus. Paraméterei a Name és Password. Ellenőrzi, hogy helyes felhasználónévvel és jelszóval akarunk-e belépni az adatbázisba. Ha igen, akkor true a visszatérés értéke, ha nem, akkor false a visszatérés értéke, ezáltal megtagadja a belépést.</li>
                    <li>getDataFromDatabase(string query): az adatbázisban lévő adatok eléréséért felelős metódus, egyetlen bemenő paramétere egy sql lekérdezés.</li>
                    <li>GetUserName(): Visszaadja a játékos felhasználónevét.</li>
                    <li>GetPassword(): Visszaadja a játékos jelszavát</li>
                    <li>IsSubscriber(): Vissza ad egy logikai értéket, hogy a játékos fizetett-e a játékért.</li>
                </ul>
            </div>
            <div>A DataBase service osztály segítségére EntityFramework-öt használunk mely segíti az adatbázisban szereplő tagok objektummá alakítását</div>
            <img src={ef} alt=""></img>
            <h2 id="3">Dokumentumok</h2>
            <div>
                <div><a href="https://docs.google.com/document/d/1p3JEtjmQJ4RweKpJvmZklVrCVR1wByLC/edit?usp=sharing&ouid=106424153964571442967&rtpof=true&sd=true" className="hover:bg-amber-400 rounded-2xl p-2">Munkanapló</a></div>
                <div><a href="https://docs.google.com/document/d/1yVhS56aISpa7iGJd-UmqmCcqNvtZ-lqhH919jkLUpJg/edit" className="hover:bg-amber-400 rounded-2xl p-2">Szótár</a></div>
            </div>
        </div>

    );

}
export default F4;