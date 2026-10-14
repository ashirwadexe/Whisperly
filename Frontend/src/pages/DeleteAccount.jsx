import React, { useContext, useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import usePageTitle from "../hooks/usePageTitle";

const DeleteAccount = () => {
  usePageTitle("Delete Account");
  const [showDialog, setShowDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleAccountDelete = async (e) => {
    e.preventDefault();

    try {
      setIsDeleting(true);

      const response = await api.delete("/auth/delete");

      await logout();
      setShowDialog(false);

      navigate("/login", { replace: true });

      toast.success(
        response.data.message || "Account deleted successfully!"
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error deleting account, Try again!"
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      {/* Page Header */}
      <div className="border-b border-[#064E3B]/15 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-[#064E3B]">
          Delete account
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Permanently delete your Whisperly account and associated data.
        </p>
      </div>

      {/* Danger Zone */}
      <div className="group mt-8 rounded-2xl border border-red-200 bg-white p-5 transition-all duration-200 hover:border-red-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.05)] sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600">
            <AlertTriangle size={20} strokeWidth={1.8} />
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-bold text-gray-900">
              Permanently delete your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Your account, messages, notifications, and associated data will
              be deleted. This action cannot be undone, and your deleted data
              cannot be recovered.
            </p>

            <button
              type="button"
              onClick={() => setShowDialog(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 active:scale-[0.98]"
            >
              <Trash2 size={16} />
              Delete account
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#064E3B]/35 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !isDeleting) {
              setShowDialog(false);
            }
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            className="w-full max-w-md overflow-hidden rounded-3xl border border-[#064E3B]/10 bg-white p-6 shadow-2xl shadow-[#064E3B]/15"
          >
            {/* Dialog Header */}
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600">
                <Trash2 size={20} strokeWidth={1.8} />
              </div>

              <button
                type="button"
                onClick={() => !isDeleting && setShowDialog(false)}
                disabled={isDeleting}
                aria-label="Close dialog"
                className="rounded-xl p-2 text-gray-400 transition-colors hover:bg-[#F8E7C9]/60 hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X size={19} />
              </button>
            </div>

            {/* Dialog Content */}
            <h2
              id="delete-dialog-title"
              className="mt-5 text-lg font-bold tracking-tight text-[#064E3B]"
            >
              Delete your account?
            </h2>

            <p
              id="delete-dialog-description"
              className="mt-2 text-sm leading-6 text-gray-500"
            >
              This will permanently delete your account and its associated
              messages and notifications. You won't be able to recover them.
            </p>

            {/* Warning Note */}
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50/70 px-3.5 py-3">
              <p className="text-xs font-medium leading-5 text-red-700">
                This action is permanent. Please make sure you're ready to
                continue.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowDialog(false)}
                disabled={isDeleting}
                className="rounded-xl border border-[#064E3B]/15 px-4 py-2.5 text-sm font-semibold text-[#064E3B] transition-colors hover:bg-[#F8E7C9]/40 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAccountDelete}
                disabled={isDeleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isDeleting ? (
                  <Loader text="Deleting..." />
                ) : (
                  <>
                    <Trash2 size={16} />
                    Delete permanently
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;