import React, { Component } from "react";

const Services = () => {
  return (
    <div id="services" className="content-center px-60 pr-60">
      <br />
      <h1 className="text-3xl text-[#20b2aa]">Services & Rates</h1>
      <br />
      <p>
        All edits will be done via Word document so that changes are easily
        trackable, and margin comments are linked to their specific sentence.
      </p>
      <br />
      <hr />
      <br />

      <table className="">
        <tr className="border-b">
          <td className="">
            <h2 className="text-2xl text-[#20b2aa]">Sample Edit</h2>
          </td>
          <td>
            <p>
              The Sample Edit is offered for Copy Edits & Proofreads. This helps
              you get an idea of our editing style, and determine if we’re a
              good fit for each other.
            </p>
            <br />
            <p>Manuscripts 5,000 words or more: first 2,500 words free.</p>
            <br />
            <p>Manuscripts under 5,000 words: first 500 words free.</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="border-b">
          <td>
            <h2 className="text-2xl text-[#20b2aa]">Critique</h2>
          </td>
          <td>
            <p>
              The Critique consists of a full read-through of the entire
              manuscript and providing an in-depth review on structure, story
              arc, character development, transitions, clarity, pacing,
              dialogue, plot, and point of view.
            </p>
            <br />
            <p>Price: $100-$300</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="border-b">
          <td className="pr-10">
            <h2 className="text-2xl text-[#20b2aa]">Developmental Editing</h2>
          </td>
          <td>
            <p>
              The Developmental Edit focuses on the story as a whole. I’ll be
              paying very close attention to things such as the plot, theme,
              character development, point of view, transitions, dialogue,
              structure, and pacing. While I always have a keen eye for
              punctuation and errors, this will not be my primary focus during a
              developmental edit.
            </p>
            <br />
            <p>
              The Developmental Edit usually takes place before any beta reads.
            </p>
            <br />
            <p>Price: $0.03/word</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="border-b">
          <td>
            <h2 className="text-2xl text-[#20b2aa]">Copy Editing</h2>
          </td>
          <td>
            <p>
              The Copy Edit will identify any inconsistencies, redundancy, and
              repetition while focusing on clarity, diction, syntax, and
              transitions, as well as correcting grammar, punctuation,
              capitalization, spelling, abbreviations, and hyphenations.
            </p>
            <br />
            <p>
              The Copy Edit usually takes place after any Developmental Editing
              and beta reads.
            </p>
            <br />
            <p>Price: $0.02/word</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="border-b">
          <td>
            <h2 className="text-2xl text-[#20b2aa]">Proofreading</h2>
          </td>
          <td>
            <p>
              The Proofread is the last step before publishing. It consists of
              keeping an eye out for proper formatting, line & word spacing,
              typographical errors, missing words, and punctuation.
            </p>
            <br />
            <p>Price: $0.01/word</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="border-b">
          <td>
            <h2 className="text-2xl text-[#20b2aa]">Formatting</h2>
          </td>
          <td>
            <p>
              Formatting consists of converting your manuscript into the desired
              formats (ebook, print, kindle, kobo, nook, apple, & google play),
              adding any images that may be desired, and setting font, chapter
              titles, and cover titles.
            </p>
            <br />
            <p>Price: $100-$300</p>
            <br />
          </td>
        </tr>
        <br />
        <tr className="">
          <td className="pr-10">
            <h2 className="text-2xl text-[#20b2aa]">Website Building</h2>
          </td>
          <td>
            <p>Price: $50/hr</p>
          </td>
        </tr>
      </table>
      <br />
      <hr />
      <br />
      <p>
        * 10% Discount available on Developmental Edit, Copyedit, and Proofread
        for manuscripts over 75,000 words.
        <br />
        <br />
        ** 10% Discount available for bundles (i.e. copy edit & proofread).
        <br />
        <br />
        *** Potential payment arrangements available for second half upon
        request.
      </p>
      <br />
    </div>
  );
};

export default Services;
