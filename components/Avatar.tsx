import { useCallback } from "react";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";



interface AvatarProps{
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const { data: fetchedUser } = useUser(userId);
    const router = useRouter();

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${userId}`;

        router.push(url);
    }, [router, userId]);

    return (
        <div>
            
        </div>
    );
}

export default Avatar;