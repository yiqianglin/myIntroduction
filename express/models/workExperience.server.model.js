var mongoose = require('mongoose');

var WorkExperience = new mongoose.Schema({
    companyName: String,
    startTime: String,
    endTime: String,
    job: String
});

mongoose.model('WorkExperience', WorkExperience, 'workExperience');