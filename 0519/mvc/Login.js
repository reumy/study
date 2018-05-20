const Login = function(){
  return
  {
    view : (req, res)=>{
      res.render('/login');
    }
    register : (req, res)=>{
      res.render('/register');
    } 
  }
}

module.exports = new Login();
