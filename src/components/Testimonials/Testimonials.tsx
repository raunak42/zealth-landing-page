import { TestimonyCard } from "./TestimonyCard";
import { testimonials } from "./testimonials";

export const Testimonials: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-10 xl:px-24 px-8 sm:pt-24 pt-16">
      <h1 className="text-2xl sm:text-5xl text-[#294b8a] font-semibold">
        Testimonials
      </h1>
      <div className="200 flex items-center justify-start overflow-x-auto">
        <div className="flex flex-row space-x-6 ">
          {testimonials.map((t, index) => {
            return (
              <TestimonyCard
                key={index}
                image={t.image}
                name={t.name}
                testimony={t.testimony}
                title={t.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
