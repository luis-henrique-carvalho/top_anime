import Button from "@/components/Button";

const SecundaryNav = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="w-full mt-7 h-auto overflow-x-auto flex justify-center ">
      <div className=" pb-3  space-x-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap overscroll-contain scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
        <Button value="Todos" />
        {Array.from(alphabet).map((letter) => (
          <Button key={letter} value={letter} />
        ))}
      </div>
    </div>
  );
};

export default SecundaryNav;
