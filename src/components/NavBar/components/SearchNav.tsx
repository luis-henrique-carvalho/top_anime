import Button from "@/components/Button";

const SecundaryNav = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="w-full mt-10 h-auto overflow-x-auto flex justify-center " >
      <div className=" pb-5  space-x-8  overflow-x-scroll overflow-y-hidden whitespace-nowrap overscroll-contain scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
        {Array.from(alphabet).map((letter) => (
          <Button key={letter} value={letter} />
        ))}
      </div>
    </div>
  );
};

export default SecundaryNav;
