using System;

using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using LoginService.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

using System.Text;
namespace LoginService.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        public LoginController(IConfiguration config)
        {
            _config = config;
        }
       
        [HttpPost]
        public string PostLogin([FromBody]LogInfo log)
        {
            string response = "";
            var user = AuthenticateUser(log);

            
                var tokenString = GenerateJSONWebToken(user);
              return  response = Ok(new { token = tokenString }).Value.ToString();
        }
        private string GenerateJSONWebToken(LogInfo user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));    
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);    

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.ResponseResult),
                
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
    
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],    
              null,    
              claims,    
              expires: DateTime.Now.AddMinutes(120),    
              signingCredentials: credentials);    
    
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private LogInfo AuthenticateUser(LogInfo log)
        {
            LoginService.Models.TestDBContext db = new LoginService.Models.TestDBContext();


           bool b =  db.EmployeeLogin.Any(s=>s.Email == log.Email && s.Password == log.Password);
            if(b == true)
            log.ResponseResult = "Success";
            else
                log.ResponseResult = "Failed";

                return log;
        }       
        
    }
}
