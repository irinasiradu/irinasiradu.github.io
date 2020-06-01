import React, { Fragment } from "react"
import cover2 from "../assets/img/cover2.jpg";
import img1 from "../assets/img/Pisicina-Phoenix-Cernica-008.jpg";
import img2 from "../assets/img/Pisicina-Phoenix-Cernica-007.jpg";

export const style = {
    fontFamily: "'Oswald', Verdana, Geneva, sans-serif",
}

export const colors = {
    grey: "#7b7571",
    lightGrey: "#f4f4f4",
    white: "#fff",
    important: "salmon",
    warning: "#ff5042"
}

export const localizations = {
    "ro": {
        homeDate: "18 Iulie 2020",
        daysLeft: (nrDays) => nrDays && (<Fragment>Au mai ramas <b>{nrDays}</b> zile</Fragment>),
        detailsTitle: "Vă așteptăm!",
        ceremonyTitle:
            <Fragment>
                <span className="important">Cununia religioasa</span> va avea loc la ora <span className="important">17:00</span> pe pajiștea de lângă lac.
            </Fragment>,
        partyTitle:
            <Fragment>
                <span className="important">Petrecerea</span> va continua pe terasa de la piscină începând cu ora <span className="important">18:00</span>.
            </Fragment>,
        thankYou: "Vă mulțumim pentru răspuns!",
        rsvpTitle: <Fragment>
            Vă rugăm sa ne confirmați prezența înainte de <span className="important">18 iunie</span>
        </Fragment>,
        rsvpTooltip: "Ca să n-avem scandal.",
        homeTooltip: "În sfârșit!",
        submitError: "Ne pare rău. A apărut o eroare. Vă rugăm contactați-ne la 0724 933 644.",
        nameLabel: "Nume",
        phoneLabel: "Tel.",
        emailLabel: "Email",
        messageLabel: "Mesaj",
        confirmAction: "Da, voi veni!",
        rejectAction: "Nu, voi veni la urmatoarea!",
        submitButton: "Trimite răspuns",
        messagePlaceholder: "Mesaj",
        otherAttendeesPlaceholder: "Numele însoțitorilor",
        accommodationLabel: "Am nevoie de cazare",
        transportLabel: "Am nevoie de transport",
        noPresentLabel: "Nu pot participa, dar vin la urmatoarea.",
        yesPresentLabel: "Prezent!",
        namePlaceholder: "Nume",
        helpfulTitle: "Informatii utile:",
        helpfulOutside: "Petrecerea va avea loc in aer liber. Recomandăm pantofi comozi.",
        helpfulByDay: "Este un eveniment de zi (Irina are de invățat, se culcă devreme).",
        //helpfulTransport: "Există locuri de parcare, dar există și alcool. Organizăm transport din București.",
        helpfulContact: "Pentru felicitări 0724 933 644 (Radu). Pentru reclamații 0723 025 398 (Irina).",
        helpfulAccommodation: "",
    },
    "fr": {
        homeDate: "18 Juillet 2020",
        daysLeft: (nrDays) => nrDays && (<Fragment><b>{nrDays}</b> jours restants</Fragment>),
        detailsTitle: "On vous invite!",
        ceremonyTitle:
            <Fragment>
                <span className="important">La cérémonie religieuse</span> aura lieu à <span className="important">17:00</span> à coté du lac.
            </Fragment>,
        partyTitle:
            <Fragment>
                <span className="important">la féte</span> continuera sur la terrasse à partir du <span className="important">18:00</span>.
            </Fragment>,
        thankYou: "Merci pour votre réponse!",
        rsvpTitle: <Fragment>
            Merci de confirmer votre présence avant <span className="important">18 Juin</span>
        </Fragment>,
        rsvpTooltip: "",
        homeTooltip: "En fin!",
        submitError: "Désolé, il y a une erreur. Merci de nous contacter au (0040)723 025 398.",
        nameLabel: "Nom",
        phoneLabel: "Téléphone.",
        emailLabel: "Email",
        messageLabel: "Message",
        confirmAction: "J'arrive!",
        rejectAction: "Non, peut etre à la prochaine!",
        submitButton: "Envoyéz la réponse",
        messagePlaceholder: "Message",
        otherAttendeesPlaceholder: "Nom du compagnon",
        accommodationLabel: "J'ai besoin d'un hébergement",
        transportLabel: "J'ai besoin d'un transport",
        noPresentLabel: "Non, peut etre à la prochaine!",
        yesPresentLabel: "Présent!",
        namePlaceholder: "Nom",
        helpfulTitle: "Renseignements:",
        helpfulOutside: "La féte aura lieu en extérieur. Nous recommandons des chaussures confortables.",
        helpfulByDay: "C'est un événement de jour (Irina doit réviser, elle se couche tot).",
        //helpfulTransport: "Există locuri de parcare, dar există și alcool. Organizăm transport din București.",
        helpfulContact: "Pour des félicitations: 0040 724 933 644 (Radu). Pour des réclamations: 0040 723 025 398 (Irina).",
        helpfulAccommodation: "",
    }
}

export const images = {
    bgImg: process.env.environment === "Development" ? cover2 : "https://raw.githubusercontent.com/irinasiradu/irinasiradu.github.io/master/src/assets/img/cover2.jpg",
    img1: process.env.environment === "Development" ? img1 : "https://raw.githubusercontent.com/irinasiradu/irinasiradu.github.io/master/src/assets/img/Pisicina-Phoenix-Cernica-008.jpg",
    img2: process.env.environment === "Development" ? img2 : "https://raw.githubusercontent.com/irinasiradu/irinasiradu.github.io/master/src/assets/img/Pisicina-Phoenix-Cernica-007.jpg",
}