const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("testing the movies app", () => {
  test("add movies to the list", async () => {
    await driver.get("http://localhost:3000");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Movie 1");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Movie 2");
    await driver.findElement(By.css('button[type="submit"]')).click();
  });

  test("can add movie to watched list", async () => {
    await driver.get("http://localhost:3000");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Movie 1");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.elementLocated(By.id("movie-0")));
    await driver.findElement(By.id("movie-0")).click();
    const message = await driver.wait(
      until.elementLocated(By.css("#message")),
      1000
    );
    expect(await message.getText()).toBe("Watched Movie 1");
  });

  test("can delete a movie from the list", async () => {
    await driver.get("http://localhost:3000");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Movie 1");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.elementLocated(By.id("movie-0")));
    await driver.findElement(By.css("#movies-list li button")).click();
    const list = await driver.findElement(By.css("#movies-list"));
    const liCount = await list.findElements(By.css("li"));
    let count = liCount.length;
    expect(count).toEqual(0);
  });

  test("message is displyed properly", async () => {
    await driver.get("http://localhost:3000");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Movie 1");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.elementLocated(By.id("movie-0")));
    await driver.findElement(By.css("#movies-list li button")).click();
    const message = await driver.wait(
      until.elementLocated(By.css("#message")),
      1000
    );
    expect(await message.getText()).toBe("Movie 1 deleted!");
  });
});
