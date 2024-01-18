import Image from "next/image";

function Loader() {
  return (
    <div className="bg-gray-50 w-full flex flex-col gap-y-8 items-center justify-center">
      <div className="animate-spin pt-2">
        <Image alt="Loading..." src={"/logo.png"} width={50} height={50} />
      </div>
      <p className="gap-y-2 text-sm font-light my-auto pb-2">
        Genius is thinking...
      </p>
    </div>
  );
}

export default Loader;
