const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/User_List',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;