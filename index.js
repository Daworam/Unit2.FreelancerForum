//create an array of names, prices, and occupations
//take the different properties from the array
//put the different properties from the array into new unordered lists in DOM
//correspond the index numbers in the lists and array
//display the first freelancer's info on the screen
//at a certain interval, add a new freelancer to the list on the page
//track the price being displayed at the top to reflect the average of all the prices currently being displayed

//State
const freelancers = [
  {name: "Thoen Cliatra", price: 100.00, occupation:"Ship Captain"},
  {name: "Dee Martusa", price: 975.99, occupation: "Professional Heiress"},
  {name: "Isabella Ballard", price: 49.50, occupation: "Letter Writer"},
  {name: "Mikaiyl Algador", price: 250.00, occupation: "Prince of Darkness"},
  {name: "Anwar Shadjunet", price: 515.75, occupation: "Queensguard"},
  {name: "Carmilla DeVries", price: 375.00, occupation: "Pirate"},
  {name: "Rorick Reventon", price: 750.00, occupation: "General"},
  {name: "Nylaena Alari", price: 500.99, occupation: "Bounty Hunter"},
  {name: "Kathryn Reventon", price: 800.99, occupation: "Senator"}
]

const displayedFreelancers = [
  {name: "Kathryn Reventon", price: 800.99, occupation: "Senator"},
];



const maxNames = 9

// determines the interval at which new freelancers are displayed

// shows the new freelancer added to the new array on the webpage, may have to have 3 seperate funcitons to add items to each ul
//function needs to take in the object from freelancer array
//function needs to loop through the objects
//function needs to return the name of each freelancer as a list item
const render = () => {
  const renderedNames = document.querySelector('#names');
  const renderedNameElements = displayedFreelancers.map((freelancer) => {
  const nameElement = document.createElement("li");
    nameElement.textContent = freelancer.name;
      return nameElement;
  });
  renderedNames.replaceChildren(...renderedNameElements)

  const renderedPrices = document.querySelector('#prices');
  const renderedPriceElements = displayedFreelancers.map((freelancer) => {
  const priceElement = document.createElement("li");
    priceElement.textContent = freelancer.price;
      return priceElement;
  });
  renderedPrices.replaceChildren(...renderedPriceElements)

  const renderedOccupations = document.querySelector('#occupations');
  const renderedOccupationElements = displayedFreelancers.map((freelancer) => {
  const occupationElement = document.createElement("li");
    occupationElement.textContent = freelancer.occupation;
      return occupationElement;
  });
  renderedOccupations.replaceChildren(...renderedOccupationElements);

  renderedAverage = displayedFreelancers.reduce((currentTotal, currentPrice) => {
    return currentTotal + currentPrice.price;
  }, 0)

  const finalAverage = (renderedAverage / displayedFreelancers.length).toFixed(2);

  const averagePrice = document.querySelector('#average-rate');
  averagePrice.innerText = `The average cost of the freelancers is: $${finalAverage}`
} 


// takes a freelancer from freelancers array
// adds the freelancer to the displayedFreelancers array one at a time


const addFreelancer = () => {
  const freelancerIndex = Math.floor(Math.random() * freelancers.length);
  const currentFreelancer = freelancers[freelancerIndex];
  displayedFreelancers.push(currentFreelancer);
  render();

  if(displayedFreelancers.length >= maxNames){
    clearInterval(addFreelancerIntervalId)
  }
}

addFreelancer()

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
