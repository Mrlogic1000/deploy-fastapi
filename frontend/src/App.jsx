import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Devices, {loader as deviceLoader, action as deviceAction} from "./pages/Devices";
import DeviceDetail,{loader as DeviceDetailsLoader} from "./pages/DeviceDetail";
import Report from "./pages/Report";
import Rooms,{loader as roomLoader} from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import AddDevice from "./pages/AddDevice";
import DeviceLayout from "./layout/DeviceLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route   >

        <Route  element={<AuthLayout />}>
        <Route path="/" element={<DeviceLayout/>}>

        <Route  index element={<Devices />} loader={deviceLoader} action={deviceAction}/>        
        <Route path=":id" element={<DeviceDetail/>} loader={DeviceDetailsLoader}/>
        <Route path="/create_device" element={<AddDevice/>} />
        </Route>
      

        <Route path="/rooms" element={<Rooms/>} loader={roomLoader}  >
        </Route>
        <Route path="rooms/:id" element={<RoomDetails/>} />

        {/* <Route path="/decoders" element={<Devices />} loader={deviceLoader} action={deviceAction} errorElement={<p>No Please check your internet</p>} >
        <Route path=":id" element={<DeviceDetail/>} loader={DeviceDetailsLoader}/>
        </Route>
        <Route path="/services" element={<Devices />} loader={deviceLoader} action={deviceAction} errorElement={<p>No Please check your internet</p>} >
        <Route path=":id" element={<DeviceDetail/>} loader={DeviceDetailsLoader}/>
        </Route>
        
        <Route path="/Tasks" element={<Devices />} loader={deviceLoader} action={deviceAction} errorElement={<p>No Please check your internet</p>} >
        <Route path=":id" element={<DeviceDetail/>} loader={DeviceDetailsLoader}/>
        </Route> */}

        <Route path="/reports" element={<Report />}  />
        </Route>

        

        
       
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
