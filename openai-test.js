// import OpenAI from "openai";
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Give me a recepie of a pudding." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
