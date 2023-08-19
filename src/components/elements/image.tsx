import Image from 'next/image'

import type { ComponentImage } from 'gql/graphql'
import classNames from 'lib/classNames'

interface ImageComponentProps {
  image: ComponentImage['image'] | null
  noDefaultStyles?: boolean
  customSize?: number
  className?: string
}

const ImageComponent = ({
  image,
  noDefaultStyles = false,
  customSize,
  className = undefined,
}: ImageComponentProps) => {
  if (!image) {
    return null
  }
  const { title, url, height, width } = image
  if (!height || !url || !width) {
    return null
  }
  return (
    <Image
      src={url}
      alt={title ?? ''}
      height={customSize || height}
      width={customSize || width}
      className={classNames(
        !noDefaultStyles && 'border border-neutral-400/40',
        className
      )}
    />
  )
}

export default ImageComponent
