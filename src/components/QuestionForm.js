import { useState } from 'react'

function QuestionForm() {

    const [inputValue, setInputValue] = useState('Posez votre question ici')
    
    // Validate a set of values
    const tab = ['nigger', 'nigga', 'bitch', 'fuck', 'putain', 'nègre', 'négro', 'pute', 'bordel']
    const checkError = (element) => inputValue.includes(element)
    const isInputError = tab.some(checkError)

    // Filter a value '@'
    const checkValue = (value) => ( !value.includes('@') ? setInputValue(value) : null )
    
    return (
        <center>
            <div style= {isInputError ? {'visibility':'visible', 'color':'red'} : {'visibility':'hidden', 'color':'red'}}>
                ⚠️ Vous n'avez pas le droit d'utiliser des termes grossiers ici.
            </div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <br/><button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </center>
    )
}

export default QuestionForm