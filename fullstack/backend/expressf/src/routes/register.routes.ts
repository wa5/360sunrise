import { Router } from "../common/expressApp";
const {
  register_Get,
  register_Post,
  register_Put,
  register_Delete,
} = require("../controller/register.Ctrl");

Router.route("/register")
  .get(register_Get)
  .post(register_Post)
  .put(register_Put)
  .delete(register_Delete);

module.exports = Router;
