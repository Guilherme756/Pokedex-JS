// precisamos criar duas variaveis no JS para trabalhar com os elementos na tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
  // vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

  pokemon.addEventListener('click', () => {
    // remover a classe aberto só do cartao que esta aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    )
    cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
  })
})
