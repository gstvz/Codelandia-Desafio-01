import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import { GlobalStyle, theme } from "./shared/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>      
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
