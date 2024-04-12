// "use client";
// import { useEffect, useState } from "react";
// import axios, { AxiosError } from "axios";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { IoMdEyeOff, IoMdEye } from "react-icons/io";
// import { useToast } from "@/components/ui/use-toast";
// import { jwtDecode } from "jwt-decode";
// import ThemeSwitcher from "@/components/ThemeSwitcher";
// import { useAuth } from "@/components/context/AuthContext";
// const URL: string = process.env.NEXT_PUBLIC_BASE_URL
//   ? process.env.NEXT_PUBLIC_BASE_URL
//   : "https://api.omnileadz.com";

// const initialState = {
//   username: "",
//   password: "",
// };

// interface ILoginStateProps {
//   username: string;
//   password: string;
// }

// const Page: React.FC = () => {
//   const { toast } = useToast();
//   //   const dispatch = useAppDispatch();
//   const [showPassword, setShowPassWord] = useState(false);
//   const [values, setValues] = useState<ILoginStateProps>(initialState);
//   const [isLoading, setIsLoading] = useState(false);
//   const route = useRouter();
//   const router = useRouter();
//   const { user, login, logout } = useAuth();
//   useEffect(() => {
//     function logOut(dataToDesplay = "Session Expire") {
//       localStorage.clear();
//       logout();
//       router.replace("/login");
//     }
//     async function extractDataFromJWT() {
//       let accessToken = localStorage.getItem("accessToken");
//       let expireAccessToken = localStorage.getItem("expiresIn");

//       if (expireAccessToken) {
//         if (Number(expireAccessToken) < Number(Date.now())) {
//           logout();
//         }
//       }
//       if (!accessToken) {
//          logout();
//       }
//       if (accessToken) {
//         try {
//           const decodedToken: {
//             feature: string;
//             sub: string;
//             business: string;
//           } = jwtDecode(accessToken);
//           if (
//             decodedToken &&
//             decodedToken.feature &&
//             decodedToken.sub &&
//             decodedToken.business
//           ) {
//             const updatedUser = {
//               feature: decodedToken.feature,
//               userId: decodedToken.sub,
//               business: decodedToken.business,
//             };
//             login(updatedUser);
//             router.push("/dashboard")
//             toast({
//               variant: "default",
//               description: "Logged In Successfull!",
//             });
//           } else {
//             logOut();
//           }
//         } catch (error) {
//           console.error("Error decoding token:", error);
//           logOut();
//         }
//       }
//     }

//     extractDataFromJWT();

//     let timeoutId = setTimeout(() => {
//       // dispatch(updateMainLoaderValue(false));
//     }, 1000);

