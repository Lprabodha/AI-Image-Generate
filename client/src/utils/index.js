import { surpriseMePrompts } from '../constants';

export function getRandomprompt(prompt) {

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomprompt(prompt);

    return randomPrompt;

}