const expect = require('chai').expect;
const cal = require('../calculate');

describe.only('Test Calculate', function() {
    context.only('#Plus', function() {
        it('should be success when Int+ and Int+', function() {
            expect(cal.sum(5 , 5)).to.be.equal(10);
        })
        it('should be success when Int- and Int+', function() {
            expect(cal.sum(-5 , 5)).to.be.equal(0);
        })
        it('should be success when Int+ and Int0', function() {
            expect(cal.sum(5 , 0)).to.be.equal(5);
        })
        it('should throw error for Float', function() {
            expect(function() { cal.sum(5.10 , 5.10)} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.sum("5" , "5")}).to.throw(TypeError, 'sum() expects only numbers.')
        })        
        it('should throw error for String', function() {
            expect(function() { cal.sum(5 , "5")}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.sum()}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.sum(5 , null)}).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })
    context.only('#Minus', function() {
        it('should be success when Int+ and Int+', function() {
            expect(cal.minus(5 , 5)).to.be.equal(0);
        })
        it('should be success when Int- and Int+', function() {
            expect(cal.minus(-5 , 5)).to.be.equal(-10);
        })
        it('should be success when Int+ and Int0', function() {
            expect(cal.minus(5 , 0)).to.be.equal(5);
        })
        it('should throw error for Float', function() {
            expect(function() { cal.minus(5.10 , 5.10) }).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.minus("5" , "5")}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.minus(5 , "5")}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.minus()}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.minus(5 , null)}).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })
    context.only('#Multiple', function() {
        it('should be success when Int+ and Int+', function() {
            expect(cal.multi(5 , 5)).to.be.equal(25);
        })
        it('should be success when Int- and Int+', function() {
            expect(cal.multi(-5 , 5)).to.be.equal(-25);
        })
        it('should be success when Int+ and Int0', function() {
            expect(cal.multi(5 , 0)).to.be.equal(0);
        })
        it('should throw error for Float', function() {
            expect(function() { cal.multi(5.10 , 5.10) } ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.multi("5" , "5")} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.multi(5 , "5")} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.multi()}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.multi(5 , null)}).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })
    context.only('#Divide', function() {
        it('should be success when Int+ and Int+', function() {
            expect(cal.divide(5 , 5)).to.be.equal(1);
        })
        it('should be success when Int- and Int+', function() {
            expect(cal.divide(-5 , 5)).to.be.equal(-1);
        })
        it('should throw error for Int and Zero', function() {
            expect(function() { cal.divide(5 , 0) }).to.throw(TypeError, 'sum() expects numbers != 0')
        })
        it('should throw error for Foalt', function() {
            expect(function() { cal.divide(5.10 , 5.10)}).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.divide("5" , "5")} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for String', function() {
            expect(function() { cal.divide(5 , "5")} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.divide()} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
        it('should throw error for Null', function() {
            expect(function() { cal.divide(5 , null)} ).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })
})