import React from "react";
import create from "zustand";
import APICall from "../../API";

const usePokemonsStore = create((set, get) => ({
  getPokemons: async () => {
    try {
      set({ hasError: false, errorMessage: "", isLoading: false });
      //console.log("Call from Zustand");
      const pokemonsResult = await APICall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      set({
        pokemons: pokemonsResult.results,
      });
    } catch (error) {
      set({
        pokemons: [],
        errorMessage: "Something is bad :(",
        hasError: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  pokemons: [],
  getPokemonDetail: async (id) => {
    if (!id) Promise.reject("ID is required.");
    try {
      set({ isLoading: false, errorMessage: "", hasError: false });
      // console.log("Call from Zustand id");
      const pokemonDetail = await APICall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      set({ pokemonDetail });
    } catch (error) {
      set({
        pokemonDetail: {},
        errorMessage: "Something is bad",
        hasError: true,
      });
    } finally {
      set({
        isLoading: false,
      });
    }
  },
  pokemonDetail: [],
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default usePokemonsStore;
