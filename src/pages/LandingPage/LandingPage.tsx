import React from "react";
import Layout from "../../Layout/Layout";
import { landingImgArr } from "./Interface";
import ToTheTop from "./ToTheTop";

function LandingPage() {
  return (
    <Layout>
      <article>
        {landingImgArr.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={process.env.PUBLIC_URL + `${item.src}`}
              alt="landing"
              className="w-screen"
            />

            <div className="hidden group-hover:flex group-hover:bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full justify-center items-center">
              <p className="text-xl font-bold text-white md:text-3xl xl:text-6xl">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </article>

      <ToTheTop />
    </Layout>
  );
}

export default LandingPage;
