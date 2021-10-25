import getSecondsOfThisYearUntilNow from '../solutions/app1';

describe( '1. Feladat', () => {
    test( 'Az éve eleje óta eltelt másodpercek száma', () => {
        expect(getSecondsOfThisYearUntilNow()).toEqual(20905200);
    });
});
