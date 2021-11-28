import { AppUI } from './AppUI';
import { TODOProvider } from '../TodoContext'

function App() {
  return (
    <TODOProvider>
      <AppUI />
    </TODOProvider>
  );
}

export default App;
