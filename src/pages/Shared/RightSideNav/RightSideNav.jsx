import { FaGoogle } from "react-icons/fa";
import { FaGithub,FaFacebook, FaTwitter ,FaInstagram} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
          <div className="p-4 mb-6">
          <h2 className="text-3xl">Login With</h2>
            <button className="btn btn-outline w-full my-3">
                <FaGoogle />
                Login With Google
            </button>
            <button className="btn btn-outline w-full ">
            <FaGithub />
                Login With GitHub
            </button>
          </div>
          <div className="p-4 mb-6">
          <h2 className="text-3xl mb-3">Find Us On</h2>
            <div className="border rounded-lg">
            <a href="" className="p-4 flex items-center gap-2 text-lg">
                <FaFacebook></FaFacebook>
                Facebook
            </a>
            <a href="" className="p-4 flex items-center gap-2 text-lg">
                <FaTwitter></FaTwitter>
                Twitter
            </a>
            <a href="" className="p-4 flex items-center gap-2 text-lg">
                <FaInstagram></FaInstagram>
                Instagram
            </a>
            </div>
          </div>
          {/* { Q Zone } */}
          <div>
          <div className="p-4 mb-6">
          <h2 className="text-3xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
          </div>
          </div>
        </div>
    );
};

export default RightSideNav;