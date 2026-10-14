import React, { useContext } from "react";
import {
  UserRound,
  ShieldCheck,
  Bell,
  LockKeyhole,
  Trash2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const settingsGroups = [
    {
      title: "Account",
      description: "Manage your account information.",
      items: [
        {
          icon: UserRound,
          title: "Username",
          description: "Your unique identity on Whisperly.",
          value: user?.username || "Loading...",
        },
        {
          icon: LockKeyhole,
          title: "Email address",
          description: "The email associated with your account.",
          value: user?.email || "Not available",
        },
      ],
    },
    {
      title: "Privacy & notifications",
      description: "Understand how your Whisperly account works.",
      items: [
        {
          icon: ShieldCheck,
          title: "Anonymous messages",
          description:
            "People can send messages through your public Whisperly link without creating an account.",
          action: "Learn more",
          onClick: () =>
            window.open(
              "https://en.wikipedia.org/wiki/Online_anonymity",
              "_blank",
              "noopener,noreferrer"
            ),
        },
        {
          icon: Bell,
          title: "Notifications",
          description:
            "Check unread messages and notification updates from your dashboard.",
          action: "View notifications",
          onClick: () => navigate("/dashboard"),
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      {/* Page Header */}
      <div className="border-b border-[#064E3B]/15 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#064E3B]/10 bg-[#F8E7C9] text-[#064E3B]">
            <LockKeyhole size={21} strokeWidth={1.8} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#064E3B]">
              Settings
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your account and preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Account Overview */}
      <section className="mt-7 overflow-hidden rounded-2xl border border-[#064E3B]/15 bg-white">
        <div className="flex items-center gap-4 bg-[#F8E7C9]/35 p-5 sm:p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#064E3B] text-[#F8E7C9]">
            <UserRound size={26} strokeWidth={1.7} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-lg font-bold text-[#064E3B]">
              {user?.username || "Your account"}
            </p>
            <p className="mt-1 truncate text-sm text-gray-500">
              {user?.email || "Account information"}
            </p>
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full border border-[#064E3B]/15 bg-white px-3 py-1.5 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#064E3B]" />
            <span className="text-xs font-semibold text-[#064E3B]">
              Account
            </span>
          </div>
        </div>
      </section>

      {/* Settings Groups */}
      <div className="mt-8 space-y-8">
        {settingsGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[#064E3B]">
                {group.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {group.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#064E3B]/15 bg-white">
              {group.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 p-4 transition-colors sm:gap-4 sm:p-5 ${
                      index !== 0 ? "border-t border-[#064E3B]/10" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#064E3B]/10 bg-[#F8E7C9]/60 text-[#064E3B]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 break-words text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>

                      {item.value && (
                        <p className="mt-2 break-all text-sm font-semibold text-[#064E3B]">
                          {item.value}
                        </p>
                      )}

                      {item.action && (
                        <button
                          type="button"
                          onClick={item.onClick}
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] transition-colors hover:text-[#0A7659]"
                        >
                          {item.action}
                          {item.title === "Anonymous messages" ? (
                            <ExternalLink size={13} />
                          ) : (
                            <ChevronRight size={14} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Danger Zone */}
      <section className="mt-8">
        <div className="mb-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-red-600">
            Danger zone
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Actions that permanently affect your account.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-white p-4 sm:gap-4 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600">
            <Trash2 size={19} strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-gray-900">
              Delete account
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
              Permanently remove your account and associated data.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard/delete-account")}
            className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 sm:px-4 sm:text-sm"
          >
            Manage
            <ChevronRight size={15} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <p className="mt-8 text-center text-xs leading-5 text-gray-400">
        Your privacy matters. Thanks for being part of Whisperly.
      </p>
    </div>
  );
};

export default Settings;