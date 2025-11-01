import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { useRef, useState } from 'react'

const ThePottDropdownPage = () => {
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [isOn, setIsOn] = useState(false)

  return (
    <Container width="md">
      <RoundBox padding="xxl">
        <Vstack>
          <Button
            ref={anchorRef}
            className="relative"
            onClick={() => setIsOn(!isOn)}
          >
            누르면 드롭다운
          </Button>
          {/* <div ref={anchorRef}>asdfasdf</div> */}
          <p>왜 안 됨</p>
          {anchorRef.current && (
            <Dropdown isOn={isOn} anchorButton={anchorRef.current} />
          )}
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default ThePottDropdownPage
