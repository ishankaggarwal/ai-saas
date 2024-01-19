import Image from "next/image";

type Props = {
  label: string;
};

function Empty({ label }: Props) {
  return (
    <div className="p-20 flex flex-col items-center justify-center">
      <div className="h-72 w-72 relative">
        <Image
          alt="Empty"
          width={400}
          height={400}
          priority={false}
          src={"/empty.png"}
        />
      </div>
      <p className="text-center text-sm font-light">{label}</p>
    </div>
  );
}

export default Empty;
