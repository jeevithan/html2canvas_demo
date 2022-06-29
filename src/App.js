import { useRef } from "react";
import "./styles.css";
import html2canvas from "html2canvas";

export default function App() {
  const printRef = useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      backgroundColor: "none",
      logging: true,
      useCORS: true //to enable cross origin perms
    });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      console.log("");
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className="App">
      <div
        ref={printRef}
        style={{
          border: "2px solid black",
          borderRadius: "1rem",
          maxWidth: "50vw",
          margin: "1rem auto",
          padding: ".5rem",
          background: "wheat",
          fontFamily: "monospace"
        }}
      >
        <h2>Glory to Ukraine</h2>
        <img
          style={{
            borderRadius: ".5rem",
            display: "block",
            maxWidth: "100%",
            objectFit: "cover",
            margin: "auto"
          }}
          src="https://lh3.googleusercontent.com/acezh821GREUTqwpxvzCnLtRfEkmkLF1aHSj3d8RYRFMvdCA0KL-9IN7XvJnke2agLv3pq-dpU2ceTehC3MFB22EnOgps0UbLVU0ujg=w600"
          alt="card-img"
          crossOrigin="anonymous"
        />
        <hr />
        <p>Project: Glory to Ukraine</p>
        <p>Artist: Tristan Eaton </p>
        <p>NFT-ID: #400/500</p>
        <p>Current-Price: 0.1 ETH </p>
      </div>

      <button
        style={{ cursor: "pointer" }}
        type="button"
        onClick={handleDownloadImage}
      >
        Download as Image
      </button>
    </div>
  );
}
