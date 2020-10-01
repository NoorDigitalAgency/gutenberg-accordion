import { ButtonGroup, Button, Dashicon } from '@wordpress/components'

export const RadioGroup = ({ onClick, options, initialChecked, showIcons, label }) => (
  <ButtonGroup mode="radio" {...(! showIcons && {onClick: event => onClick(event)})}>
    {label && <p><strong>{label}</strong></p>}
    {options.map((option, index) => <Button
      {...(showIcons && {onClick: event => onClick(event)})}
      className={initialChecked === option && 'is-primary'}
      key={index}
      checked={initialChecked}
      value={option}
    >{showIcons ? <Dashicon icon={option} /> : option}</Button>)}
  </ButtonGroup>
);