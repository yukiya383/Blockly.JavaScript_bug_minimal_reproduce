import { useEffect } from 'react';
import Blockly from "blockly";
import 'blockly/javascript';
import toolbox from './toolbox.xml';
import './block';

function App() {
  useEffect(()=>{
    Blockly.inject("blocklyDiv", {
      toolbox: toolbox,
      grid: {
        spacing: 20,
        length: 20,
        colour: '#ccc',
        snap: true
      },
    });
  }, []);

  return (
    <div style={{display:"flex"}}>
      <div id="blocklyDiv" style={{width: "96vw", height: "96vh"}}></div>
    </div>
  );
}

export default App;