const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect("mongodb+srv://bhavyagarg310:root@cluster0.biyiytx.mongodb.net/");

const userSchema = new mongoose.Schema([{
    username: {type:String, required: true},
    password: {type:String, required: true},
    firstName: {type:String, required: true},
    lastName: {type:String, required: true}
}]);

const accountSchema = new mongoose.Schema([{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    balance: { type: Number, required: true },
}])

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
module.exports = {
    User,
    Account
};