function add_digit(digit){
    result.value += digit
  }
  
  function dele() {
    result.value = ''
  }
  
  function equal() {
    result.value = eval(result.value)
  }
  
  function delet() {
    result.value = result.value.toString().slice(0,-1)
  }
  
  function math_error() {
    const math_operators = ['+', '-', '*', '/'];
    expression = result.value;
    for (let i = 0; i < expression.length - 1; i++) {
      const current_char = expression[i];
      const next_char = expression[i + 1];
      if (math_operators.includes(current_char) && math_operators.includes(next_char)) {
        alert('Error: Two math operators in a row.'); 
      }
      }
    }