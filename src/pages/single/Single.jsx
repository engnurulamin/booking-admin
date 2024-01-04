import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Tables";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-btn">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+1 2345 67 89</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
