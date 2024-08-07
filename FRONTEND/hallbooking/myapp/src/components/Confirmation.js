// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PaymentPage.css";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import CheckCircle from "@mui/icons-material/CheckCircle";

const Confirmation = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <>
      {load ? (
        <div className="mainLoad">
          <SpinnerIcon className="loadIcon" pulse style={{ fontSize: "2em" }} />
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="Confirmation">
          <CheckCircle className="checkIcon" />
          <h5>
            Votre Transaction a effectue nous vous enveron un email de
            Confirmation
          </h5>
        </div>
      )}
    </>
  );
};

export default Confirmation;
