/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * SQLite to be used for DEMO / Collaboration ONLY                          *
  *                                                                          *
  * This has been installed, because we can synchronize changes              *
  * to the file and preserve them in git                                     *
  *                                                                          *
  ***************************************************************************/

  sqlitedb: {
    /**
     * Database instance type. Specify whether to store the database on disk
     * or in memory.
     */
    adapter: 'waterline-sqlite3', // or 'memory'

    /**
     * Location of file if type='disk'
     */
    filename: './tmp/sqlitedb.sqlite',

    /**
    * Set to true to output SQL queries
    */
    debug: false
  },

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  localPostgreSQLServer: {
      adapter: 'sails-postgresql',
      host: 'localhost',
      user: 'postgres', // optional
      password: '', // optional
      database: 'gh4implementation' //optional
    },

    dockerPostgreSQLServer: {
        adapter: 'sails-postgresql',
        host: '192.168.99.100',
        port: '32770',
        user: 'postgres', // optional
        password: '', // optional
        database: 'sails' //optional
    },

  //might as well just put this in since we'll switch dbs when we move out of testing
  devPostgreSQLServer: {
    adapter: 'sails-postgresql',
    host: 'gh-implementation-dev.cm8v8ipcnkcx.us-west-2.rds.amazonaws.com',
    user: 'ghadmin', // optional
    password: 'ghimplementationteamtestdb', // optional
    database: 'demo' //optional
  }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
