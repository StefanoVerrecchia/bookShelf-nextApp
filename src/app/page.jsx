
import { AppProvider } from './context/AppState'
import Layout from "./components/Layout";
export default function Home() {
  return (
    <main>
      <AppProvider>
          <h1>BENVENUTO</h1>
      </AppProvider>
    </main>
  );
}
