import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";





function BotaoHome() {
    
    let history = useHistory();

    function handleClick() {
      history.push(`/`);
    }


    return (
      <Button color='red' onClick={handleClick}>
        Voltar à pagina principal
      </Button>
    );
  }

  export default BotaoHome;
