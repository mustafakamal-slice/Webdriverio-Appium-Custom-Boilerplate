
const continue_with_other_email_xpath = "//android.widget.TextView[@text='Continue with other Email']"
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get continue_with_other_email () { return $(continue_with_other_email_xpath) }
   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login () {
        this.continue_with_other_email.click(); 
        browser.pause(3000);
    }
}

module.exports = new LoginPage();
