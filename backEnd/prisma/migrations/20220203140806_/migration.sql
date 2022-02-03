/*
  Warnings:

  - You are about to drop the column `PokeId` on the `UserPokemon` table. All the data in the column will be lost.
  - Added the required column `pokeId` to the `UserPokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserPokemon` DROP COLUMN `PokeId`,
    ADD COLUMN `pokeId` INTEGER NOT NULL;
