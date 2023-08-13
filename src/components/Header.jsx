import {TextField} from '@mui/material'

export const Header = ({findeValue, handleGangeFind}) => {
  return (
    <header className="py-4 flex items-center justify-between border-b">
      <a href="/">Vataga</a>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Find game..."
        value={findeValue}
        onChange={handleGangeFind}
      />
    </header>
  )
}
