import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./screens/LayoutWrapper";
import Home from "./screens/HomePage";
import Details from "./screens/DetailsPage";
import Login from "./screens/LoginPage";
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user.user);

  return (
    <Routes>
  
      <Route
        path="/"
        // element={!user ? <Login /> : <Navigate to="/docnova" replace />}
        element={<Login /> }
      />


      <Route element={<Layout />}>
        <Route
          path="/docnova"
          // element={user ? <Home /> : <Navigate to="/" replace />}
          element={<Home />}
        />
        <Route
          path="/details"
          // element={user ? <Details /> : <Navigate to="/" replace />}
          element={<Details />}
        />
      </Route>


      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
