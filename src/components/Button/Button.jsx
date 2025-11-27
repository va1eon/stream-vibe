import './Button.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    mode = '', // '' (default) | 'transparent' | 'black-10' | 'black-08' | 'black-06'
    label,
    isLabelHidden = false,
    iconName,
    iconsPosition = 'before', // 'before' | 'after'
    hasFillIcon,
    extraAttrs
  } = props
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}/>
  )

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconsPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconsPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button