const expect = require('chai').expect;
const num = require('../num');

describe.only('Test Calculate for Integer', function() {

    context('#Integer', function() {
        it('should be success when Int+, and Int+,', function() {
            const total = num(5 , 5);
            expect(10).to.be.equal(total);
        })
        it('should be success when Int- and Int+,', function() {
            const total = num(-5 , 5);
            expect(0).to.be.equal(total);
        })
        it('should be success when Int- and Int-', function() {
            const total = num(-5 , -5);
            expect(-10).to.be.equal(total);
        })
        it('should be success when Int+, and Int-', function() {
            const total = num(5 , -5);
            expect(0).to.be.equal(total);
        })
    })

    context('#Float', function() {
        it('should throw error for Float', function() {
            expect(function() {
                num(5.10 , 5.10)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Float', function() {
            expect(function() {
                num(5 , 5.10)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Float', function() {
            expect(function() {
                num(5.10 , 5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Float', function() {
            expect(function() {
                num(5.10 , -5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Float', function() {
            expect(function() {
                num(-5 , 5.10)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
    })

    context('#String', function() {
        it('should throw error for String', function() {
            expect(function() {
                num("5" , "5")
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for String', function() {
            expect(function() {
                num(5 , "5")
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for String', function() {
            expect(function() {
                num("5" , 5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for String', function() {
            expect(function() {
                num(-5 , "5")
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for String', function() {
            expect(function() {
                num("5" , -5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
    })

    context('#NULL', function() {
        it('should throw error for Null', function() {
            expect(function() {
                num(null , null)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Null', function() {
            expect(function() {
                num(5 , null)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Null', function() {
            expect(function() {
                num(null , 5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Null', function() {
            expect(function() {
                num(null , -5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Null', function() {
            expect(function() {
                num(-5 , null)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
    })

    context('#Array', function() {
        it('should throw error for Arr', function() {
            expect(function() {
                num([5] , [5])
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Arr', function() {
            expect(function() {
                num(5 , [5])
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Arr', function() {
            expect(function() {
                num([5] , 5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Arr', function() {
            expect(function() {
                num([5] , -5)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Arr', function() {
            expect(function() {
                num(-5 , [5])
            }).to.throw(TypeError, 'num() expects only integer.')
        })
    })

    context('#Zero',function(){
        it('should throw error for Divide 0', function() {
            expect(function() {
                num(0 / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num(5 / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num(-5 / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num(5.10 / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num("5" / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num([5] / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
        it('should throw error for Divide 0', function() {
            expect(function() {
                num(null / 0)
            }).to.throw(TypeError, 'num() expects only integer.')
        })
    })
})