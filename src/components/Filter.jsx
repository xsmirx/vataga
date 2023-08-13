import {Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@mui/material'

export const Filter = ({
  time,
  difficulty,
  players,
  handleTime,
  handleDifficulty,
  handlePlayers,
}) => {
  return (
    <div className="flex justify-between py-4 border-b">
      <FormControl>
        <FormLabel>Время</FormLabel>
        <RadioGroup onChange={handleTime} value={time}>
          <FormControlLabel value="30" control={<Radio />} label="30 мин" />
          <FormControlLabel value="60" control={<Radio />} label="60 мин" />
          <FormControlLabel value="120" control={<Radio />} label="120 мин" />
          <FormControlLabel value="240+" control={<Radio />} label="240+ мин" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Сложность</FormLabel>
        <RadioGroup onChange={handleDifficulty} value={difficulty}>
          <FormControlLabel value="1" control={<Radio />} label="Легкая" />
          <FormControlLabel value="2" control={<Radio />} label="Средняя" />
          <FormControlLabel value="3" control={<Radio />} label="Сложная" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Количество игроков</FormLabel>
        <RadioGroup onChange={handlePlayers} value={players}>
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5+" control={<Radio />} label="5+" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
