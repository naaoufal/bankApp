const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../index")

chai.should()

chai.use(chaiHttp)

describe("Tasks to Test :", () => {

    // Test GET transactions :
    describe("GET /api/transaction/allTransactions", () => {
        it("It should get those tasks", (done) => {
            chai.request(server)
            .get("/api/transaction/allTransactions")
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('array')
                done()
            })
        })
    })

})