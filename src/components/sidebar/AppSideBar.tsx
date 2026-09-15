"use client";

import {
  Sidebar,
  SidebarHeader,
  useSidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import AppNavigatoin from "./AppNavigatoin";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const AppSideBar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" variant="inset" dir="rtl" side="right">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between",
        )}
      >
        <a className="flex items-center gap-2" href="/">
          <div
            className={cn(
              "relative aspect-square",
              isCollapsed ? "size-10" : "size-16",
            )}
          >
            <Image
              src={"/images/bodokado-logo.png"}
              alt="لوگوی بدو کادو"
              fill
            />
          </div>
          {!isCollapsed && (
            <span className="font-semibold text-sidebar-foreground text-xl dark:text-white">
              بدو کادو
            </span>
          )}
        </a>

        <motion.div
          animate={{ opacity: 1 }}
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row",
          )}
          initial={{ opacity: 0 }}
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          transition={{ duration: 0.8 }}
        >
          <SidebarTrigger
            render={
              <Button size={"icon"} variant={"accent"}>
                <Menu />
              </Button>
            }
          />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <AppNavigatoin />
      </SidebarContent>
      <SidebarFooter className="px-2">
        {/* <TeamSwitcher teams={teams} /> */}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
