
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
      className="fixed inset-0 z-[110] flex items-center justify-center bg-gray-950/40 p-4 backdrop-blur-sm"
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
        className="w-full max-w-sm overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-2xl shadow-violet-950/10"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Bell size={21} />
            </div>

            <h2
              id="notification-dialog-title"
              className="text-lg font-semibold text-gray-900"
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
            className="touch-manipulation rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={19} />
          </button>
        </div>

        <div className="p-5">
          {unreadCount > 0 ? (
            <button
              type="button"
              onClick={onMarkAllRead}
              disabled={markingRead}
              className="group flex w-full touch-manipulation items-start gap-3 rounded-2xl border border-violet-100 bg-violet-50/70 p-4 text-left transition hover:border-violet-200 hover:bg-violet-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <MessageCircle size={19} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-6 text-gray-800">
                  You have received {unreadCount}{" "}
                  {unreadCount === 1 ? "message" : "messages"}.
                </span>

                <span className="mt-1 block text-xs leading-5 text-gray-500">
                  {markingRead
                    ? "Marking all notifications as read..."
                    : "Tap this notification to mark all notifications as read."}
                </span>
              </span>

              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
            </button>
          ) : (
            <div className="py-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Check size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-800">
                You're all caught up!
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                You have no unread notifications right now.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-3">
          <p className="text-center text-[11px] leading-5 text-gray-400">
            Notification are updated here everytime you refresh or visit the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;
