import {Input} from './Input'

export const Header = ({findeValue, handleGangeFind}) => {
  return (
    <header className="h-16 flex items-center justify-between border-b">
      <a href="/">Vataga</a>
      <Input
        className="w-64"
        placeholder="Find game..."
        value={findeValue}
        onChange={handleGangeFind}
      />
    </header>
  )
}
