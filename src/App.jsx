import { useState } from 'react'
import './App.css'
import Flashcard from './components/flashcard'
import Question from './components/question'

function App() {
  const [ithCard, setIthCard] = useState(0)

  const vocabs = {
    0: {
      word: "Lactose",
      def: "Sugar found naturally in milk of most mammals"
    },
    1: {
      word: "Cellulose",
      def: "Structural found in plant cell wall"
    },
    2: {
      word: "Chitin",
      def: "Component of insect and crustacean and fungal cell walls"
    },
    3: {
      word: "Polysaccharides",
      def: "Components of cell membranes"
    },
    4: {
      word: "Starch",
      def: "Storage form of glucose in plants"
    },
    5: {
      word: "Glycogen",
      def: "Storage form of glucose in animals"
    },
    6: {
      word: "Fats",
      def: "Consist of glycerol linked to three fatty acids"
    },
    7: {
      word: "Unsaturated fatty acids",
      def: "Fatty acids that contain one or more double bonds. Are Typical of plant oils"
    },
    8: {
      word: "Saturated fatty acids",
      def: "Fat with the maximum number of hydrogens. Found in animal fats"
    },
    9: {
      word: "Cholesterol",
      def: "Common component in animal cell membranes and is also the precursor for making other steroids, including sex hormones"
    },
    10: {
      word: "Proteins",
      def: "Polymers of amino acids"
    },
  };

  let num = Object.keys(vocabs).length;
  

  const nextCard = () => {
    document.querySelector(".card").classList.remove("flip");
    setIthCard( (ithCard + 1) % Object.keys(vocabs).length)
  }

  return (
    <>
      <div className='header'>
        <h2>Biology - Gen, Evol, and Eco EXAM 1 flashcard</h2>
      </div>
        <Flashcard flashcard={vocabs[ithCard]}/>
      <div className='question'>
        <h3>What is the definition of {vocabs[ithCard].word}?</h3>
      </div>
      <Question question={vocabs[ithCard]}/>
      <button onClick={nextCard}>Next Card</button>
      <div>
        <h3>{ithCard+1}/{num}</h3>
      </div>
    </>
  )
}

export default App