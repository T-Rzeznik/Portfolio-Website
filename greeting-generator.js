

const verbs = ['Greetings ', 'Hello ', 'Goodbye', 'Hi ', 'Howdy ', 'Heya ' , ''  ];
const saying = ['whats up ', 'how have you been ' , 'how is your day ', 'nice to meet you ', 'im busy right now '   ]
const names = ['Joe' , 'Mark' , 'Jamar' , 'Chrisler' , 'mom' , 'Dad' , 'Henry' , 'Mia']

function randomVerb(array)
{
   let randomVerb1 =  array[Math.floor(Math.random() * array.length)]
    return randomVerb1;
}

function randomSaying(array)
{
   let randomSaying1 =  array[Math.floor(Math.random() * array.length)]
    return randomSaying1;
}



function randomName(array)
{
   let randomName1 =  array[Math.floor(Math.random() * array.length)]
    return randomName1;
}


function generateGreeting()
{
    let VERB = randomVerb(verbs);
    let SAYING =  randomSaying(saying);
    let NAME = randomName(names);

    if (VERB === 'Goodbye')
     {
         document.getElementById('greeting').innerHTML = (VERB + ', ' + NAME)
     }
    else 
    {
        document.getElementById('greeting').innerHTML = (VERB + SAYING + NAME);
    }

    
}



