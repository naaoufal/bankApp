const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../index")

chai.should()

chai.use(chaiHttp)

describe("Tasks to Test :", () => {

    // Test the POST user :
    describe("POST /api/users/addOne", () => {
        it("It should get those tasks", (done) => {
            chai.request(server)
            .post("/api/users/addOne")
            .end((error, response) => {
                response.should.have.status(200)
                done();
            })
        })
    })

    // Test the Get user :
    describe("GET /api/users/allUser", () => {
        it("It should get those tasks", (done) => {
            chai.request(server)
            .get("/api/users/allUser")
            .end((error, response) => {
                response.should.have.status(200)
                response.body.should.be.a('array')
                done();
            })
        })
    })

    // Test the patch user :
    describe("PATCH /api/users/edit/:id", () => {
        it("It should get those tasks", (done) => {
            const id = "61bb5b38fc5b44cf80f872a6"
            chai.request(server)
            .post("/api/users/edit" + id)
            .end((error, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
                done();
            })
        })
    })

})