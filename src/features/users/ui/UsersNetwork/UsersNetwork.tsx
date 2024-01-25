import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { AppRootState } from "app/store"
import { useAppDispatch, User } from "common"
import { CustomPagination, UserCard, UsersFilter, usersThunks } from "features"
import s from "./UsersNetwork.module.css"
import { appActions, FilterUsersType } from "app"
import { SearchingModule } from "common"

export const UsersNetwork = () => {
  const users = useSelector<AppRootState, User[]>((state) => state.usersStore.users)
  const totalCountUsers = useSelector<AppRootState, number>((state) => state.usersStore.totalCount)
  const dispatch = useAppDispatch()
  const PaginationPage = useSelector<AppRootState, number>((state) => state.app.pagination.page)
  const PaginationCount = useSelector<AppRootState, number>((state) => state.app.pagination.count)
  const PaginationTerm = useSelector<AppRootState, string>((state) => state.app.term)

  const initialValueFilterUsers = useSelector<AppRootState, FilterUsersType>((state) => state.app.filterUsers)

  useEffect(() => {
    dispatch(
      usersThunks.getUsers({
        friend: initialValueFilterUsers === "followed" ? true : undefined,
        page: PaginationPage,
        count: PaginationCount,
        term: PaginationTerm,
      }),
    )
  }, [initialValueFilterUsers, PaginationPage, PaginationCount, PaginationTerm])

  const searchItemHandler = (searchValue: string) => {
    dispatch(appActions.setSearchTerm({ term: searchValue }))
  }

  return (
    <div className={s.usersNetworkWrapper}>
      <UsersFilter initialValueFilterUsers={initialValueFilterUsers} />
      <SearchingModule searchItem={searchItemHandler} />
      {users.map((user, userIndex) => {
        return (
          <UserCard
            userIndex={userIndex}
            key={user.id}
            followed={user.followed}
            id={user.id}
            name={user.name}
            photos={user.photos}
            status={user.status}
          />
        )
      })}
      <CustomPagination
        totalCount={totalCountUsers}
        paginationPage={PaginationPage}
        paginationCount={PaginationCount}
      />
    </div>
  )
}
