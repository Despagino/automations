const {By} = require('selenium-webdriver');

const deleteAllMovies = async (driver) => {

    await driver.findElement(By.className("deleteButtons")).click()

};

module.exports = {
    deleteAllMovies
}