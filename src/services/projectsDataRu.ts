import { IProject } from '../interfaces/IProject';

export const projectsDataRu: IProject[] = [
  {
    code: 'presentation',
    imageSmall: 'images/projects/presentation_small.png',
    imageMedium: 'images/projects/presentation_medium.png',
    images: [],
    nameShort: 'презентация',
    name: 'презентация проектов',
    shortDescription: 'Список проектов для презентации.',
    fullDescription: [
      'Список проектов содержит описание проекта, перечень использованных технологий, ссылки на демонстрационную версию и на репозиторий проекта в GitHub.',
      'Демонстрационные версии сделаны или в GitHub Actions или в GitHub Pages.',
    ],
    technology: [
      { image: 'images/technology/react48.png', name: 'React' },
      { image: 'images/technology/ts48.png', name: 'TypeScript' },
      { image: 'images/technology/sass48.png', name: 'Sass' },
      { image: 'images/technology/bem48.png', name: 'BEM' },
    ],
    technologyAdditional: [
      { image: 'images/technology/react-router.svg', name: 'React Router' },
    ],
    comment: '',
    state: 'inProgress',
    demo: 'https://abratsiuk.github.io/projects-presentation/',
    repo: 'https://github.com/abratsiuk/projects-presentation',
  },
  {
    code: 'p5.todos',
    imageSmall: 'images/projects/p5.todos_small.png',
    imageMedium: 'images/projects/p5.todos_medium.png',
    images: [
      'images/projects/p5.todos_02.jpg',
      'images/projects/p5.todos_03.jpg',
    ],
    nameShort: 'todos',
    name: 'todos',
    shortDescription: 'React TypeScript Todo App',
    fullDescription: [
      'Todo приложение на React и TypeScript.',
      'Оптимизировано для уменьшения количества ререндеров.',
    ],
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/ts32.png', name: 'TypeScript' },
      { image: 'images/technology/sass32.png', name: 'Sass' },
      { image: 'images/technology/bem32.png', name: 'BEM' },
    ],
    technologyAdditional: [],
    comment: 'Благодарен за макет и предложенный UI сайту TodoMVC.',
    state: 'inProgress',
    demo: '#',
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
      'images/projects/p4.uazdao_5.jpg',
      'images/projects/p4.uazdao_6.jpg',
      'images/projects/p4.uazdao_7.jpg',
      'images/projects/p4.uazdao_8.jpg',
    ],
    nameShort: 'книжка',
    name: 'книжка',
    shortDescription:
      'Проект посвящен шуточной философии Уаздао в книгах Павла Иевлева',
    fullDescription: [
      'Уаздао это практическая философия работы со сложными системами.',
      'Автор книги, Павел Иевлев, писатель-фантаст и редактор сайта автолюбителей. Машина УАЗ469 послужила автору символом процесса медитации. Как он пишет, эта машина всегда едет, всегда ломается, ее можно всегда починить, но она никогда не может быть отремонтировано до конца. Эта книга одна из книг фантастической серии о множественных Вселенных.',
    ],
    technology: [
      { image: 'images/technology/react32.png', name: 'React' },
      { image: 'images/technology/ts32.png', name: 'TypeScript' },
      { image: 'images/technology/sass32.png', name: 'Sass' },
      { image: 'images/technology/bem32.png', name: 'BEM' },
    ],
    technologyAdditional: [
      { image: 'images/technology/react-router.svg', name: 'React Router' },
    ],
    comment: '',
    state: 'preparing',
    demo: '#',
    repo: 'https://github.com/abratsiuk/p4.uazdao',
  },
  {
    code: '01.shop',
    imageSmall: 'images/projects/01.shop_small.png',
    imageMedium: 'images/projects/01.shop_medium.png',
    images: ['images/projects/01.shop_2.jpg', 'images/projects/01.shop_3.jpg'],
    nameShort: 'shop',
    name: 'react shop',
    shortDescription: 'Учебный проект React Shop',
    fullDescription: [
      'Простейший пример магазина на React.',
      'CSS организован с использованием библиотеки materializecss.',
    ],
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
    comment:
      'Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих + 3 проекта в портфолио".',
    state: 'preparing',
    demo: '#',
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
    nameShort: 'food',
    name: 'react food',
    shortDescription: 'Учебный проект React Food',
    fullDescription: [
      'Простенькое приложение о еде на React',
      'CSS организован с использованием библиотеки materializecss.',
    ],
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
    comment:
      'Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих + 3 проекта в портфолио".',
    state: 'preparing',
    demo: '#',
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
    nameShort: 'movie',
    name: 'react movie',
    shortDescription: 'Учебный проект React Movie',
    fullDescription: [
      'Маленькое приложение о фильмах на React',
      'CSS организован с использованием библиотеки materializecss.',
    ],
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
    comment:
      'Учебный проект по курсу Михаила Непомнящего: "React с нуля для начинающих + 3 проекта в портфолио".',
    state: 'preparing',
    demo: '#',
    repo: 'https://github.com/abratsiuk/01.react.movie',
  },
];
