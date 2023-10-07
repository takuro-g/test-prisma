import { Prisma, User } from "@prisma/client";
import useSWR from "swr";

type UseUsers = () => {
  users: User[];
  isLoading: boolean;
  isError: boolean;
};

export const useUsers: UseUsers = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/users/", fetcher);

  const users = data;

  return {
    users,
    isLoading,
    isError: error,
  };
};
