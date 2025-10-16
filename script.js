function zobrazZpravu() {

    let emailInput = document.querySelector('input[type="email"]')
    let email = emailInput.value;

    

    if(!email || !email.includes("@")) {
        document.getElementById("odeslat").innerHTML = "⚠️ Chyba ⚠️ <br> Zkontrolujte své údaje.";

        setTimeout(function(){
            document.getElementById("odeslat").innerHTML = ""
        }, 2000);
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
   informace o produktech
                            */

function infoJedna() {
    document.getElementById("jedna").innerHTML = " <span>Miska na oříšky z Jasanového dřeva </span> <br> 110mm <br> Výška: 80mm"

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
    document.getElementById("dva").innerHTML = " <span>Svícen / Hvězda ze smrkového dřeva.</span> <br> Průměr: 220mm. <br>"

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
    document.getElementById("tri").innerHTML = " <span>Zahradní popelník z břízy.</span> <br> Průměr: 70mm. <br> Výška: 40mm."

    document.getElementById("skrytBtn_tri").style.display = "none"
    document.getElementById("skrytBtn_tri").style.display = "block"
}

function smazInfoTri(){
    document.getElementById("tri").innerHTML = ""

    document.getElementById("skrytBtn_tri").style.display = "block"
    document.getElementById("skrytBtn_tri").style.display = "none"
}
/*************************************************************/



/*  
        MISKY.HTML
                    */

let obrazek = document.getElementById("zobrazeni");

document.getElementById("img_1").addEventListener("click", function() {
    window.open("img/1 1.png", "_blank")

})

document.getElementById("img_2").addEventListener("click", function() {
    window.open("img/1.png", "_blank")
    document.getElementById("krizek").innerHTML = ("X");
})

