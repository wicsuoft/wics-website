export default function Stats() {
  return (
    <div className="bg-linear-to-b to-lighter-blue">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 sm:px-15 md:px-20 lg:px-50 xl:px-60 pt-10 sm:pt-14 px-15 md:pt-20 pb-12 sm:pb-20 md:pb-40 ">
        <div
          className="hidden lg:block bg-gray-200 w-100 h-70 shrink-0"
        />
 
        <div className="flex w-full flex-col justify-center flex-1 min-w-0">
          <p
            className="text-3xl sm:text-3xl md:text-4xl w-full max-w-150 self-center text-dark-text font-light tracking-wide text-center font-poppins"
          >
            &quot;Your best and wisest refuge from all troubles is in your science.&quot;
          </p>
          <hr className="my-6 border-t border-dark-text" />
          <p className="text-2xl sm:text-3xl md:text-4xl text-right font-normal tracking-wide text-dark-text" >
            Ada Lovelace
          </p>
        </div>
      </div>
 
      <div className="flex flex-col sm:flex-col md:flex-row justify-around items-center md:items-start gap-6 sm:gap-8 md:gap-0 px-6 sm:px-10 md:px-6 pb-20 sm:pb-20 md:pb-30">
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