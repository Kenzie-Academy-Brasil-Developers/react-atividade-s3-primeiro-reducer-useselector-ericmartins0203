//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="container">
      {fruits.map((fruit) => (
        <div className="content">
          <p key={fruit}> {fruit.name} </p>
          <img
            src={fruit.image}
            alt={fruit.name}
            width="200px"
            height="200px"
          />
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;
