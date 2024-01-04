import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$500</p>
        <p className="desc">
          Previous transactions proccessing. Last payments may not be include.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$12.40k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$04.40k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$10.00k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
