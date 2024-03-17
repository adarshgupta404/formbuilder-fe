"use client"

export default function Page({ params }: { params: { formid: string } }) {
    // throw new Error("error") 
  return (
    <div>
      My Form: {params.formid}
    </div>
  );
}
