import DesktopMenu from "./components/Layout/DesktopMenu";
import Header from "./components/Layout/Header";
import MobileBottomMenu from "./components/Layout/MobileBottomMenu";
import Overlay from "./components/Layout/Overlay";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Overlay />
      <Header />
      <DesktopMenu />
      <MobileBottomMenu />
    </AppProvider>
  );
}

export default App;
