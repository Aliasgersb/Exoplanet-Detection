import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-20">
    <h3 className="text-xl font-bold text-white mb-6 tracking-tight border-b border-border pb-4">{title}</h3>
    <div className="text-gray-400 leading-[1.9] text-[0.97rem] space-y-5">{children}</div>
  </section>
);

const DiagramContainer = ({ children, caption }) => (
  <div className="my-10">
    <div className="border border-border py-12 px-6 bg-[#0A0A0A] flex items-center justify-center overflow-x-auto rounded-sm">
      {children}
    </div>
    {caption && <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-4 text-center">{caption}</p>}
  </div>
);

const TransitDiagram = () => (
  <div className="w-full max-w-md flex flex-col items-center min-w-[300px]">
    <svg viewBox="0 0 400 120" className="w-full overflow-visible">
      {/* Grid line */}
      <line x1="0" y1="30" x2="400" y2="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
      {/* Light Curve */}
      <path 
        d="M 0 30 L 140 30 L 160 90 L 240 90 L 260 30 L 400 30" 
        fill="none" 
        stroke="#4A90E2" 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      {/* Labels */}
      <text x="0" y="20" fill="#6B7280" fontSize="10" fontFamily="monospace">Relative Flux (1.0)</text>
      <text x="200" y="110" fill="#E8A838" fontSize="10" fontFamily="monospace" textAnchor="middle">Transit Trough (Planet passes star)</text>
      {/* Guide lines */}
      <line x1="140" y1="30" x2="140" y2="90" stroke="#E8A838" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
      <line x1="260" y1="30" x2="260" y2="90" stroke="#E8A838" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
      {/* Depth bracket */}
      <path d="M 380 30 L 390 30 L 390 90 L 380 90" fill="none" stroke="#6B7280" strokeWidth="1" opacity="0.5" />
      <text x="395" y="63" fill="#6B7280" fontSize="10" fontFamily="monospace">Depth</text>
    </svg>
  </div>
);

const SMOTETable = () => (
  <div className="w-full max-w-lg mx-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left font-normal text-gray-500 py-3 pr-6 text-xs uppercase tracking-widest">Dataset Phase</th>
          <th className="text-right font-normal text-gray-500 py-3 px-4 text-xs uppercase tracking-widest">Planet Hosts</th>
          <th className="text-right font-normal text-gray-500 py-3 pl-4 text-xs uppercase tracking-widest">Non-Planets</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border/40 hover:bg-white/5 transition-colors">
          <td className="py-4 pr-6 text-gray-300">Raw Kepler Training Data</td>
          <td className="py-4 px-4 text-right text-gray-400">37 <span className="text-[10px] text-gray-600 block">(0.73%)</span></td>
          <td className="py-4 pl-4 text-right text-gray-400">5,050 <span className="text-[10px] text-gray-600 block">(99.27%)</span></td>
        </tr>
        <tr className="hover:bg-white/5 transition-colors">
          <td className="py-4 pr-6 text-gray-300">After SMOTE <span className="text-[10px] text-accent block uppercase mt-1">Synthetic Balancing</span></td>
          <td className="py-4 px-4 text-right text-accent font-semibold">5,050 <span className="text-[10px] text-accent/50 block">(50%)</span></td>
          <td className="py-4 pl-4 text-right text-gray-400">5,050 <span className="text-[10px] text-gray-500 block">(50%)</span></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const CNNArchitecture = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl font-mono text-xs gap-3 md:gap-0 mx-auto">
    <div className="flex flex-col items-center">
      <div className="px-4 py-3 border border-border bg-dark text-gray-300 w-32 text-center rounded-sm">
        Input
        <div className="text-[10px] text-gray-500 mt-1">Raw Flux Array</div>
        <div className="text-[10px] text-gray-500">(3197, 1)</div>
      </div>
    </div>
    
    <div className="h-6 w-px md:w-6 md:h-px bg-border flex-shrink-0 relative">
      <div className="hidden md:block absolute right-0 top-[-3px] w-2 h-2 border-t border-r border-border transform rotate-45"></div>
      <div className="md:hidden absolute bottom-0 left-[-3px] w-2 h-2 border-b border-r border-border transform rotate-45"></div>
    </div>

    <div className="flex flex-col gap-2">
      <div className="px-4 py-3 border border-accent/20 bg-[#120F08] text-accent w-32 text-center rounded-sm">
        Conv1D
        <div className="text-[10px] text-accent/60 mt-1">Filters: 8</div>
        <div className="text-[10px] text-accent/60">ReLU</div>
      </div>
      <div className="px-4 py-2 border border-border/50 bg-dark text-gray-400 w-32 text-center text-[10px] rounded-sm">
        MaxPool1D
      </div>
    </div>
    
    <div className="h-6 w-px md:w-6 md:h-px bg-border flex-shrink-0 relative">
      <div className="hidden md:block absolute right-0 top-[-3px] w-2 h-2 border-t border-r border-border transform rotate-45"></div>
      <div className="md:hidden absolute bottom-0 left-[-3px] w-2 h-2 border-b border-r border-border transform rotate-45"></div>
    </div>

    <div className="flex flex-col gap-2">
      <div className="px-4 py-3 border border-accent/20 bg-[#120F08] text-accent w-32 text-center rounded-sm">
        Conv1D
        <div className="text-[10px] text-accent/60 mt-1">Filters: 16</div>
        <div className="text-[10px] text-accent/60">ReLU</div>
      </div>
      <div className="px-4 py-2 border border-border/50 bg-dark text-gray-400 w-32 text-center text-[10px] rounded-sm">
        MaxPool1D
      </div>
    </div>

    <div className="h-6 w-px md:w-6 md:h-px bg-border flex-shrink-0 relative">
      <div className="hidden md:block absolute right-0 top-[-3px] w-2 h-2 border-t border-r border-border transform rotate-45"></div>
      <div className="md:hidden absolute bottom-0 left-[-3px] w-2 h-2 border-b border-r border-border transform rotate-45"></div>
    </div>

    <div className="flex flex-col items-center">
      <div className="px-4 py-3 border border-border bg-dark text-white w-32 text-center rounded-sm">
        Dense
        <div className="text-[10px] text-gray-500 mt-1">Units: 16</div>
        <div className="text-[10px] text-gray-500">Activ: Sigmoid</div>
      </div>
    </div>
  </div>
);

const CompareTable = () => (
  <div className="w-full max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
    <div className="bg-[#0A0A0A] p-6 text-center">
      <h4 className="text-gray-300 font-mono text-sm mb-3">Random Forest</h4>
      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        Treats points independently. Cannot detect repeating shapes over time.
      </p>
      <div className="text-gray-400 font-mono text-xs">Result: 0 Planets</div>
    </div>
    <div className="bg-[#120F08] p-6 text-center">
      <h4 className="text-accent font-mono text-sm mb-3">CNN v1</h4>
      <p className="text-xs text-[#E8A838]/70 leading-relaxed mb-4">
        Scans sequence structurally. Understands periodic transit dependencies.
      </p>
      <div className="text-accent font-mono font-bold text-xs">Result: 2 Planets</div>
    </div>
  </div>
);

const PhaseFoldingDiagram = () => (
  <div className="w-full max-w-sm flex flex-col items-center gap-5 py-4 min-w-[280px]">
    <div className="w-full border border-border p-4 relative bg-[#0A0A0A] rounded-sm">
      <div className="absolute top-2 left-3 text-[9px] uppercase tracking-widest text-gray-500">Raw Time Series</div>
      <svg viewBox="0 0 300 40" className="w-full mt-4">
        <path d="M 0 20 L 50 18 L 60 30 L 70 21 L 120 19 L 130 31 L 140 18 L 200 22 L 210 32 L 220 20 L 300 19" fill="none" stroke="#6B7280" strokeWidth="1"/>
      </svg>
    </div>
    
    <div className="flex flex-col items-center justify-center gap-1 text-gray-500">
      <div className="h-3 w-px bg-border"></div>
      <div className="text-[10px] uppercase tracking-widest bg-[#0A0A0A] z-10">Fold on Orbital Period</div>
      <div className="h-3 w-px bg-border relative">
        <div className="absolute bottom-0 left-[-3px] w-2 h-2 border-b border-r border-border transform rotate-45"></div>
      </div>
    </div>
    
    <div className="w-full border border-accent/20 bg-[#120F08] p-4 relative rounded-sm">
     <div className="absolute top-2 left-3 text-[9px] uppercase tracking-widest text-accent">Phase Folded Curve</div>
      <svg viewBox="0 0 300 50" className="w-full mt-4 bg-transparent">
        <path d="M 0 25 L 120 25 L 135 40 L 165 40 L 180 25 L 300 25" fill="none" stroke="#E8A838" strokeWidth="2"/>
        <path d="M 0 20 L 300 20" fill="none" stroke="#E8A838" strokeWidth="1" strokeDasharray="2 2" opacity="0.1"/>
        <path d="M 0 30 L 300 30" fill="none" stroke="#E8A838" strokeWidth="1" strokeDasharray="2 2" opacity="0.1"/>
      </svg>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="max-w-3xl pt-2 pb-20">
      <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">How It Works</h2>
      <p className="text-gray-500 text-sm mb-16">
        A technical walkthrough of the science, the data, and the machine learning methodology.
      </p>

      <Section title="What are exoplanets and why do we search for them">
        <p>
          Exoplanets are planets orbiting stars outside our solar system. As of 2024, over 5,500
          have been confirmed. We search for them because they represent the first step toward
          answering one of the oldest questions in science: is life a singular accident, or does
          it emerge wherever conditions allow?
        </p>
        <p>
          The Kepler Space Telescope, launched in 2009 and retired in 2018, stared continuously
          at a patch of sky containing roughly 150,000 stars. Every 30 minutes it recorded the
          brightness of every star in its field of view — producing one of the most complete
          stellar time-series datasets ever assembled.
        </p>
      </Section>

      <Section title="The transit method — how a planet reveals itself">
        <p>
          When a planet passes directly in front of its star from Earth's perspective, it blocks
          a tiny fraction of the star's light. This causes a brief, repeating dip in the star's
          measured brightness. The Earth transiting our Sun as seen from a distant star would
          cause a 0.008% decrease in brightness — 8 parts in 100,000. Kepler was sensitive
          enough to detect dips of this magnitude.
        </p>
        
        <DiagramContainer caption="Anatomy of a planetary transit light curve">
          <TransitDiagram />
        </DiagramContainer>

        <p>
          The shape of the dip is recognizable. The star's light curve drops sharply, holds at a
          reduced level — forming a characteristic flat-bottomed trough — then rises again as the
          planet passes. This bathtub-shaped pattern, repeating at the planet's orbital period,
          is the fingerprint of a transit. A real planet producing multiple transits over years of
          observation creates a repeating, periodic signal embedded in the light curve.
        </p>
      </Section>

      <Section title="The dataset and the class imbalance problem">
        <p>
          The Kepler labeled time series dataset contains 5,087 training stars. Of these, only 37
          are confirmed planet hosts — 0.73% of the data. The remaining 5,050 are non-planet
          stars. This is a severe class imbalance. A naive classifier that labels every single
          star as a non-planet achieves 99.3% accuracy and finds exactly zero planets.
        </p>
        
        <DiagramContainer caption="Training data distribution before and after SMOTE application">
          <SMOTETable />
        </DiagramContainer>

        <p>
          To address this, SMOTE — Synthetic Minority Oversampling Technique — was applied during
          training. SMOTE generates new synthetic planet examples by interpolating between real
          ones in feature space: selecting two known planet light curves, creating a weighted
          midpoint between them, and treating that as a new training example. This brought the
          training distribution to 5,050 planet and 5,050 non-planet examples. The test set of
          570 stars was left untouched.
        </p>
      </Section>

      <Section title="Why Random Forest failed">
        <p>
          The first model attempted was a Random Forest classifier with 100 decision trees,
          treating each of the 3,197 flux values as an independent feature. A decision tree asks
          yes/no questions: "Is flux measurement 847 less than –0.3?" It builds a branching
          structure of such questions on each of its trees, then aggregates all 100 votes.
        </p>
        
        <DiagramContainer caption="Fundamental architectural difference in approach">
          <CompareTable />
        </DiagramContainer>

        <p>
          The fundamental problem is that Random Forest has no concept of sequence, order, or
          periodicity. A planet transit is not a property of individual flux values — it is a
          shape that appears at specific positions in time and repeats at a fixed interval. Knowing
          that measurement 1,200 has a particular value tells you nothing in isolation. The
          relationship between measurements 1,198, 1,199, 1,200, 1,201, and 1,202 is what matters.
          Random Forest cannot reason about this relationship. It found zero planets out of five.
        </p>
      </Section>

      <Section title="Why a Convolutional Neural Network works">
        <p>
          A 1D Convolutional Neural Network processes the light curve as a sequence. A
          convolutional filter — a small window of fixed width — slides across the entire 3,197
          measurements one step at a time. At each position, it computes a weighted sum of the
          values in the window, learning to activate strongly when it detects a particular local
          pattern. After training, the first convolutional layer develops filters that respond to
          sharp dips in flux. The second learns that these dips carry significance only when they
          repeat periodically.
        </p>
        
        <DiagramContainer caption="The 1D CNN architecture used in this application">
          <CNNArchitecture />
        </DiagramContainer>

        <p>
          The architecture used here has two convolutional layers each followed by max pooling,
          a fully connected dense layer, dropout regularization, and a sigmoid output. It was
          trained on the SMOTE-balanced dataset for 10 epochs with a class weight of 2 applied
          to planet examples. Using a prediction threshold of 0.5, it found 2 of the 5 real
          planets in the test set.
        </p>
      </Section>

      <Section title="Phase folding">
        <p>
          Phase folding is a signal processing technique that amplifies a periodic signal by
          stacking all its repetitions on top of each other. Given an estimate of the planet's
          orbital period, each of the 3,197 flux measurements is assigned a phase value between
          0 and 1 based on where it falls within the orbit. Measurements from different orbits
          that share the same phase are averaged together.
        </p>

        <DiagramContainer caption="Signal-to-noise amplification via phase folding">
          <PhaseFoldingDiagram />
        </DiagramContainer>

        <p>
          The result: random noise — which has no preferred phase — cancels out across the
          average. The transit signal — which appears at the same phase every orbit — grows
          stronger with each orbit stacked. A light curve that showed a noisy, hard-to-see dip
          is transformed into a clean 200-bin curve with a single unmistakable trough where the
          planet transit occurs. The lightkurve library's Box Least Squares algorithm was used
          to estimate the best orbital period for each star.
        </p>
      </Section>

      <Section title={<span id="why-cnn-v1">Why CNN v1 was chosen for this application</span>}>
        <p>
          Four CNN architectures were trained across different data preparation approaches.
          CNN v2 trained on BLS phase-folded data used a deeper 3-layer architecture and
          achieved perfect precision — when it called something a planet, it was never wrong —
          but found only 1 of 5 planets. CNN v3 and v4 used a slower custom phase-folding
          approach with comparable results. None exceeded 2 correctly identified planets.
        </p>
        <p>
          CNN v1, trained directly on raw normalized flux with no phase folding, found 2 out of
          5 planets with 3 false positives. It offered the best recall of any model tested, it
          is computationally simple, and it requires no phase-folding preprocessing at inference
          time — making it straightforward to integrate into this application. The chosen model
          is not necessarily the most sophisticated; it is the one that performed best on the
          metric that matters most for this problem.
        </p>
      </Section>

      <Section title="Honest limitations">
        <p>
          The fundamental constraint of this project is data. Only 37 confirmed planet examples
          exist in the training set. SMOTE can balance the distribution mathematically, but it
          cannot generate the observational diversity of 37,000 real planet light curves.
          The model generalizes from very few real examples.
        </p>
        <p>
          For comparison, the Google AstroNet model achieves 95% recall on the same problem — but
          was trained on tens of thousands of labeled examples extracted from the full Kepler data
          pipeline, with domain-expert feature engineering applied. With equivalent data, the
          architecture used here would improve substantially. This project demonstrates that the
          methodology is sound and the approach is correct. The ceiling is the data, not the model.
        </p>
      </Section>
    </div>
  );
}
