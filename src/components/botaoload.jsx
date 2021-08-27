import { Button } from "semantic-ui-react";

function Botaoload({onClick}) {
  return (
    <Button className="botaoload" color='red' onClick={onClick}>
      Carregar mais
    </Button>
  );
}

export default Botaoload;
