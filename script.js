function zobrazZpravu() {

    let emailInput = document.querySelector('input[type="email"]')
    let email = emailInput.value;

    if(!email || !email.includes("@")) {
        document.getElementById("odeslat").innerHTML = "⚠️ Chyba ⚠️ <br> Zkontrolujte své údaje.";
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



function infoPohar_1() {
    document.getElementById("info_1").innerHTML = "Pohár z Olše <br> Průměr: 8cm <br> Výška: 12cm <br> Ošetřeno lakem"
}

