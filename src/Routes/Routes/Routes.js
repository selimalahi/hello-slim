import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Product from './../../Pages/Product/Product';
// import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from './../../Layout/DashboardLayout';
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
// import AllUsers from "../../Pages/Dashboard/AllUsersAndSeller/AllUsersAndSeller";
import AllUsersAndSeller from "../../Pages/Dashboard/AllUsersAndSeller/AllUsersAndSeller";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import PrivateRoutes from './../PrivateRotes/PrivateRoute';



 const router =createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       errorElement:<DisplayError></DisplayError>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/product/:id',
            element:<Product></Product>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            
        }
       ] 
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout>,</PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            // {
            //     path:'/dashboard',
            //     element:<h1>hello</h1>
            // },
            {
                path:'/dashboard/myorders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsersAndSeller></AllUsersAndSeller></AdminRoute>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
        
            {
                path:'/dashboard/addproducts',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
                
            }

        ]
    },
    {path:'*',element:<Error></Error>}, 
])
export default router;