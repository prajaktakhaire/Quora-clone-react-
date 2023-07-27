import React, {useState} from "react";
import "../Css/SidebarOptions.css";
import { Add } from "@mui/icons-material";
function SidebarOptions({setLoading, setCurrentLink}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClick = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setCurrentLink("HomeIcon")
  }
  return (
    <div className="sidebarOptions">
  <div
    onClick={() => handleClick("History")}
    className={`sidebarOption ${selectedCategory === "History" ? "selectedCategory" : ""}`}
  >
    <img
      src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
      alt=""
    />
    <p>History</p>
  </div>
  <div
    onClick={() => handleClick("Business")}
    className={`sidebarOption ${selectedCategory === "Business" ? "selectedCategory" : ""}`}
  >
    <img
      src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
      alt=""
    />
    <p>Business</p>
  </div>
  <div
    onClick={() => handleClick("Psychology")}
    className={`sidebarOption ${selectedCategory === "Psychology" ? "selectedCategory" : ""}`}
  >
    <img
      src="https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
      alt=""
    />
    <p>Psychology</p>
  </div>
  <div
    onClick={() => handleClick("Cooking")}
    className={`sidebarOption ${selectedCategory === "Cooking" ? "selectedCategory" : ""}`}
  >
    <img
      src="https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
      alt=""
    />
    <p>Cooking</p>
  </div>
  <div
    onClick={() => handleClick("Music")}
    className={`sidebarOption ${selectedCategory === "Music" ? "selectedCategory" : ""}`}
  >
    <img
      src="https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
      alt=""
    />
    <p>Music</p>
  </div>
  <div
    onClick={() => handleClick("Discover Spaces")}
    className={`sidebarOption ${selectedCategory === "Discover Spaces" ? "selectedCategory" : ""}`}
  >
    <Add />
    <p>Discover Spaces</p>
  </div>
</div>

    );
  }
  
  export default SidebarOptions;
    {/* <div className="sidebarOptions">
      <div onClick={() => handleClick("History")} className=`sidebarOption ${selectedCategory === "History" && "selectedCategory"}`>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>History</p>
      </div>
      <div onClick={() => handleClick("Business")} className=`sidebarOption ${selectedCategory === "Business" && "selectedCategory"}`>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />
        <p>Business</p>
      </div>
      <div onClick={() => handleClick("Psychology")} className=`sidebarOption ${selectedCategory === "Psychology" && "selectedCategory"}`>
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Psychology</p>
      </div>
      <div onClick={() => handleClick("Cooking")} className=`sidebarOption ${selectedCategory === "Cooking" && "selectedCategory"}`>
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Cooking</p>
      </div>
      <div onClick={() => handleClick("Music")} className=`sidebarOption ${selectedCategory === "Music" && "selectedCategory"}`>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Music</p>
      
        </div>
      <div onClick={() => handleClick("Discover Spaces")} className=`sidebarOption ${selectedCategory === "Discover Spaces" && "selectedCategory"}`>
        <Add />
        <p>Discover Spaces</p>
      </div>
    </div> */}
