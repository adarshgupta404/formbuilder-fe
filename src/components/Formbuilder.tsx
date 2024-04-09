"use client";
import { FormBuilder } from "@/types/@types";
import React, { useEffect, useState } from "react";
import SaveFormBtn from "./SaveFormBtn";
import PublishFormBtn from "./PublishFormBtn";
import PreviewDialogBtn from "./PreviewDialogBtn";
import Designer from "./Designer";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import useDesigner from "./hooks/useDesigner";
import { ImSpinner2 } from "react-icons/im";

const Formbuilder = ({ form }: { form: FormBuilder }) => {
  const { setElements } = useDesigner();
  const [isReady, setIsReady] = useState(false);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor);
  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements]);

  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ImSpinner2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }
  return (
    <DndContext sensors={sensors}>
      <main className="flex flex-col w-full ">
        <nav className="flex w-full justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn id={form._id} />
                <PublishFormBtn id={form._id}/>
              </>
            )}
          </div>
        </nav>
        <div className="flex flex-grow w-full h-[200px] items-center justify-center relative overflow-hidden no-scrollbar bg-[url(/hexagons.svg)] dark:bg-[url(/hexagons-dark.svg)] bg-accent">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default Formbuilder;
