import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import { ChangeEvent, KeyboardEvent, useState } from "react"

export type SearchingModuleProps = {
  searchItem: (searchValue: string) => void
}

export const SearchingModule = (props: SearchingModuleProps) => {
  const [search, setSearch] = useState("")
  const { searchItem } = props
  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearchHandler()
    }
  }

  const onClickSearchHandler = () => {
    searchItem(search)
    setSearch("")
  }

  return (
    <div>
      <TextField
        label="search"
        autoComplete="off"
        variant="standard"
        value={search}
        onChange={onChangeSearchHandler}
        onKeyDown={onKeyPressHandler}
      />
      <IconButton onClick={onClickSearchHandler} color="primary">
        <SearchIcon />
      </IconButton>
    </div>
  )
}
