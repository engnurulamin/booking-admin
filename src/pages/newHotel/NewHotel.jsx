import "./newHotel.scss";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useFetch from "../../hooks/useFetch";
const NewHotel = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const { data, loading, error } = useFetch("http://localhost:8800/api/rooms");
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = () => {};
  return (
    <div className="new-hotel">
      <Sidebar />
      <div className="new-conatiner">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="form-input">
                <label>Featured</label>
                <select
                  className="featured"
                  onChange={handleChange}
                  id="featured"
                >
                  <option className="f-option" value={false}>
                    No
                  </option>
                  <option className="f-option" value={true}>
                    Yes
                  </option>
                </select>
              </div>
              <div className="select-rooms">
                <label>Rooms</label>
                <select onChange={handleSelect} multiple id="rooms">
                  {loading
                    ? "Loading"
                    : data &&
                      data.map((room) => (
                        <option value={room._id}>{room.title}</option>
                      ))}
                </select>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
