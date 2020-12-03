/**
File name: Survey.js
Author: COMP308 Group 3
Website name: Its Survey
Description: the model file which models the schema for survey 
*/
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let question = require('../models/question');

//create survey model class
let surveySchema = mongoose.Schema({
    topic: String,
    user: Schema.Types.ObjectId,
    type:Number,
    createDate : { type : Date, default : Date.now },
    startDate : Date,
    expireDate : Date,
    questions : { type: Array, default:[]}
    /*[
                    {
                        questionTopic : String,
                        questionAns : 
                        [
                            { answer : String }
                        ],
                        type : Number
                    }
                ]*/
},
{
  collection: "allSurveys"
}
);

//Ready to go
module.exports = mongoose.model('surveys', surveySchema);