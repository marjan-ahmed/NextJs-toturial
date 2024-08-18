import { Card1 } from "../../components/card1";
import { Card2 } from "../../components/card2";

export default function Home() {
  return (
    <>
    <h1 className="text-blue-600 text-5xl">Home</h1>
    <p>This is home page</p>
    <br />

    <Card1></Card1>
    <Card2></Card2>
    </>
  );
}
