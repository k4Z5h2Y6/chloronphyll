import Image from "next/image"

export const Header = () => {
  return (
    <>
      <div className='headerI'>
        <Image
          src='/Header/soil.png' 
          alt='image of soil'
          width={1920}
          height={540}
          //TODOヒロトに相談
          // layout='responsive'
          // objectFit='contain'
          // fill
        />
      </div>

      <style jsx>{`
        .headerI {
          width: 100vw;
          height: 100%;
          position: fixed;
          top: 80vh;
          right: 0;
          left: 0;
          z-index: 10;
          background-color: red;
        }
      `}</style>
    </>
  )
}