import { MainLayout } from "@/components/Layout";
import AppProvider from "@/providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <MainLayout>Teste</MainLayout>
    </AppProvider>
  );
}

export default App;
