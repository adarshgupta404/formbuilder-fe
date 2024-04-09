import React from "react";
import { Button } from "./ui/button";
import { MdPreview } from "react-icons/md";
import useDesigner from "./hooks/useDesigner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FormElements } from "./FormElements";
function PreviewDialogBtn() {
  const { elements } = useDesigner();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="gap-2">
          <MdPreview className="h-6 w-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-dvh h-dvh max-h-screen max-w-full flex flex-col flex-grow items-center justify-self-center p-4  bg-[url(/hexagons.svg)] dark:bg-[url(/hexagons-dark.svg)] overflow-y-auto">
        <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
          {elements.map((el) => {
            const FormComponent = FormElements[el.type].formComponent;
            return <FormComponent key={el.id} elementInstance={el} />;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewDialogBtn;
