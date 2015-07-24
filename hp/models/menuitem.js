var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    Item = new Schema({
      position            : Number,
      name                : String,
      titleEN             : String,
      titleDE             : String,
      contentTextDE       : String,
      contentTextEN       : String,
      descriptionVersion  : [String],
      category            : String,
      visible             : Boolean,
      deleted             : Boolean
    });

mongoose.model('Item', Item);


mongoose.connect('mongodb://deltaadmin:AsdEl0ta@localhost/deltadb');
