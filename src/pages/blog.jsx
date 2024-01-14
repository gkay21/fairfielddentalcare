import { PER_PAGE } from "./blog/page/[page]";
import PaginatedBlog from "@components/PaginatedBlog";
import Pagination from "@components/Pagination";

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "../lib/posts";

export const Content = {
  subtitle: "Blog",
  title:
    "Dental Dialogues: <br/>Unveiling the Secrets to a Brighter, Healthier Smile",
  description1:
    "Welcome to our blog, an informative hub dedicated to illuminating the path toward optimal oral health and a dazzling smile.",
  description2:
    "Dive into a world of dental expertise where our team shares valuable insights, practical tips, and the latest trends in dental care. From articles on preventive measures and treatment options to inspiring stories of smile transformations, our blog serves as your trusted companion in navigating the realm of dental wellness.",
  description3:
    "Join us on this journey as we unravel the secrets to maintaining healthy teeth, bright smiles, and overall well-being.",
};

const Blog = ({ posts, totalPosts, currentPage }) => {
  return (
    <Layouts>
      <PageBanner pageImage={"/img/content/11.jpg"} pageTitle={"Blog"} />

      <div className="mil-spacer" />

      {/* blog */}
      <div className="mil-blog-section">
        <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between mil-mb-120">
            <div className="col-xl-5">
              <h3 className="mil-link mil-appearance mil-accent mil-mb-30">
                {Content.subtitle}
              </h3>
              <h3
                className="mil-mb-30 mil-appearance"
                dangerouslySetInnerHTML={{ __html: Content.title }}
              />
            </div>
            <div className="col-xl-6">
              <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
                {Content.description1}
              </p>
              <p className="mil-appearance mil-mb-30">{Content.description2}</p>
              <p className="mil-appearance mil-mb-30">{Content.description3}</p>
              <div className="mil-deco mil-appearance"></div>
            </div>
          </div>
          <div className="row">
            <PaginatedBlog items={posts} />
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={totalPosts}
          perPage={PER_PAGE}
          renderPageLink={(page) =>
            page === 1 ? `/blog` : `/blog/page/${page}`
          }
        />
      </div>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData(PER_PAGE, 1);

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,
    },
  };
}
