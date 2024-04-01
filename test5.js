function inverteString(str) {
    let inversa = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inversa += str.charAt(i);
    }
    console.log("Palavra invertida: " + inversa);
}

inverteString("Wander");