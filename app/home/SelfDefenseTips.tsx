import { Hand, Eye, ChevronsDown, Wind } from "lucide-react";

export default function SelfDefenseTips() {
  return (
    <div className="flex flex-col p-8 gap-4">
      <h2 className="text-2xl font-bold ">Self-Defense Tutorials</h2>
      <p className="text-muted-foreground">
        Learn essential self-defense techniques to protect yourself.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Hand className="w-12 h-12" />
          Basic Strike
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Eye className="w-12 h-12" />
          Situational Awareness
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <ChevronsDown className="w-12 h-12" />
          De-escalation Technique
        </div>
        <div className="flex flex-col items-center flex-wrap p-2 shadow-xl rounded-box bg-neutral text-neutral-content">
          <Wind className="w-12 h-12" />
          Escape Technique
        </div>
      </div>
    </div>
  );
}
