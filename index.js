const randomWords = {
     nouns: ['man','monkey','doctor','person','world','computer','team','banana','pirate','girls'],
     verbs: ['survive','assist','feel','target','boost','equip','add','forgive','run','explain'],
     adjectives: ['standing','uncovered','frightening','special','uninterested','lovely','fearless','confident','homeless','hateful'],
     adverbs: ['Secretly','Quickly','Easily','Slowly','Lowly','Emotely','Carefully','Closely','Quietly','Cheerfully','Strongly'],
     preposition: ['in', 'on', 'at', 'next to', 'in front of', 'behind', 'under', 'beside', 'under', 'above'],
     famousPerson: ['Hugh Jackman','Bruce Lee','Stephen King','Sandra Bullock','Cher','Nicole Kidman','Michael Jackson','Mel Gibson'],
     weirdName: ['exprickilor','maf','bonapokillade','adberastered','cheftoon','glowned','seiliu','byzatic','dicapayroling','callent'],
     benefits:['Remote Work Program','4-Day Work Week','Paid Sabbaticals','Summer Fridays','Paid Parental Leave','Childcare Reimbursement','Teletherapy Subscriptions','Mental Health Days','To be accepted',' Peace of mind'],
     challenges: ['Run A Marathon','Exercise Your Brain','Get A New Job/Seek Promotion','Join A Sports Club','Take daily walks','Eat more veggies'],
     goodAction: ['Help a friend in need','Donate an old cell phone','Take food to a new neighbor','Take public transport instead of driving','Meditate','Plant a tree'],
     comparative: ['taller','healthier','better','worse','bigger','bolder','braver','brighter','busier','cheaper']
}


//Chose a diferent random number to select a keyword index
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

// Store the 'words' in an array
let emailSubjectLines = []

// Iterate over the object
// for(let word in randomWords) {
//     let optionIdx = generateRandomNumber(randomWords[word].length)

// use the object's properties to customize the subject line 

// 1. The [famous person] of [category] ✅✅
    function famousPerson(randomWords){
        let optionFamous = generateRandomNumber(randomWords.famousPerson.length);
        let optionVerb = generateRandomNumber(randomWords.verbs.length)

        emailSubjectLines.push(`The ${randomWords.famousPerson[optionFamous]} of ${randomWords.verbs[optionVerb]}`);
    }

// 2. The [weird name] technique to get [benefit]✅✅
    function weirdName(randomWords){
        let optionName = generateRandomNumber(randomWords.weirdName.length);
        let optionBenefit = generateRandomNumber(randomWords.benefits.length)

        emailSubjectLines.push(`The ${randomWords.weirdName[optionName]} technique to get ${randomWords.benefits[optionBenefit]}`);
    }

// 3. Would you [Challenge]?✅✅
    function challenge(randomWords){
        let optionChhallenge = generateRandomNumber(randomWords.challenges.length);

        emailSubjectLines.push(`Would you ${randomWords.challenges[optionChhallenge]}?`);
    }

// 4. Why [good actions] is not good✅✅
    function goodActions(randomWords){
        let optionGood = generateRandomNumber(randomWords.goodAction.length);

        emailSubjectLines.push(`Why ${randomWords.goodAction[optionGood]} is not good`);
    }

// 5. Why I turned down [thing everyone wants] to be [comparative]✅✅
    function turnedDown(randomWords){
        let optionBenefit = generateRandomNumber(randomWords.benefits.length);
        let optionComparative = generateRandomNumber(randomWords.comparative.length)
        
        emailSubjectLines.push(`Why I turned down ${randomWords.benefits[optionBenefit]} to be ${randomWords.comparative[optionComparative]}`);
    }

// 6. Don’t [Action]. Trust me.✅✅
    function dontAction(randomWords){
        let optionAction = generateRandomNumber(randomWords.goodAction.length);

        emailSubjectLines.push(`Don't ${randomWords.goodAction[optionAction]}. Trust me.`);
    }

// 7. You are [comparative] than you think✅✅
    function comparativeSentence(randomWords){
        let optionComparison = generateRandomNumber(randomWords.comparative.length);

        emailSubjectLines.push(`You are ${randomWords.comparative[optionComparison]} than you think... Discover yourself`);
    }


function emailIdeas(emailSubjectLines){
    const formatted = emailSubjectLines.join('\n');
    console.log(formatted);
}

// Test functions
famousPerson(randomWords);
weirdName(randomWords);    
challenge(randomWords);
goodActions(randomWords);
turnedDown(randomWords);
dontAction(randomWords);
comparativeSentence(randomWords);
selfmadeLine(randomWords);


emailIdeas(emailSubjectLines);

