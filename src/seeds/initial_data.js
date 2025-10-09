/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('pets').del();
  await knex('users').del();

  await knex('users').insert([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob cachaceiro', email: 'bob@example.com' },
    { id: 3, name: 'Joao', email: 'Joao@example.com' },
  ]);

  await knex('pets').insert([
    { id: 1, name: 'Rex', user_id: 1 },
    { id: 2, name: 'Miau', user_id: 2 },
    { id: 3, name: 'Auau', user_id: 3 },
  ]);
}
