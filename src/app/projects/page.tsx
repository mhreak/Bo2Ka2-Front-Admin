"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const Projects = () => {
  return (
    <div>
      Projects
      <Button
        onClick={() => {
          toast.success("پروژه با موفقیت اضافه شد");
        }}
      >
        open toest
      </Button>
    </div>
  );
};

export default Projects;
