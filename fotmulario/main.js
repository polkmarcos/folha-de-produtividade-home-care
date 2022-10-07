function botao (funcionarios, cpf, paciente, tomador,telefone,banco){
    var tb =document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellFuncionario = linha.insertCell(1);
    var cellCpf = linha.insertCell(2);
    var cellPaciente = linha.insertCell(3);
    var cellTomador = linha.insertCell(4);
    var cellTelefone = linha.insertCell(5);
    var cellBanco = linha.insertCell(6);
   

    cellCodigo.innerHTML = qtdLinhas;
    cellFuncionario.innerHTML = funcionarios;
    cellCpf.innerHTML = cpf;
    cellPaciente.innerHTML = paciente;
     cellTomador.innerHTML = tomador;
    cellTelefone.innerHTML = telefone;
    cellBanco.innerHTML = banco;
}