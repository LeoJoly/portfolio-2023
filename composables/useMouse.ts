export default () => {
  const isHover = useState('isHover', () => false)

  const onMouseEnter = () => {
    if (isHover.value) return
    isHover.value = true
  }

  const onMouseLeave = () => {
    if (!isHover.value) return
    isHover.value = false
  }

  return {
    isHover,
    onMouseEnter,
    onMouseLeave
  }
}