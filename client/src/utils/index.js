import { surpriseMePrompts } from '../constants';

// generate a random prompt from our list of surpriseMePrompts
export function getRandomPrompt(prompt) {
    // Getting random index
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length);
    // Use that random index to get our suprise prompt
    const randomPrompt = surpriseMePrompts[randomIndex];

    // If we are unlucky get the same prompt again we will recall the function
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}