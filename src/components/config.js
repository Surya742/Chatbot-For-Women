import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "sheBot",
  initialMessages: [createChatBotMessage("Hi, I'm sheBot."), createChatBotMessage(
    "I'm here to help. What do you want to ask?.",
    {
      withAvatar: true,
      delay: 1000,
    }
  )],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config