import Blockly from "blockly";

//import {JS} from "../interfaces/javascript";
import * as JavaScript from "blockly/javascript";

export const sampleBlock = {
  type: "SampleBlock",
  message0: "hoge",
  colour: "#33cc33",
  tooltip: "A sample which can use but can't pass type check.",
};

const sampleBlockCode = (block:Blockly.Block)=>{
  const name:string = block.getFieldValue('name')||"";
  const value = JavaScript.valueToCode(block, 'value', JavaScript.ORDER_ASSIGNMENT||16)||"";
  return `type ${name}${value?` = ${value}`:""};`;
}

{ /* initialization begin */
Blockly.defineBlocksWithJsonArray([
  sampleBlock
]);

// This is an expected behavior, but the error message seems wrong
JavaScript['SampleBlock'] = sampleBlockCode;

}/* initialization end */
