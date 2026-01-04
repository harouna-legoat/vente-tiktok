// ===== CONNEXION =====
function connexion() {
    const email = document.getElementById("email").value;
    const code = document.getElementById("code").value;

    if (!email || !email.includes("@")) {
        alert("Email invalide");
        return;
    }

    if (!code || code.length < 4) {
        alert("Code invalide");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("code", code);

    alert("Connexion réussie");
}

// ===== DEPOT DE COMPTE =====
function deposerCompte() {
    const tiktok = document.getElementById("tiktok").value;
    const abonnes = document.getElementById("abonnes").value;
    const prix = document.getElementById("prix").value;
    const orange = document.getElementById("orange").value;
    const photoInput = document.getElementById("photo");

    if (!tiktok.startsWith("@")) {
        alert("Nom TikTok invalide");
        return;
    }

    if (isNaN(prix) || prix <= 0) {
        alert("Prix invalide");
        return;
    }

    if (!orange || orange.length < 8) {
        alert("Numéro Orange Money invalide");
        return;
    }

    if (photoInput.files.length === 0) {
        alert("Ajoute une photo");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const annonce = {
            tiktok: tiktok,
            abonnes: abonnes,
            prix: prix,
            image: reader.result
        };

        let annonces = JSON.parse(localStorage.getItem("annonces")) || [];
        annonces.push(annonce);
        localStorage.setItem("annonces", JSON.stringify(annonces));

        afficherAnnonces();
        alert("Annonce publiée avec succès");
    };

    reader.readAsDataURL(photoInput.files[0]);
}

// ===== AFFICHER ANNONCES =====
function afficherAnnonces() {
    const zone = document.getElementById("annonces");
    if (!zone) return;

    zone.innerHTML = "";
    let annonces = JSON.parse(localStorage.getItem("annonces")) || [];

    annonces.forEach(a => {
        const div = document.createElement("div");
        div.className = "annonce";
        div.innerHTML = `
            <img src="${a.image}">
            <p><strong>${a.tiktok}</strong></p>
            <p>${a.abonnes} abonnés</p>
            <p>${a.prix} €</p>
        `;
        zone.appendChild(div);
    });
}

// ===== WHATSAPP =====
function ouvrirWhatsApp() {
    window.location.href = "https://wa.me/22605765650";
}

window.onload = afficherAnnonces;
deposerCompteFirebase(annonce);
