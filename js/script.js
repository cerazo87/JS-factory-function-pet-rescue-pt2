const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
//Create a factory function called createPet. The function will need two parameters: name and species.
//Inside the factory function, create an object literal called pet. In the pet object, add a property
//for name with the name parameter in the value. Create a property for species with the species parameter in the value.
//Create a property for isTired with a value of 5 (a number data type).
//In the pet object, create a property called sleep that’s a method (with no parameters) In the method, log out a message
//that says, “<name> needs a nap. Zzz…” Replace <name> with the value of the name property. Still in sleep(), change the value of isTired to 1.
//In the pet object, create a property called play that’s a method (no parameters). Write an if statement to check if the isTired value is equal to 10.
//If the condition is met, log out a message that says, “Too tired to play.” On the next line, call the sleep() method. Hint: Don’t forget to
//use the this keyword because sleep() is a property of the same object! Create an else statement. Log out a message that says, “Yay! <name> loves to play!”
//After console.log() and still in the else clause, add 1 to the value of the isTired property. Playing is fun but does make the pets a little tired!
//After play(), but still inside the createPet factory function, return the pet object.
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay ${this.name} loves to play!`);

        this.isTired += 1;
      }
    },
  };

  return pet;
};
//Below the factory function, declare a variable called sora. In the value, call the factory function, createPet(). Inside the function, pass arguments for the pet name and species: const sora = createPet("Sora", "ferret");.
//Declare a variable called clover to create a new object with the parameters "Clover" and "rabbit".
//Declare a variable called baxter to create a new object with the parameters "Baxter" and "hamster".
//Declare a variable called cleo to create a new object with the parameters "Cleo" and "rat".
//Declare a variable called francine to create a new object with the parameters "Francine" and "turtle".
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxster = createPet("Baxster", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
//Log out all five objects.
//Call the methods to make sure they work. For the clover object, call the sleep method. For the baxter object,
//call the play method. Now log out the clover and baxter objects. Notice that the isTired value for Clover has changed
//from 5 to 1 because you called sleep() which changes the isTired value to 1. Also, the isTired value for Baxter has increased
//from 5 to 6 because play() adds 1 to the isTired value when run.
//console.log(sora, clover, baxster, cleo, francine);

//clover.sleep();
//baxster.play();
//console.log(clover, baxster);

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxster, cleo, francine];
//console.log(allPets);
//Change the value of the isTired property to 8 for Clover. change the value of the isTired property to 9 for Francine.
//Create an array called allPets that includes all pet objects as elements. Log out the allPets array.
//Create a function called showPets. Use petArray as an argument. Grab the pets variable that’s selecting the “all-pets” unordered list.
//Use innerHTML to set pets to an empty string. Still in the showPets function, use a for...of loop to loop over the petArray.
//In the for...of loop, declare a variable called status with a value of “ready to play!”.
//Below the status variable and inside the for...of loop, write an if statement to check if the pet’s isTired property is greater or equal to 7.
//If so, change the value of the status variable to “sleeping”. Below the if statement, but still in the for...of loop,
//declare a variable li for a list. In the value, create a list element using document.createElement.
//Use innerHTML to add the pet name, species, and status to the list item like: <name> the <species> is <status>. Replace <name> and <species>
//with the pet’s name and species. Replace <status> with the status variable. In the value of the li.innerHTML, add a span with a class of
//“pet-name” around the pet’s name. This will change the color of the pet’s name to help it stand out!
//On the next line, append the li variable to the pets element. Below the showPets function, add a click event to the statusButton.
//In the event handler, call the showPets function. Pass the allPets array as an argument to the function.
const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of petArray) {
    let status = "Ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
