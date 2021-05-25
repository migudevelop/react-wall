const faker = require('faker')
const postsData = require('../data/posts.json')

const DEFAULT_MODEL = {
  id: faker.datatype.uuid(),
  owner: {},
  publishDate: new Date(),
  text: '',
  image: faker.image.imageUrl(),
  comments: [],
  likes: [],
  tags: [],
}

const USERS_IDS = [
  {
    id: '6306b60c-4551-437a-993a-3552375dc1b3',
    name: { first: 'Virginia', last: 'Hernandez' },
    location: {
      street: { number: 2449, name: 'Avenida de Burgos' },
      city: 'San Sebastián de Los Reyes',
      state: 'Castilla la Mancha',
      country: 'Spain',
      postcode: 35827,
    },
    email: 'virginia.hernandez@example.com',
    login: {
      password: '62jqrQ2K',
    },
    phone: '967-994-091',
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '4cac8c40-f15d-4874-be21-d560adfa4315',
    name: { first: 'Aléxia', last: 'Cardoso' },
    location: {
      street: { number: 8625, name: 'Rua João Xxiii' },
      city: 'Franca',
      state: 'Bahia',
      country: 'Brazil',
      postcode: 69346,
    },
    email: 'alexia.cardoso@example.com',
    login: {
      password: '2RvQfG05',
    },
    phone: '(75) 8755-1267',
    picture: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: 'f6f17853-4990-4705-a2e6-69ead3d3a24a',
    name: { first: 'Benjamin', last: 'Clarke' },
    location: {
      street: { number: 7261, name: 'North Street' },
      city: 'Hastings',
      state: 'Marlborough',
      country: 'New Zealand',
      postcode: 48484,
    },
    email: 'benjamin.clarke@example.com',
    login: {
      password: 'ttMEIzye',
    },
    phone: '(107)-563-5350',
    picture: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    id: '29927524-40b6-4d55-bb02-3a53d505e99f',
    name: { first: 'Zerá', last: 'da Paz' },
    location: {
      street: { number: 5144, name: 'Rua Principal' },
      city: 'Piracicaba',
      state: 'Amazonas',
      country: 'Brazil',
      postcode: 67321,
    },
    email: 'zera.dapaz@example.com',
    login: {
      password: 'Y5SBreru',
    },
    phone: '(28) 4023-1323',
    picture: 'https://randomuser.me/api/portraits/men/27.jpg',
  },
  {
    id: 'c0642df2-cab0-4044-9929-294a9c9e9482',
    name: { first: 'Shaun', last: 'Thompson' },
    location: {
      street: { number: 1304, name: 'Highfield Road' },
      city: 'Sunderland',
      state: 'Bedfordshire',
      country: 'United Kingdom',
      postcode: 'F1 0GW',
    },
    email: 'shaun.thompson@example.com',
    login: {
      password: 'uJc4wZ2J',
    },
    phone: '019467 66129',
    picture: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
]

module.exports = class Posts {
  constructor() {
    this.posts = [...postsData]
  }

  addPost = (newPost) => {
    return { ...DEFAULT_MODEL, ...newPost }
  }

  getPost = () => {
    return this.posts
  }
}
