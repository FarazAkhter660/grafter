import content from "../data/content.json";

const MIN_DELAY_MS = 1000;
const MAX_DELAY_MS = 1500;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const randomDelay = () =>
  Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS + 1)) + MIN_DELAY_MS;

const fetchContent = async () => Promise.resolve(content);

export const fetchHeroContent = async () => {
  await wait(randomDelay());
  const content = await fetchContent();
  return { navigation: content.navigation, hero: content.hero };
};

export const fetchFeaturesContent = async () => {
  await wait(randomDelay());
  const content = await fetchContent();
  return { featuresSection: content.featuresSection, carousel: content.carousel };
};
