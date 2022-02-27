import { StyledButton } from "./Components/Button.style";
import { AppContainer } from "./Components/Container.style";
import { GlobalStyles } from "./Components/GlobalStyles.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
        <StyledButton
          buttonLabel="Click Here"
          backgroundColor="violet"
        ></StyledButton>
    </AppContainer>
  );
}

export default App;
