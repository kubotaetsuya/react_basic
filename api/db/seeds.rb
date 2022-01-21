# frozen_string_literal: true

Account.create([
  {
    first_name: 'user1',
    last_name: 'test1',
    email: 'test1@test.com',
    phone: '08088881111',
    password: 'testUser1',
    password_confirmation: 'testUser1'
  },
  {
    first_name: 'user2',
    last_name: 'test2',
    email: 'test2@test.com',
    phone: '08088882222',
    password: 'testUser2',
    password_confirmation: 'testUser2'
  },
])
