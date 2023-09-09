import Data from "@data/sections/related-projects.json";
import Link from "next/link";

const RelatedProjectsSection = ( Content ) => {

    return (
        <div className="mil-gray-bg mil-portfolio-fw mil-appearance">

            <div className="container mil-p-120-90">

                <div className="row justify-content-between">
                    <div className="col-xl-6">

                        <h3 className="mil-link mil-softened-60 mil-mb-30">{Data.subtitle}</h3>
                        <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : Data.title}} />

                    </div>
                    <div className="col-xl-4 mil-mb-120">

                        <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Data.description}</p>
                        
                        {/* button */}
                        <div className="mil-appearance">
                            <Link href={Data.button.link} className="mil-link-hover">{Data.button.label}</Link>
                        </div>

                    </div>

                    {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                    <div className="col-lg-4" key={`related-project-${key}`}>

                        <div className="mil-portfolio-item mil-appearance mil-mb-30">
                            <div className="mil-cover mil-square mil-scale-down-trigger mil-accent-trigger">
                                <div className="mil-image-frame">
                                    {item.type != "video" &&
                                    <img src={item.image} alt={item.title} />
                                    }
                                    {item.type == "video" &&
                                    <video className="mil-video-background mil-scale-img" data-value="1.2" autoPlay="autoplay" loop="loop" muted="" playsInline="" onContextMenu={(e)=> e.preventDefault()} preload="auto">
                                        <source src={item.image} />
                                    </video>
                                    }
                                </div>
                            </div>
                            <Link href={`/portfolio/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
                                <div className="mil-text-bg mil-mb-5">
                                    <h5 className="mil-light">{item.title}</h5>
                                </div>
                                <br />
                                <div className="mil-text-bg">
                                    <p className="mil-link mil-accent">{item.category}</p>
                                </div>
                            </Link>
                            <a data-fancybox="gallery2" data-no-swup href={item.image} className="mil-zoom-icon mil-hidden-trigger">
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                            </a>
                        </div>

                    </div>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default RelatedProjectsSection;