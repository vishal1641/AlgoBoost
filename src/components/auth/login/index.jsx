// import React, { useState } from "react";
// import { Navigate, Link } from "react-router-dom";
// import {
//   doSignInWithEmailAndPassword,
//   doSignInWithGoogle,
// } from "../../../firebase/auth";
// import { useAuth } from "../../../contexts/authContext";

// const Login = () => {
//   const { userLoggedIn } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSigningIn, setIsSigningIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       await doSignInWithEmailAndPassword(email, password).catch((err) => {
//         setErrorMessage(err.message);
//         setIsSigningIn(false);
//       });
//     }
//   };

//   const onGoogleSignIn = (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       doSignInWithGoogle().catch((err) => {
//         setErrorMessage(err.message);
//         setIsSigningIn(false);
//       });
//     }
//   };

//   return (
//     <div>
//       {userLoggedIn && <Navigate to={"/home"} replace={true} />}

//       <main className="w-full h-screen max-w-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 relative">
//         {/* Circular divs */}
//         <div className="absolute top-0 left-1/4 transform -translate-x-1/2 w-40 h-40 bg-indigo-500 rounded-full opacity-50"></div>
//         <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-48 h-48 bg-pink-500 rounded-full opacity-40"></div>
//         <div className="absolute top-1/4 right-0 transform translate-x-1/2 w-32 h-32 bg-yellow-500 rounded-full opacity-60"></div>

//         <div className="w-96 p-6 shadow-lg rounded-3xl z-10 backdrop-blur-lg bg-white/20 border border-white/30 text-gray-200">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-indigo-300">Welcome Back</h3>
//             <p className="text-sm text-gray-400 mt-1">Sign in to continue</p>
//           </div>
//           <form onSubmit={onSubmit} className="space-y-6 mt-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mt-2 px-4 py-3 bg-gray-50/40 backdrop-blur-lg border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mt-2 px-4 py-3 bg-gray-50/40 backdrop-blur-lg border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
//               />
//             </div>
//             {errorMessage && (
//               <p className="text-red-500 text-sm">{errorMessage}</p>
//             )}
//             <button
//               type="submit"
//               disabled={isSigningIn}
//               className={`w-full px-4 py-3 text-white font-medium rounded-full shadow-lg ${
//                 isSigningIn
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800"
//               } transition duration-300`}
//             >
//               {isSigningIn ? "Signing In..." : "Sign In"}
//             </button>
//           </form>
//           <p className="text-center text-sm mt-4">
//             Don't have an account?{" "}
//             <Link
//               to={"/register"}
//               className="text-indigo-300 font-bold hover:underline"
//             >
//               Sign up
//             </Link>
//           </p>
//           <div className="flex items-center my-6">
//             <div className="border-b w-full"></div>
//             <span className="px-3 text-sm font-medium text-gray-500">OR</span>
//             <div className="border-b w-full"></div>
//           </div>
//           <button
//             disabled={isSigningIn}
//             onClick={onGoogleSignIn}
//             className={`w-full flex items-center justify-center gap-x-3 py-3 border rounded-full text-sm font-medium ${
//               isSigningIn
//                 ? "cursor-not-allowed bg-gray-100"
//                 : "hover:bg--50 transition duration-300 active:bg-gray-100"
//             }`}
//           >
//             <svg
//               className="w-5 h-5"
//               viewBox="0 0 48 48"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clipPath="url(#clip0_17_40)">
//                 <path
//                   d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
//                   fill="#000000" // Changed to black
//                 />
//                 <path
//                   d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
//                   fill="#000000" // Changed to black
//                 />
//                 <path
//                   d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.4198 11.0051 19.4392V19.4392Z"
//                   fill="#000000" // Changed to black
//                 />
//               </g>
//             </svg>
//             <span className="text-sm">Sign in with Google</span>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;

