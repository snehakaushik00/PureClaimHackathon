import VerificationCard from "./VerificationCard";
import Vurl from "../Images/approved.png";
import Vtext from "../Images/clipboard.png";
import Vimage from "../Images/camera.png";
import Vbarcode from "../Images/barcode.jpg";
import { v4 as uuidv4 } from "uuid";

const VerificationMethods = () => {
  const methods = [
    { 
      path: "/verification/urlform", 
      img: Vurl, 
      text: "Url Verification" },
    {
      path: "/verification/mannualform",
      img: Vtext,
      text: "Manual Verification",
    },
    { 
      path: "/verification/media", 
      img: Vimage, 
      text: "Image Verification" },
    {
      path: "/verification/barcode",
      img: Vbarcode,
      text: "Barcode Verification",
    },
  ];

  return (
    <section className="VerificationMethods text-center">
      <h2 className="Heading">Select Verification Method</h2>
      <div className="container">
        <div className="row">
          {methods.map((item) => (
            <VerificationCard key={uuidv4()} val={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationMethods;
