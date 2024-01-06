import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./top.css";

const Top = () => {
  return (
    <div className="top-main">
      <div className="main-icon">
      <div className="icon">
        <CloseOutlined style={{ color: "white" }} />
      </div>
      </div>

      <div className="top-text">
        <div className="text1">
          <p>Epic Games : An American Video Game And Software Developer </p>
        </div>
        <div className="text2">
          <p>And Publisher Based In Cary,North California</p>
        </div>
      </div>
      <div className="top-img">
        <img
          src="./fortnite-pictures-b5kfcchwazwiz3cs.jpg"
          alt=""
          style={{ width: "1100px", padding: " 20px 50px" }}
        />
      </div>
      <div className="top-desc">
        <p>
          Create ,play,and battle with friends for free in Fortnite.Be the last
          player standing in Battle Royale and Zero Build ,experience a concert
          or{" "}
        </p>
        <p>
          {" "}
          live event, or discover over a million creator made games, including
          racing,parkour,zoombie survival,and more.Each Fortnite island has{" "}
        </p>
        <p>
          {" "}
          an individual age rating so you can find the one that's right for you
          and your friends. Find it all in Fortnite ... Drop in{" "}
        </p>
      </div>
      <div className="top-button">
        <Button>Visit Website</Button>
      </div>
    </div>
  );
};
export default Top;
