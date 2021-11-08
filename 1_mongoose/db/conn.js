const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/'); // coloque o nome do DB depois do 20017;/
  console.log('Conectou ao MongoDB com Mongoose');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
