import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import QuizzBody from "./pages/quiz";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/commencer-un-quiz",
      element: <QuizzBody />,
    },
  ]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center  bg-amber-50">
        <p className="text-5xl text-amber-800 flex justify-center items-center gap-2">
          <FaSpinner className="animate-spin" />
          <span className="text-lg">Loading</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
