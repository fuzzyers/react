const App = () => {
  const basketballTeam = {
    center: "Joel Embiid",
    powerForward: "Anthony Davis",
    smallForward: "LeBron James",
    shootingGuard: "James Harden",
    pointGuard: "Stephen Curry",
  };
  const displayTeam = (team) => {
    if (team != null){
      return Object.keys(team).map((key) => (
        <ul>
          <li key={key}>
            {key}: {team[key]}
          </li>
        </ul>
      ));
    }
    else 
    {
      return <h1>No team provided</h1>
    }
  }

  const fruits = [
    "strawberry",
    "banana",
    "apple",
    "blueberry",
    "orange",
    "grape",
  ];
  const filterFruits = (fruits) => {
      if (fruits != null){
        return fruits.filter(fruit => fruit.length <= 6)
        .map(fruit => <li key={fruit}>{fruit}</li>)
      }
      else {
        return <h1>No fruit given</h1>
      }
    }
  const elementOne = <h1>Hello, World!</h1>;

  const name = "John Doe";
  const elementTwo = <h1>Hello, World! My name is {name}</h1>;

  const elementThree = <h1>{Math.random()}</h1>;

  const getRandomNumber = (max) => Math.floor(Math.random() * max);
  const elementFour = <h1>{getRandomNumber(3)}</h1>;

  const url = "https://bit.ly/3CqHp70";
  const description = "This image contains a cat wearing a surgical mask";
  const elementFive = (
    <img src={url} alt={description} width="500" height="350" />
  );
  const elementSix = (
    <>
      <h1>Hello, World!</h1>
      <h2>My name is John Doe</h2>
    </>
  );

  return (
    <>
      {displayTeam(basketballTeam)}
      <ul>
      {filterFruits()}
      </ul>
      {elementOne}
      {elementTwo}
      {elementThree}
      {elementFour}
      {elementFive}
      {elementSix}
    </>
  );
};

export default App;