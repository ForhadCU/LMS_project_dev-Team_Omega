import { MainLayout } from "./layouts/MainLayout";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <PrivateRoute>
      <MainLayout />;
    </PrivateRoute>
  );
}

export default App;
