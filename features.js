async function deposerCompteFirebase(data) {
    try {
        await addDoc(collection(db, "annonces"), data);
        console.log("Annonce envoyée sur Firebase");
    } catch (e) {
        alert("Erreur Firebase");
        console.error(e);
    }
}
async function chargerAnnoncesFirebase() {
    const querySnapshot = await getDocs(collection(db, "annonces"));
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    });
}

async function chargerAnnoncesFirebase() {
    const querySnapshot = await getDocs(collection(db, "annonces"));
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    });
}

chargerAnnoncesFirebase();
