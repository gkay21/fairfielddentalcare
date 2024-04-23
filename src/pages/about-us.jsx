import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

const Team = () => {
  const Content = {
    subtitle: "Team Members",
    title: "Meet the Team at Fairfield Dental Care",
    description1:
      "Our entire team enjoys getting to know our patients and doing a great job when looking after their smiles. When we have the opportunity to get to know you and your family, we can better help you achieve your goals for your smile and your health.",
    description2:
      "Our friendly and experienced team looks forward to making your dental visits comfortable and an experience that you actually look forward to.",
    items: [
      {
        image: "/img/team/1.png",
        name: "Dr James El-Khoury",
        role: "Principal Dentist",
      },
      {
        image: "/img/team/coming-soon-m.png",
        name: "Dr. Jacob Guirguis",
        role: "Dentist",
      },
      {
        image: "/img/team/2.png",
        name: "Kerri Anne Le",
        role: "Oral Health Therapist",
      },
      {
        image: "/img/team/coming-soon-f.png",
        name: "Sibel Serce",
        role: "Oral Health Therapist",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageImage={"/img/hero/1.png"} pageTitle={"Team"} />

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-120">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.subtitle}
            </span>
            <h3
              className="mil-appearance mil-mb-30"
              dangerouslySetInnerHTML={{ __html: Content.title }}
            />
          </div>
          <div className="col-lg-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Content.description1}
            </p>

            <p className="mil-appearance mil-mb-30">{Content.description2}</p>
            <div className="mil-deco mil-appearance"></div>
          </div>
        </div>

        <div className="row">
          {Content.items.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
      </div>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;
