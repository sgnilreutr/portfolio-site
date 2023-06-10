import type { ComponentImage } from 'gql/graphql'
import Image from 'next/image'

const ImageComponent = ({
  image,
}: NonNullable<Pick<ComponentImage, 'image'>>) => {
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
      height={height}
      width={width}
      className="border border-neutral-400/40"
    />
  )
}

export default ImageComponent
