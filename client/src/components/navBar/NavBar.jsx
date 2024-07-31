import React, { Suspense, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Dialog, Disclosure, Transition, Popover } from "@headlessui/react";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/logo/EwisLogo.webp";
import LoadingImages from "../common/LoadingImages";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const about = [
    {
      name: "About Us",
      description: "Get a better understanding of your traffic",
      // to: "/about-us",
      to: "/about-us",
      icon: ChartPieIcon,
    },
    {
      name: "EWIS Colombo Limited",
      description: "Your customers’ data will be safe and secure",
      to: "/colombo-limited",
      icon: FingerPrintIcon,
    },
    {
      name: "EWIS Global Services",
      description: "Connect with third-party tools",
      to: "/global-services",
      icon: SquaresPlusIcon,
    },
    {
      name: "EWIS Solutions",
      description: "Build strategic funnels that will convert",
      to: "/ewis-solutions",
      icon: ArrowPathIcon,
    },
    {
      name: "EWIS Career Training Solutions",
      description: "Build strategic funnels that will convert",
      to: "/career-training-solutions",
      icon: ArrowPathIcon,
    },
    {
      name: "EWIS Peripherals",
      description: "Build strategic funnels that will convert",
      to: "/peripheral",
      icon: ArrowPathIcon,
    },
    {
      name: "Toppan Forms",
      description: "Build strategic funnels that will convert",
      to: "/toppan-forms",
      icon: ArrowPathIcon,
    },
  ];
  const industries = [
    {
      name: "Banking Finance And Insurance",
      description: "Get a better understanding of your traffic",
      to: "/banking-finance-and-insurance",
      icon: ChartPieIcon,
    },
    {
      name: "Education",
      description: "Speak directly to your customers",
      to: "/education",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Manufacturing",
      description: "Your customers’ data will be safe and secure",
      to: "/manufacturing",
      icon: FingerPrintIcon,
    },
    {
      name: "Healthcare",
      description: "Connect with third-party tools",
      to: "/healthcare",
      icon: SquaresPlusIcon,
    },
    {
      name: "Retail",
      description: "Build strategic funnels that will convert",
      to: "/retail",
      icon: ArrowPathIcon,
    },
    {
      name: "Public",
      description: "Build strategic funnels that will convert",
      to: "/public",
      icon: ArrowPathIcon,
    },
    {
      name: "Telecommunication",
      description: "Build strategic funnels that will convert",
      to: "/telecommunication",
      icon: ArrowPathIcon,
    },
  ];
  // const csr = [
  //   {
  //     name: "CSR",
  //     description: "Get a better understanding of your traffic",
  //     to: "/csr-page",
  //     icon: ChartPieIcon,
  //   },
  //   {
  //     name: "Health",
  //     description: "Speak directly to your customers",
  //     to: "/video-conferencing-facility",
  //     icon: CursorArrowRaysIcon,
  //   },
  //   {
  //     name: "Distance Learning Programme",
  //     description: "Connect with third-party tools",
  //     to: "/education",
  //     icon: SquaresPlusIcon,
  //   },
  //   {
  //     name: "Official IT Partner for Edu.com",
  //     description: "Build strategic funnels that will convert",
  //     to: "/official-it-partner-for-edu-com-rupavahini-classroom",
  //     icon: ArrowPathIcon,
  //   },
  // ];
  const press = [
    {
      name: "News",
      description: "Get a better understanding of your traffic",
      to: "/news",
      icon: ChartPieIcon,
    },
    {
      name: "Blog",
      description: "Speak directly to your customers",
      to: "/blog",
      icon: CursorArrowRaysIcon,
    },
  ];
  const more = [
    {
      name: "Partnership",
      description: "Get a better understanding of your traffic",
      to: "/partners",
      icon: ChartPieIcon,
    },

    {
      name: "Careers",
      description: "Speak directly to your customers",
      to: "/careers",
      icon: CursorArrowRaysIcon,
    },
  ];
  // const callsToAction = [
  //   { name: "Watch demo", to: "#", icon: PlayCircleIcon },
  //   { name: "Contact sales", to: "#", icon: PhoneIcon },
  // ];

  return (
    <>
      <header
        className={`sticky top-0 h-[80px] flex items-center   z-50 transition duration-1000 ease-in-out 
          ${
            location.pathname == "/toppan-forms"
              ? "bg-red-accent"
              : "bg-primary"
          }
        `}
      >
        <nav
          className="mx-auto w-full flex max-w-screen-xl items-center justify-between px-8 z-50"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Suspense fallback={<LoadingImages />}>
                <img className="h-10 w-auto" src={logo} alt="EWis Lgo" />
              </Suspense>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky bg-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomLeftIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                About
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
                  {({ close }) => (
                    <div className="p-4">
                      {about.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-primarygray"
                          onClick={async () => {
                            await fetch("/accept-terms", { method: "POST" });
                            close();
                          }}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primarygray group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-black group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.to}
                              className="block font-semibold text-gray-900  group-hover:text-primary"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            {/* <p className="mt-0 text-gray-600">{item.description}</p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Industries
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  {({ close }) => (
                    <div className="p-4">
                      {industries.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-primarygray"
                          onClick={async () => {
                            await fetch("/accept-terms", { method: "POST" });
                            close();
                          }}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primarygray group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-black group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.to}
                              className="block font-semibold text-gray-900 group-hover:text-primary"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              to="/csr-page"
              className="text-sm font-semibold leading-6 text-white"
            >
              CSR
            </Link>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Press
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  {({ close }) => (
                    <div className="p-4">
                      {press.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-primarygray"
                          onClick={async () => {
                            await fetch("/accept-terms", { method: "POST" });
                            close();
                          }}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primarygray group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-black group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.to}
                              className="block font-semibold text-gray-900 group-hover:text-primary"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              to="/contact-us"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact Us
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                More
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  {({ close }) => (
                    <div className="p-4">
                      {more.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-primarygray"
                          onClick={async () => {
                            await fetch("/accept-terms", { method: "POST" });
                            close();
                          }}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primarygray group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-black group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.to}
                              className="block font-semibold text-gray-900 group-hover:text-primary"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    // <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-primarygray">
                    //   {callsToAction.map((item) => (
                    //     <Link
                    //       key={item.name}
                    //       to={item.to}
                    //       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 group-hover:text-primary hover:bg-gray-100"
                    //     >
                    //       <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    //       {item.name}
                    //     </Link>
                    //   ))}
                    // </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <Link
            to="/contact-us"
            className="text-sm font-semibold leading-6 text-sky-700 bg-white px-5 py-2 rounded-3xl"
          >
            Buy EWIS<span aria-hidden="true">&rarr;</span>
          </Link> */}
            <Link
              to="https://testbuyewis.staging.whitestar-webdevelopment.com/"
              className="group transition-transform bg-white text-primary py-2 px-6 font-Poppins text-base border-solid border-2 border-primary rounded-full font-black flex flex-row items-center justify-center gap-2  hover:bg-black hover:border-black hover:text-white"
            >
              Buy EWIS
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg ">
                <ShoppingBagIcon
                  className="h-6 w-6 text-primary transition-transform group-hover:translate-x-2 group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray">
                          About
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...about].map((item) => (
                            <Link
                              key={item.name}
                              as="a"
                              to={item.to}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray">
                          Industries
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...industries].map((item) => (
                            <Link
                              key={item.name}
                              as="a"
                              to={item.to}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Link
                    to="/csr-page"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CSR
                  </Link>
                  {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray">
                        CSR
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...csr].map((item) => (
                          <Link
                            key={item.name}
                            as="a"
                            to={item.to}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray">
                          Press
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...press].map((item) => (
                            <Link
                              key={item.name}
                              as="a"
                              to={item.to}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    to="/contact-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray">
                          More
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...more].map((item) => (
                            <Link
                              key={item.name}
                              as="a"
                              to={item.to}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 group-hover:text-primary hover:bg-primarygray bg-primarygray"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Buy EWIS
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default NavBar;
