# React Native Basic Implementations

<p align="center">
  <img src="https://github.com/lumamontes/react-native-basic-implementations/assets/60052718/6ded4d39-c019-4c2a-b28b-e0f320e086c1"  width=300 />
</p>
Este repositório contém exemplos de funcionalidades básicas no React Native, com a finalidade de exemplificar a implementação pelo código. Todos os exemplos têm links diretos para a respectiva documentação!

## 💻 Tech

- [Expo](https://docs.expo.dev/)
- [Typescript](https://www.typescriptlang.org/docs/)

## Funcionalidades

- Pull to refresh (puxar a tela pra baixo para atualizar o conteúdo)
- Swipe to action (deslize um item para o lado com a finalidade de realizar alguma ação)
- Drag and drop to reorder (Segure um item de uma lista e arraste para reordenar)
- Expandable list (lista de itens que podem ser expandidos para exibir mais conteúdo)

## Rodar localmente

1. Clone o repositório

```
  git clone git@github.com:lumamontes/react-native-basic-implementations.git
```

2. Instale as dependências

```
  npm install
```

3. Inicie o servidor

```
  npx expo start
```

## Internacionalização com <u>expo-localization</u>, <u>react-i17next</u> e <u>i18next</u>

Este projeto utiliza as bibliotecas <kbd>expo-localization</kbd>,<kbd>react-i17next</kbd> e <kbd>i18next</kbd>, para suportar diversos idiomas. A implementação permite detectar o idioma do dispositivo automaticamente e também selecionar qual melhor lhe atende.

### Bibliotecas utilizadas

1. [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)

- Detecta informações de localização, como o idioma e a região do dispositivo. Facilitando a definição do idioma padrão e/ou inicial.

2. [react-i18next](https://react.i18next.com/)

- Complemento para integrar com <kbd>i18next</kbd>, permitindo usar hooks como <kbd>useTranslation</kbd> e contexto como <kbd>I18nextProvider</kbd> para acessar traduções em telas e componentes.

3. [i18next](https://www.i18next.com/)

- Gerenciador de internacionalização que suporta recursos como namespaces, interpolação de variáveis e fallback de idiomas.

### Estrutura de Pastas

📂 src/ <br>
┣ 📂 locales/ <br>
┃ ┣ 📂 en/ <br>
┃ ┃ ┃ ┗📂 screens<br>
┃ ┃ ┃ ┃ ┗ home.json<br>
┃ ┃ ┗ index.js -> Traduções em inglês <br>
┃ ┣ 📂 pt/ <br>
┃ ┃ ┃ ┗📂 screens<br>
┃ ┃ ┃ ┃ ┗ home.json<br>
┃ ┃ ┗ index.js -> Traduções em português <br>
┗ i18n.js

Para cada idioma que deseja fazer com que a aplicação suporte, adicione dentro da pasta de <kbd>locales</kbd>. Dentro dela encontra-se uma pasta <kbd>screens</kbd> que centraliza os arquivos jsons. A pasta é para adicionar um arquivo em json para cada nova tela que deseja que suporte os idiomas e, isso inclui componentes que que sua nova tela importa. Você também pode adicionar um unico arquivo para modulo (se aplicação for ter futuramente). <br>
O arquivo <kbd>index.ts</kbd> importa e exporta os arquivos json adicionados na pasta <kbd>screens</kbd>. E não exporta **default** para mater o padrão nomeado em sua exportação. <br>

**Importante lembrar que a cada arquivo json novo seu nome se mantém o mesmo para as outras pastas de idiomas e as chaves definida no arquivo json também tem que ser a mesma.** Por exemplo:

<kbd>locales/en/screens/settings.json</kbd>

```
{
  "welcome_message": "Welcome to the Home screen!",
  "button_text": "Click Here"
}
```

<kbd>locales/pt/screens/settings.json</kbd>

```
{
  "welcome_message": "Welcome to the Home screen!",
  "button_text": "Click Here"
}
```

#### Como Adicionar Novos Idiomas

1. Crie uma nova pasta em src/locales/ com o código do idioma (ex.: es/ para espanhol).
2. Adicione as traduções no arquivo index.js dentro da pasta do idioma.
3. Atualize o objeto resources no arquivo i18n.js com a nova entrada:

```
const resources = {
  "pt-BR": { translation: translationPt },
  "en-US": { translation: translationEn },
  "es-ES": { translation: translationEs }, // Novo idioma
};

```

## Uso

Usa-se o hook <kbd>useTranslation</kbd> da biblioteca `react-i18n` para fazer as chamadas das traduções, o <kbd>useTranslation</kbd> tem o `t` que nesse projeto sempre renomeamos para **translation**.

```
const { t: translation } = useTranslation();
```

Para usar ele é simples basta chama-lo como uma função e seu parametro é em `string`, onde primeiro passa o nome do arquivo json e em seguida a chaves. Por exemplo:

`locales/pt/screens/home.json`

```
{
"welcome_message": "Bem-vindo à tela inicial!",
"button_text": "Clique Aqui"
}
```

Chamando em seu componente ou tela:

```
export default App() {
const { t: translation } = useTranslation();

  return(
    <Text>{tranlation("home.welcome_message")}</Text>
  )
}

```

### Alterar idioma

Para alterar o idioma padrão, use o `i18n` do hook `useTranslation` e chame a função `changeLanguage()`, passando em seu parametro o código do idioma, e salve utilizando o `AsyncStorage`, para que salve no dispositivo e sobreponha o idioma padrão ao carregar o aplicativo. Por exemplo:

```
export default App() {
const { i18n } = useTranslation();

const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return(
    <TouchableOpacity
      onPress={() => changeLanguage("es-ES")}
    >
      <Text>
        Altera idioma para espanhol
      </Text>
    </TouchableOpacityxt>
  )
}

```

## Suporte a Temas Claro e Escuro

Este projeto inclui suporte a temas claro e escuro, permitindo alternar dinamicamente entre eles e salvar a preferência do usuário utilizando `AsyncStorage`. A seguir, estão os detalhes sobre a implementação.

### Definição de Cores

As cores para os temas claro e escuro estão centralizadas nos na pastas `theme` no arquivo `colors.ts` <kbd>(src/theme/colors.ts)</kbd>. Para o tema claro tem constante `LightMode` e escuro `DarkMode`. Para cada tema, foi definido um conjunto de cores específicas para diferentes elementos da interface, como texto, fundo, bordas e ícones. Exemplo:

```
const LightMode = {
  primary: "#FEFEFE",
  secondary: "#497AFC",
  background: "#F2F2F2",
  text: "#161616",
  // outras cores...
};

const DarkMode = {
  primary: "#101010",
  secondary: "#497AFC",
  background: "#202020",
  text: "#FFFFFF",
  // outras cores...
};

```

E no arquivo `colors.ts` há uma Arrow Function que retorna as cores baseada no tema: Exemplo:

```
export const ThemeColors = (theme: string) => ({
  primary: theme === "light" ? LightMode.primary : DarkMode.primary,
  background: theme === "light" ? LightMode.background : DarkMode.background,
  text: theme === "light" ? LightMode.text : DarkMode.text,
  // outras propriedades...
});

```

### Contexto e Hook para Gerenciar o Tema

O contexto foi implementado para armazenar o estado do tema e permitir a lternância entre claro e escuro. Ele utiliza `AsyncStorage` para salvar a preferência do usuário e recuperá-la ao inicializar a aplicação.

#### Definição do Contexto:

```
interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextData {
  theme: string;
  toggleTheme: (themeMode: string) => void;
}

const ThemeContext = createContext({} as ThemeContextData);
```

#### Provedor do Tema:

```
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');
  const { setItem, getItem } = AsyncStorageService;

  const toggleTheme = async (themeMode: string) => {
    await setItem("theme", themeMode);
    setTheme(themeMode);
  };

  useEffect(() => {
    getItem("theme")
      .then((resp) => setTheme(resp || "light"))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### Hook Personalizado:

```
export const useTheme = () => useContext(ThemeContext);
```

### Como utilizar

O hook que compartilhamos `useTheme()` fornece o `theme` e `toggleTheme`:

- **theme**: fornece o tema atual da aplicação;
- **toggleTheme**: é a função para alterar o tema, e em sua chamada passa-se o parameto em `string` com o tipos: `light` ou `dark`.

Com o `theme` que fornece o tema atual, utilizamos a função `ThemeColors` exportada do arquivo `colors.ts`, passamos o `theme` como parametro na função `ThemeColors(theme)` e acessamos a cor que desejamos utilizar. Exemplo:

```
const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const colors = ThemeColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Tema Atual: {theme}</Text>
      <Button
        title="Alternar Tema"
        onPress={() => toggleTheme(theme === "light" ? "dark" : "light")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
```

## Contribuindo

Contribuições são sempre bem-vindas :) Se você deseja contribuir, sinta-se à vontade para enviar um pull request.
