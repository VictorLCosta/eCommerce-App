import Header from "./components/Layout/Header";
import MobileBottomMenu from "./components/Layout/MobileBottomMenu";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <MobileBottomMenu />
    </AppProvider>
  );
}

export default App;
