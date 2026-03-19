import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeferredSection from './components/DeferredSection';

const ImpactCounter = lazy(() => import('./components/ImpactCounter'));
const ThreeLevers = lazy(() => import('./components/ThreeLevers'));
const ALiVELegacy = lazy(() => import('./components/ALiVELegacy'));
const EvidenceHub = lazy(() => import('./components/EvidenceHub'));
const ACSSPortal = lazy(() => import('./components/ACSSPortal'));
const SELDashboard = lazy(() => import('./components/SELDashboard'));
const PartnerInquiry = lazy(() => import('./components/PartnerInquiry'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback({ minHeight = 320 }) {
  return <div aria-hidden="true" style={{ minHeight }} />;
}

function App() {
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
        <DeferredSection minHeight={420} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={420} />}>
            <ThreeLevers />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="legacy" minHeight={520} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <ALiVELegacy />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="evidence" minHeight={460} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={460} />}>
            <EvidenceHub />
          </Suspense>
        </DeferredSection>
        <DeferredSection anchorId="acsss" minHeight={560} rootMargin="450px 0px">
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
        <DeferredSection anchorId="contact" minHeight={520} rootMargin="450px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <ContactForm />
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

export default App;
