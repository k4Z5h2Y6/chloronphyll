type Props = {
  src: string;
}

export const Movie = ({ src }: Props) => {
  return (
    <>
      <div className='MovieO'>
        <video src={src} autoPlay muted loop controls />
      </div>

      <style jsx>{`
        .MovieO {
          min-width: 100%;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}