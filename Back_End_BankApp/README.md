### to run back follow thoses instuctions :

npm install

nodemon

### for the endpoints we have (are tested on postman or rest request) :

<!-- List all user -->

GET http://localhost:3001/api/users/allUser

<!-- Post a new user (have body) -->

POST http://localhost:3001/api/users/addOne

<!-- JWT auth for users (have body) -->

POST http://localhost:3001/api/users/authentification

<!-- Sending balance from account to other (have body ans params) -->

PATCH http://localhost:3001/api/users/sendBalance/{req.params.id}

<!-- List all trasactions : -->

GET http://localhost:3001/api/transactions/allTransactions

<!-- List all transactions by ID (have params) -->

GET http://localhost:3001/api/transactions/transactionById/{req.params.id}