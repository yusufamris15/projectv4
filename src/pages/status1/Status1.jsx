import React, { Component } from "react";
import User1 from "../../images/Group48.png";
import Titik from "../../images/Group50.png";
import Komentar from "../../images/Komentar.png";
import Like from "../../images/Like.png";
import Share from "../../images/Share.png";
import User2 from "../../images/Group51.png";
import Foto1 from "../../images/Rectangle43.png";
import User3 from "../../images/Ellipse26.png";
import User4 from "../../images/Ellipse1.png";
import User5 from "../../images/Ellipse2.png";
import Edit from "../../images/edit.png";
import Trash from "../../images/trash.png";
// import User6 from "../images/Group72.png";
import "./Status1.css";

class Status1 extends Component {
  render() {
    return (
      <div className="status-1">
        <div className="box2">
          <img id="e" src={User1} alt="" />
          <h4>
            Thomas Ben{" "}
            <span>
              {" "}
              <img id="i" src={Titik} alt="" />
            </span>{" "}
          </h4>
          <h5>45 mins ago</h5>
          <p className="paragraf1">
            Being a father is sometimes my hardest but always my most rewarding
            job. Happy Father’s Day to all dads out there.{" "}
          </p>
          <img id="f" src={Like} alt="" />
          <img id="g" src={Komentar} alt="" />
          <img id="h" src={Share} alt="" />
        </div>
        <div className="box3">
          <img id="j" src={User2} alt="" />
          <h3 className="miranda">
            Miranda Shaffer{" "}
            <span>
              {" "}
              <img id="k" src={Titik} alt="" />
            </span>{" "}
          </h3>
          <h5 className="tglupdate">June 21, 12:45 pm</h5>
          <p className="paragraf2">
            Having fun while cooking and eating variety of foods with{" "}
            <span id="warnadinama">@Sarah</span>
          </p>
          <img id="l" src={Foto1} alt="" />
          <img id="m" src={Like} alt="" />
          <img id="n" src={Komentar} alt="" />
          <img id="o" src={Share} alt="" />
          <img id="p" src={User3} alt="" />
          <div className="box4">
            <h3 className="user3">Mary Jane Watson</h3>
            <p className="paragraf3">Itu gimana cara masaknya gan?</p>
          </div>
          <img id="q" src={User4} alt="" />
          <div className="box5">
            <h3 className="user4">Bibi May</h3>
            <p className="paragraf4">
              Kayanya gampang deh.. cek dulu di youtube
            </p>
          </div>
          <img id="r" src={Titik} alt="" />
          <img id="s" src={Edit} alt="" /> <span id="u">Ubah Komentar</span>
          <img id="t" src={Trash} alt="" /> <span id="v">Hapus Komentar</span>
          <img id="w" src={User5} alt="" />
          <div className="box6">
            <h3 className="user5">Miles Morales</h3>
            <p className="paragraf5">Ikutan dong, mau buat juga!</p>
          </div>
          <img id="x" src={User2} alt="" />
          <div className="box7">
            <p className="paragraf6">Tulis komentar kamu...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Status1;
