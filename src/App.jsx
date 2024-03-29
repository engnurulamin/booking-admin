import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  hotelInputs,
  productInputs,
  roomInputs,
  userInputs,
} from "./sources/formsource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import { hotelColumns, roomColumns, userColumns } from "./sources/dtsource.jsx";
import NewHotel from "./pages/newHotel/NewHotel.jsx";
import NewRoom from "./pages/newRoom/NewRoom.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path=":hotelId" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewHotel inputs={hotelInputs} title="Add New Hotel" />
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path=":roomId" element={<Single />} />
              <Route
                path="new"
                element={<NewRoom inputs={roomInputs} title="Add New Room" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
