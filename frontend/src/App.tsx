import Header from "./components/Layout/Header";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

export default App;
