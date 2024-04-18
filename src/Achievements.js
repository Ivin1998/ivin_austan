import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMedal } from "react-icons/fa6";
import { IoMedalOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { BiMedal } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { MdStars } from "react-icons/md";

const Achievements = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdStars />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="December 2021"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<IoMedalOutline />}
      >
        <h3 className="vertical-timeline-element-title">
          {" "}
          SuperStar of the Quarter - Q3 2021
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It's a great honor to be in the nominee list of SuperStar of the
          Quarter. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaMedal />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<BiMedal />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<LiaMedalSolid />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GiRibbonMedal />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="November 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdStars />}
      >
        <h3 className="vertical-timeline-element-title">
          Super Star of the Quarter - Q4 2022
        </h3>
        <h6 lassName="vertical-timeline-element-subtitle">Capestart</h6>
        <p>
          It is truly humbling to be recognized by our company. I am honored to
          receive the "Super Star Award Q4 2022" in recognition of my efforts to
          go above and beyond. Thank you, CapeStart!❤️
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<IoMedalOutline />}
      />
    </VerticalTimeline>
  );
}

export default Achievements;
