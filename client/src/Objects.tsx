interface Pokemon {
  id: number
  name: {
    chinese: string
    english: string
    french: string
    japanese: string
  }
  type: string[]
  base: {
    Attack: number
    Defense: number
    HP: number
    'Sp. Attack': number
    'Sp. Defense': number
    Speed: number
  }
}

export { Pokemon }
