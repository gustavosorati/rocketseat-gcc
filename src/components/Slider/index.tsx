import { useState } from 'react'
import * as Styled from './styles'

interface Props {
  gallery: {
    id: string
    image: string
    petId: string
    photo_url: string
  }[]
}

export function Slider({ gallery }: Props) {
  const [selected, setSelected] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const loadImage = (index: number) => {
    if (index === selected) return

    setIsLoading(true)
    setSelected(index)
  }

  return (
    <Styled.Container>
      <Styled.ImageCard
        className={`${isLoading ? 'fade-out' : ''}`}
        src={gallery[selected]?.photo_url}
        alt={gallery[selected]?.image}
        onLoad={() => setIsLoading(false)}
      />

      <div>
        {gallery.map((photo, index) => (
          <Styled.ImageItem
            className={`${selected === index ? 'selected' : ''}`}
            key={photo.id}
            src={photo?.photo_url}
            alt={photo?.image}
            onClick={() => loadImage(index)}
          />
        ))}
      </div>
    </Styled.Container>
  )
}
