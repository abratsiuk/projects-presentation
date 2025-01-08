import { IProject } from '../interfaces/IProject';

export const projectsDataRu: IProject[] = [
  {
    code: 'p5.todos',
    imageSmall: 'images/projects/p5.todos_small.png',
    imageMedium: 'images/projects/p5.todos_medium.png',
    images: [
      'images/projects/p5.todos_01.jpg',
      'images/projects/p5.todos_02.jpg',
      'images/projects/p5.todos_03.jpg',
    ],
    name: 'todos',
    shortDescription: 'React TypeScript Todo App',
    fullDescription:
      'Этот проект демонстрирует работу с задачами и списками на React и TypeScript.',
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/ts32.png', name: 'TypeScript' },
      { image: 'images/technology/sass32.png', name: 'Sass' },
      { image: 'images/technology/bem32.png', name: 'BEM' },
    ],
    technologyAdditional: [],
    comment: `Благодарность за макет и предложенный UI сайту TODOMVC. Код не использован, там он вообще на классах.`,
    state: 'inProgress',
    pages: '#',
    repo: 'https://github.com/abratsiuk/p5.react.ts.scss.todo',
  },

  {
    code: 'p4.uazdao',
    imageSmall: 'images/projects/p4.uazdao_small.png',
    imageMedium: 'images/projects/p4.uazdao_medium.png',
    images: [
      'images/projects/p4.uazdao_0.jpg',
      'images/projects/p4.uazdao_1.jpg',
      'images/projects/p4.uazdao_2.jpg',
      'images/projects/p4.uazdao_3.jpg',
      'images/projects/p4.uazdao_4.jpg',
    ],
    name: 'Уаздао',
    shortDescription:
      'Посвящен шуточной философии Уаздао в книгах Павла Иевлева',
    fullDescription:
      'Проект исследует философию настройки программных систем, основанной на метафоре ремонта машины УАЗ469.',
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/ts32.png', name: 'TypeScript' },
      { image: 'images/technology/sass32.png', name: 'Sass' },
      { image: 'images/technology/bem32.png', name: 'BEM' },
    ],
    technologyAdditional: [
      { image: 'images/technology/react-router.svg', name: 'React Router' },
    ],
    comment: `Уаздао — форма принятия и понимания радости в ковырянии с конфигами Vite и прочего. Машина УАЗ469 стала символом для автора: всегда едет, всегда чинится, но никогда не будет полностью отремонтирована.`,
    state: 'preparing',
    pages: '#',
    repo: 'https://github.com/abratsiuk/p4.uazdao',
  },
  {
    code: '01.shop',
    imageSmall: 'images/projects/01.shop_small.png',
    imageMedium: 'images/projects/01.shop_medium.png',
    images: [
      'images/projects/01.shop_1.jpg',
      'images/projects/01.shop_2.jpg',
      'images/projects/01.shop_3.jpg',
    ],
    name: 'React Shop',
    shortDescription: 'Учебный проект React Shop',
    fullDescription: 'Магазин на React.',
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/js32.png', name: 'JavaScript' },
    ],
    technologyAdditional: [
      { image: 'images/technology/react-router.svg', name: 'React Router' },
      {
        image: 'images/technology/materialize.svg',
        name: 'css: materializecss',
      },
    ],
    comment: `Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих. +3 проекта в портфолио".`,
    state: 'preparing',
    pages: '#',
    repo: 'https://github.com/abratsiuk/01.react.shop',
  },
  {
    code: '01.food',
    imageSmall: 'images/projects/01.food_small.png',
    imageMedium: 'images/projects/01.food_medium.png',
    images: [
      'images/projects/01.food_1.jpg',
      'images/projects/01.food_2.jpg',
      'images/projects/01.food_3.jpg',
    ],
    name: 'React Food',
    shortDescription: 'Учебный проект React Food',
    fullDescription: 'Приложение о еде на React',
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/js32.png', name: 'JavaScript' },
    ],
    technologyAdditional: [
      { image: 'images/technology/react-router.svg', name: 'React Router' },
      {
        image: 'images/technology/materialize.svg',
        name: 'css: materializecss',
      },
    ],
    comment: `Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих. +3 проекта в портфолио".`,
    state: 'preparing',
    pages: '#',
    repo: 'https://github.com/abratsiuk/01.react.food',
  },
  {
    code: '01.movie',
    imageSmall: 'images/projects/01.movie_small.png',
    imageMedium: 'images/projects/01.movie_medium.png',
    images: [
      'images/projects/01.movie_1.jpg',
      'images/projects/01.movie_2.jpg',
      'images/projects/01.movie_3.jpg',
    ],
    name: 'React Movie',
    shortDescription: 'Учебный проект React Movie',
    fullDescription: 'Приложение о фильмах на React',
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/js32.png', name: 'JavaScript' },
    ],
    technologyAdditional: [
      {
        image: 'images/technology/materialize.svg',
        name: 'css: materializecss',
      },
    ],
    comment: `Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих. +3 проекта в портфолио".`,
    state: 'preparing',
    pages: '#',
    repo: 'https://github.com/abratsiuk/01.react.movie',
  },
];
