// import jsPDF from "jspdf";
import React from "react";
import insiderAvatar from "../img/insiderAvatar.jpg";
import resume from "../img/resume.pdf";

function ImageSection() {
  // const printDocument = () => {
  //   fetch("../img/resume.pdf", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/pdf",
  //     },
  //   })
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       // Create blob link to download
  //       const url = window.URL.createObjectURL(new Blob([blob]));
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", `resume.pdf`);

  //       // Append to html link element page
  //       document.body.appendChild(link);

  //       // Start download
  //       link.click();

  //       // Clean up and remove the link
  //       link.parentNode.removeChild(link);
  //     });
  // };

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={insiderAvatar} alt="/" />
      </div>
      <div className="about-info">
        <h4>
          I am
          <span> React Developer</span>
        </h4>
        <p className="about-text">
          I have developed several Projects with few companies like @Appstone
          Pvt. Ltd. I am working on React Web Development in my of Client and
          own freelance work.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Ausaf Hussain</p>
            <p>: 21</p>
            <p>: Indian</p>
            <p>: Englis, Hindi, Urdu</p>
            <p>: Infocity, Patia, Bhubneshwar, India</p>
            <p>: India</p>
          </div>
        </div>
        <button className="btn">
          <a href={resume} download="resume.pdf">
            Download Cv
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
