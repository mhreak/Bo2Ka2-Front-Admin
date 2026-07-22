import { Button } from "@/components/ui/button";
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
            <Button variant={"secondary"} size={"icon"}>
              <User2 className="text-secondary-foreground size-4" />

            </Button>
            
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className={"text-destructive flex justify-between"}>
            خروج از حساب کاربری
            <Button variant={"destructive"} size={"icon"}>
              <LogOut className="size-4" />
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
