import {input} from "./input.js";

function print(entrada) {
    console.log(entrada);
}

var idade = await input("Digite a idade: ");

if (idade >= 18) {
    print("Aluno maior (>) de idade.");
} 
   else {
    print("Aluno menor (<) de idade.");
}
