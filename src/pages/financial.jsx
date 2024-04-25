import Layouts from "@/src/layouts/Layouts";

import { getSortedPostsData } from "../lib/posts";
import { getFinancialData } from "../lib/financial";

import PageBanner from "@/src/components/PageBanner";
import LatestPostsSection from "../components/sections/LatestPosts";
import CallToActionSection from "../components/sections/CallToAction";

const Financial = ({ posts, postData }) => {
  return (
    <Layouts>
      <PageBanner pageImage={"/img/hero/1.png"} pageTitle={"About"} />

      {/* about */}
      <div className="service container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {postData.short}
            </span>
            <h3 className="mil-appearance mil-mb-30">{postData.title}</h3>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {postData.description.map((desc, desc_i) => (
                <p
                  className={`${
                    desc_i === 0 && "mil-first-letter"
                  } mil-appearance mil-mb-30`}
                >
                  {desc}
                </p>
              ))}
              <div className="mil-deco"></div>
            </div>
          </div>
        </div>
        <div
          className="mil-mt-55 single-post-text"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
      {/* about end */}

      <CallToActionSection />
      <LatestPostsSection posts={posts} />
    </Layouts>
  );
};
export default Financial;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const postData = await getFinancialData();

  return {
    props: {
      posts: allPosts,
      postData,
    },
  };
}
