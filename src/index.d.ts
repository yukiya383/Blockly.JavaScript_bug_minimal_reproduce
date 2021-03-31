/**
 * Override declaration of javascript.d.ts
 */
declare module 'blockly/javascript' {
  import Blockly from "blockly";
  class JavaScript extends Blockly.Generator{
    // These constants depends on each language.
    // One solution is add an object "ORDER",
    //     whose type is index signature "Object.<string,number>".
    // Here is constants only for JavaScript.
    ORDER_ATOMIC = 0 as const;           // 0 "" ...
    ORDER_NEW = 1.1 as const;            // new
    ORDER_MEMBER = 1.2 as const;         // . []
    ORDER_FUNCTION_CALL = 2 as const;    // ()
    ORDER_INCREMENT = 3 as const;        // ++
    ORDER_DECREMENT = 3 as const;        // --
    ORDER_BITWISE_NOT = 4.1 as const;    // ~
    ORDER_UNARY_PLUS = 4.2 as const;     // +
    ORDER_UNARY_NEGATION = 4.3 as const; // -
    ORDER_LOGICAL_NOT = 4.4 as const;    // !
    ORDER_TYPEOF = 4.5 as const;         // typeof
    ORDER_VOID = 4.6 as const;           // void
    ORDER_DELETE = 4.7 as const;         // delete
    ORDER_AWAIT = 4.8 as const;          // await
    ORDER_EXPONENTIATION = 5.0 as const; // **
    ORDER_MULTIPLICATION = 5.1 as const; // *
    ORDER_DIVISION = 5.2 as const;       // /
    ORDER_MODULUS = 5.3 as const;        // %
    ORDER_SUBTRACTION = 6.1 as const;    // -
    ORDER_ADDITION = 6.2 as const;       // +
    ORDER_BITWISE_SHIFT = 7 as const;    // << >> >>>
    ORDER_RELATIONAL = 8 as const;       // < <= > >=
    ORDER_IN = 8 as const;               // in
    ORDER_INSTANCEOF = 8 as const;       // instanceof
    ORDER_EQUALITY = 9 as const;         // == != === !==
    ORDER_BITWISE_AND = 10 as const;     // &
    ORDER_BITWISE_XOR = 11 as const;     // ^
    ORDER_BITWISE_OR = 12 as const;      // |
    ORDER_LOGICAL_AND = 13 as const;     // &&
    ORDER_LOGICAL_OR = 14 as const;      // ||
    ORDER_CONDITIONAL = 15 as const;     // ?:
    ORDER_ASSIGNMENT = 16 as const;      // = += -= **= *= /= %= <<= >>= ...
    ORDER_YIELD = 17 as const;           // yield
    ORDER_COMMA = 18 as const;           // ,
    ORDER_NONE = 99 as const;            // (...)

    // This function should be defined in Blockly.Generator.
    registerCodeGeneratorForBlock(name:string, 
      codeGeneratorFunc:(block:Blockly.Block)=>(string|[string,number])):void{
      this[name]=codeGeneratorFunc;
    }
  }
  var instance: JavaScript;
  export = instance;
}