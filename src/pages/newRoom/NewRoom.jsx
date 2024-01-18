import "./newRoom.scss";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewRoom = ({ inputs, title }) => {
  const [info, setInfo] = useState({});
  const [hotelId, sethotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(hotelId);
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    console.log(roomNumbers);
    try {
      const roomApiUrl = `http://localhost:8800/api/rooms/${hotelId}`;
      await axios.post(roomApiUrl, { ...info, roomNumbers });
      navigate("/rooms");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new-room">
      <Sidebar />
      <div className="new-conatiner">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="form-input">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma between room numbers"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="form-input">
                <label>Choose a hotel</label>
                <select
                  name=""
                  id="hotelId"
                  onChange={(e) => sethotelId(e.target.value)}
                >
                  {loading
                    ? "Loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
