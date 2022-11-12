import Chatbot from 'react-chatbot-kit';
import './components/chatcss.css';
import './App.css';

import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
import Head from './components/Head';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Chatbot className="chats" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
