import React from "react";
import { ContactUsComCon, H2Title, Paragraph } from "./../../components/common";
import { Container } from "../../components/hoc";
import GoogleMapReact from "google-map-react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import {
  ALLLOCATIONS,
  BRANCH_NETWORK,
  CONTACT_US_CARDS,
  SERVICE_CENTERS,
  SOCIALMEDIA,
} from "./data";
import { FaSpinner } from "react-icons/fa";
import MapCard from "./MapCard";

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;

function ContactUs() {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const center = {
    lat: 6.318597319825931,
    lng: 80.99803844141101,
  };
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="">
          <FaSpinner className="animate-spin text-2xl" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Container classes="section-padding  items-center">
        <div className="flex flex-col justify-center text-center gap-5">
          <H2Title classes="uppercase">Contact Us</H2Title>
          <Paragraph>Get in touch and let us know how we can help.</Paragraph>
        </div>
      </Container>
      <ContactUsComCon />

      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
        zoom={8}
        center={center}
      >
        {ALLLOCATIONS.map((im, i) => (
          <MarkerF position={im.location} key={i} />
        ))}
      </GoogleMap>
      <div className="bg-background-secondary pb-24 lg:pb-0 pt-28 lg:pt-0">
        <Container>
          <div className=" bg-background-secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {CONTACT_US_CARDS.map((card, i) => (
              <div
                className="bg-white rounded-2xl p-10 lg:mt-[-100px] z-20 flex justify-center items-center flex-col gap-5 shadow-2xl  "
                key={i}
              >
                <div className="bg-primary p-4 rounded-lg flex items-center justify-center w-16 aspect-square ">
                  <div className="text-white  ">
                    <card.icon className="text-white text-2xl" />
                  </div>
                </div>
                <h1 className="text-2xl text-primary font-semibold text-center">
                  {card.title}
                </h1>
                <p className="text-center text-black/80 font-semibold">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-background-secondary">
        <Container classes="section-padding flex flex-col gap-24 lg:28 ">
          <div className="w-full flex flex-col gap-14">
            <H2Title align="text-left">Explore Our Service Centers</H2Title>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {SERVICE_CENTERS.map((card, i) => {
                return <MapCard card={card} />;
              })}
            </div>
          </div>
          <div className="w-full flex flex-col gap-14">
            <H2Title align="text-left">Discover Our Branch Network</H2Title>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {BRANCH_NETWORK.map((card, i) => {
                return <MapCard card={card} />;
              })}
            </div>
          </div>
        </Container>
      </div>
      <Container classes="section-padding">
        <div className="flex flex-col items-center justify-center gap-5">
          <H2Title>Follow our social media</H2Title>
          <div className="flex gap-3">
            {SOCIALMEDIA.map((card, i) => (
              <a
                href={card.link}
                className="w-14 h-14  bg-primary hover:bg-primary/80 rounded-md flex justify-center items-center"
                key={i}
              >
                <card.icon className="text-white text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
