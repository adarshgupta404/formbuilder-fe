// "use client"
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/forms";
import { FaSpinner } from "react-icons/fa";
import { toast } from "@/components/ui/use-toast";


const SaveFormBtn = ({ id }: { id: string }) => {
  const { elements } = useDesigner();
  console.log(id);
  const [loading, startTransition] = useTransition();
  const updateFormContent = async () => {
    try {
      const JsonElements = JSON.stringify(elements);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/formbuilder/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jsoncontent: JsonElements }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        toast({
          title: "Success",
          description: "Form created successfully",
        });
        return data;
      } else {
        toast({
          title: "Error",
          description: "Error in saving form!",
          variant: "destructive",
        });
        return null;
      }
    } catch (error) {}
  };
  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => startTransition(updateFormContent)}
    >
      <HiSaveAs className="h-6 w-6 " />
      Save {loading && <FaSpinner className=" animate-spin h-6 w-6"/>}
    </Button>
  );
};

export default SaveFormBtn;
