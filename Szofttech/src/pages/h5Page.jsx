import React from "react";

const F5 = () => {

    return (
        <div className="w-[1080px] my-5 px-10 fade-in-anim">
            <h1 className="font-bold w-full border-solid border-b-2 border-black">Tesztek</h1>
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
                        <td>2022.12.06.</td>
                        <td>1.0</td>
                        <td>H5 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                    <tr>
                        <td>2022.12.07.</td>
                        <td>1.1</td>
                        <td>H5 elkészítése</td>
                        <td>Csapat</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="mt-10 underline">Tartalomjegyzék</h2>
            <div className="flex flex-col">
                <a href="#1"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Manuális tesztek</button></a>
                <a href="#2"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Unit tesztek</button></a>
                <a href="#3"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">Dokumentumok</button></a>
            </div>
            <div>
                <h2 id="1">Manuális tesztek</h2>
                <div className="underline font-bold">Játékosnév név beállítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Kikapcsolt játék,  nincs állapot
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1.Elindítjuk a játékot</p>
                    A jelentkezés regisztráció nélkül gombra kattintunk
                    Beírjuk a nevünket.
                    A tovább gombra kattintunk
                    <li className="font-bold"> Ellenőrzés:</li>
                    Ha a főmenüben a beírt nevet látjuk sikeres a teszt
                </ul>

                <div className="underline font-bold">Lobby létrehozása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Belépett játékos a főmenüben.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. Új játék gombra kattintunk.</p>
                    <p style={{ marginLeft: 30 }}>2. Kiválasztjuk a játékmódot.</p>
                    <p style={{ marginLeft: 30 }}>3. Létrehozzuk a lobbyt.</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a létrehozás gomb megnyomása után létrejön a lobby és megkapjuk a lobby ID-ját illetve látjuk a kijelzőt sikeres a teszt.
                </ul>

                <div className="underline font-bold">Csatlakozás lobbyhoz</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Belépett játékos a főmenüben, létrehozott lobby
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1.Beírjuk a session ID-t.</p>
                    <p style={{ marginLeft: 30 }}>2. A csatlakozás gombra kattintunk.</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játékos, csatlakozik a lobbyhoz, látja a játékmódot illetve a többi játékost, valamint a többi játékos is látja őt a kijelzőn, sikeres a teszt.
                </ul>

                <div className="underline font-bold">Játékmód elindítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A váró tulajdonosa elindítja a Játékmódot.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékosok várnak míg a játék elindul.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játék mód elindul és a többi játékosnak is elindul az az látják a játékmódot illetve a többi játékos pontszámát akkor sikeres a teszt.
                </ul>

                <div className="underline font-bold">Kilépés a lobbyból</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A belépett játékos a lobbyban tartózkodik.

                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos megnyomja a kilépés gombot.</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játékos a kilépés gombra kattintva,a főmenübe került, illetve, a többi játékos számára megszűnt minden hozzá kapcsolódó objektum és a játékos neve eltűnt a kijelzőről, sikeres a teszt.
                </ul>
                <div className="underline font-bold">Beállítások megnyitása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Belépett játékos a főmenüben.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos a Beállítások gombra kattint.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a gomb megnyomásának hatására megnyílik a Beállítások képernyő, a teszt sikeres.
                </ul>

                <div className="underline font-bold">Hangeffektek kikapcsolása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A belépett játékos a Beállításoknál van.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos az Audio beállítások között kiveszi a pipát a “Hangeffektek” melletti checkboxból.</p>
                    <p style={{ marginLeft: 30 }}>2. A játékos elmenti a változtatásokat a “Mentés” gombra kattintva.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha ezután megszűnik minden hangeffekt az alkalmazáson belül, a teszt sikeres.
                </ul>

                <div className="underline font-bold">Posztolás a Forumra</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A belépett játékos a Forum oldalon van.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos begépeli a közölni kívánt üzenetet a szövegmezőbe.</p>
                    <p style={{ marginLeft: 30 }}>2. A játékos rákattint a “Küldés” gombra.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha megjelenik a Forumon az üzenet, felette a játékos nevével és ikonjával, akkor sikeres a teszt.
                </ul>

                <div className="underline font-bold">Válaszadás a Forumon</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A belépett játékos a Forum oldalon van.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos rákattint egy létező posztnál a “Válasz” gombra.</p>
                    <p style={{ marginLeft: 30 }}>2. A felugró szövegmezőbe begépeli a válaszát.</p>
                    <p style={{ marginLeft: 30 }}>3. A játékos rákattint a “Küldés” gombra.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha megjelenik a kiválasztott poszt alatt a válaszüzenet, akkor sikeres a teszt.
                </ul>

                <div className="underline font-bold">Probléma bejelentése</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A belépett játékos a Support oldalon van.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. A játékos a “Probléma bejelentése” gombra kattint.</p>
                    <p style={{ marginLeft: 30 }}>2. A felugró listából kiválasztja, hogy milyen jellegű a probléma.</p>
                    <p style={{ marginLeft: 30 }}>3. A megjelenő oldalon részletezi szövegesen a gondot.</p>
                    <p style={{ marginLeft: 30 }}>4. A játékos megnyomja a “Bejelentés” gombot.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a gomb megnyomásának hatására megjelenik egy “A problémát sikeresen bejelentetted, hamarosan megvizsgáljuk az ügyet és értesítünk a fejleményekről” üzenetet tartalmazó textbox, akkor a teszt sikeres.
                </ul>
                <h2 id="2">Unit tesztek</h2>


                <div className="underline font-bold">Játékos példányosítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Semmi
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1.Létrehozunk egy játékos pédányt</p>
                    <p style={{ marginLeft: 30 }}> 2.Létrehozunk egy másik játékos pédányt</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Végig megyünk az összes Playeren, ha a lista i-ik elemének színe megegyezik a Játékos színével( Players[i].Color == Player.Color ) akkor újat generál, majd megint megvizsgálja azt.
                </ul>

                <div className="underline font-bold">Score manager (score reallizer)</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Score manager példány
                    Session létrehozva
                    Játékosok a sessionben

                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. Hozzáadunk X pontot az egyik játékoshoz az AddScore metódussal</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játékos pontja nagyobb mint a metódus utáni pont akkor a teszt sikeres Player.Point > oldpoint
                </ul>
                <div className="underline font-bold">Játékmód indítása (SessionService)</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Játékmód példány
                    Játékmód indítása
                    Játékosok a sessionben

                    <li className="font-bold">Lépések:</li>
                    Meghívjuk a StartGame() metódust egy GameModeController típussal

                    <li className="font-bold">Ellenőrzés:</li>
                    A sessionben a játékmód controller változó felvesz egy adott típusú játékmód típusú változót
                </ul>

                <div className="underline font-bold">Session létrehozása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A session service létrehozva (dependency injection)
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>Meghívjuk a create session függvényt.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Végig megyünk a Sessions listán majd ha a kapott érték szerepel a listában a teszt sikeres volt.
                </ul>
                <div className="underline font-bold">Session törlődik ha nincs benne játékos</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Példányosított session Player példányokkal feltöltve
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>Kitörlünk sorban minden egyes játékost.</p>

                    <li className="font-bold">Ellenőrzés:</li>
                    Végig megyünk a Sessions listán majd, ha a kapott érték nem szerepel a listában a teszt sikeres volt.
                </ul>

                <div className="underline font-bold">Beállítások mentése</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A OptionsView Visiblejét true-ra állítjuk.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. Beállítjuk a kívánt értékeket.</p>
                    <p style={{ marginLeft: 30 }}>2. Meghívjuk a Save() metódust.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a mentett állapot különbözik az előző mentett állapottól a teszt sikeres volt.
                    ( NewSaves != OldSaves )
                </ul>

                <div className="underline font-bold">Support üzenet küldése</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    A SupportsView Visiblejét true-ra állítjuk.
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>1. Beállítjuk a kívánt értékeket.</p>
                    <p style={{ marginLeft: 30 }}>2. Majd meghívjuk a SendReport() metódust.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a üzenet látszik a support felületen a teszt sikeres volt.
                </ul>

                <div className="underline font-bold">Explosive játék indítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Példányosított ExplosiveGameController
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>Meghívjuk a ExplosiveGameController StartGame() metódusát.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játékmód Visibleje true értéket kap, akkor a teszt sikeres.
                </ul>

                <div className="underline font-bold">Reaction játék indítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Példányosított ReactionGameController
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>Meghívjuk a ReactionGameController StartGame() metódusát.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a játékmód Visibleje true értéket kap  akkor a teszt sikeres.
                </ul>
                <div className="underline font-bold">Gyroszkóp indítása</div>
                <ul className="list-disc" style={{ marginLeft: 30 }}>
                    <li className="font-bold">Kezdeti állapot:</li>
                    Példányosított Gyroscope
                    <li className="font-bold">Lépések:</li>
                    <p style={{ marginLeft: 30 }}>Meghívjuk a GyroTracker() metódust amely elindít egy Timert ami másodpercenként figyeli a Gyroscope adatait.</p>
                    <li className="font-bold">Ellenőrzés:</li>
                    Ha a Gyroscope adatai folyamatosan változnak akkor a teszt sikeres.
                </ul>

            </div>
            <h2 id="3">Dokumentumok</h2>
            <div>
                <div><a href="https://docs.google.com/document/d/1p3JEtjmQJ4RweKpJvmZklVrCVR1wByLC/edit?usp=sharing&ouid=106424153964571442967&rtpof=true&sd=true" className="hover:bg-amber-400 rounded-2xl p-2">Munkanapló</a></div>
                <div><a href="https://docs.google.com/document/d/1yVhS56aISpa7iGJd-UmqmCcqNvtZ-lqhH919jkLUpJg/edit" className="hover:bg-amber-400 rounded-2xl p-2">Szótár</a></div>
            </div>
        </div>
    );

}
export default F5;