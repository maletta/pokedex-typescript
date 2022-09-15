import React, { useState, useEffect } from "react";

import { PokemonTypesKeyOf, PokemonTypes } from "types/theme-types";

type TypeWeaknessesHook = (types: Array<PokemonTypesKeyOf>) => Array<PokemonTypesKeyOf>;

type TypeColumnType = Array<PokemonTypesKeyOf>;
type TypeColumValue = number[][];

type TypeEffectiveness = {
  [key in PokemonTypes]: number;
};

type TypeEffectivenessArray = [Array<PokemonTypesKeyOf>, Array<number>];

type TypeEffectivenessHook = (types: Array<PokemonTypesKeyOf>) => TypeEffectivenessArray;

const columnType: TypeColumnType = [
  "NORMAL",
  "FIRE",
  "WATER",
  "ELECTRIC",
  "GRASS",
  "ICE",
  "FIGHTING",
  "POISON",
  "GROUND",
  "FLYING",
  "PSYCHIC",
  "BUG",
  "ROCK",
  "GHOST",
  "DRAGON",
  "DARK",
  "STEEL",
  "FAIRY",
];

// array[ATK][DEF]
// resource: https://c02.co/apps/pokemon/
// coluna invertida / transposta
const columnValue: TypeColumValue = [
  /*0 NORMAL */ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 / 2, 0, 1, 1, 1 / 2, 1],
  /*1 FIRE */ [1, 1 / 2, 1 / 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1 / 2, 1, 1 / 2, 1, 2, 1],
  /*2 WATER */ [1, 2, 1 / 2, 1, 1 / 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1 / 2, 1, 1, 1],
  /*3 ELECTRIC */ [1, 1, 2, 1 / 2, 1 / 2, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1 / 2, 1, 1, 1],
  /*4 GRASS */ [1, 1 / 2, 2, 1, 1 / 2, 1, 1, 1 / 2, 2, 1 / 2, 1, 1 / 2, 2, 1, 1 / 2, 1, 1 / 2, 1],
  /*5 ICE */ [1, 1 / 2, 1 / 2, 1, 2, 1 / 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1 / 2, 1],
  /*6 FUGHTING */ [2, 1, 1, 1, 1, 2, 1, 1 / 2, 1, 1 / 2, 1 / 2, 1 / 2, 2, 0, 1, 2, 2, 1 / 2],
  /*7 POISON */ [1, 1, 1, 1, 2, 1, 1, 1 / 2, 1 / 2, 1, 1, 1, 1 / 2, 1 / 2, 1, 1, 0, 2],
  /*8 GROUND */ [1, 2, 1, 2, 1 / 2, 1, 1, 2, 1, 0, 1, 1 / 2, 2, 1, 1, 1, 2, 1],
  /*9 FLYING */ [1, 1, 1, 1 / 2, 2, 1, 2, 1, 1, 1, 1, 2, 1 / 2, 1, 1, 1, 1 / 2, 1],
  /*10 PSYCHIC */ [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1 / 2, 1, 1, 1, 1, 0, 1 / 2, 1],
  /*11 BUG */ [1, 1 / 2, 1, 1, 2, 1, 1 / 2, 1 / 2, 1, 1 / 2, 2, 1, 1, 1 / 2, 1, 2, 1 / 2, 1 / 2],
  /*12 ROCK */ [1, 2, 1, 1, 1, 2, 1 / 2, 1, 1 / 2, 2, 1, 2, 1, 1, 1, 1, 1 / 2, 1],
  /*13 GHOST */ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1 / 2, 1, 1],
  /*14 DRAGON */ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1 / 2, 1 / 2, 0],
  /*15 DARK */ [1, 1, 1, 1, 1, 1, 1 / 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1 / 2],
  /*16 STELL */ [1, 1 / 2, 1 / 2, 1 / 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1 / 2, 2],
  /*17 FAIRY */ [1, 1 / 2, 1, 1, 1, 1, 2, 1 / 2, 1, 1, 1, 1, 1, 1, 2, 2, 1 / 2, 1],
];

function iteratePokemonTypes<T, K extends keyof T>(type: T, chave: K) {
  console.log("teste ", type);
}

function iteratePokemonTypes2<T>(array: T, selectedType: PokemonTypesKeyOf) {
  let key: keyof T;
  for (key in array) {
    console.log(selectedType, array[key]);
  }
}

const useTypeWeaknesses: TypeWeaknessesHook = params => {
  const type1: PokemonTypesKeyOf = params[0];
  const type2: PokemonTypesKeyOf = params[1];

  const indexType1: number = columnType.indexOf(type1);
  const indexType2: number = type2 ? columnType.indexOf(type2) : -1;

  // console.log(" pokemonAtkColumn ", pokemonAtkColumn);

  const atkAgainstType1 = columnType.map((type, index) => columnValue[index][indexType1]);
  const atkAgainstType2 =
    indexType2 > -1 ? columnType.map((type, index) => columnValue[index][indexType2]) : new Array(columnValue.length).fill(1);

  const weaknessesSuperEffective = columnType.filter((value, index) => {
    const effectiveness = atkAgainstType1[index] * atkAgainstType2[index];
    return effectiveness >= 2;
  });

  console.log("atkAgainstType1", atkAgainstType1);
  console.log("atkAgainstType2", atkAgainstType2);
  console.log("weaknessesSuperEffective", weaknessesSuperEffective);

  return weaknessesSuperEffective;
};

const useTypeEffectiveness: TypeEffectivenessHook = params => {
  const type1: PokemonTypesKeyOf = params[0];
  const type2: PokemonTypesKeyOf = params[1];

  console.log(type1, type2);

  const indexType1: number = columnType.indexOf(type1);
  const indexType2: number = type2 ? columnType.indexOf(type2) : -1;

  const atkAgainstType1 = columnType.map((type, index) => columnValue[index][indexType1]);
  const atkAgainstType2 =
    indexType2 > -1 ? columnType.map((type, index) => columnValue[index][indexType2]) : new Array(columnValue.length).fill(1);

  console.log("index type1 ", indexType1, " index type2 ", indexType2);
  const weaknessesSuperEffective = columnType.map((value, index) => {
    const effectiveness = atkAgainstType1[index] * atkAgainstType2[index];
    console.log("indice ", index, " value ", value, " | ", " GRASS ", atkAgainstType1[index], " POISON ", atkAgainstType2[index]);
    return effectiveness;
  });

  return [columnType, weaknessesSuperEffective];
};

export { useTypeWeaknesses, useTypeEffectiveness };
