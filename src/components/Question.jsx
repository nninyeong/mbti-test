const Question = ({ question, onChange, answers }) => {
  return (
    <div>
      <p className='font-bold'>{question.question}</p>
      {question.options.map((option, optionIndex) => {
        return (
          <label
            key={optionIndex}
            className='block'
          >
            <input
              type='radio'
              name={`${question.id - 1}`}
              value={option}
              onChange={() => {
                onChange(question.id - 1, option);
              }}
              checked={answers[question.id - 1] === option}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
};

export default Question;
