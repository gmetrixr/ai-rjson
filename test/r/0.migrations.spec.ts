import { expect } from "chai";
import { createNewStrategy } from "../../src/migrations/strategy/index";
import { createNewBrain } from "../../src/migrations/brain";
import { createRecord, RT, rtp } from "../../src/r/R";
import { r } from "../../src/r";
import { StrategyFactory } from "../../src/r/recordFactories";
import { migrations } from "../../src";
import * as fs from "fs";


const learnableChunks = [
  {
    context: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    title: "Learning chunk title",
    description: "Learning chunk Description",
    game: [
      {
        name: "Game 1",
        input: ["input1", "input 2"],
      },
      {
        name: "Game 2",
        input: [
          {
            key: "Key",
            description: "Description",
          },
        ],
      },
    ],
  },
  {
    context: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    game: [
      {
        name: "Game 3",
        input: [
          {
            left: "left",
            right: "right",
          },
        ],
      },
      {
        name: "Game 2",
        input: [
          {
            key: "Key",
            description: "Description",
          },
        ],
      },
    ],
  },
];


describe("r Migration tests", () => {
  it("should create new strategy", () => {
    const strategy = createNewStrategy();
    expect(strategy.type).to.be.equal(RT.strategy);
  });

  it("should create new strategy 2", () => {
    const strategyJson = createNewStrategy();
    const sf = new StrategyFactory(strategyJson);
    sf.set(rtp.strategy.template_project_uuid, "2c295e25-54b5-482b-9ce7-88d867479542");
    sf.set(rtp.strategy.initial_prompt, "You are helping a startup create a pitch deck to raise funds. You are free to make assumptions based on the data provided. Answer to the point and do not add disclaimers, it is known that your responses might have an element of risk.");
    sf.set(rtp.strategy.thumbnail_url, "https://u.vrgmetri.com/gb-sms-prod-1/media/2021-1/gmetri/2f55fc5e-1a41-467b-ac06-ec7bdd4fb342/t/48693844167_fd55ebabab_b.jpg");

    // fs.writeFileSync("./test/r/jsons/strategy1.json", JSON.stringify(migrateStrategy(strategyJson)));
  });

  it("Should create a strategy template", () => {
    const strategyJson = createNewStrategy();
    const sf = new StrategyFactory(strategyJson);
    sf.set(rtp.strategy.template_project_uuid, "2c295e25-54b5-482b-9ce7-88d867479542");
    sf.set(rtp.strategy.initial_prompt, "You are helping a startup create a pitch deck to raise funds. You are free to make assumptions based on the data provided. Answer to the point and do not add disclaimers, it is known that your responses might have an element of risk.");
    sf.set(rtp.strategy.thumbnail_url, "https://u.vrgmetri.com/gb-sms-prod-1/media/2021-1/gmetri/2f55fc5e-1a41-467b-ac06-ec7bdd4fb342/t/48693844167_fd55ebabab_b.jpg");

    // Create the Form input first
    const formFields = [
      {
        form_tag: "comp_url",
        form_label: "What is the startup URL?",
        form_types_allowed: ["url"],
        form_required: true,
        form_train: true,
        form_response: "https://gmetri.com",
        form_type_selected: "url",
      },
      {
        form_tag: "comp_deck",
        form_label: "Upload your current pitch deck, if any.",
        form_types_allowed: ["pdf"],
        form_required: false,
        form_train: true,
        form_response: {
          id: 100,
          file_urls: {
            "o": "https://s.vrgmetri.com/gb-web/r3f-ui/assets/pano/0_grid_02_white.jpg",
            "t": "https://s.vrgmetri.com/image/w_400,q_90/gb-web/r3f-ui/assets/pano/0_grid_02_white.jpg",
          },
          name: "grid_02_white.jpg",
          type: "IMAGE",
        },
        form_type_selected: "pdf",
      },
      {
        form_tag: "comp_pricing",
        form_label: "Pricing page, if any.",
        form_types_allowed: ["url"],
        form_required: false,
        form_train: false,
        form_response: "https://gmetri.com/pricing",
        form_type_selected: "url",
      },
      {
        form_tag: "funding_01",
        form_label: "How much funding do you seek in (USD million)?",
        form_types_allowed: ["short_text"],
        form_required: true,
        form_train: true,
        form_response: "$30 million",
        form_type_selected: "url",
      },
      {
        form_tag: "accent",
        form_label: "What is the startup's primary color accent?",
        form_types_allowed: ["color"],
        form_required: true,
        form_train: false,
        form_response: "rgba(0, 0, 0, 1)",
        form_type_selected: "color",
      },
      {
        form_tag: "team_02",
        form_label: "Name of Key Member #1",
        form_types_allowed: ["short_text"],
        form_required: true,
        form_train: false,
        form_response: "John Wick",
        form_type_selected: "short_text",
      },
      {
        form_tag: "team_12",
        form_label: "Short Bio of Key Member #1",
        form_types_allowed: ["long_text"],
        form_required: true,
        form_train: false,
        form_response: "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is forced back into the criminal underworld he had previously abandoned.",
        form_type_selected: "long_text",
      },
    ];

    for (const f of formFields) {
      const formField = createRecord(RT.form);
      const formFieldFactory = r.record(formField);
      formFieldFactory.set(rtp.form.form_tag, f.form_tag);
      formFieldFactory.set(rtp.form.form_label, f.form_label);
      formFieldFactory.set(rtp.form.form_types_allowed, f.form_types_allowed);
      formFieldFactory.set(rtp.form.form_required, f.form_required);
      formFieldFactory.set(rtp.form.form_train, f.form_train);

      // responses
      formFieldFactory.set(rtp.form.form_type_selected, f.form_type_selected);
      formFieldFactory.set(rtp.form.form_response, f.form_response);

      sf.addRecord({ record: formField });
    }

    const queryFields = [
      {
        query_tag: "in1sentence",
        query_label: "Describe your startup in 50 characters or less.",
        query_subquery: "Describe your startup in 50 characters or less.",
        query_response: "Some Answer",
      },
      {
        query_tag: "problem",
        query_label: "What problem or pain point are you solving?",
        query_subquery: "What problem or pain point does the startup solve?",
        query_response: "Some Answer",
        query_response_override: "Some Override",
      },
      {
        query_tag: "market_01",
        query_label: "TAM, or Total Addressable Market (USD Million)",
        query_subquery: "Estimate the TAM in USD million. Just respond with the number.",
        query_response: "Some Answer",
        query_response_override: "Some Override",
      },
      {
        query_tag: "opportunity",
        query_label: "What are the key market trends or factors that make it an attractive opportunity?",
        query_subquery: "What are the key market trends or factors that make it an attractive opportunity? Give 3 bullet points.",
        query_response: "Some Answer",
      },
    ];

    for (const q of queryFields) {
      const queryField = createRecord(RT.query);
      const qf = r.record(queryField);
      qf.set(rtp.query.query_tag, q.query_tag);
      qf.set(rtp.query.query_label, q.query_label);
      qf.set(rtp.query.query_subquery, q.query_subquery);

      // responses
      qf.set(rtp.query.query_response, q.query_response);
      qf.set(rtp.query.query_response_override, q.query_response_override);

      sf.addRecord({ record: queryField });
    }

    const replacementMapFields = [
      { source_tag: "funding_01", destination_address: "project:1|scene:1|element:1>text" },
      { source_tag: "team_02", destination_address: "project:1|scene:1|element:2>text" },
      { source_tag: "team_12", destination_address: "project:1|scene:1|element:3>text" },
      { source_tag: "team_12", destination_address: "project:1|scene:1|element:3>color" },
      { source_tag: "accent", destination_address: "project:1|scene:1|element:4>color" },
    ];

    for (const rp of replacementMapFields) {
      const rpo = createRecord(RT.replacement_map);
      const rpF = r.record(rpo);
      rpF.set(rtp.replacement_map.source_tag, rp.source_tag);
      rpF.set(rtp.replacement_map.destination_address, rp.destination_address);

      sf.addRecord({ record: rpo });
    }

    const characterFields = [
      {
        source_tag: "character_01",
        destination_address: "project:1|scene:1|element:1>text",
        voice_option: "en-US-Wavenet-A",
        language: "en-US",
        welcome_dialogue: "Welcome to Employee Onboarding",
      },
      {
        source_tag: "character_01",
        destination_address: "project:1|scene:1|element:1>text",
        voice_option: "en-US-Wavenet-A",
        language: "en-US",
        welcome_dialogue: "Welcome to Meet the Leaders",
      },
    ];

    for (const character of characterFields) {
      const characterRecord = createRecord(RT.character);
      const characterRecordF = r.record(characterRecord);
      characterRecordF.set(rtp.character.source_tag, character.source_tag);
      characterRecordF.set(rtp.character.destination_address, character.destination_address);
      characterRecordF.set(rtp.character.voice_option, character.voice_option);
      characterRecordF.set(rtp.character.language, character.language);
      characterRecordF.set(rtp.character.welcome_dialogue, character.welcome_dialogue);

      sf.addRecord({ record: characterRecord });
    }

    // console.log(JSON.stringify(strategyJson, null, 2));
    
    // fs.writeFileSync("./test/r/jsons/autogenerated_strategy.json", JSON.stringify(strategyJson));
    // fs.writeFileSync("./test/r/jsons/autogenerated_strategy_responses.json", JSON.stringify(strategyJson));

  });

  it("should create new brain", () => {
    const brain = createNewBrain();
    expect(brain.type).to.be.equal(RT.brain);
  });

  it("should create new brain along with learnable chunk and game", () => {
    const brain = createNewBrain();
    const brainF = r.brain(brain);
    // add title of the full context
    brainF.set(rtp.brain.title, "title");
    brainF.set(rtp.brain.description, "Description");

    for (const learnableChunk of learnableChunks) {
      const chunk = createRecord(RT.learning_chunk);
      const chunkF = r.record(chunk);
      chunkF.set(rtp.learning_chunk.context, learnableChunk.context);
       // add title of the current learning chunk
      chunkF.set(rtp.learning_chunk.title, learnableChunk.title);
       // add description of the current learning chunk
       chunkF.set(rtp.learning_chunk.description, learnableChunk.description);

      for (const game of learnableChunk.game) {
        const gameR = createRecord(RT.game);
        const gameF = r.record(gameR);
        gameF.set(rtp.game.name, game.name);
        gameF.set(rtp.game.input, game.input);

        chunkF.addRecord({ record: gameR });
      }

      brainF.addRecord({ record: chunk });
    }
  });
});

