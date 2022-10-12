import React from "react";
import "./main.css";
const ProjectPlan = ()=>{

    return(
        <div>
        <div className="w-[1080px] my-5 px-10 fade-in-anim">
<h1 className="font-bold w-full border-solid border-b-2 border-black">Projektterv</h1>
<h2>Bevezetés</h2>
<div className="text-[17px] indent-2"><p>Bottle Battle játék. Többszemélyes telefonos party játék, ügyességi és gondolkodási feladatokkal, mint például egyensúlyozó feladatok, reakció idő feladatok. A játékmenet kör alapú, minden körben egy játékomódot játszunk.Az egyes játék módok a játékosok teljesítménye alapján pontot osztanak a játékosoknak, ami a körök között megmarad. A játékosok pontozása függ, a játékosok alapteljesítményétől, és a körök közötti önmagukhoz mért teljesítmény különbségtől(romlástól). A játék több telefonnal webböngészőn keresztül lesz játszható.</p></div>
<div className="flex flex-col w-full">
  <h2>Történet</h2>
  <table class="text-[17px]">
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
      <td>2022.09.29.</td>
      <td>1.1</td>
      <td>Projekt terv leírásának javítása.</td>
      <td>Csapat</td>
    </tr>
  </tbody>
</table></div>
<h2 className="mt-10 underline">Tartalom jegyzék</h2>
<div className="flex flex-col">
<a href="#1"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">1.Csoport tagjai, struktúrája</button></a>
<a href="#2"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">2.Fejlesztési terv: mérföldkövek, eredmények</button></a>
<a href="#3"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">3.Programozói nyelvek, fejlesztő eszközök</button></a>
<a href="#4"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">4.Használni tervezett eszközök, technikák</button></a>
<a href="#5"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">5.Leendő produktumok (dokumentum), és létrejöttük ideje</button></a>
<a href="#6"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">6.Tesztelési követelmények</button></a>
<a href="#7"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">7.Bemutatás (demó) és szállítás módja, ideje</button></a>
<a href="#8"><button className="p-2 text-lg hover:bg-amber-400 rounded-2xl">8.Információforrások</button></a>
</div>
<h2 id="1">1.Csoport tagjai, struktúrája </h2>

<div className="flex flex-col items-center">
<p className="text-[22px] font-bold" style={{marginLeft:50}}>Gyakorlat vezetője: <a href="http://gepesz.uni-miskolc.hu/staff.en.php?id=329">Árvai László</a></p>
<p className="text-[20px] underline" style={{marginLeft:50}}>Csoport tagjainak adatai</p>
<p><table class="table-auto text-[17px]">
  <thead>
    <tr>
      <th>Név</th>
      <th>Neptun</th>
      <th>E-mail</th>
      <th>Tankör</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Danyi Kristóf Milán</td>
      <td>GQOKMW</td>
      <td>ocsifej2002@gmail.com</td>
      <td>G-2BI</td>
    </tr>
    <tr>
      <td>Nagy Máté</td>
      <td>U3ROFS</td>
      <td>matesszka@gmail.com</td>
      <td>G-2BP</td>
    </tr>
    <tr>
      <td>Biszterszky Mátyás</td>
      <td>L27NCJ</td>
      <td>matyi0918@gmail.com</td>
      <td>G-2BP</td>
    </tr>
    <tr>
      <td>Gyáni Kevin Zsolt</td>
      <td>CBOYZF</td>
      <td>gyani.kevin@gmail.com</td>
      <td>G-2BP</td>
    </tr>
    <tr>
      <td>Holczer Vanda</td>
      <td>C0LLER</td>
      <td>vanda.holczer@gmail.com</td>
      <td>G-2BP</td>
    </tr>
  </tbody>
</table></p>
</div>
<h2 id="2">2.Fejlesztési terv: mérföldkövek, eredmények </h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li>Csapat létrehozása, név megbeszélése</li>
<li>Koncepció kitalálása</li>
<li>Használt eszközök és környezetek megbeszélése</li>
<li>Rendszeres megbeszélések időpontjának lefixálása</li>
<li>Blazor alkalmasságának tesztelése: </li>
    <ul className="list-decimal" style={{marginLeft:80}}>
    <li>Giroszkóp próba,</li>
    <li>GUI váz próba,</li>
    <li>Backend próba (join to lobby)</li>
    </ul>
<li>Első játszható verzió~Proof of Concept (egy-két játékmód, felesleges részletek, például pontrendszer nélkül)</li>
<li>Pontrendszer megalkotása</li>
<li>Folyamatos tesztelés</li>
<li>Több játékmód létrehozása</li>
</ul>


<h2 id="3">3.Programozói nyelvek, fejlesztő eszközök</h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li>Környezetnek a VS Code-ot, a játék fejlesztéséhez pedig a C# nyelvet választottuk, mert sok hasznos funkcióval rendelkezik és a csapat szinte minden tagjának van már vele tapasztalata.</li>
<li>Továbbá Blazor keretrendszert, időtakarékosság miatt Tailwind css-t, a kód tárolására pedig Git verziókövető rendszert használunk.</li>
<li>A játék hosztolását saját VPS-el oldjuk meg.</li>
<li>A weboldal elkészítéséhez a React Js könyvtárat, a képek szerkesztéséhez a  Paint 3D-t használjuk.</li>
</ul>

<h2 id="4">4.Használni tervezett eszközök, technikák</h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li>A feladatkövetéshez és a git repository tárolására DevOpsot, kódtárolásra Gitet használunk, a branchek rendezésérében a git flow szemléletet követjük. A játék feltöltését és buildelését azure pipelineokkal tesszük kényelmesebbé, és hatékonyabbá.</li>
<li>Rendszeres heti meetinget tartunk az előadás után helyszínen vagy online, a Discord alkalmazás segítségével. A közös dokumentumok tárolását Google driveon keresztül valósítjuk meg.</li>
</ul>

<h2 id="5">5.Leendő produktumok (dokumentum), és létrejöttük ideje</h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li>F1 - Projekt terv (3. tanulmányi hét - 2022. szeptember 22.)</li>
<li>F2 - Vízió dokumentum</li>
<li>F3 - SRS dokumentum </li>
<li>F4 - Tervezési fázis dokumentum</li>
<li>F5 - OMT objektum tervezési fázis dokumentum, tesztelési terv, implementáció</li>
</ul>

<h2 id="6">6.Tesztelési követelmények</h2>
<div className="text-[17px] text-justify" style={{marginLeft:80}}>Csapatunk folyamatosan teszteli a szoftvert a készítés során. A fordulás tesztelésére CI pipelinet használunk, automata teszteket is alkalmazunk. Az első, kezdetleges verzióhoz csak alapvető szempontokat vettünk figyelembe, minthogy működjön a program, forduljon le és legyen élvezhető. A későbbiekben az esetleges hibák felderítésére és megoldására fordítunk nagyobb figyelmet, majd megpróbáljuk minél szórakoztatóbbá és esztétikusabbá tenni az alkalmazást.</div>


<h2 id="7">7.Bemutatás (demó) és szállítás módja, ideje</h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li>Folyamatosan buildelt működő teszt verzió</li>
<li>Félév végén játszható játék</li>
<li>Online hostolt webalkalmazás</li>
</ul>
<h2 id="8">8.Információforrások</h2>
<ul className="list-disc" style={{marginLeft:80}}>
<li><a href="https://tailwindcss.com/">https://tailwindcss.com/</a></li>
<li><a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"> https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor</a></li>
<li><a href="https://stackoverflow.com/">https://stackoverflow.com/</a></li>
<li><a href="https://www.quora.com/">https://www.quora.com/</a></li>
<li><a href="https://users.iit.uni-miskolc.hu/~mileff/">https://users.iit.uni-miskolc.hu/~mileff/</a></li>
<li><a href="https://www.geeksforgeeks.org">https://www.geeksforgeeks.org</a></li>
</ul>

<h2>Dokumentumok</h2>
<div>
  <a href="https://docs.google.com/document/d/1p3JEtjmQJ4RweKpJvmZklVrCVR1wByLC/edit?usp=sharing&ouid=106424153964571442967&rtpof=true&sd=true" className="hover:bg-amber-400 rounded-2xl">Munkanapló</a>
</div>
</div>
        </div>
    );

}
export default ProjectPlan;