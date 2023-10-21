import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import Entry from './pages/entry/entry.page';
function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
