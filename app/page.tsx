import FooterSection from "@/components/homepage/footer";
import HeroSection from "@/components/homepage/hero-section";
import FeaturesSection from "@/components/homepage/features-section";
import StatsSection from "@/components/homepage/stats-section";
import Integrations from "@/components/homepage/integrations";
import QuickStartGuide from "@/components/homepage/quick-start";
import { getSubscriptionDetails } from "@/lib/subscription";
import PricingTable from "./pricing/_component/pricing-table";

export default async function Home() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <Integrations />
      <QuickStartGuide />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <FooterSection />
    </>
  );
}
