import React from "react";
import uscLogo from "../Assets/usc-logo.svg";
import witLogo from "../Assets/wit-logo.png";


const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {/* USC */}
          <div className="flex items-center rounded-md border border-border bg-card p-5 shadow-sm">
            {/* Logo */}
            <img
              src={uscLogo}
              alt="USC Logo"
              className="w-16 h-16 object-contain rounded-full bg-muted mr-5"
            />

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">
                Master of Science in Computer Science
              </h3>
              <h4 className="text-sm text-muted-foreground">
                University of Southern California, Los Angeles, California
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                August 2023 - May 2025
              </p>
              <p className="mt-2">
                <strong>CGPA:</strong> 3.62/4.00
              </p>
            </div>
          </div>

          {/* Walchand */}
          <div className="flex items-center rounded-md border border-border bg-card p-5 shadow-sm">
            {/* Logo */}
            <img
              src={witLogo}
              alt="Walchand Logo"
              className="w-16 h-16 object-contain rounded-full bg-muted mr-5"
            />

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Engineering in Information Technology
              </h3>
              <h4 className="text-sm text-muted-foreground">
                Walchand Institute of Technology, Solapur, Maharashtra
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                August 2017 - May 2021
              </p>
              <p className="mt-2">
                <strong>CGPA:</strong> 9.2/10.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
