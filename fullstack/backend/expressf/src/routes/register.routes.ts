import { Router } from "../common/expressApp";

Router.route('/register')
  .get((req: any, res: any) => {
    res.render("register");
  })
  .post((req: any, res: any) => {
    res.render("register");
  })
  .put((req: any, res: any) => {
    res.render("register");
  })
  .delete((req: any, res: any) => {
    res.render("register");
  });

  module.exports=Router;
