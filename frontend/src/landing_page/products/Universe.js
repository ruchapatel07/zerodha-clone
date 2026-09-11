import React from "react";

function Universe() {
  const logoStyle = {
    maxWidth: "180px",
    maxHeight: "80px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/zerodhaFundhouse.png"
            alt="Zerodha Fund House logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/sensibullLogo.svg"
            alt="Sensibull logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/tijori.svg"
            alt="Tijori logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/streakLogo.png"
            alt="Streak logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/smallcaseLogo.png"
            alt="Smallcase logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaimg/dittoLogo.png"
            alt="Ditto logo"
            style={logoStyle}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;



// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\zerodhaFundhouse.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\sensibullLogo.svg" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\tijori.svg" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\streakLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media\images\zerodhaimg\dittoLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;