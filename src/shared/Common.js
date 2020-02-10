import React, { Fragment } from "react"

export const style = {
    fontFamily: "'Oswald', Verdana, Geneva, sans-serif",
}

export const colors = {
    grey: "#7b7571",
    lightGrey: "#f4f4f4",
    white: "#fff",
    important: "salmon",
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
        submitError: "Ne pare rău. A apărut o eroare. Vă rugăm contactați-ne la 0724 933 644.",
        nameLabel: "Nume",
        phoneLabel: "Tel.",
        emailLabel: "Email",
        messageLabel: "Mesaj",
        confirmAction: "Da, voi veni!",
        rejectAction: "Nu, voi veni la urmatoarea!",
        submitButton: "Trimite răspuns",
        messagePlaceholder: "Mesaj",
        otherAttendeesPlaceholder: "Insoțitori",
        accommodationLabel: "Am nevoie de cazare",
        transportLabel: "Am nevoie de transport",
        noPresentLabel: "Nu pot participa, dar vin la urmatoarea.",
        yesPresentLabel: "Haida!",
        namePlaceholder: "Nume"
    },
    "fr": {
        homeDate: "18 juillet 2020",
        daysLeft: (nrDays) => nrDays && (<Fragment><b>{nrDays}</b> jours restants</Fragment>),
        detailsTitle: "Nous vous invitons!",
        ceremonyTitle:
            <Fragment>
                <span className="important">Cununia religioasa</span> va avea loc la ora <span className="important">17:00</span> pe pajiștea de lângă lac.
            </Fragment>,
        partyTitle:
            <Fragment>
                <span className="important">Petrecerea</span> va continua pe terasa de la piscină începând cu ora <span className="important">18:00</span>.
            </Fragment>,
        thankYou: "Vă mulțumim pentru răspuns!",
        submitError: "Ne pare rau. A aparut o eroare. Va rugam contactati-ne la 0724 933 644",
        nameLabel: "Nume",
        phoneLabel: "Tel.",
        emailLabel: "Email",
        messageLabel: "Mesaj",
        confirmAction: "Da, voi veni!",
        rejectAction: "Nu, voi veni la urmatoarea!",
        submitButton: "Trimite răspuns",
        messagePlaceholder: "Mesaj",
        otherAttendeesPlaceholder: "Insoțitori",
        accommodationLabel: "Am nevoie de cazare",
        transportLabel: "Am nevoie de transport",
        noPresentLabel: "Nu pot participa, dar vin la urmatoarea.",
        yesPresentLabel: "Haida!",
        namePlaceholder: "Nume"
    }
}