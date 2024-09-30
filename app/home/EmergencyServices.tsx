import { Shield, Stethoscope, Flame } from "lucide-react";

interface EmergencyCardProps {
  title: string;
  icon: React.ReactNode;
  dialNumber: string;
  bgColor: string;
  borderColor: string;
  buttonColor: string;
}

function EmergencyCard({
  title,
  icon,
  dialNumber,
  bgColor,
  borderColor,
  buttonColor,
}: EmergencyCardProps) {
  return (
    <div
      className={`w-full ${bgColor} rounded-lg ${borderColor} text-neutral-content p-4 flex flex-col gap-4`}
    >
      <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
        <div>
          <div className="w-12 h-12">{icon}</div>
        </div>
        <div className="text-2xl font-bold z-10 hidden lg:block">{title}</div>
      </div>
      <button
        className={`mt-2 w-full ${buttonColor} rounded-lg font-bold py-3 text-lg hidden lg:block`}
      >
        Quick Dial {dialNumber}
      </button>
    </div>
  );
}

export default function EmergencyServices() {
  return (
    <div className="flex flex-col w-full p-8 pb-10 gap-4 bg-base-300">
      <h2 className="text-2xl font-bold hidden lg:block">Emergency Services</h2>
      <p className="text-muted-foreground hidden lg:block">
        Access our comprehensive emergency services directory for immediate assistance.
      </p>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full justify-center">
        <EmergencyCard
          title="Police"
          icon={<Shield className="w-full h-full" />}
          dialNumber="911"
          bgColor="bg-neutral"
          borderColor=""
          buttonColor="btn"
        />
        <EmergencyCard
          title="Fire Department"
          icon={<Flame className="w-full h-full" />}
          dialNumber="911"
          bgColor="bg-neutral"
          borderColor=""
          buttonColor="btn"
        />
        <EmergencyCard
          title="Ambulance"
          icon={<Stethoscope className="w-full h-full" />}
          dialNumber="911"
          bgColor="bg-neutral"
          borderColor=""
          buttonColor="btn"
        />
        <EmergencyCard
          title="Police"
          icon={<Shield className="w-full h-full" />}
          dialNumber="911"
          bgColor="bg-neutral"
          borderColor=""
          buttonColor="btn"
        />
      </div>
    </div>
  );
}
