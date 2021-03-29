function convert() {
    const valorEmDolar = document.getElementById('value-input').value;
    
    const valorConvertidoParaReal = execute(valorEmDolar);
    
    document.getElementById('resultado').value = valorConvertidoParaReal;
  } 
  
  function execute(valor) {
    const resultado =  parseFloat(Number(valor) * 5.53).toFixed(2);
    
    return resultado;
  }
  