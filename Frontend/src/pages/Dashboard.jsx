import React, { useEffect, useState } from "react";
import Stats from "../components/Stats";
import MessageCard from "../components/MessageCard";
import toast from "react-hot-toast";
import api from "../api/axios";
import { MessageCircle } from "lucide-react";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/messages");
        setMessages(response.data.messages);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Error fetching messages!",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);
  return (
    <div>
      <Stats />

      {/*   MESSAGE CARD   */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-500">
            Loading your whispers...
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-12 text-center">
            <MessageCircle size={32} className="mx-auto text-violet-400" />

            <h3 className="mt-3 font-semibold text-gray-900">
              No whispers yet
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Your anonymous messages will appear here.
            </p>
          </div>
        ) : (
          messages.map((item) => (
            <MessageCard
              key={item._id}
              _id={item._id}
              message={item.message}
              time={
                item.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : "Recently"
              }
              favourite={item.favourite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
