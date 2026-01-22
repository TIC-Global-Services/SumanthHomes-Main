import { AmenitiesIcon } from "./AmenitiesIcon"

export const Amenities = () => {
  return (
    <div className='w-full'>
        <h2 className="text-2xl font-manrope font-semibold mb-4">Amenities</h2>

        <div className='flex gap-2'>
            <AmenitiesIcon />
            <AmenitiesIcon />
            <AmenitiesIcon />
            <AmenitiesIcon />
            <AmenitiesIcon />
            <AmenitiesIcon />
            <AmenitiesIcon />
        </div>
    </div>
  )
}
