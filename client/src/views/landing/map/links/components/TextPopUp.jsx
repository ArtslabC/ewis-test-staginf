import React, { useEffect } from "react";
import Container from "./../../../../../components/hoc/Container";
import H2Title from "./../../../../../components/common/H2Title";
import { IoMdClose } from "react-icons/io";
import Paragraph from "./../../../../../components/common/paragraph";
import { FaExternalLinkAlt } from "react-icons/fa";

const TextPopUp = ({ closeModal, activeModal }) => {
  if (
    activeModal.title == undefined ||
    activeModal.title == null ||
    activeModal.title == ""
  ) {
    return <></>;
  }
  if (
    activeModal.description == undefined ||
    activeModal.description == null ||
    activeModal.description == ""
  ) {
    return <></>;
  }
  if (
    activeModal.link == undefined ||
    activeModal.link == null ||
    activeModal.link == ""
  ) {
    return <></>;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-[100svh] flex justify-center items-center bg-[#00000050] z-[10000]">
      <Container classes="flex items-center">
        <div
          id="modal-container"
          className="rounded-2xl bg-white p-5 md:px-10 max-w-md w-full flex flex-col gap-5 mx-auto relative"
        >
          <H2Title>{activeModal.title}</H2Title>
          <Paragraph>{activeModal.description}</Paragraph>

          {activeModal.tourLink && (
            <a
              className="text-center bg-primary hover:bg-primary/95  rounded-xl py-3 text-white font-bold flex gap-2 items-center justify-center"
              href={activeModal.tourLink}
              target="_blank"
            >
              Take a tour
              <FaExternalLinkAlt />
            </a>
          )}

          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={closeModal}
              className="text-center bg-red-accent hover:bg-red-accent/95  rounded-xl py-3 text-white font-bold"
            >
              Cancel
            </button>
            <a
              href={activeModal.link}
              className="text-center bg-primary hover:bg-primary/95 text-white font-bold rounded-xl py-3 "
            >
              Continue
            </a>
          </div>
          {/* <button
            onClick={closeModal}
            className="absolute top-[-10px] right-[-10px] z-[10001] bg-red-accent  hover:bg-red-accent/95 rounded-full p-2"
          >
            <IoMdClose className="text-white text-2xl" />
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default TextPopUp;
