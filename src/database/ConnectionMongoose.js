const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://rislas:Bk23ALt^8^pK@coderhouse.av7aeok.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
  await mongoose.connect(MONGO_URL)
  .then(() => console.log("Conectados a MongoDB 🤖"))
  .catch((error) => console.error("❌ Error al conectarse a MongoDB", error));
};

module.exports = db