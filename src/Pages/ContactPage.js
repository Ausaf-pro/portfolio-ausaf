import React from "react";
import ContactItem from "../Components/ContactItem";
import Tittle from "../Components/Tittle";
import phone from "../img/phone.png";
import email from "../img/email.png";
import location from "../img/location.png";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.163305161361!2d85.80414731501486!3d20.3506772863696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1623396607682!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+91-9641-514-274"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"ausafhussain010@gmail.com"}
            text2={"drrespect2000@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Silicon Institute of Technology,"}
            text2={"Infocity, Patia, Bhubneshwar"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
