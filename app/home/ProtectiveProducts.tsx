import { Volume, SprayCan, Key, Lightbulb } from "lucide-react";

export default function ProtectiveProducts() {
  return (
    <div className="flex flex-col p-8 gap-4">
      <h2 className="text-2xl font-bold">Protective Products</h2>
      <p className="text-muted-foreground">
        Explore our curated selection of safety products to protect yourself.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Volume className="w-12 h-12" />
          Personal Alarm
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <SprayCan className="w-12 h-12" />
          Pepper Spray
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Key className="w-12 h-12" />
          Self-Defense Keychains
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Lightbulb className="w-12 h-12" />
          Personal Safety Lights
        </div>
      </div>
    </div>
  );
}
