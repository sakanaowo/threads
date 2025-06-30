"use client";
import { Button } from './ui/button';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';
// import { followUser } from '@/actions/user.action';
import toast from 'react-hot-toast';
function FollowButton() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Button
            size={"sm"}
            variant={"secondary"}
            // onClick={handleFollow}
            disabled={isLoading}
            className="w-20"
        >
            {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
        </Button>
    );
}

export default FollowButton