import { expect } from "chai";
import { createNewStrategy, migrateStrategy } from "../../src/migrations/strategy/index";
import { RT, rtp } from "../../src/r/R";
import fs from "fs";
import { StrategyFactory } from "../../src/r/recordFactories";

describe ("r Migration tests", () => {
  it ("should create new strategy", () => {
    const strategy = createNewStrategy();
    expect(strategy.type).to.be.equal(RT.strategy);
  });

  it ("should create new strategy 2", () => {
    const strategyJson = createNewStrategy();
    const sf = new StrategyFactory(strategyJson);
    sf.set(rtp.strategy.template_project_uuid, "2c295e25-54b5-482b-9ce7-88d867479542");
    sf.set(rtp.strategy.initial_prompt, "You are helping a startup create a pitch deck to raise funds. You are free to make assumptions based on the data provided. Answer to the point and do not add disclaimers, it is known that your responses might have an element of risk.");
    sf.set(rtp.strategy.thumbnail_url, "https://u.vrgmetri.com/gb-sms-prod-1/media/2021-1/gmetri/2f55fc5e-1a41-467b-ac06-ec7bdd4fb342/t/48693844167_fd55ebabab_b.jpg");

    // fs.writeFileSync("./test/r/jsons/strategy1.json", JSON.stringify(migrateStrategy(strategyJson)));
  });
});