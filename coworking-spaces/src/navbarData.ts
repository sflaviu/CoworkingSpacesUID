export const SITE_VISITOR_NAVBAR: any = [
  {
    id: 1,
    name: 'JOIN US',
    submenu: [['BECOME MEMBER', 'location'], ['RENT A SPACE', 'spaceRental']],
    url: 'joinUs'
  },
  {
    id: 2,
    name: 'ABOUT',
    submenu: [['REVIEWS', 'review']],
    url: 'about'
  },
  {
    id: 3,
    name: 'EXPLORE HUBS',
    url: 'explore'
  },
  {
    id: 4,
    name: 'EVENTS',
    url: 'events'
  },
  {
    id: 5,
    name: 'BLOG',
    url: 'blog'
  }
];

export const REGULAR_USER_NAVBAR: any = [
  {
    id: 1,
    name: 'ABOUT',
    submenu: [['ABOUT US', 'membership'], ['REVIEWS', 'review'], ['MONTHLY GAME', 'gamification']],
    url: 'about'
  },
  {
    id: 2,
    name: 'JOIN US',
    submenu: [['BECOME MEMBER', 'location'], ['RENT A SPACE', 'spaceRental']],
    url: 'joinUs'
  },
  {
    id: 3,
    name: 'EXPLORE HUBS',
    url: 'explore'
  },
  {
    id: 4,
    name: 'EVENTS',
    url: 'events'
  },
  {
    id: 5,
    name: 'BLOG',
    submenu: [['CREATE POST', 'createPost']],
    url: 'blog'
  }
]

export const ADMIN_NAVBAR: any = [
  {
    id: 1,
    name: 'ABOUT',
    submenu: [['ABOUT US', 'membership'], ['REVIEWS', 'review'], ['MONTHLY GAME', 'gamification']],
    url: 'about'
  },
  {
    id: 2,
    name: 'JOIN US',
    submenu: [['BECOME MEMBER', 'join'], ['RENT A SPACE', 'spaceRental']],
    url: 'joinUs'
  },
  {
    id: 3,
    name: 'EXPLORE HUBS',
    url: 'explore'
  },
  {
    id: 4,
    name: 'EVENTS',
    url: 'events'
  },
  {
    id: 5,
    name: 'BLOG',
    submenu: [['CREATE POST', 'createPost']],
    url: 'blog'
  },
  {
    id: 6,
    name: 'MANAGE',
    submenu: [['VALIDATE REQUESTS', 'validate'], ['CREATE EVENT', 'createEvent'], ['ADD GAME', 'addGame']],
    url: 'manage'
  }
]