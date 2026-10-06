import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Bell,
  Check,
  Copy,
  Link2,
  Mail,
  MessageCircle,
  Send,
  Share2,
  User,
  X,
} from "lucide-react";

import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";

const Header = () => {
  const { user } = useContext(AuthContext);

  const [notifications, setNotifications] = useState([]);
  const [notificationOpen, setNotificationOpen] =
    useState(false);
  const [notificationLoading, setNotificationLoading] =
    useState(false);
  const [markingRead, setMarkingRead] = useState(false);

  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const notificationRef = useRef(null);

  const whisperlyLink = `https://whisperly.app/${user?.username || ""}`;

  /*
   * ============================
   * FETCH NOTIFICATIONS
   * ============================
   *
   * Change this endpoint only if
   * your backend uses another path.
   */
  const fetchNotifications = async () => {
    try {
      setNotificationLoading(true);

      const response = await api.get("/notifications");

      setNotifications(
        response.data.notifications || []
      );
    } catch (error) {
      console.error(
        "Notification fetch error:",
        error
      );
    } finally {
      setNotificationLoading(false);
    }
  };

  /*
   * Fetch notifications when
   * dashboard header mounts.
   */
  useEffect(() => {
    fetchNotifications();
  }, []);

  /*
   * Close notification/share popup
   * when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /*
   * ============================
   * MARK ALL AS READ
   * ============================
   */
  const handleMarkAllRead = async () => {
    if (unreadCount === 0) return;

    try {
      setMarkingRead(true);

      await api.patch("/notifications/read-all");

      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );

      toast.success("All notifications marked as read.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to mark notifications as read."
      );
    } finally {
      setMarkingRead(false);
    }
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  /*
   * ============================
   * COPY LINK
   * ============================
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        whisperlyLink
      );

      setCopied(true);

      toast.success("Link copied!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Unable to copy link.");
    }
  };

  /*
   * ============================
   * SHARE
   * ============================
   */
  const handleShare = (platform) => {
    const encodedLink =
      encodeURIComponent(whisperlyLink);

    const encodedText = encodeURIComponent(
      "Send me an anonymous message on Whisperly 💜"
    );

    let shareUrl = "";

    if (platform === "whatsapp") {
      shareUrl =
        `https://wa.me/?text=${encodedText}%20${encodedLink}`;
    }

    if (platform === "telegram") {
      shareUrl =
        `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;
    }

    if (platform === "x") {
      shareUrl =
        `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedLink}`;
    }

    if (platform === "email") {
      shareUrl =
        `mailto:?subject=Send me an anonymous message&body=${encodedText}%0A%0A${encodedLink}`;
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <header className="border-b border-violet-100 bg-white">

      <div className="px-4 py-5 sm:px-6 lg:px-8">

        {/* ================= TOP ================= */}
        <div className="mb-5 flex items-center justify-between gap-4">

          {/* Heading */}
          <div>
            <h1
              className="
                text-xl
                font-semibold
                tracking-tight
                text-gray-900
                sm:text-2xl
              "
            >
              Dashboard
            </h1>

            <p
              className="
                mt-1
                hidden
                text-sm
                text-gray-500
                sm:block
              "
            >
              Manage your anonymous messages and
              Whisperly link.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">

            {/* ================= NOTIFICATION ================= */}
            <div
              ref={notificationRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() =>
                  setNotificationOpen(
                    (prev) => !prev
                  )
                }
                className="
                  relative
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-violet-100
                  bg-white
                  text-gray-600
                  transition
                  hover:bg-violet-50
                  hover:text-violet-600
                "
              >
                <Bell size={18} />

                {unreadCount > 0 && (
                  <span
                    className="
                      absolute
                      right-1
                      top-1
                      flex h-4 min-w-4
                      items-center justify-center
                      rounded-full
                      bg-violet-600
                      px-1
                      text-[9px]
                      font-semibold
                      text-white
                    "
                  >
                    {unreadCount > 9
                      ? "9+"
                      : unreadCount}
                  </span>
                )}
              </button>

              {/* ================= NOTIFICATION BOX ================= */}
              {notificationOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-50
                    w-[320px]
                    overflow-hidden
                    rounded-2xl
                    border border-violet-100
                    bg-white
                    shadow-xl
                    shadow-violet-100/40
                  "
                >
                  {/* Header */}
                  <div
                    className="
                      flex items-center
                      justify-between
                      border-b border-gray-100
                      px-4 py-3.5
                    "
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        Notifications
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {unreadCount > 0
                          ? `You have ${unreadCount} unread ${
                              unreadCount === 1
                                ? "message"
                                : "messages"
                            }.`
                          : "You're all caught up."}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setNotificationOpen(false)
                      }
                      className="
                        flex h-7 w-7
                        items-center justify-center
                        rounded-lg
                        text-gray-400
                        hover:bg-violet-50
                        hover:text-violet-600
                      "
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="max-h-[300px] overflow-y-auto">

                    {notificationLoading ? (
                      <div className="px-4 py-8 text-center">
                        <p className="text-xs text-gray-400">
                          Loading notifications...
                        </p>
                      </div>
                    ) : notifications.length === 0 ? (
                      <div className="px-4 py-10 text-center">
                        <div
                          className="
                            mx-auto mb-3
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            bg-violet-50
                            text-violet-600
                          "
                        >
                          <Bell size={19} />
                        </div>

                        <p className="text-sm font-medium text-gray-700">
                          No notifications
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          New whispers will appear here.
                        </p>
                      </div>
                    ) : (
                      notifications.map(
                        (notification) => (
                          <div
                            key={notification._id}
                            className={`
                              border-b
                              border-gray-50
                              px-4 py-3.5
                              transition
                              ${
                                !notification.isRead
                                  ? "bg-violet-50/50"
                                  : "bg-white"
                              }
                            `}
                          >
                            <div className="flex gap-3">

                              <div
                                className={`
                                  flex h-9 w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  ${
                                    !notification.isRead
                                      ? "bg-violet-100 text-violet-600"
                                      : "bg-gray-100 text-gray-400"
                                  }
                                `}
                              >
                                <MessageCircle
                                  size={16}
                                />
                              </div>

                              <div className="min-w-0">
                                <p
                                  className={`
                                    text-xs leading-5
                                    ${
                                      !notification.isRead
                                        ? "font-medium text-gray-800"
                                        : "text-gray-500"
                                    }
                                  `}
                                >
                                  {notification.message ||
                                    "You received a new anonymous message."}
                                </p>

                                {notification.createdAt && (
                                  <p className="mt-1 text-[10px] text-gray-400">
                                    {new Date(
                                      notification.createdAt
                                    ).toLocaleString()}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    )}
                  </div>

                  {/* Footer */}
                  {notifications.length > 0 && (
                    <div
                      className="
                        border-t border-gray-100
                        bg-white
                        p-2
                      "
                    >
                      <button
                        type="button"
                        onClick={handleMarkAllRead}
                        disabled={
                          unreadCount === 0 ||
                          markingRead
                        }
                        className="
                          flex w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-3 py-2.5
                          text-xs
                          font-medium
                          text-violet-600
                          transition
                          hover:bg-violet-50
                          disabled:cursor-not-allowed
                          disabled:text-gray-400
                          disabled:hover:bg-transparent
                        "
                      >
                        <Check size={15} />

                        {markingRead
                          ? "Marking as read..."
                          : unreadCount === 0
                          ? "All notifications read"
                          : "Mark all as read"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ================= USER ================= */}
            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-xl
                border border-violet-100
                bg-white
                px-2.5 py-2
                transition
                hover:bg-violet-50
                sm:px-3
              "
            >
              <div
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-violet-600
                  text-xs font-semibold
                  text-white
                "
              >
                {user?.username
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </div>

              <span
                className="
                  hidden
                  max-w-[120px]
                  truncate
                  text-sm
                  font-medium
                  text-gray-800
                  sm:block
                "
              >
                {user?.username || "User"}
              </span>
            </button>
          </div>
        </div>

        {/* ================= LINK ================= */}
        <div className="relative">

          <div
            className="
              flex items-center gap-3
              rounded-2xl
              border border-violet-100
              bg-violet-50/50
              p-2
              sm:p-2.5
            "
          >
            {/* Icon */}
            <div
              className="
                hidden h-10 w-10
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                text-violet-600
                shadow-sm
                sm:flex
              "
            >
              <Link2 size={18} />
            </div>

            {/* Link */}
            <div className="min-w-0 flex-1 px-2 sm:px-0">
              <p
                className="
                  truncate
                  text-sm
                  font-medium
                  text-violet-900
                "
              >
                {whisperlyLink}
              </p>
            </div>

            {/* Copy */}
            <button
              type="button"
              onClick={handleCopy}
              className="
                flex h-9 w-9
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                text-gray-600
                shadow-sm
                transition
                hover:bg-violet-100
                hover:text-violet-600
              "
              title="Copy link"
            >
              {copied ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>

            {/* Share */}
            <button
              type="button"
              onClick={() =>
                setShareOpen((prev) => !prev)
              }
              className="
                flex h-9
                items-center gap-2
                rounded-xl
                bg-violet-600
                px-3
                text-sm font-medium
                text-white
                transition
                hover:bg-violet-700
              "
            >
              <Share2 size={16} />

              <span className="hidden sm:block">
                Share
              </span>
            </button>
          </div>

          {/* ================= SHARE POPUP ================= */}
          {shareOpen && (
            <div
              className="
                absolute
                right-0
                top-[calc(100%+10px)]
                z-40
                w-[280px]
                rounded-2xl
                border border-violet-100
                bg-white
                p-3
                shadow-xl
                shadow-violet-100/40
              "
            >
              <div className="mb-3 flex items-center justify-between px-2">
                <p className="text-sm font-semibold text-gray-900">
                  Share your link
                </p>

                <button
                  type="button"
                  onClick={() => setShareOpen(false)}
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-lg
                    text-gray-400
                    hover:bg-violet-50
                    hover:text-violet-600
                  "
                >
                  <X size={15} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    handleShare("whatsapp")
                  }
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-gray-100
                    px-3 py-2.5
                    text-sm text-gray-700
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleShare("telegram")
                  }
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-gray-100
                    px-3 py-2.5
                    text-sm text-gray-700
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  <Send size={17} />
                  Telegram
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleShare("x")
                  }
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-gray-100
                    px-3 py-2.5
                    text-sm text-gray-700
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  <span className="font-semibold">
                    𝕏
                  </span>
                  X
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleShare("email")
                  }
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-gray-100
                    px-3 py-2.5
                    text-sm text-gray-700
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  <Mail size={17} />
                  Email
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="
                  mt-2
                  flex w-full
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-violet-50
                  px-3 py-2.5
                  text-sm font-medium
                  text-violet-700
                  transition
                  hover:bg-violet-100
                "
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy link
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;