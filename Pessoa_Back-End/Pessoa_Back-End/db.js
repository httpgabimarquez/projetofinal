const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://wlqeqnkg:uopQpYiU4mwExuBLNWEpKiZURVm_FZCX@silly.db.elephantsql.com/wlqeqnkg'
      //banco teste 'postgres://znujhwvh:ebGyRpxPz7qMo0lavqS6tlhfqjArYEaA@silly.db.elephantsql.com/znujhwvh'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
