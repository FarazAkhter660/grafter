import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import { useContent } from "./hooks/useContent";
import GradientButton from "./components/ui/GradientButton";

const App = () => {
  const { data, isLoading, error, retry } = useContent();

  if (error) {
    return (
      <main className="app container app--center">
        <h1>Unable to load content</h1>
        <p>{error}</p>
        <GradientButton onClick={retry}>Retry</GradientButton>
      </main>
    );
  }

  return (
    <main className="app">
      <HeroSection navigation={data?.navigation} hero={data?.hero} isLoading={isLoading} />
      <FeaturesSection
        featuresSection={data?.featuresSection}
        carousel={data?.carousel}
        isLoading={isLoading}
      />
    </main>
  );
};

export default App;
