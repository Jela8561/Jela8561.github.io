const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 91 fahrenheit inside their house, so :insertx: who weighs 300 pounds, went outside to cool down. While :insertx: was outside, he witnessed a man who had just :insertz:, this made him want to go to :inserty:. While :insertx: was walking he began feeling a strange energy, then he also :insertz:. Everyone nearby witnessed this, but did not do anything. In the end everyone :insertz:.';


const insertX = ['Cartman', 'Stan', 'Randy', 'Kyle', 'lorde'];
const insertY = ['Casa Bonita', 'Butters House', 'Tegridy Farms'];
const insertZ = ['Inflated and then popped', 'Imploded', 'turned into a worm'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory
    .replaceAll('Cartman', name)
    .replaceAll('Stan', name)
    .replaceAll('Randy', name)
    .replaceAll('Kyle', name)
    .replaceAll('Lorde', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(301*0.0714286)} lbs`;
    const temperature =  `${Math.round((91-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('91 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds,', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
