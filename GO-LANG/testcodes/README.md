A go program entails:
    package declaration
    import packages
    functions
    variables
    statements and expression
    comments
running a go program - `go run nameofyourfile.go` - this command will compile the application and then run the resulting binary

## Datatypes in Go
1. integer
    any positive or negative number.
    integers can be of two types - signed (can store both postive and negative values)
                                 - unsigned (stores only positive values)
    #### signed int
    you can use int, int8, int16, int32, int64 `var signed_integer int = 3456`
    #### unsigned int
    you use uint, uint8, uint16, uint32, uint64 `var unsigned_int uint = 500`    
2. floating-point numbers
    used to represent real numbers, this are those numbers that cannot be expressed in an int version
    this includes all rational and irrational numbers
    `float32, float64`
3. complex numbers
    this are in-built function creates complex number from its imaginary and real part an in-built imaginary and real function to extract those parts.
    `complex64, complex128`
    `complex64` - complex numbers which contains float32 as a real and imaginary component.