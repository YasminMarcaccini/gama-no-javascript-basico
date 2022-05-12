console.log("Iniciando meu JavaScript");

function validaCPF(cpf){
    console.log(cpf.length);
    //inserir validação do tamanho do cpf
    if(cpf.length != 11){
        //inserir ação caso o cpf não tenha 11 dígitos
        return false;
    }
    else{
        
        var numerosCPF = cpf.substring(0,9);

        var digitoVerificador = cpf.substring(9);

        console.log("Os números do seu CPF são " + numerosCPF);

        console.log("Seu dígito verificador é " + digitoVerificador);

        var soma = 0;

        for (i = 10; i > 1; i--){
            soma += numerosCPF.charAt(10 -i) * i;
        };

        console.log(soma);

        return true;
    };
}

function validacao(){
    console.log("Iniciando a validação do CPF");
    
    var cpf = document.getElementById("cpf_digitado").value;

    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao){
        //inserir ação de mostrar que o CPF é válido
        document.getElementById("success").style.display = "block";
    }
    else{
        //inserir ação de mostrar o display de CPF inválido
        document.getElementById("error").style.display = "block";
    }
};