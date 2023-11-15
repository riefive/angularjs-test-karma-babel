const calculator = AppTest.calculator;

describe('Calculator Test', function() {
    describe('add', function() {
        it('1 + 1 should equal 2', function() {
            expect(calculator.add(1, 1)).toBe(2);
        })
    });

    describe('subtract', function() {
        it('2 - 1 should equal 1', function() {
            expect(calculator.sub(2, 1)).toBe(1);
        })
    });
});