# Infix Expression Converter

A web-based application that converts mathematical expressions between different notations: infix, postfix (Reverse Polish Notation), and prefix (Polish Notation).

## Live Demo

You can try the application live at: [https://srinu0906.github.io/Infix-Converotor/](https://srinu0906.github.io/Infix-Converotor/)

## Features

The application supports the following conversions:
- Infix to Postfix
- Infix to Prefix
- Postfix to Infix
- Postfix to Prefix
- Prefix to Infix
- Prefix to Postfix

## Usage

1. Visit the [live demo](https://srinu0906.github.io/Infix-Converotor/) or open `index.html` in your web browser
2. Select the input expression type (infix / postfix / prefix)
3. Enter your expression in the input field
4. Select the desired output notation type
5. Click the "Get Result" button to see the converted expression

### Input Format
- Use standard mathematical operators: +, -, *, /, ^
- Use parentheses () for grouping
- Use alphanumeric characters for operands
- Spaces are not required but are allowed

## Implementation Details

The application uses a stack-based algorithm to perform the conversions:
- For infix to postfix conversion, it uses the Shunting Yard algorithm
- For prefix/postfix conversions, it uses appropriate stack operations
- The implementation handles operator precedence and associativity

## Limitations

1. The output infix expression obtained from postfix or prefix notation does not include parentheses
2. The application does not support special characters or symbols
3. Input validation is basic and may not catch all invalid expressions

## Technologies Used

- HTML5
- CSS3
- JavaScript 

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/srinu0906/Infix-Converotor.git
```

2. Open `index.html` in your web browser

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
