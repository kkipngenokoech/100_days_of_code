Strings can be changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.

## creating a symbol:
to create a symbol, simply put a semi-colon at the beginning of some text:
    `:first_symbol`
## symbols vrs strings:
symbols have one memory location whereas strings have different memory location. i.e `'string'.object_id != 'string.object_id ` whereas `:string.object_id == :string.object_id`