import { MainBanner } from 'gql/graphql'
import { ERROR_LOADING_IMAGE } from 'constants/globalConstants'
import Image from 'next/image'

interface HeroImageProps {
  image: MainBanner['image']
}

const HeroImage = ({ image }: HeroImageProps) => {
  if (!image) {
    return <span>{ERROR_LOADING_IMAGE}</span>
  }
  const { fileName, url, width, height } = image

  if (!url || !fileName) {
    return <span>{ERROR_LOADING_IMAGE}</span>
  }

  return (
    <figure className="mb-6">
      <Image
        alt={`An profile image of the owner of this portfolio, ${fileName.replace(
          '.png',
          ''
        )}`}
        className="shadow-2xl dark:brightness-80 w-48 h-48 rounded-full"
        height={height ?? 400}
        quality={100}
        src={url}
        width={width ?? 400}
      />
    </figure>
  )
}

export default HeroImage
