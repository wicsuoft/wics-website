export default function Stats() {
  return (
    <div className="bg-linear-to-b to-lighter-blue">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 px-4 sm:px-8 md:px-24 lg:px-40 xl:px-60 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-20 md:pb-40">
        <div
          className="hidden md:block bg-gray-200 w-130 h-90"
        />
 
        <div className="flex w-full md:w-100 flex-col justify-center flex-1">
          <p
            className="text-2xl sm:text-3xl md:text-4xl w-full md:w-150 text-dark-text font-light tracking-wide text-center font-poppins"
          >
            &quot;Your best and wisest refuge from all troubles is in your science.&quot;
          </p>
          <hr className="my-6 border-t border-dark-text" />
          <p className="text-2xl sm:text-3xl md:text-4xl text-right font-normal tracking-wide text-dark-text" >
            Ada Lovelace
          </p>
        </div>
      </div>
 
      <div className="flex flex-col sm:flex-col md:flex-row justify-around items-center md:items-start gap-6 sm:gap-8 md:gap-0 px-6 sm:px-10 md:px-16 pb-10 sm:pb-12 md:pb-14">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl md:text-5xl font-poppins font-black text-dark-text" >20+</span>
          <span className="text-xl sm:text-2xl md:text-3xl tracking-wide font-poppins text-dark-text" >members</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-dark-text" >100+</span>
          <span className="text-xl sm:text-2xl md:text-3xl tracking-wide font-poppins text-dark-text" >events done</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-dark-text" >2019</span>
          <span className="text-xl sm:text-2xl md:text-3xl tracking-wide font-poppins text-dark-text" >active since</span>
        </div>
      </div>
    </div>
  );
}