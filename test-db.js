const mongoose = require('mongoose');
const uri = "mongodb+srv://sekarprivatebaliactivity_db_user:MabzJD75npO25EuD@cluster0.9b1f3ya.mongodb.net/?appName=Cluster0";
mongoose.connect(uri)
  .then(() => {
    console.log("Connected successfully");
    process.exit(0);
  })
  .catch(err => {
    console.error("Connection error:", err);
    process.exit(1);
  });
