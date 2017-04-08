// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var ComplaintSchema = new Schema({
  // name: a unique String
  companyname: {
    type: String
  },
  productname: {
    type: String,
  },
  complanttitle: {
    type: String
  },
  complaintinput: {
    type: String
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("Complaint", ComplaintSchema);

// Export the user model
module.exports = Complaint;
