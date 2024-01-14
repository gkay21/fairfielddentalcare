import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import Layouts from "@layouts/Layouts";
import { getFaqsData } from "@library/faqs";
import Link from "next/link";
import { useEffect } from "react";
import { accordion } from "../common/utilits";

const FAQs = ({ postData }) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts>
      <PageBanner pageImage={postData.fullImage} pageTitle={postData.title} />

      {/* service */}
      <div className="container mil-content-frame mil-appearance mil-p-120-120">
        <div className="row justify-content-between">
          <div className="col-lg-5 mil-mb-120">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              Services
            </span>
            <h3 className="mil-appearance mil-mb-30">{postData.title}</h3>

            <div
              className="service-description mil-appearance mil-mb-30"
              dangerouslySetInnerHTML={{ __html: postData.description }}
            />

            {/* <Link
              href={postData.button.link}
              className="mil-button mil-button-lg mil-scale-down-trigger mil-accent-trigger"
            >
              <span>{postData.button.label}</span>
            </Link> */}
          </div>
          <div className="col-lg-6 mil-mt-60-adapt">
            <div className="mil-accordion">
              {postData.list.map((item, key) => (
                <div
                  className="mil-accordion-group mil-appearance"
                  key={`service-list-${key}`}
                >
                  <div className="mil-accordion-menu">
                    <h6>{item.label}</h6>

                    <div className="mil-accordion-plus">+</div>
                    <div className="mil-accordion-minus">-</div>
                  </div>
                  <div
                    className="mil-accordion-content"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* service end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default FAQs;

export async function getStaticProps() {
  const postData = await getFaqsData();

  return {
    props: {
      postData,
    },
  };
}
