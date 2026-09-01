
import './App.css'
import { useState, useEffect } from "react";
import { Stack, Avatar, Button } from "@mui/material";
import { obtenerPokemones, type Pokemon } from "./pokemon";

function App() {
  const [people, setPeople] = useState<Pokemon[]>([]);

  useEffect(() => {
    obtenerPokemones()
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => {
        console.error("Error al obtener pokemones:", error);
      });
  }, []);

  function viewProfile(name: string) {
    alert(`Abrir el perfil de ${name}`);
  }

  return (
    <Stack spacing={2} sx={{ padding: 3 }}>
      <h1>Perfiles</h1>

      {people.map((person) => (
        <Stack
          key={person.id}
          direction="row"
          spacing={2}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: 2,
            alignItems: "center",
          }}
        >
          <Avatar src={person.image} alt={person.name} />

          <div>
            <strong>{person.name}</strong>
            <p>Peso: {person.weight}</p>
          </div>

          <Button
            variant="outlined"
            onClick={() => viewProfile(person.name)}
          >
            Ver perfil
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}

export default App;