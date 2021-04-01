## How to reproduce the error
1. Clone this repository.
2. 
```bash
npm run install
```
3. 
```bash
npm run dev # You can start development server without any error.
```
4. 
```bash
npm run type-check # You get three errors!
```

## Estimated cause
Current contents of core/typings/javascript.d.ts are shown below:
```typescript
import * as Blockly from './core';
export = Blockly.Generator;
```
This means that, when you import 'blockly/javascript', its type is treated as *typeof* Blockly.Generator.
However, javascript.js exports Blockly.JavaScript, which is **an instance of** Blockly.Generator.

## Suggested fix
That type declaration should be changed to the one below:
```typescript
import * as Blockly from './core';
declare var tmp:Blockly.Generator;
export = tmp;
```
to export **an instance of** Blockly.Generator instead of *typeof* Blockly.Generator.

- Note that there remains two errors after above fix.
    - These might require breaking change to fix, so these are rather a feature request than a bug.
    - One is because constants ORDER_* does not exists in class Blockly.Generator.
        - I know this is hard to fix, because they are defined for each instance of Blockly.Generator.
        - One suggested fix is move ORDER_* to Blockly.Generator.ORDER.*, where ORDER has index signature type Object.<string, number>.
    - The other is because property {user_defined_block_name} does not exists in class Blockly.Generator.
        - I know this is hard to fix, because they are defined in each local projects.
        - One suggested fix is add function below to Blockly.Generator:
        ```typescript
        registerCodeGeneratorForBlock(blockName:string,codeGeneratorFunc:(block:Blockly.Block)=>string|[string,number])
        ```
        which simply assign given function to `this[blockname]`.
    - [My fork of blockly](https://github.com/yukiya383/blockly/tree/develop)includes these changes.

## Fixed sample
I made a [plugin](https://github.com/yukiya383/blockly-plugin-typed-codegenerator) which overrides declaration of module "blockly/javascript".
Branch "fixed_sample" uses this plugin, and works properly without error.
