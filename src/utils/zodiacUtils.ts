const signs = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'] as const
type ZodiacSign = typeof signs[number];

export function calculateZodiac(yearOfBirth: number): ZodiacSign {

  const index = (yearOfBirth - 2020) % 12;
  return signs[index < 0 ? index + 12 : index];
}