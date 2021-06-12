const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        //不能重名
        unique:true,
        // 必须的
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// 创建model
const userModel = mongoose.model('userInfo',userSchema);

module.exports = userModel;