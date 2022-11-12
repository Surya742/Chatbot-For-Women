
import env from "react-dotenv";
var msgQ = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n";
var toShow = "yo";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    async greet(lowerCaseMessage) {
        console.log("calling greeting");
        var customMsg = "Human: " + lowerCaseMessage + "\n";
        msgQ = msgQ + customMsg;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: msgQ,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
          });
        msgQ = msgQ + response.data.choices[0].text + "\n";
        console.log("msgQ: " + msgQ);
        toShow = response;
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      this.greet(lowerCaseMessage);
      
      setTimeout(() => {
        this.actionProvider.greet(toShow)
      }, 5000);
    }
  }
  
  export default MessageParser