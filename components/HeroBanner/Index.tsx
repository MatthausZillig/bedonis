export const HeroBanner = () => {
  return (
    <section className="w-full h-screen">
      <div className="bg-hero-background bg-cover bg-no-repeat h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-9xl font-bold text-white">
          <h1 className="mb-6">
            CONSERVAS
          </h1>
          <div className="w-[12rem] h-[4rem] bg-white text-lg text-rose-400	flex justify-center items-center hover:opacity-75 cursor-pointer font-normal">PRODUTOS</div>
        </div>
      </div>
    </section>
  )
}