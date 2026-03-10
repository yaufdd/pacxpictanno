// ── Контакты ────────────────────────────────────────────────────────
// Замени на свой номер и ссылку на Telegram
export const PHONE = '+7 (999) 000-00-00'
export const PHONE_LINK = 'tel:+79990000000'
export const TELEGRAM = 'https://t.me/'

// ── Товары нового дропа ──────────────────────────────────────────────
export const dropProducts = [
  {
    id: 'oversize-knit-001',
    name: 'OVERSIZE KNIT 001',
    category: 'Джемпер',
    price: '4 500',
    stock: 3,
    stockLabel: '3 осталось',
    image: '/catalog/jumper/jumper_separated/front.png',
    images: [
      { label: '1', src: '/catalog/jumper/jumper_separated/front.png' },
      { label: '2', src: '/catalog/jumper/jumper_separated/back.png' },
    ],
    desc: 'Оверсайз джемпер ручной вязки. Единственный экземпляр.\nМатериал: 100% шерсть. Цвет: тёмно-серый.\nМерки уточняются при заказе.',
    tags: ['Ручная работа', 'Единичный экземпляр', 'Оверсайз', 'Джемпер'],
    num: '001',
    featured: true,
  },
  {
    id: 'void-tee-002',
    name: 'VOID TEE 002',
    category: 'Футболка',
    price: '2 800',
    stock: 5,
    stockLabel: '5 осталось',
    image: '/catalog/t-shirts/IMG_1569.jpeg',
    desc: 'Оверсайз футболка из плотного хлопка.\nМалый тираж — 5 штук.\nМатериал: 100% хлопок. Цвет: чёрный.',
    tags: ['Ручная работа', 'Малый тираж', 'Оверсайз', 'Футболка'],
    num: '002',
    featured: false,
  },
  {
    id: 'grunge-shot-003',
    name: 'GRUNGE SHOT 003',
    category: 'Свитшот',
    price: '3 600',
    stock: 2,
    stockLabel: '2 осталось',
    image: '/catalog/switshot/IMG_1597.jpeg',
    desc: 'Свитшот с дистрессед-эффектом. Малый тираж — 2 штуки.\nМатериал: хлопок/полиэстер. Цвет: тёмно-серый/графит.',
    tags: ['Ручная работа', 'Малый тираж', 'Grunge', 'Свитшот'],
    num: '003',
    featured: false,
  },
  {
    id: 'dead-knit-004',
    name: 'DEAD KNIT 004',
    category: 'Шарф',
    price: '1 800',
    stock: 4,
    stockLabel: '4 осталось',
    image: '/catalog/scarf/IMG_1602.jpeg',
    desc: 'Вязаный шарф ручной работы. Тираж — 4 штуки.\nМатериал: акрил/шерсть. Размер: 200×30 см.',
    tags: ['Ручная работа', 'Малый тираж', 'Шарф', 'Аксессуар'],
    num: '004',
    featured: false,
  },
  {
    id: 'tote-void-005',
    name: 'TOTE VOID 005',
    category: 'Сумка',
    price: '2 200',
    stock: 6,
    stockLabel: '6 осталось',
    image: '/catalog/bag/IMG_1581.jpeg',
    desc: 'Тоут-сумка из плотной ткани с авторским принтом. Тираж — 6 штук.\nМатериал: холст. Размер: 40×40 см.',
    tags: ['Ручная работа', 'Малый тираж', 'Аксессуар', 'Сумка'],
    num: '005',
    featured: false,
  },
]

// ── Бестселлеры ───────────────────────────────────────────────────────
export const bestsellers = [
  {
    id: 'dead-tee-001',
    name: 'DEAD TEE 001',
    category: 'Футболка',
    price: '2 800',
    stock: 8,
    stockLabel: '8 осталось',
    image: '/catalog/t-shirts/IMG_1570.jpeg',
    desc: 'Оверсайз футболка из плотного хлопка. Авторская обработка.\nМатериал: 100% хлопок. Цвет: чёрный.',
    tags: ['Ручная работа', 'Малый тираж', 'Оверсайз', 'Хит'],
    num: '006',
    badge: 'Хит',
  },
  {
    id: 'wreck-tee-002',
    name: 'WRECK TEE 002',
    category: 'Футболка',
    price: '2 800',
    stock: 7,
    stockLabel: '7 осталось',
    image: '/catalog/t-shirts/IMG_1573.jpeg',
    desc: 'Футболка с дистрессед-деталями. Оверсайз крой.\nМатериал: 100% хлопок. Малый тираж.',
    tags: ['Ручная работа', 'Малый тираж', 'Оверсайз', 'Футболка'],
    num: '007',
    badge: null,
  },
  {
    id: 'ghost-tee-003',
    name: 'GHOST TEE 003',
    category: 'Футболка',
    price: '2 800',
    stock: 6,
    stockLabel: '6 осталось',
    image: '/catalog/t-shirts/IMG_1578.jpeg',
    desc: 'Оверсайз футболка с авторской обработкой ткани.\nМатериал: 100% хлопок. Малый тираж.',
    tags: ['Ручная работа', 'Малый тираж', 'Оверсайз', 'Футболка'],
    num: '008',
    badge: null,
  },
  {
    id: 'void-shot-001',
    name: 'VOID SHOT 001',
    category: 'Свитшот',
    price: '3 600',
    stock: 5,
    stockLabel: '5 осталось',
    image: '/catalog/switshot/IMG_1600.jpeg',
    desc: 'Оверсайз свитшот из тяжёлого флиса. Авторская обработка.\nМатериал: хлопок/полиэстер. Малый тираж.',
    tags: ['Ручная работа', 'Малый тираж', 'Оверсайз', 'Хит'],
    num: '009',
    badge: 'Хит',
  },
]

// ── Lookbook ──────────────────────────────────────────────────────────
export const lookbookImages = [
  '/catalog/t-shirts/IMG_1575.jpeg',
  '/catalog/t-shirts/IMG_1582.jpeg',
  '/catalog/bag/IMG_1580.jpeg',
  '/catalog/switshot/IMG_1601.jpeg',
  '/catalog/t-shirts/IMG_1596.jpeg',
  '/catalog/t-shirts/IMG_1598.jpeg',
]

// ── Все товары (для поиска по id) ─────────────────────────────────────
export const allProducts = [...dropProducts, ...bestsellers]
