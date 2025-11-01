import RoundBox from '../roundBox/RoundBox'

const Dropdown = ({
  isOn,
  anchorButton,
}: {
  isOn: boolean
  anchorButton: HTMLButtonElement
}) => {
  if (!isOn) {
    return null
  }
  const positionStyle = {
    top: anchorButton.offsetHeight + 4,
  }
  return (
    <RoundBox style={positionStyle} className="p-oz-xxl absolute">
      sdfsdf
    </RoundBox>
  )
}

export default Dropdown
