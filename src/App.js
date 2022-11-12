import Chatbot from 'react-chatbot-kit';
import './components/chatcss.css';
import './App.css';

import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot className="chats" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
