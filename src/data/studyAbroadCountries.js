import { destinations } from './destinations';

const countryDetails = {
  UK: {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    flag: '\u{1F1EC}\u{1F1E7}',
    visa: 'Student visa requirements depend on your course and circumstances.',
    intakes: ['September', 'January', 'May'],
    livingCost: 'Varies by city, accommodation and lifestyle.',
    keyHighlights: [
      'A wide choice of universities and course lengths.',
      'Dedicated international student support at many institutions.',
      'Major cities with established student communities.',
    ],
    popularCourses: ['Business', 'Computing', 'Engineering', 'Health Sciences'],
  },
  USA: {
    slug: 'united-states',
    name: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    visa: 'A student visa is generally required; eligibility depends on your program.',
    intakes: ['August', 'January', 'May'],
    livingCost: 'Varies widely by state, city and campus.',
    keyHighlights: [
      'Broad program choice across public and private universities.',
      'Flexible study pathways and campus experiences.',
      'Strong options for research and specialist subjects.',
    ],
    popularCourses: ['Business', 'Computer Science', 'Engineering', 'Data Science'],
  },
  Canada: {
    slug: 'canada',
    name: 'Canada',
    flag: '\u{1F1E8}\u{1F1E6}',
    visa: 'Study permit requirements depend on your course and institution.',
    intakes: ['September', 'January', 'May'],
    livingCost: 'Varies by province, city and accommodation.',
    keyHighlights: [
      'A broad range of colleges and universities.',
      'Welcoming campus communities and student services.',
      'Study options across large cities and regional locations.',
    ],
    popularCourses: ['Business', 'IT', 'Engineering', 'Hospitality'],
  },
  Australia: {
    slug: 'australia',
    name: 'Australia',
    flag: '\u{1F1E6}\u{1F1FA}',
    visa: 'Student visa requirements depend on your course and circumstances.',
    intakes: ['February', 'July', 'November'],
    livingCost: 'Varies by city, accommodation and lifestyle.',
    keyHighlights: [
      'Universities and vocational programs across major cities.',
      'A strong focus on practical learning in many fields.',
      'International student support at many institutions.',
    ],
    popularCourses: ['Business', 'IT', 'Engineering', 'Nursing'],
  },
  Germany: {
    slug: 'germany',
    name: 'Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
    visa: 'Visa requirements vary by nationality, course and program language.',
    intakes: ['April', 'October'],
    livingCost: 'Varies by city and housing; confirm current requirements before applying.',
    keyHighlights: [
      'A diverse selection of public and private institutions.',
      'Study opportunities in English and German, depending on the program.',
      'Well-known pathways in technical and applied subjects.',
    ],
    popularCourses: ['Engineering', 'Computer Science', 'Business', 'Natural Sciences'],
  },
  Europe: {
    slug: 'europe',
    name: 'Europe',
    flag: '\u{1F30D}',
    visa: 'Requirements depend on the destination country and your program.',
    intakes: ['Varies by country and institution'],
    livingCost: 'Varies significantly by country and city.',
    keyHighlights: [
      'Compare study options across multiple countries.',
      'Choose from a wide mix of languages, programs and campus settings.',
      'Plan applications around each country’s own entry requirements.',
    ],
    popularCourses: ['Business', 'Engineering', 'Design', 'International Relations'],
  },
};

export const studyAbroadCountries = destinations.map((destination) => ({
  ...destination,
  ...countryDetails[destination.country],
}));