# Pokedex site

This project is intended to complete the assignment for Tokopedia as a Software Engineer - Web Platform. This web app build based on React.js that has 3 pages, Pokemon List, Pokemon Detail, and My Pokemon List. 

### Pokemon List Page
Show a list of Pokemons’ names and the owned total. When a Pokemon Card is clicked, it go to Pokemon Detail page.

### Pokemon Detail Page
Show a picture of the Pokemon with its basic info, moves and base states. At the header there has a button to catch the Pokemon, (success probability is 50%), if success then the user can give the Pokemon a nickname and add that Pokemon to My Pokemon List page.

### My Pokemon List Page
Show a list (like Pokemon List page, but with each of their nicknames as well). It also be possible to remove/release a Pokemon from the list on this page. 


## Data Source
This project using GraphQL <a href="https://graphql-pokeapi.vercel.app" target="_blank">(graphql-pokeapi)</a> as a list pokemon that shown at Pokemon List Page, and for My Pokemon List, I created an API using NodeJs, Express and MongoDB. I also deployed it using HerokuApp, for resource you can visit my Github for <a href="https://github.com/amalianrlt/pokemonApi" target="_blank">My Pokemon API</a>

You can visit Pokedex site at <a href="https://pokedex.amalianurlita.com" target="_blank">Pokedex</p>
