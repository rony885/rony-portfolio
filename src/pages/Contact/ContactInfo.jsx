import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section
        className="page-title page-title-layout5 bg-overlay bg-img"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Contact Us</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map py-0 ">
        <iframe
          frameBorder="0"
          height="500"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.01090771624763!2d90.77597987691264!3d24.456896574068857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375692412f001e17%3A0x35f381b367f88b4d!2z4Ka44Ka-4Kaw4KeN4KaV4Ka_4KafIOCmueCmvuCmieCmuCwg4KaV4Ka_4Ka24KeL4Kaw4KaX4Kae4KeN4Kac!5e0!3m2!1sbn!2sbd!4v1769402250192!5m2!1sbn!2sbd"
          title="Google Map"
        ></iframe>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ContactInfo;
