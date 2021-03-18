const LoginPage = require('../pageobjects/login.page');


describe('My Login application', () => {
    it('should login with valid credentials', () =>{        

        LoginPage.login();                
    });
});


