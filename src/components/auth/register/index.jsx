
// import React, { useState } from "react";
// import { Navigate, Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../contexts/authContext";
// import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";

// const Register = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const { userLoggedIn } = useAuth();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isRegistering) {
//       if (password !== confirmPassword) {
//         setErrorMessage("Passwords do not match");
//         return;
//       }
//       setIsRegistering(true);
//       try {
//         await doCreateUserWithEmailAndPassword(email, password);
//         navigate("/home");
//       } catch (error) {
//         setErrorMessage(error.message);
//         setIsRegistering(false);
//       }
//     }
//   };

//   return (
//     <>
//       {userLoggedIn && <Navigate to={"/home"} replace={true} />}

//       <main className="w-full h-screen max-w-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 relative">
//         {/* Circular divs */}
//         <div className="absolute top-0 left-1/4 transform -translate-x-1/2 w-40 h-40 bg-indigo-500 rounded-full opacity-50"></div>
//         <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-48 h-48 bg-pink-500 rounded-full opacity-40"></div>
//         <div className="absolute top-1/4 right-0 transform translate-x-1/2 w-32 h-32 bg-yellow-500 rounded-full opacity-60"></div>

//         <div className="w-96 p-6 shadow-lg rounded-3xl z-10 backdrop-blur-lg bg-white/20 border border-white/30 text-gray-200">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-indigo-300">
//               Create Account
//             </h3>
//             <p className="text-sm text-gray-400 mt-1">Sign up to continue</p>
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
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full mt-2 px-4 py-3 bg-gray-50/40 backdrop-blur-lg border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
//               />
//             </div>
//             {errorMessage && (
//               <p className="text-red-500 text-sm">{errorMessage}</p>
//             )}
//             <button
//               type="submit"
//               disabled={isRegistering}
//               className={`w-full px-4 py-3 text-white font-medium rounded-full shadow-lg ${
//                 isRegistering
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800"
//               } transition duration-300`}
//             >
//               {isRegistering ? "Registering..." : "Register"}
//             </button>
//           </form>
//           <p className="text-center text-sm mt-4">
//             Already have an account?{" "}
//             <Link
//               to={"/login"}
//               className="text-indigo-300 font-bold hover:underline"
//             >
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Register;
