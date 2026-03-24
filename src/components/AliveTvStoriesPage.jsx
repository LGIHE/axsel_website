import { lazy, Suspense } from 'react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

const stories = [
  {
    title: 'Assessment Pedagogies',
    thumbnail: 'https://i.ytimg.com/vi/pdhCwUnVM08/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=pdhCwUnVM08',
  },
  {
    title: 'The education system is as good as its assessment systems _ Dr Samuel Mutweleli, ALiVE',
    thumbnail: 'https://i.ytimg.com/vi/CpifnyjAyMo/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=CpifnyjAyMo',
  },
  {
    title: 'Integrating Life Skills and Values in East Africa Educational Systems and Communities through ALiVE.',
    thumbnail: 'https://i.ytimg.com/vi/-Ptpm_jSWs4/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=-Ptpm_jSWs4',
  },
  {
    title: 'East African Education Experts Push for Life Skills Integration in CBC',
    thumbnail: 'https://i.ytimg.com/vi/Gf-FP0Scy24/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Gf-FP0Scy24',
  },
  {
    title: 'CS Machogu says holistic education is needed in East Africa',
    thumbnail: 'https://i.ytimg.com/vi/qlbobkV0P4A/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=qlbobkV0P4A',
  },
  {
    title: 'Tool for assessing life skills among learners developed',
    thumbnail: 'https://i.ytimg.com/vi/GpAVrwgDZaw/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=GpAVrwgDZaw',
  },
  {
    title: 'EDUCATION EXPERTS IN EAST AFRICA DEVELOP TOOLS FOR ASSESSING LIFE SKILLS AND VALUES AMONG LEARNERS',
    thumbnail: 'https://i.ytimg.com/vi/Mz9UAs7tF-s/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Mz9UAs7tF-s',
  },
  {
    title: 'BOOST TO YOUTH EDUCATION PROGRAMS BY IMAGINABLE FUTURES INVESTMENT FIRM',
    thumbnail: 'https://i.ytimg.com/vi/kmW3PmnLWS0/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=kmW3PmnLWS0',
  },
  {
    title: 'INTEGRATION OF VALUES AND SKILLS IN EDUCATION',
    thumbnail: 'https://i.ytimg.com/vi/P8W9fVlIU0E/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=P8W9fVlIU0E',
  },
  {
    title: 'Educationists to assess learners\' soft skills in East Africa',
    thumbnail: 'https://i.ytimg.com/vi/WuYLY4BRnhE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=WuYLY4BRnhE',
  },
  {
    title: 'MAJORITY OF ADOLESCENTS LACK LIFE SKILLS - REPORT REVEALS',
    thumbnail: 'https://i.ytimg.com/vi/rGtIm3-AUV0/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=rGtIm3-AUV0',
  },
  {
    title: 'Assessment of Life Skills and Values in East Africa (ALiVE): A Contextualised Approach',
    thumbnail: 'https://i.ytimg.com/vi/1vJSeUUuqV4/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=1vJSeUUuqV4',
  },
  {
    title: '| MONDAY TOWNHALL | The CBC Blackboard: Life skills and Values [Part 2]',
    thumbnail: 'https://i.ytimg.com/vi/NPHGHqlvz2w/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=NPHGHqlvz2w',
  },
  {
    title: 'Policy, practice, and measurements of life skills and values in East Africa.',
    thumbnail: 'https://i.ytimg.com/vi/bFqlSTrcXB4/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=bFqlSTrcXB4',
  },
  {
    title: 'REPORT LAUNCH OF ASSESSMENT OF LIFE SKILLS AND VALUES IN EAST AFRICA (ALiVE) 2023',
    thumbnail: 'https://i.ytimg.com/vi/i7r38N6qq7Y/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=i7r38N6qq7Y',
  },
  {
    title: '| MONDAY TOWNHALL | The CBC Blackboard: Life skills and values [Part 1]',
    thumbnail: 'https://i.ytimg.com/vi/Z4bJENJEVVE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Z4bJENJEVVE',
  },
];

export default function AliveTvStoriesPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-30 pb-16">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 py-12 sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                News & Events
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold text-charcoal sm:text-5xl">
                ALiVE TV Stories
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg">
                Watch ALiVE TV highlights and media features from the official
                newsroom feed.
              </p>
              <a
                href="https://www.youtube.com/@aliveprogramme"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stories.map((video) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-xl border border-warm-gray-dark bg-white transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="overflow-hidden bg-warm-gray" style={{ height: '180px' }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="max-h-16 overflow-hidden p-3 text-sm font-medium leading-6 text-charcoal">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
