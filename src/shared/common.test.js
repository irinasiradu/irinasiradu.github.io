import { localizations } from "./Common"

it('should have all translations', () => {
    expect(Object.keys(localizations.ro).sort()).toEqual(Object.keys(localizations.fr).sort());
});

const exceptions = ["Email"];
it('should not contain copy paste errors in translations', () => {
    Object.keys(localizations.ro)
        .filter(x => exceptions.indexOf(x) > -1)
        .forEach(x => {
            expect(localizations.ro[x]).not.toEqual(localizations.fr[x]);
        })
})
