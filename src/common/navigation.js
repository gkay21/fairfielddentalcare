import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const navigation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const topAnim = gsap
    .from(".mil-top-panel.mil-animated", {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999999,
    onUpdate: (self) => {
      self.direction === -1 ? topAnim.play() : topAnim.reverse();
    },
  });
};
