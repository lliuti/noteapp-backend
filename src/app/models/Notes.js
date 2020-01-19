import Sequelize, { Model } from 'sequelize';

class Notes extends Model {
  static init(sequelize) {
    super.init({
      content: Sequelize.STRING,
    },
    {
      sequelize
    });
  };
};

export default Notes;