import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Notes from '../app/models/Notes';

const models = [Notes];

class Database {
  constructor() {
    this.init();
  };

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection))
  };
};

export default new Database();