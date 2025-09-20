function zobrazZpravu() {

    let emailInput = document.querySelector(`input[type="email"]`)
    let email = emailInput.value;

    if(!email || !email.includes("@")) {
        document.getElementById("odeslat").innerHTML = "⚠️ Chyba ⚠️ <br> Zkontrolujte své údaje.";
        return;
    }

    document.getElementById("odeslat").innerHTML = " 📩 Odesláno 📩 <br> Ozveme se Vám v co nejkratší době. <br> 😊 Děkujeme 😊 "
}

