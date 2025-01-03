import {currentAgeForBirthYear} from '../utils'

describe('currentAgeForBirthYear', ()=>{
  test('returns  the age of a person based on the year of birth', ()=>{
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const actualAge = currentYear - birthYear
    expect(ageOfPerson).toBe(actualAge);
  });
});

