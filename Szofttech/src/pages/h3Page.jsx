import React from "react";
import supp from "../files/supp.png"
import jatekos from "../files/felh.png"
const F3 = () => {

    return (
        <div className="w-[1080px] my-5 px-10 fade-in-anim">
            <h1 className="font-bold w-full border-solid border-b-2 border-black">SRS dokumentáció</h1>
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
                        <td>2022.11.09.</td>
                        <td>1.0</td>
                        <td>H3 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="mt-10 underline">Tartalomjegyzék</h2>
            <div className="flex flex-col">
                <a href="#1"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">1.Bevezetés</button></a>
                <a href="#2"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">2. Áttekintés</button></a>
                <a href="#3"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">3. A rendszer funkciói</button></a>
                <a href="#4"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">4. Használhatóság</button></a>
                <a href="#5"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">5. Megbízhatóság</button></a>
                <a href="#6"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">6. Teljesítmény</button></a>
                <a href="#7"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">7. Támogatottság</button></a>
                <a href="#8"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">8. Tervezési korlátozások</button></a>
                <a href="#9"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">9. On-line dokumentáció és Help rendszer</button></a>
                <a href="#10"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">10. Felhasznált kész komponensek</button></a>
                <a href="#11"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">11. Interfészek</button></a>
                <a href="#12"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">12. Alkalmazott szabványok</button></a>
                <a href="#13"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Dokumentumok</button></a>
            </div>
            <h2 id="1">1. Bevezetés</h2>
            <div>
                Bottle Battle játék. Többszemélyes telefonos party játék, ügyességi és gondolkodási feladatokkal, mint például egyensúlyozó feladatok, reakció idő feladatok. A játékmenet kör alapú, minden körben egy játékomódot játszunk. Az egyes játék módok a játékosok teljesítménye alapján pontot osztanak a játékosoknak, ami a körök között megmarad. A játékosok pontozása függ a játékosok alapteljesítményétől és a körök közötti önmagukhoz mért teljesítmény különbségtől(romlástól). A játék több telefonnal webböngészőn keresztül lesz játszható.
            </div>
            <h2 id="2">2. Áttekintés</h2>
            <div>
                <div>
                    Az alkalmazás felhasználói várhatóan korosztály, 14-24 év közötti magánszemélyek lesznek. Ennek ellenére természetesen bárki játszhat  a játékunkkal hiszen remek megoldás az unalom elűzésére vagy épp a reakció időnk illetve más képességeink mérésére.
                </div>
                <div className="underline">
                    Az alkalmazás legfontosabb funkciói:
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>regisztrált felhasználók adatainak nyilvántartása</li>
                    <li>demo verzió regisztráció nélküli felhasználók számára</li>
                    <li>a lobbyn belüli pontok nyilvántartása</li>
                    <li>felhasználói jogosultságok ellenőrzése</li>
                    <li>többjátékos mód</li>
                    <li>a 'Support' opciót használva üzenetküldés a fejlesztők/adminisztrátorok részére</li>
                </ul>
                <div className="underline">A felhasználók jellemzői:</div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>felhasználó(játékos):Játsza a játékot, előfizethet reklámmentes verzóért , az alkalmazás minden funkciójához hozzáfér.
                    </li>
                    <li>
                        Adminisztrátor: az aktuális játékmenetet indította, szabadon kidobhat játékosokat, és mini játékot választhat. Továbbá feldolgozza a felhasználók által küldött üzeneteket,hibajegyeket  lépéseket tesz a bugok megszüntetésére. Teszteli az alkalmazást.
                    </li>
                </ul>
                <div className="underline">Korlátozások:</div>
                <div>
                    Az alkalmazásnak platformfüggetlennek kell lennie, vagyis működnie kell mindegyik mobilos operációs rendszeren, illetve a képernyőméretek közötti eltérés sem okozhat gondot. A játéknak a játékos korához mérten kell megjelennie, nem készítethet ivásra kiskorú személyt. Az alkalmazásban megjelenő tartalomnak nem szabad ellent mondania a következő törvényeknek:
                    A fogyasztóvédelemről szóló 1997. évi CLV. törvény 16/A.§
                    a fogyasztóvédelmi hatóság kijelöléséről szóló 387/2016. (XII. 2.) Korm. rendelet 1. § (4) bekezdés
                    A termékek eladási ára és egységára, továbbá a szolgáltatások díja feltüntetésének részletes szabályairól szóló 4/2009. (I. 30.) NFGM-SZMM együttes rendelet 1. §- 6. §,
                    A közigazgatási hatósági eljárás és szolgáltatás általános szabályairól szóló 2004. évi CXL. törvény 19. § (1) bekezdés, 21. §, 29. §, 31. §,
                    Az illetékekről szóló 1990. évi XCIII. törvény 29. §, 33. § (2) bekezdés 35. pont,
                    A panaszokról és a közérdekű bejelentésekről szóló 2013. CLXV. törvény 1-3. §
                    A kereskedelemről szóló 2005. évi CLXIV. törvény, • A kereskedelmi tevékenység végzésének feltételeiről szóló 210/2009. (IX. 29.) Korm. rendelet,
                    A vásárokról, a piacokról és a bevásárlóközpontokról szóló 55/2009. (III. 13.) Korm. rendelet.
                    A nemdohányzók védelméről és a dohánytermékek fogyasztásának, forgalmazásának egyes szabályairól szóló 1999. évi XLII. törvény
                    A fiatalkorúak dohányzásának visszaszorításáról és a dohánytermékek kiskereskedelméről szóló 2012. évi CXXXIV. Törvény
                    a licensz megújításáért fizetni kell
                    a regisztráció során választott jelszónak erősnek kell lennie (min. 8 karakter, kis- és nagybetűt, valamint számot kell tartalmaznia)
                    a regisztrációhoz és az alkalmazás használatához internetkapcsolat szükséges

                </div>
                <div className="underline">Feltételezések és függőségek:</div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>feltételezzük, hogy a felhasználó a játék használatához szükséges alapvető készségekkel rendelkezik
                    </li>
                    <li>Az alkalmazás használatához folyamatos és stabil internetkapcsolat szükséges (Wi-Fi vagy Mobil internet), valamint egy olyan eszköz amelyen elérhető egy webböngésző.
                        A egyes játékmódok GPS, giroszkóp- és gyorsulásmérő szenzort igényelnek. A játék egésze érintőképernyőre optimalizált.
                    </li>
                    <li>szükségesek lesznek tervezett karbantartások, amelyek előre látható időpontjait a hivatalos weboldalunkon közzétesszük, ennek megtekintéséhez ugyancsak szükséges internetkapcsolat
                    </li>
                    <li>szükségesek karbantartások</li>
                    <li>A játékhoz használt szervereknek jól pozícionáltnak (alacsony ping), folyamatosan elérhetőnek és megfelelő teljesítményűnek kell lenniük. A működtetéshez domain nevet kell lefoglalni és bérelni egy DNS szolgáltatónál.
                    </li>
                    <li>A rendszer regisztrált felhasználói szempontjából kritikus az adataikat tároló adatbázis, az előfizetőknek pedig a használt fizetési szolgáltató (simple pay/PayPal)
                    </li>
                    <li>Az előfizetés nélküli verzió használata a reklám szolgáltatótól függ.
                    </li>
                    <li>A facebook, és google bejelentkezést használó felhasználók a bejelentkezésért felelős rendszertől függenek, ahogy a játékeredmények megosztása is.
                        Valamint a játék használatához társaság szükséges.
                    </li>
                </ul>
                <div className="underline">A követelmények csoportosításának szempontjai:zabályi követelmények:
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>internetkapcsolat</li>
                    <li>regisztráció (lehetőség)</li>
                    <li>mód használata</li>
                    <li>jogszabályi követelmények</li>
                    <li>Support funkció</li>
                </ul>
            </div>
            <h2 id="3">3. A rendszer funkciói</h2>
            <div>
                <h3 className="underline">Support</h3>
                <div>A játék hátterében álló, legnagyobb jogosultsági körrel rendelkező személy, aki felel azért, hogy a lehető legkevesebb működés közbeni hibával rendelkezzen az adott szoftver, így kézben kell tartania a felhasználókkal kapcsolatos adatokat, befizetéseket. (Ebben nyilván egy hiba szűrő alprogram fog segíteni, ami kezdetleges statisztikai adatokkal is ellátja az adminisztrátort.)</div>
                <div>Supporthoz tartozó feladatok:</div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>Bejelentkezés</li>
                    <li>Support felvétele</li>
                    <li>Jogosultságkezelés</li>
                    <li>Hozzáférés kezelés</li>
                    <li>Játékosok bannolása</li>
                    <li>Előfizetés kezelés</li>
                    <li>Üzenetek kezelése</li>
                    <li>Felhasználók üzeneteinek feldolgozása</li>
                    <li>Üzenetek megválaszolása</li>
                    <li>Hibaellenőrzés</li>
                    <li>Teszt indítása</li>
                    <li>Kiértékelés</li>
                    <li>Kijelentkezés</li>
                </ul>
                <img className="my-4" src={supp} alt="img"></img>
                <h3 className="underline">Játékos</h3>
                <img className="my-4" src={jatekos} alt="img"></img>
                <h2>3.1. A játék böngészőben futtatható</h2>
                <div>Mint minden weboldalnak ennek is elérhetőnek kell lennie az interneten keresztül. Ha valaki begépeli az oldal címét, a játék töltő képernyőjének kell megnyitnia, majd megjelennie a menünek/bejelentkezés képernyőnek. Abban az esetben ha egy lobby csatlakozó linkre kattintott a felhasználó, a nevének beírása után a lobbyba kell csatlakoznia.
                    <p className="font-bold">Main flow:</p> A játékos megnyitja a telefonján a Google Chrome böngészőt, begépeli az oldal címét. Ha nincs mentett fiókja megjelenik a bejelentkezés panel. Ha van mentett fiókja, akkor a menü jelenik meg, vagy lobby link esetében az adott lobby.
                    <p className="font-bold">Alternate flows:</p>
                    Amennyiben hibás linket próbál megnyitni a játékos, olyan ami nem értelmezhető (nincs ilyen oldal a játékban, vagy ilyen címmel nem lehet elindítani a játékot pl: játék eredmény képernyőre mutató link), hibaüzenetet kap majd a program a főképernyőre navigál.
                    Ha a felhasználó olyan lobbyba próbál belépni ahova nem léphet, mert nem létezik vagy mert nem léphet be akárki, akkor hibaüzenetet kap, és főmenüben találja magát.
                </div>
                <h3>
                    3.2.  Bejelentkezés
                </h3>
                <div>
                    Mivel a játékban lehetősség van felhasználói fiókokat regisztrálni és a már létező fiókunkat használni, van bejelentkezés funkció. Több módon is azonosíthatjuk a személyünket a program számára, mindegyik mód email címet használ a felhasználó azonosítására, ezért a bejelentkezési folyamat célja hogy igazoljuk, mi vagyunk a tulajdonosai a fióknak. Ez történhet szociális bejelentkezés szolgáltatóval, vagy egyszerhasználatos emailben kiküldött tokennel/linkel. Lehetőség van bejelentkezés nélkül is használni az alkalmazást, ilyenkor a bejelentkezés képernyőn csak egy tetszőleges nevet és az életkorunkat kell megadnunk, ezzel a névvel fogunk megjelenni a többi játékosnak.
                    <p className="font-bold">Main flow:</p>
                    Ha játékos megnyitja a programot és nincs mentett fiókja a program a bejelentkezés képernyőre irányítja, akármilyen képernyőt próbál megnyitni (kivéve speciális: pl informatív és jogi oldalak ÁSZF, GDPR nyilatkozat, Játék promo tartalmak stb). A bejelentkezés módjának kiválasztása után az adott bejelentkezésnek megfelelő panel ugrik fel:
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>Email token: egy mező ahova beírhatjuk a címünket, majd a kiküldött linket felhasználva visszajutunk az főmenübe</li>
                    <li>Social: Google/Facebook: a program megnyit egy popupot ami a szolgáltató oldalára irányít minket. A bejelentkezés után visszajutunk a játékba.
                    </li>
                    <li>Anonym bejelentkezés: egy mező jelenik meg ahova beírhatjuk az felhasználónevet. Ha megfelel a követelményeknek nem tartalmaz tiltott szót és megfelelő terjedelmű megjelenik a főmenü, a kész gombra kattintás után.</li>
                </ul>
                <div>
                <p className="font-bold">Alternate flows:</p>
                    Ha hiba következik be, nem érvényes a beírt email cím, sikertelen a social login, vagy nem megfelelő a felhasználó név az anonym bejelentkezésnél, hibaüzenet jelenik meg  a képernyőn, újrapróbálhatjuk a bejelentkezést.
                </div>
                <h3>3.3. Belépés a lobbyba</h3>
                <div>A multiplayer játékokban a játékosok számára lehetősség van egymás megvárására játékmenet elindulása előtt, belépnek a játékba de nem a játékba jutnak hanem egy “várakozószovába”. A mi játékunkban is szükség van ilyenre, mert vannak olyan játékmódok amik csak akkor működnek ha minden játékos jelen van a menet indulásakor. A lobbykba a lobbyk 5 karakter hosszú kódjával vagy lobby linkekkel lehet belépni.
                    <p className="font-bold">Main flow:</p>
                    A játékos beírja a kódot a lobby kód mezőbe a főmenüben és rákattint a csatlakozás gombra. A játék a kód ellenőrzése után a megfelelő lobbyba irányítja.
                    <p className="font-bold">Alternate flows:</p>
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>A játékos lobby linkel nyitja meg a játékot, így kihadja a főmenüt és bejelentkezés után egyből a lobby képernyőre kerül.</li>
                    <li>A játékos rossz lobby linket vagy kódot használ. Hibaüzenetet kap és visszakerül a főmenübe.</li>
                </ul>
                <h3>3.4. Kilépés a lobbyból</h3>
                <div>A ha egy játékos ki akar lépni a lobbyból a kilépés gombal eltávolíthatja magát a meccsből. Ez automatikusan is megtörténik ha a játékossal megszakad a kapcsolat (elmegy az internete, vagy bezárja a játékot)
                    <p className="font-bold">Main flow:</p>
                    A játékos a kilépés gombra kattint, majd a főmenübe kerül. A többi játékos számára megszűnik minden hozzá kapcsolódó objektum. A játékos neve eltűnik a lobbyban lévők közül, eltűnik a pontszáma stb.
                </div>
                <h3>3.5. Játékos kirúgása a lobbyból.</h3>
                <div>	Ugyan az mint mikor a játékos önszántából lép ki, kivéve hogy ilyenkor a lobby “tulajdonosa” létrehozója, vagy a lobbyban rangidős játékos rúgja ki. Csak a lobbyban domináns játékosnak él ez a funkció.
                    <p className="font-bold">Main flow:</p>
                    A játékos nevére kattintunk majd a kirúgás gombra, a játékos eltűnik a lobbyból.
                    <p className="font-bold">Alternate flows:</p>
                    Ha a játékos eltünik a lobbyból a kirúgás folyamata alatt, például pont akkor szakad meg vele a kapcsolat, vagy lép ki
                </div>
                <h3>3.6. Játékmód indítása</h3>
                <div>	Ahhoz hogy elinduljon bármelyik játékmód, a lobbyvezérnek el kell indítania egyet az elérhető játékmódok közül.
                    <p className="font-bold">Main flow:</p>
                    A lobbyvezér rákattint az egyik elérhető játémód logójára, és a játékmód el kezd tölteni minden játéknál.
                </div>
                <h3>3.7. Pontok szerzése (pontozódás)</h3>
                <div>	Azért hogy a játéknak értelme legyek a játékosok pontokat kapnak a mini játékok használata közben, a játék teljesítménytől függően.
                    <p className="font-bold">Main flow:</p>
                    Ha elindul egy játékmód, a játékmód szabályaitól függően a játékosok pontokat kapnak. A pontok ebben az esetben negatívak, minél rosszabbul teljesít valaki egy minijátékban, annál több pontot kap. Amennyiben a pontokból összegyűlik egy adott összeg, a játékosnak el kell fogyasztania valamilyen italt.
                </div>
                <h3>3.8. Játékmód: reakció idős (explosiv)</h3>
                <div><p className="font-bold">Main flow:</p>
                    A lobby vezér elindítja a játékot, minden játékos képernyőjén elindul a játék. Random időközönként random embereknek megjelenik egy macska gif, amire rá kell nyomni amilyen gyorsan csak lehet. Ha elég idő eltelt vagy a játékosok elérik a max pontszámot a játék véget ér a pontok összegzésre kerülnek.
                    <p className="font-bold">Alternate flows:</p>
                    Ha egy játékos nem reagál a megjelenő gombra, véges időn belül, max pontszámot kap.
                </div>
                <h3>3.9. Játékmód: Memória</h3>
                <div><p className="font-bold">Main flow:</p>
                    A lobby vezér elindítja a játékot, minden játékos képernyőjén elindul a játék. A játékosok előtt lesz 3 pohár ami alatt egy golyó helyezkedik el. A játék a golyó pozícióit random cserélgeti. Összesen 5 kör van és a játék folyamatosan gyorsul. A játékosoknak meg kell találniuk a golyót, az a játékos kapja a legkevesebb pontot aki a leghamarabb és legtöbbször találta meg a golyót.
                    <p className="font-bold">Alternate flows:</p>
                    Ha a játékos nem választ golyót akkor automatikusan max pontot kap az adott körben.
                </div>
                <h3>3.10. Játékmód: Egyensúly</h3>
                <div><p className="font-bold">Main flow:</p>
                    A lobby vezér elindítja a játékot, minden játékos képernyőjén elindul a játék. A játékosok előtt lesz 1 darab pohár, amelyben a folyadékra gravitáció hat. A telefon dőlési szögét a giroszkóp segítségével meghatározhatjuk. Elindul egy időzítő, és a játékosoknak különböző pozícióba kell tartani a poharat / telefont, hogy a folyadék ne löttyenjen ki a pohárból, a követendő pozíció és annak nehézsége az idővel változik. Az nyer akinek utoljára fogy el a folyadék a poharából, minél tovább bírta egy játékos, annál kevesebb pontot kap.
                    <p className="font-bold">Alternate flows:</p>
                    Ha a játékos nem dönti a megfelelő pozícióba a telefont, és túl hamar kilöttyen a folyadék, a játékos max pontot kap.
                </div>
                <h3>3.11. Játékmód: Logikai</h3>
                <div>
                    <p className="font-bold">Main flow:</p>
                    A lobby vezér elindítja a játékot, minden játékos képernyőjén elindul a játék. A játékosoknak különböző, egyszerű minipuzzle-oket kell kirakniuk, ha eggyel végeztek, a játék automatikusan bedob egy újat. Minél több puzzlet rak ki valaki, annál kevesebb pontot kap.
                    <p className="font-bold">Alternate flows:</p>
                    Aki egy puzzlet se rakott ki az automatikusan maximális pontot kap.
                </div>
                <h3>3.12. Játékmód: Gyorsasági</h3>
                <div>
                    <p className="font-bold">Main flow:</p>
                    A lobby vezér elindítja a játékot, minden játékos képernyőjén elindul a játék. A játékosok előtt megjelenik egy labirintus és golyó. A golyóval ki kell jutniuk a labirintusból és aki a leggyorsabban kijutott az kapja a legkevesebb pontot.
                    <p className="font-bold">Alternate flows:</p>
                    Aki az adott időponton belül nem jutott ki a labirintusból az automatikusan maximális pontot kap.
                </div>
            </div>
            <h2 id="4">4. Használhatóság</h2>
            <div>
                <div>
                    Az alkalmazásunknál elsődleges szempont a letisztult és könnyen átlátható kezelőfelület, amely biztosítja hogy bárki számára egyszerűen használható legyen. A felület nagyrészt mindenki számára ugyanazt biztosítja, akár felhasználó vagy adminisztrátor az adott személy. A legfőbb különbséget a Support menüpont jelenti, ahol a játékosoknak lehetőségük van bejelenteni a hibákat, az adminisztrátorok pedig feldolgozzák azokat.
                    Öt fő, különálló felülettel találkozhatunk az alkalmazás használata közben, amelyek a következők:
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>Login dialog: vagyis azaz oldal ami lehetőséget nyújt a bejelentkezésre, valamint a regisztrációra. A felhasználóknak lehetőségük van az életkoruk és egy becenév megadásával elkezdeni a játékot, viszont regisztrálhatnak is, e-mail cím és jelszó megadásával vagy akár valamilyen közösségi oldal használatával is bejelentkezhetnek.
                    </li>
                    <li>
                        Beállítások: az alkalmazással kapcsolatos beállítások, a játékhoz és a profilokhoz kötődően. Előbbinél például a grafikai és audio beállítások, utóbbinál pedig a név és profilkép módosítása lehetséges.
                    </li>
                    <li>
                        Maga a játék: itt jelenik meg minden játékmenettel kapcsolatos dolog, az alkalmazáson belüli minigamek és a pontszámok.
                    </li>
                    <li>
                        Support: az az oldal ahol a játékosok bejelenthetik az esetleges hibákat az adminisztrátoroknak.
                    </li>
                    <li>
                        Forum: ezen a felületen a felhasználók kérdéseket tehetnek fel, és meg is válaszolhatják másokét, segítséget kérhetnek más játékosoktól és az adminisztrátoroktól.
                    </li>
                </ul>
                <div>
                    Az alkalmazásban törekedtünk arra, hogy minden mező és gomb funkciója egyértelmű legyen mind az öt felületen, a különböző minigamek egyszerű, ugyanakkor jól tájékoztató leírásokkal rendelkeznek, amelyek mindenki számára érthetőek, így a játékot bárki könnyen kezelheti.
                    A játék magyar nyelvű, de a későbbiekben fennáll több nyelv bevezetésének a lehetősége is.
                </div>
            </div>
            <h2 id="5">5. Megbízhatóság</h2>
            <div>
                <div>
                    A felhasználók számára fontos, hogy a játékszoftver mind a havidíj fizetési rendszere, mind a játékmenet megbízhatóan működjön, felhőtlen szórakozást nyújtva. Mindennél fontosabb a felhasználói élmény, és hogy a vevők megkapják azt maradéktalanul, amiért fizettek. A következő szempontokat vettük figyelembe:
                </div>
                <h3>5.1. Biztonság</h3>
                <div>	Mivel az alkalmazásunk 14-24 év közötti végfelhasználók/magánszemélyeknek készült, fontos hogy csak a 14. életévét betöltött felhasználók tudjanak csak belépni a játékba. Mivel elérhető a reklám menteség ezért korlátozni kell a felhasználók, tranzakció igényét hogy csak a 18. Életévét betöltött felhasználók érhessék el a fizetős tartalmakat. Fontos kizárni a játékélményt megzavaró tényezőket mint pl. Bugok, harmadik félhez tartozó szoftverek, illetve a havidíjak többszörös kiszámlázását. Külön kiemelendő, figyelmet nyújtani a felhasználók adatainak védelmére, hogy a felhasználó adatait semmiképpen sem szerezheti meg harmadik fél.
                </div>
                <h3>5.2. Rendelkezésre állás</h3>
                <div>
                    A szerverünknek 24/7-ben elérhetőnek kell maradnia mivel ezen fut maga a játék. Továbbá fontos még karbantartásokat végezni, illetve folyamatosan fejleszteni a játékot, hogy mindig új és érdekes legyen a játékosok számára, és hosszú távon is sikert arasson. Illetve fontos a felhasználók élményei, hogy tudjuk hogy pontosan merre kellene haladnunk a fejlesztésben. Későbbiekben ennek érdekében csinálhatunk fórumot, ahol a felhasználók tudnak egymásnak segítséget nyújtani, illetve a supportok a felhasználóknak, és ezt a többi felhasználó is tudja.
                </div>
            </div>
            <h2 id="6">6. Teljesítmény</h2>
            <div>
                <h3>6.1 User felőli elvárások</h3>
                <div>A felhasználóknak egy böngészőt futtató eszközre, lesz szükségük, illetve gyors internet elérésre.</div>
                <h3>6.2 Szolgáltató felöli elvárások</h3>
                <div>Fontos, hogy a szerverünk 24/7-ben elérhető legyen illetve, kell a gyors válaszidő. Továbbá fontos hogy az oldal betöltésekor ne foglaljunk le sok memóriát, és ne terheljük le feleslegesen az eszközt.
                    Játékunk működőképességében nagy szerepet játszik a felhasználói adatok tárolása, így igyekeznünk kell egy majdnem tökéletes adatbázis megalkotására, hogy megfelelő működést és élvezhetőséget biztosítsunk a felhasználó számára. A hibaszűrés megkönnyítése érdekében bevezetünk egy nyilvántartó rendszert, ami mint egy napló számon tartja az adott időszakokban előforduló kivételeket.
                </div>
            </div>
            <h2 id="7">
                7. Támogatottság
            </h2>
            <div>
                <div>A rendszer üzembe helyezése után szükséges karbantartási feladatok megkönnyítésére szolgáló követelmények, egy-egy alpontban. Ezek a követelmények vonatkozhatnak mind a termékre, mind a fejlesztés folyamatára. Ilyenek lehetnek például:
                </div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>a használandó kódolási szabványok, elnevezési konvenciók,</li>
                    <li>csak a karbantartóknak, illetve üzemeltetőknek szükséges funkciók,</li>
                    <li>a működés során keletkező naplók (a későbbi hibakeresés vagy finomhangolás elősegítésére),</li>
                    <li>a karbantartók munkáját segítő segédalkalmazások (például a naplók kiértékelésére).</li>
                </ul>
                <div>Egy újonnan megjelent játék sok felhasználót vonz, hogy kipróbálja. Ennek érdekében karbantartásokat, fejlesztéseket célszerű eszközölnünk. Az alkalmazás célja hogy hosszabb távon is használatba vegye a user. Ennek érdekében célszerű rendszeres karbantartásokat végrehajtani.
                        Ezek nyilván nemcsak a termékre, a fejleszthetőség folyamatára is vonatkoznak. Illetve, hogy a későbbiekben szoftverfejlesztő csapatunk munkáját megkönnyítsük, jól átlátható rendszer létrehozására törekszünk.
                        A hibaszűrés és átláthatóság érdekében bevezetünk egy napló rendszert amelyben a már lezárt és a még megoldás alatt álló ticketeket rendszerezzük.
                </div>
            </div>
            <h2 id="8">8. Tervezési korlátozások</h2>
            <div>
                <div>A játékot alapvetően C# nyelven írjuk, de használunk még:</div>
                <ul className="list-disc" style={{ marginLeft: 50 }}>
                    <li>Html-t</li>
                    <li>Css-t</li>
                    <li>JavaScript-et</li>
                </ul>
                <div>Fejlesztőkörnyezet: Visual Studio
                    A fejlesztés során Blazor komponenseket használunk ami egy cshtml.
                    A játékot csak mobilra fejlesztjük.
                </div>
            </div>
            <h2 id="9">9. On-line dokumentáció és Help rendszer</h2>
            <div>	A fejlesztés során készült dokumentációinkat, a hivatalos weboldalunkon közzé fogjuk tenni. A játékot szabadon bárki kipróbálhatja akár regisztráció nélkül is.
                A játékon belül található 'Support' gombra kattintva a felhasználó jelezhet a fejlesztők felé bármilyen játékban tapasztalt problémát. Örömmel vesszük azt is, ha ennek a lehetőségnek a használatával olyan javaslatokat küldenek a játékosok, amelyeket megvalósítva még élvezetesebbé tudjuk tenni a játékmenetet. Későbbiekben létrehozhatunk egy fórumot ahol a gyakran előforduló kérdéseknek létrehozunk egy FAQ-t ezzel is segítve a felhasználók segítségnyújtását.
            </div>
            <h2 id="10">10. Felhasznált kész komponensek</h2>
            <div>
                <div>
                    <div>Felhasznált third-party komponensek:
                    </div>
                    <ul className="list-disc" style={{ marginLeft: 50 }}>
                        <li>Simple pay - Fizetési lehetőség a hirdetések eltávolítása érdekében
                        </li>
                        <li>Paypal - Fizetési lehetőség a hirdetések eltávolítása érdekében</li>
                        <li>Google play - Az alkalmazásba social login belépési lehetőséget ad egy Google accounttal</li>
                        <li>Facebook - Az alkalmazásba social login belépési lehetőséget ad egy Google accountta</li>
                    </ul>
                    <div>Ezen szoftverek függőséget adnak az alkalmazásunkhoz.</div>
                </div>
            </div>
            <h2 id="11">11. Interfészek</h2>
            <div>
                <h3>11.1. Felhasználói interfészek</h3>
                <div>Az alkalmazásunk fejlesztése közben fontos szempont volt, hogy a felhasználói felület letisztult, könnyen átlátható, ugyanakkor esztétikailag is megfelelő legyen. A játékot úgy terveztük, hogy a különböző generációk számára könnyű és egyértelmű használatot biztosítson különösebb elektroteknikai tudás nélkül is. A dizájnok egységesek a felületeket és a gombokat tekintve, ez is segíti az átláthatóságot.
                </div>
                <h3>11.1.1. Belépés és regisztráció</h3>
                <div>Az első képernyő ami a felhasználókat fogadja, lehetőséget nyújt a bejelentkezésre, valamint a regisztrációra. A felhasználóknak lehetőségük van az életkoruk és egy becenév megadásával elkezdeni a játékot, viszont regisztrálhatnak is, e-mail cím és jelszó megadásával vagy akár valamilyen közösségi oldal használatával is bejelentkezhetnek.
                </div>
                <h3>11.1.2. Beállítások</h3>
                <div>Az a felület, ahol megjelennek az alkalmazással kapcsolatos beállítások, a játékmenethez és a profilokhoz kötődően. Előbbinél például a grafikai és audio beállítások, utóbbinál pedig a név és profilkép módosítása lehetséges.
                </div>
                <h2>11.1.3. Játékképernyő
                </h2>
                <div>Itt jelenik meg minden játékmenettel kapcsolatos dolog, az alkalmazáson belüli minigamek és a pontszámok.
                    A játékmód választás történhet a szerver által, ebben az esetben a játékmód véletlenszerűen választódik ki. Vagy akár a host is kiválaszthatja a következő mini-játékot. Továbbá lehetőség lesz szavazás alapú játékmód választásra is.
                </div>
                <h3>11.1.4. Support</h3>
                <div>A Support oldalon a játékosok bejelenthetik az esetleges hibákat az adminisztrátoroknak.</div>
                <h3>11.1.5. Forum</h3>
                <div>Ezen a felületen a felhasználók kérdéseket tehetnek fel, és meg is válaszolhatják másokét, segítséget kérhetnek más játékosoktól és az adminisztrátoroktól.
                </div>
                <h3>11.2. Hardware interfészek</h3>
                <div>A rendszer nem használ speciális hardver elemeket, így nincsenek külső hardver interfészek. A követelményeknek megfelelő specifikációkkal rendelkező mobileszközöknek alkalmasnak kell lenniük a működtetéshez.</div>
                <h3>11.3. Software interfészek</h3>
                <div>A felhasználók bejelentkezéséhez Google API-t használunk, illetve saját web API-t.
                </div>
                <h3>11.4. kommunikációs interfészek</h3>
                <div>A felhasználókkal a support funkción keresztül ér el bennünket ha a fórum elkészül azon is.
                </div>
                <h3>11.5. Adatbázist kezelő interfészek</h3>
                <div>Adatbázisként Cassandra adatbázist használunk amelynek verziója 4.2 (2023 május - július támogatott) . Melyet a c# Entity framework-jén keresztül érhetünk el. Az Entity framework 6.2 -es verzióját használjuk.</div>
            </div>
            <h2 id="12">12. Alkalmazott szabványok</h2>
            <div>
                <h3>12.1. Kötelezően alkalmazandó szabványok</h3>
                <div>Mandatory Standards
                    Valamilyen szintű előírás miatt. (Például törvényi előírás stb.)
                </div>
                <h3>12.2. Választás alapján alkalmazott szabványok</h3>
                <div>Optional Standars
                    A fejlesztők vagy a felhasználók által valamilyen okból önként vállalt előírások.12.1. Kötelezően alkalmazandó szabványok
                    A fogyasztóvédelemről szóló 1997. évi CLV. törvény 16/A.§
                    A fogyasztóvédelmi hatóság kijelöléséről szóló 387/2016. (XII. 2.) Korm. rendelet
                    1. § (4) bekezdés
                    A termékek eladási ára és egységára, továbbá a szolgáltatások díja feltüntetésének
                    részletes szabályairól szóló 4/2009. (I. 30.) NFGM-SZMM együttes rendelet 1. §-6. §,
                    A közigazgatási hatósági eljárás és szolgáltatás általános szabályairól szóló 2004. évi CXL.törvény 19. § (1) bekezdés, 21. §, 29. §, 31. §,
                    Az illetékekről szóló 1990. évi XCIII. törvény 29. §, 33. § (2) bekezdés 35. Pont,
                    A panaszokról és a közérdekű bejelentésekről szóló 2013. CLXV. törvény 1-3. §
                    A kereskedelemről szóló 2005. évi CLXIV. törvény,
                    A kereskedelmi tevékenység végzésének feltételeiről szóló 210/2009. (IX. 29.) Korm. rendelet.
                    A vásárokról, a piacokról és a bevásárlóközpontokról szóló 55/2009. (III. 13.)Korm. rendelet.
                    A nemdohányzók védelméről és a dohánytermékek fogyasztásának, forgalmazásának egyes szabályairól szóló 1999. évi XLII. törvény
                    A fiatalkorúak dohányzásának visszaszorításáról és a dohánytermékek kiskereskedelméről szóló 2012. évi CXXXIV. Törvény
                </div>
                <h3>12.2. Választás alapján alkalmazott szabványok</h3>
                <div>Kódolási szabványként az MVC szabványt tartjuk szem előtt amely egy gyakran használatos szoftver tervezési minta, amely három meghatározó részre osztja az alkalmazást.
                    Valamint az előadáson is bemutatott V-modellre(vízesés) támaszkodva szeretnénk megfogalmazni a szoftverünk helytálló dokumentációját, amelyet követően az implementálásra is lényegesen gördülékenyebben kerülhet sor
                </div>
                <h3>12.3 C# szintaktikai szabvány </h3>
                <div>A hivatalos microsoftos dokumentáció szerinti szintaktikát alkalmazzuk:
                    <a href="https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions" className="hover:bg-amber-400 rounded-2xl p-2">Dokumentáció</a>
                </div>
            </div>
            <h2 id="13">Dokumentumok</h2>
            <div>
                <div><a href="https://docs.google.com/document/d/1p3JEtjmQJ4RweKpJvmZklVrCVR1wByLC/edit?usp=sharing&ouid=106424153964571442967&rtpof=true&sd=true" className="hover:bg-amber-400 rounded-2xl p-2">Munkanapló</a></div>
                <div><a href="https://docs.google.com/document/d/1yVhS56aISpa7iGJd-UmqmCcqNvtZ-lqhH919jkLUpJg/edit" className="hover:bg-amber-400 rounded-2xl p-2">Szótár</a></div>
            </div>
        </div>
    );

}
export default F3;