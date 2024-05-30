import Image from "next/image";

import useUser from "@/hooks/useUser";

import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
    const { data: fetchedUser } = useUser(userId);

    return (
        <div>
            <div className="bg-neutral-700 h-44 relative">
                {fetchedUser?.coverImage && (
                    <Image 
                        src={fetchedUser.coverImage}
                        fill
                        alt="Cover Image"
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </div>
        </div>
    );
}

export default UserHero;