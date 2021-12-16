const mongoose = require("mongoose")

const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

//   console.log("Compass MongoDB Connected")
};

module.exports = connectDB