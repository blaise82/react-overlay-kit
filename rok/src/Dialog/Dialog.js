import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Dialog.css";

const Dialog = ({
  isOpen,
  onClose,
  onOpen,
  children,
  position = "right",
  customStyles,
  escToClose = true,
  showCloseButton = true,
  closeOnClickOutside = true,
  draggable = false,
  autoCloseDelay,
}) => {
  const drawerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  // Handle ESC key press
  useEffect(() => {
    if (!escToClose || !isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [escToClose, isOpen, onClose]);

  // Handle clicking outside
  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;

    const handlePointerDown = (event) => {
      if (drawerRef.current?.contains(event.target)) return;
      onClose();
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [closeOnClickOutside, isOpen, onClose]);

  // Handle onOpen event
  useEffect(() => {
    if (isOpen && onOpen) onOpen();
  }, [isOpen, onOpen]);

  // Auto-close after delay
  useEffect(() => {
    if (isOpen && autoCloseDelay) {
      const timer = setTimeout(onClose, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay, onClose]);

  // Draggable functionality
  const handleDragStart = (event) => {
    if (!draggable) return;
    setDragging(true);
    startX.current = event.clientX;
    currentX.current = startX.current;
  };

  const handleDragMove = (event) => {
    if (!dragging || !drawerRef.current) return;
    currentX.current = event.clientX;
    const deltaX = currentX.current - startX.current;

    if (position === "right" && deltaX < -100) onClose();
    if (position === "left" && deltaX > 100) onClose();
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
    return () => {
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handleDragEnd);
    };
  }, [dragging]);

  return (
    <div className={`rok-drawer-overlay ${isOpen ? "open" : ""}`}>
      <div
        ref={drawerRef}
        className={`rok-drawer-container ${isOpen ? "open" : ""}`}
        data-position={position}
        style={customStyles}
        onPointerDown={draggable ? handleDragStart : undefined}
      >
        {children}
        {showCloseButton && (
          <button onClick={onClose} className="rok-drawer-close">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4 4 8 8m-8 0 8-8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  customStyles: PropTypes.object,
  escToClose: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  draggable: PropTypes.bool,
  autoCloseDelay: PropTypes.number,
};

export default Dialog;
