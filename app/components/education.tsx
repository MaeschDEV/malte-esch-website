const education = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-1/2 p-10">
        <h1 className="mb-5 text-2xl font-semibold text-left">
          Education & Work
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">Abitur</div>
              <p className="italic">Heinrich-Böll-Gymnasium Troisdorf</p>
              <p>Completed with grade: 2,0</p>
              <p>August 2017 - June 2025</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">
                Dual student in business informatics
              </div>
              <p className="italic">SAP SE</p>
              <p>
                I&apos;m currently doing my STAR program at SAP. In this time,
                I&apos;m going to have 6 rotations in different departments.
              </p>
              <p>September 2025</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2026</time>
              <div className="text-lg font-black">First Rotation at SAP</div>
              <p>
                During this rotation, I was part of the Oyster team in the
                S/4HANA Cloud Foundation. I had the opportunity to collaborate
                on projects and learn a great deal about CAP. Here, I was able
                to delve into NodeJS and general coding concepts for several
                months and learned a lot.
              </p>
              <p>January 2026 - May 2026 (planned)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
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
    </div>
  );
};

export default education;
