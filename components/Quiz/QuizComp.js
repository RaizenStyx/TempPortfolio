import questions from '../../questions.json'
import { useState } from 'react'
import { SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GridConAns, QuestionContainer, AnswerContainer, ButtonContainer, RadioBtn, QuizBtn } from './QuizCompStyles';


export default function QuizComp() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
      };
      
      const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
      };
    
      const handleAnswerOption = (answer) => {
        setSelectedOptions([
          (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
      };
    
      const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
          questions[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      };

      return (
        <>
        {showScore ? (
            <SectionTitle style={{margin: 'auto', marginBottom: '20rem'}}>
                You scored {score} out of {questions.length}
            </SectionTitle>
            ) : (
            <>
                <QuestionContainer>
                <SectionText style={{marginBottom: "0"}}>
                    Question {currentQuestion + 1} of {questions.length}
                </SectionText>
                <SectionSubText style={{marginTop: '-25px'}}>
                    {questions[currentQuestion].question}
                </SectionSubText>
                </QuestionContainer>
                <AnswerContainer>
                {questions[currentQuestion].answerOptions.map((answer, index) => (
                    <GridConAns
                    key={index}
                    onClick={(e) => handleAnswerOption(answer.answer)}
                    >
                    <RadioBtn
                        type="radio"
                        name={answer.answer}
                        value={answer.answer}
                        checked={
                        answer.answer ===
                        selectedOptions[currentQuestion]?.answerByUser
                        }
                        onChange={(e) => handleAnswerOption(answer.answer)}
                    />
                    <SectionSubText>{answer.answer}</SectionSubText>
                    </GridConAns>
                ))}
                </AnswerContainer>
                <ButtonContainer>
                
                <QuizBtn
                    onClick={handlePrevious}
                >
                    Previous
                </QuizBtn>
               <div style={{margin: '50px'}}></div>
                <QuizBtn
                    onClick={
                    currentQuestion + 1 === questions.length
                        ? handleSubmitButton
                        : handleNext
                    }
                >
                    {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                </QuizBtn>
                </ButtonContainer>
            </>
            )}
        </>
    )
}