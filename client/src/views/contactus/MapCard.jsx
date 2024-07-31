import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { FaPhoneAlt, FaFax } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;

const MapCard = ({ card }) => {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="p-7 bg-white rounded-2xl flex flex-col gap-5">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px",
        }}
        zoom={10}
        center={card.location}
      >
        <MarkerF position={card.location} />
      </GoogleMap>
      <div className=" flex gap-5">
        <div className="p-5 bg-primary rounded-lg w-14 min-w-14 max-w-14 aspect-square max-h-14 flex items-center justify-center">
          <FaLocationDot size={20} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-primary text-xl font-semibold">{card.company}</h1>
          <div className="flex flex-col ">
            <p className="text-black/80 font-semibold leading-5">
              {card.address1}
            </p>
            <p className="text-black/80 font-semibold leading-5">
              {card.address2}
            </p>
            <p className="text-black/80 font-semibold leading-5">
              {card.address3}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex gap-5">
        <div className="p-5 bg-primary rounded-lg min-w-14 max-w-14 aspect-square max-h-14 flex items-center justify-center">
          <FaPhoneAlt size={20} className="text-white" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-xl font-semibold">Call us</h1>
          <p className="text-black/80 font-semibold leading-5">
            {card.phone_number}
          </p>
        </div>
      </div>
      {card.fax && (
        <div className=" flex gap-5">
          <div className="p-5 bg-primary rounded-lg min-w-14 max-w-14 aspect-square max-h-14 flex items-center justify-center">
            <FaFax size={20} className="text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-xl font-semibold">Fax</h1>
            <p className="text-black/80 font-semibold leading-5">{card.fax}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapCard;
