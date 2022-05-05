import { Dialog } from "@headlessui/react";
import React from "react";

type IProps = {
  title: string;
  children: React.ReactElement;
  open: boolean;
  close: any;
};

export const Modal = ({
  title,
  children,
  open,
  close,
}: IProps): React.ReactElement => {
  return (
    <Dialog open={open} onClose={() => close(false)}>
      <div className="fixed inset-0 bg-black/70 z-[101]" aria-hidden="true" />
      <div className="absolute inset-0 m-auto w-[500px] h-[200px] items-center justify-center p-6 z-[102] bg-white">
        <Dialog.Title className=" w-full max-w-sm font-bold text-lg">
          {title}
        </Dialog.Title>
        <Dialog.Panel className=" w-full mt-3">
          <div className="cursor-default rounded-md ">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
