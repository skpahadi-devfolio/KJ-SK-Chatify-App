import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'KJ&SK ChatifyApp', // Types 'One'
        1000, // Waits 1s
        'Connect Smoothly',
        2000,
        'Lets start your Connection',
        1000
      ]}
      cursor={true}
      repeat={Infinity}
      className="text-3xl"
    />
  )
}

export default TypingText
