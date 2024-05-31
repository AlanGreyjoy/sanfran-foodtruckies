// ** Icon Imports
import { Icon } from '@iconify/react'

const IconifyIcon = ({ icon, sx, ...rest }) => {
  const defaultColor = '#616161'

  return (
    <Icon
      icon={icon}
      fontSize='1.5rem'
      {...rest}
      style={{ pointerEvents: 'none', ...sx }}
    />
  )
}

export default IconifyIcon
