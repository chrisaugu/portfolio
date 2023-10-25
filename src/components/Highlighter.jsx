import { RoughNotation } from "react-rough-notation";

const Highlighter = ({ children, color }) => {
  return (
    <RoughNotation type="highlight" show={true} color={color}>
      {children}
    </RoughNotation>
  );
};

export default Highlighter;
