
export type Pokemon = {
    id: number;
    name: string;
    weight: number;
    image: string;
};

type PokeApiResult = {
    id: number;
    name: string;
    weight: number;
    sprites: {
        front_default: string;
    };
};

type PokeApiListItem = {
    name: string;
    url: string;
};

export async function obtenerPokemones(): Promise<Pokemon[]> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data: { results: PokeApiListItem[] } = await response.json();

    const pokemones = await Promise.all(
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const detalle: PokeApiResult = await res.json();

            return {
                id: detalle.id,
                name: detalle.name,
                weight: detalle.weight,
                image: detalle.sprites.front_default,
            };
        })
    );

    return pokemones;
}