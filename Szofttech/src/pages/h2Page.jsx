import React from "react";
import vps from "../files/vps.png"
import "./main.css";
const F2 = () => {

    return (
        <div className="w-[1080px] my-5 px-10 fade-in-anim">
            <h1 className="font-bold w-full border-solid border-b-2 border-black">Vízió</h1>
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
                        <td>2022.10.05.</td>
                        <td>1.0</td>
                        <td>H2 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                    <tr>
                        <td>2022.10.12.</td>
                        <td>1.1</td>
                        <td>H2 javítása</td>
                        <td>Csapat</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="mt-10 underline">Tartalomjegyzék</h2>
            <div className="flex flex-col">
                <a href="#1"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">1.Bevezetés</button></a>
                <a href="#2"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">2. Az alkalmazás helye</button></a>
                <a href="#3"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">3. Érintettek és felhasználók</button></a>
                <a href="#4"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">4. A végtermék áttekintése</button></a>
                <a href="#5"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">5. A végtermék jellemzői, biztosított szolgáltatások</button></a>
                <a href="#6"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">6. Korlátozások</button></a>
                <a href="#7"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">7. Minőségi elvárások</button></a>
                <a href="#8"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">8. Dokumentációkkal kapcsolatos követelmények</button></a>
                <a href="#9"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">9. Kockázat lista</button></a>
                <a href="#10"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">10. Szótár</button></a>
            </div>
            <h2 id="1">1. Bevezetés</h2>
            <div>
                Bottle Battle játék. Többszemélyes telefonos party játék, ügyességi és gondolkodási feladatokkal, mint például egyensúlyozó feladatok, reakció idő feladatok. A játékmenet kör alapú, minden körben egy játékomódot játszunk. Az egyes játék módok a játékosok teljesítménye alapján pontot osztanak a játékosoknak, ami a körök között megmarad. A játékosok pontozása függ a játékosok alapteljesítményétől és a körök közötti önmagukhoz mért teljesítmény különbségtől(romlástól). A játék több telefonnal webböngészőn keresztül lesz játszható.
            </div>
            <h2 id="2">2. Az alkalmazás helye</h2>
            <div>
                Ennek a fejezetnek a célja az alkalmazás által megoldandó probléma elhelyezése a környezetében.
                Az alkalmazás célja a szórakoztatás, lehetőséget kínál az emberek számára, hogy élvezetesen töltsék el a szabadidejüket.
            </div>
            <h3>2.1 Üzleti lehetőségek</h3>
            <div>
                Az alkalmazás ingyenes letölthető, ugyanakkor a célja hogy pénzt termeljen az alkalmazást fejlesztő szervezetnek. A felhasználóknak két lehetősége van:
                <ul className="mx-4 list-disc">
                    <li>Ingyenesen használják az alkalmazást és reklámok megtekintésével termelnek bevételt.</li>

                    <li>Előfizetnek a játékra, és reklámmentesen használják a programot.</li>
                </ul>
                Hosszú távon italgyártók, bárok szponzorálhatják az alkalmazást.
            </div>
            <h3>2.2 A probléma megfogalmazása</h3>
            <div>
                <p>A Bottle Battle egy többszemélyes ügyességi játék, amit több készüléken is lehet játszani, annak köszönhetően hogy ez egy server-side (szerver oldali) alkalmazás. A program célja, hogy bármilyen közösségi célú gyűlést feldobjon, legyen az egy baráti találkozás vagy céges csapatépítés. Előkerülhet egy könnyed party kereteiben, vagy esetleg egy versenyszellemű csapat köreiben, ugyanis a pontrendszernek köszönhetően a játékosok a kompetitív vágyaikat is kiélhetik. Több különböző minijáték elérhető a játékban (Például: Reakció-időre alapuló játék, vagy a telefon giroszkóp adatainak segítségével egyensúlyi játék), amelyek közül a felhasználó szabadon választhat, de akár a döntésképtelen játékosok az ‘Egyveleg’ címszó alatt randomizálhatják a játékok sorrendjét és időtartamát, így kerülve el az azonos játékmódok monotonitását. A szoftver Androidon a Google Play áruházon keresztül érhető el, IOS rendszeren pedig az App Store-ból tölthető le, így bárki könnyen hozzájuthat. Ezekbe a natív kliensekbe a webalkalmazás van becsomagolva. Az alkalmazás egy könnyen kezelhető GUI (graphical user interface)-el rendelkezik, így bármilyen korosztály egyszerűen kezelheti.</p>
                <p>2 fajta felhasználói fiókot fogunk megkülönböztetni: Az ingyenes és fizetett fiókokat. Mivel partijáték és többszemélyes, tehát több készülékről kell játszani, ezért az alkalmazáson belül lehetőség lesz a reklámok eltávolítására, körülbelül egy kávé áráért egy estére.</p>
                <p>A felhasználók értesítést kaphatnak arról ha a közelben játék folyik. Meghívhatják egymást játszani, a szociális bejelentkezésnek hála, akár egy gombnyomással is. Valamint a játékban elért eredményeket megoszthatják az interneten (közösségi alkalmazásokon keresztül), ezzel újabb játékosokat bevonzva.</p>
                <p>A rendszer élesítéséhez webszervert kell telepíteni.</p>
            </div>
            <h3>2.3 Az elkészült termék helye</h3>
            <div>
                Az alkalmazás 14-24 év közötti magánszemélyek/végfelhasználók számára készült, nemtől függetlenül. Androidon a Google Play-en keresztül érhető el, IOS rendszeren pedig az App Store-on keresztül lesz beszerezhető, így bárki könnyen hozzájuthat. Az alkalmazás játék kategóriába tartozik. A célja az emberek szórakoztatása, a társasági események színesebbé tétele. Ezek mellet remek csapatépítő program is lehet. Az alternatívákat tekintve léteznek hasonló játékok, többnyire egy kaptafára amik feladatot adnak a résztvevőknek, viszont ezek a játékok inkább kérdezz felelek jellegűek, nincs igazi telefonos játék jellegük. A mi játékunk esetében nem csak beszélgetést irányító feladatok, hanem igazi mini játékok is vannak.
            </div>
            <h2 id="3">3. Érintettek és felhasználók</h2>
            <h3>3.1. Az érintettek összefoglalása</h3>
            <table class="table-auto text-[17px]">
                <thead>
                    <tr>
                        <th>Elnevezés</th>
                        <th>Leírás</th>
                        <th>Szerep</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Játék fejlesztő</td>
                        <td>Az a programozó aki a játékot elkészíti. A játékszabályokat program kódként implementálja, és a játék teljesítményét optimalizálja.</td>
                        <td>A termék fejlesztéséért közvetlenül felelős munkatárs.</td>
                    </tr>
                    <tr>
                        <td>Dev ops szakértő</td>
                        <td>A fejlesztők munkájának hatékonyságáért felelő szakember.</td>
                        <td>Azért felelős hogy a fejlesztőknek minden információ és eszköz elérhető legyen a fejlesztéshez.</td>
                    </tr>
                    <tr>
                        <td>Grafikai designer</td>
                        <td>Különböző grafikai elemek létrehozása, az alkalmazás kinézeti skeletonját készíti el.</td>
                        <td>Grafikus, modell tervező.</td>
                    </tr>
                    <tr>
                        <td>Webfejlesztő/Webmester</td>
                        <td>Karbantartja és aktualizálja a honlapot. Figyeli, hogy a felhasználó minden új dologról tájékoztatva legyen, az oldalon keresztül.</td>
                        <td>Bejegyzi a weblapot a szolgáltatónál, tartalommal feltölti, illetve figyeli, hogy az oldal naprakész legyen.</td>
                    </tr>
                    <tr>
                        <td>Support</td>
                        <td>A játékosokkal foglalkozik, az üzemeltetést segíti.</td>
                        <td>Beavatkozik, eltávolítja az obszcén vagy destruktív elemeket.</td>
                    </tr>
                    <tr>
                        <td>Tesztelő</td>
                        <td>Rávilágít az alkalmazás hibáira, majd ezt rögzíti, és továbbítja a fejlesztők felé.</td>
                        <td>Az alkalmazást tesztelő munkatárs.</td>
                    </tr>
                    <tr>
                        <td>Product Owner</td>
                        <td>Koordinálja a munkásokat, felügyeli a fejlesztés menetét, figyeli a határidőt, illetve a határidők betartását, valamint kapcsolatot tart a különböző ügyfelekkel.</td>
                        <td>Az alkalmazás koordinálásáért felelős munkatárs.</td>
                    </tr>
                </tbody>
            </table>
            <h3>3.2. A felhasználók összefoglalása</h3>
            <table class="table-auto text-[17px] w-full">
                <thead>
                    <tr>
                        <th>Elnevezés</th>
                        <th>Leírás</th>
                        <th>Illetékes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Demó verziós (regisztráció nélküli) felhasználó</td>
                        <td>Olyan játékos aki nem használhatja a regisztrációhoz kötött funkciókat.</td>
                        <td>Egy játékos, aki használni szeretné az alkalmazást</td>
                    </tr>
                    <tr>
                        <td>Regisztrált, ingyenes verzióval rendelkező játékos</td>
                        <td>Az alkalmazás minden funkciójához hozzáfér, reklámmentesen.</td>
                        <td>Egy játékos, aki használni szeretné az alkalmazás</td>
                    </tr>
                    <tr>
                        <td>Előfizető felhasználó</td>
                        <td>Az alkalmazás minden funkciójához hozzáfér, reklámmentesen.</td>
                        <td>Egy játékos, aki használni szeretné az alkalmazást</td>
                    </tr>
                    <tr>
                        <td>Adminisztrátor</td>
                        <td>Aki az aktuális játékmenetet indította, szabadon kidobhat játékosokat, és mini játékot választhat.</td>
                        <td>A lobby létrehozója.</td>
                    </tr>
                </tbody>
            </table>
            <h3>3.3 Felhasználói környezet</h3>
            <div>
                A játék szerver oldalon renderelt alkalmazás, ez azt jelenti, hogy minden eszköz képes futtatni amin ezt támogató böngésző elérhető (Google Chrome, Safari, Opera, Microsoft edge). Valamint bármilyen eszköz amely támogatja a natív klienst (Alkalmazásba csomagolt webalkalmazás útján). Várakozásainknak megfelelően a felhasználók száma a fejlesztést követő időben folyamatosan növekedni fog és egy éven belül eléri az 5000-et. A várható munkamenetek hossza esetenként 10 perc és pár óra között változhat.
                A játék tervezésénél figyelembe kell venni hogy sok fajta mobil eszközön (több fajta képernyőméret), változó körülmények között (internet kapcsolat, térerő) fogják használni az alkalmazást. A játékba 3. feles bejelentkezésként google és facebook autentikációt fogunk implementálni.

            </div>
            <h3>3.4. Illetékesek adatai</h3>
            <div>Nincs információ.</div>
            <h3>3.5. Felhasználók adatai</h3>
            <div>
                Először a felhasználók egy egyszerű becenév, valamint a születési dátumok megadásával is tudják használni az alkalmazást, a későbbiekben az e-mail címük, illetve jelszavuk beírásával lehetőségük nyílik a regisztrációra is.
            </div>
            <h2 id="4">4. A végtermék áttekintése</h2>
            <div>Ebben a fejezetben az elkészítendő termék legfontosabb jellemzőit foglaljuk össze.</div>
            <h3>4.1 A termék kapcsolatai</h3>
            <div>
                <div>Felhasználói megjelenítési felület - A GUI-t főként a Visual Studio által biztosított szolgáltatások segítségével tervezzük megalkotni. Továbbá a grafikai megjelenítéshez Blazor komponenseket használunk.</div>
                <div>Adatok tárolása - A felhasználók adatait Firebase segítségével tároljuk.</div>
                <div>Service - Az alkalmazás üzleti logikáért felelős egységek, melyeket dependency injection-nel irányítunk be a GUI felé.</div>
            </div>
            <h3>4.2. A termék használatának előnyei</h3>
            <table class="table-auto text-[17px]">
                <thead>
                    <tr>
                        <th>A megrendelő haszna (előnyei)</th>
                        <th>Az ezt támogató rendszer jellemző(k)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Szórakoztatóbbá válhatnak a baráti- és/vagy családi összejövetelek.</td>
                        <td><ul className="list-decimal mx-4">
                            <li>A felhasználóknak lehetőségük van arra, hogy izgalmas ügyességi és gondolkodási feladatokkal tegyék jobbá a találkozó hangulatot.</li>
                            <li>A rendszer használatával minden telefonnal rendelkező személy egyszerűen csatlakozhat ugyanahhoz a partyhoz.</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>Ingyenes</td>
                        <td>
                            A teljes program ingyenesen elérhető. (Hirdetéseket tartalmazhat, valamint a reklámmentes verzió megvásárolható.)
                        </td>
                    </tr>
                    <tr>
                        <td>Az applikáció pénzt termel a készítőinek</td>
                        <td>
                            Két módon termelhet bevételt:
                            <ul className="mx-8 list-disc">
                                <li>Reklámok útján.</li>
                                <li>Előfizetés útján.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>4.3. Feltételezések és függőségek</h3>
            <div>
                <p>Az alkalmazás használatához folyamatos és stabil internetkapcsolat szükséges (Wi-Fi vagy Mobil internet), valamint egy olyan eszköz amelyen elérhető egy webböngésző.</p>
                <p>A egyes játékmódok GPS, giroszkóp- és gyorsulásmérő szenzort igényelnek. A játék egésze érintőképernyőre optimalizált.</p>
                <p>A játékhoz használt szervereknek jól pozícionáltnak (alacsony ping), folyamatosan elérhetőnek és megfelelő teljesítményűnek kell lenniük. A működtetéshez domain nevet kell lefoglalni és bérelni egy DNS szolgáltatónál.</p>
                <p>A rendszer regisztrált felhasználói szempontjából kritikus az adataikat tároló adatbázis, az előfizetőknek pedig a használt fizetési szolgáltató (simple pay/PayPal)</p>
                <p>Az előfizetés nélküli verzió használata a reklám szolgáltatótól függ.</p>
                <p>A facebook, és google bejelentkezést használó felhasználók a bejelentkezésért felelős rendszertől függenek, ahogy a játékeredmények megosztása is.</p>

                <p>Valamint a játék használatához társaság szükséges.</p>

            </div>
            <h3>4.4 Költségbecslés</h3>
            <div>Alkalmazás elkészítésének becsült költsége (<a href="https://estimatemyapp.com/" className="hover:bg-amber-400 rounded-2xl">https://estimatemyapp.com/</a>) - $62,550
                <ul className="list-disc mx-8">
                    <li>35 designer munkanap</li>
                    <li>104 fejlesztési hét</li>
                </ul>
                Az alkalmazás üzemeltetésének a költsége a forgalomtól függ.
                A weboldal nevének a bérlése elhanyagolható (pár ezer forint éves szinten)
                A webszerver bérlése az egyik fő üzemeltetési költség memória alapján számítva:
                700kb /  user, egy 8gb vps ahol a rendszer futtatása után még 7gb marad az alkalmazásnak: 10 000 felhasználót képes kiszolgálni. Ez a contabo ajánlatát figyelembe véve 0.22 ft / aktív felhasználó.
                <img src={vps} alt="" className="my-4"></img>
                A webszerver telepítéséhez rendszergazdát kell bérelni: ezt az országban aktuális bérek döntik el.
                2000ft/óra esetén, havi max 10 órában: 20 000 Ft, ugyanez az ember elvégzi a mobil applikációk karbantartását és frissítését is.

                <a href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/" className="hover:bg-amber-400 rounded-2xl">https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/</a>
            </div>
            <h3>4.5. Installáció</h3>
            <div>
                Az alkalmazáshoz csak egy böngészőre van szükség. (Google Chrome, Safari, Opera, Microsoft edge). Az alkalmazás beszerezhető alkalmazás boltból is (Android: Google Play, iOS: App store)
            </div>
            <h2 id="5">5. A végtermék jellemzői, biztosított szolgáltatások</h2>
            <div>
                <div>
                    <div>A fejlesztést befejezve egy olyan alkalmazást kapunk, amelyet a fiatalok szívesen használhatnak szórakozásra, kapcsolataik elmélyítésére. Az alkalmazás könnyen játszható lesz bárhol ahol stabil internetkapcsolat van. A felhasználó egyszerűen tud majd várókat létrehozni ahova meg tudja hívni a barátait.</div>
                    <div className="underline">A játék főbb tulajdonságai:</div>
                    <div>Többszemélyes telefonos party játék, ügyességi és gondolkodási feladatokkal, mint például egyensúlyozó feladatok, reakció idő feladatok. A játékmenet kör alapú, minden körben egy játékomódot játszunk. Az egyes játék módok a játékosok teljesítménye alapján pontot osztanak a játékosoknak, ami a körök között megmarad. A játékosok pontozása függ a játékosok alapteljesítményétől és a körök közötti önmagukhoz mért teljesítmény különbségtől(romlástól). A játék több telefonnal webböngészőn keresztül lesz játszható.</div>
                </div>
            </div>
            <h2 id="6">6. Korlátozások</h2>
            <div>Az alkalmazásnak platformfüggetlennek kell lennie, vagyis működnie kell mindegyik mobilos operációs rendszeren, illetve a képernyőméretek közötti eltérés sem okozhat gondot.
                A játéknak a játékos korához mérten kell megjelennie, nem késztethet ivásra kiskorú személyt.
                Az alkalmazásban megjelenő tartalomnak nem szabad ellent mondania a következő törvényeknek:
            </div>
            <ul className="list-disc" style={{ marginLeft: 50 }}>
                <li>A fogyasztóvédelemről szóló 1997. évi CLV. törvény 16/A.§ </li>
                <li>a fogyasztóvédelmi hatóság kijelöléséről szóló 387/2016. (XII. 2.) Korm. rendelet 1. § (4) bekezdés </li>
                <li>A termékek eladási ára és egységára, továbbá a szolgáltatások díja feltüntetésének részletes szabályairól szóló 4/2009. (I. 30.) NFGM-SZMM együttes rendelet 1. §- 6. §, </li>
                <li>A közigazgatási hatósági eljárás és szolgáltatás általános szabályairól szóló 2004. évi CXL. törvény 19. § (1) bekezdés, 21. §, 29. §, 31. §, </li>
                <li>Az illetékekről szóló 1990. évi XCIII. törvény 29. §, 33. § (2) bekezdés 35. pont, </li>
                <li>A panaszokról és a közérdekű bejelentésekről szóló 2013. CLXV. törvény 1-3. § </li>
                <li>A kereskedelemről szóló 2005. évi CLXIV. törvény, • A kereskedelmi tevékenység végzésének feltételeiről szóló 210/2009. (IX. 29.) Korm. rendelet, </li>
                <li> A vásárokról, a piacokról és a bevásárlóközpontokról szóló 55/2009. (III. 13.) Korm. rendelet. </li>
                <li> A nemdohányzók védelméről és a dohánytermékek fogyasztásának, forgalmazásának egyes szabályairól szóló 1999. évi XLII. törvény </li>
                <li> A fiatalkorúak dohányzásának visszaszorításáról és a dohánytermékek kiskereskedelméről szóló 2012. évi CXXXIV. törvény</li>
            </ul>
            <h2 id="7">7. Minőségi elvárások</h2>
            <div>A játékosoknak megfelelő internetkapcsolattal kell rendelkezniük, a natív alkalmazás és a webalkalmazás használatához is.
                Kétlépcsős azonosító használata, hogy a játékos biztosan egy személy legyen.

            </div>
            <h2 id="8">8. Dokumentációkkal kapcsolatos követelmények</h2>
            <div>
                Azure taskokban való leírás a problémákról, illetve annak megoldásáról.
                A készülő dokumentumokat google driveon tartjuk.
                Azure knowledge - egyes hibák pontos leírását itt tároljuk. Pl: portok beállítása teszteléshez.
            </div>
            <h2 id="9">9. Kockázat lista</h2>
            <div><ul className="list-decimal" style={{ marginLeft: 50 }} >
                <li>Az alkalmazás nem terjed el, nem lesz felhasználói bázisa</li>
                <li>A technológia korlátozza elégséges számú játékmód kifejlesztését, hisz nem játék készítésre van tervezve.</li>
                <li>A külső rendszerektől függenek egyes funkciók:
                    <ul className="list-disc" style={{ marginLeft: 50 }}>
                        <li>Simple pay</li>
                        <li>Domain szolgáltató</li>
                        <li>Webszerver</li>
                        <li>Adatbázis</li>
                        <li>Szociális bejelentkezés</li>
                    </ul>
                </li>
                <li>Az alkalmazás nem skálázható horizontálisan, ezért a felhasználó bázis növekedésével exponenciális üzemeltetési költség növekedés következik be, és az alkalmazás üzemeltetése gazdaságtalanná válik.</li>
            </ul></div>
            <h2 id="10">10. Szótár</h2>
            <div>
                <ul className="list-decimal">
                    <li style={{ marginLeft: 50 }} className="underline">Webböngésző: </li>
                    <div style={{ marginLeft: 80 }}>Manapság számos webböngésző létezik, de a legnépszerűbbek a (Chrome) és firefox(Firefox) . Egyéb böngészők: Internet Explorer, Opera, Safari. A fenti böngészők mindegyikének megvan a maga megjelenése és működése, de a cél ugyanaz: a weboldalak helyes és gyors betöltése.
                        A legtöbb modern programhoz hasonlóan a böngészők is használják grafikus felhasználói felület (GUI), ami azt jelenti, hogy az egérrel navigálhat és hajthat végre műveleteket, nem pedig parancsok beírásával, mint a számítógép korai napjaiban.
                        Egyes eszközök például használnak különböző típusok grafikus felületek, mint pl érintőképernyők. Sok alapelv azonban változatlan marad.
                        Az alábbi képen egy számítógép grafikus felülete, ahol egeret használunk, illetve egy okostelefon érintőfelülete, ahol egér helyett ujjérintést használunk.
                    </div>
                    <li style={{ marginLeft: 50 }} className="underline">Server side renderelés:</li>
                    <div style={{ marginLeft: 80 }}>A szerver oldali rendereléskor a szerver számolja ki mi jelenjen meg a játékosok képernyőjén.</div>
                    <li style={{ marginLeft: 50 }} className="underline">Giroszkóp</li>
                    <div style={{ marginLeft: 80 }}>A giroszkóp a szögelfordulás és szögsebesség mérésére szolgáló eszköz.</div>
                    <li style={{ marginLeft: 50 }} className="underline">Gyorsulásmérő</li>
                    <div style={{ marginLeft: 80 }}>A gyorsulásmérő[1] gyorsulás mérésére szolgáló műszer. Mivel azonban a gyorsulást közvetlenül nehéz(kes) mérni, ezért az ilyen műszer a gyorsuláskor fellépő erőt méri, ami Newton 2. törvényének megfelelően:
                        Tudományos meghatározással: a gyorsulásmérő által mért gyorsulás egy inerciarendszerhez képest értelmezhető.</div>

                    <li style={{ marginLeft: 50 }} className="underline">GUI</li>
                    <div style={{ marginLeft: 80 }}>A grafikus felhasználói felület vagy grafikus felhasználói interfész (angolul graphical user interface, röviden GUI) a számítástechnikában olyan, a számítógép és ember közti kapcsolatot megvalósító elemek összessége, melyek a monitor képernyőjén szöveges és rajzos elemek együtteseként jelennek meg. A grafikus felhasználói felületeken alapvető szerepe van a mutatóeszközök, például az egér használatának, amelyekkel a grafikus felület elemei intuitív módon, a fizikai világ egyfajta modelljeként kezelhetők.</div>

                    <li style={{ marginLeft: 50 }} className="underline">Dev ops</li>
                    <div style={{ marginLeft: 80 }}>A DevOps a szoftverfejlesztők és a szoftvereket üzemeltetők szoros együttműködésén alapuló gyakorlat. Egyesíti a szoftverfejlesztést (Development), és az üzemeltetést (Operations), ezzel meggyorsítva és hatékonyabbá téve a munkát.</div>


                    <li style={{ marginLeft: 50 }} className="underline">Autentikáció</li>
                    <div style={{ marginLeft: 80 }}>Az autentikáció az informatikában olyan eljárást jelent, amelynek során meggyőződünk arról, hogy valamely információ (legtöbbször egy felhasználó azonosságára vonatkozó állítás) megfelel a valóságnak. Legjobb magyar megfelelője a "hitelesítés" szó lehet. Az informatikai rendszerek különböző fokú (megbízhatóságú) hitelesítési eljárás után adnak jogosultságot erőforrásaikhoz.</div>

                    <li style={{ marginLeft: 50 }} className="underline">Implementálás</li>
                    <div style={{ marginLeft: 80 }}>Egy algoritmus, architektúra, szabvány, modell, specifikáció vagy egyéb terv konkrét megvalósítása. Az implementáció a számítástechnikában egy technikai specifikáció vagy algoritmus program, program komponens vagy más módon történő megvalósulása.</div>

                    <li style={{ marginLeft: 50 }} className="underline">Dependency Injection</li>
                    <div style={{ marginLeft: 80 }}>A számítógép-programozásban a dependency injection egy technika, aminek lényege, hogy egy objektum más objektumok függőségeit elégíti ki. A függőséget felhasználó objektum szolgáltatást nyújt, az injekció pedig ennek a függőségnek az átadása a kliens részére. A szolgáltatás a kliens állapotának része.[1] A minta alapkövetelménye a szolgáltatás kliensnek való átadása ahelyett, hogy a szolgáltató objektumot a kliens hozná létre.</div>
                </ul>
            </div>
            <h2>Dokumentumok</h2>
            <div>
                <a href="https://docs.google.com/document/d/1p3JEtjmQJ4RweKpJvmZklVrCVR1wByLC/edit?usp=sharing&ouid=106424153964571442967&rtpof=true&sd=true" className="hover:bg-amber-400 rounded-2xl">Munkanapló</a>
            </div>
        </div>
    );

}
export default F2;