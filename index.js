const array = [
    {
        question: "one",
        choices: [
            "one",
            "two"
        ],
        answer: "one"
    },
    {
        question: "two",
        choices: [
            "one",
            "two"
        ]
    },
]
let score = 0
function displayQuestions(array){
    inqurier.prompt({
        type: "list",
        name: "question",
        message: array[i].question,
        choices: [
            {
                name: array[i].choices[0]
            },
            {
                name: array[i].choices[1]
            },
        ]
    })
    .then(data => {
        if(data.question === array[i].answer){
            console.log("nice")
            score++
            i++
        } else {
            console.log("bad")
            i++
        }
    })
}

    let i = 0
    while(i < 2){
        displayQuestions(array)
}