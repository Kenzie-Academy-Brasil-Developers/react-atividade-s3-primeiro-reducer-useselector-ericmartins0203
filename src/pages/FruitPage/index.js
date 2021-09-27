//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="container">
      {fruits.map((fruit) => (
        <p key={fruit}>
          {fruit.name}
          <img
            src={fruit.image}
            alt={fruit.name}
            width="200px"
            height="200px"
          />
        </p>
      ))}
    </div>
  );
};

export default FruitsPage;
