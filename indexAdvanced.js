// +Email Subject Line Generator+

const randomWords = {
    nouns: ['man', 'monkey', 'doctor', 'person', 'world', 'computer', 'team', 'banana', 'pirate', 'girls'],
    verbs: ['survive', 'assist', 'feel', 'target', 'boost', 'equip', 'add', 'forgive', 'run', 'explain'],
    adjectives: ['standing', 'uncovered', 'frightening', 'special', 'uninterested', 'lovely', 'fearless', 'confident', 'homeless', 'hateful'],
    adverbs: ['Secretly', 'Quickly', 'Easily', 'Slowly', 'Lowly', 'Emotely', 'Carefully', 'Closely', 'Quietly', 'Cheerfully', 'Strongly'],
    preposition: ['in', 'on', 'at', 'next to', 'in front of', 'behind', 'under', 'beside', 'under', 'above'],
    famousPerson: ['Hugh Jackman', 'Bruce Lee', 'Stephen King', 'Sandra Bullock', 'Cher', 'Nicole Kidman', 'Michael Jackson', 'Mel Gibson'],
    weirdName: ['exprickilor', 'maf', 'bonapokillade', 'adberastered', 'cheftoon', 'glowned', 'seiliu', 'byzatic', 'dicapayroling', 'callent'],
    benefits: ['Remote Work Program', '4-Day Work Week', 'Paid Sabbaticals', 'Summer Fridays', 'Paid Parental Leave', 'Childcare Reimbursement', 'Teletherapy Subscriptions', 'Mental Health Days', 'To be accepted', 'Peace of mind'],
    challenges: ['Run A Marathon', 'Exercise Your Brain', 'Get A New Job/Seek Promotion', 'Join A Sports Club', 'Take daily walks', 'Eat more veggies'],
    goodAction: ['Help a friend in need', 'Donate an old cell phone', 'Take food to a new neighbor', 'Take public transport instead of driving', 'Meditate', 'Plant a tree'],
    comparative: ['taller', 'healthier', 'better', 'worse', 'bigger', 'bolder', 'braver', 'brighter', 'busier', 'cheaper']
  };
  

//Choose a random number to select a category-keyword index
  function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  
// Iterate over randomWords object length
  function generateRandomElement(array) {
    return array[generateRandomNumber(array.length)];
  }
  

//   The replace() method will find all occurrences of placeholders in the template string and replace them with randomly selected words from the appropriate category in the randomWords object.
  function generateSubjectLine(template, randomWords) {
    // The replace() method is used on the template string. It takes two arguments: a regular expression and a replacement function.
    // The expression /\[(.*?)\]/g matches all occurrences of text inside square brackets. The .*? will capture any text within the square brackets. **this is the The capture group**
    // in the replacement function, we don't need the value captured by the capture group.
    // since we are not using it in the replacement function, we can use the _ (underscore) as a placeholder to indicate that we don't care about that value.
    // So, the _ in the replacement function is used to "ignore" the value of the capture group
    return template.replace(/\[(.*?)\]/g, (_, category) => generateRandomElement(randomWords[category]));
  }
  
  const subjectLineTemplates = [
    'The [famousPerson] of [verbs]',
    'The [weirdName] technique to get [benefits]',
    'Would you [challenges]?',
    'Why [goodAction] is not good',
    'Why I turned down [benefits] to be [comparative]',
    'Dont [goodAction]. Trust me.',
    'You are [comparative] than you think... Discover yourself',
  ];
  

//   we used map() to iterate over the subjectLineTemplates array and generate a new array of templates using the generateSubjectLine() function. 
  const emailSubjectLines = subjectLineTemplates.map(template => generateSubjectLine(template, randomWords));
  
  function emailIdeas(emailSubjectLines) {
    const formatted = emailSubjectLines.join('\n');
    console.log(formatted);
  }
  
  emailIdeas(emailSubjectLines);
  