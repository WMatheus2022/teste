function verificaSequenciaFibonacci(numero) {
    
    let a = 0;
    let b = 1;
    
    
    if (numero === 0 || numero === 1) {
        console.log("O número " + numero + " pertence à sequência de Fibonacci.");
        return;
    }
    
   
    while (b <= numero) {
        let proximo = a + b;
        
        if (proximo === numero) {
            console.log("O número " + numero + " pertence à sequência de Fibonacci.");
            return;
        }
        
        a = b;
        b = proximo;
    }
    
    
    console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
}

verificaSequenciaFibonacci(10); 
verificaSequenciaFibonacci(8); 