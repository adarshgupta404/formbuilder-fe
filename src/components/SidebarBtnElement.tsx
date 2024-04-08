import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SidebarBtnElement = ({ formElement }: { formElement: FormElement }) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      variant={"outline"}
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={cn(
        "flex flex-col gap-2 w-[120px] h-[120px] cursor-grab",
        draggable.isDragging && "ring-2 ring-primary"
      )}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className=" text-xs">{label}</p>
    </Button>
  );
};


export const SidebarBtnElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      variant={"outline"}
      className={cn("flex flex-col gap-2 w-[120px] h-[120px] cursor-grab")}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className=" text-xs">{label}</p>
    </Button>
  );
};
export default SidebarBtnElement;
