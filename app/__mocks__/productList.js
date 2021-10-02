// GET /products Retrieves the list of products.

// Parameter  Type    Description
// page        integer  (Default 1) Selects the page of results to return.
// count      integer  (Default 5) Specifies how many results per page to return.

// Response -> Status: 200 OK

/* eslint-disable */
const products = [
  {
    id: 42366,
    campus: 'hr-lax',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:39:39.968Z',
    updated_at: '2021-08-13T14:39:39.968Z',
  },
  {
    id: 42367,
    campus: 'hr-lax',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description:
      "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2021-08-13T14:39:39.968Z',
    updated_at: '2021-08-13T14:39:39.968Z',
  },
  {
    id: 42368,
    campus: 'hr-lax',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description:
      "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-08-13T14:39:39.968Z',
    updated_at: '2021-08-13T14:39:39.968Z',
  },
  {
    id: 42369,
    campus: 'hr-lax',
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65.00',
    created_at: '2021-08-13T14:39:39.968Z',
    updated_at: '2021-08-13T14:39:39.968Z',
  },
  {
    id: 42370,
    campus: 'hr-lax',
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description:
      "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99.00',
    created_at: '2021-08-13T14:39:39.968Z',
    updated_at: '2021-08-13T14:39:39.968Z',
  },
];

export default products;
