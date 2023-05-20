import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  const generateNameList = (sequence) => {
    return sequence.map((items) => <li key={items}>{items}</li>);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div data-testid="mabl-header">
      <Header title="Develop • Preview • Ship 🚀" />
      <ul>{generateNameList(names)}</ul>
      <button onClick={handleLikeClick}>Like {likes}</button>
    </div>
  );
}

export default HomePage;
