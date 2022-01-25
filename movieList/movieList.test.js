const {Builder, Capabilities, By} = require('selenium-webdriver')
const {addMovie} = require('./addMovie')
const {deleteAllMovies} = require('./deleteMovie')
const {crossMovie} = require('./crossMovie')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test("Add Movie to List", async () => {
    await addMovie(driver)
    await driver.sleep(2000)
})

test("Cross off movie", async () => {
    await crossMovie(driver)
    await driver.sleep(2000)
})

test("Delete All Movie", async () => {
    await deleteAllMovies(driver)
    await driver.sleep(2000);
})
