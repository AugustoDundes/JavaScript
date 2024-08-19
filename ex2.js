
    let x = prompt("Digite um número inteiro positivo:", "");
    x = Number(x);

    let isPrime = true;

    if (x === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        alert(x + " é um número primo!");
    } else {
        alert(x + " não é um número primo!");
    }
   