import { Link } from "react-router-dom"

export const NotFound404 = () => {
  return (
    <div
    className='
    w-full
    h-screen
    flex justify-center items-center
    '
    >
      <div className='
      text-center
      '>

        <h2 className='
        text-7xl md:text-9xl
        font-extrabold
        text-transparent
        bg-clip-text
        bg-gradient-to-tr from-[#B50404] to-[#e47979]
        mx-auto
        mb-4 md:mb-10
        '>Oops!</h2>

        <h2 className='
        text-2xl md:text-4xl
        mb-4
        font-medium
        uppercase
        '
        >404 - PAGE NOT FOUND</h2>

        <p className='
        w-[90%] md:w-[50%]
        mx-auto
        text-xl
        mb-4
        '>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>



        <Link to="/">
            <button className='
            text-sm md:text-xl
          bg-[#6a0404]
          hover:bg-[#B50404]
            py-4 md:py-4
            px-4 md:px-10
            rounded-full
            text-white
        '
            >GO TO HOMEPAGE</button>
        </Link>
        

      </div>
    </div>
  )
}
