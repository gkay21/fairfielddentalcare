import AboutSection from "@components/sections/About";
import HeroOneSection from "@components/sections/HeroOne";
import LatestPostsSection from "@components/sections/LatestPosts";
import ReputationSection from "@components/sections/Reputation";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import Layouts from "@layouts/Layouts";
import { getSortedPostsData } from "@library/posts";
import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  return (
    <Layouts>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <ReputationSection />
      <TeamSection />
      <VideoSection />
      <TestimonialSlider />
      <LatestPostsSection posts={props.posts} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
