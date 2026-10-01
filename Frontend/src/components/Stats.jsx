import React from "react";
import {
  MessageCircle,
  MousePointerClick,
  Clock3,
} from "lucide-react";

const Stats = () => {
  const stats = [
    {
      label: "Total Whispers",
      value: "128",
      icon: MessageCircle,
    },
    {
      label: "Link Visits",
      value: "1,284",
      icon: MousePointerClick,
    },
    {
      label: "Today",
      value: "12",
      icon: Clock3,
    },
  ];

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                rounded-2xl
                border border-gray-200
                bg-white
                px-2.5 py-3.5
                shadow-sm
                sm:px-4 sm:py-4
                lg:p-5 cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  bg-violet-50
                  text-violet-600
                  sm:h-9 sm:w-9
                  sm:rounded-xl
                "
              >
                <Icon
                  size={16}
                  strokeWidth={1.9}
                  className="sm:h-[18px] sm:w-[18px]"
                />
              </div>

              {/* Value */}
              <p
                className="
                  mt-3
                  truncate
                  text-lg font-semibold
                  tracking-tight
                  text-gray-900
                  sm:mt-4
                  sm:text-2xl
                "
              >
                {stat.value}
              </p>

              {/* Label */}
              <p
                className="
                  mt-0.5
                  truncate
                  text-[10px]
                  font-medium
                  text-gray-500
                  sm:text-xs
                  lg:text-sm
                "
              >
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;