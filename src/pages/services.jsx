import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

const Services = (props) => {
  const Content = {
    title: "Our top-quality services",
    subtitle: "Services",
    description1:
      "We provide a variety of comprehensive services to fit your needs. See a complete list of our services and additional information below.",
  };

  return (
    <Layouts>
      <PageBanner pageImage={"/img/hero/1.png"} pageTitle={"Services"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between">
          <div className="col-lg-12 mil-mb-60">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.subtitle}
            </span>
            <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>

            <p className="mil-appearance mil-mb-30">{Content.description1}</p>
            <p className="mil-appearance mil-mb-30">{Content.description2}</p>

            <div className="mil-deco mil-appearance"></div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              {props.services.map((item, key) => (
                <div className="col-xl-4 col-lg-6" key={`services-item-${key}`}>
                  {/* service card */}
                  <Link
                    href={`/services/${item.id}`}
                    className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30"
                  >
                    <div className="mil-card-content">
                      {/* icon */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mil-card-icon"
                      />
                      <div>
                        {/* text */}
                        <h5 className="mil-mb-10">{item.title}</h5>
                        <p className="mil-softened-40">{item.short}</p>
                      </div>
                    </div>
                  </Link>
                  {/* service card end */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* services end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
