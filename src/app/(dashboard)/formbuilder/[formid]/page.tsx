import { GetFormById } from "@/actions/forms";
import Formbuilder from "@/components/Formbuilder";
import { FormBuilder } from "@/types/@types";

const Page = async ({ params }: { params: { formid: string } }) => {
  const formid = params.formid;
  const form : FormBuilder = await GetFormById(formid);
  return (
    <div className="w-full flex flex-grow">
      <Formbuilder form={form}/>
    </div>
  );
};
export default Page;
