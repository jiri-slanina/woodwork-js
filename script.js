function zobrazZpravu() {

    let emailInput = document.querySelector('input[type="email"]')
    let email = emailInput.value;

    if(!email || !email.includes("@")) {
        document.getElementById("odeslat").innerHTML = "⚠️ Chyba ⚠️ <br> Zkontrolujte své údaje.";

        setTimeout(function(){
            document.getElementById("odeslat").innerHTML = ""
        }, 1000);
        return;
    }

    document.getElementById("odeslat").innerHTML = " 📩 Odesláno 📩 <br> Ozveme se Vám v co nejkratší době. <br> 😊 Děkujeme 😊 "

    document.getElementById("smazatBtn").style.display = "block"
}

function smazatZpravu() {
    // vymažeme zprávu
    document.getElementById("odeslat").innerHTML = "";

    // schováme tlačítko
    document.getElementById("smazatBtn").style.display = "none";

    // vyprázdníme formulářová pole
    document.querySelector('input[placeholder="Jméno"]').value = "";
    document.querySelector('input[placeholder="Příjmení"]').value = "";
    document.querySelector('input[type="email"]').value = "";
    document.querySelector('textarea').value = "";
}


/* section_2  / obrazek_jedna   
   informace o produktech*/

function infoJedna() {
    document.getElementById("jedna").innerHTML = "Miska na oříšky z Jasanového dřeva <br> <span>Průměr:</span> 110mm <br> <span>Výška:</span> 80mm"

    document.getElementById("skrytBtn_jedna").style.display = "none"
    document.getElementById("skrytBtn_jedna").style.display = "block"
}

function smazInfoJedna(){
    document.getElementById("jedna").innerHTML = ""

    document.getElementById("skrytBtn_jedna").style.display = "block"
    document.getElementById("skrytBtn_jedna").style.display = "none"
}
/****************************************************/


/*  obrazek_dva
    informce o produktech
    */

function infoDva(){
    document.getElementById("dva").innerHTML = "Svícen / Hvězda ze smrkového dřeva. <br> <span>Průměr:</span> 220mm. <br>"

    document.getElementById("skrytBtn_dva").style.display = "none"
    document.getElementById("skrytBtn_dva").style.display = "block"
}

function smazInfoDva(){
    document.getElementById("dva").innerHTML = ""

    document.getElementById("skrytBtn_dva").style.display = "block"
    document.getElementById("skrytBtn_dva").style.display = "none"
}
/**********************************************************/


/*  obrazek_tri
    více info
    */

function infoTri(){
    document.getElementById("tri").innerHTML = "Zahradní popelník z břízy. <br> <span>Průměr:</span> 70mm. <br> <span>Výška:</span> 40mm."

    document.getElementById("skrytBtn_tri").style.display = "none"
    document.getElementById("skrytBtn_tri").style.display = "block"
}

function smazInfoTri(){
    document.getElementById("tri").innerHTML = ""

    document.getElementById("skrytBtn_tri").style.display = "block"
    document.getElementById("skrytBtn_tri").style.display = "none"
}






