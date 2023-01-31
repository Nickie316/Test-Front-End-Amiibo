# Giorgio - Entrevista Front-end

## No diretório do projeto, execute:

## `npm install`
e depois
## `npm start`
O aplicativo entrará no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.
Você também poderá ver quaisquer erros de formatação no console.

## Proposta

Utilizar o template provido para realizar o seguinte projeto:

![ezgif-4-c658cebbed](https://user-images.githubusercontent.com/65265545/215001686-3309033e-e21a-48a2-af83-068a3e14139a.gif)

Uma página web com uma listagem dos amiibos do jogo Super Smash Bros., utilizando a [API amiibo](https://www.amiiboapi.com) aberta ou com o json no diretório com as mesmas informações. A página também deve conter uma caixa de texto para filtrar por nome.

Segue abaixo o figma para o projeto

## [Figma Entrevista Front-end](https://www.figma.com/file/hWJlqW5OYClhTw42Z5RJWg/Giorgio---Entrevista-Front-end?node-id=0%3A1&t=797VYI6tA9Tw3JVR-1)



## O que é React

React é uma biblioteca JavaScript para criar interfaces de usuário. O React utiliza uma abordagem de construção de componentes, onde cada componente é responsável por renderizar uma parte da interface do usuário. Isso permite que a aplicação seja dividida em pequenos componentes reutilizáveis, facilitando a manutenção e escalabilidade do código.

## Quando usar React:

Quando você precisa construir uma aplicação web com uma interface complexa.
Quando você precisa criar componentes reutilizáveis.
Quando você precisa gerenciar o estado da aplicação de forma eficiente.

## Principais Hooks do React:

### useState
O hook useState é usado para gerenciar o estado de um componente. Ele é uma função que retorna um array com duas posições: o valor atual do estado e uma função para atualizá-lo.
```
const [count, setCount] = useState(0);
```

### useEffect
O hook useEffect é usado para gerenciar efeitos colaterais em um componente, como requisições de rede, eventos de DOM e assinaturas de eventos. Ele é chamado após cada renderização do componente, e pode ser usado para atualizar o estado ou fazer alguma outra ação.
```
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

### useContext
O hook useContext é usado para acessar o contexto de um componente. Ele é uma função que retorna o valor atual do contexto.
```
const theme = useContext(ThemeContext);
```

### useRef
O hook useRef é usado para armazenar uma referência a um elemento do DOM ou a outro valor. Ele é uma função que retorna um objeto Ref com uma propriedade current que pode ser usada para armazenar a referência.
```
const inputRef = useRef(null);
```

### useCallback
O hook useCallback é usado para criar funções que só são recriadas quando alguma das dependências mudar. Ele retorna uma função criada com base nas dependências passadas para ele, evitando que a função seja recriada desnecess
```
const handleClick = useCallback(() => {
    console.log(someValue);
  }, [someValue]);
```

### useCallback
useMemo é um hook que permite que você memorize o valor de uma expressão, evitando recalcular-la sempre que alguma dependência for atualizada. Isso pode ajudar a melhorar o desempenho do seu aplicativo, especialmente quando se trabalha com componentes complexos ou componentes que precisam processar grandes quantidades de dados.
```
const someComputation = useMemo(() => {
    // Faz algum cálculo com someValue e otherValue
    return someValue * otherValue;
  }, [someValue, otherValue]);
```
