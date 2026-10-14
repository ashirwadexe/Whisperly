import React from "react";
import { Bell, Check, MessageCircle, X } from "lucide-react";

/**
 * Reusable notification dialog.
 *
 * Props:
 * - isOpen: whether the dialog is visible
 * - unreadCount: number of unread notifications
 * - markingRead: whether the read-all API request is running
 * - onClose: close the dialog
 * - onMarkAllRead: parent-owned action to mark all notifications as read
 *
 * API calls are handled by the parent component.
 */
const NotificationDialog = ({
  isOpen,
  unreadCount = 0,
  markingRead = false,
  onClose,
  onMarkAllRead,
}) => {
  if (!isOpen) return null;

  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#064E3B]/35 p-4 backdrop-blur-sm"
      onMouseDown={handleBackdropMouseDown}
      onTouchStart={(event) => {
        // Keep touch interactions inside the dialog from bubbling to the backdrop.
        if (event.target !== event.currentTarget) {
          event.stopPropagation();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notification-dialog-title"
        className="w-full max-w-sm overflow-hidden rounded-3xl border border-[#064E3B]/15 bg-white shadow-2xl shadow-[#064E3B]/15"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#064E3B]/10 px-5 py-4">
          <div>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#064E3B]/10 bg-[#F8E7C9] text-[#064E3B]">
              <Bell size={21} strokeWidth={1.8} />
            </div>

            <h2
              id="notification-dialog-title"
              className="text-lg font-bold tracking-tight text-[#064E3B]"
            >
              Notifications
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Stay updated with your whispers.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close notifications"
            className="touch-manipulation rounded-xl p-2 text-gray-400 transition-colors hover:bg-[#F8E7C9]/60 hover:text-[#064E3B] active:scale-95"
          >
            <X size={19} />
          </button>
        </div>

        {/* Notification Content */}
        <div className="p-5">
          {unreadCount > 0 ? (
            <button
              type="button"
              onClick={onMarkAllRead}
              disabled={markingRead}
              className="group flex w-full touch-manipulation items-start gap-3 rounded-2xl border border-[#064E3B]/15 bg-[#F8E7C9]/35 p-4 text-left transition-all duration-200 hover:border-[#064E3B]/30 hover:bg-[#F8E7C9]/55 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#064E3B]/10 bg-white text-[#064E3B] transition-colors group-hover:bg-[#064E3B] group-hover:text-[#F8E7C9]">
                <MessageCircle size={19} strokeWidth={1.8} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-6 text-[#064E3B]">
                  You have received {unreadCount}{" "}
                  {unreadCount === 1 ? "message" : "messages"}.
                </span>

                <span className="mt-1 block text-xs leading-5 text-gray-500">
                  {markingRead
                    ? "Marking all notifications as read..."
                    : "Tap this notification to mark all notifications as read."}
                </span>
              </span>

              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#064E3B]" />
            </button>
          ) : (
            <div className="py-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#064E3B]/10 bg-[#F8E7C9] text-[#064E3B]">
                <Check size={22} strokeWidth={2} />
              </div>

              <p className="text-sm font-semibold text-[#064E3B]">
                You're all caught up!
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                You have no unread notifications right now.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#064E3B]/10 bg-[#F8E7C9]/20 px-5 py-3">
          <p className="text-center text-[11px] leading-5 text-gray-500">
            Notifications are updated here every time you refresh or visit the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;