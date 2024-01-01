export type HoroscopeSign =
  "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces"
  | "Unknown";

export function calculateHoroscope(birthday: string): HoroscopeSign {
  // Define the horoscope date ranges
  const horoscopeDates: { [key in HoroscopeSign]: [[number, number], [number, number]] } = {
    "Aries": [[3, 21], [4, 19]],
    "Taurus": [[4, 20], [5, 20]],
    "Gemini": [[5, 21], [6, 21]],
    "Cancer": [[6, 22], [7, 22]],
    "Leo": [[7, 23], [8, 22]],
    "Virgo": [[8, 23], [9, 22]],
    "Libra": [[9, 23], [10, 23]],
    "Scorpio": [[10, 24], [11, 21]],
    "Sagittarius": [[11, 22], [12, 21]],
    "Capricorn": [[12, 22], [1, 19]],
    "Aquarius": [[1, 20], [2, 18]],
    "Pisces": [[2, 19], [3, 20]],
    "Unknown": [[0, 0], [0, 0]]
  };

  // Parse the birthday
  const birthDate = new Date(birthday);
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  // Determine the horoscope sign
  for (const [sign, [[startMonth, startDay], [endMonth, endDay]]] of Object.entries(horoscopeDates)) {
    if ((birthMonth === startMonth && birthDay >= startDay) || (birthMonth === endMonth && birthDay <= endDay)) {
      return sign as HoroscopeSign;
    }
  }

  return "Unknown";
}