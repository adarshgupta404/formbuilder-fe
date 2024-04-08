import React from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish} from "react-icons/md";

const PublishFormBtn = () => {
  return (
    <Button variant={"outline"} className="gap-2 text-white bg-gradient-to-r from-rose-400 to-red-500">
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
};

export default PublishFormBtn;
