// export const LightSwatch = {
//   background: '#f2f4fc',
//   background_light: '#ffffff',
//   text_primary: '#343745',
//   text_secondary: '#75798c',
//   border_light: '#f2f4fc',
//   border_dark: '#dde0ee',
//   green_light: '#4BCA81',
//   link: '#008CFB',
//   link_active: '#0061AF',
//   info: '#54698D',
//   success: '#1DA362',
//   error: '#C23934',
//   warning: '#FFA778',
// };

// export const DarkSwatch = {
//   background: '#484b5b',
//   background_light: '#525566',
//   text_primary: '#ffffff',
//   text_secondary: '#dde0ee',
//   border_light: '#9b9eaf',
//   border_dark: '#343745',
//   green_light: '#4BCA81',
//   link: '#88c1ff',
//   link_active: '#5895D9',
//   info: '#bcd6f3',
//   success: '#6aeaa1',
//   error: '#FF585B',
//   warning: '#FFB75D',
// };

/**
 * Color usage:
 *
 * Primary background: Only used as the document/body background color.
 *
 * Secondary background: Darker version of primary color, used for input elements and layers further from the user.
 *
 * Tertiary background: Lihter version of primary color, used for sidebars, disabled state background,
 * and layers closer to the user.
 *
 * Primary text color: Used for the most important text, such as titles, important messages etc.
 *
 * Secondary text color: Used for the regular text such as paragraphs, footer links etc.
 *
 * Tertiary text color: Used for disabled text, del element and all the text with lowest highligh priority to the user.
 */
export const DarkSwatch = {
  background_primary: '#484b5b',
  background_secondary: '#343745',
  background_tertiary: '#525566',

  text_primary: '#ffffff',
  text_secondary: '#c5c8d4',
  text_tertiary: '#9b9eaf',
  border_primary: '#343745',
  border_hovered: '#222222',
  border_active: '',
};

export const LightSwatch = {
  background_primary: '#fdfdfd',
  background_secondary: '#f7f7f7',
  background_tertiary: '#ffffff',

  text_primary: '#343745',
  text_secondary: '#75798c',
  text_tertiary: '#eeeeee',

  border_primary: '#eeeeee',
  border_hovered: '',
  border_active: '',
};
