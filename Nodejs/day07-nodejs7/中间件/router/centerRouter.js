const express = require('express');
const router = new express.Router();
const path = require('path');

const userModel = require('../model/userModel');

const cookieparser = require('cookie-parser');
// 获取cookie并把cookie以对象的形式呈现
router.use(cookieparser());

// 权限控制
router.use('/center.html', async (req, res, next) => {
    //当用户访问center.html的时候，进行判断是否携带服务端发送的cookie
    console.log(req.cookies);

    if (req.cookies.userID) {
        try {
            //如果cookies的userID存在，则去数据库判断是否有该用户
            const re = await userModel.findOne({

                _id: req.cookies.userID
            })
            if (re) {
                next();
            } else {
                const filePath = path.resolve(__dirname, '../views/err.ejs');
                return res.render(filePath, {
                    errData: '权限不足，请重新登录再访问个人中心页'
                })
            }
        } catch (e) {
            const filePath = path.resolve(__dirname,'../views/err.ejs');
            return res.render(filePath,{
                errData:'权限不足，请重新登录再访问个人中心页'
            })
        }



    }else{
        const filePath = path.resolve(__dirname, '../views/err.ejs');
                return res.render(filePath, {
                    errData: '权限不足，请重新登录再访问个人中心页'
                })
    }
})





router.get('/center.html', (req, res) => {

    const filePath = path.resolve(__dirname, '../views/center.html')
    res.sendFile(filePath);
})

module.exports = router;