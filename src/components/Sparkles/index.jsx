import React from "react"
import styled, {keyframes} from "styled-components";

// // Default color is a bright yellow
// const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
// const generateSparkle = (color = DEFAULT_COLOR) => {
//   return {
//     id: String(random(10000, 99999)),
//     createdAt: Date.now(),
//     // Bright yellow color:
//     color,
//     size: random(10, 20),
//     style: {
//       // Pick a random spot in the available space
//       top: random(0, 100) + '%',
//       left: random(0, 100) + '%',
//       // Float sparkles above sibling content
//       zIndex: 2,
//     },
//   }
// }
//
// function SparkleInstance({ color, size, style }) {
//   return (
//     <Wrapper>
//         <Svg
//           width={size}
//           height={size}
//           viewBox="0 0 160 160"
//           fill="none"
//           style={style}
//         >
//           <path
//             d="all that stuff from before"
//             fill={color}
//           />
//           <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" fill="#FFC700"/>
//         </Svg>
//           <Svg>
//             {/* Same stuff here */}
//           </Svg>
//     </Wrapper>
//   );
// }
// const growAndShrink = keyframes`
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1);
//   }
//   100% {
//     transform: scale(0);
//   }
// `;
// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(180deg);
//   }
// `;
// const Wrapper = styled.div`
//   position: absolute;
//   pointer-events: none;
//   animation: ${growAndShrink} 600ms ease-in-out forwards;
// `
// const Svg = styled.svg`
//   animation: ${spin} 600ms linear forwards;
// `;
//
//
// function Sparkles({ children }) {
//   const sparkle = generateSparkle();
//   return (
//     <Wrapper>
//       <SparkleInstance
//         color={sparkle.color}
//         size={sparkle.size}
//         style={sparkle.style}
//       />
//       <ChildWrapper>
//         {children}
//       </ChildWrapper>
//     </Wrapper>
//   );
// }
//
// // const Wrapper = styled.span`
// //   position: relative;
// //   display: inline-block;
// // `;
// const ChildWrapper = styled.strong`
//   position: relative;
//   z-index: 1;
//   font-weight: bold;
// `;
//
// const sparkleAnimation = keyframes`
//   0% {
//     transform: scale(0) rotate(0deg);
//   }
//   50% {
//     transform: scale(1) rotate(90deg);
//   }
//   100% {
//     transform: scale(0) rotate(180deg);
//   }
// `;
// const Svg = styled.svg`
//   position: absolute;
//   animation: ${sparkleAnimation} 600ms forwards;
// `;
//
// export default Sparkels

















const DEFAULT_COLOR = '#FFC700';
const generateSparkle = color => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  };
  return sparkle;
};
const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => generateSparkle(color));
  });
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );
  return (
    <Wrapper {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};
const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;
const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;
const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Sparkles;