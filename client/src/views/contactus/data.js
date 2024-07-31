import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const CONTACT_US_CARDS = [
  {
    icon: FaSearch,
    title: "Service Center Finder",
    description:
      "Locate the nearest service center to get prompt assistance and support for all your Ewis products",
  },
  {
    icon: MdPhoneInTalk,
    title: "Corporate Reach out",
    description:
      "Connect with our corporate team for inquiries, collaborations, or any other business-related matters",
  },
  {
    icon: FaRegBuilding,
    title: "Our Branches",
    description:
      "Discover our extensive network of branches, conveniently located to serve you better in various locations",
  },
];

export const SERVICE_CENTERS = [
  {
    company: "Registered Office",
    address1: "No 70, 1st Floor, Lucky Plaza Building, ",
    address2: "St.Anthony’s Mawatha,",
    address3: "Colombo 03, Sri Lanka.",
    phone_number3: "+94 117 520 520",
    fax: "+94 112 447 303",
    location: {
      lat: 6.907985629133321,
      lng: 79.85216612452828,
    },
  },
  {
    company: "Sales Office",
    address1: "No: 441/7, 2nd Lane,",
    address2: "Cotta Road,",
    address3: "Rajagiriya.",
    phone_number: "+94 117 520 520",
    fax: "+94 112 447 303",
    location: {
      lat: 6.910489070494745,
      lng: 79.89091949880194,
    },
  },
  {
    company: "Workshop",
    address1: "441/7, 2nd Lane,",
    address2: "Kotte Road, ",
    address3: "Rajagiriya.",
    phone_number: "+94 117 520 520",
    fax: "+94 112 447 303",
    location: {
      lat: 6.909792441531898,
      lng: 79.89136175118215,
    },
  },
];

export const BRANCH_NETWORK = [
  {
    company: "Jaffna Branch",
    address1: "No 61,",
    address2: "Clock Tower Road,",
    address3: "Jaffna.",
    phone_number: "+94 21 7 200 466",
    fax: "+94 212 221 456",
    location: {
      lat: 9.670505345357448,
      lng: 80.01695167343698,
    },
  },
  {
    company: "Badulla Branch",
    address1: "No 226/4/1/16, Modern Complex,",
    address2: "Lower Street, Badulla.",
    address3: "Badulla.",
    phone_number: "+94 55 2 230 166",
    fax: "+94 552 230 166",
    location: {
      lat: 6.985746532512825,
      lng: 81.05993980369819,
    },
  },
  {
    company: "Kandy Branch",
    address1: "No 749,",
    address2: "William Gopallawa Mawatha,",
    address3: "Kandy.",
    phone_number: "+94 812 200 555",
    fax: "+94 812 200 555",
    location: {
      lat: 7.480323218254188,
      lng: 80.37126228040896,
    },
  },
  {
    company: "Galle Branch",
    address1: "No 68,",
    address2: "Havelock Place,",
    address3: "Galle.",
    phone_number: "+94 91 2 224 301",
    fax: "+94 912 224 301",
    location: {
      lat: 6.9155240385638574,
      lng: 79.8490198847846,
    },
  },
  {
    company: "Kurunegala Branch",
    address1: "No 304,",
    address2: "Kandy Road,",
    address3: "Kurunegala.",
    phone_number: "+94 37 7 880 870",
    fax: "+94 372 224 825",
    location: {
      lat: 7.480259393072679,
      lng: 80.37127300924432,
    },
  },
  {
    company: "Anuradhapura Branch",
    address1: "No 488/13/C, 5th Lane,",
    address2: "Stage2, New Town,",
    address3: "Anuradhapura.",
    phone_number: "+94 25 7 800 830",
    fax: "",
    location: {
      lat: 8.325199675764605,
      lng: 80.4043941656369,
    },
  },
];

export const ALLLOCATIONS = [
  {
    name: "anuradapura",
    location: {
      lat: 8.325199675764605,
      lng: 80.4043941656369,
    },
  },
  {
    name: "kurunegala",
    location: {
      lat: 7.480259393072679,
      lng: 80.37127300924432,
    },
  },
  {
    name: "galle",
    location: {
      lat: 6.9155240385638574,
      lng: 79.8490198847846,
    },
  },
  {
    name: "kandy",
    location: {
      lat: 7.480323218254188,
      lng: 80.37126228040896,
    },
  },
  {
    name: "badulla",
    location: {
      lat: 6.985746532512825,
      lng: 81.05993980369819,
    },
  },
  {
    name: "jaffna",
    location: {
      lat: 9.670505345357448,
      lng: 80.01695167343698,
    },
  },
  {
    name: "registered office",
    location: {
      lat: 6.907985629133321,
      lng: 79.85216612452828,
    },
  },
  {
    name: "sales office",
    location: {
      lat: 6.910489070494745,
      lng: 79.89091949880194,
    },
  },
  {
    name: "workshop",
    location: {
      lat: 6.909792441531898,
      lng: 79.89136175118215,
    },
  },
  {
    name: "peripherals",
    location: {
      lat: 6.915878042089922,
      lg: 79.84512809422216,
    },
  },
];

export const SOCIALMEDIA = [
  {
    link: "",
    icon: FaFacebook,
  },
  {
    link: "",
    icon: FaInstagram,
  },
  {
    link: "",
    icon: FaX,
  },
  {
    link: "",
    icon: FaYoutube,
  },
];
