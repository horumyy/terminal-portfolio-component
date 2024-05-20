import { useAsciiText, flowerPower } from "react-ascii-text";

export function AsciiText() {
  const asciiHorumy = useAsciiText({
    font: flowerPower,
    text: "Horumy",
    isAnimated: false,
  });

  const asciiSWE = useAsciiText({
    font: flowerPower,
    text: "Sofware Engineer",
    isAnimated: false,
  });

  return (
    <pre className="command relative w-fit">
      <pre
        // @ts-expect-error {it is what it is}
        ref={asciiHorumy}
        className="text-[5.7px] flex-grow text-cyan-300  "
      />
      <pre
        style={{
          backgroundColor: "none",
        }}
        // @ts-expect-error {it is what it is}
        ref={asciiSWE}
        className="text-[6px] flex-grow text-pink-200 delete scale-50 absolute bottom-[-2rem] left-[-6.0rem] font-black"
      />
    </pre>
  );
}
