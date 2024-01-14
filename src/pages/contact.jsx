import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import appData from "@data/app.json";

const Contact = () => {
  const Content = {
    subtitle: "Contact",
    title: "Get in touch",
    info: [
      {
        icon: "/img/icons/4.svg",
        label: "Email",
        value: `<h6><a href="mailto:info@fairfielddentalcare.com.au">info@fairfielddentalcare.com.au</a></h6>`,
      },
      {
        icon: "/img/icons/7.svg",
        label: "Phone",
        value: `<h6><a href="tel:+61297241163">(02) 9724 1163</a></h6>`,
      },
      {
        icon: "/img/icons/8.svg",
        label: "Location",
        value: `<h6><a href="https://maps.app.goo.gl/mJcJic2byQwqfjJY7">2/6 Harris St, Fairfield NSW 2165</a></h6>`,
      },
      {
        icon: "/img/icons/2.svg",
        label: "Opening Hours",
        value: `
        <div>
          <div class="hours-grid">
            <h6>Monday</h6>
            <p>8:30AM - 6:00PM</p>
          </div>
          <div class="hours-grid">
            <h6>Tuesday</h6>
            <p>8:30AM - 7:30PM</p>
          </div>
          <div class="hours-grid">
            <h6>Wednesday*</h6>
            <p>9:00AM - 5:00PM</p>
          </div>
          <div class="hours-grid">
            <h6>Thursday</h6>
            <p>8:30AM - 6:00PM</p>
          </div>
          <div class="hours-grid">
            <h6>Friday</h6>
            <p>8:30AM - 5:00PM</p> 
          </div>
          <div class="hours-grid">  
            <h6>Saturday</h6>
            <p>8:30AM - 12:30PM</p>
          </div>
          <div class="hours-grid">
            <h6>Sunday</h6>
            <p>Closed</p>
          </div>
        </div>
        `,
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageImage={"/img/content/5.jpg"} pageTitle={"Contact"} />

      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-90">
          <div className="col-xl-5">
            <h3 className="mil-link mil-appearance mil-accent mil-mb-30">
              {Content.subtitle}
            </h3>
            <h3 className="mil-mb-60 mil-appearance">{Content.title}</h3>
          </div>
          <div className="col-xl-6">
            <div className="row mil-mt-30-adapt">
              {Content.info.map((item, key) => (
                <div key={`contact-item-${key}`}>
                  <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                    <div className="mil-icon mil-accent">
                      {item.icon && <img src={item.icon} alt={item.label} />}
                    </div>
                    <div className="mil-icon-box-text">
                      <p>{item.label}</p>
                      <div dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append("name", values.name);
            data.append("email", values.email);
            data.append("message", values.message);

            fetch(form.action, {
              method: "POST",
              body: data,
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  status.innerHTML = "Thanks for your submission!";
                  form.reset();
                } else {
                  response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                      status.innerHTML = data["errors"]
                        .map((error) => error["message"])
                        .join(", ");
                    } else {
                      status.innerHTML =
                        "Oops! There was a problem submitting your form";
                    }
                  });
                }
              })
              .catch((error) => {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              });

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              action={appData.settings.formspreeURL}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="text"
                      name="name"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <label className="mil-link">Name</label>
                    <span></span>
                    <em>{errors.name && touched.name && errors.name}</em>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <label className="mil-link">Email*</label>
                    <span></span>
                    <em>{errors.email && touched.email && errors.email}</em>
                  </div>
                </div>
                <div className="col-lg-12">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <textarea
                      name="message"
                      className="mil-link"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <label className="mil-link">Message</label>
                    <span></span>
                    <em>
                      {errors.message && touched.message && errors.message}
                    </em>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="mil-text-sm mil-mb-30">
                    *Your personal information will not be disclosed to third
                    parties.
                  </p>
                </div>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30"
                    disabled={isSubmitting}
                  >
                    <span>Send message</span>
                  </button>
                </div>
                <div className="form-status" id="contactFormStatus" />
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Fairfield+Dental+Care;+Dr+James+El-Khoury,+Dr+Michael+Tran+and+Associates,+Harris+Street,+Fairfield+NSW,+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map end */}
    </Layouts>
  );
};
export default Contact;
