import type { Book } from '../types';

export const books: Book[] = [
  {
    slug: 'badoga',
    title: 'Badoga',
    seriesLabel: 'Music Men · Volume I',
    year: '2019',
    format: 'Novel',
    status: 'Published',
    cover: '/images/badoga-cover.jpg',
    shortDescription:
      'An ordinary Bangalore engineer, an amateur boxer and an unlikely beginning for a distinctly Indian superhero.',
    description: [
      'Sartaj is an amateur boxer, a fitness obsessive, an engineer in Bangalore and a man still trying to understand who he wants to become.',
      'When the ordinary rules of his life begin to break, he is pulled into a larger world of power, danger and impossible choices. Badoga begins the Music Men series with action, humour, friendship and the messy making of a superhero.',
    ],
    amazonIndia: 'https://www.amazon.in/Music-Men-Badoga-Pankaj-Saini/dp/164650979X',
    details: [
      ['Series', 'Music Men, Volume I'],
      ['Format', 'Novel'],
      ['First published', '2019'],
      ['Language', 'English'],
    ],
    themes: ['Origin story', 'Bangalore', 'Friendship', 'Power and responsibility'],
  },
  {
    slug: 'marbella',
    title: 'Marbella',
    seriesLabel: 'Music Men · Volume II',
    year: '2020',
    format: 'Novel',
    status: 'Published',
    cover: '/images/marbella-cover.jpg',
    shortDescription:
      'A sharp, volatile and unapologetic female superhero steps into the storm at the heart of Music Men.',
    description: [
      'Marbella drinks, smokes, fights and refuses to fit neatly inside anyone else’s idea of a hero.',
      'The second Music Men novel widens the world introduced in Badoga while placing a difficult, powerful and deeply human woman at its centre. It is a story of anger, strength, damage and survival—with lightning close at hand.',
    ],
    amazonIndia: 'https://www.amazon.in/Pankaj-Saini/dp/163633749X',
    details: [
      ['Series', 'Music Men, Volume II'],
      ['Format', 'Novel'],
      ['First published', '2020'],
      ['Language', 'English'],
    ],
    themes: ['Female antihero', 'Power', 'Damage and survival', 'Action'],
  },
  {
    slug: 'ambakvid',
    title: 'Ambakvid',
    seriesLabel: 'A Music Men Origin Tale',
    year: '2023',
    format: 'Graphic novel',
    status: 'Published',
    cover: '/images/ambakvid-cover.jpg',
    shortDescription:
      'A quick-paced graphic novel about one of the strangest figures in the Music Men universe.',
    description: [
      'Ambakvid belongs to the same world as Badoga and Marbella, but his story reaches into older, stranger corners of that universe.',
      'Told as a compact graphic novel, this origin tale combines visual storytelling, mythology, transformation and the series’ peculiar sense of humour.',
    ],
    amazonIndia: 'https://www.amazon.in/Ambakvid-Music-Men-Origin-Tale/dp/B0CH8275KW',
    details: [
      ['Series', 'Music Men origin tale'],
      ['Format', 'Graphic novel'],
      ['First published', '2023'],
      ['Language', 'English'],
    ],
    themes: ['Origins', 'Transformation', 'Mythology', 'Visual storytelling'],
  },
  {
    slug: 'aragbat',
    title: 'Aragbat',
    seriesLabel: 'Music Men · Volume III',
    year: 'Coming soon',
    format: 'Novel',
    status: 'Upcoming',
    cover: '/images/aragbat-cover.svg',
    shortDescription:
      'Around 60,000 BCE, an unremarkable Aranav becomes entangled in the origins of the Music Men.',
    description: [
      'Long before the modern superheroes of Badoga and Marbella, Ether-aware entities called Blobs came to Earth. Their interference once ended an age. Later, they found another species susceptible to possession: the Aranavs.',
      'Aragbat is among the least powerful of them. He obeys the Code, understands little of Ether and rarely uses magic in excess. His journey across a prehistoric world will reveal how the Music Men began—and what their existence cost.',
    ],
    details: [
      ['Series', 'Music Men, Volume III'],
      ['Format', 'Novel'],
      ['Length', 'Approximately 83,000 words'],
      ['Setting', 'Around 60,000 BCE'],
    ],
    themes: ['Prehistory', 'Ether-magic', 'Evolution', 'Origins of Music Men'],
  },
];

export const bookBySlug = Object.fromEntries(books.map((book) => [book.slug, book]));
