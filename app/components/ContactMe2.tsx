import React from "react";
import { GridBackgroundDemo } from "../ui/Grid";
import { ContactForm } from "../components/ContactMe";
import  Footer  from "../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <div className="pt-14">
    <GridBackgroundDemo>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="relative z-10 mb-10  pt-14 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Contact Me
          </h1>
          <ContactForm />
        </div>
        <div className="pt-44 mt-10 rounded-lg">
          {/* Replace the following iframe src with your actual map URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.7606567193146!2d-73.98580638458962!3d40.74881797932208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595c0f5f19cb%3A0x7957176f89c38a2c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629914163687!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 1, borderRadius: "8px" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        
      </div>
      
    </GridBackgroundDemo>
    <div className="mt-10">
    <Footer/>
    </div>
  
    </div>
    
  );
};

export default ContactPage;
