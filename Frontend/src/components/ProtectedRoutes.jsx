
// import React, { useContext, useEffect } from 'react'
// import { AuthContext } from '../context/AuthContext';
// import toast from 'react-hot-toast';
// import Loader from './Loader';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoutes = ({ children }) => {

//     const { loading, isAuthenticated } = useContext(AuthContext);

//     useEffect(() => {
//         if(!loading && !isAuthenticated) {
//             toast.error("Please login to access your dashboard.");
//         }
//     }, [loading, isAuthenticated]);

//     if(loading){
//         return "Please wait..."
//     }

//     if(!isAuthenticated){
//         return <Navigate to="/login" replace />
//     }

//     return children;
// }

// export default ProtectedRoutes;


import React, { useContext, useEffect } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { loading, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error("Please login to access your dashboard.");
    }
  }, [loading, isAuthenticated]);

  // Premium Whisperly loading screen
  if (loading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFBF5] px-5 py-10 text-[#173D32]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(#A7B9AC 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="absolute left-1/2 top-[-180px] h-80 w-80 -translate-x-1/2 rounded-full bg-[#DCE9D8]/70 blur-[100px]" />

          <div className="absolute bottom-[-150px] right-[-100px] h-72 w-72 rounded-full bg-[#F8E7C9]/70 blur-[100px]" />
        </div>

        {/* Loading content */}
        <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-10 inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#173D32] bg-[#064E3B] text-[#F8E7C9] shadow-[4px_4px_0_#173D32]">
              <MessageCircle size={25} strokeWidth={2} />
            </div>

            <span className="text-2xl font-black tracking-tight">
              whisperly<span className="text-[#C49A54]">.</span>
            </span>
          </div>

          {/* Loader icon */}
          <div className="relative mb-7 flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-[#DCE9D8] border-t-[#064E3B]" />

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#173D32] bg-white shadow-[4px_4px_0_#DCE9D8]">
              <ShieldCheck
                size={30}
                strokeWidth={1.8}
                className="text-[#064E3B]"
              />
            </div>

            <Sparkles
              size={18}
              className="absolute -right-1 -top-1 text-[#C49A54]"
            />
          </div>

          <span className="rounded-full border border-[#D5DFD3] bg-[#EDF3E9] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#064E3B]">
            Secure session
          </span>

          <h1 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
            Just a moment...
          </h1>

          <p className="mt-3 max-w-xs text-sm leading-6 text-[#65766B]">
            We're checking your session and getting your private
            Whisperly space ready.
          </p>

          {/* Progress indicator */}
          <div className="mt-7 h-1.5 w-40 overflow-hidden rounded-full bg-[#DCE9D8]">
            <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-[#064E3B]" />
          </div>

          <p className="mt-5 text-[10px] font-bold tracking-[0.16em] text-[#829187]">
            YOUR WHISPERS. YOUR SPACE.
          </p>
        </div>

        {/* Progress animation */}
        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}</style>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;