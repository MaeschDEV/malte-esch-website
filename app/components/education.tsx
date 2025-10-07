import React from "react";
import { FaCircleCheck, FaCircleQuestion } from "react-icons/fa6";

const education = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <h1 className="mb-5 text-2xl font-semibold">Education</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <FaCircleCheck></FaCircleCheck>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black">Abitur</div>
            <p className="italic">Heinrich-Böll-Gymnasium Troisdorf</p>
            <p>Completed with grade: 2,0</p>
            <p>August 2017 - June 2025</p>
          </div>
          <hr className="mt-2" />
        </li>
        <li>
          <hr className="mb-2" />
          <div className="timeline-middle">
            <FaCircleQuestion></FaCircleQuestion>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2028</time>
            <div className="text-lg font-black">
              B. Sc. Wirtschaftsinformatik (Software Engineering)
            </div>
            <p className="italic">DHBW Mannheim</p>
            <p>Still in progression</p>
            <p>September 2025 - September 2028 (planned)</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default education;
