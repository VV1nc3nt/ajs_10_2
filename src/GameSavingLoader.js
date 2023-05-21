import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const readFunc = await read();
    const data = await json(readFunc);
    return data;
  }
}
