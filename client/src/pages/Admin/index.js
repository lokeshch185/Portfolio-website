import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Experiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
import AdminAwards from "./AdminAwards";
import AdminUGProjects from "./AdminUGProjects";
import AdminTalks from "./AdminTalks"; 
import AdminORActivites from "./AdminORActivities";
import AdminJournalppr from "./AdminJournalppr";
import AdminfProjects from "./AdminfProjects";
import AdminConference from "./AdminConference";
import AdminCurrentPositions from "./AdminCurrentPositions";
import AdminPastPositions from "./AdminPastPositions";

const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <h1 className="text-3xl text-primary">Portfolio Admin</h1>
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <Experiences />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <AdminProjects />
            </TabPane>
            <TabPane tab="Courses" key="5">
              <AdminCourses />
            </TabPane>
            <TabPane tab="Contact" key="6">
              <AdminContact />
            </TabPane>
            <TabPane tab="Awards" key="7">
              <AdminAwards />
            </TabPane>
            <TabPane tab="UG Projects" key="8">
              <AdminUGProjects />
            </TabPane>
            <TabPane tab="Talks" key="9">
              <AdminTalks />
            </TabPane>
            <TabPane tab="OR Activities" key="10">
              <AdminORActivites />
            </TabPane>
            <TabPane tab="Journal Papers" key="11">
              <AdminJournalppr />
            </TabPane>
            <TabPane tab="F Projects" key="12">
              <AdminfProjects />
            </TabPane>
            <TabPane tab="Conferences" key="13">
              <AdminConference />
            </TabPane>
            <TabPane tab="Current Position" key="14">
              <AdminCurrentPositions />
            </TabPane>
            <TabPane tab="Past Position" key="15">
              <AdminPastPositions />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
