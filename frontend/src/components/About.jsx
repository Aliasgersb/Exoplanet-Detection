import React from 'react';

export default function About() {
  return (
    <div className="max-w-2xl pt-2 pb-20">
      <h2 className="text-3xl font-bold mb-12 tracking-tight text-white">About</h2>

      <p className="text-gray-400 leading-[1.9] text-[0.97rem] mb-8">
        This project was built by Aliasger Bhabhrawala, a second year student at BITS Pilani
        pursuing a dual degree in MSc Physics and BTech Manufacturing.
      </p>
      <p className="text-gray-400 leading-[1.9] text-[0.97rem] mb-8">
        The project represents an intersection of two genuine interests — understanding the universe
        and building things. The physics background provided the scientific context. The engineering
        background provided the tools. The result is a complete machine learning pipeline applied
        to one of the most compelling questions in science: are there other worlds out there?
      </p>
      <p className="text-gray-400 leading-[1.9] text-[0.97rem] mb-16">
        The answer, at least in the Kepler data, is yes. Two of them, confirmed.
      </p>

      <div className="border-t border-border pt-10 space-y-4">
        <div className="flex gap-8 text-sm">
          <span className="text-gray-600 w-20">Contact</span>
          <a
            href="mailto:aliasgersb@gmail.com"
            className="text-gray-300 hover:text-accent transition-colors"
          >
            aliasgersb@gmail.com
          </a>
        </div>
        <div className="flex gap-8 text-sm">
          <span className="text-gray-600 w-20">Institution</span>
          <span className="text-gray-400">BITS Pilani</span>
        </div>
        <div className="flex gap-8 text-sm">
          <span className="text-gray-600 w-20">Dataset</span>
          <span className="text-gray-400">NASA Kepler Labeled Time Series (Kaggle)</span>
        </div>
      </div>
    </div>
  );
}
