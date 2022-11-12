class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    
    async greet(lowerCaseMessage) {
        console.log("lowerCaseMessage: ", lowerCaseMessage.data.choices[0].text);
        var ar = lowerCaseMessage.data.choices[0].text.split(":");
        var msgToDisplay = "";
        if(ar.length === 1){
            msgToDisplay = ar[0];
        }else{
            for(var i = 1; i < ar.length; i++){
                if(msgToDisplay === ""){
                    msgToDisplay = ar[i];
                }else{
                    msgToDisplay = msgToDisplay + " " + ar[i]
                }
                
            }
        }
        console.log("msgtodiplay: ", msgToDisplay)
      const greetingMessage = this.createChatBotMessage(msgToDisplay)
      this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message) {
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider