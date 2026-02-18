import Home from "./pages/home";

export default function Main() {
  return (
    <div className="w-full px-8 md:px-20 lg:px-32 xl:px-44">
      <main className="mx-auto w-full max-w-custom bg-background px-6 py-16 md:px-10">
        <Home />
      </main>
    </div>
  );
}
