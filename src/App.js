import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Train from "./Train";
// REGISTER
// {
//   "companyName": "Train Central",
//   "clientID": "01c49d77-1692-455a-93fc-c59e064d7bc4",
//   "clientSecret": "YWUaOHkakUxhxmqK",
//   "ownerName": "Aneesh",
//   "ownerEmail": "Anish@123",
//   "rollNo": "2000320130023"
// }

// AUTH Tocken not found

const gatTrains = async (user) => {
  const res = await fetch(`http://20.244.56.144:80/train/trains`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: "Train Central",
      ownerName: "Aneesh",
      rollNo: "2000320130023",
      ownerEmail: "Anish@123",
      accessCode: "qxrwbC",
    }),
  });
  const data = await res.json();
  console.log(data);
};

const App = () => {
  const [trains, setTrains] = useState();
  useEffect(() => {
    const trainss = gatTrains();
    setTrains(trainss);
  }, []);
  return (
    <>
      <div>hii</div>
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/train",
        element: <Train trains={trains} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
// root.render(App());
