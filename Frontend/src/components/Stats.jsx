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
    totalLinkVisits: 0,
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
            "Error loading dashboard stats!",
        );
      }
    };

    dashboardStats();
  }, []);

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
              className="group border-2 border-[#064E3B] bg-white p-3.5 transition-colors duration-150 hover:bg-[#F8E7C9]/20 sm:p-5"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#F8E7C9] text-[#064E3B] transition-colors group-hover:bg-[#064E3B] group-hover:text-[#F8E7C9]">
                  <Icon size={18} strokeWidth={2} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="hidden text-[#064E3B]/40 transition-colors group-hover:text-[#064E3B] sm:block"
                />
              </div>

              {/* Value */}
              <p className="mt-4 truncate text-xl font-extrabold tracking-[-0.04em] text-[#064E3B] sm:mt-5 sm:text-2xl">
                {stat.value.toLocaleString()}
              </p>

              {/* Label */}
              <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-wide text-zinc-500 sm:text-xs lg:text-sm">
                {stat.label}
              </p>

              {/* Bottom accent */}
              <div className="mt-4 h-1 w-8 bg-[#F8E7C9] transition-all duration-200 group-hover:w-full group-hover:bg-[#064E3B]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;