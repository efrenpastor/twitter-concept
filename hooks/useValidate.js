const useValidate = () => {
  const validateTweet = (tweet) => {
    if (!tweet || tweet.length < 20) {
      throw new Error('Tweet must be at least 20 characters long')
    } else if (tweet.length > 280) {
      throw new Error('Tweet must be less than 280 characters')
    }
    return null
  }

  return { validateTweet }
}

export default useValidate
