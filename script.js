const inputTexto = document.querySelector(".input-texto");    
const mensagem = document.querySelector('.mensagem');         

function btnEncriptar(){                                  
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"

}

function btnDesencriptar(){                                   
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none"
}

let matrizCodigo = [["a", "ai"], ["e","enter"], ["i", "imes"], ["o", "ober"],["u", "ufat"]];   

function encriptar(stringEncriptada){                        
    stringEncriptada = stringEncriptada.toLowerCase();        
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])   
        }
    }

    return stringEncriptada;                                  
} 

function desencriptar(stringDesencriptada){                 
    stringDesencriptada = stringDesencriptada.toLowerCase();  
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    
    return stringDesencriptada;
}

/*botão copiar*/

function copiar(){
    mensagem.select();
    document.execCommand("copy");
}