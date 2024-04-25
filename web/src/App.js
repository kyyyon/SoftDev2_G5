import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import SidePanel from "./components/Side";
import Content from "./components/content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([
    { question: "Hello, how can I help you?", answer: "" },
  ]);

  const sendMessage = (question, answer) => {
    setMessages([...messages, { question, answer }]);
  };

  return (
    <Router>
      <div>
        <Header />
        <SidePanel sendMessage={sendMessage} />
        <Content messages={messages} setMessages={setMessages} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
