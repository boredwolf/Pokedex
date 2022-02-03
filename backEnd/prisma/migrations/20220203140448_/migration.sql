/*
  Warnings:

  - You are about to drop the `Pokemon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pokemon` DROP FOREIGN KEY `Pokemon_userId_fkey`;

-- DropTable
DROP TABLE `Pokemon`;

-- CreateTable
CREATE TABLE `UserPokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `PokeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserPokemon` ADD CONSTRAINT `UserPokemon_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
