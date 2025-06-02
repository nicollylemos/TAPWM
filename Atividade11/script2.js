class Conta {
    constructor(nome, banco, numeroConta, saldo) {
      this._nome = nome;
      this._banco = banco;
      this._numeroConta = numeroConta;
      this._saldo = saldo;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get numeroConta() { return this._numeroConta; }
    set numeroConta(valor) { this._numeroConta = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }
  }

  class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
      super(nome, banco, numeroConta, saldo);
      this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
  }

  class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
      super(nome, banco, numeroConta, saldo);
      this._juros = juros;
      this._dataVencimento = dataVencimento;
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
  }

  function exibirContas() {
    // Pegar dados inputs Conta Corrente
    const nomeCorrente = document.getElementById("nomeCorrente").value.trim();
    const bancoCorrente = document.getElementById("bancoCorrente").value.trim();
    const numeroContaCorrente = document.getElementById("numeroContaCorrente").value.trim();
    const saldoCorrente = parseFloat(document.getElementById("saldoCorrente").value);
    const saldoEspecialCorrente = parseFloat(document.getElementById("saldoEspecialCorrente").value);

    // Pegar dados inputs Conta Poupança
    const nomePoupanca = document.getElementById("nomePoupanca").value.trim();
    const bancoPoupanca = document.getElementById("bancoPoupanca").value.trim();
    const numeroContaPoupanca = document.getElementById("numeroContaPoupanca").value.trim();
    const saldoPoupanca = parseFloat(document.getElementById("saldoPoupanca").value);
    const jurosPoupanca = parseFloat(document.getElementById("jurosPoupanca").value);
    const dataVencimentoPoupanca = document.getElementById("dataVencimentoPoupanca").value;

    // Criar objetos com os dados
    const contaCorrente = new Corrente(nomeCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, saldoEspecialCorrente);
    const contaPoupanca = new Poupanca(nomePoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, jurosPoupanca, dataVencimentoPoupanca);

    // Montar resultado
    const resultado = `
Conta Corrente:
Nome: ${contaCorrente.nome}
Banco: ${contaCorrente.banco}
Número da Conta: ${contaCorrente.numeroConta}
Saldo: R$${contaCorrente.saldo.toFixed(2)}
Saldo Especial: R$${contaCorrente.saldoEspecial.toFixed(2)}

Conta Poupança:
Nome: ${contaPoupanca.nome}
Banco: ${contaPoupanca.banco}
Número da Conta: ${contaPoupanca.numeroConta}
Saldo: R$${contaPoupanca.saldo.toFixed(2)}
Juros: ${(contaPoupanca.juros * 100).toFixed(2)}%
Data de Vencimento: ${contaPoupanca.dataVencimento}
    `;

    document.getElementById("saida").textContent = resultado;
  }

  function voltar() {
    window.location.href = "index.html";
  }