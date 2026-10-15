import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Download, X, Smartphone } from "lucide-react";

const InstallPrompt = () => {
  const location = useLocation();

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Check whether Whisperly is already installed
    const checkInstalled = () => {
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)",
      ).matches;

      const isIOSStandalone = window.navigator.standalone === true;

      setIsInstalled(isStandalone || isIOSStandalone);
    };

    checkInstalled();

    // Receive the browser's native PWA installation prompt
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    // Hide the popup after successful installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPopup(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );

      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Show the popup on the home page unless dismissed before
  useEffect(() => {
    if (!isHomePage || isInstalled) {
      setShowPopup(false);
      return;
    }

    const dismissed = localStorage.getItem("whisperly-install-dismissed");

    if (!dismissed) {
      setShowPopup(true);
    }
  }, [isHomePage, isInstalled]);

  // Close popup and remember the user's choice
  const handleClose = () => {
    setShowPopup(false);

    localStorage.setItem("whisperly-install-dismissed", "true");
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Open Chrome's native installation dialog
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setShowPopup(false);
      }

      setDeferredPrompt(null);
      return;
    }

    // Fallback when Chrome hasn't provided a native prompt
    const isChrome =
      /Chrome/.test(navigator.userAgent) &&
      !/Edg|OPR|SamsungBrowser/.test(navigator.userAgent);

    if (isChrome) {
      alert(
        'To install Whisperly, open Chrome menu (⋮) and select "Install app" or "Add to Home screen".',
      );
    } else {
      alert(
        'Open your browser menu and look for "Install app" or "Add to Home Screen".',
      );
    }
  };

  // Don't show outside Home or when already installed
  if (!isHomePage || isInstalled || !showPopup) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-4 z-[9999] w-[calc(100%-2rem)] max-w-sm sm:bottom-6 sm:right-6">
      <div className="relative overflow-hidden rounded-2xl border border-[#DCE9D8] bg-[#FDFBF5] p-4 shadow-2xl shadow-[#173D32]/15">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close install popup"
          className="absolute right-3 top-3 rounded-full p-1.5 text-[#65766B] transition hover:bg-[#DCE9D8]"
        >
          <X size={18} />
        </button>

        {/* App information */}
        <div className="flex items-center gap-3 pr-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#064E3B] text-[#F8E7C9]">
            <Smartphone size={25} />
          </div>

          <div>
            <h3 className="font-semibold text-[#173D32]">Install Whisperly</h3>

            <p className="mt-1 text-sm leading-5 text-[#65766B]">
              Your anonymous messages, one tap away.
            </p>
          </div>
        </div>

        {/* Install button */}
        <button
          type="button"
          onClick={handleInstall}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#064E3B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0B6B50] active:scale-[0.98]"
        >
          <Download size={17} />
          Install App
        </button>

        {/* Fallback for browsers without native prompt */}
        {!deferredPrompt && (
          <p className="mt-2 text-center text-xs leading-5 text-[#65766B]">
            Open your browser menu and select "Install app" or "Add to Home
            Screen" if available.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstallPrompt;
