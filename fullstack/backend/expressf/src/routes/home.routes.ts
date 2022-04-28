import { Router } from "../common/expressApp"
const {home_Get}=require('../controller/home.Ctrl')


Router.route('/home')
.get(home_Get)

module.exports=Router;