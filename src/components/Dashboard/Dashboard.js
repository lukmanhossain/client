
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "../Admin/AddProduct/AddProduct";
import ManageOrder from "../Admin/ManageOrder/ManageOrder";
import ManageProduct from "../Admin/ManageProduct/ManageProduct";
import DashboardHome from "./DashboardHome";
import './Dashboard.css'
import { AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { MdAddTask, MdOutlineLocalOffer } from "react-icons/md";
import { GrDocumentStore, GrUserAdmin } from "react-icons/gr";
import Delevery from "../Admin/Delevery/Delevery";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";

const Dashboard = () => {




    return (

        <div className="mx-5 mt-5">
            <div className="row mb-5">
                <div className="col-lg-2 menu-list">
                    <ul>
                        <li><Link className="nav-link-dashbord" to="DashboardHome"><AiOutlineHome /> Home </Link></li>

                        <li><Link className="nav-link-dashbord" to="AddProduct"> <AiOutlineAppstoreAdd />  AddProduct </Link></li>
                        <li><Link className="nav-link-dashbord" to="ManageOrder"><GrDocumentStore /> ManageOrder </Link></li>
                        <li><Link className="nav-link-dashbord" to="ManageProduct"><RiProductHuntLine />  ManageProduct </Link></li>
                        <li><Link className="nav-link-dashbord" to="Delivery"><MdAddTask />  Delivery </Link></li>
                        <hr />
                        <li><Link className="nav-link-dashbord" to="HotOffer"><MdOutlineLocalOffer /> Hot Offer </Link></li>
                        <li><Link className="nav-link-dashbord" to="Customers"><AiOutlineUsergroupAdd /> Customers </Link></li>
                        <li><Link className="nav-link-dashbord" to="MakeAdmin"><GrUserAdmin /> Make Admin </Link></li>
                    </ul>
                </div>
                <div className="col-lg-10">
                    <Routes>
                        <Route path="DashboardHome" element={<DashboardHome />} />
                        <Route path="AddProduct" element={<AddProduct />} />
                        <Route path="ManageOrder" element={<ManageOrder />} />
                        <Route path="ManageProduct" element={<ManageProduct />} />
                        <Route path="Delivery" element={<Delevery />} />
                        <Route path="makeadmin" element={<MakeAdmin />} />

                    </Routes>
                </div>

            </div>
        </div>


    );
};

export default Dashboard;