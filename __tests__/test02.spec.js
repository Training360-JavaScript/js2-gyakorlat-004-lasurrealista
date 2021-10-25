import countOfWorkingDays from '../solutions/app2';

describe('2. Feladat', () => {
    test('Az éve eleje óta eltelt munkanapok száma', () => {
        expect(countOfWorkingDays()).toEqual(173);
    });
});
