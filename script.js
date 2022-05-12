console.log("Iniciando meu JavaScript");

function validaCPF(cpf){
    console.log("O seu CPF tem " + cpf.length + " dígitos");
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

        //Validando o primeiro dígito verificador

        for (i = 10; i > 1; i--){
            soma += numerosCPF.charAt(10 -i) * i;
        };

        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitoVerificador.charAt(0)) {
            return false;
        }

        console.log(digitoVerificador.toString().charAt(0) + " é a posição do primeiro dígito verificador");

        //Validando o segundo dígito verificador

        soma = 0;

        numerosCPF = cpf.substring(0,10);

        for (k = 11; k > 1; k--){
            soma += numerosCPF.charAt(11 -k) * k;
        };

        console.log(soma);

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitoVerificador.charAt(1)) {
            return false;
        }

        console.log(digitoVerificador.toString().charAt(1) + " é a posição do segundo dígito verificador");

        return true;
    };
}

function validacao(){
    console.log("Iniciando a validação do CPF");

    //Limpando o histórico

    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
    
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