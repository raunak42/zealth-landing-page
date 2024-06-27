import { Card } from "./Card";

export const Cards: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap w-full justify-between px-8 xl:px-24  ">
      <Card
        imageSrc="/patient.svg"
        title="Patients"
        description="Manage your symptoms while at home and get real time alerts when to contact your doctor"
      />
      <Card
        imageSrc="/doctor.svg"
        title="Doctor"
        description="Save time and get actionable insights personalized for each patients"
      />
      <Card
        imageSrc="/insurance.svg"
        title="Insurer"
        description="Reduce claims with proactive timely interventions"
      />
      <Card
        imageSrc="/trials.svg"
        title="Clinical trials"
        description="Real world evidence for faster and cost effective clinical trial"
      />
    </div>
  );
};
