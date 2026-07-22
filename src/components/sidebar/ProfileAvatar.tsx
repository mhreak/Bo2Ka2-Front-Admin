import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User2 } from "lucide-react";

const ProfileAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="rounded-full bg-secondary flex-center p-3 cursor-pointer">
            <User2 className="text-secondary-foreground" />
          </button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex justify-between">
            <p className="text-lg">{"mhreak"}</p>
            <div className="border-2 border-secondary rounded-full flex-center p-1">
              <User2 className="text-secondary size-4" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className={"text-destructive flex justify-between"}>
            خروج از حساب کاربری
            <div className="border-2 border-destructive rounded-full p-1 hover:text-black">
              <LogOut className="size-4" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
