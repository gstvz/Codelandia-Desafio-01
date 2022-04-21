import { ThemeProvider } from "styled-components";
import { Layout, Section } from "@components";
import { GlobalStyle, theme } from "@styles";

function App() {
  return (
    <ThemeProvider theme={theme}>      
      <Layout>
        <Section /> 
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
