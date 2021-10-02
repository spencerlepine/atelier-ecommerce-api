# In root directory
npx sequelize-cli seed:generate --name projects --options-path=config/options.js
npx sequelize-cli db:seed:all --options-path=config/options.js