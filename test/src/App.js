import React, { useState } from "react";
import {Dialog} from "react-overlay-kit";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("right");
  const [escToClose, setEscToClose] = useState(true);
  const [closeOnClickOutside, setCloseOnClickOutside] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const [allowCustomStyles, setAllowCustomStyles] = useState(false);
  const [draggable, setDraggable] = useState(true);
  const [autoCloseDelay, setAutoCloseDelay] = useState(false);


  const customStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    // padding: "20px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div class="flex items-center justify-center">
          <form>
            <div>
            <label
              for="Position"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Dialog Position:
            </label>
            <select
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              id="Position"
              class=" w-[300px] mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="center">Center</option>

            </select>
            </div>

            <div class="flex items-center mb-4">
              <input
                checked={escToClose}
                onChange={() => setEscToClose(!escToClose)}
                id="Esc"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
              <label
                for="Esc"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                Enable Esc to Close
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                checked={closeOnClickOutside}
                onChange={() => setCloseOnClickOutside(!closeOnClickOutside)}
                id="Outside"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
              <label
                for="Outside"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                Close on Click Outside
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                checked={showCloseButton}
                onChange={() => setShowCloseButton(!showCloseButton)}
                id="Close"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
              <label
                for="Close"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                {" "}
                Show Close Button
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                checked={autoCloseDelay}
                onChange={() => setAutoCloseDelay(!autoCloseDelay)}
                id="CloautoCloseDelayse"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
              <label
                for="autoCloseDelay"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                {" "}
                Close after delay
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                checked={draggable}
                onChange={() => setDraggable(!draggable)}
                id="customStyles"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
              <label
                for="customStyles"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                {" "}
                draggable
              </label>
              
            </div>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[300px]"
            >
              Open Modal
            </button>
          </form>
        </div>
      </div>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position={position}
        customStyles={allowCustomStyles ? customStyles : {}}
        escToClose={escToClose}
        closeOnClickOutside={closeOnClickOutside}
        showCloseButton={showCloseButton}
        draggable={draggable}
        autoCloseDelay={autoCloseDelay ? 2000 : false}
      >
        <div class=" px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
