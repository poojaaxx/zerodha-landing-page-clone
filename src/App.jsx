import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { TrustSection, ApiBanner, PricingSection, EducationSection, AccountSection } from './components/Sections';
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main" tabIndex="-1"><Hero /><TrustSection /><ApiBanner /><PricingSection /><EducationSection /><AccountSection /></main></>;
}
