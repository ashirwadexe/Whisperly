import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MessageForm from "./pages/MessageForm";
import DashboardLayout from "./pages/DashboardLayout ";
import Dashboard from "./pages/Dashboard";
import NotFound404 from "./pages/NotFound404";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Messages from "./pages/Messages";
import Favourites from "./pages/Favourites";
import MyLink from "./pages/MyLink";
import DeleteAccount from "./pages/DeleteAccount";
import Settings from "./pages/Settings";
import InstallPrompt from "./components/InstallPrompt";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#FDFBF5",
            color: "#064E3B",
            border: "2px solid #064E3B",
            borderRadius: "2px",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "800",
            fontFamily: "inherit",
            boxShadow: "4px 4px 0px #064E3B",
            maxWidth: "calc(100vw - 32px)",
          },

          success: {
            duration: 3000,
            iconTheme: {
              primary: "#064E3B",
              secondary: "#F8E7C9",
            },
            style: {
              background: "#F8E7C9",
              color: "#064E3B",
              border: "2px solid #064E3B",
              borderRadius: "2px",
              boxShadow: "4px 4px 0px #064E3B",
            },
          },

          error: {
            duration: 4000,
            iconTheme: {
              primary: "#D97745",
              secondary: "#FDFBF5",
            },
            style: {
              background: "#FDFBF5",
              color: "#064E3B",
              border: "2px solid #D97745",
              borderRadius: "2px",
              boxShadow: "4px 4px 0px #D97745",
            },
          },

          loading: {
            style: {
              background: "#064E3B",
              color: "#F8E7C9",
              border: "2px solid #064E3B",
              borderRadius: "2px",
              boxShadow: "4px 4px 0px #D97745",
            },
          },
        }}
      />
      <InstallPrompt />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="my-link" element={<MyLink />} />
          <Route path="settings" element={<Settings />} />
          <Route path="delete-account" element={<DeleteAccount />} />
        </Route>

        <Route path="/:username" element={<MessageForm />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};

export default App;
