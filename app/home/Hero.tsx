import { CircleAlert, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[70vh] lg:h-auto gap-4">
        <div className="flex flex-col justify-end lg:justify-center gap-4 w-full order-last lg:order-first">
          <div className="text-5xl font-bold hidden lg:block">Empowering Women's Safety</div>
          <div className="text-lg hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            accusantium veritatis impedit pariatur sit, laudantium quia minima
            qui doloribus eveniet.
          </div>
          <div className="grid grid-cols-1  2xl:grid-cols-[auto,1fr]  gap-4">
            <button className="btn btn-error h-20 w-full 2xl:btn-wide">
              <CircleAlert className="w-10 h-10 text-base-300" />
            </button>
            <button className="btn  h-20 flex-1">
              <div className="flex w-full gap-4">
                <MapPin className="w-10 h-10 min-w-10" />
                {/* Add a gps coordinate here.*/}
								<div className="flex gap-2 text-2xl items-center overflow-hidden">
                	<span>12.345678</span>
                	<span>12.345678</span>
                	<span>12.345678</span>
								</div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <img
            src="/images/placeholder.svg"
            alt="Placeholder"
            className="rounded-xl w-[60rem] fit-cover"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
