import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup, { loginaction } from "./components/Signup";
import firebase, { db } from "./FirebaseConfig";
import FirebaseAuthService from "./FirebaseAuthService";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./FirebaseConfig";
import { getDatabase, ref, child, get } from "firebase/database";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userparam) => {
    setUser(userparam);
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          loader: () => {
            console.log(user);
            if (user) {
              return redirect("/home");
            }
            return null;
          },
          element: <Signup></Signup>,
          action: loginaction,
        },
      ],
    },
    {
      path: "/home",
      id: "home",
      element: <HomeLayout></HomeLayout>,
      loader: async () => {
        if (!user) {
          return redirect("/");
        }
        try {
          const snapshot = await get(child(ref(db), `users/${user.uid}`));
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val();
          } else {
            console.log("No data available");
            return null;
          }
        } catch (error) {
          console.error(error);
          throw Error("couldn't get Data");
        }
      },
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
