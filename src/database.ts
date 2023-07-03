import { knex as setUpKnex } from 'knex'

export const knex = setUpKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
