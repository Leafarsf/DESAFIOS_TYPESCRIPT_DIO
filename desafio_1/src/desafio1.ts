///

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John"; */

interface employee {
    code: number;
    name: string;
}

let joao: employee = {
    code: 10,
    name: "João"
}

console.log(joao)

