import React, { useContext, useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const DeleteAccount = () => {
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
      toast.success(response.data.message || "Account deleted successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error deleting account, Try again!",
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Delete account</h1>

        <p className="mt-2 text-sm text-gray-500">
          Permanently delete your Whisperly account and associated data.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-red-200 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-red-600" />

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-gray-900">
              Permanently delete your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Your account, messages, notifications, and associated data will be
              deleted. This action cannot be undone, and your deleted data
              cannot be recovered.
            </p>

            <button
              type="button"
              onClick={() => setShowDialog(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-lg
                         bg-red-600 px-4 py-2.5 text-sm font-medium
                         text-white transition hover:bg-red-700
                         focus:outline-none focus:ring-4 focus:ring-red-100"
            >
              <Trash2 size={16} />
              Delete account
            </button>
          </div>
        </div>
      </div>

      {showDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/40 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowDialog(false);
            }
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div
                className="flex h-10 w-10 items-center justify-center
                              rounded-full bg-red-50"
              >
                <Trash2 size={20} className="text-red-600" />
              </div>

              <button
                type="button"
                onClick={() => setShowDialog(false)}
                aria-label="Close dialog"
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100
                           hover:text-gray-700"
              >
                <X size={19} />
              </button>
            </div>

            <h2
              id="delete-dialog-title"
              className="mt-4 text-lg font-semibold text-gray-900"
            >
              Delete your account?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              This will permanently delete your account and its associated
              messages and notifications. You won't be able to recover them.
            </p>

            <div
              className="mt-6 flex flex-col-reverse gap-3 sm:flex-row
                            sm:justify-end"
            >
              <button
                type="button"
                onClick={() => setShowDialog(false)}
                className="rounded-lg border border-gray-200 px-4 py-2.5
                           text-sm font-medium text-gray-700
                           hover:bg-gray-50"
              >
                Cancel
              </button>

              {!isDeleting ? (
                <button
                  type="button"
                  onClick={handleAccountDelete}
                  disabled={isDeleting}
                  className="rounded-lg bg-red-600 px-4 py-2.5 text-sm
                           font-medium text-white hover:bg-red-700"
                >
                  Delete permanently
                </button>
              ) : (
                <Loader text="Deleting..." />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
