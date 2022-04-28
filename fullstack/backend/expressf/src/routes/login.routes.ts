import {  Router } from "../common/expressApp"
const {login_Get}=require('../controller/login.Ctrl')


Router.route('/login')
.get(login_Get)
module.exports=Router;