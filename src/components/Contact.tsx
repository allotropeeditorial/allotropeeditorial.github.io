import React, { useState, useEffect, Fragment, useRef } from "react";

type Props = {
  children: any;
};

const Contact: React.FC<Props> = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="rounded-full border border-[#20b2aa] bg-[#20b2aa] px-4 py-2 text-[#4b0082] hover:bg-transparent hover:text-[#20b2aa]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contact
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                  <h3 className="font=semibold text-3xl text-[#4b0082]">
                    General Info
                  </h3>
                  <button
                    className="float-right border-0 bg-transparent text-[#4b0082]"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 rounded-full py-0 text-xl text-[#4b0082]">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <form
                    action="https://formspree.io/f/mrgvylpr"
                    method="post"
                    className="w-full rounded px-8 pb-8 pt-6"
                  >
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      First Name:
                    </label>
                    <input
                      name="First Name"
                      type="text"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    />
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Last Name:
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    />
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Email:
                    </label>
                    <input
                      name="Email"
                      type="email"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    />
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Phone:
                    </label>
                    <input
                      name="Phone"
                      type="tel"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    />
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Service:
                    </label>
                    <select
                      name="Service"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    >
                      <option value=""></option>
                      <option value="critique">Critique</option>
                      <option value="developmental">Developmental Edit</option>
                      <option value="copyedit">Copyedit</option>
                      <option value="proofread">Proofread</option>
                      <option value="format">Format</option>
                      <option value="website">Website</option>
                    </select>
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Genre:
                    </label>
                    <select
                      name="Genre"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    >
                      <option value=""></option>
                      <option value="fantasy">Fantasy</option>
                      <option value="urban">Urban Fantasy</option>
                      <option value="romance">Romance</option>
                      <option value="graphic">Graphic Novel</option>
                      <option value="historical">Historical Fiction</option>
                      <option value="mystery">Mystery Thriller</option>
                      <option value="scifi">Sci-fi</option>
                      <option value="other">Other</option>
                    </select>
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      Tell us about your manuscript:
                    </label>
                    <textarea
                      name="About"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    />
                    <label className="text-md mb-1 block font-bold text-[#20b2aa]">
                      How did you hear about us:
                    </label>
                    <select
                      name="Hear"
                      className="w-full appearance-none rounded border px-1 py-2 text-[#4b0082] shadow"
                    >
                      <option value=""></option>
                      <option value="social media">Social Media</option>
                      <option value="aces">ACES</option>
                      <option value="efa">EFA</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="border-blueGray-200 flex items-center justify-center rounded-b border-t border-solid p-6">
                      <button
                        type="submit"
                        className="rounded-full border border-[#20b2aa] bg-[#20b2aa] px-4 py-2 text-[#4b0082] hover:bg-[#20b2aa] hover:text-[#4b0082]"
                        // onClick={() => setShowModal(false)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Contact;