describe("create a concept tree json", () => {
  const brainJson = migrations.createNewBrain();
  const bf = r.brain(brainJson);
  const l1Concept = bf.addBlankRecord({ type: RT.concept });
  if(l1Concept) {
    const l1cF = r.record(l1Concept.record);
    l1cF.set(rtp.concept.title, "title 1");
    l1cF.set(rtp.concept.content, "content 1");
    const l2Concept = l1cF.addBlankRecord({ type: RT.concept });
    l1cF.addBlankRecord({ type: RT.game });

    if(l2Concept) {
      const l2cF = r.record(l2Concept.record);
      l2cF.set(rtp.concept.title, "title 2");
      l2cF.set(rtp.concept.content, "content 2");

      const l3Concept = l2cF.addBlankRecord({ type: RT.concept });
      l2cF.addBlankRecord({ type: RT.game });

      if(l3Concept) {
        const l3cF = r.record(l3Concept.record);
        l3cF.set(rtp.concept.title, "title 3");
        l3cF.set(rtp.concept.content, "content 3");
        l3cF.addBlankRecord({ type: RT.game });
      }
    }
  }

  // const allConcepts = bf.getDeepRecordEntries(RT.concept);

  // fs.writeFileSync("brainConcept.json", JSON.stringify(brainJson), { encoding: "utf-8" });
  // fs.writeFileSync("allConcepts.json", JSON.stringify(allConcepts), { encoding: "utf-8" });
});