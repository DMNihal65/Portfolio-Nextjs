// ProjectCard.tsx

import React from "react";
import { HoverEffect, Card, CardTitle, CardDescription } from "../ui/card-hover-effect";

type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  const items = [
    { title: "Item 1", description: "Description for Item 1", link: "/item1" },
    { title: "Item 2", description: "Description for Item 2", link: "/item2" },
    // Add more items as needed
  ];

  return (
    <HoverEffect items={items}>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </HoverEffect>
  );
};

export default ProjectCard;
