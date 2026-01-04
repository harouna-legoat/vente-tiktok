async function deposerCompteFirebase(data) {
    try {
        await addDoc(collection(db, "annonces"), data);
        console.log("Annonce envoyée sur Firebase");
    } catch (e) {
        alert("Erreur Firebase");
        console.error(e);
    }
}
