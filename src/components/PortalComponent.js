import React from "react";
import ReactDOM from "react-dom";

const PortalTooltip = ({ message, position, targetRef }) => {
  if (!targetRef.current) return null;

  // Get target button's position
  const rect = targetRef.current.getBoundingClientRect();

  // Tooltip position calculation
  const tooltipStyle = {
    position: "absolute",
    top:
      position === "top"
        ? rect.top - 40
        : position === "bottom"
        ? rect.bottom + 5
        : rect.top + rect.height / 2 - 10,
    left:
      position === "left"
        ? rect.left - 120
        : position === "right"
        ? rect.right + 10
        : rect.left + rect.width / 2 - 60,
    background: "black",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px",
    whiteSpace: "nowrap",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div style={tooltipStyle}>{message}</div>,
    document.getElementById("portal-root") // Renders outside root
  );
};

export default PortalTooltip;




// import React from "react";
// import ReactDOM from "react-dom";

// const PortalComponent = ({ children }) => {
//   return ReactDOM.createPortal(
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
//     </div>,
//     document.getElementById("portal-root") // Render outside the root div
//   );
// };

// export default PortalComponent;
