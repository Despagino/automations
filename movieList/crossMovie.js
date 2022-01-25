const {By} = require('selenium-webdriver');

const crossMovie = async (driver) => {

    await driver.findElement(By.className("movieTitle")).click()

};

module.exports = {
    crossMovie
}