const mongoose = require('mongoose');
const characterService = require('../services/service');

const findCharacterController = async (req, res) => {
  const allCharacters = await characterService.findCharacterService();
  res.send(allCharacters);
};
const findCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await characterService.findCharacterByIdService(
    idParam,
  );
  res.send(chosenCharacter);
};
const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterService(character);
  res.send(newCharacter);
};
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    characterEdit,
  );
  res.send(updatedCharacter);
};
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await characterService.deleteCharacterService(idParam);
  res.send({ message: 'Character has been deleted' });
};
const searchCharactersController = async (req, res) => {
  const { character } = req.body;

  const characters = await characterService.searchCharactersService(character);

  if (characters.length === 0) {
    return res.status(400).send({ message: 'Character not found' });
  }

  return res.send({
    results: characters.map((character) => ({
      id: character._id,
      name: character.name,
      image: character.imageUrl,
    })),
  });
};

module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharactersController
};
