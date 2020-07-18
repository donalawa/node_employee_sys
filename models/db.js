const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:icui4cu12345678@cluster0.i9tf1.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');