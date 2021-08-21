import { Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";

function Botaoload({onClick}) {
  return (
    <Button className="botaoload" onClick={onClick}>
      Carregar mais
    </Button>
  );
}

export default Botaoload;
