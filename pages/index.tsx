import AboutSection from "../components/Home/AboutSection";
import BannerSection from "../components/Home/BannerSection";
import BlogSection from "../components/Home/BlogSection";
import FaqSection from "../components/Home/FaqSection";
import FeatureSection from "../components/Home/FeatureSection";
import HeroSection from "../components/Home/HeroSection";
import PricingSection from "../components/Home/PricingSection";
import ProductSection from "../components/Home/ProductSection";
import TeamSection from "../components/Home/TeamSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import Meta from "../components/Meta/Meta";

export default function Home() {
    return (
        <>
            <Meta title="AwsGym" keywords="AwsGym" description="AwsGym" />

            <HeroSection />
            <FeatureSection />
            <TeamSection />
            <AboutSection />
            <BannerSection />
            <ProductSection />
            <BlogSection />
            <TestimonialSection />
            <PricingSection />
            <FaqSection />
        </>
    );
}
