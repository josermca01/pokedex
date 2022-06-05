export const handlePokemonType = (type) => {
  const types = {
    bug: {
      nome: "Bug",
      cor: "#A7B723",
    },
    dark: {
      nome: "Dark",
      cor: "#75574C",
    },
    dragon: {
      nome: "Dragon",
      cor: "#7037FF",
    },
    electric: {
      nome: "Electric",
      cor: "#F9CF30",
    },
    fairy: {
      nome: "Fairy",
      cor: "#E69EAC",
    },
    fighting: {
      nome: "Fighting",
      cor: "#C12239",
    },
    fire: {
      nome: "Fire",
      cor: "#F57D31",
    },
    flying: {
      nome: "Flying",
      cor: "#A891EC",
    },
    ghost: {
      nome: "Ghost",
      cor: "#70559B",
    },
    grass: {
      nome: "Grass",
      cor: "#74CB48",
    },
    ground: {
      nome: "Ground",
      cor: "#DEC16B",
    },
    ice: {
      nome: "Ice",
      cor: "#9AD6DF",
    },
    normal: {
      nome: "Normal",
      cor: "#AAA67F",
    },
    poison: {
      nome: "Poison",
      cor: "#A43E9E",
    },
    psychic: {
      nome: "Psychic",
      cor: "#FB5584",
    },
    rock: {
      nome: "Rock",
      cor: "#B69E31",
    },
    steel: {
      nome: "Steel",
      cor: "#B7B9D0",
    },
    water: {
      nome: "Water",
      cor: "#6493EB",
    },
  };

  return types[type];
};
