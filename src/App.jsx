import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeferredSection from './components/DeferredSection';
import NotFound from './components/NotFound';
import ResourcesPage from './components/ResourcesPage';
import ContactPage from './components/ContactPage';
import OpenSourcePage from './components/OpenSourcePage';
import NewsroomPage from './components/NewsroomPage';
import AboutAxselPage from './components/AboutAxselPage';
import AliveTvStoriesPage from './components/AliveTvStoriesPage';
import ACIPProgramPage from './components/ACIPProgramPage';

const ImpactCounter = lazy(() => import('./components/ImpactCounter'));
const ThreeLevers = lazy(() => import('./components/ThreeLevers'));
const ALiVELegacy = lazy(() => import('./components/ALiVELegacy'));
const EvidenceHub = lazy(() => import('./components/EvidenceHub'));
const ACSSPortal = lazy(() => import('./components/ACSSPortal'));
const SELDashboard = lazy(() => import('./components/SELDashboard'));
const PartnerInquiry = lazy(() => import('./components/PartnerInquiry'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback({ minHeight = 320 }) {
  return <div aria-hidden="true" style={{ minHeight }} />;
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DeferredSection minHeight={360} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <ImpactCounter />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="approach" minHeight={420} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={420} />}>
            <ThreeLevers />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="legacy" minHeight={520} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <ALiVELegacy />
          </Suspense>
        </DeferredSection>
        {/* <DeferredSection anchorId="evidence" minHeight={460} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={460} />}>
            <EvidenceHub />
          </Suspense>
        </DeferredSection> */}
        <DeferredSection anchorId="acip" minHeight={560} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={560} />}>
            <ACSSPortal />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="dashboard" minHeight={620} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={620} />}>
            <SELDashboard />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="partner" minHeight={520} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <PartnerInquiry />
          </Suspense>
        </DeferredSection>
      </main>
      <DeferredSection minHeight={320} rootMargin="450px 0px">
        <Suspense fallback={<SectionFallback minHeight={320} />}>
          <Footer />
        </Suspense>
      </DeferredSection>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/newsroom" element={<NewsroomPage />} />
      <Route path="/alive-tv-stories" element={<AliveTvStoriesPage />} />
      <Route path="/about-axsel" element={<AboutAxselPage />} />
      <Route path="/acip-program" element={<ACIPProgramPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/open-source" element={<OpenSourcePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
