const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  try {
    // Read the question from a file
    // const question = fs.readFileSync("question.txt", "utf8").trim();
    const question = fs.readFileSync("question_wife.txt", "utf8").trim();

    // Create the completion request with the question
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: question }],
      model: "gpt-3.5-turbo",
    });

    // Print the response
    console.log(completion.choices[0].message.content);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
