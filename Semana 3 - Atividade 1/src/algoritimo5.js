const users = [ //Declara um array de objetos
    {firstName: "john", lastName: "colben", age: 26},
    {firstName: "jimmy", lastName: "fred", age: 75},
    {firstName: "sam", lastName: "boston", age: 50},
    {firstName: "ronald", lastName: "bristh", age: 26},   
  ];
  const output = users.map((x) => x.firstName + " " + x.lastName);// Usa p map com um arrow function para concatenar o firtName e o lastName
  console.log(output);//Exibe a concatenação