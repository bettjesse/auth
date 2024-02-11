import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    const userFollowersCount = await db.user.count({
      where: {
        followingIds: {
          has: id,
        },
      },
    });

    // Include the followers count in the user object
    const userWithFollowersCount = {
      ...user,
      followersCount: userFollowersCount,
    };

    return userWithFollowersCount;
  } catch {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    return users;
  } catch {
    return null;
  }
};