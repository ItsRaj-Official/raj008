import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="mt-10" id="edu">
      <h1 className="text-4xl md:text-5xl text-center my-3 font-bold">
        Education
      </h1>
      <VerticalTimeline lineColor="white" className="text-black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="2022 - stady"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<FaGraduationCap />}
        >
          <div>
            <h3 className=" text-2xl font-bold">Bachelor of Science</h3>
            <h4 className="">Computer Science and Engineering </h4>
            <p>
              <b>Result in CGPA : 3.31</b>
              <br />I am currently doing B.Sc. in CSE at North Western
              University (4th year).
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBuildingColumns />}
        >
          <h3 className=" text-2xl font-bold">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            <b>Result in GPA : A</b>
            <br /> I have passed the HSC exam from Khulna Govt. Model School & College in 2019.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Secondary
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            {" "}
            <b>Result in GPA : A</b>
            <br />I have passed the SSC exam from Peoples Jute Mills High School in 2017.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
