const youAre = ["You're amazing.", "You're a superstar.", "You're going to have a great day.", "You're unstoppable."];
const presentDo = ["Don't let anyone dull your spark.", "Believe in yourself.", "You've got this.", "You're capable of achieving your dreams."];
const futureMove = ["Keep pushing forward.", "Stay positive.", "You're amazing.", "You're going to make it."];

const generateMessage = () => {
  const randomYouAre = Math.floor(Math.random() * youAre.length);
  const randomPresentDo = Math.floor(Math.random() * presentDo.length);
  const randomFutureMove = Math.floor(Math.random() * futureMove.length);
  return `${youAre[randomYouAre]} ${presentDo[randomPresentDo]} ${futureMove[randomFutureMove]}`;
}

console.log(generateMessage());