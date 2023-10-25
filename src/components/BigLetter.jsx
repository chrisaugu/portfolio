import React from 'react';
import PropTypes from "prop-types";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlighter } from "./RainbowHighlighter";

const BigLetter = ({word, lead}) => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlighter color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlighter>
          <RainbowHighlighter color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Designer.
            </h1>
          </RainbowHighlighter>
        </RoughNotationGroup>
      </div>
    </div>
  );
}

BigLetter.propType = {
  word: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired
}

export default BigLetter;