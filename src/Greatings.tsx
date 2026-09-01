type GrettingsProps = {
  name: string;
}

export function Grettings({ name }: GrettingsProps) {
  return (
    <div>
      <h1>Hola, soy {name}</h1>
      <h1>Hola, soy {name}</h1>
      <h1>Hola, soy {name}</h1>
      <h1>Hola, soy {name}</h1>
      <h1>Hola, soy {name}</h1>
      <h1>Hola, soy {name}</h1>
    </div>
  )
}