//     return () => clearTimeout(timeoutId);
//   }, []);
 
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = async () => {
//     if (!values.username.trim() || !values.password.trim()) {
//       //  notificationComponent("Ckeck Your Fields...","danger")
//       toast({
//         variant: "destructive",
//         title: "Uh oh! Something went wrong.",
//         description: "Check Your Fields...",
//       });
//     } else {
//       try {
//         setIsLoading(true);
//         setShowPassWord(false);
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
//           values,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setValues(initialState);
//         const { accessToken, expiresIn, refreshToken, refreshTokenExpiry } =
//           await response.data;

//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("refreshToken", refreshToken);
//         localStorage.setItem("accessTokenExpiry", expiresIn);
//         localStorage.setItem("refreshTokenExpiry", refreshTokenExpiry);
//         // notificationComponent("Logged In Successfully...","success")
//         toast({
//           variant: "default",
//           description: "Logged In Successfull!",
//         });
//         router.push("/dashboard");
//       } catch (error) {
//         if (error instanceof AxiosError) {
//           const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             "Network Issue Try Later!";
//           // notificationComponent(message,"danger")
//           toast({
//             variant: "destructive",
//             title: "Uh oh! Something went wrong.",
//             description: "Network Issue Try Later!",
//           });
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <>
//       {/* main container */}
//       <main className="h-screen w-full flex items-center justify-center bg-background relative ">
//         <div className="absolute top-3 right-3 md:top-4 md:right-4">
//           <ThemeSwitcher />
//         </div>
//         <div className="h-full w-full   md:flex ">
//           <div className="h-full flex  items-center justify-center flex-col  w-full lg:w-[47%] ">
//             <div className="h-[85%] shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[75%] flex rounded-lg bg-card flex-col items-center ">
//               {/* logo div */}
//               <div className="h-1/4 text-5xl flex items-center  font-semibold">
//                 <section className="flex cursor-pointer  h-full w-fit justify-center items-center text-lg flex-nowrap">
//                   <Image
//                     className={`md:w-16 w-14 transition-all duration-500`}
//                     src="/favicon_io/android-chrome-512x512.png"
//                     alt="O"
//                     height={100}
//                     width={100}
//                   />
//                   <h1 className="md:text-5xl text-3xl font-semibold ">
//                     mniformz
//                   </h1>
//                 </section>
//               </div>
//               <div className="w-[80%]">
//                 <p className=" text-4xl font-semibold tracking-wider self-start ">
//                   Login
//                 </p>
//               </div>
//               <div
//                 className="w-[80%] md:w-[80%] my-10 flex flex-col space-y-4"
//                 // onSubmit={formFunction}
//               >
//                 {/* <FormRow
//                   type="text"
//                   name="username"
//                   value={values.username}
//                   labelText="Email, Username or Mobile Number"
//                   handleChange={handleChange}
//                 /> */}
//                 <div className="flex flex-col  w-full  sm:text-sm text-xs">
//                   <label
//                     htmlFor="username"
//                     className="capitalize tracking-wide"
//                   >
//                     {"Email, Username or Mobile Number"}
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     value={values.username}
//                     placeholder="Email, Username or Mobile Number"
//                     onChange={handleChange}
//                     className="rounded-lg p-2 mt-1 border-2 outline-none  "
//                   />
//                 </div>
//                 {/* <FormRow
//                   type="password"
//                   name="password"
//                   value={values.password}
//                   labelText="Password"
//                   handleChange={handleChange}
//                 /> */}
//                 <div className=" flex flex-col w-full  sm:text-sm text-xs">
//                   <label htmlFor="name" className=" capitalize tracking-wide">
//                     {"Password"}
//                   </label>
//                   <div className="border-[2px] relative rounded-lg mt-1  h-10   flex w-full">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       className="w-full rounded-lg pl-2 border-0 outline-none "
//                       value={values.password}
//                       onChange={handleChange}
//                     />
//                     <button
//                       className="absolute right-1 top-[35%] scale-110 mr-1"
//                       onClick={() => setShowPassWord(!showPassword)}
//                     >
//                       {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="text-center  w-full">
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isLoading}
//                     className={`capitalize px-7 mt-2 py-2  tracking-wider rounded-md bg-[#3aaa11] text-white w-full text-lg ${
//                       isLoading
//                         ? "bg-[#caf7ba] cursor-not-allowed"
//                         : "bg-[#3aaa11] active:bg-[#49c91b]"
//                     }`}
//                   >
//                     {isLoading ? <div className="">Loading...</div> : "Sign In"}
//                   </button>
//                 </div>
//               </div>
//               <div className="w-full  flex flex-col items-center justify-center">
//                 <h2 className="absolute text-md mb-1 bg-card p-1 text-gray-400">
//                   or
//                 </h2>
//                 <div className="h-[1.5px] w-[80%] sm:w-[80%] md:w-[80%]  bg-gray-300"></div>
//               </div>

//               <div className="mt-10 text-sm">
//                 <p className="text-gray-700">
//                   {"Not a member yet ? "}
//                   <button
//                     type="button"
//                     className="text-[#37a110] font-semibold underline"
//                   >
//                     Register
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="hidden lg:flex w-[42%] items-center justify-center">
//             <img
//               src="https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1709716720336_Task-bro-min.png"
//               alt={"login"}
//             />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Page;
import React from 'react'

const page = () => {
  return (
    <div>
      Login
    </div>
  )
}

export default page
