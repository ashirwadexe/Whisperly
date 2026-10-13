import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  MousePointerClick,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import api from "../api/axios";
import toast from "react-hot-toast";

const Stats = () => {

  const [statsData, setStatsData] = useState({
    totalMessages: 0,
    messagesToday: 0,
    totalLinkVisits: 0
  });

  useEffect(() => {
    const dashboardStats = async () => {
      try {
        const response = await api.get("/messages/stats");
        setStatsData(response.data.stats);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
          error.message ||
          "Error loading dashboard stats!"
        )
      }
    };

    dashboardStats();
  },[]);

  const stats = [
    {
      label: "Total Whispers",
      value: statsData.totalMessages,
      icon: MessageCircle,
    },
    {
      label: "Link Visits",
      value: statsData.totalLinkVisits,
      icon: MousePointerClick,
    },
    {
      label: "Today",
      value: statsData.messagesToday,
      icon: Clock3,
    },
  ];


  return (
    <section className="mb-6">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                group
                rounded-2xl
                border border-violet-100
                bg-white
                p-3.5
                transition
                hover:border-violet-200
                hover:shadow-sm
                sm:p-5
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-2">

                <div
                  className="
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-violet-50
                    text-violet-600
                    transition
                    group-hover:bg-violet-100
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />
                </div>

                <ArrowUpRight
                  size={16}
                  className="
                    hidden
                    text-violet-200
                    transition
                    group-hover:text-violet-500
                    sm:block
                  "
                />
              </div>

              {/* Value */}
              <p
                className="
                  mt-4
                  truncate
                  text-xl
                  font-semibold
                  tracking-tight
                  text-gray-900
                  sm:mt-5
                  sm:text-2xl
                "
              >
                {stat.value}
              </p>

              {/* Label */}
              <p
                className="
                  mt-1
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