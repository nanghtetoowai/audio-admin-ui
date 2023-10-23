import React from "react";
import DashboardCard from "../../components/dashboard/DashboardCard";
import RecentPlaylists from "../../components/dashboard/RecentPlayLists";
import RecommandedLists from "../../components/dashboard/RecommandedLists";

export default function Dashboard() {
  return (
    <>
      {/* 2 cards */}
      <div className="d-flex px-3 gap-3">
        <div className="col-lg-6">
          <DashboardCard
            title="GET LOST"
            subtitle="in your music."
            style={{
              background: "linear-gradient(to top, #f953c6, #b91d73)",
              width: "95%",
            }}
          />
        </div>
        <div className="col-lg-6">
          <DashboardCard
            title="MELLOW"
            subtitle="beats."
            style={{
              background: "linear-gradient(to top, #56ccf2, #2f80ed)",
              width: "95%",
            }}
          />
        </div>

        {/* Recent play list & recommanded list */}
      </div>

      <div className="d-flex px-5 gap-2 mt-4">
        <div className="col-lg-6">
          <RecentPlaylists />
        </div>
        <div className="col-lg-6">
          <RecommandedLists />
        </div>
      </div>
    </>
  );
}
