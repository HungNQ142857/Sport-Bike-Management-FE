import { useMemo, useState } from "react";
import BuyerFooter from "./components/BuyerFooter";
import BuyerHeader from "./components/BuyerHeader";
import CategoriesSection from "./components/CategoriesSection";
import CoreValuesSection from "./components/CoreValuesSection";
import ExpertsSection from "./components/ExpertsSection";
import FeaturedBikesSection from "./components/FeaturedBikesSection";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import { bikes, categories, coreValues, experts, flowSteps } from "./data";

const containerClass = "mx-auto w-full max-w-[1520px] px-4 xl:px-8";

export default function BuyerHomePage() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredBikes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matched = bikes.filter((bike) => {
      const matchesType = selectedType === "all" || bike.type === selectedType;
      const matchesQuery =
        !normalizedQuery ||
        bike.name.toLowerCase().includes(normalizedQuery) ||
        bike.brand.toLowerCase().includes(normalizedQuery) ||
        bike.seller.toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });

    if (sortBy === "priceAsc") return [...matched].sort((a, b) => a.price - b.price);
    if (sortBy === "priceDesc") return [...matched].sort((a, b) => b.price - a.price);
    if (sortBy === "ratingDesc") return [...matched].sort((a, b) => b.rating - a.rating);

    return matched;
  }, [query, selectedType, sortBy]);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-slate-900">
      <BuyerHeader containerClass={containerClass} query={query} setQuery={setQuery} scrollTo={scrollTo} />
      <main>
        <HeroSection containerClass={containerClass} scrollTo={scrollTo} />
        <CategoriesSection
          containerClass={containerClass}
          categories={categories}
          setSelectedType={setSelectedType}
          scrollTo={scrollTo}
        />
        <CoreValuesSection containerClass={containerClass} coreValues={coreValues} />
        <FeaturedBikesSection
          containerClass={containerClass}
          filteredBikes={filteredBikes}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setQuery={setQuery}
        />
        <ProcessSection containerClass={containerClass} flowSteps={flowSteps} />
        <ExpertsSection containerClass={containerClass} experts={experts} scrollTo={scrollTo} />
      </main>
      <BuyerFooter containerClass={containerClass} />
    </div>
  );
}
