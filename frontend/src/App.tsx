import DesktopMenu from "./components/Layout/DesktopMenu";
import Header from "./components/Layout/Header";
import MobileBottomMenu from "./components/Layout/MobileBottomMenu";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <DesktopMenu />
      <MobileBottomMenu />
    </AppProvider>
  );
}

export default App;
