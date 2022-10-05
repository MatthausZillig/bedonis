import Image from 'next/image'

export const Header = () => {
  return (
    <header className="fixed top-2 left-0 w-screen flex justify-between items-center p-10">
      <div>
        <p className="text-base text-white font-semibold">PRODUTOS</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className="text-white font-bold mx-auto text-3xl">BEDONIS</p>
      </div>
      <div>
        <p className="text-base text-white font-semibold">CONTATO</p>
      </div>
    </header>
  )
}