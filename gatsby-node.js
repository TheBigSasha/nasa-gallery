// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can  this file if you're not using it

// // gatsby-node.js
// const axios = require('axios');

// const get = endpoint => axios.get(`https://api.nasa.gov/planetary/apod?date=&start_date=1995-06-16&end_date=${new Date().toLocaleDateString("fr-ca", {year: "numeric",
// month: "2-digit",
// day: "2-digit",
// }).replace(new RegExp('/', 'g'), '-')}&count=&thumbs&api_key=${process.env.NASA_API_KEY}`);

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`);
//       const abilities = await Promise.all(
//         pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
//           const { data: ability } = await get(`/ability/${abilityName}`);

//           return ability;
//         })
//       );

//       return { ...pokemon, abilities };
//     })
//   );

// exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);

//   // Create a page that lists all Pokémon.
//   createPage({
//     path: `/`,
//     component: require.resolve('./src/templates/all-pokemon.js'),
//     context: { allPokemon }
//   });

//   // Create a page for each Pokémon.
//   allPokemon.forEach(pokemon => {
//     createPage({
//       path: `/pokemon/${pokemon.name}/`,
//       component: require.resolve('./src/templates/pokemon.js'),
//       context: { pokemon }
//     });

//     // Create a page for each ability of the current Pokémon.
//     pokemon.abilities.forEach(ability => {
//       createPage({
//         path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
//         component: require.resolve('./src/templates/ability.js'),
//         context: { pokemon, ability }
//       });
//     });
//   });
// };
