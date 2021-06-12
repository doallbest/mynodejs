// 1引入mongoose模块
const mongoose = require('mongoose');

// 2连接数据库 (open事件监听)
mongoose.connect('mongodb://127.0.0.1:27017/atguigu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// 当数据库连接成功后 触发mongoose.connection 的open事件
mongoose.connection.once('open', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('连接数据库成功');
})

// 3创建schema对象，方便以后对某个集合的值进行约束
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,   //唯一存在(以后不能有name的重名)
        required: true  //必填项
    },
    age: Number,
    sex: String,
    hobby: [String],
    createTime: {
        type: Date,
        default: Date.now
    }

})
console.log(teacherSchema);

// 4创建model对象（集合）
const teacherModel = mongoose.model('teacher', teacherSchema)

teacherModel.create([{
    name: '老李',
    age: 18,
    sex: '男',
    hobby: ['打球', '游泳'],
    createTime: Date.now()
}, {
    name: '老刘',
    age: 38,
    sex: '男',
    hobby: ['打球', '游泳'],
    createTime: Date.now()
}, {
    name: '晶晶',
    age: 28,
    sex: '男',
    hobby: ['打球', '游泳'],
    createTime: Date.now()
}], (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据添加成功');
})