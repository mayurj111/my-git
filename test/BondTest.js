//describe a test for Bond Price Conversion js
describe("Bond", function () {

    //set up and create an instance before test
    beforeEach(function () {
        bondCon = new Bond();
        linkL.push('A');
        linkL.push('B');
    });

    //test for decimal conversion
    it('should contain correct decimal value', function () {
        expect(bondCon.decimalPrice('10-16')).toBe(10.50);
    });

    //test for bond price conversion
    it('should contain correct bond price', function () {
        expect(bondCon.bondPrice('10.25')).toBe('10-8');
    });
});