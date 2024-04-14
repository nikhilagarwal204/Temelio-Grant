import React from 'react';
import CreateNonProfit from './components/CreateNonProfit';
import CreateFoundation from './components/CreateFoundation';
import SendEmail from './components/SendEmail';
import ViewSentEmails from './components/ViewSentEmails';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white", margin: "2%" }}>Temelio Grant Management System</h1>
      <CreateNonProfit />
      <br /><br />
      <CreateFoundation />
      <br /><br />
      <SendEmail />
      <br /><br />
      <ViewSentEmails />
    </div>
  );
}

export default App;