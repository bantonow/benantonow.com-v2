'use client';

import { TextScrambleLink } from "./ui/TextScrambleLink";
import { useState } from 'react';

export default function Home() {
  const [showMore, setShowMore] = useState<boolean>(false);
  
  return (
    <>
      {showMore ? (
        <div>
          <h1 className="text-[2.5rem] font-bold text-green mb-6">Hi, I&apos;m Benjamin Z. Antonow!</h1>
          <div className="leading-[1.4] space-y-4">
            <p>I&apos;m studying Computer Science at the University of Michigan, in my Junior year.</p>
            <p>I&apos;m a product-minded engineer who is excited about human-computer interaction and health tech. I want to work with brilliant people who build things that improve people&apos;s physical and mental health. I&apos;m especially excited about image generation, wearables, AR/VR, and leveraging AI/ML (sorry) to make whatever we&apos;re building better.</p>
            <p>I&apos;m working at <TextScrambleLink href="https://www.color.com/">Color Health</TextScrambleLink> this summer, on the <TextScrambleLink href="https://x.com/othman/status/1895100814450139627/">oncology copilot team</TextScrambleLink>. I&apos;m also an <TextScrambleLink href="https://www.8vc.com/fellowships/">8VC fellow</TextScrambleLink>.</p>
            <p>I&apos;m currently building {' '}<TextScrambleLink href="https://www.oreen.dev/">Oreen</TextScrambleLink>, an AI diagramming tool for visual learners. Try “Explain ___ to me.”</p>
            <p>I&apos;m a TA for {' '}<TextScrambleLink href="https://eecs280.org/">EECS 280</TextScrambleLink>, one of the largest courses at Michigan. I teach a lab section and do whatever I can to be an impactful teacher and mentor for my students.</p>
            <p>I spent last summer at UC Berkeley working at an open-source health tech initiative within {' '}<TextScrambleLink href="https://jupyter.org/">Project Jupyter</TextScrambleLink>. It&apos;s called {' '}<TextScrambleLink href="https://jupyterhealth.org/">JupyterHealth</TextScrambleLink>.</p>
            <p>I&apos;m involved in <TextScrambleLink href="https://v1michigan.com/">V1</TextScrambleLink>, the largest (and best) community of builders at Michigan. It&apos;s inspiring to see what some of these people are doing, and I&apos;m excited to be hacking alongside them.</p>
            <p>I worked as a Freelance Software Developer for <TextScrambleLink href="https://www.focus4democracy.org/">Focus for Democracy</TextScrambleLink>, a nonprofit dedicated to empowering political donors to make the most impactful contributions possible to strengthen democracy. I wrote code to help them raise more money.</p>
            <p>I&apos;m also the Technical Product Manager for the <TextScrambleLink href="https://www.michiganfashionmediasummit.com/">Michigan Fashion Media Summit</TextScrambleLink>, a student-run organization that organizes the largest collegiate conference for students interested in working in fashion. This past year we had more than 600 attendees. Every year it gets better (somehow).</p>
            <p>In my free time I love to read, ride my bike, do yoga, watch movies, cook, and do the NYT Crossword. I nerd out about public transit, font choices, and art.</p>
            <p>Feel free to reach out to me via email: lastname [at] umich [dot] edu. Always happy to chat :).</p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-[2.5rem] font-bold text-green mb-6">Hi, I&apos;m Ben Antonow!</h1>
          <ul className="list-none ml-0 pl-[1em] indent-[-1em] mt-4 leading-[1.4]">
            <li className="mt-4"><strong>-</strong> Studying {' '}CS<sup>2</sup> at the {' '}University of Michigan, in my 3rd year. I help teach{' '}<TextScrambleLink href="https://eecs280.org/">a very large CS course</TextScrambleLink>.</li>
            <li className="mt-4"><strong>-</strong> Interested in image/diagram generation, health tech/wearables, AR/VR, AI/ML. Even more interested in the overlaps.</li>
            <li className="mt-4"><strong>-</strong> Working at <TextScrambleLink href="https://www.color.com/">Color Health</TextScrambleLink> this summer. Also an <TextScrambleLink href="https://www.8vc.com/fellowships/">8VC fellow</TextScrambleLink>.</li>
            <li className="mt-4"><strong>-</strong> Currently building {' '}<TextScrambleLink href="https://www.oreen.dev/">Oreen</TextScrambleLink>, an AI tool for diagram generation.</li>
            <li className="mt-4"><strong>-</strong> A few other organizations have been kind enough employ me, most recently a health-tech spin-off from {' '}<TextScrambleLink href="https://jupyter.org/">Project Jupyter</TextScrambleLink>. More{' '}<TextScrambleLink href="/resume.pdf">here</TextScrambleLink>.</li>
            <li className="mt-4"><strong>-</strong> At U of M, I&apos;m also involved in{' '}<TextScrambleLink href="https://v1michigan.com/">V1</TextScrambleLink>, {' '}<TextScrambleLink href="https://www.michiganfashionmediasummit.com/">MFMS</TextScrambleLink>, and {' '}<TextScrambleLink href="https://alphathetadeltaumich.org/">ATD</TextScrambleLink>.</li>
            <li className="mt-4"><strong>-</strong> I love reading, riding my bike, yoga, legos, movies, puzzles, public transit, fonts, art, etc.</li>
            <li className="mt-4"><strong>-</strong> Email: lastname [at] umich [dot] edu</li>
          </ul>
        </div>
      )}
      <button
        className="
          absolute
          top-4
          right-4
          bg-[#e8f5e9]
          border-2
          border-[#006A4E]
          text-[#006A4E]
          text-l
          py-2.5
          px-5
          rounded
          cursor-pointer
          transition-colors
          duration-300
          z-[1000]
          hover:bg-[#006A4E]
          hover:text-white
        "
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? 'Less' : 'More'}
      </button>
    </>
  );
}
