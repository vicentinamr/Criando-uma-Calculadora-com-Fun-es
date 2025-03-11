// Funções da calculadora
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// Função principal para calcular
function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operation").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Digite números válidos!";
    } else {
        switch (operacao) {
            case "+":
                resultado = soma(num1, num2);
                break;
            case "-":
                resultado = subtracao(num1, num2);
                break;
            case "*":
                resultado = multiplicacao(num1, num2);
                break;
            case "/":
                resultado = divisao(num1, num2);
                break;
            default:
                resultado = "Operação inválida!";
        }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
