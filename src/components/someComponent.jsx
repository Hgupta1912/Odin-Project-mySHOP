import { useState } from 'react';

function SomeComponent({ header, formSchema, onSubmit, onUnsubmit, id }) {
    const [answers, setAnswers] = useState(
        formSchema.reduce((accumulator, currentItem) => {
            accumulator[currentItem.name] = '';
            return accumulator;
        }, {})
    );

    const [isSubmitted, setIsSubmitted] = useState(false);

    //could put js api constraint validation to check stuff somehow but u also cant bc u passed stuff in via formSchema...
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(answers, id);
        setIsSubmitted(true);
    }

    function handleUnsubmit() {
        onUnsubmit(id);
        setIsSubmitted(false);
    }

    return (
        <section>
            <header>{header}</header>
            {!isSubmitted && (
                <form onSubmit={(event) => handleSubmit(event)}>
                    {formSchema.map((inputStuff) => (
                        <div key={inputStuff.name}>
                            <label htmlFor={inputStuff.name}>
                                {inputStuff.label}
                            </label>
                            <input
                                required
                                type={inputStuff.type}
                                name={inputStuff.name}
                                value={answers[inputStuff.name]}
                                onChange={(event) =>
                                    setAnswers({
                                        ...answers,
                                        [inputStuff.name]: event.target.value,
                                    })
                                }
                            />
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
            {isSubmitted && (
                <>
                    <h1>This Section has been submitted</h1>
                    <button onClick={() => handleUnsubmit()}>
                        Edit Response
                    </button>
                </>
            )}
        </section>
    );
}

export default SomeComponent;
