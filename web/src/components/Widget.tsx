import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4">
      <Popover.Panel>OLÁ A TODOS</Popover.Panel>
      <Popover.Button className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden duration-1000 ease-in-out group-hover:max-w-[100px]">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
