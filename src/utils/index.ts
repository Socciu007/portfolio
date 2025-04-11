// Parse content include string and math
export const parseContent = (text: string) => {
  const parts = text.split(/<span.*?>|<\/span>/).filter(Boolean)

  return parts.map((part) => {
    const isMath = part.trim().startsWith('\\[') && part.trim().endsWith('\\]')

    if (isMath) {
      const math = part.trim().slice(2, -2) // remove \\[ and \\]
      return math
    }

    return part.trim()
  })
}
