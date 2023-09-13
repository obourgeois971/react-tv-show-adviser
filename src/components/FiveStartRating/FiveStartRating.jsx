// import s from "./style.module.css";
import { StarFill, Star as StartEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStartRating({ rating }) {
  // const rating = 5;
  // Déclaration d'un tableau d'étoiles (jsx) vide
  const startList = [];

  // Stackage dans une variable le nombre d'étoile pleine
  const startFillCount = Math.floor(rating);

  // Stockage dans une variable si oui ou non il y'a une demi étoile
  const hasStartHalf = rating - startFillCount >= 0.5;

  // Stockage dans une variable le étoiles vide
  const emptyStartCount = 5 - startFillCount - (hasStartHalf ? 1 : 0);

  // Pusher dans un tableau les étoiles pleine
  for (let i = 1; i <= startFillCount; i++) {
    startList.push(<StarFill key={"star-fill" + i} />);
  }

  // Pusher dans le tableau les demi étoiles (s'il y'en a)
  if (hasStartHalf) {
    startList.push(<StarHalf key={"star-half"} />);
  }

  // Pusher dans le tableau les étoiles vide
  for (let i = 1; i <= emptyStartCount; i++) {
    startList.push(<StartEmpty key={"star-empty" + i} />);
  }

  return <div>{startList}</div>;
}
