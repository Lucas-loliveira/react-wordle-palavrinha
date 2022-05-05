export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Boa Mozin!', 'Você é muito boa!', 'Oxi, mas já!?']
export const GAME_COPIED_MESSAGE = 'Compartilha mozin! '
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Mo, tem que por mais letras'
export const WORD_NOT_FOUND_MESSAGE = 'Meu bem, essa palavra não existe, você está inventando'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'O quanto mozin é top'
export const GUESS_DISTRIBUTION_TEXT = 'como que foi até agora'
export const NEW_WORD_TEXT = 'Proxima palavrinha em '
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total de jogos'
export const SUCCESS_RATE_TEXT = 'Sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência de vitórias do mozin'
export const BEST_STREAK_TEXT = 'Melhor sequência'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
